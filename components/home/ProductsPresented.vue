<template>
  <section id="products" class="products-presented">
    <h1>Nasze produkty</h1>
    <section class="products-presented__items">
      {{ data }}
      <HomeProductPresented
        v-for="productTypes in data"
        :key="productTypes.id"

        :title="data.name"
        :productTypes="productTypes"
      />
    </section>
    <div class="btn-container">
      <NuxtLink to="/offer" class="btn btn--highlight">
        Pełna Oferta
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
  const data = ref()

  onMounted(async () => {
    const { data: res } = await fetch('api/types').then((res) => res.json())
    data.value = res
  })   
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_general.scss';

.products-presented {
  padding: 4rem 1rem;
  background-color: $color-white;

  & > h1 {
    color: $color-primary;
  }

  &__items {
    margin: 1.6rem 0rem 2rem 0rem;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }

  .btn-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%
  }
}


@media (min-width: 480px) {
  .products-presented {
    &__items {
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
    }
  }
}

@media (min-width: 1024px) {
  .products-presented {
    & > h1 {
      text-align: center;
      padding-bottom: 4rem;
    }
    &__items {
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 1rem;
      margin-bottom: 4rem;
    }
  }
}
@media (min-width: 1440px) {
  .products-presented {
    & > h1 {
      text-align: center;
      padding: 2rem 0 4rem;
    }
  }
}
</style>
