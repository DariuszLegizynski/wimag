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
  <svg :fill="fill" :height="height" :width="width" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M17.5,16c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5C20,14.9,18.9,16,17.5,16z M17.5,12 c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S18.3,12,17.5,12z"></path> </g> <g> <path d="M6.5,10h-4C2.2,10,2,9.8,2,9.5S2.2,9,2.5,9h4C6.8,9,7,9.2,7,9.5S6.8,10,6.5,10z"></path> </g> <g> <path d="M11.5,10h-3C8.2,10,8,9.8,8,9.5S8.2,9,8.5,9h3C11.8,9,12,9.2,12,9.5S11.8,10,11.5,10z"></path> </g> <path d="M18,8V1.5C18,0.7,17.3,0,16.5,0H7.9C7.5,0,7.1,0.2,6.9,0.4L0.4,6.9C0.2,7.1,0,7.5,0,7.9v14.6C0,23.3,0.7,24,1.5,24h13v0 c0.1,0,0.2,0,0.3-0.1l2.7-2.2l2.7,2.2c0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.1,0,0.2,0c0.2-0.1,0.3-0.3,0.3-0.5v-5.8c1.2-1,2-2.5,2-4.2 C23,10.6,20.8,8.3,18,8z M8,3h6.5C14.8,3,15,3.2,15,3.5v1C15,4.8,14.8,5,14.5,5H8V3z M7,1.7v4.8C7,6.8,6.8,7,6.5,7H1.7L7,1.7z M14,23H1.5C1.2,23,1,22.8,1,22.5V8h5.5C7.3,8,8,7.3,8,6.5V6h6.5C15.3,6,16,5.3,16,4.5v-1C16,2.7,15.3,2,14.5,2H8V1h8.5 C16.8,1,17,1.2,17,1.5V8c-1.9,0.2-3.5,1.3-4.4,3H8.5C7.7,11,7,11.7,7,12.5v2C7,15.3,7.7,16,8.5,16h4.1c0.2,0.4,0.4,0.7,0.6,1H3.5 C2.7,17,2,17.7,2,18.5v2C2,21.3,2.7,22,3.5,22H14V23z M12.2,15H8.5C8.2,15,8,14.8,8,14.5v-2C8,12.2,8.2,12,8.5,12h3.7 c-0.1,0.5-0.2,1-0.2,1.5C12,14,12.1,14.5,12.2,15z M14,21H3.5C3.2,21,3,20.8,3,20.5v-2C3,18.2,3.2,18,3.5,18H14V21z M20,22.4 l-2.2-1.8c-0.2-0.2-0.5-0.2-0.6,0L15,22.4v-4c0.8,0.4,1.6,0.6,2.5,0.6s1.7-0.2,2.5-0.6V22.4z M17.5,18C15,18,13,16,13,13.5 S15,9,17.5,9s4.5,2,4.5,4.5S20,18,17.5,18z"></path> <g> <path d="M5.5,12h-3C2.2,12,2,11.8,2,11.5S2.2,11,2.5,11h3C5.8,11,6,11.2,6,11.5S5.8,12,5.5,12z"></path> </g> <g> <path d="M5.5,14h-3C2.2,14,2,13.8,2,13.5S2.2,13,2.5,13h3C5.8,13,6,13.2,6,13.5S5.8,14,5.5,14z"></path> </g> <g> <path d="M5.5,16h-3C2.2,16,2,15.8,2,15.5S2.2,15,2.5,15h3C5.8,15,6,15.2,6,15.5S5.8,16,5.5,16z"></path> </g> <g> <path d="M13.5,8h-4C9.2,8,9,7.8,9,7.5S9.2,7,9.5,7h4C13.8,7,14,7.2,14,7.5S13.8,8,13.5,8z"></path> </g> </g> </g></svg>
</template>

<style scoped>
svg {
  display: flex;
}
</style>
