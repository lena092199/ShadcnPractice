<template>
    <SidebarTrigger class="mr-3" />
    <!--下拉框-->
    <Popover v-model:open="open">
        <PopoverTrigger>
            <Button variant="outline" role="combobox" class="space-x-2 justify-between">
                <Avatar class="w-4 h-4">
                    <AvatarImage :src="src"></AvatarImage>
                </Avatar>
                <span>{{ selectedItem ? selectedItem.label : 'Alicia Koch' }}</span>
                <ChevronsUpDownIcon class=" opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent class="w-[200px] p-0">
            <Command>
                <CommandInput placeholder="Search Team..."></CommandInput>
                <CommandList>
                    <CommandEmpty>No Team</CommandEmpty>
                    <CommandGroup heading="Personal Account">
                        <CommandItem v-for="item in personalAccounts" :key="item.value" :value="item.value"
                            :class="{ 'bg-accent': item.value === selectedItem.value }"
                            @select="selectedItem = item, open = false, src = item.src">
                            <Avatar class="w-4 h-4">
                                <AvatarImage :src="item.src"></AvatarImage>
                            </Avatar>
                            {{ item.label }}
                            <CheckIcon class="ml-auto"
                                :class="item.value === selectedItem.value ? 'opacity-100' : 'opacity-0'" />
                        </CommandItem>
                    </CommandGroup>
                    <CommandGroup heading="Teams">
                        <CommandItem v-for="item in teams" :key="item.value" :value="item.value"
                            :class="{ 'bg-accent': item.value === selectedItem.value }"
                            @select="selectedItem = item, open = false, src = item.src">
                            <Avatar class="w-4 h-4">
                                <AvatarImage :src="item.src"></AvatarImage>
                            </Avatar>
                            {{ item.label }}
                            <CheckIcon class=" ml-auto"
                                :class="item.value === selectedItem.value ? 'opacity-100' : 'opacity-0'" />
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator></CommandSeparator>
                    <CommandGroup>
                        <CommandItem value="Monsters Inc" @select="open = false, isCreateTeamDialogOpen = true">
                            <CirclePlus />
                            Create Team
                        </CommandItem>

                    </CommandGroup>

                </CommandList>
            </Command>
        </PopoverContent>
    </Popover>
    <!--对话框-->
    <Dialog :open="isCreateTeamDialogOpen" @update:open="isCreateTeamDialogOpen = $event">
        <form>
            <DialogContent class="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create team</DialogTitle>
                    <DialogDescription>
                        Add a new team to manage products and customers.
                    </DialogDescription>
                </DialogHeader>
                <div class="grid gap-4">
                    <div class="grid gap-3">
                        <Label>Team Name</Label>
                        <Input placeholder="Acme Inc." />
                    </div>
                    <div class="grid gap-3">
                        <Label>Subscription plan</Label>
                        <Input placeholder="Pro-$9/month per user" position="relative" />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose as-child>
                        <Button variant="outline">
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button>
                        Continue
                    </Button>
                </DialogFooter>
            </DialogContent>
        </form>
    </Dialog>
</template>

<script setup>
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { SidebarTrigger } from '@/components/ui/sidebar'
import Button from '@/components/ui/button/Button.vue';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { CheckIcon, ChevronsUpDownIcon, ChevronDown } from 'lucide-vue-next'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator
} from '@/components/ui/command'
import { Circle, CirclePlus } from 'lucide-vue-next';
import { ref } from 'vue';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const src = ref('https://avatar.vercel.sh/personal.png')
const value = ref('')

const personalAccounts = ref([
    { label: 'Alicia Koch', value: 'alicia-koch', src: 'https://avatar.vercel.sh/personal.png' }
]);

const teams = ref([
    { label: 'Acme Inc', value: 'acme-inc', src: 'https://avatar.vercel.sh/acme-inc.png' },
    {
        label: 'Monsters Inc', value: 'monsters-inc', src: 'https://avatar.vercel.sh/monsters.png'
    }
]);

const selectedItem = ref(personalAccounts.value[0]); // 默认选中第一个个人账户

const open = ref(false);
</script>