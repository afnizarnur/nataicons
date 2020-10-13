export default {
name: 'ArrowTopRight.js',

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
<path stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.343 17.657L17.657 6.343m0 0h-9.9m9.9 0v9.9"/>
</svg>

}
}