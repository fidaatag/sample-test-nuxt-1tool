<script lang="ts" setup>
import DataTable from '@/components/table/DataTable.vue';
import { columns } from '@/components/table/columns';
import type { Couses_Include_Event } from '~/types/courses';
import { useToast } from '~/components/ui/toast';

const { toast } = useToast();

const token = useCookie('at').value;

// Function to fetch the course data
const fetchCourseData = async (): Promise<Couses_Include_Event | undefined> => {
    try {
        const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
        const response = await $fetch<Couses_Include_Event>(`${apiUrl}/courses?include=events`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        toast({
            title: 'Error',
            description: 'Failed to fetch course data.',
        });
        return undefined; // Return undefined in case of an error
    }
};

// Initialize courses with an empty array as a fallback
let courses: Couses_Include_Event | undefined = await fetchCourseData();


</script>

<template>
    <DataTable :data="courses?.data ?? []" :columns="columns" />
</template>
