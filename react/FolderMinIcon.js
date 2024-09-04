import React from 'react';

const FolderMinIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3 1a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2h-5.032l-1.9-2.28A2 2 0 008.532 1H3zm0 2h5.532l1.9 2.28a2 2 0 001.536.72H17v11H3V3zm9.5 7.5h-5a1 1 0 100 2h5a1 1 0 100-2z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4 2a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2h-7.032l-1.9-2.28A2 2 0 009.532 2H4zm0 2h5.532l1.9 2.28a2 2 0 001.536.72H20v13H4V4zm12 10a1 1 0 100-2H8a1 1 0 100 2h8z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default FolderMinIcon;