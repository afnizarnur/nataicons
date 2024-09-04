import React from 'react';

const Edit3Icon = ({ size = '24', color = 'currentColor', ...props }) => {
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

const svg20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 20 20\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M15.747 2.97a.864.864 0 011.177 1.265l-7.904 7.37-1.516.194.653-1.785 7.59-7.044zm2.639-1.366a2.864 2.864 0 00-4-.1L6.62 8.71a1 1 0 00-.26.39l-1.3 3.556a1 1 0 001.067 1.335l3.467-.445a1 1 0 00.555-.26l8.139-7.59a2.864 2.864 0 00.098-4.093zM3.1 3.007c0-.001 0-.003.002-.005A.013.013 0 013.106 3H8a1 1 0 100-2H3.108a2.009 2.009 0 00-2 2.19C1.256 4.814 1.5 7.848 1.5 10c0 2.153-.245 5.187-.391 6.81A2.009 2.009 0 003.108 19H17c1.103 0 2-.892 2-1.999V12a1 1 0 10-2 0v5H3.106l-.003-.002a.012.012 0 01-.002-.005v-.004c.146-1.62.399-4.735.399-6.989 0-2.254-.253-5.37-.4-6.99v-.003zM17 17c-.001 0 0 0 0 0zm0 0z\"/> </svg>";
const svg24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\">   <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M19.175 4.095a1.121 1.121 0 011.506 1.662l-9.12 8.29-2.044.256.834-2.224 8.824-7.984zm2.959-1.375a3.121 3.121 0 00-4.301-.108l-9.004 8.146a.999.999 0 00-.265.39l-1.5 4a1 1 0 001.06 1.344l4-.5a1 1 0 00.549-.252l9.353-8.504a3.121 3.121 0 00.108-4.516zM4.314 2a2.21 2.21 0 00-2.2 2.387C2.26 6.23 2.5 9.597 2.5 12c0 2.349-.229 5.62-.377 7.487a2.223 2.223 0 002.39 2.39C6.38 21.729 9.651 21.5 12 21.5c2.403 0 5.77.24 7.613.387A2.21 2.21 0 0022 19.686V12a1 1 0 10-2 0v7.686a.21.21 0 01-.228.207c-1.84-.147-5.28-.393-7.772-.393-2.437 0-5.779.235-7.645.383a.223.223 0 01-.238-.238c.148-1.866.383-5.208.383-7.645 0-2.492-.246-5.932-.393-7.772A.21.21 0 014.314 4H12a1 1 0 100-2H4.314z\"/> </svg>";

const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

return React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  dangerouslySetInnerHTML: { __html: svgContent },
  width: getSize(),
  height: getSize(),
  ...props
});
};

export default Edit3Icon;