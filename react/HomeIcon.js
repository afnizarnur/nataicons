import React from 'react';

const HomeIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M11.2 1.65a2 2 0 00-2.4 0L1.885 6.836a2.017 2.017 0 00-.783 1.907c.145.99.398 2.92.398 4.257 0 1.11-.175 2.638-.32 3.702C1.019 17.899 1.94 19 3.178 19h13.646c1.236 0 2.16-1.1 1.997-2.298-.145-1.064-.32-2.592-.32-3.702 0-1.337.253-3.268.398-4.257a2.017 2.017 0 00-.783-1.907L11.2 1.65zM3.085 8.436L10 3.25l6.915 5.186.001.001.002.003a.025.025 0 010 .013C16.776 9.435 16.5 11.5 16.5 13c0 1.258.193 2.903.338 3.97v.013a.035.035 0 01-.014.017H14v-5a4 4 0 00-8 0v5H3.176c-.001 0-.004-.002-.006-.005a.035.035 0 01-.007-.012.026.026 0 010-.012c.144-1.068.337-2.713.337-3.971 0-1.5-.275-3.565-.419-4.547l.001-.013.003-.004zM8 17h4v-5a2 2 0 10-4 0v5z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M13.28 1.765a2 2 0 00-2.56 0l-7.932 6.61a2.013 2.013 0 00-.706 1.805c.14 1.08.418 3.443.418 5.07 0 1.37-.197 3.269-.345 4.488A2.016 2.016 0 004.151 22H19.85c1.22 0 2.138-1.075 1.995-2.262-.147-1.22-.345-3.118-.345-4.488 0-1.627.278-3.99.418-5.07a2.013 2.013 0 00-.706-1.805l-7.932-6.61zM12 3.302l7.931 6.61s.004.003.003.011c-.139 1.072-.434 3.554-.434 5.327 0 1.503.212 3.508.36 4.728v.007l-.001.003a.024.024 0 01-.008.012H4.15a.026.026 0 01-.009-.012v-.003a.03.03 0 010-.007c.147-1.22.359-3.225.359-4.728 0-1.773-.295-4.255-.434-5.327-.001-.008.002-.012.003-.012L12 3.301zM12 11a4 4 0 00-4 4v5h2v-5a2 2 0 114 0v5h2v-5a4 4 0 00-4-4z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default HomeIcon;