import React from 'react';

const TrashIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M7 1a2 2 0 00-2 2v2H2a1 1 0 000 2h.884c.036.338.078.754.12 1.213.11 1.202.218 2.664.218 3.787 0 1.47-.183 3.508-.315 4.776a2.015 2.015 0 002 2.224h10.186a2.015 2.015 0 002-2.224c-.132-1.268-.315-3.306-.315-4.776 0-1.123.107-2.585.218-3.787.042-.459.084-.875.12-1.213H18a1 1 0 100-2h-3V3a2 2 0 00-2-2H7zm6 4V3H7v2h6zM4.996 8.03c-.035-.378-.07-.728-.101-1.03h10.21a81.66 81.66 0 00-.1 1.03c-.112 1.212-.227 2.75-.227 3.97 0 1.584.194 3.714.325 4.982v.007a.02.02 0 01-.005.008l-.003.003H4.905a.024.024 0 01-.008-.01v-.008c.131-1.268.325-3.398.325-4.982 0-1.22-.115-2.758-.226-3.97z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M9 2a2 2 0 00-2 2v2H3a1 1 0 000 2h1.103c.044.419.097.96.15 1.563.125 1.403.247 3.117.247 4.437 0 1.804-.226 4.33-.374 5.782A2.012 2.012 0 006.124 22h11.752a2.012 2.012 0 001.998-2.218C19.726 18.33 19.5 15.804 19.5 14c0-1.32.122-3.034.246-4.437.054-.604.107-1.144.15-1.563H21a1 1 0 100-2h-4V4a2 2 0 00-2-2H9zm6 4V4H9v2h6zM6.246 9.386C6.2 8.866 6.154 8.392 6.114 8h11.772c-.04.392-.086.866-.132 1.386-.126 1.414-.254 3.2-.254 4.614 0 1.917.237 4.534.385 5.985v.006a.018.018 0 01-.004.006l-.003.002V20H6.122l-.003-.003a.018.018 0 01-.003-.006v-.006c.147-1.451.384-4.068.384-5.985 0-1.413-.128-3.2-.254-4.614z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default TrashIcon;