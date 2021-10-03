<style>
.mainblock{
  position: absolute;
  top:65px;
  left: 10px;
  width: 98%;
  height: 90%;
  background-color: white;
  border: white 1px solid;
}
</style>
<template>
  <div>
    <ReturnLink/>
    <div class="mainblock"></div>
  </div>
</template>
<script>
import ReturnLink from '@/components/ReturnLink'
export default{
  components: {
    ReturnLink
  }
}
</script>
