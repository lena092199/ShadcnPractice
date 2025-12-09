<template>
    <div class="flex pt-4 @container">
        <div class="w-full @sm:flex">
            <div class="w-full">
                <div class="flex w-full">
                    <SidebarTrigger class="ml-4 mr-2"></SidebarTrigger>
                    <div>
                        <h1 class="font-semibold text-xl">Welcome back!</h1>
                        <p class="text-muted-foreground">Here's a list of your tasks for this month!</p>
                    </div>
                    <div class="ml-auto mr-6">
                        <Popover>
                            <PopoverTrigger>
                                <Avatar class="flex cursor-pointer">
                                    <AvatarImage src="https://www.shadcn-vue.com/avatars/03.png"></AvatarImage>
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent class="w-60" align="end">
                                <p class="text-sm">shadcn</p>
                                <p class="text-muted-foreground text-xs">m@example.com</p>
                                <Separator class="my-2"></Separator>
                                <div class="space-y-2">
                                    <div class="flex justify-between items-center">
                                        <span class="text-sm">Prority</span>
                                        <span class="text-sm text-muted-foreground">⇧⌘P</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-sm">Billing</span>
                                        <span class="text-sm text-muted-foreground">⌘B</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-sm">Settings</span>
                                        <span class="text-sm text-muted-foreground">⌘B</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-sm">New Team</span>
                                        <span class="text-sm text-muted-foreground">⌘S</span>
                                    </div>
                                </div>
                                <Separator class="my-2"></Separator>
                                <div class="flex justify-between">
                                    <span class="text-sm">Log out</span>
                                    <span class="text-sm text-muted-foreground">⇧⌘Q</span>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <DataDataTable></DataDataTable>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import DataDataTable from './DataDataTable.vue';
</script>
