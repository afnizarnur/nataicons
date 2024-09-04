
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: 'ChevronDoubleRightIcon', 
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

    const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M2.293 15.293a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414l-6-6a1 1 0 00-1.414 1.414L7.586 10l-5.293 5.293zm8 0a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414l-6-6a1 1 0 10-1.414 1.414L15.586 10l-5.293 5.293z\"/> </svg>"
    const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M5.207 20.207l7-7a1 1 0 000-1.414l-7-7a1 1 0 00-1.414 1.414l6.293 6.293-6.293 6.293a1 1 0 101.414 1.414zm8 0l7-7a1 1 0 000-1.414l-7-7a1 1 0 10-1.414 1.414l6.293 6.293-6.293 6.293a1 1 0 001.414 1.414z\"/> </svg>"

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
