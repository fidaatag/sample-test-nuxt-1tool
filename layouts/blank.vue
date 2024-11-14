<script setup lang="ts">
const store = useNavbar()
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
  <div>
    <slot />
  </div>
</template>

<style scoped>

</style>
