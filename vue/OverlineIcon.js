
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: 'OverlineIcon', 
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

    const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M16.99 1.865a1 1 0 01-.854 1.126L16 2l-.135-.99a1 1 0 011.126.855zm-1.126-.856L16 2l.135.99-.003.001-.008.001-.033.005-.123.016-.453.058c-.385.047-.922.11-1.533.174-1.213.125-2.756.255-3.982.255-1.226 0-2.768-.13-3.982-.255a79.145 79.145 0 01-1.986-.232l-.123-.016-.033-.005h-.008l-.002-.001h-.001l.134-.98-.134.98a1 1 0 01.27-1.982h.002l.008.001.03.004.116.016.44.056c.374.046.898.108 1.493.17C7.425 1.38 8.883 1.5 10 1.5s2.575-.12 3.776-.245a77.113 77.113 0 001.933-.225l.117-.016.03-.004h.008zM5 5.5a1 1 0 10-2 0v6a7 7 0 1014 0v-6a1 1 0 10-2 0v6a5 5 0 01-10 0v-6z\"/> </svg>"
    const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M18.99 3.865a1 1 0 01-.854 1.126L18 4l-.135-.99a1 1 0 011.126.855zm-1.126-.856L18 4l.135.99-.003.001-.009.001-.032.005-.123.016-.453.058c-.385.047-.922.11-1.533.174-1.214.125-2.756.255-3.982.255-1.226 0-2.768-.13-3.982-.255a79.136 79.136 0 01-1.986-.232l-.123-.016-.033-.005h-.008l-.002-.001h-.001l.134-.98-.134.98a1 1 0 01.27-1.982h.002l.008.001.03.004.116.016.44.056c.374.046.898.108 1.493.17C9.425 3.38 10.883 3.5 12 3.5s2.575-.12 3.776-.245a77.193 77.193 0 001.933-.225l.117-.016.03-.004h.008zM7 8.5a1 1 0 10-2 0v6a7 7 0 1014 0v-6a1 1 0 10-2 0v6a5 5 0 01-10 0v-6z\"/> </svg>"

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
