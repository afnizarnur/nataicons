import React from 'react';

const Battery2Icon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3 5.01l.004-.004a.022.022 0 01.007-.004h.007c1.456.177 4.064.46 5.982.46 1.918 0 4.526-.283 5.982-.46h.007l.007.004A.017.017 0 0115 5.01v9.702l-.004.004a.023.023 0 01-.007.004h-.007c-1.456-.177-4.064-.46-5.982-.46-1.918 0-4.526.283-5.982.46h-.007a.023.023 0 01-.01-.008L3 14.71v-9.7zm.26-1.995A2.015 2.015 0 001 5.011v9.699a2.015 2.015 0 002.26 1.996c1.458-.178 3.957-.446 5.74-.446 1.783 0 4.282.268 5.74.446A2.015 2.015 0 0017 14.71v-9.7a2.015 2.015 0 00-2.26-1.995c-1.458.178-3.957.445-5.74.445-1.783 0-4.282-.267-5.74-.445zM20 7.86a1 1 0 10-2 0v4.5a1 1 0 102 0v-4.5zm-14-1a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zm4 1a1 1 0 10-2 0v4a1 1 0 102 0v-4z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4 7.15l.004-.004a.022.022 0 01.007-.005h.007c1.456.177 4.064.46 5.982.46 1.918 0 4.526-.283 5.982-.46h.007c.002 0 .005.002.007.005A.017.017 0 0116 7.15v9.7l-.004.004a.022.022 0 01-.007.005h-.007c-1.456-.177-4.064-.46-5.982-.46-1.918 0-4.526.283-5.982.46a.02.02 0 01-.005 0h-.002a.022.022 0 01-.007-.005A.016.016 0 014 16.85v-9.7zm.26-1.995A2.015 2.015 0 002 7.15v9.7a2.015 2.015 0 002.26 1.995c1.458-.177 3.957-.445 5.74-.445 1.783 0 4.282.268 5.74.445A2.015 2.015 0 0018 16.85v-9.7a2.015 2.015 0 00-2.26-1.995c-1.458.177-3.957.445-5.74.445-1.783 0-4.282-.268-5.74-.445zM21 10a1 1 0 10-2 0v4.5a1 1 0 102 0V10zM7 9a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zm4 1a1 1 0 10-2 0v4a1 1 0 102 0v-4z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default Battery2Icon;