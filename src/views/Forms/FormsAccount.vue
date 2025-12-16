<template>
    <FieldSet>
        <FieldLegend>Account</FieldLegend>
        <FieldDescription>
            Update your account settings. Set your preferred language and timezone.
        </FieldDescription>
        <FieldSeparator></FieldSeparator>
        <Field>
            <FieldLabel :class="{ 'text-red-600': nameError }">Name</FieldLabel>
            <Input placeholder="Your name" v-model="name" @Input="ValidateName"></Input>
            <FieldDescription>This is the name that will be displayed on your profile and in emails.</FieldDescription>
            <FieldError v-show="nameError">Name must be least 2 characters.</FieldError>
        </Field>
        <Field>
            <FieldLabel :class="{ 'text-red-600': dataError }">Date of birth</FieldLabel>
            <div>
                <Popover v-slot="{ close }">
                    <div>
                        <PopoverTrigger as-child class="w-50">
                            <Button variant="outline" class="flex gap-3" :class="{ 'text-muted-foreground': !date }">
                                <CalendarIcon />
                                {{ date ? df.format(date.toDate(getLocalTimeZone())) : "Pick a date" }}
                            </Button>
                        </PopoverTrigger>
                    </div>

                    <PopoverContent align="start">
                        <Calendar v-model="date" @update:model-value="(newDate) => { ValidateData(newDate); close(); }">
                        </Calendar>
                    </PopoverContent>
                </Popover>
            </div>
            <FieldDescription>Your date of birth is used to calculate your age.</FieldDescription>
            <FieldError v-show="dataError">Please select a valid date.</FieldError>
        </Field>
        <Field>
            <FieldLabel :class="{ 'text-red-600': languageError }">Language</FieldLabel>
            <div>
                <FormsSelectLg v-model="language" @update:model-value="Validatelanguage" />
            </div>
            <FieldDescription>This is the language that will be used in the dashboard.</FieldDescription>
            <FieldError v-show="languageError">Required</FieldError>
        </Field>
        <Field orientation="responsive">
            <Button @click="Update">Update account</Button>
        </Field>
    </FieldSet>
</template>

<script setup lang="ts">
import {
    Field,
    FieldDescription,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldError
} from '@/components/ui/field'
import { Calendar } from '@/components/ui/calendar'
import type { DateValue } from '@internationalized/date'
import { DateFormatter, getLocalTimeZone } from '@internationalized/date'
import { CalendarIcon } from 'lucide-vue-next'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ref, type Ref } from 'vue'
import FormsSelectLg from '@/views/forms/FormsSelectLg.vue'
const date = ref() as Ref<DateValue>
const df = new DateFormatter('en-US', {
    dateStyle: 'long',
})

// Name
const nameError = ref(false)
const name = ref('')
const ValidateName = () => {
    nameError.value = name.value.length >= 0 && name.value.length <= 2
}

// Date
const dataError = ref(false)
const ValidateData = (newDate?: DateValue) => {
    if (newDate !== undefined) {
        date.value = newDate
    }

    if (!date.value) {
        dataError.value = true
    } else {
        dataError.value = false
    }
}

// lg
const languageError = ref(false)
const language = ref('')

const Validatelanguage = (value?: string) => {
    if (value != undefined) {
        language.value = value
    }
    if (!language.value) {
        languageError.value = true
    } else {
        languageError.value = false
    }
}

const Update = () => {
    ValidateName()
    ValidateData()
    Validatelanguage()
}
</script>