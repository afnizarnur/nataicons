
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: 'MailOpenIcon', 
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

    const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M10.597.639a2 2 0 00-1.194 0l-7 2.187A2 2 0 001 4.736v11.17a2.008 2.008 0 002.167 2c1.619-.128 4.668-.343 6.833-.343s5.214.215 6.833.343a2.008 2.008 0 002.167-2V4.736a2 2 0 00-1.404-1.91l-7-2.187zM3 4.735l7-2.187 7 2.187v1.647l-7 3.5-7-3.5V4.735zm0 3.883v7.29l.002.002a.01.01 0 00.004.002h.003c1.616-.128 4.738-.35 6.991-.35 2.254 0 5.375.223 6.991.35h.003l.004-.002.002-.002v-7.29l-6.106 3.053a2 2 0 01-1.788 0L3 8.618z\"/> </svg>"
    const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12.633 1.157a2 2 0 00-1.265 0L7.183 2.55 3.368 3.823A2 2 0 002 5.721v14.184a2.007 2.007 0 002.17 1.999c1.781-.145 5.327-.404 7.83-.404 2.502 0 6.049.26 7.83.404a2.007 2.007 0 002.17-2V5.722a2 2 0 00-1.367-1.898l-3.817-1.272-4.183-1.394zM7.816 4.449L12 3.054l4.184 1.395L20 5.72v2.69l-8 4.445-8-4.444V5.72l3.816-1.272zM4 10.699v9.208l.002.002a.01.01 0 00.003.003h.004C5.786 19.766 9.406 19.5 12 19.5c2.594 0 6.214.266 7.991.41h.003l.004-.002.002-.002V10.7l-7.029 3.905a2 2 0 01-1.942 0L4 10.7z\"/> </svg>"

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
