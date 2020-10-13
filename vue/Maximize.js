export default {
name: 'Maximize.js',

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
<path fill="#333" fill-rule="evenodd" d="M22 3a1 1 0 00-1-1h-6a1 1 0 100 2h3.586l-4.293 4.293a1 1 0 001.414 1.414L20 5.414V9a1 1 0 102 0V3zM2 21a1 1 0 001 1h6a1 1 0 100-2H5.414l4.293-4.293a1 1 0 00-1.414-1.414L4 18.586V15a1 1 0 10-2 0v6z"/>
</svg>

}
}