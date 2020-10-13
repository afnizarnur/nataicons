export default {
name: 'List.js',

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
<path fill="#333" fill-rule="evenodd" d="M21 6a1 1 0 01-1 1H9a1 1 0 010-2h11a1 1 0 011 1zM6 6a1 1 0 01-1 1H4a1 1 0 010-2h1a1 1 0 011 1zm15 6a1 1 0 01-1 1H9a1 1 0 110-2h11a1 1 0 011 1zM6 12a1 1 0 01-1 1H4a1 1 0 110-2h1a1 1 0 011 1zm14 7a1 1 0 100-2H9a1 1 0 100 2h11zM5 19a1 1 0 100-2H4a1 1 0 100 2h1z"/>
</svg>

}
}