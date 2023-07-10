//noderesolve and commonjs are needed for prism.js
import noderesolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
//JS
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
//CSS
import css from 'rollup-plugin-postcss-amstramgram'
import postcssImport from 'postcss-import'
import postcssPresetEnv from 'postcss-preset-env'
import cssnano from 'cssnano'
//HTML
import html from 'rollup-plugin-posthtml-amstramgram'
import htmlinclude from 'posthtml-include'
import htmlnano from 'htmlnano'
//Assets
//Watch changes in assets and plugins folders
import watcher from 'rollup-plugin-watcher-amstramgram'
import fsExtra from 'fs-extra'//To empty prod folder when building for production
import copy from 'rollup-plugin-copy'//Copy assets folder from dev to prod folder
import replace from 'rollup-plugin-replace-amstramgram'
import path from 'path'
import reflect from '@alumna/reflect'//Mirroring "dev/assets" to "prod/assets"
import { minify } from "terser"

/**
 * @param {Buffer} send by rollup-plugin-copy in transform option
 * @returns code extracted and minified
 */
async function minifyJs(code) {
  let result = await minify(code.toString())
  return result.code
}

/**
 * @param {Buffer} send by rollup-plugin-copy in transform option
 * @returns code extracted and minified
 */
async function htmlNano(code) {
  let result = await html(code.toString())
  return result.code
}



const
  src = 'docs_src/',
  code = `${src}html/code/`,
  codeTransformedForPrism = `${src}html/codeTransformedForPrism/`,
  dev = 'docs_dev/',
  prod = 'docs/',
  app = 'src/',
  dist = 'dist/',
  dest = process.env.BUILD === 'development' ? dev : prod,
  theExports = [],
  //Babel basic configuration
  babelModule = {
    babelHelpers: 'bundled',
    plugins: [
      ['prismjs', {
        'languages': ['javascript', 'js-extras', 'jsdoc', 'html'],
      }]
    ]
  },
  //Babel configuration to support old browsers
  babelNoModule = Object.assign({
    presets: [
      [
        "@babel/preset-env"
      ]
    ]
  }, babelModule)

