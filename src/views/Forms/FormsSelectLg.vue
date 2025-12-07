<template>
    <Popover v-model:open="open">
        <PopoverTrigger as-child class="w50">
            <Button variant="outline" role="combobox" :aria-expanded="open" class="w-[200px] justify-between"
                :class="{ 'text-muted-foreground': !selectedFramework?.text }">
                {{ selectedFramework?.text || "Select..." }}
                <ChevronsUpDownIcon class="opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent class="w-[200px] p-0" align="start">
            <Command>
                <CommandInput class="h-9" placeholder="Search language..." />
                <CommandList>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                        <CommandItem v-for="languageOption in languageOptions" :key="languageOption.id"
                            :value="languageOption.text" @select="(ev) => {
                                selectFramework(ev.detail.value as string)
                            }">
                            {{ languageOption.text }}
                            <CheckIcon :class="cn(
                                'ml-auto',
                                value === languageOption.text ? 'opacity-100' : 'opacity-0',
                            )" />
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        </PopoverContent>
    </Popover>
</template>

<script setup lang="ts">
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'

let languageOptions = ref([
    { id: 1, text: 'English', Lgsvg: false },
    { id: 2, text: 'French', Lgsvg: false },
    { id: 3, text: 'German', Lgsvg: false },
    { id: 4, text: 'Spanish', Lgsvg: false },
    { id: 5, text: 'Portuguese', Lgsvg: false },
    { id: 6, text: 'Russian', Lgsvg: false },
    { id: 7, text: 'Japanese', Lgsvg: false },
    { id: 8, text: 'Korean', Lgsvg: false },
    { id: 9, text: 'Chinese', Lgsvg: false }
])

const open = ref(false)
const value = ref('')

const selectedFramework = computed(() =>
    languageOptions.value.find(languageOption => languageOption.text === value.value),
)

const emit = defineEmits<{
    'update:model-value': [value: string]
}>()

function selectFramework(selectedValue: string) {
    value.value = selectedValue === value.value ? '' : selectedValue
    open.value = false
    emit('update:model-value', value.value)
}
</script>

<style scoped>
.no-border-shadow {
    border: none;
    box-shadow: none;
}

.w50 {
    width: 200px;
}
</style>