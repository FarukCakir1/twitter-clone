import { defineStore } from "pinia";
import {apiService} from "@/utils/appAxios";
import type {ITweetFetch} from "@/stores/interfaces/ITweetFetch";
import {TweetModel} from "@/stores/models/TweetModel";
import type {ITweet} from "@/stores/interfaces/ITweet";
import _ from "lodash"

export const useTweetStore = defineStore("tweets", {
    state: (): any => {
        return {
            tweets: [],
        };
    },
    getters: {
        getTweets: (state) => {
            return _.orderBy(state.tweets, ['created_at'], ['asc'])
        },
    },
    actions: {
        async fetchTweets(state:any) {
            const res = await apiService.get('/tweets')
            this.$state.tweets = res.data.map((item:any) => {
                return TweetModel.fromFetch({...item})
            })
        },
        async postTweet(newTweet:ITweet) {
            const res = await apiService.post('/tweets',
                {...newTweet}
            )
            this.$state.tweets = [res.data, ...this.$state.tweets]
        },
        addNestedTweet(selectedTweet:any, newTweet:any) {
            this.$state.tweets = this.$state.tweets.map((tweet:any) => {
                if (tweet.id == selectedTweet.id) {
                    tweet.comments = [...tweet.comments, newTweet]
                    console.log(tweet)
                }
                return tweet
            })
        }
    },
});