
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: 'NatatokoIcon', 
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

    const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 4.02a1 1 0 00-1.138-1.01l-3.162.44a1 1 0 00-.861.969l-.053 2.396-1.402-2.411a1 1 0 00-1.003-.488l-3.266.458a1 1 0 00-.861.968L4 16.978a1 1 0 001.14 1.012l3.178-.445a1 1 0 00.861-.973l.047-2.663 1.487 2.657a1 1 0 001.011.502l3.178-.444a1 1 0 00.862-.97L16 4.02z\"/> </svg>"
    const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 4.02a1 1 0 00-1.142-1.01l-3.793.544a1 1 0 00-.857.968l-.08 3.69-2.034-3.588a1 1 0 00-1.012-.497l-3.919.563a1 1 0 00-.857.969L5 19.979a1 1 0 001.142 1.01l3.814-.548a1 1 0 00.858-.972l.07-4.048 2.14 3.923a1 1 0 001.02.511l3.814-.547a1 1 0 00.857-.97L19 4.02z\"/> </svg>"

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
