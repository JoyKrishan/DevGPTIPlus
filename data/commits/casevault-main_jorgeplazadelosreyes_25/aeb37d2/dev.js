import axios from "axios"

let baseUrl = 'http://localhost:3000'
export const url = baseUrl

const instance = axios.create({
    baseURL: url,
    timeout: 120000,
})

instance.interceptors.request.use((config) => {
    const newConfig = { ...config }
    const accountString = localStorage.getItem("account");
    if (accountString) {
        const account = JSON.parse(accountString);
        const accessToken = account.jti;
        const userId = account.id;
        newConfig.headers["Token"] = accessToken;
        newConfig.headers["User-Id"] = userId;
        newConfig.headers["baseurl"] = window.location.origin;
    }
    return config
})

instance.interceptors.response.use((response) => {
    return response
})

export default instance