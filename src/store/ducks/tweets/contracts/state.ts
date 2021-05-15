export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export enum AddFormState {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}


export type TweetType = {
    _id: string
    text: string
    user: {
        fullname: string,
        username: string,
        avatarUrl: string,
        email: string,
    }
}

export type TweetsStateType = {
    items: Array<TweetType>
    loadingState: LoadingState
    addFormState: AddFormState
}