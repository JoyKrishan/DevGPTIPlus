import { useState, useEffect } from 'react';
import Image from 'next/image';
    // const [initialZoom, setInitialZoom] = useState(210);
    const [initialZoom, setInitialZoom] = useState(28);
    const imageWidth = 4096; // Width of the original image
    const imageHeight = 4096; // Height of the original image
    const imageContainerWidth = 512; // Adjust this value based on the desired container width

    // Calculate the initial scale factor based on the container and image dimensions
    const initialScale = imageContainerWidth / imageWidth;

    // Calculate the initial X and Y axis movement to center the image
    const xAxisMovement = ((imageWidth * initialScale - imageContainerWidth) / 2);
    const yAxisMovement = ((imageHeight * initialScale - imageContainerWidth) / 2);

    // Sets variables for scale, x and y. This allows us to manipulate the values 
    // and adjust the sizes dynamically
        transform: `scale(${initialZoom * initialScale}) translateX(${-xAxisMovement}px) translateY(${-yAxisMovement}px)`,
    // We use the useEffect hook to update the initial zoom level 
    // whenever the container width or the image width changes to keep the zoom consistent.
    useEffect(() => {
        // Update the initial zoom level whenever it changes
        // const newScale = imageContainerWidth / imageWidth;
        const newScale = 1
        setInitialZoom(prevZoom => prevZoom * newScale);
    }, [imageContainerWidth, imageWidth]);

    // Zooms out to the value of 11
        setInitialZoom(prevZoom => prevZoom - 8);

        <div className="flex justify-center w-screen">
            <h1> Counter-Strike </h1>
        </div>
        <div className="flex justify-center w-screen ">
            <div className="relative max-w-lg overflow-hidden border-4 border-gray-700 h-max">
            <Image
                src="/images/awp/cu_medieval_dragon_awp.png"
                height={4096}
                width={4096}
                quality={100}
                alt="Dragon Lore"
                priority={true}
                style={imageStyle}
            />
            <div className="flex justify-center">
            <button onClick={handleZoomOut} className="px-4 py-2 text-white bg-red-500">
                Zoom Out
            </button>
        </div>
}