import React from 'react';

const QuestionCircleIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm8.423-3a.923.923 0 00-.923.923v.385a1 1 0 11-2 0v-.385A2.923 2.923 0 019.423 5H10c1.941 0 3.5 1.591 3.5 3.516 0 .927-.48 1.8-1.276 2.29l-1.7 1.046a1 1 0 01-1.048-1.704l1.7-1.046a.691.691 0 00.324-.586C11.5 7.679 10.82 7 10 7h-.577zm.587 8a1 1 0 100-2H10a1 1 0 100 2h.01z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-4a1.5 1.5 0 00-1.5 1.5v.5a1 1 0 11-2 0v-.5A3.5 3.5 0 0112 6h.25A3.75 3.75 0 0116 9.75v.68a3 3 0 01-1.336 2.496l-2.11 1.406a1 1 0 01-1.109-1.664l2.11-1.406A1 1 0 0014 10.43v-.68A1.75 1.75 0 0012.25 8H12zm.01 9.5a1 1 0 100-2H12a1 1 0 100 2h.01z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default QuestionCircleIcon;