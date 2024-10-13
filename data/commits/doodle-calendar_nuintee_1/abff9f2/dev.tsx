import { DecorationTemplate } from "./types";
  const [inputValue, setInputValue] = useState<DecorationTemplate>({
    hex: "#039BE5",
    label: "",
  });
  const [templates, setTemplates] = useState<DecorationTemplate[]>([]);
        ...prev.filter(
          (template) =>
            !savedTemplates.find(
              (saved) => JSON.stringify(saved) === JSON.stringify(template)
            )
        ),
      ...prev.filter(
        (value) => JSON.stringify(value) !== JSON.stringify(inputValue)
      ),
          value={inputValue.label}
          onChange={(e) =>
            setInputValue((prev) => ({ ...prev, label: e.target.value }))
          }
        />
        <ColorPicker
          onColorChange={(hex) => setInputValue((prev) => ({ ...prev, hex }))}
            {template.label}