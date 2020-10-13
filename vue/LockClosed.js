export default {
name: 'LockClosed.js',

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
<path fill="#333" fill-rule="evenodd" d="M9 5a1 1 0 011-1h4a1 1 0 011 1v3H9V5zM7 8V5a3 3 0 013-3h4a3 3 0 013 3v3h1.854a2.017 2.017 0 011.998 2.252C20.704 11.52 20.5 13.543 20.5 15c0 1.457.204 3.48.352 4.748A2.017 2.017 0 0118.854 22H5.146a2.017 2.017 0 01-1.998-2.252C3.296 18.48 3.5 16.457 3.5 15c0-1.457-.204-3.48-.352-4.748A2.017 2.017 0 015.146 8H7zm0 2H5.144l-.004.004a.025.025 0 00-.005.008v.008c.148 1.27.365 3.395.365 4.98 0 1.585-.217 3.71-.365 4.98v.008a.025.025 0 00.01.012h13.711l.004-.004a.025.025 0 00.005-.008v-.008c-.148-1.27-.365-3.395-.365-4.98 0-1.585.217-3.71.365-4.98a.027.027 0 000-.008.025.025 0 00-.01-.012H7z"/>
</svg>

}
}