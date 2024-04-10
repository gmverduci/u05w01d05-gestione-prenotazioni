export interface Auth {
    accessToken: string,
    user: {
        id: number,
        email: string,
        avatar: string,
        adult: boolean,
        favorites: number[]
    }
}
