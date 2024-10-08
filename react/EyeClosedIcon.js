import React from 'react';

const EyeClosedIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.415 10.242c-.067-.086-.13-.167-.186-.242a16.806 16.806 0 011.803-2.025C6.429 6.648 8.187 5.5 10 5.5c1.813 0 3.57 1.148 4.968 2.475A16.816 16.816 0 0116.771 10a16.9 16.9 0 01-1.803 2.025C13.57 13.352 11.813 14.5 10 14.5c-1.813 0-3.57-1.148-4.968-2.475a16.799 16.799 0 01-1.617-1.783zm15.423-.788L18 10l.838.546-.002.003-.003.004-.01.016-.037.054a17.123 17.123 0 01-.628.854 19.25 19.25 0 01-1.094 1.275L18.3 14.4a1 1 0 01-1.6 1.2l-1.097-1.462c-1.23 1.027-2.81 2.007-4.603 2.284V18a1 1 0 11-2 0v-1.578c-1.793-.277-3.374-1.257-4.603-2.284L3.3 15.6a1 1 0 11-1.6-1.2l1.236-1.648a19.262 19.262 0 01-1.59-1.938 11.109 11.109 0 01-.169-.245l-.01-.016-.003-.004-.001-.002c0-.001-.001-.001.837-.547l-.838-.546.002-.003.003-.004.01-.016a6.84 6.84 0 01.17-.245 18.804 18.804 0 012.308-2.66C5.151 5.1 7.394 3.499 10 3.499s4.848 1.602 6.346 3.025a18.803 18.803 0 012.44 2.852l.037.054.01.016.003.004.001.002zM18 10l.838-.546.355.546-.355.546L18 10zM1.162 9.454L2 10l-.838.546L.807 10l.355-.546z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4.484 12.308A18.55 18.55 0 014.24 12a18.647 18.647 0 012.073-2.264C7.888 8.286 9.9 7 12 7s4.112 1.285 5.686 2.736A18.642 18.642 0 0119.76 12a18.64 18.64 0 01-2.073 2.264C16.111 15.714 14.1 17 12 17s-4.112-1.285-5.687-2.736a18.644 18.644 0 01-1.829-1.956zm17.346-.866L21 12l.83.558-.002.002-.003.006-.012.016a8.723 8.723 0 01-.188.266 20.81 20.81 0 01-2.339 2.659l1.495 1.868a1 1 0 11-1.562 1.25l-1.456-1.82c-1.325.996-2.952 1.88-4.763 2.126V21a1 1 0 11-2 0v-2.069c-1.811-.247-3.438-1.13-4.763-2.127l-1.456 1.82a1 1 0 11-1.562-1.249l1.495-1.869a20.825 20.825 0 01-2.339-2.658 12.29 12.29 0 01-.188-.266l-.012-.016-.003-.006-.001-.001v-.001L3 12l-.83-.558.002-.002.003-.006.012-.016a8.634 8.634 0 01.188-.266 20.651 20.651 0 012.583-2.888C6.642 6.714 9.13 5 12 5s5.359 1.715 7.041 3.264a20.646 20.646 0 012.584 2.888 12.198 12.198 0 01.188.266l.012.016.003.006.001.001v.001zM21 12l.83-.557.375.557-.375.557L21 12zm-18.83-.557L3 12l-.83.557L1.795 12l.375-.557z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default EyeClosedIcon;