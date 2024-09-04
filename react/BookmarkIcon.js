import React from 'react';

const BookmarkIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path stroke=\"currentColor\" stroke-width=\"2\" d=\"M3.093 3.09A1.007 1.007 0 014.095 2h11.81c.589 0 1.05.504 1.002 1.09-.144 1.778-.407 5.362-.407 7.91 0 1.9.146 4.373.28 6.247.067.933-1.072 1.46-1.734.8l-4.339-4.34a1 1 0 00-1.414 0l-4.34 4.34c-.66.66-1.8.133-1.733-.8.134-1.874.28-4.348.28-6.247 0-2.548-.263-6.132-.407-7.91z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path stroke=\"currentColor\" stroke-width=\"2\" d=\"M5.093 5.09A1.007 1.007 0 016.095 4h11.81c.588 0 1.05.504 1.002 1.09-.144 1.778-.407 5.362-.407 7.91 0 1.9.146 4.373.28 6.247.067.933-1.072 1.46-1.734.8l-4.339-4.34a1 1 0 00-1.414 0l-4.34 4.34c-.66.66-1.8.133-1.733-.8.134-1.874.28-4.348.28-6.247 0-2.548-.263-6.132-.407-7.91z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default BookmarkIcon;