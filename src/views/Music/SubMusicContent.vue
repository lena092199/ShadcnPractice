<script setup lang="ts">

interface ContentItem {
    music: string,
    author: string,
    icon: string,
    h: string,
    w: string,
}

interface Props {
    title: string,
    desc: string,
    items: ContentItem[]
}
defineProps<Props>();
</script>

<template>
    <div class="pt-6">
        <h2 class="font-semibold text-2xl">{{ title }}</h2>
        <p class="text-zinc-500 pt-1 text-sm">{{ desc }}</p>
        <div class="border-b my-4 border-gray-300"></div>
        <div class="flex overflow-auto">
            <div v-for="(item, index) in items" :key="index" class="pr-4 shrink-0">
                <div class="rounded-lg overflow-hidden">
                    <img :src="item.icon" alt="MusicIcon"
                        :class="`rounded-lg cursor-pointer hover:scale-105 overflow-hidden  ${item.w} ${item.h}`">
                </div>

                <div class="pt-2">{{ item.music }}</div>
                <div class="text-xs text-zinc-400 pb-2">{{ item.author }}</div>
            </div>
        </div>
    </div>
</template>