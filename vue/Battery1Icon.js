
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: 'Battery1Icon', 
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

    const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3 5.009v9.703l.004.004a.023.023 0 00.007.004h.007c1.456-.177 4.064-.46 5.982-.46 1.918 0 4.526.283 5.982.46h.007a.023.023 0 00.01-.008L15 14.71V5.009l-.004-.004a.022.022 0 00-.007-.004h-.007c-1.456.177-4.064.46-5.982.46-1.918 0-4.526-.283-5.982-.46h-.007a.022.022 0 00-.01.008zM1 5.01a2.015 2.015 0 012.26-1.996c1.458.178 3.957.445 5.74.445 1.783 0 4.282-.267 5.74-.445A2.015 2.015 0 0117 5.011v9.699a2.015 2.015 0 01-2.26 1.996c-1.458-.178-3.957-.446-5.74-.446-1.783 0-4.282.268-5.74.446A2.015 2.015 0 011 14.71v-9.7zm18 1.85a1 1 0 011 1v4.5a1 1 0 11-2 0v-4.5a1 1 0 011-1zm-12 1a1 1 0 00-2 0v4a1 1 0 102 0v-4z\"/> </svg>"
    const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4 7.149v9.701l.004.004a.022.022 0 00.007.005h.007c1.456-.177 4.064-.46 5.982-.46 1.918 0 4.526.283 5.982.46a.02.02 0 00.005 0h.002a.022.022 0 00.007-.005.014.014 0 00.004-.004v-9.7l-.004-.004a.022.022 0 00-.007-.005h-.007c-1.456.177-4.064.46-5.982.46-1.918 0-4.526-.283-5.982-.46h-.007a.022.022 0 00-.01.009zM2 7.15a2.015 2.015 0 012.26-1.995c1.458.177 3.957.445 5.74.445 1.783 0 4.282-.268 5.74-.445A2.015 2.015 0 0118 7.15v9.7a2.015 2.015 0 01-2.26 1.995c-1.458-.177-3.957-.445-5.74-.445-1.783 0-4.282.268-5.74.445A2.015 2.015 0 012 16.85v-9.7zM20 9a1 1 0 011 1v4.5a1 1 0 11-2 0V10a1 1 0 011-1zM8 10a1 1 0 10-2 0v4a1 1 0 102 0v-4z\"/> </svg>"

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
