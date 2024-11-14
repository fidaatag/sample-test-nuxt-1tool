<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useToast } from '@/components/ui/toast/use-toast';
import type { Courses_Detail_Id, Courses_Id } from '~/types/courses';
import { PopoverClose } from 'radix-vue';
import { Box } from 'lucide-vue-next';



const route = useRoute();
const id = route.params.id;
const token = useCookie('at').value;
const { toast } = useToast();

const isClientReady = ref(false);

// Set `isClientReady` to true after component is fully mounted on the client-side
onMounted(() => {
    isClientReady.value = true;
});


const inputValue = ref('');
const Data_Courses_Id = reactive<{ data: Courses_Detail_Id | null }>({ data: null });

// Function to fetch the course data
const fetchCourseData = async () => {
    try {
        const config = useRuntimeConfig();
        const apiUrl = config.public.apiUrl;
        const response = await $fetch<Courses_Id>(`${apiUrl}/courses/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        Data_Courses_Id.data = response.data;
    } catch (error) {
        toast({
            title: 'Error',
            description: 'Failed to fetch course data.',
        });
    }
};

// Fetch data on component mount
await fetchCourseData();

const saveBtn = async <T extends keyof Courses_Detail_Id>(key: T) => {
    const updatedValue = inputValue.value as any;

    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;

    try {
        const response = await $fetch(`${apiUrl}//courses/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...Data_Courses_Id.data, [key]: updatedValue }),
        });

        // Early return if the response is not successful or Data_Courses_Id.data is null
        if (!response || !Data_Courses_Id.data) {
            toast({
                title: 'Error',
                description: 'There was an issue saving your changes.',
            });
            return;
        }
        

        // Show success message
        toast({
            title: 'Change Success',
            description: 'Your changes have been saved successfully.',
        });

        // Update the property locally after a successful response
        Data_Courses_Id.data[key] = updatedValue;

        // Refetch data if necessary to ensure full synchronization
        await fetchCourseData();

        

    } catch (error) {
        toast({
            title: 'Error',
            description: 'An error occurred while saving your changes.',
        });
    }
};


</script>

<template>
    <RouterLink to="/courses">Go to Courses</RouterLink>
    <Card>
    <CardHeader>
        <CardTitle>{{ Data_Courses_Id.data?.title }}</CardTitle>
    </CardHeader>
    <CardContent v-if="Data_Courses_Id.data && isClientReady">
        <div class="grid grid-cols-4 gap-2">
            <div v-for="(value, key) in Data_Courses_Id.data" :key="key" class="bg-secondary p-3 rounded-md mb-1 flex justify-between">
                <div>
                    <p class="text-sm font-light">{{ key }}</p>
                    <p class="text-base font-semibold">{{ value === null ? "N/A" : value }}</p>
                </div>
                <div>
                    <Popover>
                        <PopoverTrigger>
                            <Button>
                                <Box />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div class="grid gap-4">
                                <div class="grid gap-2">
                                    <div class="grid grid-cols-3 items-center gap-4">
                                        <Label :for="key">{{ key }}</Label>
                                        <Input :id="key" :default-value="value === null ? 'N/A' : value" v-model="inputValue" class="col-span-2 h-8" />
                                    </div>
                                    <div class="grid grid-cols-4 items-center gap-2">
                                        <PopoverClose> <Button @click="() => saveBtn(key)">Save</Button> </PopoverClose>
                                        <PopoverClose> <Button>Cancel</Button> </PopoverClose>
                                    </div>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    </CardContent>
    <CardContent v-else>
        <div class="grid grid-cols-4 gap-2">
            <Skeleton v-for="index in 12" :key="index" class="h-[70px] rounded-xl" />
        </div>
    </CardContent>
</Card>
</template> 
