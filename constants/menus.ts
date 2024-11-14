import type { NavMenuItems } from '@/types/nav'

export const navMenu: NavMenuItems = [
  {
    title: 'Courses',
    icon: 'i-lucide-graduation-cap',
    link: '/member/courses',
  },
  {
    title: 'Event',
    icon: 'i-lucide-calendar-days',
    link: '/member/event',
  },
  {
    title: 'Tes Detail',
    icon: 'i-lucide-calendar-days',
    link: '/member/detail',
  },
  {
    title: 'Tes Event',
    icon: 'i-lucide-calendar-days',
    link: '/member/event',
  },
  {
    heading: 'Sample Dropdown Menu',
  },
  {
    title: 'Menu -1',
    icon: 'i-lucide-component',
    children: [
      {
        title: 'Sub Menu -1',
        icon: 'i-lucide-circle',
        link: '#',
      },
      {
        title: 'Sub Menu -2',
        icon: 'i-lucide-circle',
        link: '#',
      },
    ],
  },
]

export const navMenuBottom: NavMenuItems = [
  {
    title: 'Help',
    icon: 'i-lucide-life-buoy',
    link: '#',
  },
  {
    title: 'Account',
    icon: 'i-lucide-square-user',
    link: '#',
  },
]
