export type TAuth = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: Array<string>
}

export type TLogin<T> = {
    resultCode: number
    messages: Array<string>
    data: T
}

export type TLoginPost = { userId: number }
export type TLoginDelete = {}