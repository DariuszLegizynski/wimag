<template>
  <aside
    class="sideBar fade-in-bg"
    :class="{
      slideIn: isBurgerActive,
      slideOut: !isBurgerActive,
    }"
  >
      <div class="btn sr-only">MENU</div>
      <NuxtLink to="/offer"
        class="btn btn--transparent"
      >
        OFERTA
      </NuxtLink>
      <NuxtLink to="/about"
        class="btn btn--transparent"
      >
        O FIRMIE
      </NuxtLink>
      <NuxtLink to="/#footer"
        class="btn btn--transparent"
      >
        KONTAKT
      </NuxtLink>
  </aside>
</template>

<script setup>
defineProps(['isBurgerActive'])

const toggle = () => {
    this.$emit("toggle")
  }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_general.scss';

.sideBar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  -webkit-backdrop-filter: blur(9px);
  backdrop-filter: blur(9px);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  background-color: $primary-opacity;
}
.btn {
  background-color: transparent;
  color: $color-white;
  margin: 0.6rem 0;
}

@media only screen and (min-width: 640px) {
  .sideBar {
    display: none;
    visibility: hidden;
  }
}
</style>