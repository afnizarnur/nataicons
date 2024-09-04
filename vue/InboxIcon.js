
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: 'InboxIcon', 
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

    const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M18.871 4.333a2.023 2.023 0 00-2.206-2.203c-1.653.159-4.576.406-6.665.406-2.089 0-5.012-.248-6.665-.406a2.024 2.024 0 00-2.206 2.203c.148 1.563.371 4.244.371 6.167 0 1.978-.236 4.757-.383 6.296A2.01 2.01 0 003.115 19h13.77a2.01 2.01 0 001.998-2.204c-.147-1.54-.383-4.318-.383-6.296 0-1.923.223-4.604.371-6.167zm-2.015-.212h.007l.01.007a.028.028 0 01.007.01v.006c-.136 1.437-.343 3.893-.376 5.856h-1.441a3 3 0 00-2.487 1.322l-.81 1.2a1 1 0 01-.829.441H9.063a1 1 0 01-.829-.44l-.81-1.201A3 3 0 004.937 10H3.496c-.033-1.963-.24-4.419-.376-5.856v-.007l.007-.009a.03.03 0 01.01-.007h.007c1.652.158 4.66.415 6.856.415 2.195 0 5.204-.257 6.856-.415zM3.466 12a95.877 95.877 0 01-.359 4.989v.003a.017.017 0 00.007.008h13.773l.002-.003.003-.003v-.007A95.874 95.874 0 0116.533 12h-1.47a1 1 0 00-.829.44l-.81 1.201a3 3 0 01-2.487 1.322H9.063a3 3 0 01-2.487-1.322l-.81-1.2A1 1 0 004.937 12h-1.47z\"/> </svg>"
    const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4.104 5.11a.02.02 0 01.005-.007.02.02 0 01.006-.004h.006C5.933 5.244 9.459 5.5 12 5.5c2.541 0 6.067-.255 7.88-.402h.004a.02.02 0 01.008.005.019.019 0 01.004.007v.005c-.136 1.611-.362 4.568-.393 6.885h-1.94a3 3 0 00-2.486 1.322l-1.061 1.57a1 1 0 01-.829.441h-2.374a1 1 0 01-.829-.44l-1.06-1.571A3 3 0 006.437 12h-1.94c-.03-2.317-.257-5.274-.393-6.885a.02.02 0 010-.004zm.37 8.89c-.07 2.168-.262 4.62-.38 5.99a.02.02 0 000 .004l.002.002s0 .002.002.003l.001.001h15.803l.001-.001.002-.003.001-.002v-.005c-.117-1.37-.308-3.82-.378-5.989h-1.964a1 1 0 00-.829.44l-1.06 1.572a3 3 0 01-2.487 1.321h-2.374a3 3 0 01-2.487-1.321l-1.06-1.572a1 1 0 00-.829-.44H4.473zM4.28 3.105c-1.24-.1-2.275.94-2.17 2.18.147 1.73.389 4.935.389 7.215 0 2.327-.252 5.616-.398 7.319A2.008 2.008 0 004.1 22h15.8a2.008 2.008 0 001.998-2.181c-.146-1.703-.398-4.992-.398-7.319 0-2.28.242-5.484.39-7.215a2.017 2.017 0 00-2.171-2.18C17.904 3.25 14.45 3.5 12 3.5c-2.451 0-5.904-.249-7.719-.395z\"/> </svg>"

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