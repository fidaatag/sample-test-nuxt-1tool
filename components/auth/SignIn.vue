<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLogin } from '@/composables/useLogin'; // Import useLogin hook
import { ref, reactive } from 'vue';


const router = useRouter()
const isLoading = ref(false)
const credential = reactive({
  email: '',
  password: '',
})

const login = async () => {
  isLoading.value = true; // Start loading

  const response = await useLogin(credential); // Directly pass credential

  isLoading.value = false; // Stop loading

  console.log(response);
  router.push('/member/courses')

  
}

</script>

<template>
  <form class="grid gap-4" @submit.prevent="login">
    <div class="grid gap-2">
      <Label for="email">Email</Label>
      <Input id="email" v-model="credential.email" type="email" placeholder="name@example.com" :disabled="isLoading"
        auto-capitalize="none" auto-complete="email" auto-correct="off" />
    </div>
    <div class="grid gap-2">
      <div class="flex items-center">
        <Label for="password">Password</Label>
        <NuxtLink to="/forgot-password" class="ml-auto inline-block text-sm underline">
          Forgot your password?
        </NuxtLink>
      </div>
      <Input id="password" v-model="credential.password" type="password" />
    </div>
    <Button type="submit" class="w-full" :disabled="isLoading">
      <Loader2 v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
      Login
    </Button>
  </form>

  <div class="mt-4 text-center text-sm text-muted-foreground">
    Don't have an account?
    <NuxtLink to="/register" class="underline">
      Sign up
    </NuxtLink>
  </div>
</template>

<style scoped></style>
