<template>
  <HorizontallySplitedPanes>
    <template slot="left">
      <ul>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
      </ul>
    </template>
    <template slot="right">
      <ul>
        <li>right</li>
        <li>right</li>
        <li>right</li>
        <li>right</li>
        <li>right</li>
        <li>right</li>
      </ul>
    </template>
  </HorizontallySplitedPanes>
  <!--
  <Main/>
  -->
</template>

<script>
// import Main from '@/pages/sub1/Main.vue';
import HorizontallySplitedPanes from '@/pages/sub1/HorizontallySplitedPanes.vue';

export default {
  components: {
    // Main,
    HorizontallySplitedPanes,
  },
  methods: {
  },
};
</script>

<style>
</style>
