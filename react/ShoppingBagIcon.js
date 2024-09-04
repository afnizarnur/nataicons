import React from 'react';

const ShoppingBagIcon = ({ size = '24', color = 'currentColor', ...props }) => {
const getSize = () => {
  if (typeof size === 'string' && size.slice(-1) === 'x') 
    return size.slice(0, size.length - 1) + 'em';
  return typeof size === 'number' ? size + 'px' : size;
};

const updateSvg = (svgString) => {
  return svgString
    .replace(/width="\d+"/, 'width="' + getSize() + '"')
    .replace(/height="\d+"/, 'height="' + getSize() + '"')
    .replace(/fill="([^"]+)"/g, 'fill="' + color + '"')
    .replace(/stroke="([^"]+)"/g, 'stroke="' + color + '"');
};

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4.968 1a2 2 0 00-1.536.72l-2.425 3.4v.002l.001.008.005.035.015.133a90.845 90.845 0 01.226 2.167c.125 1.33.246 2.914.246 4.035 0 1.519-.221 3.872-.37 5.276A2.011 2.011 0 003.127 19h13.745c1.2 0 2.123-1.043 1.998-2.224-.149-1.404-.37-3.757-.37-5.276 0-1.12.12-2.705.246-4.035a106.122 106.122 0 01.226-2.167l.015-.133.005-.035v-.01a1 1 0 00-.285-.827L16 1.586A2 2 0 0014.586 1H4.968zm0 2h9.618l1 1H4.135l.833-1zm-1.85 3h13.764c-.039.367-.083.804-.128 1.278-.125 1.334-.254 3-.254 4.222 0 1.64.233 4.092.38 5.486v.008l-.003.003a.01.01 0 01-.003.003H3.126l-.003-.003a.016.016 0 01-.004-.005v-.006c.148-1.394.381-3.847.381-5.486 0-1.222-.13-2.888-.254-4.222-.045-.474-.09-.91-.128-1.278zM8 10a1 1 0 10-2 0 4 4 0 108 0 1 1 0 10-2 0 2 2 0 01-4 0z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M5.414 5l1-1h11.172l1 1H5.414zm16.293.293a1 1 0 01.287.816H2.006a1 1 0 01.287-.816L5 2.586C5.374 2.212 5.88 2 6.412 2h11.176c.532 0 1.038.212 1.412.586l2.707 2.707zm.287.816v.003l-.001.009-.004.038-.016.147a103.622 103.622 0 00-.226 2.428c-.125 1.504-.247 3.345-.247 4.766 0 1.978.236 4.757.383 6.296A2.01 2.01 0 0119.885 22H4.115a2.01 2.01 0 01-1.998-2.204c.147-1.54.383-4.318.383-6.296 0-1.421-.122-3.262-.247-4.766a120.4 120.4 0 00-.226-2.428L2.01 6.16l-.004-.038v-.01l-.001-.002h19.988zM4.247 8.569A156.46 156.46 0 004.107 7h15.786c-.041.435-.09.974-.14 1.57-.125 1.513-.253 3.422-.253 4.93 0 2.085.245 4.95.392 6.487v.007a.017.017 0 01-.006.006H4.114a.017.017 0 01-.006-.008v-.005c.147-1.537.392-4.402.392-6.487 0-1.508-.128-3.417-.253-4.93zM10 12a1 1 0 10-2 0 4 4 0 108 0 1 1 0 10-2 0 2 2 0 01-4 0z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default ShoppingBagIcon;