export default {
name: 'ExternalLink.js',

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
<path fill="#333" fill-rule="evenodd" d="M22 3a1 1 0 00-1-1h-6a1 1 0 100 2h3.586l-6.293 6.293a1 1 0 001.414 1.414L20 5.414V9a1 1 0 102 0V3zM6.124 4a2.012 2.012 0 00-1.998 2.218C4.274 7.67 4.5 10.196 4.5 12c0 1.746-.212 4.17-.36 5.642a2.028 2.028 0 002.218 2.218c1.473-.148 3.896-.36 5.642-.36 1.804 0 4.33.226 5.782.374A2.012 2.012 0 0020 17.876V13a1 1 0 10-2 0v4.878a.02.02 0 01-.009.006h-.006c-1.451-.147-4.068-.384-5.985-.384-1.857 0-4.37.222-5.842.37H6.15a.034.034 0 01-.012-.008.033.033 0 01-.008-.012.01.01 0 010-.002v-.006c.148-1.473.37-3.985.37-5.842 0-1.917-.237-4.534-.385-5.985v-.006A.019.019 0 016.123 6H11a1 1 0 100-2H6.124z"/>
</svg>

}
}