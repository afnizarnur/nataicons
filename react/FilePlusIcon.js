import React from 'react';

const FilePlusIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M2 3a2 2 0 012-2h7.586A2 2 0 0113 1.586L17.414 6A2 2 0 0118 7.414V17a2 2 0 01-2 2H4a2 2 0 01-2-2V3zm9.586 0H4v14h12V7.414L11.586 3zM9 10.5V9a1 1 0 112 0v1.5h1.5a1 1 0 110 2H11V14a1 1 0 11-2 0v-1.5H7.5a1 1 0 110-2H9z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3 4a2 2 0 012-2h9.586A2 2 0 0116 2.586L20.414 7A2 2 0 0121 8.414V20a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm11.586 0H5v16h14V8.414L14.586 4zM12 7a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H8a1 1 0 110-2h3V8a1 1 0 011-1z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default FilePlusIcon;