  async (data: { userId: string; file?: Blob; name?: string }) => {
    if (data.file) {
      const { result: imageResult } = await newImageFileUrl(data.file);
      return await updateProfileApi({
        userId: data.userId,
        avatar: imageResult.link,
      });
    } else {
      return await updateProfileApi({
        userId: data.userId,
        name: data.name,
      });
    }
      if (action.payload.result.avatar) {
        state.user.avatar = action.payload.result.avatar;
      }
      if (action.payload.result.name) {
        state.user.name = action.payload.result.name;
      }