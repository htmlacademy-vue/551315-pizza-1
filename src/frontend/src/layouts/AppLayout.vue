<template>
  <div>
    <AppLayoutHeader />
    <IndexHome />
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
import IndexHome from "@/views/Index.vue";

export default {
  name: "AppLayout",
  components: {
    AppLayoutHeader,
    IndexHome,
  },
};
</script>
