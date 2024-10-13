import { useEffect, useRef, useState } from 'react';
import '/src/css/App.css';

export default function HighlightBackground() {
  // State to hold the mouse position
  const [position, setPosition] = useState({ x: -999999, y: 999999 });
  // Reference to the container div
  const containerRef = useRef<HTMLDivElement>(null);

  // Effect to update position state when mouse moves
  useEffect(() => {
    // Function to handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      // Update the position state with a slight delay for smoothness
      setTimeout(() => {
        setPosition({ x: event.clientX, y: event.clientY });
      }, 40); // 40ms delay for a smooth effect
    };

    // Add event listener for mouse movement
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Effect to update the background gradient based on mouse position
  useEffect(() => {
    // Reference to the container div
    const container = containerRef.current;

    // Update the background gradient if container exists
    if (container) {
      const gradientSize = 900;
      const gradient = `radial-gradient(circle ${gradientSize}px at ${position.x}px ${position.y}px, #251B3C, #1B132A)`;

      container.style.background = gradient;
    }
  }, [position]); // Run the effect whenever position state changes

  // Render a div container with flashlight-container class
  // This div will have its background updated to create the glowing effect
  return <div className="flashlight-container" ref={containerRef} />;
}