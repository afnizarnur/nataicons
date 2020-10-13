export default {
name: 'Stats.js',

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
<path fill="#333" d="M5 20a1 1 0 102 0H5zm2-9.333a1 1 0 10-2 0h2zM11.26 20a1 1 0 102 0h-2zm2-16a1 1 0 10-2 0h2zm4.24 16a1 1 0 102 0h-2zm2-12.706a1 1 0 10-2 0h2zM7 20v-9.333H5V20h2zm6.26 0V4h-2v16h2zm6.24 0V7.294h-2V20h2z"/>
</svg>

}
}