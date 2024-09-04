import React from 'react';

const RefreshIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M7.997 16.99a1 1 0 10.292-1.98C5.89 14.657 4 12.508 4 9.86c0-2.294 1.416-4.21 3.358-4.914L6.367 7.25a1 1 0 101.837.79L9.92 4.053a1 1 0 00-.256-1.143l-3-2.658a1 1 0 10-1.326 1.496L6.78 3.027C3.988 3.986 2 6.702 2 9.86c0 3.603 2.581 6.624 5.997 7.13zm4.006-13.98a1 1 0 00-.292 1.98C14.11 5.343 16 7.492 16 10.14c0 2.294-1.416 4.21-3.358 4.913l.991-2.303a1 1 0 00-1.837-.79l-1.715 3.987a1 1 0 00.256 1.143l3 2.659a1 1 0 001.326-1.497l-1.443-1.279c2.792-.958 4.78-3.675 4.78-6.833 0-3.603-2.581-6.624-5.997-7.13z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M9.718 20.99a1 1 0 00.278-1.98C6.592 18.532 4 15.662 4 12.223c0-3.222 2.278-5.946 5.365-6.668l-1.562 3.45a1 1 0 101.822.825l2.286-5.05a1 1 0 00-.267-1.178l-4-3.367a1 1 0 00-1.288 1.53l2.273 1.913C4.818 4.7 2 8.128 2 12.223 2 16.7 5.368 20.38 9.718 20.99zm4.564-17.98a1 1 0 10-.278 1.98C17.408 5.468 20 8.338 20 11.777c0 3.222-2.278 5.946-5.365 6.668l1.562-3.45a1 1 0 00-1.822-.825l-2.286 5.05a1 1 0 00.267 1.178l4 3.367a1 1 0 001.288-1.53l-2.273-1.913C19.182 19.299 22 15.872 22 11.777 22 7.3 18.632 3.62 14.282 3.01z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default RefreshIcon;