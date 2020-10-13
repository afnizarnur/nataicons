export default {
name: 'ShoppingBag.js',

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
<path fill="#333" fill-rule="evenodd" d="M5.414 5l1-1h11.172l1 1H5.414zm16.293.293a1 1 0 01.287.816H2.006a1 1 0 01.287-.816L5 2.586C5.374 2.212 5.88 2 6.412 2h11.176c.532 0 1.038.212 1.412.586l2.707 2.707zm.287.816v.003l-.001.009-.004.038-.016.147a103.622 103.622 0 00-.226 2.428c-.125 1.504-.247 3.345-.247 4.766 0 1.978.236 4.757.383 6.296A2.01 2.01 0 0119.885 22H4.115a2.01 2.01 0 01-1.998-2.204c.147-1.54.383-4.318.383-6.296 0-1.421-.122-3.262-.247-4.766a120.4 120.4 0 00-.226-2.428L2.01 6.16l-.004-.038v-.01l-.001-.002h19.988zM4.247 8.569A156.46 156.46 0 004.107 7h15.786c-.041.435-.09.974-.14 1.57-.125 1.513-.253 3.422-.253 4.93 0 2.085.245 4.95.392 6.487v.007a.017.017 0 01-.006.006H4.114a.017.017 0 01-.006-.008v-.005c.147-1.537.392-4.402.392-6.487 0-1.508-.128-3.417-.253-4.93zM10 12a1 1 0 10-2 0 4 4 0 108 0 1 1 0 10-2 0 2 2 0 01-4 0z"/>
</svg>

}
}