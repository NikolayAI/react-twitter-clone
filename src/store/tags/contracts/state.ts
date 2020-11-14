export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}


export type TagType = {
    _id: string
    name: string
    count: number
}

export type TagsStateType = {
    items: Array<TagType>
    loadingState: LoadingState
}