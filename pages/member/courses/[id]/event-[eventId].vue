<script lang="ts" setup>
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { useRoute } from 'vue-router';
import type { Calendar_Event_Id } from '~/types/courses';

const route = useRoute();
const eventId = route.path.match(/event-(\d+)$/)?.[1] ?? '';
const id = route.params.id;

console.log(eventId)

const token = useCookie('at').value;

const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;
const Data_Event_Id = await $fetch<Calendar_Event_Id>(`${apiUrl}/calendar-events/${eventId}`, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

console.log(Data_Event_Id);

</script>

<template>
<RouterLink to="/member/courses">Go to Courses</RouterLink>
  <Card>
    <CardHeader>
      <CardTitle>{{ Data_Event_Id.data.title }}</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="grid grid-cols-4 gap-2">
        <div v-for="(value, key) in Data_Event_Id.data" :key="key" class="bg-secondary p-3 rounded-md mb-1">
          <div class="text-sm font-light">{{ key }}</div>
          <div class="text-base font-semibold">{{ value === null ? "N/A" : value }}</div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
