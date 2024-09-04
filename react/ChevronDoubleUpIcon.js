import React from 'react';

const ChevronDoubleUpIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M15.293 9.707a1 1 0 001.414-1.414l-6-6a1 1 0 00-1.414 0l-6 6a1 1 0 001.414 1.414L10 4.414l5.293 5.293zm0 8a1 1 0 001.414-1.414l-6-6a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414L10 12.414l5.293 5.293z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12.707 4.293a1 1 0 00-1.414 0l-7 7a1 1 0 101.414 1.414L12 6.414l6.293 6.293a1 1 0 001.414-1.414l-7-7zm7 15l-7-7a1 1 0 00-1.414 0l-7 7a1 1 0 101.414 1.414L12 14.414l6.293 6.293a1 1 0 001.414-1.414z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default ChevronDoubleUpIcon;