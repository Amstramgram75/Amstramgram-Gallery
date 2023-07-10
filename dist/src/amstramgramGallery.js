//https://amstramgram75.github.io/Amstramgram-Event-Emitter
import EE from 'Amstramgram-Event-Emitter/Light'
//https://amstramgram75.github.io/Amstramgram-Pointer-Detector
import PD from 'Amstramgram-Pointer-Detector'
//https://amstramgram75.github.io/Amstramgram-Swipe-Observer
import SO from 'Amstramgram-Swipe-Observer'

//JUST SHORTCUTS FOR MINIFICATION
const
  w = window,
  d = document,
  dE = d.documentElement,
  b = d.body,
  g = 'amst_gallery',
  on = (el, events, callback) => {
    if (el) events.split(' ').forEach(ev => el.addEventListener(ev, callback))
  },
  off = (el, event, callback) => {
    el.removeEventListener(event, callback)
  },
  $ = (el, query) => {
    return el.querySelector(query)
  },
  $$ = (el, query) => {
    return Array.from(el.querySelectorAll(query))
  },
  ins = (el, content, position = 'beforeend') => {
    el.insertAdjacentHTML(position, content)
  },
  check = n => {
    return typeof n !== "number" || !Number.isInteger(n) || n < 0
  }

export default class AG extends EE {

