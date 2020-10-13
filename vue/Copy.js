export default {
name: 'Copy.js',

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
<path fill="#333" fill-rule="evenodd" d="M4.2 2A2.2 2.2 0 002 4.2V15a2.2 2.2 0 002.2 2.2h2.6v2.6A2.2 2.2 0 009 22h10.8a2.2 2.2 0 002.2-2.2V9a2.2 2.2 0 00-2.2-2.2h-2.6V4.2A2.2 2.2 0 0015 2H4.2zm11 4.8V4.2A.2.2 0 0015 4H4.2a.2.2 0 00-.2.2V15c0 .11.09.2.2.2h2.6V9A2.2 2.2 0 019 6.8h6.2zM8.8 9c0-.11.09-.2.2-.2h10.8c.11 0 .2.09.2.2v10.8a.2.2 0 01-.2.2H9a.2.2 0 01-.2-.2V9z"/>
</svg>

}
}