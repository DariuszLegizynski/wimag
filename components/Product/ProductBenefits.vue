<template>
  <article class="product-pros intersection-observer">
    <h2>Postaw na nasze regały:</h2>
    <section class="product-pros__items">
      <div
        class="product-pros__item"
      >
        <BaseIconsQuality :width="'4rem'" :height="'4rem'" />
        <span
          ><strong>Najwyższa jakość<br /></strong>wykonania.</span
        >
      </div>
      <div
        class="product-pros__item"
      >
        <BaseIconsCertificateNorm :width="'4rem'" :height="'4rem'" />
        <span>Spełniamy normę<br /><strong>PN-78 M-78320.</strong></span>
      </div>
      <div
        class="product-pros__item"
      >
        <BaseIconsStrongMuscle :width="'4rem'" :height="'4rem'" />
        <span>
          <strong>Sprawdzone produkty</strong> - próby wytrzymałościowe potwierdzają deklarowane
          obciążenie.
        </span>
      </div>
      <div
        class="product-pros__item"
      >
        <BaseIconsGear :width="'4rem'" :height="'4rem'" />
        <span>Proste w<br /><strong>montażu</strong> i <strong>demontażu.</strong></span>
      </div>
      <div
        class="product-pros__item"
      >
        <BaseIconsTruck :width="'4rem'" :height="'4rem'" />
        <span>Łatwy i bezproblemowy <strong>transport.</strong></span>
      </div>
    </section>
  </article>
</template>

<style lang="scss" scoped>
@import "assets/styles/main.scss";

.product-pros {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
  background-color: $color-primary;

  & > h2 {
    color: $color-white;
    margin: 0 1rem 1.2rem 1rem;
    text-align: center;
  }

  &__items {
    display: grid;
    grid-auto-rows: 1fr;
    row-gap: 1rem;
  }

  &__item {
    display: grid;
    grid-template-columns: auto 2fr;
    column-gap: 0.8rem;
    justify-items: start;
    align-items: center;

    & > span {
      color: $color-white;
    }
  }

  &__item > * {
    font-size: $font-size-20;
  }
}
@media only screen and (min-width: 480px) {
  .product-pros {
    &__items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
    }
  }
}
@media (min-width: 768px) {
  .product-pros {
    &__items {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
@media (min-width: 1024px) {
  .product-pros {
    padding: 4rem 2rem;

    & > h2 {
      padding-bottom: 4rem;
    }

    &__items {
      column-gap: 4rem;
      row-gap: 2rem;
    }

    &__item > * {
      font-size: $font-size-24;
    }
  }
}
@media (min-width: 1440px) {
  .product-pros {
    padding: 8rem 2rem;

    & > h2 {
      padding-bottom: 4rem;
    }

    &__items {
      column-gap: 4rem;
      row-gap: 2rem;
    }
  }
}
</style>
