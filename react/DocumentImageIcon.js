import React from 'react';

const DocumentImageIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M2 3a2 2 0 012-2h7.586A2 2 0 0113 1.586L17.414 6A2 2 0 0118 7.414V17a2 2 0 01-2 2H4a2 2 0 01-2-2V3zm9.586 0H4v7.612l2.36-2.325.67-.658.7.626 2.201 1.97 1.933-1.932.672-.672.706.637L16 10.749V7.414L11.586 3zM16 13.444l-3.393-3.065-1.183 1.183L16 15.658v-2.214zM4 17v-3.581l3.095-3.048L14.501 17H4z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3 4a2 2 0 012-2h9.586A2 2 0 0116 2.586L20.414 7A2 2 0 0121 8.414V20a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm11.586 0H5v8.586l3.293-3.293.674-.674.706.641 2.96 2.692 2.66-2.66.661-.66.704.615L19 11.297V8.413L14.586 4zM19 13.954l-2.954-2.585-1.93 1.93L19 17.739v-3.785zM5 20v-4.586l4.033-4.033L18.513 20H5z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default DocumentImageIcon;