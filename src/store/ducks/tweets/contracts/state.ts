export enum LoadingState {
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}


export type TweetType = {
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

// export interface ITweet {
//     text: string
//     user: {
//         fullName: string,
//         userName: string,
//         avatarUrl: string,
//     },
// }

// export interface ITweetsState {
//     items: Array<ITweet>,
//     loadingState: LoadingState,
// }