<template>
    <div>
        <!-- <div
            class="flex flex-col justify-center items-start md:flex-row md:items-center md:justify-start pb-4 space-x-3 w-full">
            <Input class="max-w-sm w-full" placeholder="Filter Task..."
                :model-value="table.getColumn('taskName')?.getFilterValue() as string"
                @update:model-value=" table.getColumn('taskName')?.setFilterValue($event)" /> -->
        <!-- <div class="flex pt-4 w-full md:pt-0">
                <DataTableCombobox></DataTableCombobox>
                <DropdownMenu>
                    <DropdownMenuTrigger as-child class="flex ml-auto">
                        <Button variant="outline">
                            Columns
                            <ChevronDown class="w-4 h-4 ml-2" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuCheckboxItem
                            v-for="column in table.getAllColumns().filter((column) => column.getCanHide())"
                            :key="column.id" class="capitalize" :modelValue="column.getIsVisible()" @update:modelValue="(value) => {
                                column.toggleVisibility(!!value)
                            }">
                            {{ column.id }}
                        </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div> -->

        <div
            class="flex flex-col justify-center items-start md:flex-row md:items-center md:justify-start pb-4 space-x-3 w-full">
            <div class="flex w-full md:hidden justify-between">
                <Input class="max-w-sm w-full" placeholder="Filter Task..."
                    :model-value="table.getColumn('taskName')?.getFilterValue() as string"
                    @update:model-value=" table.getColumn('taskName')?.setFilterValue($event)" />
                <div class="flex ">
                    <DropdownMenu>
                        <DropdownMenuTrigger as-child class="flex ml-3 md:ml-auto">
                            <Button variant="outline">
                                Columns
                                <ChevronDown class="w-4 h-4 ml-2" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuCheckboxItem
                                v-for="column in table.getAllColumns().filter((column) => column.getCanHide())"
                                :key="column.id" class="capitalize" :modelValue="column.getIsVisible()"
                                @update:modelValue="(value) => {
                                    column.toggleVisibility(!!value)
                                }">
                                {{ column.id }}
                            </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <Input class="max-w-sm  hidden w-full md:flex" placeholder="Filter Task..."
                :model-value="table.getColumn('taskName')?.getFilterValue() as string"
                @update:model-value=" table.getColumn('taskName')?.setFilterValue($event)" />
            <div class="md:flex pt-4 w-full md:pt-0">
                <DataTableCombobox @status-change="handleStatusChange" @priority-change="handlePriorityChange">
                </DataTableCombobox>
                <div class="hidden md:block ml-3 md:ml-auto">
                    <DropdownMenu>
                        <DropdownMenuTrigger as-child>
                            <Button variant="outline">
                                Columns
                                <ChevronDown class="w-4 h-4 ml-2" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuCheckboxItem
                                v-for="column in table.getAllColumns().filter((column) => column.getCanHide())"
                                :key="column.id" class="capitalize" :modelValue="column.getIsVisible()"
                                @update:modelValue="(value) => {
                                    column.toggleVisibility(!!value)
                                }">
                                {{ column.id }}
                            </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </div>
        </div>

        <div class="border rounded-md">
            <Table>
                <TableHeader>
                    <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                        <TableHead v-for="header in headerGroup.headers" :key="header.id">
                            <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header"
                                :props="header.getContext()" />
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <template v-if="table.getRowModel().rows?.length">
                        <TableRow v-for="row in table.getRowModel().rows" :key="row.id"
                            :data-state="row.getIsSelected() ? 'selected' : undefined">
                            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                                <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                            </TableCell>
                        </TableRow>
                    </template>
                    <template v-else>
                        <TableRow>
                            <TableCell :colspan="columns.length" class="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    </template>
                </TableBody>
            </Table>
        </div>
        <div class="flex md:items-center py-4 space-y-2 content-end">
            <div class="flex-1 text-sm text-muted-foreground justify-end pt-1.5 md:pt-0">
                {{ table.getFilteredSelectedRowModel().rows.length }} of
                {{ table.getFilteredRowModel().rows.length }} row(s) selected.
            </div>
            <DataTablePagination :table="table" />
            <!-- <div class="space-x-2">
                <Button variant="outline" size="sm" :disabled="!table.getCanPreviousPage()"
                    @click="table.previousPage()">
                    Previous
                </Button>
                <Button variant="outline" size="sm" :disabled="!table.getCanNextPage()" @click="table.nextPage()">
                    Next
                </Button>
            </div> -->
        </div>
    </div>


</template>

<script setup lang="ts" generic="TData, TValue">//占位，ts的泛型类型，用于说这里是一个数据或是值
import type { ColumnDef, SortingState, ColumnFiltersState, VisibilityState, } from '@tanstack/vue-table'
import DataTablePagination from './DataTablePagination.vue'
import DataTableCombobox from './DataTableCombobox.vue'
import { ChevronDown } from 'lucide-vue-next'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
    FlexRender,//不同渲染结果
    getCoreRowModel,//模型
    useVueTable,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
} from '@tanstack/vue-table'
import { valueUpdater } from '@/lib/utils'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ref, computed } from 'vue'

const statusFilter = ref<string[]>([])
const priorityFilter = ref<string[]>([])

// 添加事件处理函数
const handleStatusChange = (statuses: string[]) => {
    console.log("status被调用", statuses);
    statusFilter.value = statuses
}

const handlePriorityChange = (priorities: string[]) => {
    console.log("priority被调用", priorities);
    priorityFilter.value = priorities
}

// 计算筛选后的数据：当 statusFilter 或 priorityFilter 改变时，自动重新计算
const filteredData = computed(() => {
    console.log('计算 filteredData, 当前 statusFilter:', statusFilter.value, '当前 priorityFilter:', priorityFilter.value)

    if (statusFilter.value.length === 0 && priorityFilter.value.length === 0) {
        return props.data
    }

    return props.data.filter((item: any) => {
        const statusMatch = statusFilter.value.length === 0 ||
            statusFilter.value.includes(item.status)
        const priorityMatch = priorityFilter.value.length === 0 ||
            priorityFilter.value.includes(item.priority)
        return statusMatch && priorityMatch
    })
})

const props = defineProps<{  //告诉外部我需要这些参数
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}>()

const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref({})

const table = useVueTable({
    get data() { return filteredData.value },
    get columns() { return props.columns },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
    onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: updaterOrValue => valueUpdater(updaterOrValue, columnVisibility),
    onRowSelectionChange: updaterOrValue => valueUpdater(updaterOrValue, rowSelection),
    state: {
        get sorting() { return sorting.value },
        get columnFilters() { return columnFilters.value },
        get columnVisibility() { return columnVisibility.value },
        get rowSelection() { return rowSelection.value },
    },
})


</script>