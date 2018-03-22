<template>
  <div class="sv-container">
    <div class="content">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
};
</script>

<style>
  @import "./index.css";
</style>
