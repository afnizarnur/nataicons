export default {
name: 'Inbox.js',

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
<path fill="#333" fill-rule="evenodd" d="M4.104 5.11a.02.02 0 01.005-.007.02.02 0 01.006-.004h.006C5.933 5.244 9.459 5.5 12 5.5c2.541 0 6.067-.255 7.88-.402h.004a.02.02 0 01.008.005.02.02 0 01.004.007v.005c-.136 1.611-.362 4.568-.393 6.885h-1.94a3 3 0 00-2.486 1.322l-1.061 1.57a1 1 0 01-.829.441h-2.374a1 1 0 01-.829-.44l-1.06-1.571A3 3 0 006.437 12h-1.94c-.03-2.317-.257-5.274-.393-6.885a.02.02 0 010-.004zm.37 8.89c-.07 2.168-.262 4.62-.38 5.99a.02.02 0 000 .004l.002.002s0 .002.002.003l.001.001h15.803l.001-.001.002-.003.001-.002v-.005c-.117-1.37-.308-3.82-.378-5.989h-1.964a1 1 0 00-.829.44l-1.06 1.572a3 3 0 01-2.487 1.321h-2.374a3 3 0 01-2.487-1.321l-1.06-1.572a1 1 0 00-.829-.44H4.473zM4.28 3.105c-1.24-.1-2.275.94-2.17 2.18.147 1.73.389 4.935.389 7.215 0 2.327-.252 5.616-.398 7.319A2.008 2.008 0 004.1 22h15.8a2.008 2.008 0 001.998-2.181c-.146-1.703-.398-4.992-.398-7.319 0-2.28.242-5.484.39-7.215a2.017 2.017 0 00-2.171-2.18C17.904 3.25 14.45 3.5 12 3.5c-2.451 0-5.904-.249-7.719-.395z"/>
</svg>

}
}