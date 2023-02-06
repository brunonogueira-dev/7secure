export const api = "http://181.215.134.147:8018/api/v1";
export const requestConfig = (method, data, token = null, documentUpload = null) => {
    let config;
    if (documentUpload) {
        config = {
            method,
            body: data,
            headers: {}
        }
    } else if (method === "DELETE" || data === null) {
        config = {
            method, headers: {}
        }
    } else {
        config = {
            method,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }
    }
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
}