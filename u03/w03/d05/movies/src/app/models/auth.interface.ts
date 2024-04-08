export interface Auth {
    accessToken: string,
    user: {
        id: string,
        email: string
        avatar: string
    }
}
