
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: 'CopyIcon', 
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

    const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4 2a2 2 0 00-2 2v9a2 2 0 002 2h2v2a2 2 0 002 2h9a2 2 0 002-2V8a2 2 0 00-2-2h-2V4a2 2 0 00-2-2H4zm9 4V4H4v9h2V8a2 2 0 012-2h5zM8 8h9v9H8V8z\"/> </svg>"
    const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4.2 2A2.2 2.2 0 002 4.2V15a2.2 2.2 0 002.2 2.2h2.6v2.6A2.2 2.2 0 009 22h10.8a2.2 2.2 0 002.2-2.2V9a2.2 2.2 0 00-2.2-2.2h-2.6V4.2A2.2 2.2 0 0015 2H4.2zm11 4.8V4.2A.2.2 0 0015 4H4.2a.2.2 0 00-.2.2V15c0 .11.09.2.2.2h2.6V9A2.2 2.2 0 019 6.8h6.2zM8.8 9c0-.11.09-.2.2-.2h10.8c.11 0 .2.09.2.2v10.8a.2.2 0 01-.2.2H9a.2.2 0 01-.2-.2V9z\"/> </svg>"

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
