import type { ColumnDef } from '@tanstack/vue-table'
import type { Task } from '@/components/table/data/schema'

import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { h } from 'vue'
import { RouterLink } from 'vue-router'
import { labels, priorities, statuses } from '@/components/table/data/data'
import DataTableColumnHeader from './DataTableColumnHeader.vue'
import DataTableRowActions from './DataTableRowActions.vue'
import type { Course_Detail_Include_Event } from '~/types/courses'

export const columns: ColumnDef<Course_Detail_Include_Event>[] = [
  {
    id: 'select',
    header: ({ table }) => h(Checkbox, {
      'checked': table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate'),
      'onUpdate:checked': value => table.toggleAllPageRowsSelected(!!value),
      'ariaLabel': 'Select all',
      'class': 'translate-y-0.5',
    }),
    cell: ({ row }) => h(Checkbox, { 'checked': row.getIsSelected(), 'onUpdate:checked': value => row.toggleSelected(!!value), 'ariaLabel': 'Select row', 'class': 'translate-y-0.5' }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Task' }),
    cell: ({ row }) => h('div', { class: 'w-4' }, row.getValue('id')),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Title' }),
    cell: ({ row }) => {
      const id = row.original.id
      return h('div', { class: 'flex space-x-2' }, [
        h(
          RouterLink,
          { to: `/member/courses/${id}`, class: 'max-w-[400px] truncate font-medium' },
          { default: () => row.getValue('title') }
        )
      ])
    },
  },
  {
    accessorKey: 'events',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Event' }),
    cell: ({ row }) => {
      const id = row.original.id
      const events = row.original.events || ['No Events']
      return h(
        'div',
        { class: 'space-y-1' },
        events.map(event =>
          h(
            'div',
            { class: 'w-90' },
            h(
              RouterLink,
              { to: `/member/courses/${id}/event-${event.id}`, class: 'text-blue-500 hover:underline' },
              { default: () => event.title }
            )
          )
        )
      )
    },
  },
  
  // {
  //   accessorKey: 'status',
  //   header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Status' }),

  //   cell: ({ row }) => {
  //     const status = statuses.find(
  //       status => status.value === row.getValue('status'),
  //     )

  //     if (!status)
  //       return null

  //     return h('div', { class: 'flex w-[100px] items-center' }, [
  //       status.icon && h(status.icon, { class: 'mr-2 h-4 w-4 text-muted-foreground' }),
  //       h('span', status.label),
  //     ])
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id))
  //   },
  // },
  // {
  //   accessorKey: 'priority',
  //   header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Priority' }),
  //   cell: ({ row }) => {
  //     const priority = priorities.find(
  //       priority => priority.value === row.getValue('priority'),
  //     )

  //     if (!priority)
  //       return null

  //     return h('div', { class: 'flex items-center' }, [
  //       priority.icon && h(priority.icon, { class: 'mr-2 h-4 w-4 text-muted-foreground' }),
  //       h('span', {}, priority.label),
  //     ])
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id))
  //   },
  // },
  {
    id: 'actions',
    cell: ({ row }) => h(DataTableRowActions, { row }),
  },
]