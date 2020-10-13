export default {
name: 'CheckCircle.js',

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
<path fill="#333" fill-rule="evenodd" d="M4 12a8 8 0 0110.636-7.556 1 1 0 00.659-1.888A9.987 9.987 0 0012 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-.375-.02-.745-.061-1.11a1 1 0 00-1.988.22A8 8 0 114 12zm17.767-7.359a1 1 0 00-1.534-1.282l-7.707 9.22-3.873-3.337a1 1 0 00-1.306 1.516l4.643 4a1 1 0 001.42-.117l8.357-10z"/>
</svg>

}
}