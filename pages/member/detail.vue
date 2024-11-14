<script lang="ts" setup>
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

  
  const datanya = {
        "id": 23,
        "parent_id": null,
        "title": "Learning Guitar 1",
        "subtitle": null,
        "contents": null,
        "goals": null,
        "target_group": null,
        "cost_information": null,
        "notes": null,
        "number": "E-Learning",
        "is_overnight_stay_available": 0,
        "created_at": "2021-02-24T18:46:55.000000Z",
        "updated_at": "2024-11-09T18:49:59.000000Z",
        "created_by": 4,
        "updated_by": 4,
        "max_number": 19,
        "thumbnail_size_id": null,
        "event_row": null,
        "course_category_id": null,
        "teaser": null,
        "has_single_event": 0,
        "calendar_type_id": null,
        "terms_and_conditions": null
    }

</script>

<template>
    <a href="/member/courses">back</a>
    <Card>
      <CardHeader>
        <CardTitle>{{ datanya.title }}</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-4 gap-2">
        <div
          v-for="(value, key) in datanya"
          :key="key"
          class="bg-secondary p-3 rounded-md mb-1"
        >
          <div class="text-sm font-light">{{ key }}</div>
          <div class="text-base font-semibold">{{ value === null ? "N/A" : value }}</div>
        </div>
      </div>
      </CardContent>
    </Card>
</template>
