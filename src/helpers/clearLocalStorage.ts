export const clearLocalStorage = ():void =>{

    localStorage.removeItem('authToken')
    localStorage.removeItem('userProfile')

}