if (process.env.BUILD === 'package') {
  //Create dist if it does not exist, 
  fsExtra.ensureDirSync(dist)
  fsExtra.emptyDirSync(dist)
  theExports.push(
    {
      //amstramgramGallery.js
      // => dist/iife
      input: `${app}amstramgramGallery.js`,
      output: {
        file: `${dist}iife/amstramgramGallery.js`,
        format: 'iife',
        name: 'AmstramgramGallery'
      },
      plugins: [
        noderesolve(),
        babel({
          babelHelpers: 'bundled',
          presets: [
            [
              "@babel/preset-env"
            ]
          ]
        }),
        copy({
          targets: [
            //package.json
            // => dist
            {
              src: `${app}package.json`,
              dest: `${dist}`
            },
            //amstramgramGallery.js, amstramgramGalleryPolyfills.js, amstramgramGallery.css
            // => dist/src
            {
              src: `${app}*.{js,css}`,
              dest: `${dist}src`
            },
            //amstramgramGallery.css
            // => dist/css
            {
              src: `${app}amstramgramGallery.css`,
              dest: `${dist}css`
            },
            //amstramgramGalleryPolyfills.js
            // => dist/iife
            {
              src: `${app}amstramgramGalleryPolyfills.js`,
              dest: `${dist}iife`
            }
          ]
        }),
      ]
    },
    {
      //MINIFICATION
      //amstramgramGallery.js
      // => dist/iife/amstramgramGallery.min.js
      input: `${app}amstramgramGallery.js`,
      output:
      {
        file: `${dist}iife/amstramgramGallery.min.js`,
        format: 'iife',
        name: 'AmstramgramGallery'
      },
      plugins: [
        noderesolve(),
        babel({
          babelHelpers: 'bundled',
          presets: [
            [
              "@babel/preset-env"
            ]
          ]
        }),
        terser(),
        // amstramgramGallery.css
        // => dist/css/amstramgramGallery.min.css
        css({
          jobs: { from: `${app}`, to: `${dist}css`, rename: name => name + '.min' },
          plugins: [
            cssnano()
          ]
        }),
        copy({
          targets: [
            //amstramgramGalleryPolyfills.js
            // => dist/iife/amstramgramGalleryPolyfills.min.js
            {
              src: `${app}amstramgramGalleryPolyfills.js`,
              dest: `${dist}iife/`,
              transform: content => minifyJs(content),
              rename: (name, extension) => `${name}.min.${extension}`
            }
          ]
        }),
      ]
    },
  )


} else {
  if (process.env.BUILD === 'production') {
    //Create prod/assets if it does not exist, 
    fsExtra.ensureDirSync(`${prod}assets/`)
    const
      { res, err } = await reflect({
        src: `${dev}assets/`,
        dest: `${prod}assets/`,
      }),
      msg = err ? `\x1b[31m${err}` : `\x1b[33m${res}`//Directory "dev/assets" reflected to "prod/assets"
    console.log(msg)
    //Emptying all prod files and folders except assets directory
    fsExtra.readdirSync(prod).filter(file => file != 'assets').forEach(file => fsExtra.removeSync(path.resolve(prod + file)))
  }

  //FIRST ROLLUP TASK :
  //- bundle index.js in a module
  //- compile css (with minification if in production)
  //- compile html (with minification if in production)
  //- minify js if in production
  theExports.push(
    {
      input: `${src}js/index.js`,
      output:
      {
        file: `${dest}js/index.js`,
        format: 'esm',
        sourcemap: process.env.BUILD === 'development',
      },
      plugins: [
        noderesolve(),
        commonjs(),
        babel(babelModule),
        //Prerender
        html({
          jobs: { from: `${src}html/toRender/demo-button-gallery.html/`, to: code },
          processHook: 'buildStart',
          plugins: [
            htmlinclude({
              root: `${src}html/toRender/`
            })
          ]
        }),
        //Process HTML code for Prism
        replace({
          jobs: { from: `${code}*.html`, to: codeTransformedForPrism, rename: (name) => name + '.txt' },
          replace: [[/</g, '&lt;'], [/>/g, '&gt;']],
        }),
        //main.css && iife.css
        css({
          jobs: { from: `${src}css`, to: `${dest}css` },
          sourcemap: process.env.BUILD === 'development',
          plugins: [
            postcssImport(),
            postcssPresetEnv({ stage: 1 }),
            ...(process.env.BUILD === 'production' ? [cssnano()] : [])
          ]
        }),
        //index.html
        html({
          jobs: { from: `${src}index.html/`, to: dest },
          watch: true,
          plugins: [
            htmlinclude({
              root: `${src}html/`
            }),
            ...(process.env.BUILD === 'production' ? [htmlnano()] : [])
          ]
        }),
        html({
          jobs: { from: [`${src}iife.html`, `${src}polyfill-io.html`], to: dest },
          watch: true,
          plugins: [
            ...(process.env.BUILD === 'production' ? [htmlnano()] : [])
          ]
        }),
        copy(
          {
            targets: [
              //Minify src/amstramgramGalleryPolyfills.js` 
              //and doc_src/js/polyfills/polyfill.js`
              //to `${dest}js/polyfills/
              //for inclusion in iife.html
              {
                src: [
                  `${app}amstramgramGalleryPolyfills.js`,
                  `${src}js/polyfills/polyfills.js`
                ],
                dest: `${dest}js/polyfills/`,
                transform: content => minifyJs(content),
                rename: (name, extension) => `${name}.min.${extension}`
              },
            ],
            copyOnce: true
          }
        ),
        ...(process.env.BUILD === 'development' ?
          //DEVELOPMENT
          [
            watcher({
              files: [`${src}iife.html`, `${src}polyfill-io.html`, `${src}css/iife.css`],
            }),
          ]
          :
          //PRODUCTION : minify js
          [
            terser()
          ]
        )
      ],
      //Comment/Uncomment if you need
      watch: {
        clearScreen: process.env.BUILD === 'production',
      },
    }
  )

  //SECOND ROLLUP TASK : bundle index.js in IIFE format
  //for usage in index.html
  theExports.push(
    {
      input: `${src}js/index.js`,
      output: {
        file: `${dest}js/noModule/index.js`,
        format: 'iife'
      },
      watch: {
        clearScreen: process.env.BUILD === 'production'
      },
      plugins: [
        noderesolve(),
        commonjs(),
        babel(babelNoModule),
        ...(process.env.BUILD === 'production' ? [terser()] : []),
      ]
    }
  )

}

//Export rollup tasks
export default theExports