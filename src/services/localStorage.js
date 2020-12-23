const TOKEN = "ACCESS_TOKEN"

const getToken = () => {
    return localStorage.getItem(TOKEN)
}

const setToken = (token) => {
    localStorage.setItem(TOKEN, token)
}

const getRole = () => {
    if (getToken()) {
        return "user";
    }
    return "guest"
}
const removeToken = () => {
    localStorage.removeItem();
}

export default {
    getToken,
    setToken,
    getRole,
    removeToken
}