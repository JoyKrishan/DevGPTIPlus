  loginGoogle: ({
    client_id,
    credential,
  }: {
    client_id: string;
    credential: string;
  }) => void;
  const loginGoogle = async ({
    client_id,
    credential,
  }: {
    client_id: string;
    credential: string;
  }) => {
    const sourcePage = searchParams.has("sourcePage")
      ? decodeURIComponent(searchParams.get("sourcePage") as string)
      : "/";

    apiCalls
      .getGoogleLoginToken({ client_id: client_id, credential: credential })
      .then(({ access_token, access_level, username }) => {
        localStorage.setItem("token", access_token);
        localStorage.setItem("accessLevel", access_level);
        setUser(username);
        setToken(access_token);
        setAccessLevel(access_level);
        router.push(sourcePage);
      })
      .catch((error) => {
        setLoginError("Invalid Google credentials");
        console.error("Google login error:", error);
      });
  };

    loginGoogle: loginGoogle,