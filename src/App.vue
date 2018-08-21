<template>
  <div id="app">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import VueTooltip from './app/shared/components/VueTooltip/VueTooltip.vue';
import VueBadge from './app/shared/components/VueBadge/VueBadge.vue';

Vue.component('VueBadge', VueBadge);

@Component({
  components: {
    VueTooltip,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
