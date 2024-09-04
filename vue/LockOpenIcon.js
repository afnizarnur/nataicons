
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: 'LockOpenIcon', 
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

    const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M7 4a1 1 0 011-1h4a1 1 0 011 1v.5h2V4a3 3 0 00-3-3H8a3 3 0 00-3 3v2h-.861a2.017 2.017 0 00-2 2.24c.13 1.168.299 2.96.299 4.26 0 1.3-.17 3.092-.298 4.26A2.017 2.017 0 004.139 19h11.722a2.017 2.017 0 002-2.24c-.13-1.168-.299-2.96-.299-4.26 0-1.3.17-3.092.298-4.26A2.017 2.017 0 0015.861 6H7V4zM4.128 8.02v-.005l11.739-.011a.026.026 0 01.005.008v.009c-.128 1.17-.31 3.06-.31 4.479 0 1.42.182 3.31.31 4.48v.008l-.001.002a.027.027 0 01-.008.01H4.138l-.005-.004a.026.026 0 01-.005-.008v-.009c.128-1.17.31-3.06.31-4.479 0-1.42-.182-3.31-.31-4.48zm0-.005L15.863 8H4.137l-.004.004a.025.025 0 00-.005.008v.003z\"/> </svg>"
    const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M9 5a1 1 0 011-1h4a1 1 0 011 1v.5a1 1 0 102 0V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v3H5.146a2.017 2.017 0 00-1.998 2.252C3.296 11.52 3.5 13.543 3.5 15c0 1.457-.204 3.48-.352 4.748A2.017 2.017 0 005.146 22h13.708a2.017 2.017 0 001.998-2.252C20.704 18.48 20.5 16.457 20.5 15c0-1.457.204-3.48.352-4.748A2.017 2.017 0 0018.854 8H9V5zm-3.865 5.02v-.008a.025.025 0 01.01-.012h13.711l.004.004a.025.025 0 01.005.008.027.027 0 010 .008c-.148 1.27-.365 3.395-.365 4.98 0 1.585.217 3.71.365 4.98v.007a.025.025 0 01-.01.013H5.145l-.004-.004a.025.025 0 01-.005-.008v-.008c.148-1.27.365-3.395.365-4.98 0-1.585-.217-3.71-.365-4.98z\"/> </svg>"

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
