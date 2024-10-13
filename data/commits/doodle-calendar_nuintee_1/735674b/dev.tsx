import { useEffect, useRef, useState } from "react";
import { CALENDAR_COLORS, ColorHex } from "./constants/colors";
const ColorPicker = ({
  onColorChange,
}: {
  onColorChange: (hex: ColorHex) => void;
}) => {
  const noCloseRef = useRef<HTMLDetailsElement | null>(null);

  const handleClick = (hex: ColorHex) => {
    setColorState(hex);
    onColorChange(hex);
  };

  useEffect(() => {
    const init = () => {
      document.addEventListener("click", (e) => {
        const isDescendant = noCloseRef.current?.contains(e.target as Node);

        if (isDescendant || !noCloseRef.current) return;

        noCloseRef.current.open = false;
      });
    };

    init();
  }, []);

    <details
      className="relative p-2 hover:bg-gray-100 rounded-md cursor-pointer group"
      ref={noCloseRef}
    >
            onClick={() => handleClick(color.hex)}
        <ColorPicker onColorChange={console.log} />