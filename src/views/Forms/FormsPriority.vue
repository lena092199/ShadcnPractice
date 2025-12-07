<template>
    <FieldSet>
        <FieldLegend>Profile</FieldLegend>
        <FieldDescription>
            This is how others will see you on the site.
        </FieldDescription>
        <FieldSeparator></FieldSeparator>
        <Field>
            <FieldLabel :class="{ 'text-red-600': userError }">Username</FieldLabel>
            <Input placeholder="shadcn" v-model="username" @input="validateUsername"></Input>
            <FieldDescription>
                This is your public display name. It can be your real name or a pseudonym. You can
                only change this once every 30 days.
            </FieldDescription>
            <FieldError v-show="userError">Username must be at least 2 characters.</FieldError>
        </Field>
        <Field>
            <FieldLabel :class="{ 'text-red-600': emailError }">Email</FieldLabel>
            <Select v-model="email" @update:modelValue="Email">
                <SelectTrigger>
                    <SelectValue placeholder="Select an email"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="example">m@example.com</SelectItem>
                    <SelectItem value="google">m@google.com</SelectItem>
                    <SelectItem value="support">m@support.com</SelectItem>
                </SelectContent>
            </Select>
            <FieldDescription>You can manage verified email addresses in your email settings.
            </FieldDescription>
            <FieldError v-show="emailError">Please select an email to display.</FieldError>
        </Field>
        <Field>
            <FieldLabel :class="{ 'text-red-600': bioError }">Bio</FieldLabel>
            <Textarea defaultValue="I own a computer" v-model="bio" @input="Bio"></Textarea>
            <FieldDescription>You can @mention other users and organizations to link to them.
            </FieldDescription>
            <FieldError v-show="bioError">Bio must be at least 2 characters.</FieldError>
        </Field>
        <Field>
            <FieldLabel :class="{ 'text-red-600': urlError }">URLs</FieldLabel>
            <FieldDescription>
                Add links to your website, blog, or social media profiles.
            </FieldDescription>
            <Input v-for="url in URLs" :key="url.id" :default-value="url.url" v-model="url.url"
                @input="ValidateUrl(url.url)">
            </Input>
            <Field orientation="responsive">
                <Button variant="outline" class="w-40" @click="addUrl">Add URL</Button>
            </Field>
            <FieldError v-show="urlError">Please enter a valid URL.</FieldError>
        </Field>
        <Field orientation="responsive">
            <Button @click="Update">Update profile</Button>
            <Button @click="Reset" variant="outline">Reset form</Button>
        </Field>
    </FieldSet>
</template>

<script setup>
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldError
} from '@/components/ui/field'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea'
import { ref } from 'vue'

// Username
const username = ref('')
const userError = ref(false)

const validateUsername = () => {
    userError.value = username.value.length >= 0 && username.value.length <= 2
}

// Email
const email = ref('')
const emailError = ref(false)
const Email = (value) => {
    if (value !== undefined) {
        email.value = value
    }
    if (!email.value) {
        emailError.value = true
    } else {
        emailError.value = false
    }
}

// Bio
const bio = ref('I own a computer')
const bioError = ref(false)

const Bio = () => {
    bioError.value = bio.value.length >= 0 && bio.value.length <= 2
}

// URLs
const urlError = ref(false)
const URLs = ref([
    {
        id: 1,
        url: 'https://shadcn.com',
    },
    {
        id: 2,
        url: 'https://twitter.com/shadcn',
    }
])

const ValidateUrl = (url) => {
    urlError.value = !url.startsWith('https://')
}

const addUrl = () => {
    const newId = URLs.value.length > 0 ? Math.max(...URLs.value.map(item => item.id)) + 1 : 1
    URLs.value.push({
        id: newId,
        url: 'https://'
    })
}

// Buttom
const Update = () => {
    validateUsername()
    Email()
    Bio()
}

const Reset = () => {
    username.value = ''
    email.value = ''
    bio.value = 'I own a computer'
    URLs.value = [
        {
            id: 1,
            url: 'https://shadcn.com',
        },
        {
            id: 2,
            url: 'https://twitter.com/shadcn',
        }
    ]
    userError.value = false
    emailError.value = false
    bioError.value = false
    urlError.value = false
}
</script>