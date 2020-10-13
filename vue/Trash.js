export default {
name: 'Trash.js',

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
<path fill="#333" fill-rule="evenodd" d="M9 2a2 2 0 00-2 2v2H3a1 1 0 000 2h1.103c.044.419.097.96.15 1.563.125 1.403.247 3.117.247 4.437 0 1.804-.226 4.33-.374 5.782A2.012 2.012 0 006.124 22h11.752a2.012 2.012 0 001.998-2.218C19.726 18.33 19.5 15.804 19.5 14c0-1.32.122-3.034.246-4.437.054-.604.107-1.144.15-1.563H21a1 1 0 100-2h-4V4a2 2 0 00-2-2H9zm6 4V4H9v2h6zM6.246 9.386C6.2 8.866 6.154 8.392 6.114 8h11.772c-.04.392-.086.866-.132 1.386-.126 1.414-.254 3.2-.254 4.614 0 1.917.237 4.534.385 5.985v.006a.018.018 0 01-.004.006l-.003.002V20H6.122l-.003-.003a.018.018 0 01-.003-.006v-.006c.147-1.451.384-4.068.384-5.985 0-1.413-.128-3.2-.254-4.614z"/>
</svg>

}
}