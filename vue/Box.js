export default {
name: 'Box.js',

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
<path fill="#333" fill-rule="evenodd" d="M20.77 4H3.228l-.001.002a.013.013 0 00-.003.004v.003c.06.748.143 1.815.217 2.991h17.117c.075-1.176.156-2.243.217-2.99v-.004s0-.002-.003-.004A.01.01 0 0020.77 4zM3.971 9.727A23.196 23.196 0 013.724 9h16.552c-.07.225-.155.466-.248.727l-.02.06c-.223.627-.508 1.431-.508 2.213 0 2.594.266 6.214.41 7.991v.005l-.002.002V20l-.002.001H4.094l-.002-.002a.012.012 0 01-.003-.003v-.004c.145-1.777.411-5.397.411-7.991 0-.782-.285-1.586-.507-2.213l-.021-.06zM3.23 2h17.538a2.008 2.008 0 012 2.171c-.076.935-.185 2.369-.27 3.885-.047.82-.334 1.63-.559 2.264l-.026.075c-.256.724-.414 1.21-.414 1.605 0 2.502.26 6.049.404 7.83a2.007 2.007 0 01-2 2.17H4.096a2.007 2.007 0 01-1.999-2.17c.145-1.781.404-5.327.404-7.83 0-.395-.158-.881-.414-1.605l-.026-.075c-.225-.634-.512-1.444-.558-2.264-.086-1.516-.194-2.95-.27-3.885A2.008 2.008 0 013.23 2zM9 13v2h6v-2H9z"/>
</svg>

}
}