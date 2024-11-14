<script setup lang="ts">
import { cn } from '@/lib/utils';
import { useAppConf } from '@/composables/useAppConf';
import { useCustomize } from '@/composables/useCustomize';

const store = useNavbar()
const { isOpen } = storeToRefs(store)
const { isBgWhite } = storeToRefs(useAppConf())
const { theme, radius } = useCustomize()

useServerHead({
  bodyAttrs: {
    class: `theme-${theme.value}`,
    style: `--radius: ${radius.value}rem;`,
  },
})

const router = useRouter()

</script>

<template>
  <div
    class="grid w-full transition-width duration-300 min-h-dvh"
    :class="cn('pl-0 lg:pl-64 sm:pl-20', isOpen ? 'lg:pl-64 sm:pl-20' : 'lg:pl-20')"
  >
    <LayoutSidebar />
    <div flex="~ col" of-hidden>
      <LayoutHeader />
      <!-- <main class="flex-1 p-4 lg:p-6" :class="isBgWhite ? 'bg-background' : 'bg-muted dark:bg-muted/20'"> -->
      <main class="flex-1 p-4 lg:p-6 bg-background">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>

</style>
