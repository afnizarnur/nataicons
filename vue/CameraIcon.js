
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: 'CameraIcon', 
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

    const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M7.347 2a2 2 0 00-1.973 1.671L5.153 5H3.16a2.02 2.02 0 00-1.997 2.274c.147 1.168.337 2.943.337 4.226s-.19 3.057-.337 4.226A2.02 2.02 0 003.16 18h13.68a2.02 2.02 0 001.997-2.274c-.147-1.169-.337-2.943-.337-4.226s.19-3.058.337-4.226A2.02 2.02 0 0016.84 5h-1.993l-.221-1.329A2 2 0 0012.653 2H7.347zm0 2h5.306L10.27 7.009a4 4 0 00-4.094 5.17l-3.022 3.817a.03.03 0 01-.006-.01v-.004a.03.03 0 010-.007c.146-1.17.352-3.055.352-4.475 0-1.42-.206-3.304-.353-4.475a.03.03 0 010-.007v-.003A.03.03 0 013.16 7h1.994a2 2 0 001.973-1.671L7.347 4zm-1.169 8.184L3.158 16h13.683l.005-.004a.03.03 0 00.006-.01v-.004l.001-.002v-.005c-.147-1.17-.353-3.055-.353-4.475 0-1.42.206-3.304.353-4.475v-.01a.03.03 0 00-.007-.01.024.024 0 00-.005-.005h-1.994a2 2 0 01-1.973-1.671L12.653 4l-2.38 3.01a4 4 0 11-4.095 5.174zM8 11a2 2 0 114 0 2 2 0 01-4 0z\"/> </svg>"
    const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8.78 3a2 2 0 00-1.94 1.515L6.22 7H4.145a2.017 2.017 0 00-1.998 2.252C2.296 10.52 2.5 12.543 2.5 14c0 1.415-.192 3.364-.34 4.639a2.026 2.026 0 002.17 2.252c1.828-.147 5.241-.391 7.67-.391 2.429 0 5.842.244 7.67.391a2.026 2.026 0 002.17-2.252c-.148-1.275-.34-3.224-.34-4.639 0-1.457.204-3.48.352-4.748A2.017 2.017 0 0019.854 7H17.78l-.621-2.485A1.999 1.999 0 0015.22 3H8.78zm0 2h.005l7.075 2.558A2 2 0 0017.78 9h2.07l.01.004a.025.025 0 01.005.008v.008c-.148 1.27-.365 3.395-.365 4.98 0 1.54.205 3.59.352 4.868a.02.02 0 010 .011.035.035 0 01-.017.018h-.005c-1.826-.146-5.312-.397-7.83-.397s-6.004.251-7.83.398h-.004a.035.035 0 01-.017-.019l-.001-.004a.03.03 0 010-.007C4.295 17.59 4.5 15.54 4.5 14c0-1.585-.217-3.71-.365-4.98v-.008A.025.025 0 014.145 9h2.074a2 2 0 001.94-1.515L8.781 5zm11.07 4h.006L15.86 7.556a1.866 1.866 0 01-.02-.07L15.22 5H8.784l7.075 2.556v.002L19.85 9zM10 13a2 2 0 114 0 2 2 0 01-4 0zm2-4a4 4 0 100 8 4 4 0 000-8z\"/> </svg>"

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
