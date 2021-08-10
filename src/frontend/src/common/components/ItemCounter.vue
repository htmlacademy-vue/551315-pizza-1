<template>
  <div class="counter counter--orange ingridients__counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :class="{ 'counter__button--disabled': quantity <= 0 }"
      :disabled="quantity <= 0"
      @click="minusClick"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="quantity"
      disabled
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      :class="{ 'counter__button--disabled': quantity >= maxCount }"
      :disabled="quantity >= maxCount"
      @click="plusClick"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ItemCounter",
  props: {
    maxCount: {
      type: Number,
    },
    change: {
      type: Function,
    },
  },
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    plusClick() {
      this.quantity = this.quantity + 1;
      this.$emit("change", this.quantity);
    },
    minusClick() {
      this.quantity = this.quantity - 1;
      this.$emit("change", this.quantity);
    },
  },
};
</script>
