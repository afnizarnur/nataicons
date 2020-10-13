export default {
name: 'LockOpen.js',

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
<path fill="#333" fill-rule="evenodd" d="M9 5a1 1 0 011-1h4a1 1 0 011 1v.5a1 1 0 102 0V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v3H5.146a2.017 2.017 0 00-1.998 2.252C3.296 11.52 3.5 13.543 3.5 15c0 1.457-.204 3.48-.352 4.748A2.017 2.017 0 005.146 22h13.708a2.017 2.017 0 001.998-2.252C20.704 18.48 20.5 16.457 20.5 15c0-1.457.204-3.48.352-4.748A2.017 2.017 0 0018.854 8H9V5zm-3.865 5.02v-.008a.025.025 0 01.01-.012h13.711l.004.004a.025.025 0 01.005.008.027.027 0 010 .008c-.148 1.27-.365 3.395-.365 4.98 0 1.585.217 3.71.365 4.98v.007a.025.025 0 01-.01.013H5.145l-.004-.004a.025.025 0 01-.005-.008v-.008c.148-1.27.365-3.395.365-4.98 0-1.585-.217-3.71-.365-4.98z"/>
</svg>

}
}