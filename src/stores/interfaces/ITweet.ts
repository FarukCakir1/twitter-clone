import type {IUser} from "@/stores/interfaces/IUser";

export interface ITweet {
    id: number,
    user: IUser,
    tweet: string,
    media: string|null,
    fav: number,
    retweet: number,
    comment: number,
    comments?: Array<ITweet>|null,
    created_at: any
}