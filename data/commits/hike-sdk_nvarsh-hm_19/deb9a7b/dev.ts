import { refreshToken } from '../auth/refreshToken';
backendApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const alreadyRefreshed = originalRequest._alreadyRefreshed;

    // Attempt to refresh the token
    if (error.response?.status === 401 && !alreadyRefreshed) {
      try {
        await refreshToken();
        return backendApi(originalRequest);
      } catch (refreshError) {
        window.location.href = '/';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
