export default {
name: 'Edit.js',

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
<path fill="#333" fill-rule="evenodd" d="M19.175 4.095a1.121 1.121 0 011.506 1.662l-9.12 8.29-2.044.256.834-2.224 8.824-7.984zm2.959-1.375a3.121 3.121 0 00-4.301-.108l-9.004 8.146a1 1 0 00-.265.39l-1.5 4a1 1 0 001.06 1.344l4-.5a1 1 0 00.549-.252l9.353-8.504a3.121 3.121 0 00.108-4.516zM4.314 2a2.21 2.21 0 00-2.2 2.388C2.26 6.229 2.5 9.596 2.5 12c0 2.349-.229 5.62-.377 7.487a2.223 2.223 0 002.39 2.39C6.38 21.729 9.651 21.5 12 21.5c2.403 0 5.77.24 7.613.387A2.21 2.21 0 0022 19.686V12a1 1 0 10-2 0v7.686a.21.21 0 01-.228.207c-1.84-.147-5.28-.393-7.772-.393-2.437 0-5.779.235-7.645.383a.223.223 0 01-.238-.238c.148-1.866.383-5.208.383-7.645 0-2.492-.246-5.932-.393-7.772A.21.21 0 014.314 4H12a1 1 0 100-2H4.314z"/>
</svg>

}
}