import { defineStore } from "pinia";
import {apiService} from "@/utils/appAxios";
import type {ITweetFetch} from "@/stores/interfaces/ITweetFetch";
import {TweetModel} from "@/stores/models/TweetModel";

export const useTweetStore = defineStore("tweets", {
    state: (): any => {
        return {
            tweets: null,
        };
    },
    getters: {
        getTweets: (state) => {
            return state.tweets;
        },
    },
    actions: {
        async fetchTweets(state:any) {
            const res = await apiService.get('/tweets')
            this.$state.tweets = res.data.map((item:ITweetFetch) => {
                return TweetModel.fromFetch(item)
            })
        },
    },
});