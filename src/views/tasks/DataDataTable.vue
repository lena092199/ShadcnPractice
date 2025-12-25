<template>
    <div class="px-6 py-10">
        <DataTable :columns="columns" :data="data" />
    </div>
</template>

<script setup lang="ts">
import { type Task } from './TasksData.ts'
import { tasksData } from './TasksData.ts'
import { onMounted, ref } from 'vue'
import { columns } from './columns'
import DataTable from './DataTable.vue'

const data = ref<Task[]>([])

async function getData(): Promise<Task[]> {
    return tasksData
}

onMounted(async () => {
    data.value = await getData()
})
</script>