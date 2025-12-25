import type { ColumnDef } from '@tanstack/vue-table'
import type { Task } from './TasksData.ts'
import { h } from 'vue'
import DropdownAction from './DataTableDropDown.vue'
import Button from '@/components/ui/button/Button.vue'
import { ArrowUpDown } from 'lucide-vue-next'
import { Checkbox } from '@/components/ui/checkbox'
import DataTableColumnHeader from './DataTableColumnHeader.vue'

export const columns: ColumnDef<Task>[] = [
    {
        id: 'select',
        header: ({ table }) => h(Checkbox, {
            'modelValue': table.getIsAllPageRowsSelected(),
            'onUpdate:modelValue': (value: boolean | string) => table.toggleAllPageRowsSelected(!!value),
            'ariaLabel': 'Select all',
        }),
        cell: ({ row }) => h(Checkbox, {
            'modelValue': row.getIsSelected(),
            'onUpdate:modelValue': (value: boolean | string) => row.toggleSelected(!!value),
            'ariaLabel': 'Select row',
        }),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'taskName',//获取哪个字段的值
        header: () => h('div', { class: 'text-start text-muted-foreground' }, 'Task'),//h函数：元素+属性？+文本？
        cell: ({ row }) => {//每个单元格的设置
            const task = row.original.taskName

            return h('div', { class: 'text-start font-medium' }, task)
        }
    },
    {
        accessorKey: 'taskTitle',
        header: ({ column }) =>
            h(DataTableColumnHeader, {
                column: column,
                title: 'Title',
            }),
        cell: ({ row }) => {
            const type = row.original.taskType
            const title = row.original.taskTitle
            return h('div', { class: 'text-start font-medium flex items-center' }, [h('div', { class: 'border rounded-sm px-2 py-1 font-semibold text-xs' }, type), h('div', { class: 'ml-2' }, title)])
        }
    },
    {
        accessorKey: 'status',
        header: ({ column }) => h(Button, { variant: 'ghost', onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'), class: 'text-start text-muted-foreground' }, () => ['Status', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })]),
        cell: ({ row }) => h('div', { class: 'pl-3' }, row.getValue('status')),
    },
    {
        accessorKey: 'priority',
        header: ({ column }) => h(Button, { variant: 'ghost', onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'), class: 'text-start text-muted-foreground' }, () => ['Priority', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })]),
        cell: ({ row }) => h('div', { class: 'pl-3' }, row.getValue('priority')),
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
            const task = row.original.taskName
            return h('div', { class: 'relative' }, h(DropdownAction, task)
            )
        }
    }
]