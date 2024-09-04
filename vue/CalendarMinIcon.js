
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: 'CalendarMinIcon', 
  props: {
    size: {
      type: String,
      default: '24',
      validator: (s) => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  },
  setup(props, { attrs }) {
    const getSize = computed(() => props.size.slice(-1) === 'x' 
      ? props.size.slice(0, props.size.length - 1) + 'em'
      : `${parseInt(props.size)}px`)

    const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M7 2a1 1 0 00-2 0v.279c-.625-.052-1.196-.104-1.665-.149a2.024 2.024 0 00-2.206 2.203c.148 1.563.371 4.244.371 6.167 0 1.978-.236 4.757-.383 6.296A2.01 2.01 0 003.115 19h13.77a2.01 2.01 0 001.998-2.204c-.147-1.54-.383-4.318-.383-6.296 0-1.923.223-4.604.371-6.167a2.023 2.023 0 00-2.206-2.203c-.469.045-1.04.097-1.665.149V2a1 1 0 10-2 0v.425a50.22 50.22 0 01-3 .11 50.22 50.22 0 01-3-.11V2zm6 4V4.428a51.275 51.275 0 01-3 .108 51.34 51.34 0 01-3-.108V6a1 1 0 01-2 0V4.285c-.705-.057-1.345-.115-1.856-.164h-.007a.03.03 0 00-.01.007.028.028 0 00-.007.01v.006c.148 1.562.38 4.328.38 6.356 0 2.085-.245 4.95-.393 6.487v.005a.017.017 0 00.007.008h13.772a.017.017 0 00.006-.006v-.007c-.147-1.537-.392-4.402-.392-6.487 0-2.028.232-4.794.38-6.356v-.007a.028.028 0 00-.007-.009.028.028 0 00-.01-.007h-.007c-.51.049-1.15.107-1.856.164V6a1 1 0 11-2 0zm-.5 4.5h-5a1 1 0 100 2h5a1 1 0 100-2z\"/> </svg>"
    const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M9 3a1 1 0 00-2 0v.302c-1.051-.067-2.01-.14-2.719-.197-1.24-.1-2.275.94-2.17 2.18.147 1.73.389 4.935.389 7.215 0 2.327-.252 5.616-.398 7.319A2.008 2.008 0 004.1 22h15.8a2.008 2.008 0 001.998-2.181c-.146-1.703-.398-4.992-.398-7.319 0-2.28.242-5.484.39-7.215a2.017 2.017 0 00-2.171-2.18c-.709.057-1.668.13-2.719.197V3a1 1 0 10-2 0v.416c-1.048.05-2.093.084-3 .084s-1.952-.034-3-.084V3zm6 4V5.418a66.023 66.023 0 01-3 .082c-.914 0-1.956-.033-3-.082V7a1 1 0 01-2 0V5.306a170.371 170.371 0 01-2.88-.208h-.004l-.007.005a.02.02 0 00-.005.007v.005c.147 1.73.396 5.01.396 7.385 0 2.423-.26 5.79-.405 7.49a.02.02 0 000 .004v.002l.003.003.001.001h15.803l.001-.001a.016.016 0 00.003-.005v-.005c-.145-1.7-.405-5.066-.405-7.489 0-2.375.25-5.656.396-7.385V5.11a.02.02 0 00-.005-.007.02.02 0 00-.006-.004h-.005c-.737.059-1.758.136-2.88.207V7a1 1 0 11-2 0zm1 7a1 1 0 100-2H8a1 1 0 100 2h8z\"/> </svg>"

    const updateSvg = (svgString) => {
      const parser = new DOMParser()
      const doc = parser.parseFromString(svgString, 'image/svg+xml')
      const svg = doc.documentElement

      svg.setAttribute('width', getSize.value)
      svg.setAttribute('height', getSize.value)

      svg.querySelectorAll('[fill]:not([fill="none"])').forEach(el => {
        el.setAttribute('fill', props.color)
      })
      svg.querySelectorAll('[stroke]:not([stroke="none"])').forEach(el => {
        el.setAttribute('stroke', props.color)
      })

      return svg.outerHTML
    }

    return () => h('div', {
      ...attrs,
      innerHTML: updateSvg(props.size === '20' ? svg20 : svg24),
      style: {
        display: 'inline-block',
        width: getSize.value,
        height: getSize.value,
      }
    })
  }
})
