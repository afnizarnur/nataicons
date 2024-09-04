import React from 'react';

const CaretCircleIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm9.707-5.707l3 3a1 1 0 01-1.414 1.414L10 6.414 7.707 8.707a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0zm-4.414 8.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L10 13.586l-2.293-2.293a1 1 0 00-1.414 1.414z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10.707-5.707l3 3a1 1 0 01-1.414 1.414L12 8.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0zm-4.414 8.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L12 15.586l-2.293-2.293a1 1 0 00-1.414 1.414z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default CaretCircleIcon;