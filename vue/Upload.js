export default {
name: 'Upload.js',

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
<path fill="#333" fill-rule="evenodd" d="M11 14.5a1 1 0 102 0V5.273l4.324 3.964a1 1 0 101.352-1.474l-6-5.5a1 1 0 00-1.352 0l-6 5.5a1 1 0 101.352 1.474L11 5.273V14.5zM4 16a1 1 0 10-2 0v3.905a2.007 2.007 0 002.17 1.999c1.781-.145 5.327-.404 7.83-.404 2.502 0 6.049.26 7.83.404a2.007 2.007 0 002.17-2V16a1 1 0 10-2 0v3.906l-.002.002a.012.012 0 01-.003.003h-.004c-1.777-.145-5.397-.411-7.991-.411-2.594 0-6.214.266-7.991.41h-.003l-.004-.002L4 19.907V16z"/>
</svg>

}
}