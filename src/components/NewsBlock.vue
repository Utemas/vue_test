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
  .newTitles{
    color: rgb(86, 141, 141);
    text-decoration: none;
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
      <div></div>
      <div v-for="(item,index) in list" class="cc" :key="index"><router-link class="newTitles" to="/email">{{item.title}}</router-link><br/><span style="margin:40px">{{item.brf}}</span></div>
    </div>
</template>
<script>
export default{
  data: function () {
    return {
      list: [
        {index: 1, title: '新闻1', brf: '这个是新闻1的简介'},
        {index: 2, title: '新闻2', brf: '这个是简介'},
        {index: 3, title: '新闻3', brf: '这个是简介'},
        {index: 4, title: '新闻4', brf: '这个是简介'},
        {index: 5, title: '新闻5', brf: '这个是简介'},
        {index: 6, title: '新闻6', brf: '这个是简介'},
        {index: 7, title: '新闻7', brf: '这个是简介'},
        {index: 8, title: '新闻8', brf: '这个是简介'},
        {index: 1, title: '新闻9', brf: '这个是简介'},
        {index: 1, title: '新闻10', brf: '这个是简介'}
      ]
    }
  }
}
</script>
