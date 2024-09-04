import React from 'react';

const ClipboardMinIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M6 3a2 2 0 012-2h4a2 2 0 012 2h1.866a2.014 2.014 0 011.998 2.233C17.716 6.596 17.5 8.87 17.5 10.5c0 1.63.216 3.904.364 5.267A2.014 2.014 0 0115.866 18H4.134a2.014 2.014 0 01-1.998-2.233c.148-1.363.364-3.636.364-5.267 0-1.63-.216-3.904-.364-5.267A2.014 2.014 0 014.134 3H6v2H4.132l-.003.003a.02.02 0 00-.004.007v.007C4.271 6.38 4.5 8.75 4.5 10.5c0 1.75-.228 4.12-.376 5.483v.007a.021.021 0 00.008.01h11.736l.001-.001.002-.002a.023.023 0 00.005-.007v-.007c-.148-1.362-.376-3.732-.376-5.483 0-1.75.228-4.12.376-5.483a.02.02 0 000-.005V5.01a.023.023 0 00-.008-.01H14a2 2 0 01-2 2H8a2 2 0 01-2-2V3zm6 0H8v2h4V3zm.5 7.5h-5a1 1 0 100 2h5a1 1 0 100-2z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M7 4a2 2 0 012-2h6a2 2 0 012 2v2a2 2 0 01-2 2H9a2 2 0 01-2-2H5.122l-.003.003a.015.015 0 00-.003.005v.005c.167 1.623.455 4.733.455 6.987 0 2.254-.288 5.364-.455 6.987v.005l.003.005.002.002h.001l.002.001h13.754l.003-.003a.014.014 0 00.003-.005v-.005c-.167-1.623-.455-4.733-.455-6.987 0-2.254.288-5.364.455-6.987v-.005l-.003-.005A.016.016 0 0018.878 6H17V4h1.876a2.01 2.01 0 011.998 2.218c-.168 1.626-.445 4.643-.445 6.782 0 2.14.277 5.156.445 6.782A2.01 2.01 0 0118.876 22H5.124a2.01 2.01 0 01-1.998-2.218c.168-1.626.445-4.643.445-6.782 0-2.14-.277-5.156-.445-6.782A2.01 2.01 0 015.124 4H7zm8 0H9v2h6V4zm1 11a1 1 0 100-2H8a1 1 0 100 2h8z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default ClipboardMinIcon;