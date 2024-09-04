
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: 'BookmarkIcon', 
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

    const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path stroke=\"currentColor\" stroke-width=\"2\" d=\"M3.093 3.09A1.007 1.007 0 014.095 2h11.81c.589 0 1.05.504 1.002 1.09-.144 1.778-.407 5.362-.407 7.91 0 1.9.146 4.373.28 6.247.067.933-1.072 1.46-1.734.8l-4.339-4.34a1 1 0 00-1.414 0l-4.34 4.34c-.66.66-1.8.133-1.733-.8.134-1.874.28-4.348.28-6.247 0-2.548-.263-6.132-.407-7.91z\"/> </svg>"
    const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path stroke=\"currentColor\" stroke-width=\"2\" d=\"M5.093 5.09A1.007 1.007 0 016.095 4h11.81c.588 0 1.05.504 1.002 1.09-.144 1.778-.407 5.362-.407 7.91 0 1.9.146 4.373.28 6.247.067.933-1.072 1.46-1.734.8l-4.339-4.34a1 1 0 00-1.414 0l-4.34 4.34c-.66.66-1.8.133-1.733-.8.134-1.874.28-4.348.28-6.247 0-2.548-.263-6.132-.407-7.91z\"/> </svg>"

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
