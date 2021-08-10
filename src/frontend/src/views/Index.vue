<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <BuilderDoughSelector
          :pizza="pizza"
          @selectDough="selectDough = $event"
        />

        <BuilderSizeSelector :pizza="pizza" @selectSize="selectSize = $event" />

        <BuilderIngredientsSelector
          :pizza="pizza"
          @selectSauce="selectSauce = $event"
          @selectIngredients="selectIngredients = $event"
        />

        <div class="content__pizza">
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input
              type="text"
              name="pizza_name"
              placeholder="Введите название пиццы"
            />
          </label>

          <BuilderPizzaView @selectIngredients="selectIngredients = $event" />

          <div class="content__result">
            <BuilderPriceCounter
              :dough="selectDough"
              :sauce="selectSauce"
              :ingredients="selectIngredients"
            />
            <button type="button" class="button button--disabled" disabled>
              Готовьте!
            </button>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import misc from "@/static/misc.json";
import pizza from "@/static/pizza.json";
import user from "@/static/user.json";

import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";
import BuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter";

export default {
  name: "IndexHome",
  data() {
    return {
      misc,
      pizza,
      user,
      selectDough: {},
      selectSize: {},
      selectSauce: {},
      selectIngredients: [],
    };
  },
  components: {
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderPizzaView,
    BuilderPriceCounter,
  },
};
</script>
