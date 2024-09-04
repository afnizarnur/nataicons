import React from 'react';

const StrikethroughIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M5 3a1 1 0 10-2 0v6H2v1-1a1 1 0 000 2v-1 1h1a7 7 0 1014 0h.999L18 10v1a1 1 0 100-2v1-1h-1V3a1 1 0 10-2 0v6H5V3zm0 8a5 5 0 0010 0H5z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M7 5a1 1 0 00-2 0v6H3.001L3 12v-1a1 1 0 100 2v-1 1h2v1a7 7 0 1014 0v-1h1.999L21 12v1a1 1 0 100-2v1-1h-2V5a1 1 0 10-2 0v6H7V5zm0 8v1a5 5 0 0010 0v-1H7z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default StrikethroughIcon;