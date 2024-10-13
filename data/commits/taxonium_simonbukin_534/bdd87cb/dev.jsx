  function addFromText(text) {
    const file_obj = { name: "text.nwk", supplyType: "file" };
    file_obj.filetype = "nwk";
    file_obj.data = text;
    addInput(file_obj, text);
  }

    addFromText,