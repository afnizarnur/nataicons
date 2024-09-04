
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: 'EyeIcon', 
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

    const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.415 10.242c-.067-.086-.13-.167-.186-.242a16.806 16.806 0 011.803-2.025C6.429 6.648 8.187 5.5 10 5.5c1.813 0 3.57 1.148 4.968 2.475A16.816 16.816 0 0116.771 10a16.9 16.9 0 01-1.803 2.025C13.57 13.352 11.813 14.5 10 14.5c-1.813 0-3.57-1.148-4.968-2.475a16.799 16.799 0 01-1.617-1.783zm15.423-.788L18 10l.838.546-.002.003-.003.004-.01.016-.037.054a17.123 17.123 0 01-.628.854 18.805 18.805 0 01-1.812 1.998C14.848 14.898 12.606 16.5 10 16.5s-4.848-1.602-6.346-3.025a18.806 18.806 0 01-2.44-2.852 6.01 6.01 0 01-.037-.054l-.01-.016-.003-.004-.001-.002c0-.001-.001-.001.837-.547l-.838-.546.002-.003.003-.004.01-.016a6.84 6.84 0 01.17-.245 18.804 18.804 0 012.308-2.66C5.151 5.1 7.394 3.499 10 3.499s4.848 1.602 6.346 3.025a18.803 18.803 0 012.44 2.852l.037.054.01.016.003.004.001.002zM18 10l.838-.546.355.546-.355.546L18 10zM1.162 9.454L2 10l-.838.546L.807 10l.355-.546zM9 10a1 1 0 112 0 1 1 0 01-2 0zm1-3a3 3 0 100 6 3 3 0 000-6z\"/> </svg>"
    const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4.484 12.308A18.55 18.55 0 014.24 12a18.647 18.647 0 012.073-2.264C7.888 8.286 9.9 7 12 7s4.112 1.285 5.686 2.736A18.642 18.642 0 0119.76 12a18.64 18.64 0 01-2.073 2.264C16.111 15.714 14.1 17 12 17s-4.112-1.285-5.687-2.736a18.644 18.644 0 01-1.829-1.956zm17.346-.866L21 12l.83.558-.002.002-.003.006-.012.016a8.723 8.723 0 01-.188.266 20.644 20.644 0 01-2.583 2.888C17.358 17.286 14.87 19 12 19s-5.359-1.715-7.041-3.264a20.649 20.649 0 01-2.584-2.888 12.29 12.29 0 01-.188-.266l-.012-.016-.003-.006-.001-.001v-.001L3 12l-.83-.558.002-.002.003-.006.012-.016a8.634 8.634 0 01.188-.266 20.651 20.651 0 012.583-2.888C6.642 6.714 9.13 5 12 5s5.359 1.715 7.041 3.264a20.646 20.646 0 012.584 2.888 12.198 12.198 0 01.188.266l.012.016.003.006.001.001v.001zM21 12l.83-.557.375.557-.375.557L21 12zm-18.83-.557L3 12l-.83.557L1.795 12l.375-.557zM11 12a1 1 0 112 0 1 1 0 01-2 0zm1-3a3 3 0 100 6 3 3 0 000-6z\"/> </svg>"

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
