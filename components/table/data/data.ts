import ArrowDownIcon from '~icons/radix-icons/arrow-down'
import ArrowRightIcon from '~icons/radix-icons/arrow-right'
import ArrowUpIcon from '~icons/radix-icons/arrow-up'
import CheckCircledIcon from '~icons/radix-icons/check-circled'
import CircleIcon from '~icons/radix-icons/circle'
import CrossCircledIcon from '~icons/radix-icons/cross-circled'
import QuestionMarkCircledIcon from '~icons/radix-icons/question-mark-circled'
import StopwatchIcon from '~icons/radix-icons/stopwatch'
import { h } from 'vue'

export const labels = [
  {
    value: 'bug',
    label: 'Bug',
  },
  {
    value: 'feature',
    label: 'Feature',
  },
  {
    value: 'documentation',
    label: 'Documentation',
  },
]

export const statuses = [
  {
    value: 'backlog',
    label: 'Backlog',
    icon: 'i-lucide-graduation-cap',
  },
  {
    value: 'todo',
    label: 'Todo',
    icon: 'i-lucide-graduation-cap',
  },
  {
    value: 'in progress',
    label: 'In Progress',
    icon: 'i-lucide-graduation-cap',
  },
  {
    value: 'done',
    label: 'Done',
    icon: 'i-lucide-graduation-cap',
  },
  {
    value: 'canceled',
    label: 'Canceled',
    icon: 'i-lucide-graduation-cap',
  },
]

export const priorities = [
  {
    value: 'low',
    label: 'Low',
    icon: 'i-lucide-graduation-cap',
  },
  {
    value: 'medium',
    label: 'Medium',
    icon: 'i-lucide-graduation-cap',
  },
  {
    value: 'high',
    label: 'High',
    icon: 'i-lucide-graduation-cap',
  },
]