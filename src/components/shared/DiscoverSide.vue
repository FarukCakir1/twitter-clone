<script setup lang="ts">
import InputEl from "@/components/UI/InputEl.vue";
import DiscoverSideBox from "@/components/UI/DiscoverSideBox.vue";
import ButtonEl from "@/components/UI/ButtonEl.vue";
import ThreeDot from "@/components/icons/ThreeDot.vue";
import ProfilePhoto from "@/components/UI/ProfilePhoto.vue";
import {ref} from "vue";

const footerItems = ref<Array<string>>([
    'Hizmet Şartları',
    'Gizlilik Politikası',
    'Çerez Politikası',
    'Imprint',
    'Erişilebilirlik',
    'Reaklam bilgisi',
    'Daha fazla....'

])
</script>
<template>
    <div class="discover-side-wrapper">
        <div class="search-wrapper pb-5 pt-2 bg-black">
            <InputEl placeholder="Twitter'da ara"/>
        </div>
        <discover-side-box title="Onaylanmış Hesap Sahibi Ol">
            <template v-slot:body>
                <p class="get-approved-message">
                    Yeni özelliklerden yararlanmak için abone <br /> ol.
                </p>
            </template>
            <template v-slot:footer>
                <ButtonEl text="Onaylanmış Hesap Sahibi Ol" type="blue" :height="36" />
            </template>
        </discover-side-box>
        <discover-side-box title="İlgini Çekebilecek Gündemler">
            <template v-slot:body>
                <ul class="today-agendas">
                    <li v-for="i in 10" :key="i" class="agenda-wrapper">
                        <router-link to="/" class="agenda">
                            <div class="agenda-infos">
                                <span class="category-or-location">
                                    Türkiye tarihinde gündemde
                                </span>
                                <span class="agenda-title">
                                    StartupCentrum
                                </span>
                                <span class="tweet-count">
                                    5.356 tweet
                                </span>
                            </div>
                            <ThreeDot :size="18" color="#71767B"/>
                        </router-link>
                    </li>
                </ul>
            </template>
        </discover-side-box>
        <discover-side-box title="Kimi Takip Etmeli" >
            <template v-slot:body>
                <ul class="follow-suggests">
                    <li v-for="i in 4" class="suggest-wrapper">
                        <router-link to="/" class="suggestion">
                            <div class="suggestion-infos">
                                <profile-photo :size="40" source="/src/assets/image/avatar.png" />
                                <div class="user-info">
                                    <span class="name">StartupCentrum</span>
                                    <span class="nickname">@startupcentrum</span>
                                </div>
                            </div>
                            <button-el text="Takip et" type="white" height="36" />
                        </router-link>
                    </li>
                </ul>
            </template>
        </discover-side-box>
        <div class="flex flex-wrap gap-3 mb-20">
            <span class="text-[#71767B] text-[12px] shrink-0" v-for="item in footerItems">
                {{item}}
            </span>
        </div>
    </div>
</template>


<style scoped>

</style>