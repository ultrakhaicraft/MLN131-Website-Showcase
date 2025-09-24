import React from "react";

function PostImage({src, alt, imageCaption}) {
  return (
    <>
    <img src={src} alt={alt} className="w-full h-48"/>
    <p className="text-center text-sm mt-2 text-gray-700">
            {imageCaption}
    </p>
    </>
  );
}

export default PostImage;