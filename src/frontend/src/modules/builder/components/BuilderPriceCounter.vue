<template>
  <p>Итого: {{ price }} ₽</p>
</template>

<script>
export default {
  name: "BuilderPriceCounter",
  props: {
    dough: {
      type: Object,
      required: true,
    },
    sauce: {
      type: Object,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
  },
  computed: {
    price() {
      const doughPrice = this.dough.price || 0;
      const saucePrice = this.sauce.price || 0;
      let ingredientsPrice = 0;
      this.ingredients.forEach((item) => {
        ingredientsPrice = ingredientsPrice + item.price * item.quantity;
      });
      return doughPrice + saucePrice + ingredientsPrice;
    },
  },
};
</script>
