import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CSPage() {
  const [initialZoom, setInitialZoom] = useState(50); // Adjust the initial zoom level here

  const imageWidth = 4096; // Width of the original image
  const imageHeight = 4096; // Height of the original image
  const containerWidth = 512; // Adjust this value based on the desired container width
  const containerHeight = 512; // Adjust this value based on the desired container height

  // Calculate the initial scale factor based on the container and image dimensions
  const initialScale = Math.min(containerWidth / imageWidth, containerHeight / imageHeight);

  // Calculate the initial X and Y axis movement to position the image in the bottom right corner
  const xAxisMovement = containerWidth - imageWidth * initialScale;
  const yAxisMovement = containerHeight - imageHeight * initialScale;

  const imageStyle = {
    transform: `scale(${initialZoom * initialScale}) translateX(${-xAxisMovement}px) translateY(${-yAxisMovement}px)`,
    transition: 'transform 0.3s ease-in-out',
  };

  useEffect(() => {
    // Update the initial zoom level whenever it changes
    const newScale = Math.min(containerWidth / imageWidth, containerHeight / imageHeight);
    setInitialZoom(prevZoom => prevZoom * newScale);
  }, [containerWidth, containerHeight, imageWidth, imageHeight]);

  // Zooms out to the value of 11
  const handleZoomOut = () => {
    setInitialZoom(prevZoom => prevZoom - 11);
  };

  return (
    <div>
      <div className="flex justify-center w-screen">
        <h1> Counter-Strike </h1>
      </div>
      <div className="flex justify-center w-screen ">
        <div className="relative max-w-screen-sm overflow-hidden border-4 border-gray-700 h-max">
          <Image
            src="/images/awp/cu_medieval_dragon_awp.png"
            height={4096}
            width={4096}
            quality={100}
            alt="Dragon Lore"
            priority={true}
            style={imageStyle}
          />
        </div>
        <div className="flex justify-center">
          <button onClick={handleZoomOut} className="px-4 py-2 text-white bg-red-500">
            Zoom Out
          </button>
        </div>
      </div>
    </div>
  );
}