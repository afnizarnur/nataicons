import React from 'react';

const BellIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.423 7.003C3.352 3.308 6.171 0 10 0c3.83 0 6.648 3.308 6.576 7.003a28.69 28.69 0 00-.005.497c0 1.647.188 3.94.315 5.3.006.067.009.134.009.2H18a1 1 0 110 2h-4a4 4 0 01-8 0H2a1 1 0 110-2h1.105c0-.066.003-.133.01-.2.126-1.36.314-3.653.314-5.3 0-.16-.002-.325-.006-.497zM7.023 13h7.865l.003-.003a.017.017 0 00.003-.005v-.006c-.126-1.36-.323-3.736-.323-5.486 0-.174.002-.353.006-.536C14.63 4.253 12.578 2 10 2S5.37 4.253 5.423 6.964c.004.183.006.362.006.536 0 1.75-.197 4.126-.324 5.486a.02.02 0 000 .004v.002l.004.005a.013.013 0 00.003.003h1.911zM8 15a2 2 0 104 0H8z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4.495 9.999C4.422 5.775 7.636 2 12 2s7.578 3.775 7.505 7.999c-.003.172-.005.34-.005.501 0 1.978.236 4.757.383 6.296.007.069.01.137.01.204H22a1 1 0 110 2h-6a4 4 0 01-8 0H2a1 1 0 110-2h2.107c0-.067.003-.135.01-.204.147-1.54.383-4.318.383-6.296 0-.162-.002-.329-.005-.501zM9.023 17h8.863l.003-.003a.016.016 0 00.003-.005v-.005c-.147-1.537-.392-4.402-.392-6.487 0-.174.002-.354.005-.536C17.562 6.716 15.109 4 12 4S6.438 6.716 6.495 9.964c.003.182.005.362.005.536 0 2.085-.245 4.95-.393 6.487a.02.02 0 000 .004v.001a.017.017 0 00.007.008h2.909zM10 19a2 2 0 104 0h-4z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default BellIcon;