<script lang="ts" setup>
import DataTable from '@/components/table/DataTable.vue';
import tasks from '@/components/table/data/task.json';
import { columns } from '@/components/table/columns';
</script>

<template>
     <DataTable :data="tasks" :columns="columns" />
</template>
