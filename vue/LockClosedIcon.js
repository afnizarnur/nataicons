
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: 'LockClosedIcon', 
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

    const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M7 4a1 1 0 011-1h4a1 1 0 011 1v2H7V4zM5 6V4a3 3 0 013-3h4a3 3 0 013 3v2h.861a2.017 2.017 0 012 2.24c-.13 1.168-.299 2.96-.299 4.26 0 1.3.17 3.092.298 4.26A2.017 2.017 0 0115.861 19H4.139a2.017 2.017 0 01-2-2.24c.13-1.168.299-2.96.299-4.26 0-1.3-.17-3.092-.298-4.26A2.017 2.017 0 014.139 6H5zm0 2h-.863l-.004.004a.025.025 0 00-.005.008v.009c.128 1.17.31 3.06.31 4.479 0 1.42-.182 3.31-.31 4.48v.008c0 .002.002.005.005.008a.018.018 0 00.004.004h11.726l.004-.004a.027.027 0 00.004-.006v-.002l.002-.003v-.006c-.13-1.17-.31-3.06-.31-4.479 0-1.42.18-3.31.31-4.48v-.007h-.001a.026.026 0 00-.005-.01l-11.74.012L15.864 8H5z\"/> </svg>"
    const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M9 5a1 1 0 011-1h4a1 1 0 011 1v3H9V5zM7 8V5a3 3 0 013-3h4a3 3 0 013 3v3h1.854a2.017 2.017 0 011.998 2.252C20.704 11.52 20.5 13.543 20.5 15c0 1.457.204 3.48.352 4.748A2.017 2.017 0 0118.854 22H5.146a2.017 2.017 0 01-1.998-2.252C3.296 18.48 3.5 16.457 3.5 15c0-1.457-.204-3.48-.352-4.748A2.017 2.017 0 015.146 8H7zm0 2H5.144l-.004.004a.025.025 0 00-.005.008v.008c.148 1.27.365 3.395.365 4.98 0 1.585-.217 3.71-.365 4.98v.008a.025.025 0 00.01.012h13.711l.004-.004a.025.025 0 00.005-.008v-.008c-.148-1.27-.365-3.395-.365-4.98 0-1.585.217-3.71.365-4.98a.027.027 0 000-.008.025.025 0 00-.01-.012H7z\"/> </svg>"

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
