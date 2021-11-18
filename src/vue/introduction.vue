<style>
@import '../assets/css/common.css';
.loading{
    width:200px;
    height: 200px;
    box-sizing: border-box;
    border-radius: 50%;
    border-top: 10px solid rgb(7, 247, 79);
    position: relative;
    animation: a1 2s linear infinite;
}
.loading::before, .loading::after{
    content: '';
    width: 200px;
    height: 200px;
    position: absolute;
    left: 0;
    top: -10px;
    box-sizing: border-box;
    border-radius: 50%;
}

.loading::before{
    border-top: 10px solid rgb(100, 75, 247);
    transform: rotate(120deg);
}

.loading::after{
    border-top: 10px solid rgb(238, 53, 53);
    transform: rotate(240deg);
}
.loading span{
    position: absolute;
    width: 200px;
    height: 200px;
    color: #fff;
    text-align: center;
    line-height: 200px;
    animation: a2 2s linear infinite;
}

.bottomButton{
    position: absolute;
    bottom: 20px;
    right: 0px;
    color:white;
    text-transform: uppercase;
    padding: 1rem 3rem;
    font-size: 1.5rem;
    text-decoration: none;
    overflow: hidden;
}

.bottomButton a{
    text-decoration: none;
    color:white;
}

.bottomButton:hover{
    cursor: pointer;
    /* box-shadow: 1px 1px 25px 10px rgba(42,149,211,0.4); */
}
.bottomButton::before{
    content: '';
    position: absolute;
    top: 0px;
    left: -100px;
    width: 100px;
    height: 100px;
    background: linear-gradient(
        120deg,
        transparent,
        rgba(45,241,193,0.4),
        transparent
    );
    transition: all 650ms;
}
.bottomButton:hover::before{
    left: 100%;
}

.title{
    position:absolute;
    top:50px;
    font-size:40px;
    animation: mymove 3s;
    left:10px;
}
.title span{
    font-family:cursive;
    font-style:italic;
}

.color-white{
    color:white;
}

.tip{
    font-size: 20px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    animation: move1 3s;
}

@keyframes mymove {
    from {
        top: 0px;
        left:10px;
        color:rgba(31, 30, 30, 0.932);
    }
    to {
        color: #fff;
        top: 50px;
        left:10px;
    }
}

@keyframes move1 {
    from {
        bottom: 0px;
        left:10px;
        color:rgba(31, 30, 30, 0.932);
    }
    to {
        color: #fff;
        bottom: 10px;
        left:10px;
    }
}
@keyframes a1 {
    to{
        transform: rotate(360deg);
    }
}

@keyframes a2 {
    to{
        transform: rotate(-360deg);
    }
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar{
    width: 7px;
    height: 7px;
    background-color: #F5F5F5;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb{
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);
    background-color: #c8c8c8;
  }
  .function-block{
      position:relative;
      width:350px;
      height:100px;
      background-color:white;
      left:-20%;
      top:80px;
      display:inline-flex;
  }
  .img-size{
      width:100%;
      height: 100%;
  }
  .each-block{
      background-color:black;
      width:33.3%;
      height:100%;
  }
</style>
<template>
    <div>
        <div class="title color-white">
            <span>Welcome&nbsp;<span><a href="#">{{name}}</a></span></span>
            <p>This is a Synthetical System, click 'Skip' to start.</p>
        </div>
        <newsBlock/>
        <memorandum v-if="name != undefined && name.length > 1"/>
        <!--<div class="" style="width:30px;height:40px;border:1px black solid;"></div>-->
        <div><router-link class="color-white" to="/email"><p class="color-white tip">Tip: You can ask to Manager by this link.</p></router-link></div>
        <div class="loading"></div>
        <div class="function-block">
            <div class="each-block"><router-link :to="link1"><img class="img-size" src="@/assets/database.png"/></router-link></div>
            <div class="each-block"><router-link :to="link2"><img class="img-size" src="@/assets/notes.png"/></router-link></div>
            <div class="each-block"><router-link :to="link3"><img class="img-size" src="@/assets/search.png"/></router-link></div>
        </div>
        <div v-if="name != undefined && name.length > 1" class="bottomButton"><router-link to="/main">SKIP>></router-link></div>
        <div v-if="name != undefined && name.length == 0" class="bottomButton"><router-link to="/login">SKIP>></router-link></div>
    </div>
</template>
<script>
import NewsBlock from '@/components/NewsBlock'
import memorandum from '@/components/Memorandum'
import router from '../router'
export default{
  components: {
    NewsBlock,
    memorandum
  },
  router,
  data: function () {
    return {
      info: '',
      name: '',
      link1: '/login',
      link2: '/login',
      link3: '/search'
    }
  },
  mounted () {
    // let that = this
    // this.name = that.getCookie('setCookie')
    // this.$axios.get('http://localhost:8080/hello').then(response => (this.info = response))
    if (this.name !== undefined && this.name.length > 1) {
      this.link1 = '/database'
      this.link2 = '/notes'
    }
  }
}
</script>
