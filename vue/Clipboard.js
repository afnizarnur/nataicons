export default {
name: 'Clipboard.js',

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
<path fill="#333" fill-rule="evenodd" d="M9 3a2 2 0 00-2 2h-.885a2.01 2.01 0 00-1.998 2.204c.147 1.54.383 4.318.383 6.296 0 1.978-.236 4.757-.383 6.296A2.01 2.01 0 006.115 22h11.77a2.01 2.01 0 001.998-2.204c-.147-1.54-.383-4.318-.383-6.296 0-1.978.236-4.757.383-6.296A2.01 2.01 0 0017.885 5H17a2 2 0 00-2-2H9zm8 4a2 2 0 01-2 2H9a2 2 0 01-2-2h-.886l-.003.003a.017.017 0 00-.003.005v.005c.147 1.537.392 4.402.392 6.487s-.245 4.95-.393 6.487a.02.02 0 000 .004v.001a.017.017 0 00.007.008h11.772l.003-.003a.02.02 0 00.003-.005v-.005c-.147-1.537-.392-4.402-.392-6.487s.245-4.95.393-6.487v-.005A.019.019 0 0017.885 7H17zM9 5h6v2H9V5z"/>
</svg>

}
}