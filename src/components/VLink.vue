<style>
  @import "../assets/css/vlink.css";
</style>
<template>
  <a
    v-bind:href="href"
    v-on:click="go"
  >
    <slot></slot>
  </a>
</template>

<script src="../assets/js/vlink.js"></script>
