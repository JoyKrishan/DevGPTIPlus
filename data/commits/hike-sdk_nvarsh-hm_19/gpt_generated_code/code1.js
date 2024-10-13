import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://your-api-url.com',
    withCredentials: true, // Ensure cookies are sent with requests
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve();
        }
    });

    failedQueue = [];
};

axiosInstance.interceptors.response.use(response => response, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
            // Return a new promise and push handling function to queue
            return new Promise(function(resolve, reject) {
                failedQueue.push({resolve, reject});
            })
            .then(() => {
                return axiosInstance(originalRequest);
            })
            .catch(err => {
                return Promise.reject(err);
            });
        }

        originalRequest._retry = true; // Mark the request so it doesn't loop
        isRefreshing = true;

        return new Promise((resolve, reject) => {
            axiosInstance.get('/refresh-token')
                .then(() => {
                    processQueue(null); // Process all queued requests after a successful refresh
                    resolve(axiosInstance(originalRequest)); // Retry the original request
                })
                .catch((refreshError) => {
                    processQueue(refreshError);
                    reject(refreshError);
                    // Additional user re-authentication might be needed here
                })
                .finally(() => {
                    isRefreshing = false;
                });
        });
    }
    return Promise.reject(error);
});