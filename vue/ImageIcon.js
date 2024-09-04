
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: 'ImageIcon', 
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

    const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.098 3.118v.005c.131 1.644.346 4.674.346 6.877 0 .209-.001.425-.005.647l3.354-3.354.673-.673.705.638 2.97 2.687 2.652-2.652.646-.646.701.585 1.444 1.203c.063-1.915.216-4.033.318-5.312v-.006a.024.024 0 00-.006-.008.024.024 0 00-.008-.005h-.005c-1.644.138-4.677.367-6.883.367-2.206 0-5.238-.229-6.883-.367a.02.02 0 00-.004 0h-.001a.024.024 0 00-.008.005.024.024 0 00-.006.008v.001zm13.47 7.908l-2.007-1.673-1.935 1.936 4.14 3.746a96.002 96.002 0 01-.197-4.01zM1.106 16.71c.078-.975.182-2.407.255-3.851l-.067-.067.074-.074A57.9 57.9 0 001.444 10c0-2.114-.208-5.073-.34-6.718A2.02 2.02 0 013.286 1.11c1.645.139 4.602.36 6.714.36s5.069-.221 6.714-.36a2.02 2.02 0 012.182 2.17c-.131 1.646-.34 4.605-.34 6.719 0 2.11.208 5.063.34 6.711a2.02 2.02 0 01-2.194 2.17c-1.647-.147-4.596-.381-6.702-.381s-5.055.234-6.702.382a2.02 2.02 0 01-2.193-2.171zm6.43-7.331l-4.211 4.21c-.07 1.257-.159 2.445-.225 3.28v.005c0 .002.002.005.006.009a.026.026 0 00.008.005h.006c1.645-.145 4.675-.388 6.88-.388 1.758 0 4.039.154 5.726.29L7.534 9.38z\"/> </svg>"
    const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4.098 4.11v.004C4.244 5.924 4.5 9.456 4.5 12c0 .35-.005.719-.014 1.1l3.807-3.807.674-.674.706.641 2.96 2.692 2.66-2.66.667-.666.704.627 2.837 2.52c.014-2.523.26-5.902.401-7.659V4.11a.02.02 0 00-.005-.006.02.02 0 00-.006-.005h-.005c-1.81.146-5.342.402-7.886.402-2.544 0-6.076-.256-7.886-.402H4.11l-.006.005a.02.02 0 00-.005.006zM19.56 14.503l-3.52-3.13-1.925 1.926 5.678 5.161a135.158 135.158 0 01-.233-3.958zM4.098 19.886c.076-.94.181-2.345.265-3.835l4.67-4.67 9.238 8.398c-1.88-.134-4.355-.279-6.271-.279-2.544 0-6.076.256-7.886.402H4.11a.02.02 0 01-.006-.005.02.02 0 01-.005-.006v-.005zM2.104 4.275a2.016 2.016 0 012.17-2.17C6.089 2.25 9.547 2.5 12 2.5c2.454 0 5.912-.25 7.725-.396 1.237-.1 2.27.934 2.17 2.17C21.75 6.089 21.5 9.547 21.5 12c0 2.454.25 5.912.396 7.725a2.016 2.016 0 01-2.17 2.17C17.911 21.75 14.453 21.5 12 21.5c-2.454 0-5.912.25-7.725.396a2.016 2.016 0 01-2.17-2.17C2.25 17.911 2.5 14.453 2.5 12c0-2.454-.25-5.912-.396-7.725z\"/> </svg>"

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