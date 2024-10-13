import { useEffect, useRef, useState } from "react";
import { CALENDAR_COLORS, ColorHex } from "../../constants/colors";
import { ColorButton } from "../ColorButton";

export const ColorPicker = ({
  onColorChange,
}: {
  onColorChange: (hex: ColorHex) => void;
}) => {
  const [colorState, setColorState] = useState(
    CALENDAR_COLORS.slice(0).pop()?.hex
  );

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

  return (
    <details
      className="relative p-2 hover:bg-gray-100 rounded-md cursor-pointer group"
      ref={noCloseRef}
    >
      <summary className="marker:hidden list-none">
        <div
          className="size-5 rounded-full"
          style={{ backgroundColor: colorState }}
        ></div>
      </summary>
      <div className="absolute w-[100px] p-2 right-0 grid grid-cols-2 gap-2 bg-white border">
        {CALENDAR_COLORS.map((color) => (
          <ColorButton
            color={color.hex}
            onClick={() => handleClick(color.hex)}
          />
        ))}
      </div>
    </details>
  );
};