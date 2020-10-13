export default {
name: 'Dashboard.js',

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
<path fill="#333" fill-rule="evenodd" d="M13.233 1.674a2 2 0 00-2.48.064L2.787 8.375a2.013 2.013 0 00-.706 1.805c.14 1.08.418 3.443.418 5.07 0 1.37-.197 3.269-.345 4.488A2.016 2.016 0 004.151 22H20.85c1.22 0 2.14-1.075 1.996-2.262-.147-1.22-.345-3.118-.345-4.488 0-1.61.272-3.939.413-5.036a2.014 2.014 0 00-.787-1.87l-8.893-6.67zm-1.2 1.6l8.893 6.67.002.004a.02.02 0 01.002.01c-.14 1.09-.43 3.537-.43 5.292 0 1.503.212 3.508.36 4.728a.03.03 0 010 .007l-.001.003a.025.025 0 01-.005.009L20.85 20H17v-4.5a4.5 4.5 0 10-9 0V20H4.15a.025.025 0 01-.009-.012v-.003a.03.03 0 010-.007c.147-1.22.359-3.225.359-4.728 0-1.773-.295-4.255-.434-5.327-.001-.008.002-.012.003-.012l7.964-6.637zM10 20h5v-4.5a2.5 2.5 0 00-5 0V20z"/>
</svg>

}
}