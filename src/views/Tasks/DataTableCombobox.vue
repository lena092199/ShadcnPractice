<template>
    <div class="flex gap-3">
        <Popover v-model:open="open">
            <PopoverTrigger as-child>
                <Button variant="outline">
                    <CirclePlus></CirclePlus>
                    Status
                    <Separator orientation="vertical"></Separator>
                    <span class="bg-gray-200 px-1 rounded-sm" v-for="status in SelectStatus" :key="status.id">{{
                        status.name
                    }}</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent class="w-[200px] p-0" align="start">
                <Command>
                    <CommandInput placeholder="Status" class="h-9"></CommandInput>
                    <CommandList>
                        <CommandEmpty>No Status</CommandEmpty>
                        <CommandGroup>
                            <CommandItem v-for="option in statusOptions" :key="option.id" class="items-center flex"
                                @select.capture="() => {
                                    selectStatus(option.name)
                                }">
                                <Checkbox class="border-black/50" v-model="option.status">
                                </Checkbox>
                                <component :is="option.icon" class="stroke-[1.5] ml-2" />
                                <Label>{{ option.name }}</Label>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator></CommandSeparator>
                        <CommandGroup>
                            <CommandItem class="flex justify-center">
                                Clear filters
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>

        <Popover v-model:open="open1">
            <PopoverTrigger>
                <Button variant="outline">
                    <CirclePlus></CirclePlus>
                    Priority
                    <Separator orientation="vertical"></Separator>
                </Button>
            </PopoverTrigger>
            <PopoverContent class="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Priority" class="h-9"></CommandInput>
                    <CommandList>
                        <CommandEmpty>No Priority</CommandEmpty>
                        <CommandGroup>
                            <CommandItem v-for="option in priorityOptions" :key="option.id" class="items-center flex"
                                @select.stop="(ev) => {
                                    selectPriority(ev.detail.value as string)
                                }">
                                <Checkbox class="border-black/50" :id="`status-${option.id}`">
                                </Checkbox>
                                <component :is="option.icon" class="stroke-[1.5] ml-2" />
                                <Label :for="`status-${option.id}`">{{ option.name }}</Label>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    </div>

</template>

<script setup lang="ts">
import { CheckIcon, ChevronsUpDownIcon, Option } from 'lucide-vue-next'
import Separator from '@/components/ui/separator/Separator.vue'
import { computed, ref } from 'vue'
import { Eclipse, CircleQuestionMark, Circle, CirclePlus, CircleX, ArrowRight, ArrowDown, ArrowUp } from 'lucide-vue-next';
import { Button } from '@/components/ui/button'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator
} from '@/components/ui/command'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue'
import Label from '@/components/ui/label/Label.vue';

const open = ref(false)
const open1 = ref(false)
const value = ref('')
const value1 = ref('')
// const optionStatus = ref('')

const selectStatus = (selectValue: string) => {
    console.log('点击前 value:', value.value);
    console.log('点击的选项:', selectValue);

    // value.value = selectValue === value.value ? '' : selectValue
    console.log('点击后 value:', value.value);
    // open.value = false
    statusOptions.value.forEach((sOption) => {
        if (sOption.name === selectValue) {
            sOption.status = !sOption.status
        }

        console.log(sOption.name, sOption.status);

    })
    // optionStatus.value = selectValue
}

const SelectStatus = computed(() => {
    return statusOptions.value.filter((option => option.status))
})

const newValue = ref(false)
const updateOptionStatus = (option: any, newValue: boolean) => {
    console.log('Checkbox 状态变化:', option.name, newValue)
    option.status = newValue
}

const selectPriority = (selectValue: string) => {
    console.log(selectValue);

    value1.value = selectValue === value1.value ? selectValue : ''
    open1.value = false
}

let statusOptions = ref([
    {
        id: 1,
        name: "Backlog",
        count: 21,
        icon: CircleQuestionMark,
        status: false
    },
    {
        id: 2,
        name: "Todo",
        count: 21,
        icon: Circle,
        status: false
    },
    {
        id: 3,
        name: "In Progress",
        count: 20,
        icon: Eclipse,
        status: false
    },
    {
        id: 4,
        name: "Done",
        count: 19,
        icon: CirclePlus,
        status: false
    },
    {
        id: 5,
        name: "Canceled",
        count: 19,
        icon: CircleX,
        status: false
    }
])

let priorityOptions = ref([
    {
        id: 1,
        name: "Low",
        count: 36,
        icon: ArrowDown,
        status: false
    },
    {
        id: 2,
        name: "Medium",
        count: 33,
        icon: ArrowRight,
        status: false
    },
    {
        id: 3,
        name: "High",
        count: 31,
        icon: ArrowUp,
        status: false
    }
])
</script>