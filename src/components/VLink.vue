<style>
  @import "../assets/css/vlink.css";
</style>
<template>
  <a
    v-bind:href="href"
    v-bind:class="{ active: isActive }"
    v-on:click="go"
  >
    <slot></slot>
  </a>
</template>

<script src="../assets/js/vlink.js"></script>
