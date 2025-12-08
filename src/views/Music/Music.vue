<template>
    <div class="border-b pl-3 flex items-center">
        <SidebarTrigger class="cursor-pointer " />
        <Menubar class="border-none shadow-none">
            <MenubarMenu>
                <MenubarTrigger class="font-semibold">Music</MenubarTrigger>
                <MenubarContent class="bg-white">
                    <MenubarItem>About Music</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Preferences...<MenubarShortcut>⌘,</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Hide Music...<MenubarShortcut>⌘H</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>Hide Others...<MenubarShortcut>⇧⌘H</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>Quit Music...<MenubarShortcut>⌘Q</MenubarShortcut>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger class="font-normal">File</MenubarTrigger>
                <MenubarContent class="bg-white">
                    <MenubarSub>
                        <MenubarSubTrigger>New</MenubarSubTrigger>
                        <MenubarSubContent class="bg-white">
                            <MenubarItem>Playlist<MenubarShortcut>⌘N</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem class="text-gray-500">Playlist from Selection<MenubarShortcut>⇧⌘N
                                </MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>Smart Playlist<MenubarShortcut>⌥⌘N</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>Playlist Folder</MenubarItem>
                            <MenubarItem class="text-gray-500">Genius Playlist</MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>Open Stream URL... <MenubarShortcut>⌘U</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>Close Windown... <MenubarShortcut>⌘W</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                        <MenubarSubTrigger>Library</MenubarSubTrigger>
                        <MenubarSubContent class="bg-white">
                            <MenubarItem>Update Cloud Library</MenubarItem>
                            <MenubarItem>Update Genius</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Organize Library</MenubarItem>
                            <MenubarItem class="text-gray-500">Export Library</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Import Playlist</MenubarItem>
                            <MenubarItem>Export Playlist</MenubarItem>
                            <MenubarItem>Show Duplicate Items</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Get Album Artwork</MenubarItem>
                            <MenubarItem class="text-gray-500">Get Track Names</MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>

                    <MenubarItem>Import<MenubarShortcut>⌘O</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem class="text-gray-500">Burn Playlist to Disc</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Show in Finder<MenubarShortcut>⇧⌘P</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>Convert</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Page Setup...</MenubarItem>
                    <MenubarItem class="text-gray-500">Print...<MenubarShortcut>⌘P</MenubarShortcut>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger class="font-normal">Edit</MenubarTrigger>
                <MenubarContent class="bg-white">
                    <MenubarItem class="text-gray-500">Undo<MenubarShortcut>⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem class="text-gray-500">Redo<MenubarShortcut>⇧⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem class="text-gray-500">Cut<MenubarShortcut>⌘X</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem class="text-gray-500">Copy<MenubarShortcut>⌘C</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem class="text-gray-500">Paste<MenubarShortcut>⌘V</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Select All<MenubarShortcut>⌘A</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem class="text-gray-500">Deselect All<MenubarShortcut>⇧⌘A</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Smart Dictation</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Emoji & Symbols </MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger class="font-normal">View</MenubarTrigger>
                <MenubarContent class="bg-white">
                    <MenubarCheckboxItem>Show Playing Next</MenubarCheckboxItem>
                    <MenubarCheckboxItem :model-value="true">Show Lyrics</MenubarCheckboxItem>
                    <MenubarSeparator />
                    <MenubarCheckboxItem class="text-gray-500">Show Status Bar </MenubarCheckboxItem>
                    <MenubarSeparator />
                    <MenubarCheckboxItem>Hide Sidebar </MenubarCheckboxItem>
                    <MenubarCheckboxItem class="text-gray-500">Enter Full Screen </MenubarCheckboxItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger class="font-normal">Account</MenubarTrigger>
                <MenubarContent class="bg-white">
                    <MenubarItem inset>Switch Account</MenubarItem>
                    <MenubarSeparator />
                    <MenubarRadioGroup model-value="Andy">
                        <MenubarRadioItem value="Andy">Andy</MenubarRadioItem>
                        <MenubarRadioItem value="Benoit">Benoit</MenubarRadioItem>
                        <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                    </MenubarRadioGroup>
                    <MenubarSeparator />
                    <MenubarItem inset>Manage Family</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Add Account</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    </div>
    <div class="flex h-fit">
        <div class="border-r xl:flex flex-col gap-0 w-65" :class="Visible ? 'flex' : 'hidden'">
            <SidebarProvider class="h-full">
                <SidebarContent class="gap-0 pl-1">
                    <SidebarGroup>
                        <SidebarHeader class="font-medium">Discover</SidebarHeader>
                        <SidebarMenu>
                            <SidebarMenuItem v-for="item in navDiscover" :key="item.name">
                                <SidebarMenuButton :is-active="bg">
                                    <component :is="item.icon" />
                                    <span>{{ item.label }}</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroup>
                    <SidebarGroup>
                        <SidebarHeader class="font-medium">Library</SidebarHeader>
                        <SidebarMenu>
                            <SidebarMenuItem v-for="item in navLibrary" :key="item.name">
                                <SidebarMenuButton>
                                    <component :is="item.icon" />
                                    <span>{{ item.label }}</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroup>
                    <SidebarGroup>
                        <SidebarHeader class="font-medium">Playlists</SidebarHeader>
                        <SidebarMenu>
                            <SidebarMenuItem v-for="item in navPlaylists" :key="item.name">
                                <SidebarMenuButton>
                                    <component :is="item.icon" />
                                    <span>{{ item.label }}</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>
            </SidebarProvider>
        </div>
        <div class="flex flex-col w-full">
            <div class="flex justify-between pt-8 px-6">
                <div class="flex items-center space-x-4">
                    <TextAlignJustify class="cursor-pointer stroke-black/60" @click="sidebarVisible" />
                    <div class="bg-gray-100 rounded-lg p-1 flex box-border">
                        <RouterLink :to="item.url" class="bg-gray-100 flex items-center cursor-pointer text-sm px-1"
                            v-for="item in musicItems" :key="item.name">
                            <span class="p-1 rounded-lg text-gray-800" :class="MusicSub(item.url)">{{ item.name
                                }}</span>
                        </RouterLink>
                    </div>
                </div>
                <Button>
                    Add music
                </Button>
            </div>
            <div class="px-6">
                <RouterView></RouterView>
            </div>
        </div>
    </div>


