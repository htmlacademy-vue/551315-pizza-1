<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <label
          v-for="(item, index) in sizes"
          :key="index"
          class="diameter__input"
          :class="`diameter__input--${item.size}`"
          @change="$emit('selectSize', item)"
        >
          <input
            type="radio"
            name="diameter"
            class="visually-hidden"
            :value="item.size"
          />
          <span>{{ item.name }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { normalizeDataItem } from "@/common/helpers";
import { PIZZA_SIZES } from "@/common/constants";

export default {
  name: "BuilderSizeSelector",
  props: {
    pizza: {
      type: Object,
      required: true,
    },
    selectSize: {
      type: Function,
    },
  },
  data() {
    return {
      sizes: this.pizza.sizes.map((size) =>
        normalizeDataItem(size, PIZZA_SIZES, "id")
      ),
    };
  },
};
</script>
