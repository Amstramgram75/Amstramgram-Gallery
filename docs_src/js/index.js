import main from './common/main'
import aside from './common/aside'
import code from './common/code'
import Prism from 'prismjs'
import AmstramgramGallery from '../../src/amstramgramGallery.js'

const
	w = window,
	d = document

//Set all the used variables names as custom keywords for Prism
//This has to be done before DOM load
const myVars = ['AmstramgramGallery']
Prism.languages.insertBefore('javascript', 'constant', {
	'my-vars': {
		pattern: new RegExp("\\b(?:" + myVars.join("|") + ")\\b(?=}?)(?!:)")
	}
})

w.addEventListener("load", function () {
	main()
	aside()
	code()
	init()
}, false)

function init() {
	//Change the default caption font family from Verdana (inherit from body style) to Arial
	AmstramgramGallery.defaultOptions = {captionFontFamily: 'Arial, Helvetica, Liberation Sans, FreeSans, sans-serif'}
	
	AmstramgramGallery
		.on('amst_gallery-open amst_gallery-close', function (e) {
			//e.current is an object containing information about the currently displayed image
			//e.gallery is a reference to the currently opened gallery instance
			//e.eventName is the name of the emitted event : in this case, 'amst_gallery-open' or 'amst_gallery-close'
			//Some logs (open dev tools to check the output):
			let msg = `Gallery named "${e.gallery.name}" is now `
			msg += (e.eventName == 'amst_gallery-open') ? 'opened' : 'closed'
			console.log(`%c${msg}`, 'color: green; font-weight:bold;')
		})
		.on('amst_gallery-opening amst_gallery-closing', function (e) {
			//Select all the direct body descendants except the gallery container
			const content = Array.from(d.querySelectorAll('body > *:not(.amst_gallery-overlay)'))
			let msg = `Gallery named "${e.gallery.name}" is `
			if (e.eventName == 'amst_gallery-opening') {
				//Add a blur class to the content elements
				content.forEach(el => el.classList.add('blur'))
				msg += 'opening'
			} else {
				//Remove the blur class
				content.forEach(el => el.classList.remove('blur'))
				msg += 'closing'
			}
			console.log(`%c${msg}`, 'color: green; font-weight:bold;')
		})


	new AmstramgramGallery('.demo-basic-gallery > div')


	new AmstramgramGallery('.demo-responsive-gallery a', {
		//Change all default options
		name: 'demoResponsiveGallery',
		closeTitle: 'Fermer',
		closeAriaLabel: 'Fermer',
		previousTitle: 'Précédent',
		previousAriaLabel: 'Précédent',
		nextTitle: 'Suivant',
		nextAriaLabel: 'Suivant',
		overlayBackground: '#fffffff0',
		navItemsBackground: '#eee',
		navItemsColor: '#600001',
		navItemsBackgroundHover: '#aaa',
		navItemsColorHover: '#a10304',
		captionBackground: '#eeeeeec2',
		captionColor: '#444'
	}, function () {
		//Function called after gallery initialization.
		//this = gallery instance
		//Some logs (open dev tools to check the output):
		const s1 = 'color: green; font-weight:bold;', s2 = 'color: inherit;'
		console.log(`%cGallery named "${this.name}" has been initialized with these options :`, s1)
		Object.keys(this.options).forEach(k => {
			console.log(`%c	- ${k}:` + ` %c ${this.options[k]}`, s1, s2)
		})
		//Listen to the amst_gallery-load event emitted each time the gallery loads an image
		this.on('amst_gallery-load', onImgLoad)
	})


	const buttonGallery = new AmstramgramGallery('.demo-button-gallery a')
		.on('amst_gallery-opening', updateArrowsTitles)
		//Listen to amst_gallery-change event emitted each time the displayed image changes
		.on('amst_gallery-change', function (e) {
			//Some logs (open dev tools to check the output):
			const s1 = 'color: green; font-weight: bold;', s2 = 'color: inherit;'
			console.log(`%cDisplayed image in gallery named "${this.name}" has changed\n	from :	%c${e.previous.currentSrc}\n	%cto :	%c${e.current.currentSrc}`, s1, s2, s1, s2)
			updateArrowsTitles.call(this, e)
		})
		//Listen to the amst_gallery-load event emitted each time the gallery loads an image
		.on('amst_gallery-load', onImgLoad)

	function updateArrowsTitles(e) {
		const previousTitle = this.items[e.current.previous].alt
		const nextTitle = this.items[e.current.next].alt
		this.options = { previousTitle: previousTitle, previousAriaLabel: previousTitle, nextTitle: nextTitle, nextAriaLabel: nextTitle }
	}

	//A click on the button opens the gallery
	d.querySelector('.demo-button-gallery button').addEventListener('click', _ => buttonGallery.show())


	new AmstramgramGallery('.demo-single-gallery a', function () { 
		this.on('amst_gallery-load', onImgLoad) 
	})

}

/**
 * @description Called each time an image has been loaded
 * 							Update the caption with the type and the dimensions 
 * 							of the displayed image
 */
function onImgLoad(e) {
	if (AmstramgramGallery.visible) {
		const
			item = e.current,
			//HTML figure element containing the image
			figures = item.container,
			//Get the image extension
			type = item.currentSrc.split('.').slice(-1)[0].toUpperCase(),
			width = item.width + 'px',
			height = item.height + 'px',
			text = `${width}&nbsp;/&nbsp;${height}.`
		//Update the caption
		figures.forEach(f => {
			if (f.querySelector('span.type')) f.querySelector('span.type').innerHTML = type + '&nbsp;'
			if (f.querySelector('span.dim')) f.querySelector('span.dim').innerHTML = text
		})
	}
}

