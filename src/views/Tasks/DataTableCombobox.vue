<template>
    <div class="gap-3 flex  items-start">
        <Popover v-model:open="open">
            <PopoverTrigger as-child>
                <Button variant="outline">
                    <CirclePlus></CirclePlus>
                    Status
                    <template v-if="typeof checkStatus === 'number'">
                        <Separator orientation="vertical"></Separator>
                        <span class="bg-gray-100 px-1 rounded-sm">
                            +{{ checkStatus }}
                        </span>
                    </template>
                    <template v-if="SelectStatus.length > 0 && SelectStatus.length < 2">
                        <Separator orientation="vertical"></Separator>
                        <span v-for="statusName in checkStatus" :key="statusName"
                            class="bg-gray-100 px-1 rounded-sm mr-1">
                            {{ statusName }}
                        </span>
                    </template>
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
                                <Checkbox class="border-black/80" v-model="option.status">
                                </Checkbox>
                                <component :is="option.icon" class="stroke-[1.5] ml-2" />
                                <Label>{{ option.name }}</Label>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator></CommandSeparator>
                        <CommandGroup>
                            <CommandItem class="flex justify-center" @click="clearFilterStatus">
                                Clear Status
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
                    <template v-if="typeof checkPriority === 'number'">
                        <Separator orientation="vertical"></Separator>
                        <span class="bg-gray-100 px-1 rounded-sm">
                            +{{ checkPriority }}
                        </span>
                    </template>
                    <template v-if="SelectPriority.length > 0 && SelectPriority.length < 2">
                        <Separator orientation="vertical"></Separator>
                        <span v-for="statusName in checkPriority" :key="statusName"
                            class="bg-gray-100 px-1 rounded-sm mr-1">
                            {{ statusName }}
                        </span>
                    </template>
                </Button>
            </PopoverTrigger>
            <PopoverContent class="w-[200px] p-0" align="start">
                <Command>
                    <CommandInput placeholder="Priority" class="h-9"></CommandInput>
                    <CommandList>
                        <CommandEmpty>No Priority</CommandEmpty>
                        <CommandGroup>
                            <CommandItem v-for="option in priorityOptions" :key="option.id" class="items-center flex"
                                @select.capture="() => {
                                    selectPriority(option.name)
                                }">
                                <Checkbox class="border-black/80" v-model="option.status">
                                </Checkbox>
                                <component :is="option.icon" class="stroke-[1.5] ml-2" />
                                <Label>{{ option.name }}</Label>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator></CommandSeparator>
                        <CommandGroup>
                            <CommandItem class="flex justify-center" @click="clearFilterPriority">
                                Clear Priority
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

const clearFilterStatus = () => {
    statusOptions.value.forEach((sOption) => {
        if (sOption.status === true) {
            sOption.status = !sOption.status
        }
        console.log(sOption.name, sOption.status);
    })
}

const clearFilterPriority = () => {
    priorityOptions.value.forEach((sOption) => {
        if (sOption.status === true) {
            sOption.status = !sOption.status
        }
        console.log(sOption.name, sOption.status);
    })
}

const open = ref(false)
const open1 = ref(false)

const emit = defineEmits<{
    'status-change': [statuses: string[]]
    'priority-change': [priorities: string[]]
}>()

const selectStatus = (selectValue: string) => {
    statusOptions.value.forEach((sOption) => {
        if (sOption.name === selectValue) {
            sOption.status = !sOption.status
        }
        console.log(sOption.name, sOption.status);
    })

    /*emit */
    const selectedStatuses = statusOptions.value
        .filter(option => option.status)
        .map(option => option.name)
    emit('status-change', selectedStatuses)
}

const SelectStatus = computed(() => {
    console.log(statusOptions.value.filter((option => option.status)));

    return statusOptions.value.filter((option => option.status))
})

const checkStatus = computed(() => {
    const selectedItems = statusOptions.value.filter((check) => check.status === true)
    const selectedCount = selectedItems.length
    if (selectedCount > 1) {
        return selectedCount
    } else {
        return selectedItems.map(item => item.name)
    }
})


const selectPriority = (selectValue: string) => {
    priorityOptions.value.forEach((sOption) => {
        if (sOption.name === selectValue) {
            sOption.status = !sOption.status
        }
        console.log(sOption.name, sOption.status);
    })

    const selectedPriorities = priorityOptions.value
        .filter(option => option.status)
        .map(option => option.name)
    emit('priority-change', selectedPriorities)
}

const SelectPriority = computed(() => {
    return priorityOptions.value.filter((option => option.status))
})

const checkPriority = computed(() => {
    const selectedItems = priorityOptions.value.filter((check) => check.status === true)
    const selectedCount = selectedItems.length
    if (selectedCount > 1) {
        return selectedCount
    } else {
        return selectedItems.map(item => item.name)
    }
})

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