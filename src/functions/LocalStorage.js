export const setLocalStorage = (name, value) => {
    window.localStorage.setItem(name, value)
}

export const getLocalStorage = (name) => {
    window.localStorage.getItem(name)
}