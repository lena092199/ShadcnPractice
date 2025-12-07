<template>
    <div class="pt-6 h-full">
        <h2 class="font-semibold text-2xl">New Episodes</h2>
        <p class="text-zinc-500 pt-1 text-sm">your favorite podcasts.Updated daily.</p>
        <div class="border-b my-4 border-gray-300"></div>
        <div class="pt-2 mb-5 border-dashed border rounded-lg border-gray-300 h-full">
            <div class="flex flex-col h-full items-center justify-center gap-3">
                <!-- <img src="D:\jifang\5demo\demo-Vue3\vue-shadcn\public\icons\icon.svg" alt="Podcasts"
                    class="w-10 stroke-1 stroke-red-100 fill-red"> -->
                <svg data-v-16ede74f="" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="1.5" class="h-w-1 color-u" viewBox="0 0 24 24"
                    :class="'w-10 stroke-zinc-500'">
                    <circle data-v-16ede74f="" cx="12" cy="11" r="1"></circle>
                    <path data-v-16ede74f=""
                        d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5ZM8 14a5 5 0 1 1 8 0">
                    </path>
                    <path data-v-16ede74f="" d="M17 18.5a9 9 0 1 0-10 0"></path>
                </svg>
                <h3 class="text-lg font-semibold">No episodes addad</h3>
                <p class="text-zinc-500 text-sm">You have not added any podcasts.Add one below</p>
                <Dialog>
                    <form>
                        <DialogTrigger as-child>
                            <Button class="cursor-pointer bg-black text-white">Add Podcasts</Button>
                        </DialogTrigger>
                        <DialogContent class="bg-white">
                            <DialogHeader>
                                <DialogTitle>Add Podcasts</DialogTitle>
                                <DialogDescription class="text-zinc-500">Copy and paste the podcast feed URL to import.
                                </DialogDescription>
                            </DialogHeader>
                            <div class="grid gap-4">
                                <Label>Podcast URL</Label>
                                <Input placeholder="https://example.com/feed.xml"></Input>
                            </div>
                            <DialogFooter>
                                <Button class="bg-black text-white cursor-pointer">Import Podcast</Button>
                            </DialogFooter>
                        </DialogContent>
                    </form>
                </Dialog>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Button from '@/components/ui/button/Button.vue';
import Input from '@/components/ui/input/Input.vue';
import Label from '@/components/ui/label/Label.vue';
</script>