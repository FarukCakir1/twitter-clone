<script setup lang="ts">

import ProfilePhoto from "@/components/UI/ProfilePhoto.vue";
import ThreeDot from "@/components/icons/ThreeDot.vue";
import CommentIcon from "@/components/icons/CommentIcon.vue";
import ReTweetIcon from "@/components/icons/ReTweetIcon.vue";
import HeartIcon from "@/components/icons/HeartIcon.vue";
import StatisticsIcon from "@/components/icons/StatisticsIcon.vue";
import SendIcon from "@/components/icons/SendIcon.vue";
import {ref} from "vue";
import SadFace from "@/components/icons/SadFace.vue";
import FollowIcon from "@/components/icons/FollowIcon.vue";
import AddListIcon from "@/components/icons/AddListIcon.vue";
import MuteIcon from "@/components/icons/MuteIcon.vue";
import BlockItem from "@/components/icons/BlockItem.vue";
import TagItem from "@/components/icons/TagItem.vue";
import FlagItem from "@/components/icons/FlagItem.vue";
import {detectOutsideClick} from "@/helpers/detectOutsideClick";
import type {ITweet} from "@/stores/interfaces/ITweet";
import {useRoute} from "vue-router";
import NestedTweet from "@/components/UI/NestedTweet.vue";
import { format } from "date-fns"
import _ from 'lodash'

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
const isDropOpen = ref<boolean>(false)
const dropdown = ref<HTMLDivElement>();
const route = useRoute()
const today = ref<Date>(new Date())
const isComment = ref<boolean>(route.name === 'tweet-detail')
detectOutsideClick(dropdown, () => {
    isDropOpen.value = false
})
const props = defineProps<ITweet>()
const formatTimeDiffrence = (start: Date) => {
    if (getTimeDifference(start) < 60) {
        if (getTimeDifference(start) <= 0) {
            return 1 + 'd'
        } else {
            return getTimeDifference(start) + 'd'
        }
    } else if(getTimeDifference(start) >= 60) {
        return Math.floor(getTimeDifference(start) / 60) + 's'
    } else if (getTimeDifference(start) > 1440) {
        return Math.floor(getTimeDifference(start) / 60 / 24) + 'g'
    } else {
        return ''
    }
}
const getTimeDifference = (start:Date) => {
    const date = new Date(start)
    const localDate = new Date(date.getTime() - (date.getTimezoneOffset()));
    const diffInMinutes = Math.floor((today.value - localDate) / (1000 * 60));
    return Math.abs(Math.floor(diffInMinutes))
}

</script>

<template>
    <router-link :to="`/tweet/${id}`" class="tweet-wrapper" :class="[isComment ? 'for-comment' : '', comments ? 'flex-col' : '']">
        <div class="flex relative">
            <ProfilePhoto :size="40" :source="user.avatar" />
            <div v-if="comments" class="connector"></div>
            <div class="tweet">
                <div class="tweet-owner-info">
                    <span class="name">{{user.full_name}}</span>
                    <span class="nickname">{{user.user_name}}</span>
                    <span class="time">
                        {{formatTimeDiffrence(created_at)}}
                    </span>
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
                <slot name="tweet"></slot>
                <div v-if="media" class="tweet-image">
                    <img src="/src/assets/image/legolas.JPG" alt="">
                </div>
                <div class="actions">
                    <div class="comment">
                        <CommentIcon :size="19" color="#71767B"/>
                        <span class="text-[#71767B] text-[13px]">{{ comment }}</span>
                    </div>
                    <div class="retweet">
                        <ReTweetIcon :size="19" color="#71767B"/>
                        <span class="text-[#71767B] text-[13px]">{{retweet}}</span>
                    </div>
                    <div class="like">
                        <HeartIcon :size="19" color="#71767B"/>
                        <span class="text-[#71767B] text-[13px]">{{fav}}</span>
                    </div>
                    <div class="stats">
                        <StatisticsIcon :size="19" color="#71767B"/>
                        <span class="text-[#71767B] text-[13px]">17</span>
                    </div>
                    <div class="stats">
                        <SendIcon :size="19" color="#71767B"/>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isComment && comments" class="comments">
            <nested-tweet
                    class="px-0 border-0 mt-3"
                    :id="comments ? comments[0].id : null"
                    :retweet="comments ? comments[0].retweet : null"
                    :fav="comments ? comments[0].fav : null"
                    :comment="comments ? comments[0].comment : null"
                    :tweet="comments ? comments[0].tweet : null"
                    :media="comments ? comments[0].media : null"
                    :user="comments ? comments[0].user : null"
            >
                <template v-slot:tweet>
                    {{comments[0].tweet}}
                </template>
            </nested-tweet>
        </div>
    </router-link>
</template>

<style scoped>

</style>