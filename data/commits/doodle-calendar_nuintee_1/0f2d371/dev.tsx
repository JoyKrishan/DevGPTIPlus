import { CALENDAR_COLORS } from "./constants/colors";

const ColorPicker = () => {
  const [colorState, setColorState] = useState(
    CALENDAR_COLORS.slice(0).pop()?.hex
  );

  return (
    <details className="relative p-2 hover:bg-gray-100 rounded-md rounded-md">
      <summary className="marker:hidden list-none">
        <div
          className="size-5 rounded-full"
          style={{ backgroundColor: colorState }}
        ></div>
      </summary>
      <div className="absolute w-[100px] p-2 right-0 grid grid-cols-2 gap-2 bg-white border">
        {CALENDAR_COLORS.map((color) => (
          <button
            className="hover:bg-gray-100 p-2 rounded-md"
            onClick={() => setColorState(color.hex)}
          >
            <div
              className="size-5 rounded-full"
              style={{ backgroundColor: color.hex }}
            ></div>
          </button>
        ))}
      </div>
    </details>
  );
};
    <div className="flex flex-col gap-y-2 p-2 w-[350px]">
        <ColorPicker />
          className="px-4 py-2 bg-blue-500 rounded-md text-white shrink-0"