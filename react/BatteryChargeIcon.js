import React from 'react';

const BatteryChargeIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3 5.009v9.703l.004.004a.023.023 0 00.007.004h.007c1.456-.177 4.064-.46 5.982-.46 1.918 0 4.526.283 5.982.46h.007a.023.023 0 00.01-.008L15 14.71V5.009l-.004-.004a.022.022 0 00-.007-.004h-.007c-1.456.177-4.064.46-5.982.46-1.918 0-4.526-.283-5.982-.46h-.007a.022.022 0 00-.01.008zM1 5.01a2.015 2.015 0 012.26-1.996c1.458.178 3.957.445 5.74.445 1.783 0 4.282-.267 5.74-.445A2.015 2.015 0 0117 5.011v9.699a2.015 2.015 0 01-2.26 1.996c-1.458-.178-3.957-.446-5.74-.446-1.783 0-4.282.268-5.74.446A2.015 2.015 0 011 14.71v-9.7zm18 1.85a1 1 0 011 1v4.5a1 1 0 11-2 0v-4.5a1 1 0 011-1zm-9.47-.349A1 1 0 008 7.36v3.218L5.427 9.007a1 1 0 00-1.042 1.707l4.094 2.5A1 1 0 0010 12.36V9.165l2.47 1.543a1 1 0 001.06-1.696l-4-2.5z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4 7.149v9.701l.004.004a.022.022 0 00.007.005h.007c1.456-.177 4.064-.46 5.982-.46 1.918 0 4.526.283 5.982.46a.02.02 0 00.005 0h.002a.022.022 0 00.007-.005.014.014 0 00.004-.004v-9.7l-.004-.004a.022.022 0 00-.007-.005h-.007c-1.456.177-4.064.46-5.982.46-1.918 0-4.526-.283-5.982-.46h-.007a.022.022 0 00-.01.009zM2 7.15a2.015 2.015 0 012.26-1.995c1.458.177 3.957.445 5.74.445 1.783 0 4.282-.268 5.74-.445A2.015 2.015 0 0118 7.15v9.7a2.015 2.015 0 01-2.26 1.995c-1.458-.177-3.957-.445-5.74-.445-1.783 0-4.282.268-5.74.445A2.015 2.015 0 012 16.85v-9.7zM20 9a1 1 0 011 1v4.5a1 1 0 11-2 0V10a1 1 0 011-1zm-9.47-.348A1 1 0 009 9.5v3.218l-2.573-1.572a1 1 0 00-1.042 1.707l4.094 2.5A1 1 0 0011 14.5v-3.196l2.47 1.544a1 1 0 001.06-1.696l-4-2.5z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default BatteryChargeIcon;