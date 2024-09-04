import React from 'react';

const RectangleIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path stroke=\"currentColor\" stroke-width=\"2\" d=\"M2.444 10c0 2.209-.222 5.293-.352 6.91A1.006 1.006 0 003.093 18h13.814c.588 0 1.048-.503 1-1.09-.13-1.617-.351-4.701-.351-6.91 0-2.158.212-5.153.343-6.798a1.02 1.02 0 00-1.1-1.095c-1.646.139-4.64.364-6.799.364-2.159 0-5.154-.225-6.799-.364a1.02 1.02 0 00-1.1 1.095c.131 1.645.343 4.64.343 6.798z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path stroke=\"currentColor\" stroke-width=\"2\" d=\"M3.5 12c0 2.548-.263 6.132-.407 7.91a1.006 1.006 0 001 1.09h15.814c.588 0 1.049-.503 1.001-1.09-.144-1.778-.407-5.362-.407-7.91 0-2.496.252-5.986.398-7.8A1.016 1.016 0 0019.8 3.109c-1.814.154-5.304.421-7.8.421-2.496 0-5.986-.267-7.8-.421A1.016 1.016 0 003.102 4.2c.146 1.814.398 5.304.398 7.8z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default RectangleIcon;