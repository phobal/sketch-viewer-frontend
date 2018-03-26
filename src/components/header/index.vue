<template>
  <header>
    <p class="sv-title">
      <img
        width="36px"
        height="36px"
        @click="click"
        style="padding-right: 20px; box-sizing: content-box; cursor: pointer"
        src="../../assets/Sketch_logo_frame.svg.png" >
      {{ title }}
    </p>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      title: '设计稿管理平台',
    };
  },
  methods: {
    click() {
      this.$router.push('/');
    },
  },
};
</script>

<style>
@import './index.css';
</style>
