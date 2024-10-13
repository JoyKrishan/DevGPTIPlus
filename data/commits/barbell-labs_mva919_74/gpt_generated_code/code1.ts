import { RefObject, useEffect } from "react";

/**
 * Custom hook to detect clicks outside a specified DOM element.
 *
 * @param ref - RefObject representing the DOM element to monitor for outside clicks.
 * @param callback - Callback function to be executed when an outside click is detected.
 */
const useOutsideClickDetecter = (
  ref: RefObject<HTMLDivElement>,
  callback: () => void
) => {
  useEffect(() => {
    /**
     * Event handler function to check if a click occurred outside the specified element.
     *
     * @param e - MouseEvent object representing the click event.
     */
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    // Add event listener for mousedown events on the document.
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts or the dependency array changes.
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export default useOutsideClickDetecter;