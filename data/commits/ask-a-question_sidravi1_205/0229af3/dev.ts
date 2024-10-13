const getGoogleLoginToken = async (idToken: {
  client_id: string;
  credential: string;
}) => {
  return fetch(`${NEXT_PUBLIC_BACKEND_URL}/login-google`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(idToken),
  }).then((response) => {
    if (response.ok) {
      let resp = response.json();
      console.log(resp);
      return resp;
    } else {
      throw new Error("Error fetching login token");
    }
  });
};

  getGoogleLoginToken,