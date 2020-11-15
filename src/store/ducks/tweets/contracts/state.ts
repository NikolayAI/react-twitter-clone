export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}


export type TweetType = {
    _id: string
    text: string
    user: {
        fullName: string,
        userName: string,
        avatarUrl: string,
    }
}

export type TweetsStateType = {
    items: Array<TweetType>
    loadingState: LoadingState
}