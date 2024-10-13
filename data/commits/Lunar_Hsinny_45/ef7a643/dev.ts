import {
  loginApi,
  loginJwtApi,
  resetPasswordApi,
  signInApi,
  updateProfileApi,
} from "@/api/user";
import { LoginProps, ResetPasswordProps, UserProps } from "@/interfaces/user";
import openNotification from "@/utils/openNotification";
export const resetPasswordAction = createAsyncThunk(
  "user/resetPassword",
  async (data: ResetPasswordProps) => await resetPasswordApi(data)
);

    // 更新個人資料
        openNotification({
          message: "使用者名稱更新成功",
          success: true,
        });
    // 重設密碼
    builder.addCase(resetPasswordAction.fulfilled, (state, action) => {
      openNotification({
        message: "密碼更新成功",
        success: true,
      });
    });