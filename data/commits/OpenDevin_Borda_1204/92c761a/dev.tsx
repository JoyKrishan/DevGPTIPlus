
  info: (msg: string) => {
    toast(msg, {
      position: "top-center",
      className: "bg-neutral-700",

      style: {
        background: "#333",
        color: "#fff",
        lineBreak: "anywhere",
      },
    });
  },