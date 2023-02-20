<template>
  <header
    class="header fade-in-bg"
  >
    <NuxtLink to="/"
      class="logo"
    >
      <img src="/logo/gamiw_logo_white.png" alt="Wi-Mag logo" />
    </NuxtLink>
    <nav>
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
    </nav>

  </header>

</template>

<style lang="scss" scoped>
@import '@/assets/scss/_general.scss';

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  padding-right: 1rem;

  width: 100vw;
  height: auto;

  z-index: 10;

  background-color: transparent;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);

  &__active {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    background-color: transparent !important;
    box-shadow: none !important;
  }

  &__scroll {
    background-color: $primary-opacity;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  .logo {
    & > img {
      width: 3rem;
      height: auto;
      background-color: $color-primary;
      padding: 0.4rem;
    }
  }
  nav {
    display: none;
    visibility: hidden;
  }
}

@media only screen and (min-width: 640px) {
  .header {
    nav {
      display: flex;
      visibility: visible;
      justify-content: space-around;
      align-items: center;
      width: 57%;

      .btn {
        margin: 0;
        padding: 0 0.4rem;
        width: auto;
        font-size: $font-size-18;
        line-height: $line-height-18;
      }
    }
  }
}
@media only screen and (min-width: 1024px) {
  .header {
    nav {
      width: 80%;

      .btn {
        font-size: $font-size-24;
        line-height: $line-height-30;
      }
    }
  }
}
</style>
