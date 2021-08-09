/**新闻 */
<style>
  .newsBlock{
    position: absolute;
    top: 260px;
    left: 10px;
    background-color: white;
    display: block;
    width: 30%;
    height: 60%;
    border-radius: 5%;
    animation: newsBlockMove 1s;
    overflow-y: auto;
  }
  .newsTitle{
      position:absolute;
      left:30px;
      font-size:30px;
      color:rgb(159, 214, 240);
      border-bottom: 1px black solid;
  }
  .cc{
    position:relative;
    top:40px;
    width:100%;
    height:60px;
    border: 1px black solid;
    /* border-top-radius: 5%; */
    border-top-left-radius: 10px;
  }

  @keyframes newsBlockMove {
    from {
        top: 260px;
        left:-60%;
    }
    to {
        color: #fff;
        top: 260px;
        left:10px;
    }
  }
</style>
<template>
    <div class="newsBlock">
      <span class="newsTitle"><a href="#">News</a></span>
      <div v-for="(item,i) in list" class="cc" :key="i">{{i}}</div>
    </div>
</template>
<script>
export default{
  data: function () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }
}
</script>
