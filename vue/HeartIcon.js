
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: 'HeartIcon', 
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

    const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M5.964 4C4.37 4 2.901 5.472 2.901 7.515c0 1.67 1.181 3.508 2.819 5.2 1.57 1.62 3.365 2.91 4.27 3.517.898-.685 2.72-2.141 4.316-3.836.81-.86 1.539-1.756 2.06-2.624.529-.88.79-1.643.79-2.257C17.156 5.472 15.688 4 14.092 4s-3.064 1.472-3.064 3.515a1 1 0 11-2 0C9.028 5.472 7.56 4 5.964 4zm4.064.226C9.121 2.892 7.668 2 5.964 2 3.071 2 .901 4.571.901 7.515c0 2.506 1.69 4.843 3.382 6.59 1.736 1.793 3.696 3.188 4.636 3.817.693.464 1.59.427 2.245-.07.92-.7 2.869-2.25 4.598-4.085.864-.917 1.696-1.93 2.318-2.965.613-1.02 1.075-2.15 1.076-3.283v-.004c0-2.944-2.17-5.515-5.064-5.515-1.704 0-3.157.892-4.064 2.226z\"/> </svg>"
    const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M7.5 5C5.663 5 4 6.69 4 9c0 1.914 1.364 3.999 3.205 5.886 1.772 1.816 3.786 3.25 4.756 3.898.962-.73 3-2.35 4.799-4.248.912-.962 1.738-1.971 2.331-2.952C19.693 10.59 20 9.714 20 9c0-2.31-1.663-4-3.5-4C14.664 5 13 6.69 13 9a1 1 0 11-2 0c0-2.31-1.664-4-3.5-4zm4.5.552C11.02 4.027 9.402 3 7.5 3 4.366 3 2 5.788 2 9c0 2.757 1.88 5.342 3.774 7.283 1.938 1.987 4.116 3.525 5.12 4.193.69.459 1.58.428 2.236-.069.98-.742 3.149-2.455 5.082-4.495.966-1.02 1.896-2.145 2.59-3.292C21.488 11.486 22 10.24 22 9c0-3.212-2.366-6-5.5-6-1.902 0-3.52 1.027-4.5 2.552z\"/> </svg>"

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
