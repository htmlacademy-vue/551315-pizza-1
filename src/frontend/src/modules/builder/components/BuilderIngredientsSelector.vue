<template>
  <div class="content__ingridients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингридиенты</h2>

      <div class="sheet__content ingridients">
        <div class="ingridients__sauce">
          <p>Основной соус:</p>

          <label
            v-for="(item, index) in sauces"
            :key="index"
            class="radio ingridients__input"
            @change="$emit('selectSauce', item)"
          >
            <input type="radio" name="sauce" :value="item.type" />
            <span>{{ item.name }}</span>
          </label>
        </div>

        <div class="ingridients__filling">
          <p>Начинка:</p>

          <ul class="ingridients__list">
            <li
              v-for="(item, index) in ingredients"
              :key="index"
              class="ingridients__item"
            >
              <AppDrag :transfer-data="item" :draggable="item.quantity < 3">
                <span :class="`filling filling--${item.type}`">
                  {{ item.name }}
                </span>
              </AppDrag>

              <ItemCounter
                :maxCount="3"
                @change="setSelectedIngredients($event, item)"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { normalizeDataItem } from "@/common/helpers";
import { PIZZA_INGREDIENTS, PIZZA_SAUCES } from "@/common/constants";
import ItemCounter from "@/common/components/ItemCounter";
import AppDrag from "@/common/components/AppDrag";

export default {
  name: "BuilderIngredientsSelector",
  props: {
    pizza: {
      type: Object,
      required: true,
    },
    selectSauce: {
      type: Function,
    },
    selectIngredients: {
      type: Function,
    },
  },
  data() {
    return {
      sauces: this.pizza.sauces.map((sauce) =>
        normalizeDataItem(sauce, PIZZA_SAUCES, "id")
      ),
      ingredients: this.pizza.ingredients.map((ingredient) =>
        normalizeDataItem(ingredient, PIZZA_INGREDIENTS, "id")
      ),
      selectedIngredients: [],
    };
  },
  components: {
    ItemCounter,
    AppDrag,
  },
  methods: {
    setSelectedIngredients(quantity, ingredient) {
      const ingredientIndex = this.selectedIngredients.findIndex(
        (item) => item.id === ingredient.id
      );
      if (ingredientIndex !== -1) {
        this.selectedIngredients[ingredientIndex].quantity = quantity;
      } else {
        ingredient.quantity = quantity;
        this.selectedIngredients.push(ingredient);
      }
      this.selectedIngredients = this.selectedIngredients.filter(
        (item) => item.quantity !== 0
      );
      this.$emit("selectIngredients", this.selectedIngredients);
    },
  },
};
</script>
