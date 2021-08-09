/*备忘*/
<style>
  .tipsBlock{
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: white;
    display: block;
    width: 30%;
    height: 30%;
    border-radius: 5%;
    animation: tipsBlockMove 1s;
  }
  .tipsTitle{
      position:absolute;
      left:30px;
      font-size:30px;
      color:rgb(159, 214, 240);
      border-bottom: 1px black solid;
  }

  @keyframes tipsBlockMove {
    from {
        top: -30%;
    }
    to {
        color: #fff;
        top: 20px;
    }
  }
</style>
<template>
    <div class="tipsBlock">
      <span class="tipsTitle"><a href="#">Tips</a></span>
      <div v-for="(item,i) in list" :key="i">{{i}}</div>
    </div>
</template>
<script>
export default{
  data: function () {
    return {
      list: [1, 9, 10]
    }
  }
}
</script>
