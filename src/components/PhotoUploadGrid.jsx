import React, { useState } from 'react';

const PhotoUploadGrid = () => {
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const updatedImages = [...images, ...files].slice(0, 20); // Max 20
    setImages(updatedImages);
  };

  const handleDeleteImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const renderImageSlot = (index) => {
    if (images[index]) {
      return (
        <div className="relative w-full h-full">
          <img
            ondr
            src={URL.createObjectURL(images[index])}
            alt={`preview-${index}`}
            className="w-full h-full object-cover"
          />
          <button
            className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
            onClick={() => handleDeleteImage(index)}
          >
            ×
          </button>
        </div>
      );
    } else if (index === images.length) {
      return (
        <label className="cursor-pointer w-full h-full flex flex-col items-center justify-center">
          <span className="text-sm text-gray-500">Add Photo</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            multiple
            onChange={handleFileChange}
          />
        </label>
      );
    } else {
      return <div className="text-gray-400">+</div>;
    }
  };

  return (
    <div className="my-4">
      <h2 className="font-semibold mb-2">UPLOAD UP TO 20 PHOTOS</h2>
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 h-24 flex items-center justify-center relative"
          >
            {renderImageSlot(index)}
          </div>
        ))}
      </div>
      {images.length === 0 && (
        <p className="text-red-500 text-sm mt-1">This field is mandatory</p>
      )}
    </div>
  );
};

export default PhotoUploadGrid;