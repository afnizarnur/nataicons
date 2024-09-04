
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: 'ListIcon', 
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

    const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M19 4a1 1 0 01-1 1H7a1 1 0 010-2h11a1 1 0 011 1zM4 4a1 1 0 01-1 1H2a1 1 0 010-2h1a1 1 0 011 1zm15 6a1 1 0 01-1 1H7a1 1 0 110-2h11a1 1 0 011 1zM4 10a1 1 0 01-1 1H2a1 1 0 110-2h1a1 1 0 011 1zm14 7a1 1 0 100-2H7a1 1 0 100 2h11zM3 17a1 1 0 100-2H2a1 1 0 100 2h1z\"/> </svg>"
    const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M21 6a1 1 0 01-1 1H9a1 1 0 010-2h11a1 1 0 011 1zM6 6a1 1 0 01-1 1H4a1 1 0 010-2h1a1 1 0 011 1zm15 6a1 1 0 01-1 1H9a1 1 0 110-2h11a1 1 0 011 1zM6 12a1 1 0 01-1 1H4a1 1 0 110-2h1a1 1 0 011 1zm14 7a1 1 0 100-2H9a1 1 0 100 2h11zM5 19a1 1 0 100-2H4a1 1 0 100 2h1z\"/> </svg>"

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
