import React from 'react';

const UnderlineIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M5 2a1 1 0 00-2 0v6a7 7 0 1014 0V2a1 1 0 10-2 0v6A5 5 0 015 8V2zM3.01 17.636a1 1 0 01.855-1.127L4 17.5l.135.99a1 1 0 01-1.126-.854zM4 17.5l.135.99h.01l.03-.005.116-.015a67.291 67.291 0 011.933-.225C7.425 18.12 8.883 18 10 18s2.575.12 3.776.245a77.975 77.975 0 011.933.225l.117.015.03.005h.008a1 1 0 00.271-1.98l-.134.98.134-.98-.003-.001-.009-.001-.032-.005-.123-.016a78.927 78.927 0 00-1.986-.232C12.768 16.13 11.226 16 10 16c-1.226 0-2.768.13-3.982.255a78.898 78.898 0 00-1.986.232l-.123.016-.033.005h-.008l-.002.001h-.001L4 17.5z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M7 4a1 1 0 00-2 0v6a7 7 0 1014 0V4a1 1 0 10-2 0v6a5 5 0 01-10 0V4zM5.01 20.136a1 1 0 01.855-1.127L6 20l.135.99a1 1 0 01-1.126-.854zM6 20l.135.99h.01l.03-.005.116-.015a67.291 67.291 0 011.933-.225C9.425 20.62 10.883 20.5 12 20.5s2.575.12 3.776.245a77.975 77.975 0 011.933.225l.117.015.03.005h.008a1 1 0 00.271-1.98l-.134.98.134-.98-.003-.001-.009-.001-.032-.005-.123-.016a78.927 78.927 0 00-1.986-.232C14.768 18.63 13.226 18.5 12 18.5c-1.226 0-2.768.13-3.982.255a78.898 78.898 0 00-1.986.232l-.123.016-.033.005h-.008l-.002.001h-.001L6 20z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default UnderlineIcon;