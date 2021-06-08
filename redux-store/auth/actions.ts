export const authActions = {
    setIsAuth: (isAuth: boolean) => ({type: 'SET_IS_AUTH', isAuth} as const),
    setUser: ((userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({type: 'SET_USER', authData: {userId, email, login, isAuth}} as const)),
}