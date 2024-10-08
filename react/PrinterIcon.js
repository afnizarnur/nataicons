import React from 'react';

const PrinterIcon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4.312 3.468C4.075 2.249 4.975 1 6.31 1h7.38c1.335 0 2.235 1.25 1.998 2.468-.106.545-.188 1.114-.188 1.532 0 .418.082.987.188 1.532.03.157.042.313.037.468H17a2 2 0 012 2v5a2 2 0 01-2 2h-1.406c.039.246.086.497.135.736a19.767 19.767 0 00.217.93l.014.055.004.012v.003A1 1 0 0115 19H5a1 1 0 01-.965-1.264l.001-.003.004-.012.014-.055.053-.21c.045-.18.104-.433.164-.72.05-.239.096-.49.135-.736H3a2 2 0 01-2-2V9a2 2 0 012-2h1.275a2.06 2.06 0 01.037-.468C4.418 5.987 4.5 5.418 4.5 5c0-.418-.082-.987-.188-1.532zM4.406 14c-.028-.176-.06-.355-.094-.532C4.075 12.249 4.975 11 6.31 11h7.38c1.335 0 2.235 1.25 1.998 2.468-.034.177-.066.356-.094.532H17V9H3v5h1.406zm9.286-7H6.308a.051.051 0 01-.015-.014.088.088 0 01-.018-.071C6.387 6.34 6.5 5.617 6.5 5s-.113-1.34-.225-1.915a.088.088 0 01.018-.071A.051.051 0 016.308 3h7.384c.001 0 .008.004.015.014a.088.088 0 01.018.071C13.613 3.66 13.5 4.383 13.5 5s.113 1.34.225 1.915a.088.088 0 01-.018.071.051.051 0 01-.015.014zm.05 10H6.258c.12-.596.242-1.358.242-2 0-.617-.113-1.34-.225-1.915a.088.088 0 01.018-.071.05.05 0 01.015-.014h7.384a.05.05 0 01.015.014.088.088 0 01.018.071c-.112.575-.225 1.298-.225 1.915 0 .642.123 1.404.242 2z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M6.265 3.411C6.05 2.197 6.962 1 8.262 1h8.476c1.3 0 2.213 1.197 1.997 2.411-.124.695-.235 1.498-.235 2.089 0 .59.111 1.394.235 2.089.024.138.034.275.03.411H21a2 2 0 012 2v7a2 2 0 01-2 2h-2.479c.038.502.123 1.075.214 1.589.216 1.214-.697 2.411-1.997 2.411H8.262c-1.3 0-2.212-1.197-1.997-2.411.091-.514.176-1.087.214-1.589H4a2 2 0 01-2-2v-7a2 2 0 012-2h2.234a2.048 2.048 0 01.031-.411C6.39 6.894 6.5 6.09 6.5 5.5c0-.59-.111-1.394-.235-2.089zM8.262 8h8.478a.063.063 0 00.025-.061c-.127-.714-.266-1.662-.266-2.439 0-.777.139-1.725.266-2.438a.063.063 0 00-.014-.052H8.248L16.741 3H8.258a.062.062 0 00-.025.061c.127.714.266 1.662.266 2.439 0 .777-.139 1.725-.266 2.438A.062.062 0 008.26 8h.002zm.229 10.135a1.01 1.01 0 00-.027-.403 19.34 19.34 0 00-.23-1.67.062.062 0 01.014-.052h8.504a.063.063 0 01.014.051 19.2 19.2 0 00-.23 1.671 1 1 0 00-.027.403 7.627 7.627 0 00-.009.365c0 .777.139 1.725.266 2.439a.063.063 0 01-.025.06l-.003.001H8.26a.062.062 0 01-.025-.061c.127-.714.266-1.662.266-2.439 0-.118-.003-.24-.01-.365zM18.638 17c.03-.2.063-.398.097-.589.216-1.214-.697-2.411-1.997-2.411H8.262c-1.3 0-2.212 1.197-1.997 2.411.034.19.067.389.097.589H4v-7h17v7h-2.362zm-10.39-.99A.04.04 0 018.26 16h8.481l-8.493.01z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default PrinterIcon;