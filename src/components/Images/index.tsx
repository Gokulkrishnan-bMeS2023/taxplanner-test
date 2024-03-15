import React from "react";
import Image, { ImageProps } from "next/image";

const Images = ({ src, alt, ...props }: ImageProps) => {
  return <Image src={src} alt={alt} {...props} />;
};

export default Images;
