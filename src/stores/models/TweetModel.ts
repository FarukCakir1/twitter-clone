import type {ITweet} from "@/stores/interfaces/ITweet";
import type {IUser} from "@/stores/interfaces/IUser";
import type {ITweetFetch} from "@/stores/interfaces/ITweetFetch";


export class TweetModel implements ITweet {
    id: number;
    user: IUser;
    tweet:string;
    media: string|null;
    fav:number;
    retweet: number;
    comment:number;
    comments?: ITweet|null;
    created_at: any


    constructor(_interface: ITweet) {
        this.id = _interface.id;
        this.user = _interface.user;
        this.tweet = _interface.tweet;
        this.media = _interface.media;
        this.fav = _interface.fav;
        this.retweet = _interface.retweet;
        this.comment = _interface.comment;
        this.comments = _interface.comments;
        this.created_at = _interface.created_at
    }

    static fromFetch(_interface: ITweetFetch) {
        return new TweetModel({
            id: _interface.id,
            user: _interface.user,
            tweet: _interface.tweet,
            media: _interface.tweet_media,
            fav: _interface.fav,
            retweet: _interface.retweet,
            comment: _interface.comment,
            comments: _interface.comment_tweets,
            created_at: _interface.created_at
        })
    }
}