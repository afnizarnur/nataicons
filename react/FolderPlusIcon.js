import React from 'react';

const FolderPlusIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M1 3a2 2 0 012-2h5.532a2 2 0 011.536.72l1.9 2.28H17a2 2 0 012 2v11a2 2 0 01-2 2H3a2 2 0 01-2-2V3zm7.532 0H3v14h14V6h-5.032a2 2 0 01-1.536-.72L8.532 3zM9 10.5V9a1 1 0 112 0v1.5h1.5a1 1 0 110 2H11V14a1 1 0 11-2 0v-1.5H7.5a1 1 0 110-2H9z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M2 4a2 2 0 012-2h5.532a2 2 0 011.536.72l1.9 2.28H20a2 2 0 012 2v13a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm7.532 0H4v16h16V7h-7.032a2 2 0 01-1.536-.72L9.532 4zM12 8a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H8a1 1 0 110-2h3V9a1 1 0 011-1z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default FolderPlusIcon;