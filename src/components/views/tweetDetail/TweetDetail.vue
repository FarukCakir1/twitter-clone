<script setup lang="ts">
import ThreeDot from "@/components/icons/ThreeDot.vue";
import {onMounted, ref} from "vue";
import SadFace from "@/components/icons/SadFace.vue";
import FollowIcon from "@/components/icons/FollowIcon.vue";
import AddListIcon from "@/components/icons/AddListIcon.vue";
import MuteIcon from "@/components/icons/MuteIcon.vue";
import BlockItem from "@/components/icons/BlockItem.vue";
import TagItem from "@/components/icons/TagItem.vue";
import FlagItem from "@/components/icons/FlagItem.vue";
import ProfilePhoto from "@/components/UI/ProfilePhoto.vue";
import CommentIcon from "@/components/icons/CommentIcon.vue";
import StatisticsIcon from "@/components/icons/StatisticsIcon.vue";
import HeartIcon from "@/components/icons/HeartIcon.vue";
import ReTweetIcon from "@/components/icons/ReTweetIcon.vue";
import SendIcon from "@/components/icons/SendIcon.vue";
import ShareTweetForm from "@/components/views/feed/components/ShareTweetForm.vue";
import Tweet from "@/components/UI/Tweet.vue";
import {useTweetStore} from "@/stores/tweets";
import type {ITweet} from "@/stores/interfaces/ITweet";
import {RouteParamValue, useRoute} from "vue-router";
import {format} from "date-fns";
import {tr} from "date-fns/locale";
import TurnBackIcon from "@/components/icons/TurnBackIcon.vue";


const isDropOpen = ref<boolean>()
const route = useRoute()
const tweetId = ref<number|Array<RouteParamValue>|string>(route.params.id)
const transactionArr = ref<Array<{icon:any, title:string}>>([
    {
        icon: SadFace,
        title: 'Bu tweet ilgimi çekmiyor'
    },
    {
        icon: FollowIcon,
        title: '@vuejs adlı kullanıcıyı takip et'
    },
    {
        icon: AddListIcon,
        title: '@js adlı kişiyi listelere ekle / listelerden kaldır'
    },
    {
        icon: MuteIcon,
        title: '@angularjs adlı kullanıcıyı sustur'
    },
    {
        icon: BlockItem,
        title: '@jquery adlı kullanıcıyı engelle'
    },
    {
        icon: TagItem,
        title: 'Tweeti katıştır'
    },
    {
        icon: FlagItem,
        title: 'Tweeti bildir'
    }
])
const store = useTweetStore()
const loading = ref<boolean>(true)
const mainTweet = ref<ITweet>()
onMounted(async () => {
    if (store.getTweets === null) {
        loading.value = true
        await store.fetchTweets()
        mainTweet.value = store.getTweets.find((item:ITweet) => item.id == tweetId.value)
        loading.value = false
    } else {
        loading.value = false
        // Burda gereksiz request atmamak için spesifik tweeti store'da tuttuğumuz tweetler içinden filtreledim. Backend senaryosuna bağlı olarak /tweets/:id gibi bir endpointe istek atılıpta çekilebilir
        mainTweet.value = store.getTweets.find((item:ITweet) => item.id == tweetId.value)
    }
    console.log(mainTweet.value)
})

const getDayPart = (start) => {
    const date = new Date(start)
    const hour = parseInt(format(date, 'kk'))
    return  hour < 12 ? 'ÖÖ' : 'ÖS'
}
</script>

<template>
    <div v-if="!loading" class="tweet-detail-wrapper">
        <div class="turn-back-wrapper px-4">
            <router-link to="/" class="p-2 hover:bg-white hover:bg-opacity-20 rounded-full cursor-pointer">
                <TurnBackIcon :size="20"/>
            </router-link>
            <h2>Tweet</h2>
        </div>
        <div class="main-tweet px-4 flex-col">
            <div class="tweet">
                <div class="tweet-owner-info mb-2">
                    <ProfilePhoto :size="40" :source="mainTweet.user.avatar" />
                    <div class="flex flex-col">
                        <span class="name">{{ mainTweet.user.full_name }}</span>
                        <span class="nickname">{{mainTweet.user.user_name}}</span>
                    </div>
                    <div class="relative ml-auto transactions-wrapper" ref="dropdown">
                        <div class="svg-wrapper" @click="isDropOpen=true">
                            <three-dot :size="18" color="#71767B"/>
                        </div>
                        <div class="tweet-transactions"  :class="isDropOpen ? 'open': ''">
                            <ul class="transactions">
                                <li v-for="(item, index) in transactionArr" class="transaction">
                                    <div class="svg-wrapper">
                                        <component :is="item.icon" :size="17"></component>
                                    </div>
                                    <span class="text-white font-semibold">{{item.title}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p>{{mainTweet.tweet}}</p>
                <div v-if="mainTweet.media" class="tweet-image">
                    <img src="/src/assets/image/legolas.JPG" alt="">
                </div>
                <div class="footer">
                    <div class="tweet-infos">
                        <span>
                            {{ getDayPart(mainTweet.created_at) }} {{format(new Date(mainTweet.created_at), 'kk:mm')}}
                        </span>
                        <span>{{format(new Date(mainTweet.created_at), 'dd MMM yyyy', {locale: tr})}}</span>
                        <span> <span class="display-count">12.4B</span> görüntülenme</span>
                    </div>
                    <div class="tweet-stats">
                        <span>
                            <span class="count">{{mainTweet.retweet}}</span>
                            Retweet
                        </span>
                        <span>
                            <span class="count">{{mainTweet.retweet}}</span>
                            Alıntılar
                        </span>
                        <span>
                            <span class="count">{{mainTweet.fav}}</span>
                            Beğeni
                        </span>
                        <span>
                            <span class="count">3</span>
                            Yer İşareti
                        </span>
                    </div>
                    <div class="actions">
                        <div class="comment">
                            <CommentIcon :size="23" color="#71767B"/>
                        </div>
                        <div class="retweet">
                            <ReTweetIcon :size="23" color="#71767B"/>
                        </div>
                        <div class="like">
                            <HeartIcon :size="23" color="#71767B"/>
                        </div>
                        <div class="stats">
                            <StatisticsIcon :size="23" color="#71767B"/>
                        </div>
                        <div class="stats">
                            <SendIcon :size="23" color="#71767B"/>
                        </div>
                    </div>
                    <ShareTweetForm :is-in-comment="true"/>
                </div>
            </div>
        </div>
        <div v-if="mainTweet.comments" class="comments w-full">
            <Tweet v-for="(tweet, index) in mainTweet.comments"
                   :id="tweet.id"
                   :comments="tweet.comment_tweets"
                   :retweet="tweet.retweet"
                   :fav="tweet.fav"
                   :comment="tweet.comment"
                   :tweet="tweet.tweet"
                   :media="tweet.media"
                   :user="tweet.user"
                   :created_at="tweet.created_at"
                   :key="index"
            >
                <template v-slot:tweet>{{tweet.tweet}}</template>
            </Tweet>
        </div>
    </div>
</template>

<style scoped>

</style>