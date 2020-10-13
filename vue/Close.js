export default {
name: 'Close.js',

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
<path fill="#333" fill-rule="evenodd" d="M18.435 19.264a1 1 0 001.414-1.415l-6.293-6.293 6.293-6.293a1 1 0 00-1.414-1.414l-6.293 6.293-6.435-6.435a1 1 0 10-1.414 1.414l6.435 6.435-6.435 6.435a1 1 0 101.414 1.415l6.435-6.435 6.293 6.293z"/>
</svg>

}
}