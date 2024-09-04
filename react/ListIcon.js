import React from 'react';

const ListIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M19 4a1 1 0 01-1 1H7a1 1 0 010-2h11a1 1 0 011 1zM4 4a1 1 0 01-1 1H2a1 1 0 010-2h1a1 1 0 011 1zm15 6a1 1 0 01-1 1H7a1 1 0 110-2h11a1 1 0 011 1zM4 10a1 1 0 01-1 1H2a1 1 0 110-2h1a1 1 0 011 1zm14 7a1 1 0 100-2H7a1 1 0 100 2h11zM3 17a1 1 0 100-2H2a1 1 0 100 2h1z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M21 6a1 1 0 01-1 1H9a1 1 0 010-2h11a1 1 0 011 1zM6 6a1 1 0 01-1 1H4a1 1 0 010-2h1a1 1 0 011 1zm15 6a1 1 0 01-1 1H9a1 1 0 110-2h11a1 1 0 011 1zM6 12a1 1 0 01-1 1H4a1 1 0 110-2h1a1 1 0 011 1zm14 7a1 1 0 100-2H9a1 1 0 100 2h11zM5 19a1 1 0 100-2H4a1 1 0 100 2h1z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default ListIcon;