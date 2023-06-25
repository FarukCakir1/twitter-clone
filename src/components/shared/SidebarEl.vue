<script setup lang="ts">
    import type {Component} from "vue";;
    import type {MenuItemsInterface} from "@/stores/interfaces/MenuItemsInterface";
    import TwitterBird from "@/components/icons/TwitterBird.vue";
    import ButtonEl from "@/components/UI/ButtonEl.vue";
    import ThreeDot from "@/components/icons/ThreeDot.vue";
    import ProfilePhoto from "@/components/UI/ProfilePhoto.vue";
    // If we wanted to use this component in more than one layout with different options, we would need such an array (menuItems). This may not be a requirement for this scenario.
    const props = defineProps<{
        menuItems: Array<MenuItemsInterface>
    }>()
</script>
<template>
    <div class="sidebar-container">
        <div class="logo ml-2 laptop:ml-0 pl-3">
            <TwitterBird :is-active="true" :size="30" color="#D6D9DB"/>
        </div>
        <div class="routes">
            <ul class="routes-list">
                <li v-for="(item, index) in menuItems">
                    <router-link class="single-route" :to="item.route">
                        <div class="icon-wrapper">
                            <component :is="item.icon" :size="27" :isActive="false"/>
                        </div>
                        <span class="route-title">{{item.title}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="px-2 laptop:px-3">
            <ButtonEl :icon="true" text="Tweetle" type="blue" height="50" />
        </div>
        <div class="profile-detail">
            <ProfilePhoto :size="40" source="/src/assets/image/avatar.png" />
            <div class="account-infos">
                <span class="name">C'mon Fellas</span>
                <span class="username">@devdev</span>
            </div>
            <div class="svg-wrapper">
                <ThreeDot :size="17" :is-active="false" />
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>