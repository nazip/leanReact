import React from 'react';

export default ({img}) => {
   const {src, alt, width, height} = img;  
   return <img src={src} alt={alt} width={width} height={height}/>;
};