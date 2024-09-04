
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: 'CalendarIcon', 
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

    const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M6 1a1 1 0 011 1v.425a50.22 50.22 0 003 .11c.901 0 1.957-.045 3-.11V2a1 1 0 112 0v.279c.625-.052 1.196-.104 1.665-.149a2.023 2.023 0 012.206 2.203c-.148 1.563-.371 4.244-.371 6.167 0 1.978.236 4.757.383 6.296A2.01 2.01 0 0116.885 19H3.115a2.01 2.01 0 01-1.998-2.204c.147-1.54.383-4.318.383-6.296 0-1.923-.223-4.604-.371-6.167A2.024 2.024 0 013.335 2.13c.469.045 1.04.097 1.665.149V2a1 1 0 011-1zm7 3.428V6a1 1 0 102 0V4.285a128.56 128.56 0 001.861-.164h.002l.01.007a.028.028 0 01.007.01v.006A104.73 104.73 0 0016.582 8H3.418a104.909 104.909 0 00-.298-3.861v-.002l.007-.009a.03.03 0 01.01-.007h.007c.51.049 1.15.107 1.856.164V6a1 1 0 102 0V4.428a51.34 51.34 0 003 .108c.912 0 1.963-.045 3-.108zM3.496 10c.003.17.004.338.004.5 0 2.085-.245 4.95-.393 6.487a.03.03 0 000 .004v.001a.017.017 0 00.007.008h13.772a.017.017 0 00.006-.006v-.007c-.147-1.537-.392-4.402-.392-6.487 0-.162.002-.33.004-.5H3.496z\"/> </svg>"
    const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8 2a1 1 0 011 1v.416c1.048.05 2.093.084 3 .084s1.952-.034 3-.084V3a1 1 0 112 0v.302c1.051-.067 2.01-.14 2.719-.197 1.24-.1 2.275.94 2.17 2.18-.147 1.73-.389 4.935-.389 7.215 0 2.327.252 5.616.398 7.319A2.008 2.008 0 0119.9 22H4.1a2.008 2.008 0 01-1.998-2.181c.146-1.703.398-4.992.398-7.319 0-2.28-.242-5.484-.39-7.215a2.017 2.017 0 012.171-2.18c.709.057 1.668.13 2.719.197V3a1 1 0 011-1zm7 3.418V7a1 1 0 102 0V5.306a170.422 170.422 0 002.884-.208l.007.005a.022.022 0 01.005.007v.005c-.1 1.171-.246 3.054-.33 4.885H4.434c-.084-1.83-.23-3.714-.33-4.885V5.11a.02.02 0 01.005-.007.02.02 0 01.006-.004h.006c.736.059 1.757.136 2.879.207V7a1 1 0 102 0V5.418c1.044.049 2.086.082 3 .082.914 0 1.956-.033 3-.082zM4.497 12l.003.5c0 2.423-.26 5.79-.405 7.49a.02.02 0 000 .004v.002l.003.003.001.001H19.9l.002-.001a.014.014 0 00.003-.005v-.005c-.145-1.7-.405-5.066-.405-7.489l.003-.5H4.497z\"/> </svg>"

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
