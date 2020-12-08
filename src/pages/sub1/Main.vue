<template>
  <div>
    <p>hello world</p>
    <button @click="callApi">Call API</button>
    <ul>
      <li v-for="m in msg" v-bind:key="m">
        {{m}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  // name: 'Main',
  methods: {
    callApi() {
      const now = new Date().getTime();
      console.log('call api');
      this.msg.push(now);
    },
  },
  data() {
    return {
      msg: [],
    };
  },
};
</script>

<style>
</style>
