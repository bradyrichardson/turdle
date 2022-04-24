<template>
  <div class="turdle-view">
    <h1>Turdle&#128034;</h1>
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
