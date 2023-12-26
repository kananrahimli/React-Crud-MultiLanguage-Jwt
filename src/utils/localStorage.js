export const setUserToLocalStorage=(user)=>{
    localStorage.setItem('user', JSON.stringify(user))
}

export const clearLocalStorage=()=>{
    localStorage.removeItem('user')
}

export const getUserFromLocalStorage=()=>{
    const user=JSON.parse(localStorage.getItem('user'))
    return user?user:null
}