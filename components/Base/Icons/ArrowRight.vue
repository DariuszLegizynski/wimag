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
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height"><g :fill="fill" id="icon-arrow_right" viewBox="0 0 24 24"><path d="M16.031 11.016v-3l3.984 3.984-3.984 3.984v-3h-12.047v-1.969h12.047z"></path></g></svg>
</template>

<style scoped>
svg {
  display: flex;
}
</style>
