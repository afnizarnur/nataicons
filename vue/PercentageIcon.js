
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: 'PercentageIcon', 
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

    const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M2.945 10.025a7.08 7.08 0 1114.16 0 7.08 7.08 0 01-14.16 0zm7.08-9.08a9.08 9.08 0 100 18.16 9.08 9.08 0 000-18.16zM7.141 5.727A1 1 0 105.727 7.14l7.182 7.182a1 1 0 001.414-1.414L7.141 5.727zm7.373 1.605a1.796 1.796 0 11-3.591 0 1.796 1.796 0 013.59 0zm-7.182 7.182a1.796 1.796 0 100-3.591 1.796 1.796 0 000 3.59z\"/> </svg>"
    const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM8.707 7.293a1 1 0 00-1.414 1.414l8 8a1 1 0 001.414-1.414l-8-8zM17 9a2 2 0 11-4 0 2 2 0 014 0zm-8 8a2 2 0 100-4 2 2 0 000 4z\"/> </svg>"

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
