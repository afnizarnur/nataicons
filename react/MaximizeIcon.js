import React from 'react';

const MaximizeIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M19 2a1 1 0 00-1-1h-6a1 1 0 100 2h3.586l-3.793 3.793a1 1 0 001.414 1.414L17 4.414V8a1 1 0 102 0V2zM1 18a1 1 0 001 1h6a1 1 0 100-2H4.414l3.793-3.793a1 1 0 10-1.414-1.414L3 15.586V12a1 1 0 10-2 0v6z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M22 3a1 1 0 00-1-1h-6a1 1 0 100 2h3.586l-4.293 4.293a1 1 0 001.414 1.414L20 5.414V9a1 1 0 102 0V3zM2 21a1 1 0 001 1h6a1 1 0 100-2H5.414l4.293-4.293a1 1 0 00-1.414-1.414L4 18.586V15a1 1 0 10-2 0v6z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default MaximizeIcon;