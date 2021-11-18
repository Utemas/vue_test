<style>
.new-note-background{
    background-color: white;
    width: 100%;
    height: 100%;
    display: block;
}
</style>
<template>
  <div class="new-note-background">
      <div id="notebook">
        <section class="main">
          <textarea v-model="content"></textarea>
        </section>
      </div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      content: 'dd'
    }
  }
}
</script>
