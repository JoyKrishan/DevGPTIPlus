(function (Scratch) {
  "use strict";

  class MathOpsExt {
    constructor() {}

    getInfo() {
      return {
        id: "mathops",
        name: "Math Operations",
        blocks: [
          {
            opcode: "add",
            blockType: Scratch.BlockType.REPORTER,
            text: "add [NUM1] and [NUM2]",
            arguments: {
              NUM1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
              NUM2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
            },
          },
          {
            opcode: "subtract",
            blockType: Scratch.BlockType.REPORTER,
            text: "subtract [NUM2] from [NUM1]",
            arguments: {
              NUM1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
              NUM2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
            },
          },
          {
            opcode: "multiply",
            blockType: Scratch.BlockType.REPORTER,
            text: "multiply [NUM1] by [NUM2]",
            arguments: {
              NUM1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
              NUM2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
            },
          },
          {
            opcode: "divide",
            blockType: Scratch.BlockType.REPORTER,
            text: "divide [NUM1] by [NUM2]",
            arguments: {
              NUM1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
              NUM2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
            },
          },
        ],
      };
    }

    add(args, util) {
      const num1 = Number(args.NUM1);
      const num2 = Number(args.NUM2);
      return num1 + num2;
    }

    subtract(args, util) {
      const num1 = Number(args.NUM1);
      const num2 = Number(args.NUM2);
      return num1 - num2;
    }

    multiply(args, util) {
      const num1 = Number(args.NUM1);
      const num2 = Number(args.NUM2);
      return num1 * num2;
    }

    divide(args, util) {
      const num1 = Number(args.NUM1);
      const num2 = Number(args.NUM2);
      if (num2 === 0) {
        return "Infinity";
      }
      return num1 / num2;
    }
  }

  Scratch.extensions.register(new MathOpsExt());
})(Scratch);