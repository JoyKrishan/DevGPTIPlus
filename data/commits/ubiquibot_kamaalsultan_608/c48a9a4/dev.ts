import { Payload } from "../types";
import { ajv } from "../utils";
import { Static, Type } from "@sinclair/typebox";
const ChatMessageSchema = Type.Object({
  content: Type.String(),
});

const ChoiceSchema = Type.Object({
  message: ChatMessageSchema,
});

const ChoicesSchema = Type.Object({
  choices: Type.Array(ChoiceSchema),
});

type Choices = Static<typeof ChoicesSchema>;

    const validate = ajv.compile(ChoicesSchema);
    const valid = validate(data);
    if (!valid) {
      throw new Error("Error occured from OpenAI");
    }