<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <label
          v-for="(item, index) in dough"
          :key="index"
          class="dough__input"
          :class="`dough__input--${item.type}`"
          @change="$emit('selectDough', item)"
        >
          <input
            type="radio"
            name="dough"
            class="visually-hidden"
            :value="item.type"
            :checked="index === 0"
          />
          <b>{{ item.name }}</b>
          <span>{{ item.description }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { normalizeDataItem } from "@/common/helpers";
import { PIZZA_DOUGH_TYPE } from "@/common/constants";

export default {
  name: "BuilderDoughSelector",
  props: {
    pizza: {
      type: Object,
      required: true,
    },
    selectDough: {
      type: Function,
    },
  },
  data() {
    return {
      dough: this.pizza.dough.map((item) =>
        normalizeDataItem(item, PIZZA_DOUGH_TYPE, "id")
      ),
    };
  },
  mounted() {
    this.$emit("selectDough", this.dough[0]);
  },
};
</script>
