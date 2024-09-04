import React from 'react';

const ShoppingBagPlusIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4.968 1a2 2 0 00-1.536.72l-2.425 3.4v.002l.001.008.005.035.015.133a90.845 90.845 0 01.226 2.167c.125 1.33.246 2.914.246 4.035 0 1.519-.221 3.872-.37 5.276A2.011 2.011 0 003.127 19h13.745c1.2 0 2.123-1.043 1.998-2.224-.149-1.404-.37-3.757-.37-5.276 0-1.12.12-2.705.246-4.035a106.122 106.122 0 01.226-2.167l.015-.133.005-.035v-.01a1 1 0 00-.285-.827L16 1.586A2 2 0 0014.586 1H4.968zm0 2h9.618l1 1H4.135l.833-1zm-1.85 3h13.764c-.039.367-.083.804-.128 1.278-.125 1.334-.254 3-.254 4.222 0 1.64.233 4.092.38 5.486v.008l-.003.003a.01.01 0 01-.003.003H3.126l-.003-.003a.016.016 0 01-.004-.005v-.006c.148-1.394.381-3.847.381-5.486 0-1.222-.13-2.888-.254-4.222-.045-.474-.09-.91-.128-1.278zM9 15v-2.5H6.5a1 1 0 110-2H9V8a1 1 0 112 0v2.5h2.5a1 1 0 110 2H11V15a1 1 0 11-2 0z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M6.414 4l-1 1h13.172l-1-1H6.414zm15.58 2.109a1 1 0 00-.287-.816L19 2.586A1.996 1.996 0 0017.588 2H6.412C5.88 2 5.374 2.212 5 2.586L2.293 5.293a1 1 0 00-.287.816v.003l.001.009.004.038.016.147.056.552c.046.47.108 1.128.17 1.876.125 1.504.247 3.345.247 4.766 0 1.978-.236 4.757-.383 6.296A2.01 2.01 0 004.115 22h15.77a2.01 2.01 0 001.998-2.204c-.147-1.54-.383-4.318-.383-6.296 0-1.421.122-3.262.247-4.766a121.848 121.848 0 01.226-2.428l.016-.147.004-.038v-.01l.001-.002zM4.106 7c.042.435.091.974.14 1.57.126 1.513.254 3.422.254 4.93 0 2.085-.245 4.95-.393 6.487a.02.02 0 000 .004v.001a.017.017 0 00.007.008h15.772a.017.017 0 00.006-.006v-.007c-.147-1.537-.392-4.402-.392-6.487 0-1.508.128-3.417.253-4.93.05-.596.099-1.135.14-1.57H4.107zM12 9a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H8a1 1 0 110-2h3v-3a1 1 0 011-1z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default ShoppingBagPlusIcon;