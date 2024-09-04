import React from 'react';

const InboxOutIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M9 9a1 1 0 002 0V4.227l2.836 2.52a1 1 0 001.328-1.494l-4.5-4a1 1 0 00-1.328 0l-4.5 4a1 1 0 001.328 1.494L9 4.227V9zm-5.553 3a125.984 125.984 0 01-.35 4.994l.003.004.002.002h13.796l.002-.002.003-.004v-.003a125.829 125.829 0 01-.35-4.991h-1.49a1 1 0 00-.829.44l-.81 1.201a3 3 0 01-2.487 1.322H9.063a3 3 0 01-2.487-1.322l-.81-1.2A1 1 0 004.937 12h-1.49zM18.5 10h-3.437a3 3 0 00-2.487 1.322l-.81 1.2a1 1 0 01-.829.441H9.063a1 1 0 01-.829-.44l-.81-1.201A3 3 0 004.937 10H1.5c0 2.032-.248 5.155-.395 6.815A2.008 2.008 0 003.103 19h13.793a2.008 2.008 0 001.999-2.185c-.147-1.66-.395-4.783-.395-6.815z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12 11a1 1 0 01-1-1V4.269L7.675 7.307a1 1 0 11-1.35-1.476l5-4.57a1 1 0 011.35 0l5 4.57a1 1 0 01-1.35 1.476L13 4.27V10a1 1 0 01-1 1zm-8.5 1h2.937a3 3 0 012.487 1.322l1.06 1.57a1 1 0 00.829.441h2.374a1 1 0 00.829-.44l1.06-1.571A3 3 0 0117.563 12H20.5a1 1 0 011 1c0 2.271.24 5.218.387 6.802A2.01 2.01 0 0119.888 22H4.112a2.01 2.01 0 01-2-2.198c.148-1.584.388-4.53.388-6.802a1 1 0 011-1zm16.013 2c.053 2.17.256 4.615.383 5.987v.005a.015.015 0 01-.004.006.012.012 0 01-.002.002H4.11l-.002-.002a.016.016 0 01-.004-.005v-.006c.127-1.372.33-3.818.383-5.987h1.95a1 1 0 01.829.44l1.06 1.572a3 3 0 002.487 1.321h2.374a3 3 0 002.487-1.321l1.06-1.572a1 1 0 01.829-.44h1.95z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default InboxOutIcon;