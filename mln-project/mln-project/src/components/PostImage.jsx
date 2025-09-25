import React from "react";

function PostImage({ src, alt, imageCaption }) {
  return (
    <div className="my-6">
      <div className="flex justify-center">
        <img 
          src={src} 
          alt={alt} 
          className="max-w-full h-auto rounded-md shadow-md" 
        />
      </div>
      {imageCaption && (
        <p className="text-center text-sm italic mt-2 text-gray-600">
          {imageCaption}
        </p>
      )}
    </div>
  );
}

export default PostImage;