  /******************************************************
   *                                                    *
   *                        STATIC                      *
   *                                                    *
   *****************************************************/
  //STATIC #DEFAULTOPTIONS
  static #defaultOptions = {
    overlayBackground: 'rgba(0, 0, 0, 0.9)',
    navItemsBackground: 'rgba(33, 33, 33, 0.5)',
    navItemsBackgroundHover: 'rgba(33, 33, 33, 0.7)',
    navItemsColor: '#aaa',
    navItemsColorHover: '#ddd',
    captionBackground: 'rgba(0, 0, 0, 0.7)',
    captionColor: '#fff',
    captionFontFamily: 'inherit',
    captionFontSize: '1em',
    previousTitle: 'Previous',
    previousAriaLabel: 'Previous',
    nextTitle: 'Next',
    nextAriaLabel: 'Next',
    closeTitle: 'Close',
    closeAriaLabel: 'Close',
  }

  /**
   * @set defaultOptions
   * @description : set the class default options
   * @param {Object} opts
   *  @key {String} overlayBackground : content of the overlay background css property
   *                (Default: rgba(0, 0, 0, 0.9))
   *  @key {String} navItemsBackground : content of the navigation items 
   *                (close button, left and right arrows) background css property
   *                (Default: rgba(33, 33, 33, 0.5))
   *  @key {String} navItemsBackgroundHover : content of the navigation items 
   *                (close button, left and right arrows) background css property
   *                when hovered
   *                (Default: rgba(33, 33, 33, 0.5))
   *  @key {String} navItemsColor : color of the navigation items 
   *                (close button, left and right arrows)
   *                (Default: rgba(33, 33, 33, 0.5))
   *  @key {String} navItemsColorHover : color of the navigation items 
   *                (close button, left and right arrows) when hovered
   *                (Default: rgba(33, 33, 33, 0.5))
   *  @key {String} captionBackground : content of the captions
   *                background css property
   *                Default : rgba(0, 0, 0, 0.7)
   *  @key {String} captionColor : color of the captions
   *                Default : #fff
   *  @key {String} captionFontFamily : font-family of the captions
   *                Default : inherit
   *  @key {String} captionFontSize : font-size of the captions
   *                Default : 1em
   *  @key {String} previousTitle : title attribute of the left arrow
   *                (Default: 'Previous')
   *  @key {String} previousAriaLabel : aria-label attribute of the left arrow
   *                (Default: 'Previous')
   *  @key {String} nextTitle : title attribute of the right arrow
   *                (Default: 'Next')
   *  @key {String} nextAriaLabel : aria-label attribute of the right arrow
   *                (Default: 'Next')
   *  @key {String} closeTitle : title attribute of the close button
   *                (Default: 'Close')
   *  @key {String} closeAriaLabel : aria-label attribute of the close button
   *                (Default: 'Close')
   */
  static set defaultOptions(opts) {
    Object.keys(opts).filter(key => key in AG.#defaultOptions).forEach(key => AG.#defaultOptions[key] = opts[key])
  }

  /**
   * @get defaultOptions
   * @returns {Object}
   * @description : get the class default options
   */
  static get defaultOptions() {
    return { ...AG.#defaultOptions }
  }

  //STATIC #REGEXP
  // Regexp pattern to match image files
  static #regexp = /.+\.(gif|jpe?g|png|webp|avif)(\?(.*))?$/i

  /**
   * @set regexp
   * @param {RegExp} exp
   * @default : /.+\.(gif|jpe?g|png|webp|avif)(\?(.*))?$/i
   * @description : set the regular expression to filter 
   *                the allowed image extensions 
   *                of the image pointed by the anchor.
   */
  static set regexp(exp) {
    if (exp instanceof RegExp) AG.#regexp = exp
  }

  /**
   * @get regexp
   * @returns {RegExp}
   * @description : get the class regexp
   */
  static get regexp() {
    return AG.#regexp
  }

  //STATIC #GALLERIES
  //Array of instantiated galleries
  static #galleries = []

  /**
   * @get galleries
   * @returns {Array}
   * @description : returns an array of all the instantiated galleries
   */
  static get galleries() {
    return [...AG.#galleries]
  }

  //STATIC #NAMES
  static #names = new Set()

  /**
   * @get names
   * @returns {Set}
   * @description : returns a set of all the instantiated galleries names
   */
  static get names() {
    return new Set(AG.#names)
  }

  /**
   * @method getGalleryByName()
   * @param {String} n : name of the searched gallery
   * @returns the gallery instance whose name is n
   */
  static getGalleryByName(n) {
    return AG.#galleries.find(g => g.name == n)
  }

  //STATIC #OVERLAY
  //Store the overlay
  //document.body.querySelector(".amst_gallery-overlay")
  static #overlay

  /**
   * @get overlay
   * @returns {HTMLElement}
   * @description : returns the overlay HTMLElement
   */
  static get overlay() {
    return AG.#overlay
  }


  //static #CURRENTGALLERY
  //Store the currentGallery
  static #currentGallery

  /**
   * @get currentGallery
   * @returns {AmstramgramGallery}
   * @description : returns the current gallery
   */
  static get currentGallery() {
    return AG.#currentGallery
  }

  //STATIC #VISIBLE
  //Is the gallery visible ?
  static #visible = false

  /**
   * @get visible
   * @returns {Boolean}
   * @description : returns true if a gallery is opened
   */
  static get visible() {
    return AG.#visible
  }

  //STATIC #EMITTER
  //static private event emitter
  //Emits : 
  //  amst_gallery-opening
  //  amst_gallery-open
  //  amst_gallery-load
  //  amst_gallery-change
  //  amst_gallery-closing
  //  amst_gallery-close
  //
  static #emitter = new EE()

  //Mirror on function
  static on = (e, fn) => AG.#emitter.on(e, fn)

  //Mirror odd function
  static off = (e, fn) => AG.#emitter.off(e, fn)

  //Is a resize event running ?
  static #resizeRunning = false


  //STATIC #BUILD
  /**
   * Insert the overlay in the DOM
   * Called on the first instanciation
   * @param {Object} options 
   */
  static #build(options) {
    //body.insertAdjacentHTML('beforeend', content)
    //${g} = 'amst_gallery'
    ins(
      b,
      `
        <div class="${g}-overlay">
          <button class="${g}-nav-item ${g}-arrow ${g}-previous" aria-label="${options.previousAriaLabel}" title="${options.previousTitle}"><span></span></button>
          <button class="${g}-nav-item ${g}-arrow ${g}-next" aria-label="${options.nextAriaLabel}" title="${options.nextTitle}"><span></span></button>
          <button class="${g}-nav-item ${g}-close" aria-label="${options.closeAriaLabel}" title="${options.closeTitle}"><span><span></span><span></span></span></button>
        </div>
      `
    )
    //Initialize the static private property #overlay 
    //const overlay = (AG.#overlay = body.querySelector(".amst_gallery-overlay"))
    const overlay = (AG.#overlay = $(b, `.${g}-overlay`))
    //Initialize pointerDetector
    //If a mouse is detected, add the amst_gallery-mouse class to the overlay block
    //pointerDetector.class(`amst_gallery-mouse`, overlay)
    PD.class(`${g}-mouse`, overlay)

    //Set click listener to the close cross and the left and right arrows
    //overlay.querySelector(".amst_gallery-close").addEventListener...
    on($(overlay, `.${g}-close`), "click", AG.#hide)
    //overlay.querySelector(".amst_gallery-previous").addEventListener...
    on($(overlay, `.${g}-previous`), "click", _ => AG.#currentGallery.#prev())
    //overlay.querySelector(".amst_gallery-next").addEventListener...
    on($(overlay, `.${g}-next`), "click", _ => AG.#currentGallery.#next())

    //Set a new SwipeObserver on the overlay :
    //Swipe left go to next image
    //Swipe right go to previous image
    //Swipe down close the gallery
    //The slider is translated during swiping.
    new SO(overlay, { active: true })
    //When swiping begins, the slider abscisse is stored in the sliderOriginX variable
    let sliderOriginX = 0
    //overlay.addEventListener('swipe', ...
    //overlay.addEventListener('cancel', ...
    on(overlay, 'swipe cancel', e => {
      //Reset slideOriginX
      sliderOriginX = 0
      //If horizontal swipe
      if (e.detail.orientation == 'hor') {
        //If the swipe delta.x is greater than 20% of the viewport width
        if (Math.abs(e.detail.delta.x) > 0.2 * dE.clientWidth) {
          if (e.detail.direction == 'left') {
            AG.#currentGallery.#next()
          } else {
            AG.#currentGallery.#prev()
          }
        } else {//We cancel the movement
          AG.#currentGallery.#goTo(AG.#currentGallery.#currentId, true)
        }
        //If it's a vertical swipe and if the swipe delta.y is greater than 20% of the viewport height
      } else if (e.detail.direction == 'down' && Math.abs(e.detail.delta.y) > 0.2 * dE.clientHeight) {
        AG.#hide()
      }
    })

    on(overlay, 'swiping', e => {
      if (e.detail.orientation == 'vert') return

      const slider = $(overlay, `.${g}-slider`)
      if (sliderOriginX == 0) {//Swiping begins
        //Store the slider abscisse
        sliderOriginX = slider.getBoundingClientRect().x
      } else {//Swiping in progress
        const delta = sliderOriginX + e.detail.client.x1 - e.detail.client.x0
        slider.style.transform = `translateX(${delta}px)`
      }
    })

    //Listen to the mousemove event to show/hide navigation elements
    //Add a amst_gallery-hover class to the overlay block when mouse moves
    //and remove it after 1500ms if the mouse stops moving
    let timeoutHover = null
    on(overlay, "mousemove", (e) => {
      //If the pointer used is a mouse
      if (PD.type == "mouse") {
        //overlay.classList.add(`amst_gallery-hover`)
        overlay.classList.add(`${g}-hover`)
        if (timeoutHover) clearInterval(timeoutHover)
        //Is the mouse over caption ?
        let overCaption = false
        const item = AG.#currentGallery.currentItem
        if (item.caption) {
          const
            itemsLength = item.container.length,
            container = (itemsLength == 1 || (item.container.length > 1 && item.id < itemsLength - 1)) ? item.container[0] : item.container[1],
            caption = $(container, `figcaption`)
          overCaption = caption.contains(e.target)
        }
        //If the pointer is not over a navigation item
        //and not over the caption
        if (!e.target.classList.contains(`${g}-nav-item`) && !overCaption) {
          //Start the timeout
          timeoutHover = setTimeout(_ => {
            timeoutHover = null
            //overlay.classList.remove(`amst_gallery-hover`)
            overlay.classList.remove(`${g}-hover`)
          }, 1500)
        }
      }
    })

    //Tap on the overlay toggles the controls visibility
    //if the tap does not occur on a navigation item or on caption
    on(overlay, 'click', (e) => {
      if (PD.type != "mouse") {
        //Does the the tap occur in caption ?
        let inCaption = false
        const item = AG.#currentGallery.currentItem
        if (item.caption) {
          const
            itemsLength = item.container.length,
            container = (itemsLength == 1 || (item.container.length > 1 && item.id < itemsLength - 1)) ? item.container[0] : item.container[1],
            caption = $(container, `figcaption`)
          inCaption = caption.contains(e.target)
        }
        if (!e.target.classList.contains(`${g}-nav-item`) && !inCaption) {
          //overlay.classList.toggle("amst_gallery-hide-controls")
          overlay.classList.toggle(`${g}-hide-controls`)
        }
      }
    })
  }
  //End #build


  //STATIC #BUILDSLIDER
  //Build the slider when a gallery is displayed
  static #buildSlider() {
    /**
     * 
     * @param {Object} item 
     * @param {Integer} id
     * @returns for an item with a caption defined as 'My beautiful legend' and an id of 0 :
     * <figure class="amst_gallery-item" data-amst_gallery-id="0">
     *  <div class="amst_gallery-loader"></div>
     *  <picture></picture>
     *  <figcaption>My beautiful legend</figcaption>
     * </figure>
     */
    function buildItem(item, id) {
      const
        //Add caption if item.caption is defined
        figcaption = item.caption ? `<figcaption class="${g}-caption">${item.caption}</figcaption>` : '',
        //We add a data attribute to the figure element to keep a reference to the image id.
        ret = `<figure class="${g}-item" data-${g}-id="${id}">
        <div class="${g}-loader"></div>
        <picture></picture>${figcaption}
        </figure>`
      return ret
    }

    const
      overlay = AG.#overlay,
      currentGallery = AG.#currentGallery,
      items = currentGallery.#items

    //If necessary, remove the existent slider
    if ($(overlay, `.${g}-slider`)) overlay.removeChild($(overlay, `.${g}-slider`))

    /**
     * To simulate the loop effect, we insert a first container which holds the last image
     * Then as much containers as images in the gallery
     * Then a last container which holds the first image.
     */
    //First define the number of needed containers
    const numberOfContainers = items.length == 1 ? 1 : items.length + 2
    //The width of the slider is given by 100% of the body width multiply by the number of containers
    let str = `<div class="${g}-slider" style="width:calc(100% * ${numberOfContainers});">`

    //If we have more than one image
    //insert before all the others, a container holding the last image
    if (numberOfContainers > 1) {
      const id = items.length - 1
      str += buildItem(items[id], id)
    }

    //Insert a container for each image
    items.forEach((item, id) => {
      str += buildItem(item, id)
    })

    //If we have more than one image
    //insert after all the others, a container holding the first image
    if (numberOfContainers > 1) {
      str += buildItem(items[0], 0)
    }

    str += `</div>`
    // overlay.insertAdjacentHTML("beforeend", str)
    ins(overlay, str)

    /**
     * For a gallery holding 3 images :
     * 
     * <div class="amst_gallery-slider" style="width:calc(100% * 5);">`
     *  <figure class="amst_gallery-item" data-amst_gallery-id="2">
     *    <div class="amst_gallery-loader"></div>
     *    <picture></picture>
     *    <figcaption>My beautiful legend 2</figcaption>
     *  </figure>
     *  <figure class="amst_gallery-item" data-amst_gallery-id="0">
     *    <div class="amst_gallery-loader"></div>
     *    <picture></picture>
     *    <figcaption>My beautiful legend 0</figcaption>
     *  </figure>
     *  <figure class="amst_gallery-item" data-amst_gallery-id="1">
     *    <div class="amst_gallery-loader"></div>
     *    <picture></picture>
     *    <figcaption>My beautiful legend 1</figcaption>
     *  </figure>
     *  <figure class="amst_gallery-item" data-amst_gallery-id="2">
     *    <div class="amst_gallery-loader"></div>
     *    <picture></picture>
     *    <figcaption>My beautiful legend 2</figcaption>
     *  </figure>
     *  <figure class="amst_gallery-item" data-amst_gallery-id="0">
     *    <div class="amst_gallery-loader"></div>
     *    <picture></picture>
     *    <figcaption>My beautiful legend 0</figcaption>
     *  </figure>
     * </div>
     * 
     */
    items.forEach(i => i.container = $$(overlay, `figure[data-${g}-id="${i.id}"]`))
  }
  //End #buildSlider


  //STATIC #SHOW
  /**
 * Show the gallery by adding the amst_gallery-show class to the overlay
 * If there is only one item in the gallery, add also the amst_gallery-no-arrow class
 * to hide the arrows.
 */
  static #show() {
    const
      overlay = AG.#overlay,
      currentGallery = AG.#currentGallery
    //Listen to keyboard event
    //document.body.addEventListener('keydown', AG.#keyboardListener)
    on(b, 'keydown', AG.#keyboardListener)
    //Listen to window resize event
    //window.addEventListener("resize", AG.#resize)
    on(w, "resize", AG.#resize)
    //Update the #visible property
    AG.#visible = true
    //Resize
    AG.#resize()
    //Emit amst_gallery-opening event
    AG.#emitter.emit(`${g}-opening`, {current: currentGallery.currentItem, gallery: currentGallery})
    currentGallery.emit(`${g}-opening`, {current: currentGallery.currentItem})
    //Emit amst_gallery-open after a 400ms delay (because transition on overlay opacity)
    on(overlay, 'transitionend', function waitForTransitionEnd(e) {
      if (e.propertyName == 'opacity' && e.target == overlay) {
        off(overlay, 'transitionend', waitForTransitionEnd)
        AG.#emitter.emit(`${g}-open`, {current: currentGallery.currentItem, gallery: currentGallery})
        currentGallery.emit(`${g}-open`, {current: currentGallery.currentItem})
      }
    })
    //If there is only one item in the gallery
    if (currentGallery.#items.length == 1) {
      overlay.classList.add(`${g}-no-arrow`)
    }
    overlay.classList.add(`${g}-show`)
    //Force the visibility of the controls for 1500ms
    if (PD.type == 'mouse') overlay.dispatchEvent(new CustomEvent('mousemove'))
  }
  //End #show


  //STATIC #HIDE
  /**
   * hide the gallery by removing the amst_gallery-show class to the overlay
   */
  static #hide() {
    //Stop listening to keyboard event
    //document.body.removeEventListener('keydown', AG.#keyboardListener)
    off(b, 'keydown', AG.#keyboardListener)
    const
      currentGallery = AG.#currentGallery,
      overlay = AG.#overlay

    //Emit amst_gallery-closing event
    AG.#emitter.emit(`${g}-closing`, {current: currentGallery.currentItem, gallery: currentGallery})
    currentGallery.emit(`${g}-closing`, {current: currentGallery.currentItem})
    //Wait for the overlay opacity transition from 1 to 0
    on(overlay, 'transitionend', function waitForTransitionEnd(e) {
      if (e.propertyName == 'opacity' && e.target == overlay) {
        off(overlay, 'transitionend', waitForTransitionEnd)
        //Update the #visible property
        AG.#visible = false
        //Stop listening to window resize event
        //window.removeEventListener("resize", AG.#resize)
        off(w, "resize", AG.#resize)
        //Emit amst_gallery-close event
        AG.#emitter.emit(`${g}-close`, {current: currentGallery.currentItem, gallery: currentGallery})
        currentGallery.emit(`${g}-close`, {current: currentGallery.currentItem})
      }
    })
    //Clean overlay classes
    //AG.#overlay.classList.remove(`${g}-show`, `${g}-no-arrow`, `${g}-hide-controls`)
    //is not supported by IE11
    new Array(`${g}-show`, `${g}-no-arrow`, `${g}-hide-controls`).forEach(c => overlay.classList.remove(c))
  }
  //End #hide


  //STATIC #KEYBOARDLISTENER
  /**
   * Listen to keyboard events
   * Left/Right arrow keys skip to the previous/next item
   * Escape key close the gallery
   * @param {keyboard event} e 
   */
  static #keyboardListener(e) {
    if (!AG.#visible) return
    let keys = ['Escape', 'Esc']
    if (AG.#currentGallery.#items.length > 1) keys.push('ArrowLeft', 'Left', 'ArrowRight', 'Right')
    if (keys.includes(e.key)) e.preventDefault(); else return
    switch (e.key) {
      case 'ArrowLeft':
      case 'Left':
        AG.#currentGallery.#prev()
        break
      case 'ArrowRight':
      case 'Right':
        AG.#currentGallery.#next()
        break
      case 'Escape':
      case 'Esc':
        AG.#hide()
        break
    }
  }
  //End #keyboardListener


  //STATIC #RESIZE
  /**
   * Listen to window resize event
   * Throttle via requestAnimationFrame
   * Adapt the image dimensions so it's fully contained in the overlay
   * If the image dimensions are less than those of the viewport,
   * just center the image.
   * Position the caption below the image if possible.
   * If not, caption is set at the bottom of the image.
   * 
   * Default styling for images set width to 100% and height to auto
   * If the image ratio is less than that of the viewport,
   * width is set to auto and height to 100% by adding the
   * amst_gallery-adapted-width class
   * 
   */
  static #resize() {
    //If there is a resizing computation running or if the gallery is hidden
    if (AG.#resizeRunning || !AG.#visible) return
    //Update #resizeRunning
    AG.#resizeRunning = true
    requestAnimationFrame(_ => {
      const
        windowWidth = dE.clientWidth,
        windowHeight = dE.clientHeight,
        windowRatio = windowWidth / windowHeight
      //AG.#overlay.querySelectorAll("figure").forEach((figure) => {
      $$(AG.#overlay, "figure").forEach((figure) => {
        //Just in case
        if (!$(figure, "img")) return
        const
          caption = $(figure, "figcaption"),
          item = AG.#currentGallery.#items[figure.getAttribute(`data-${g}-id`)],
          adaptedWidth = figure.classList.contains(`${g}-adapted-width`)
        //If there is a caption, clean its style
        if (caption) caption.removeAttribute('style')
        if (item.ratio < windowRatio) {
          //Image height is set to 100% and width to auto
          if (!adaptedWidth) figure.classList.add(`${g}-adapted-width`)
          if (caption) {
            //The caption width is set equal to that of the image
            //Note that img dimensions can't be greater than its natural dimensions
            let css = `width:${Math.ceil(Math.min(windowHeight * item.ratio, item.width))}px;`
            //If the image height is smaller than that of the viewport
            //we position the caption below the image
            if (windowHeight > item.height) {
              const availableHeight = (windowHeight - item.height) / 2
              css += `transform:translateY(${-availableHeight}px);background:transparent;`
            }
            caption.setAttribute('style', css)
          }
        } else {
          //Image width is set to 100% and height to auto
          if (adaptedWidth) figure.classList.remove(`${g}-adapted-width`)
          if (caption) {
            const
              imgHeight = Math.min(windowWidth / item.ratio, item.height),
              availableHeight = (windowHeight - imgHeight) / 2
            if (availableHeight - caption.offsetHeight > 0) {
              let css = `transform:translateY(${-availableHeight}px);background:transparent;`
              if (windowWidth > item.width) {
                css += `width:${item.width}px;`
              }
              caption.setAttribute('style', css)
            }
          }
        }
      })
      AG.#resizeRunning = false
    })
  }
  //End #resize


  /******************************************************
   *                                                    *
   *                    END STATIC                      *
   *                                                    *
   *                      PRIVATE                       *
   *                                                    *
   *****************************************************/

  //#OPTIONS
  #options = { ...AG.#defaultOptions }

  /**
   * @get options
   * @returns {Object}
   * @description : returns the gallery options object
   */
  get options() {
    return { ...this.#options }
  }

/**
 * @set options
 * @param {Object} opts
 * @description : set the gallery options
 */
  set options(opts) {
    let needToUpdate = false
    Object.keys(opts)
      .filter(key => key in this.#options && this.#options[key] != opts[key])
      .forEach(key => {
        needToUpdate = true
        this.#options[key] = opts[key]
      })
    if (needToUpdate) this.#updateOptions()
  }

  //#ITEMS
  //Store all the gallery items
  #items = []

  /**
   * @get items
   * @returns {Array}
   * @description : returns an array of all gallery items
   * A gallery item is an object with the following properties :
   *       @key alt {String} : content of the img alt attribute
   *       @key caption {String} : content of the img caption
   *       @key container {Array} : An array of the item containers.
   *            For the first and last items, the array is composed of
   *            two figures (to achieve the loop effect).
   *            For all the others, it contains only one figure.
   *       @key content {String} : the HTML content of the picture tag
   *       @key currentSrc {String} : value of the img currentSrc property 
   *            (identical to src property if currentSrc is not supported)
   *       @key height {Integer} : content of the img height attribute
   *       @key id {Integer} : item identifier 
   *            (0 for the first image, 1 for the second, ...)
   *       @key loaded {Boolean} : true when img is loaded
   *            Reset to false when another gallery is opened
   *       @key loading {Boolean} : true when img is loading
   *            Reset to false when another gallery is opened
   *       @key next {Integer} : id of the next item
   *            -1 if there is only one image in the gallery
   *            0 (ie first item id) if the current item is the last
   *       @key previous {Integer} : id of the previous item
   *            -1 if there is only one image in the gallery
   *            id of the last gallery item if the current item is the first
   *       @key ratio {Number} : image ratio ie width/height
   *       @key sources {String} : content of the picture source tag
   *       @key src {String} : content of the img src attribute
   *       @key srcset {String} : content of the img srcset attribute
   *       @key title {String} : content of the img title attribute
   *       @key width {Integer} : content of the img width attribute
   * 
   * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   *  when another gallery is opened :
   *    - loading and loaded properties are reset to false 
   *    - container property is reset to an empty array []
   *    - currentSrc property is set equal to src
   * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   */
  get items() {
    return [...this.#items]
  }

  //#CURRENTID
  //Store the currently display item id
  #currentId = -1

  /**
   * @get current
   * @returns {Integer}
   * @description : returns the currently display item id
   * Reset to -1 when another gallery is opened
   */
  get currentId() {
    return this.#currentId
  }

  //CURRENTITEM
  /**
   * @get currentItem
   * @returns {Object}
   * @description : returns the currently display item
   * Reset to false when another gallery is opened
   */
  get currentItem() {
    return this.#currentId == -1 ? false : this.#items[this.#currentId]
  }

  //#LOAD
  /**
   * Load the img given by the id parameter
   * @param {Integer} id 
   */
  #load(id) {
    /**
     *  check = n => {
     *    return typeof n !== "number" || !Number.isInteger(n) || n < 0
     *  }
     */
    if (check(id) || id > this.#items.length - 1) return
    //Get the item to load
    const item = this.#items[id]
    //Leave if the item is already loading or loaded
    if ((item.loading || item.loaded) && $(AG.#overlay, `figure[data-${g}-id="${id}"] img`)) return
    //The item is now set as loading
    item.loading = true
    //Store the gallery instance
    const self = this
    //Build the image element without the sources, srcset or src data
    function buildItemContent(i) {
      let content = `<img draggable="false"`
      content += i.alt ? ` alt="${i.alt}"` : ``
      content += i.title ? ` title="${i.title}"` : ``
      content += i.width ? ` width="${i.width}"` : ``
      content += i.height ? ` height="${i.height}"` : ``
      content += (i.width > 0 && i.height > 0) ? ` style="max-width:${i.width}px;max-height:${i.height}px; aspect-ratio:${i.ratio};"` : ``
      content += "/>"
      return content
    }
    if (!item.content) item.content = buildItemContent(item)
    //Insert the img tag inside each item container
    item.container.forEach((figure, i) => {
      ins($(figure, "picture"), item.content)
      //If height and width have been specified
      //We may give a border to the img
      if (item.width && item.height) {
        $(figure, "img").classList.add(`${g}-border`)
        //Resize
        if (i == item.container.length - 1) AG.#resize()
      }
    })
    //For the first and last item, the img is loaded into two containers
    //We only watch the img hold by the first container.
    on($(item.container[0], 'img'), 'load', function loaded() {
      const img = this
      //If the srcset attribute or the source tag have been defined
      //we need to keep the image onload listener.
      //If the window is resized, another source might be loaded
      //and we have to update width, height and style attribute.
      if (!item.srcset && !item.sources) off(img, 'load', loaded)
      //Update the item currentSrc property
      item.currentSrc = img.currentSrc || img.src
      if (!item.loaded || item.srcset || item.sources) {
        //Update the width/height/ratio properties
        //IE11 randomly returns 0 when getting this.naturalWidth or this.naturalHeight
        //If there is a srcset attribute, natural dimensions are not accurate
        //and we need to check it also
        if (img.naturalWidth == 0 || img.naturalHeight == 0 || item.srcset) {
          const checkImg = new Image()
          on(checkImg, 'load', function loaded() {
            off(checkImg, 'load', loaded)
            check(this.naturalWidth, this.naturalHeight)
          })
          checkImg.src = item.currentSrc
        } else {
          check(img.naturalWidth, img.naturalHeight)
        }
        /**
         * 
         * @param {Integer} w img naturalWidth
         * @param Integer h img naturalHeight
         * @description : update the img style and its width and height attributes
         */
        function check(w, h) {
          let shouldUpdateWidthHeight = false
          if (img.getAttribute('width') != w) {
            shouldUpdateWidthHeight = true
            item.width = w
          }
          if (img.getAttribute('height') != h) {
            shouldUpdateWidthHeight = true
            item.height = h
          }
          if (shouldUpdateWidthHeight) {
            item.ratio = w / h
            //For first and last item, there are two img data to update!!
            item.container.forEach(figure => {
              const i = $(figure, 'img')
              i.setAttribute("width", w)
              i.setAttribute("height", h)
              i.setAttribute('style', `max-width:${w}px; max-height:${h}px; aspect-ratio:${item.ratio};`)
            })
            item.content = buildItemContent(item)
          }
          if (!item.loaded) {
            item.container.forEach(figure => {
              on($(figure, `.${g}-loader`), "transitionend", function clean(e) {
                if (e.target == this) {
                  //this.removeEventListener("transitionend", clean)
                  off(this, "transitionend", clean)
                  try {
                    figure.removeChild(this)
                  } catch (err) { }
                }
              })
              //Remove the amst_gallery-border class of the img 
              $(figure, 'img').removeAttribute("class")
              figure.classList.add(`${g}-item-loaded`)
            })
            //The item is set as loaded
            item.loaded = true
            item.loading = false
          }
          AG.#emitter.emit(`${g}-load`, {current: item, gallery: self})
          self.emit(`${g}-load`, {current: item})
          AG.#resize()
        }
      }
      const remainToLoad = self.#items.filter(i => (!i.loaded && !i.loading))
      //Preload the next and previous items
      //Must check if AG.#currentGallery == self in case of currentGallery changes
      //between load call and img loaded
      if (AG.#visible && remainToLoad.length > 0 && self.#items.filter(i => i.loading).length == 0 && item.previous != -1 && AG.#currentGallery == self) {
        if (remainToLoad == 1) {
          self.#load(remainToLoad[0].id)
        } else {
          let idNext = item.next
          while (self.#items[idNext].loading || self.#items[idNext].loaded) {
            idNext = self.#items[idNext].next
          }
          let idPrev = item.previous
          while (self.#items[idPrev].loading || self.#items[idPrev].loaded) {
            idPrev = self.#items[idPrev].previous
          }
          self.#load(idNext)
          if (idNext != idPrev) self.#load(idPrev)
        }
      }
    })
    item.container.forEach((figure, i) => {
      if (item.sources) ins($(figure, "picture"), item.sources, 'afterbegin')
      if (item.srcset) $(figure, 'img').setAttribute('srcset', item.srcset)
      $(figure, 'img').src = item.src
    })
  }


  //#GOTO
  /**
   * Translate the slider so the image given by the id parameter is apparent
   * @param {Integer} id 
   * @param {Boolean} transition : do we need a transition ? (Default: false)
   *                  true if goto is called by a click on navigation arrows or a swipe
   *                  false ig the gallery is opening
   * @param {String} direction (Default :"")
   * "prev" if called by prev() method
   * "next" if called by next() method
   */
  #goTo(id, transition = false, direction = "") {
    //If there is more than one item in the gallery
    if (this.#items.length > 1) {
      /*
      Because of the loop, there are two more containers than images.
      containers.length = items.length + 2

      First container holds the last image (imageID = items.length - 1, containerID = 0).
      Last container holds the first image (imageID = 0, containerID = containers.length - 1 = items.length + 1).

      If the gallery contains three images, we get five containers :
      0:[img2], 1:[img0], 2:[img1], 3:[img2], 4:[img0]

      When the user reaches the image 2 and asks for the next one (image 0), 
      we have to translate smoothly to the fifth container
      which holds the image 0 
      and has an id of 4 in the container's array.
      At the end of the translation, we translate once more 
      but without transition to the second container
      which also holds the image 0 
      but has an id of 1 in the container's array.

      If the user watches the image 0 ans asks for the previous one (image 2),
      we have to translate smoothly to the first container
      which holds the image 2 
      and has an id of 0 in the container's array.
      At the end of the translation, we translate once more 
      but without transition to the before last container
      which also holds the image 2 
      but has an id of 3 in the container's array.
      */

      //Do we need to update the translation ?
      //That will be true if we are going from the first to the last image (through prev() fonction)
      //or from the last to the first (through next() fonction).
      let needToUpdatePosition = true
      const
        slider = $(AG.#overlay, `.${g}-slider`),
        // slider = $(AG.#overlay, ".amst_gallery-slider"),
        // slider = AG.#overlay.querySelector(".amst_gallery-slider"),
        numberOfContainers = this.#items.length + 2
      slider.classList.remove(`${g}-slider-transition`)
      if (transition) {
        slider.classList.add(`${g}-slider-transition`)
        //slider.addEventListener("transitionend", function end(e) {
        on(slider, "transitionend", function end(e) {
          if (e.target == slider) {
            //slider.removeEventListener("transitionend", end)
            off(slider, "transitionend", end)
            slider.classList.remove(`${g}-slider-transition`)
            if (needToUpdatePosition) {
              //First case (go from the last to the first item) : 
              //  translate the slider to the second container
              //Second case (go from the first to the last item) : 
              //  translate the slider to the penultimate container
              slider.style.transform = `translateX(${(-100 / numberOfContainers) * (id + 1)}%)`
            }
          }
        })
      }
      //If it's a previous call and currently displayed image is the first of the gallery
      if (this.#currentId == 0 && direction == "prev") {
        //Go to the first container holding the last image with transition
        //At the end of the transition, we'll move to the penultimate container
        slider.style.transform = `translateX(0)`
        //If it's a next call and currently displayed image is the last of the gallery
      } else if (this.#currentId == this.#items.length - 1 && direction == "next") {
        //Go to the last container holding the first image
        //At the end of the transition, we'll move to the second container
        slider.style.transform = `translateX(${(-100 / numberOfContainers) * (this.#items.length + 1)}%)`
      } else {
        needToUpdatePosition = false
        slider.style.transform = `translateX(${(-100 / numberOfContainers) * (id + 1)}%)`
      }
    }
    if (id != this.#currentId) {
      const previousItem = this.currentItem
      this.#currentId = id
      if (previousItem) {
        AG.#emitter.emit(`${g}-change`, {current: this.currentItem, previous: previousItem, gallery: this})
        this.emit(`${g}-change`, {current: this.currentItem, previous: previousItem})
      }
      this.#load(id)
    }
  }


  //#PREV - #NEXT
  //Called when 
  //  click on previous arrow
  //  swipe to the right
  //  press on keyboard left arrow
  #prev() {
    if (this.#items.length < 2) return
    // this.#goTo(this.#items[this.#currentId].previous, true, "prev")
    this.#goTo(this.currentItem.previous, true, "prev")
  }

  //Called when 
  //  click on next arrow
  //  swipe to the left
  //  press on keyboard right arrow
  #next() {
    if (this.#items.length < 2) return
    // this.#goTo(this.#items[this.#currentId].next, true, "next")
    this.#goTo(this.currentItem.next, true, "next")
  }

  //#UPDATEOPTIONS
  /**
   * Called when a gallery is opened
   */
  #updateOptions() {
    /**
     * @param {String} p 
     * @param {Boolean} camel @default false
     * @returns convert 
     *            aaa-bbb-ccc 
     *            to 
     *            AaaBbbCcc if camel is false (default)
     *            aaaBbbCcc if camel is true
     */
    function camelCase(p, camel = false) {
      return p.split('-').map((w, id) => (id == 0 && camel) ? w : w.charAt(0).toUpperCase() + w.slice(1)).join('')
    }
    if (!AG.#overlay) {
      AG.#build(this.#options)
    } else {
      const
        navs = $$(AG.#overlay, `.${g}-nav-item`),
        ids = ['previous', 'next', 'close'],
        attrs = ['title', 'aria-label']
      attrs.forEach(attr => {
        //title => Title
        //aria-label => AriaLabel
        const ATTR = camelCase(attr)
        navs.forEach((nav, id) => {
          //this.#options[previousTitle]
          //this.#options[previousAriaLabel]
          //...
          const opt = this.#options[ids[id] + ATTR]
          if (nav.getAttribute(attr) != opt) nav.setAttribute(attr, opt)
        })
      })
    }
    const cssProps = ['overlay-background', 'nav-items-background', 'nav-items-background-hover', 'nav-items-color', 'nav-items-color-hover', 'caption-background', 'caption-color', 'caption-font-family', 'caption-font-size']
    cssProps.forEach(p => {
      //overlay-background => overlayBackground
      //nav-items-background => navItemsBackground
      //...
      const P = camelCase(p, true)
      AG.#overlay.style.setProperty(`--${p}`, this.#options[P])
    })
  }



  /******************************************************
   *                                                    *
   *                    END PRIVATE                     *
   *                                                    *
   *                    CONSTRUCTOR                     *
   *                                                    *
   *****************************************************/
  //CONSTRUCTOR
  /**
   * @param {String} selector css selector defining the anchors to be included in the gallery
   * @param {Object} options gallery parameters
   *  @key {String} name : name of the gallery
   *                If the name is already in use, i'ts completed
   *                by an incremented integer
   *                ('myGallery' becomes 'myGallery-1').
   *                If not set, an unique name is generated : 
   *                'amst_gallery-' followed by an incremented integer
   *                ('amst_gallery-1', 'amst_gallery-2', and so on)
   *  @key {String} overlayBackground : content of the overlay background css property
   *                Default : rgba(0, 0, 0, 0.9)
   *  @key {String} navItemsBackground : content of the navigation items 
   *                (close button, left and right arrows) background css property
   *                Default : rgba(33, 33, 33, 0.5)
   *  @key {String} navItemsBackgroundHover : content of the navigation items 
   *                (close button, left and right arrows) background css property
   *                when hovered
   *                Default : rgba(33, 33, 33, 0.7)
   *  @key {String} navItemsColor : color of the navigation items 
   *                (close button, left and right arrows)
   *                Default : #aaa
   *  @key {String} navItemsColorHover : color of the navigation items 
   *                (close button, left and right arrows) when hovered
   *                Default : #ddd
   *  @key {String} captionBackground : content of the captions
   *                background css property
   *                Default : rgba(0, 0, 0, 0.7)
   *  @key {String} captionColor : color of the captions
   *                Default : #fff
   *  @key {String} captionFontFamily : font-family of the captions
   *                Default : inherit
   *  @key {String} captionFontSize : font-size of the captions
   *                Default : 1em
   *  @key {String} previousTitle : title attribute of the left arrow
   *                Default : 'Previous'
   *  @key {String} previousAriaLabel : aria-label attribute of the left arrow
   *                Default : 'Previous'
   *  @key {String} nextTitle : title attribute of the right arrow
   *                Default : 'Next'
   *  @key {String} nextAriaLabel : aria-label attribute of the right arrow
   *                Default : 'Next'
   *  @key {String} closeTitle : title attribute of the close button
   *                Default : 'Close'
   *  @key {String} closeAriaLabel : aria-label attribute of the close button
   *                Default : 'Close'
   * @param {function} callback function called when gallery is initialized
   */
  constructor(selector, options = {}, callback) {
    super()
    //If the second argument is a function,
    if (typeof options === "function") {
      callback = options
      options = {}
    }
    //If option name has not been set,
    //name = 'amst_gallery_inst'
    options.name = options.name || 'amst_gallery_inst'
    //Check that the name is not already in use
    let i = 0, n = options.name
    while (AG.#names.has(n) || n == 'amst_gallery_inst') {
      n = options.name + '-' + i
      i++
    }
    this.name = n
    AG.#names.add(n)
    Object.keys(options).filter(key => key in this.#options).forEach(key => this.#options[key] = options[key])
    //Collect all the valid links
    //Link is valid if it's an anchor whose href attribute matches the regexp
    //or if it has a data-href attribute that matches the rexexp
    const links = Array.from($$(d, selector)).filter((el) => (el.tagName == "A" && el.href.match(AG.#regexp)) || (el.hasAttribute('data-href') && el.getAttribute('data-href').match(AG.#regexp)))
    console.log(links)
    const linksLength = links.length
    if (linksLength == 0) return
    links.forEach((link, id) => {
      let o = {}
      o.id = id
      o.caption = link.getAttribute("data-caption") || ""
      o.container = []
      o.title = link.getAttribute("data-title") || ""
      o.alt = link.getAttribute("data-alt") || ($(link, "img") && $(link, "img").getAttribute("alt")) || ""
      o.srcset = link.getAttribute("data-srcset") || ""
      o.loading = false//Pass to true during loading. Reset to false when loaded and when gallery is closed
      o.loaded = false//Pass to true when loaded. Reset to false when gallery is closed
      o.width = link.getAttribute("data-width") || 0
      o.height = link.getAttribute("data-height") || 0
      o.ratio = o.height == 0 ? 0 : o.width / o.height
      o.previous = linksLength == 1 ? -1 : id == 0 ? linksLength - 1 : id - 1
      o.next = linksLength == 1 ? -1 : id == linksLength - 1 ? 0 : id + 1
      o.sources = $(link, "script") ? $(link, "script").innerHTML : ``
      o.currentSrc = o.src = link.href ? link.href : link.getAttribute('data-href')
      this.#items.push(o)
      //Click on an link shows the gallery
      //link.addEventListener("click", (e) => {
      on(link, "click", e => {
        //Open the gallery if click does not occur on an internal anchor
        if (e.target.tagName != 'A') {
          e.preventDefault()
          this.show(id)
        }
      })
    })
    AG.#galleries.push(this)
    //Callback
    if (callback && typeof callback === "function") {
      setTimeout(_ => {
        callback.call(this);
      }, 1)
    }
  }
  /******************************************************
   *                                                    *
   *                  END CONSTRUCTOR                   *
   *                                                    *
   *                      METHODS                       *
   *                                                    *
   *****************************************************/

  //SHOW
  /**
   * @method show(id)
   * @param {Integer} [0] id
   * @description show the image whose identifier is id
   */
  show(id = 0) {
    /**
     *  check = n => {
     *    return typeof n !== "number" || !Number.isInteger(n) || n < 0
     *  }
     */
    if (check(id) || id > this.#items.length - 1) {
      id = this.#currentId > 0 ? this.#currentId : 0
    }
    if (AG.#currentGallery != this) {
      if (AG.#currentGallery) {
        //Reset
        AG.#currentGallery.#currentId = -1
        //Cancel the loading of the images
        //AG.#overlay.querySelectorAll('source').forEach(s => s.parentElement.removeChild(s))
        $$(AG.#overlay, 'source').forEach(s => s.parentElement.removeChild(s))
        //AG.#overlay.querySelectorAll('img').forEach(img => img.src = '')
        $$(AG.#overlay, 'img').forEach(img => img.src = '')
        //If necessary, reset the loading and loaded properties of the currentGallery items
        AG.#currentGallery.#items.forEach(i => {
          i.loading = i.loaded = false
          i.currentSrc = i.src
          i.container = []
        })
      }
      this.#updateOptions()
      AG.#currentGallery = this
      AG.#buildSlider()
    }
    this.#goTo(id)
    w.requestAnimationFrame(AG.#show)
    // AG.#show()
  }
}