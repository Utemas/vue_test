<style>
.mainblock{
  position: absolute;
  top: 15%;
  left: 25%;
  width: 50%;
  height: 50%;
  background-color: white;
  border: white 1px solid;
}
.input-lng{
  width:240px;
  height: 30px;
  font-size: 15px;
}
.login-block{
  text-align:center
}
.login-input-block{
  margin:30px
}
.login-commit{
  display: inline-block;
  text-decoration: none;
  color: white;
  background-color: cadetblue;
  width: 280px;
  height: 40px;
}
.regist-link{
  text-decoration: none;
}
</style>
<template>
  <div>
    <ReturnLink/>
    <div class="mainblock">
      <form>
        <div class="login-block">
          <div><img src="@/assets/logo.png"/></div>
          <div class="login-input-block">
            <label>登录:</label><input type="text" class="input-lng"/><br/>
          </div>
          <div class="login-input-block">
            <label>密码:</label><input type="password" class="input-lng"/><br/>
          </div>
          <div class="login-input-block">
            <a href="javascript:void(0);" class='login-commit' @click="subToLogin"><span style="padding 0px 40px 0px 40px">提交</span></a>
          </div>
        </div>
        <a href="#" class="regist-link">没有账号？</a>
      </form>
    </div>
  </div>
</template>
<script>
import ReturnLink from '@/components/ReturnLink'
export default{
  components: {
    ReturnLink
  },
  data: function () {
    return {
      name: ''
    }
  },
  methods: {
    subToLogin: function () {
      let that = this
      this.name = that.setCookie('setCookie', 'ssss', 360)
      window.console.log('Yes')
    }
  }
}
</script>
