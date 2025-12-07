<template>
    <SubMusicContent title="Listen Now" desc="Top picksfor you.Updated daily" :items="[
        { icon: musicIcon1, music: 'React Rendezvous', author: 'Ethan Byte', w: 'w-[250px]', h: 'h-[330px]' },
        { icon: musicIcon2, music: 'Async Awakenings', author: 'Nina Netcode', w: 'w-[250px]', h: 'h-[330px]' },
        { icon: musicIcon3, music: 'The Art of Reusability', author: 'Lena Logic', w: 'w-[250px]', h: 'h-[330px]' },
        { icon: musicIcon4, music: 'Stateful Symphony', author: 'Beth Binary', w: 'w-[250px]', h: 'h-[330px]' },
    ]" />
    <SubMusicContent title="Made for You" desc="Your personal playlists.Updated daily." :items="[
        { icon: musicIcon5, music: 'Thinking Components', author: 'Beth Binary', w: 'w-[200px]', h: 'h-[200px]' },
        { icon: musicIcon6, music: 'Functional Fury', author: 'Nina Netcode', w: 'w-[200px]', h: 'h-[200px]' },
        { icon: musicIcon1, music: 'React Rendezvous', author: 'Ethan Byte', w: 'w-[200px]', h: 'h-[200px]' },
        { icon: musicIcon7, music: 'Stateful Symphony', author: 'Beth Binary', w: 'w-[200px]', h: 'h-[200px]' },
        { icon: musicIcon2, music: 'Async Awakenings', author: 'Nina Netcode', w: 'w-[200px]', h: 'h-[200px]' },
        { icon: musicIcon4, music: 'The Art of Reusability', author: 'Lena Logic', w: 'min-w-[200px]', maxW: 'max-w-[200px]', h: 'h-[200px]' },
    ]" />
</template>
<script setup>
import SubMusicContent from './SubMusicContent.vue';
import musicIcon1 from '@/assets/Music/musicIcon1.png';
import musicIcon2 from '@/assets/Music/musicIcon2.jpg';
import musicIcon3 from '@/assets/Music/musicIcon3.jpg';
import musicIcon4 from '@/assets/Music/musicIcon4.jpg';
import musicIcon5 from '@/assets/Music/musicIcon5.jpg';
import musicIcon6 from '@/assets/Music/musicIcon6.jpg';
import musicIcon7 from '@/assets/Music/musicIcon7.jpg';
</script>