import type {ITweet} from "@/stores/interfaces/ITweet";
import type {IUser} from "@/stores/interfaces/IUser";

export interface ITweetFetch {
    id: 1,
    user: IUser,
    tweet: string,
    tweet_media: string|null,
    fav: number,
    retweet: number,
    comment: number,
    comment_tweets: ITweet,
    created_at: any
}