<template>
  <div class="turdle-view">
    <h1>Turdle</h1>
    <TurdleComponent></TurdleComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import TurdleComponent from "@/components/TurdleComponent.vue";

export default {
  name: "TurdleView",
  components: {
    TurdleComponent,
  },
};
</script>
