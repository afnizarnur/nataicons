import React from 'react';

const ClipboardIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8 1a2 2 0 00-2 2v2a2 2 0 002 2h4a2 2 0 002-2h1.868l.003.003a.023.023 0 01.005.007v.007C15.728 6.38 15.5 8.75 15.5 10.5c0 1.75.228 4.12.376 5.483a.02.02 0 010 .005v.002a.023.023 0 01-.008.01H4.132l-.003-.003a.021.021 0 01-.004-.007v-.007c.147-1.362.375-3.732.375-5.483 0-1.75-.228-4.12-.376-5.483V5.01A.02.02 0 014.133 5H6V3H4.134a2.014 2.014 0 00-1.998 2.233C2.284 6.596 2.5 8.87 2.5 10.5c0 1.63-.216 3.904-.364 5.267A2.014 2.014 0 004.134 18h11.732a2.014 2.014 0 001.998-2.233c-.148-1.363-.364-3.636-.364-5.267 0-1.63.216-3.904.364-5.267A2.014 2.014 0 0015.866 3H14a2 2 0 00-2-2H8zm0 2h4v2H8V3z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M9 2a2 2 0 00-2 2H5.124a2.01 2.01 0 00-1.998 2.218c.168 1.626.445 4.643.445 6.782 0 2.14-.277 5.156-.445 6.782A2.01 2.01 0 005.124 22h13.752a2.01 2.01 0 001.998-2.218c-.168-1.626-.445-4.643-.445-6.782 0-2.14.277-5.156.445-6.782A2.01 2.01 0 0018.876 4H17v2h1.878l.003.003a.013.013 0 01.003.005v.005c-.167 1.623-.455 4.733-.455 6.987 0 2.254.288 5.364.455 6.987v.005l-.003.005-.002.002h-.001l-.002.001H5.122l-.003-.003a.016.016 0 01-.003-.005v-.005c.167-1.623.455-4.733.455-6.987 0-2.254-.288-5.364-.455-6.987v-.005l.003-.005A.015.015 0 015.122 6H7a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H9zm0 2h6v2H9V4z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default ClipboardIcon;