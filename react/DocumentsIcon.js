import React from 'react';

const DocumentsIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M7 1a2 2 0 00-2 2v1H4a2 2 0 00-2 2v10.75a2 2 0 002 2h9.05a2 2 0 002-2v-1h1a2 2 0 002-2V6.06a2 2 0 00-.545-1.371l-2.884-3.06A2 2 0 0013.165 1H7zm6.05 14.75H7a2 2 0 01-2-2V6H4v10.75h9.05v-1zM7 5v8.75h9.05V6.06L13.165 3H7v2z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8 2a2 2 0 00-2 2v1H5a2 2 0 00-2 2v13a2 2 0 002 2h11a2 2 0 002-2v-1h1a2 2 0 002-2V7.707a2 2 0 00-.545-1.371l-3.494-3.708A2 2 0 0015.506 2H8zm8 17H8a2 2 0 01-2-2V7H5v13h11v-1zM8 6v11h11V7.707L15.506 4H8v2z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default DocumentsIcon;