
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: 'ClipboardPlusIcon', 
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

    const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8 1a2 2 0 00-2 2v2a2 2 0 002 2h4a2 2 0 002-2h1.868l.003.003a.023.023 0 01.005.007v.007C15.728 6.38 15.5 8.75 15.5 10.5c0 1.75.228 4.12.376 5.483a.02.02 0 010 .005v.002a.023.023 0 01-.005.007l-.002.002h-.001l-.002.001H4.132l-.003-.003a.021.021 0 01-.004-.007v-.007c.147-1.362.375-3.732.375-5.483 0-1.75-.228-4.12-.376-5.483V5.01A.021.021 0 014.133 5H6V3H4.134a2.014 2.014 0 00-1.998 2.233C2.284 6.596 2.5 8.87 2.5 10.5c0 1.63-.216 3.904-.364 5.267A2.014 2.014 0 004.134 18h11.732a2.014 2.014 0 001.998-2.233c-.148-1.363-.364-3.636-.364-5.267 0-1.63.216-3.904.364-5.267A2.014 2.014 0 0015.866 3H14a2 2 0 00-2-2H8zm0 2h4v2H8V3zm1 7.5V9a1 1 0 012 0v1.5h1.5a1 1 0 110 2H11V14a1 1 0 11-2 0v-1.5H7.5a1 1 0 110-2H9z\"/> </svg>"
    const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M9 2a2 2 0 00-2 2H5.124a2.01 2.01 0 00-1.998 2.218c.168 1.626.445 4.643.445 6.782 0 2.14-.277 5.156-.445 6.782A2.01 2.01 0 005.124 22h13.752a2.01 2.01 0 001.998-2.218c-.168-1.626-.445-4.643-.445-6.782 0-2.14.277-5.156.445-6.782A2.01 2.01 0 0018.876 4H17v2h1.878l.003.003a.013.013 0 01.003.005v.005c-.167 1.623-.455 4.733-.455 6.987 0 2.254.288 5.364.455 6.987v.005l-.003.005-.002.002h-.001l-.002.001H5.12l-.002-.003a.016.016 0 01-.003-.005v-.005c.167-1.623.455-4.733.455-6.987 0-2.254-.288-5.364-.455-6.987v-.005l.003-.005A.015.015 0 015.122 6H7a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H9zm0 2h6v2H9V4zm3 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H8a1 1 0 110-2h3v-3a1 1 0 011-1z\"/> </svg>"

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