</template>
<script setup>
import { SidebarProvider, Sidebar, SidebarHeader, SidebarGroup, SidebarContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarGroupLabel } from '@/components/ui/sidebar';
import listen from '@/assets/Music/Nav/listen.svg';
import browse from '@/assets/Music/Nav/browse.svg';
import radio from '@/assets/Music/Nav/radio.svg';
import Playlists from '@/assets/Music/Nav/Playlists.svg';
import songs from '@/assets/Music/Nav/songs.svg';
import made from '@/assets/Music/Nav/made.svg';
import artists from '@/assets/Music/Nav/artists.svg';
import albums from '@/assets/Music/Nav/albums.svg';
import allPlaylists from '@/assets/Music/Nav/allPlaylists.svg';
import { TextAlignJustify } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { ref } from 'vue'
import { useRoute } from 'vue-router';


import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarShortcut, MenubarSeparator } from '@/components/ui/menubar';
import { MenubarSub, MenubarSubTrigger, MenubarSubContent, MenubarCheckboxItem, MenubarRadioGroup, MenubarRadioItem } from '@/components/ui/menubar';
import { SidebarTrigger } from '@/components/ui/sidebar'

const Visible = ref(false)
const sidebarVisible = () => {
    Visible.value = !Visible.value
}

const route = useRoute()
const MusicSub = (url) => {
    if (url === '#') {
        return 'text-gray-100'
    }
    return {
        'bg-white text-black': url === route.path
    }
}

let musicItems = [
    { name: 'Music', url: "/Music/SubMusic" },
    { name: 'Podcasts', url: "/Music/SubPodcasts" },
    { name: 'Live', url: "#" }
]

let navDiscover = ref([
    { label: 'Listen Now', icon: listen, bg: true },
    { label: 'Browse', icon: browse },
    { label: 'Radio', icon: radio },
])

let navLibrary = ref([
    { label: 'Playlists', icon: Playlists },
    { label: 'Songs', icon: songs },
    { label: 'Made for You', icon: made },
    { label: 'Artists', icon: artists },
    { label: 'Albums', icon: albums }
])

let navPlaylists = ref([
    { label: 'Recently Added', icon: allPlaylists },
    { label: 'Recently Played', icon: allPlaylists },
    { label: 'Top Songs', icon: allPlaylists },
    { label: 'Top Albums', icon: allPlaylists },
    { label: 'Top Artists', icon: allPlaylists },
    { label: 'Logic Discography', icon: allPlaylists },
    { label: 'Bedtime Beats', icon: allPlaylists },
])
</script>