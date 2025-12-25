<template>
    <SubMusicContent title="Listen Now" desc="Top picksfor you.Updated daily" :items="[
        { icon: musicIcon1, music: 'React Rendezvous', author: 'Ethan Byte', w: 'w-[250px]', h: 'h-[330px]' },
        { icon: musicIcon2, music: 'Async Awakenings', author: 'Nina Netcode', w: 'w-[250px]', h: 'h-[330px]' },
        { icon: musicIcon3, music: 'The Art of Reusability', author: 'Lena Logic', w: 'w-[250px]', h: 'h-[330px]' },
        { icon: musicIcon4, music: 'Stateful Symphony', author: 'Beth Binary', w: 'w-[250px]', h: 'h-[330px]' },
    ]" />
    <SubMusicContent title="Made for You" desc="Your personal playlists.Updated daily." :items="[
        { icon: musicIcon5, music: 'Thinking Components', author: 'Beth Binary', w: 'w-[150px]', h: 'h-[150px]' },
        { icon: musicIcon6, music: 'Functional Fury', author: 'Nina Netcode', w: 'w-[150px]', h: 'h-[150px]' },
        { icon: musicIcon1, music: 'React Rendezvous', author: 'Ethan Byte', w: 'w-[150px]', h: 'h-[150px]' },
        { icon: musicIcon7, music: 'Stateful Symphony', author: 'Beth Binary', w: 'w-[150px]', h: 'h-[150px]' },
        { icon: musicIcon2, music: 'Async Awakenings', author: 'Nina Netcode', w: 'w-[150px]', h: 'h-[150px]' },
        { icon: musicIcon4, music: 'The Art of Reusability', author: 'Lena Logic', w: 'min-w-[150px]', h: 'h-[150px]' },
    ]" />
</template>
<script setup>
import SubMusicContent from './SubMusicContent.vue';
import musicIcon1 from '@/assets/music/musicIcon1.png';
import musicIcon2 from '@/assets/music/musicIcon2.jpg';
import musicIcon3 from '@/assets/music/musicIcon3.jpg';
import musicIcon4 from '@/assets/music/musicIcon4.jpg';
import musicIcon5 from '@/assets/music/musicIcon5.jpg';
import musicIcon6 from '@/assets/music/musicIcon6.jpg';
import musicIcon7 from '@/assets/music/musicIcon7.jpg';
</script>