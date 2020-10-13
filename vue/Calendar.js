export default {
name: 'Calendar.js',

props: {
  size: {
    type: String,
    default: '24',
    validator: (s) => (!isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length -1)) && s.slice(-1) === 'x' )
  }
},
functional: true,
render(h, ctx) {
  const size = ctx.props.size.slice(-1) === 'x' 
    ? ctx.props.size.slice(0, ctx.props.size.length -1) + 'em'
    : parseInt(ctx.props.size) + 'px';
  const attrs = ctx.data.attrs || {}
  attrs.width = attrs.width || size
  attrs.height = attrs.height || size
  ctx.data.attrs = attrs

  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" {...ctx.data}>
<path fill="#333" fill-rule="evenodd" d="M8 2a1 1 0 011 1v.416c1.048.05 2.093.084 3 .084s1.952-.034 3-.084V3a1 1 0 112 0v.302c1.051-.067 2.01-.14 2.719-.197 1.24-.1 2.275.94 2.17 2.18-.147 1.73-.389 4.935-.389 7.215 0 2.327.252 5.616.398 7.319A2.008 2.008 0 0119.9 22H4.1a2.008 2.008 0 01-1.998-2.181c.146-1.703.398-4.992.398-7.319 0-2.28-.242-5.484-.39-7.215a2.017 2.017 0 012.171-2.18c.709.057 1.668.13 2.719.197V3a1 1 0 011-1zm7 3.418V7a1 1 0 102 0V5.306a170.422 170.422 0 002.884-.208l.007.005a.022.022 0 01.005.007v.005c-.1 1.171-.246 3.054-.33 4.885H4.434c-.084-1.83-.23-3.714-.33-4.885V5.11a.02.02 0 01.005-.007.02.02 0 01.006-.004h.006c.736.059 1.757.136 2.879.207V7a1 1 0 102 0V5.418c1.044.049 2.086.082 3 .082.914 0 1.956-.033 3-.082zM4.497 12l.003.5c0 2.423-.26 5.79-.405 7.49a.02.02 0 000 .004v.002l.003.003.001.001H19.9l.002-.001a.014.014 0 00.003-.005v-.005c-.145-1.7-.405-5.066-.405-7.489l.003-.5H4.497z"/>
</svg>

}
}