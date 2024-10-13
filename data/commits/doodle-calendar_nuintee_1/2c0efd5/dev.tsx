export const ColorPicker = ({
  onColorChange,
  defaultColor,
}: ColorPickerProps) => {
  const [colorState, setColorState] = useState(defaultColor);