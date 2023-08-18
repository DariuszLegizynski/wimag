<script setup>
import { toRefs } from "vue"

const props = defineProps({
    width: { type: String, default: "24px" },
    height: { type: String, default: "24px" },
    fill:  { type: String, default: "white" }
})
const { width, height, fill } = toRefs(props)
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height"><g :fill="fill"><path d="M5 13h14c0.552 0 1-0.448 1-1s-0.448-1-1-1h-14c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></g></svg>
</template>

<style scoped>
svg {
  display: flex;
}
</style>
