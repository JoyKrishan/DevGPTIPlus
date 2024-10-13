type CreateArticleState = {
  error: {
    title?: string[] | undefined;
    content?: string[] | undefined;
  };
  message: string | null;
};

const initialState: CreateArticleState = {
  error: {
    title: [],
    content: [],
  },
  message: '',
};