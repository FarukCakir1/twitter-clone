<script setup lang="ts">

import DownArrow from "@/components/icons/DownArrow.vue";
import WorldIcon from "@/components/icons/WorldIcon.vue";
import {onBeforeUnmount, onMounted, ref} from "vue";
import AddPhotoIcon from "@/components/icons/AddPhotoIcon.vue";
import AddGifIcon from "@/components/icons/AddGifIcon.vue";
import QuestionnaireIcon from "@/components/icons/QuestionnaireIcon.vue";
import AddEmojiIcon from "@/components/icons/AddEmojiIcon.vue";
import CalendarIcon from "@/components/icons/CalendarIcon.vue";
import LocationMarkIcon from "@/components/icons/LocationMarkIcon.vue";
import ButtonEl from "@/components/UI/ButtonEl.vue";
import {detectOutsideClick} from "@/helpers/detectOutsideClick";
import ProfileIcon from "@/components/icons/ProfileIcon.vue";

const textarea = ref<HTMLTextAreaElement>()
const visible = ref<boolean>(false)
const targetDrop = ref<HTMLDivElement>()
const isDropOpen = ref<boolean>(false)
const tweet = ref<string>("");
const props = defineProps<{
    isInComment?: boolean
}>()

const emit = defineEmits(['shareTweet'])
const adjustTextAreaheight = () => {
    textarea.value.style.height = 'auto'
    textarea.value.style.height = `${textarea.value?.scrollHeight}px`

}
const emitShare = () => {
    emit('shareTweet', tweet.value)
    tweet.value = ""
}
detectOutsideClick(targetDrop, () => {
    isDropOpen.value = false
})
</script>

<template>
    <div class="share-tweet-form" :class="isInComment ? 'for-comment' : ''">
        <div class="img-wrapper">
            <img src="/src/assets/image/avatar.png" alt="">
        </div>
        <div class="form-side">
            <div v-if="visible" class="target" ref="targetDrop">
                <div class="w-full h-full flex gap-3" @click="isDropOpen=true">
                    <span>Herkes</span>
                    <DownArrow :is-active="false" :size="16" color="#1D9BF0"/>
                </div>
                <div class="target-drop" :class="isDropOpen ? 'open' : ''">
                    <h2 class="text-[20px] font-semibold flex">Hedef Kitle Seç</h2>
                    <div class="flex w-full gap-5 items-center text-white">
                        <div class="svg-wrapper w-10 h-10 rounded-full flex items-center justify-center bg-tw-blue">
                            <WorldIcon :size="20" />
                        </div>
                        <span class="text-[15px] font-semibold">Herkes</span>
                    </div>
                    <div class="flex w-full gap-5 items-center text-white">
                        <div class="svg-wrapper w-10 h-10 rounded-full flex items-center justify-center bg-[#00BA7C]">
                            <ProfileIcon :is-active="true" :size="20" />
                        </div>
                        <div class="flex flex-col">
                            <span class="text-[15px] font-semibold">Twitter Çevresi</span>
                            <div class="flex gap-2">
                                <span class="text-[13px] text-[#71767B]">
                                    4 kişi
                                </span>
                                <span class="text-white underline font-semibold text-[15px] cursor-pointer">Düzenle</span>
                            </div>
                        </div>
                    </div>
                    <h4 class="text-[16px] font-medium text-white">Topluluklarım</h4>
                    <div class="flex gap-5 ">
                        <div class="w-10 h-10 rounded-md overflow-hidden">
                            <img src="/src/assets/image/avatar.png" alt="" class="max-w-full max-h-full">
                        </div>
                        <div class="flex flex-col">
                            <span class="text-[15px] text-white font-semibold">VueSchool</span>
                            <div class="flex gap-2">
                                <span class="text-[13px] text-[#71767B]">
                                    400 üye
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <textarea @focus="visible = true" @input="adjustTextAreaheight" v-model="tweet" placeholder="Neler Oluyor ?" ref="textarea" rows="1"/>
            <div v-if="visible" class="responsiblity-selection">
                <WorldIcon :is-active="false" :size="16" color="#1D9BF0" />
                <span>Herkes Yanıtlayabilir</span>
            </div>
            <div class="actions">
                <div class="action-buttons">
                    <AddPhotoIcon :size="20" color="#1D9BF0"/>
                    <AddGifIcon :size="20" color="#1D9BF0"/>
                    <QuestionnaireIcon :size="20" color="#1D9BF0"/>
                    <AddEmojiIcon :size="20" color="#1D9BF0"/>
                    <CalendarIcon :size="20" color="#1D9BF0"/>
                    <LocationMarkIcon :size="20" color="#1D9BF0"/>
                </div>
                <ButtonEl :text="!props.isInComment ? 'Tweetle' : 'Yanıtla'" type="blue" :height="36" @click="emitShare"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>