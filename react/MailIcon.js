import React from 'react';

const MailIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3 4.094v-.002l.002-.002a.012.012 0 01.004-.003h.003c1.616.128 4.738.35 6.991.35 2.254 0 5.375-.222 6.991-.35h.003l.004.003.002.001v2.291l-7 3.5-7-3.5V4.094zm0 4.524v7.29l.002.002a.01.01 0 00.004.002h.003c1.616-.128 4.738-.35 6.991-.35 2.254 0 5.375.223 6.991.35h.003l.004-.002.002-.002v-7.29l-6.106 3.053a2 2 0 01-1.788 0L3 8.618zm.167-6.524a2.008 2.008 0 00-2.167 2v11.812a2.008 2.008 0 002.167 2c1.619-.128 4.668-.343 6.833-.343s5.214.215 6.833.343a2.008 2.008 0 002.167-2V4.094a2.008 2.008 0 00-2.167-2c-1.619.128-4.668.344-6.833.344s-5.214-.216-6.833-.344z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4 5.095v-.001l.002-.002a.011.011 0 01.003-.003h.004C5.786 5.234 9.406 5.5 12 5.5c2.594 0 6.214-.266 7.991-.41h.003l.004.002.002.002v2.318l-8 4.444-8-4.444V5.095zM4 9.7v9.206l.002.002a.01.01 0 00.003.003h.004C5.786 18.766 9.406 18.5 12 18.5c2.594 0 6.214.266 7.991.41h.003l.004-.002.002-.002V9.7l-7.029 3.904a2 2 0 01-1.942 0L4 9.7zm.17-6.604a2.007 2.007 0 00-2.17 2v13.809a2.007 2.007 0 002.17 1.999c1.781-.145 5.327-.404 7.83-.404 2.502 0 6.049.26 7.83.404a2.007 2.007 0 002.17-2V5.096a2.007 2.007 0 00-2.17-1.999c-1.781.145-5.327.404-7.83.404s-6.049-.26-7.83-.404z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default MailIcon;