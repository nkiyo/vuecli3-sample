<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="onclick">sub</button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Main',
  components: {
    HelloWorld,
  },
  methods: {
    onclick() {
      window.open('sub1.html', 'サブ画面', 'height=200,width=200');
    },
  },
};
</script>

<style>
</style>
