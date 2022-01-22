document.querySelector('.container').style.display = 'none'

window.onload = function () {
  document.querySelector('.container').style.display = 'flex'

  const colorPickerOptions = {
    width: 100,
    layoutDirection: 'vertical',
    layout: [
      {
        component: iro.ui.Box,
        options: {},
      },
      {
        component: iro.ui.Slider,
        options: {
          sliderType: 'hue',
        },
      },
    ],
  }

  const hairColorPicker = new iro.ColorPicker('#hair-color-picker', {
    ...colorPickerOptions,
    color: '#2a232b',
  })
  const faceColorPicker = new iro.ColorPicker('#face-color-picker', {
    ...colorPickerOptions,
    color: '#f0c7b1',
  })
  const lipsColorPicker = new iro.ColorPicker('#lips-color-picker', {
    ...colorPickerOptions,
    color: '#db7c88',
  })
  const eyebrowsColorPicker = new iro.ColorPicker('#eyebrows-color-picker', {
    ...colorPickerOptions,
    color: '#2a232b',
  })
  const eyelinerColorPicker = new iro.ColorPicker('#eyeliner-color-picker', {
    ...colorPickerOptions,
    color: '#000',
  })
  const beardColorPicker = new iro.ColorPicker('#beard-color-picker', {
    ...colorPickerOptions,
    color: '#2a232b',
  })
  const mustacheColorPicker = new iro.ColorPicker('#mustache-color-picker', {
    ...colorPickerOptions,
    color: '#2a232b',
  })
  const irisColorPicker = new iro.ColorPicker('#iris-color-picker', {
    ...colorPickerOptions,
    color: '#4e60a3',
  })
  hairColorPicker.on('color:change', function (color) {
    const svg = document.querySelector('#base-svg:not(.hidden)')

    fills.hair = color.hexString
    fills.hairOutline = hexToNewRgb(fills.hair, 0.1, -0.06)
    fills.hairDetails = hexToNewRgb(fills.hair, -0.1, 0.06)

    const hairEls = [...svg.querySelectorAll('.hair')]
    hairEls.map((el) => (el.style.fill = fills.hair))
    const hairOutlineEls = [...svg.querySelectorAll('.hair-outline')]
    hairOutlineEls.map((el) => (el.style.fill = fills.hairOutline))
    const hairDetailsEls = [...svg.querySelectorAll('.hair-details')]
    hairDetailsEls.map((el) => (el.style.fill = fills.hairDetails))
  })
  faceColorPicker.on('color:change', function (color) {
    const svg = document.querySelector('#base-svg:not(.hidden)')

    fills.skin = color.hexString
    fills.faceOutline = hexToNewRgb(fills.skin, 0.3, -0.18)
    fills.neckShadow = hexToNewRgb(fills.skin, 0.2, -0.12)
    fills.noseDetails = hexToNewRgb(fills.skin, -0.05, 0.05)

    const skinEls = [...svg.querySelectorAll('.skin')]
    skinEls.map((el) => (el.style.fill = fills.skin))
    const faceOutlineEls = [
      ...svg.querySelectorAll('.face-outline, .skin-details, .ear-outline'),
    ]
    faceOutlineEls.map((el) => (el.style.fill = fills.faceOutline))
    const neckShadowEls = [...svg.querySelectorAll('.neck-shadow')]
    neckShadowEls.map((el) => (el.style.fill = fills.neckShadow))
    const noseDetailsEls = [...svg.querySelectorAll('.nose-details')]
    noseDetailsEls.map((el) => (el.style.fill = fills.noseDetails))
  })
  lipsColorPicker.on('color:change', function (color) {
    const svg = document.querySelector('#base-svg:not(.hidden)')

    fills.lips = color.hexString
    fills.lipsOutline = hexToNewRgb(fills.lips, 0.1, -0.06)
    fills.upperLips = hexToNewRgb(fills.lips, 0.05, -0.03)
    fills.lipsDetails = hexToNewRgb(fills.lips, -0.1, 0.05)

    const lipsEls = [...svg.querySelectorAll('.lips')]
    lipsEls.map((el) => (el.style.fill = fills.lips))
    const lipsOutlineEls = [...svg.querySelectorAll('.lips-outline')]
    lipsOutlineEls.map((el) => (el.style.fill = fills.lipsOutline))
    const upperLipsEls = [...svg.querySelectorAll('.upperLips')]
    upperLipsEls.map((el) => (el.style.fill = fills.upperLips))
    const lipsDetailsEls = [...svg.querySelectorAll('.lips-details')]
    lipsDetailsEls.map((el) => (el.style.fill = fills.lipsDetails))

    console.log(lipsOutlineEls)
  })
  eyebrowsColorPicker.on('color:change', function (color) {
    const svg = document.querySelector('#base-svg:not(.hidden)')

    fills.eyebrows = color.hexString
    fills.eyebrowsOutline = hexToNewRgb(fills.eyebrows, 0.1, -0.06)
    fills.eyebrowsDetails = hexToNewRgb(fills.eyebrows, -0.1, 0.06)

    const eyebrowsEls = [...svg.querySelectorAll('.eyebrow')]
    eyebrowsEls.map((el) => (el.style.fill = fills.eyebrows))
    const eyebrowsOutlineEls = [...svg.querySelectorAll('.eyebrow-outline')]
    eyebrowsOutlineEls.map((el) => (el.style.fill = fills.eyebrowsOutline))
    const eyebrowsDetailsEls = [...svg.querySelectorAll('.eyebrow-details')]
    eyebrowsDetailsEls.map((el) => (el.style.fill = fills.eyebrowsDetails))
  })
  eyelinerColorPicker.on('color:change', function (color) {
    const svg = document.querySelector('#base-svg:not(.hidden)')

    fills.eyeliner = color.hexString

    const eyelinerEls = [...svg.querySelectorAll('.eyeliner')]
    eyelinerEls.map((el) => (el.style.fill = fills.eyeliner))
  })
  beardColorPicker.on('color:change', function (color) {
    const svg = document.querySelector('#base-svg:not(.hidden)')

    fills.beard = color.hexString
    fills.beardDetails = hexToNewRgb(fills.beard, 0.05, -0.06)

    const beardEls = [...svg.querySelectorAll('.beard')]
    beardEls.map((el) => (el.style.fill = fills.beard))
    const beardDetailsEls = [...svg.querySelectorAll('.beard-details')]
    beardDetailsEls.map((el) => (el.style.fill = fills.beardDetails))
  })
  mustacheColorPicker.on('color:change', function (color) {
    const svg = document.querySelector('#base-svg:not(.hidden)')

    fills.mustache = color.hexString
    fills.mustacheDetails = hexToNewRgb(fills.mustache, 0.05, -0.06)

    const mustacheEls = [...svg.querySelectorAll('.mustache')]
    mustacheEls.map((el) => (el.style.fill = fills.mustache))
    const mustacheDetailsEls = [...svg.querySelectorAll('.mustache-details')]
    mustacheDetailsEls.map((el) => (el.style.fill = fills.mustacheDetails))
  })
  irisColorPicker.on('color:change', function (color) {
    const svg = document.querySelector('#base-svg:not(.hidden)')

    fills.pupil = color.hexString

    const pupilEls = [...svg.querySelectorAll('.pupil')]
    pupilEls.map((el) => (el.style.fill = fills.pupil))
  })

  const allTabs = [...document.querySelectorAll('.editing .tab')]
  console.log(allTabs)
  allTabs.map((tab) => {
    tab.classList.add('hidden')
  })
  allTabs[0].classList.remove('hidden')

  const mainTabOptions = [
    ...document.querySelectorAll('.editing .tabs .main-tab > button'),
  ]
  console.log(mainTabOptions)
  const tabsOptions = [...document.querySelectorAll('.editing .tabs button')]
  console.log(tabsOptions)

  tabsOptions.map((tabBtn) => {
    tabBtn.addEventListener('click', function () {
      const currentTab = document.querySelector('.editing .tab:not(.hidden)')
      const newTab = document.querySelector(`.editing .tab.${this.dataset.tab}`)
      currentTab.classList.add('hidden')
      newTab.classList.remove('hidden')
      console.log(currentTab, newTab)

      tabsOptions
        .filter((btn) => btn.dataset.tab !== this.dataset.tab)
        .map((btn) => {
          btn.classList.remove('selected')
        })

      this.classList.add('selected')
    })
  })
  mainTabOptions.map((mainTabBtn) => {
    mainTabBtn.addEventListener('click', function () {
      console.log('main Tab Clicked', this.dataset.tab)

      mainTabOptions
        .filter((mainTab) => mainTab.dataset.tab !== this.dataset.tab)
        .map((otherMainTabs) => {
          otherMainTabs.parentElement.style.width = '65px'
          const otherSubTabs = [
            ...otherMainTabs.parentElement
              .querySelector('ul')
              .querySelectorAll('li'),
          ]
          otherSubTabs.map(
            (subTab) =>
              (subTab.style.transform = 'translateX(0)') &&
              (subTab.style.zIndex = '-1')
          )
        })
      const subTabs = [
        ...this.parentElement.querySelector('ul').querySelectorAll('li'),
      ].filter((el) => el.querySelector('button:not(.hidden)'))
      console.log(subTabs)
      this.parentElement.style.width = `${70 * (subTabs.length + 1)}px`

      subTabs.map((subTab, i) => {
        subTab.style.zIndex = '0'
        subTab.style.transform = `translateX(${70 * (i + 1)}px)`
      })
      console.log(subTabs.length)
    })
  })

  const editingEls = [
    ...document.querySelectorAll('.base-svg-container, .editing'),
  ]
  const initial = document.querySelector('.maleOrFemale')

  editingEls.map((el) => el.classList.add('hidden'))

  const options = [...document.querySelectorAll('#male-option, #female-option')]

  // CHOOSE BETWEEN MALE OR FEMALE
  options.map((op) => {
    op.addEventListener('click', function () {
      const hairTab = document.querySelector('.tabs button[data-tab="hair"]')

      if (this.dataset.hide === 'male') {
        const hiddenTabs = [
          ...document.querySelectorAll(
            '.tabs button[data-tab="beard"], .tabs button[data-tab="mustache"]'
          ),
        ]
        console.log(hiddenTabs)
        hiddenTabs.map((el) => {
          el.classList.add('hidden')
        })
      }
      hairTab.click()
      console.log(this)
      console.log(this.dataset.hide)
      initial.style.transform = 'scale(0)'
      setTimeout(() => {
        initial.style.display = 'none'
        editingEls.map((el) => el.classList.remove('hidden'))
        document
          .querySelector(`.${this.dataset.hide}-base `)
          .classList.add('hidden')

        const hidingButtons = [
          ...document.querySelectorAll(`button.${this.dataset.hide}`),
        ]
        hidingButtons.map((btn) => {
          btn.classList.add('hidden')
        })
      }, 1000)
    })
  })

  // CHOSEN COLOR PICKS
  const fills = {}

  const choices = [...document.querySelectorAll('.pick')]
  const obj = document.querySelector('object')
  console.log(obj)
  document.querySelector('object').addEventListener('click', function () {
    console.log(this)
  })
  choices.map((choice) => {
    choice.addEventListener('click', function () {
      const svg =
        this.querySelector('object').contentDocument.querySelector('svg')
      const allGroups = [...svg.childNodes].filter((el) => el.tagName === 'g')
      allGroups.map((group) => {
        const groupId = group.id
        if (groupId === 'none') return
        const baseContainer = document.querySelector(
          `.base-svg-container svg:not(.hidden)`
        )
        const baseEl = baseContainer.querySelector(`#${groupId}`)
        baseEl.innerHTML = group.innerHTML
        addColors(baseEl)
      })
    })
  })

  function addColors(svgEl) {
    const hairColorEls = [...svgEl.querySelectorAll('.hair')]
    hairColorEls.map((el) => (el.style.fill = fills.hair))
    const hairOutlineEls = [...svgEl.querySelectorAll('.hair-outline')]
    hairOutlineEls.map((el) => (el.style.fill = fills.hairOutline))
    const hairDetailsEls = [...svgEl.querySelectorAll('.hair-details')]
    hairDetailsEls.map((el) => (el.style.fill = fills.hairDetails))
    const skinEls = [...svgEl.querySelectorAll('.skin')]
    skinEls.map((el) => (el.style.fill = fills.skin))
    const faceOutlineEls = [
      ...svgEl.querySelectorAll('.face-outline, .ear-outline, .skin-details'),
    ]
    faceOutlineEls.map((el) => (el.style.fill = fills.faceOutline))
    const noseDetailsEls = [...svgEl.querySelectorAll('.nose-details')]
    noseDetailsEls.map((el) => (el.style.fill = fills.noseDetails))
    const lipsEls = [...svgEl.querySelectorAll('.lips')]
    lipsEls.map((el) => (el.style.fill = fills.lips))
    const lipsOutlineEls = [...svgEl.querySelectorAll('.lips-outline')]
    lipsOutlineEls.map((el) => (el.style.fill = fills.lipsOutline))
    const upperLipsEls = [...svgEl.querySelectorAll('.upperLips')]
    upperLipsEls.map((el) => (el.style.fill = fills.upperLips))
    const eyebrowsEls = [...svgEl.querySelectorAll('.eyebrow')]
    const lipsDetailsEls = [...svgEl.querySelectorAll('.lips-details')]
    lipsDetailsEls.map((el) => (el.style.fill = fills.lipsDetails))
    eyebrowsEls.map((el) => (el.style.fill = fills.eyebrows))
    const eyebrowsOutlineEls = [...svgEl.querySelectorAll('.eyebrow-outline')]
    eyebrowsOutlineEls.map((el) => (el.style.fill = fills.eyebrowsOutline))
    const eyebrowsDetailsEls = [...svgEl.querySelectorAll('.eyebrow-details')]
    eyebrowsDetailsEls.map((el) => (el.style.fill = fills.eyebrowsDetails))
    const eyelinerEls = [...svgEl.querySelectorAll('.eyeliner')]
    eyelinerEls.map((el) => (el.style.fill = fills.eyeliner))
    const beardEls = [...svgEl.querySelectorAll('.beard')]
    beardEls.map((el) => (el.style.fill = fills.beard))
    const beardDetailsEls = [...svgEl.querySelectorAll('.beard-details')]
    beardDetailsEls.map((el) => (el.style.fill = fills.beardDetails))
    const mustacheEls = [...svgEl.querySelectorAll('.mustache')]
    mustacheEls.map((el) => (el.style.fill = fills.mustache))
    const mustacheDetailsEls = [...svgEl.querySelectorAll('.mustache-details')]
    mustacheDetailsEls.map((el) => (el.style.fill = fills.mustacheDetails))
    const pupilEls = [...svgEl.querySelectorAll('.pupil')]
    pupilEls.map((el) => (el.style.fill = fills.pupil))
  }
}
