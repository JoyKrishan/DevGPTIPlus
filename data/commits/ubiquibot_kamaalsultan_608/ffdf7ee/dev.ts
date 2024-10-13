export const SimilaritySchema = Type.Object({
  threshold: Type.Number(),
  openaiSystemPrompt: Type.String(),
  openaiUserPrompt: Type.String(),
});

  similarity: SimilaritySchema