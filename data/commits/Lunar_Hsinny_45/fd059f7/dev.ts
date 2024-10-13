import { loginApi, loginJwtApi, signInApi, updateProfileApi } from "@/api/user";
import { newImageFileUrl } from "@/api/upload";
export const updateProfileAction = createAsyncThunk(
  "user/updateProfile",
  async (data: { file: Blob; userId: string }) => {
    const { result: imageResult } = await newImageFileUrl(data.file);
    return await updateProfileApi({
      userId: data.userId,
      avatar: imageResult.link,
    });
  }
);

    builder.addCase(updateProfileAction.fulfilled, (state, action) => {
      state.user.avatar = action.payload.result.avatar || "";
    });