<template>
  <AppDrop @drop="onDrop">
    <div class="content__constructor">
      <div
        :class="`pizza pizza--foundation--${dough.pizzaViewType}-${sauce.type}`"
      >
        <div class="pizza__wrapper">
          <div
            v-for="(ingredientDiv, index) in ingredientsDivs"
            :key="index"
            :class="`pizza__filling ${ingredientDiv.name} ${ingredientDiv.quantityAlias}`"
          ></div>
        </div>
      </div>
    </div>
  </AppDrop>
</template>

<script>
import AppDrop from "@/common/components/AppDrop";

export default {
  name: "BuilderPizzaView",
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
    selectIngredients: {
      type: Function,
    },
  },
  components: {
    AppDrop,
  },
  methods: {
    onDrop(ingredient) {
      this.$emit("selectIngredients", ingredient);
    },
    getQuantityAlias(quantity) {
      switch (quantity) {
        case 2:
          return "pizza__filling--second";
        case 3:
          return "pizza__filling--third";
        default:
          return "";
      }
    },
  },
  computed: {
    ingredientsDivs() {
      const result = [];
      this.ingredients.forEach((ingredient) => {
        for (let i = 0; i < ingredient.quantity; i++) {
          result.push({
            name: `pizza__filling--${ingredient.type}`,
            quantityAlias: this.getQuantityAlias(i + 1),
          });
        }
      });
      return result;
    },
  },
};
</script>
