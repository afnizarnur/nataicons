export default {
name: 'Edit2.js',

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
<path fill="#333" fill-rule="evenodd" d="M15.508 6.41a1.463 1.463 0 012.013 2.123l-10.44 9.925-2.587.338 1.067-2.974 9.947-9.412zm3.508-1.33a3.463 3.463 0 00-4.883-.123l-10.12 9.576a1 1 0 00-.254.389l-1.7 4.74a1 1 0 001.07 1.33l4.534-.593a1 1 0 00.56-.267l10.676-10.15a3.463 3.463 0 00.117-4.903zM13 19a1 1 0 100 2h8a1 1 0 100-2h-8z"/>
</svg>

}
}