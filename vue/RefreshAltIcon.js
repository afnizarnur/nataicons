
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: 'RefreshAltIcon', 
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

    const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M2.945 11.76a1 1 0 101.86-.736c-.892-2.256.024-4.967 2.316-6.29 1.987-1.147 4.354-.879 5.934.45l-2.49.295a1 1 0 10.234 1.986l4.31-.509a1 1 0 00.863-.793l.802-3.927a1 1 0 00-1.96-.4l-.385 1.889c-2.226-1.939-5.573-2.302-8.308-.723C3 4.803 1.675 8.549 2.945 11.76zm14.11-3.52a1 1 0 00-1.86.736c.892 2.256-.024 4.967-2.316 6.29-1.987 1.147-4.355.879-5.934-.45l2.49-.295a1 1 0 00-.234-1.986l-4.31.509a1 1 0 00-.863.793l-.802 3.927a1 1 0 001.96.4l.385-1.889c2.226 1.939 5.573 2.302 8.308.723 3.12-1.801 4.446-5.547 3.176-8.758z\"/> </svg>"
    const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.073 14.519a1 1 0 001.855-.75c-1.288-3.186-.1-6.866 2.879-8.586 2.79-1.61 6.288-1 8.457 1.312l-3.769.373a1 1 0 10.197 1.99l5.517-.545a1 1 0 00.886-.82l.916-5.148a1 1 0 00-1.97-.35l-.52 2.924c-2.79-2.789-7.167-3.515-10.714-1.468-3.878 2.239-5.38 6.995-3.734 11.068zM20.927 9.48a1 1 0 10-1.854.75c1.287 3.186.098 6.866-2.88 8.586-2.79 1.61-6.288 1-8.457-1.312l3.769-.373a1 1 0 00-.197-1.99l-5.517.545a1 1 0 00-.886.82l-.916 5.148a1 1 0 001.97.35l.52-2.924c2.79 2.789 7.167 3.515 10.714 1.468 3.878-2.239 5.38-6.995 3.734-11.068z\"/> </svg>"

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
