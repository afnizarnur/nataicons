export default {
name: 'InboxIn.js',

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
<path fill="#333" fill-rule="evenodd" d="M12 1a1 1 0 011 1v5.731l3.325-3.038a1 1 0 011.35 1.476l-5 4.57a1 1 0 01-1.35 0l-5-4.57a1 1 0 011.35-1.476L11 7.73V2a1 1 0 011-1zM3.5 12h2.937a3 3 0 012.487 1.322l1.06 1.57a1 1 0 00.829.441h2.374a1 1 0 00.829-.44l1.06-1.571A3 3 0 0117.563 12H20.5a1 1 0 011 1c0 2.271.24 5.218.387 6.802A2.01 2.01 0 0119.888 22H4.112a2.01 2.01 0 01-2-2.198c.148-1.584.388-4.53.388-6.802a1 1 0 011-1zm16.013 2c.053 2.17.256 4.615.383 5.987v.005a.015.015 0 01-.004.006.012.012 0 01-.002.002H4.11l-.002-.002a.016.016 0 01-.004-.005v-.006c.127-1.372.33-3.818.383-5.987h1.95a1 1 0 01.829.44l1.06 1.572a3 3 0 002.487 1.321h2.374a3 3 0 002.487-1.321l1.06-1.572a1 1 0 01.829-.44h1.95z"/>
</svg>

}
}