
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: 'MaximizeIcon', 
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

    const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M19 2a1 1 0 00-1-1h-6a1 1 0 100 2h3.586l-3.793 3.793a1 1 0 001.414 1.414L17 4.414V8a1 1 0 102 0V2zM1 18a1 1 0 001 1h6a1 1 0 100-2H4.414l3.793-3.793a1 1 0 10-1.414-1.414L3 15.586V12a1 1 0 10-2 0v6z\"/> </svg>"
    const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M22 3a1 1 0 00-1-1h-6a1 1 0 100 2h3.586l-4.293 4.293a1 1 0 001.414 1.414L20 5.414V9a1 1 0 102 0V3zM2 21a1 1 0 001 1h6a1 1 0 100-2H5.414l4.293-4.293a1 1 0 00-1.414-1.414L4 18.586V15a1 1 0 10-2 0v6z\"/> </svg>"

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
