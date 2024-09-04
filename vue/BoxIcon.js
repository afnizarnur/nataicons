
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: 'BoxIcon', 
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

    const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.108 1a2.009 2.009 0 00-2 2.19C1.256 4.814 1.5 7.848 1.5 10c0 2.153-.245 5.187-.391 6.81A2.009 2.009 0 003.108 19h13.784a2.009 2.009 0 002-2.19c-.148-1.623-.392-4.657-.392-6.81 0-2.153.244-5.187.391-6.81A2.009 2.009 0 0016.892 1H3.108zM3.1 3.01v-.003c0-.001 0-.003.002-.005A.014.014 0 013.106 3h13.788l.003.002a.013.013 0 01.002.004v.005c-.048.53-.107 1.22-.165 1.989H3.266c-.058-.768-.117-1.46-.165-1.99zM3.4 7c.059 1.037.1 2.089.1 3 0 2.254-.253 5.37-.4 6.99v.003l.003.005a.013.013 0 00.003.002h13.788l.003-.002a.012.012 0 00.002-.005v-.004c-.146-1.62-.399-4.735-.399-6.989 0-.911.041-1.963.1-3H3.4zM7 12a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z\"/> </svg>"
    const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M20.77 4H3.228l-.001.002a.013.013 0 00-.003.004v.003c.06.748.143 1.815.217 2.991h17.117c.075-1.176.156-2.243.217-2.99v-.004A.014.014 0 0020.77 4zM3.971 9.727A23.196 23.196 0 013.724 9h16.552a23.08 23.08 0 01-.248.727l-.02.06c-.223.627-.508 1.431-.508 2.213 0 2.594.266 6.214.41 7.991v.005l-.002.002V20l-.002.001H4.094l-.002-.002a.011.011 0 01-.003-.003v-.004c.145-1.777.411-5.397.411-7.991 0-.782-.285-1.586-.507-2.213l-.021-.06zM3.23 2h17.538a2.008 2.008 0 012 2.171c-.076.935-.185 2.369-.27 3.885-.047.82-.334 1.63-.559 2.264l-.026.075c-.256.724-.414 1.21-.414 1.605 0 2.502.26 6.049.404 7.83a2.007 2.007 0 01-2 2.17H4.096a2.007 2.007 0 01-1.999-2.17c.145-1.781.404-5.327.404-7.83 0-.395-.158-.881-.414-1.605l-.026-.075c-.225-.634-.512-1.444-.558-2.264-.086-1.516-.194-2.95-.27-3.885A2.008 2.008 0 013.23 2zM9 13a1 1 0 100 2h6a1 1 0 100-2H9z\"/> </svg>"

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
