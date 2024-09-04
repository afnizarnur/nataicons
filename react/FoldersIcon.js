import React from 'react';

const FoldersIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8 2a2 2 0 00-2 2v2H4a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-2h2a2 2 0 002-2V5.833a2 2 0 00-2-2h-3.726l-.928-1.113A2 2 0 0010.809 2H8zm5 13H8a2 2 0 01-2-2V8H4v9h9v-2zM8 4h2.81l.928 1.114a2 2 0 001.536.72H17V13H8V4z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8 2a2 2 0 00-2 2v2H4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-2h2a2 2 0 002-2V6.333a2 2 0 00-2-2h-5.143L13.512 2.72A2 2 0 0011.976 2H8zm8 16v2H4V8h2v8a2 2 0 002 2h8zM8 7v9h12V6.333h-5.143a2 2 0 01-1.536-.72L11.976 4H8v3z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default FoldersIcon;