<template>
<div class="container">
  <div class="sidebar">
    <ul class="dropdown">
      <li :class="{active: show === 'home'}">
        <a @click="show = 'home'" v-link="'/home/article'"><i class="fa fa-cubes"></i><span>&nbsp;&nbsp;Article</span></a>
      </li>
      <li :class="{active: show === 'topic'}">
        <a @click="show = 'topic'" v-link="'/topic/topic_article'"><i class="fa fa-cube"></i><span>&nbsp;&nbsp;Topic</span></a>
      </li>
      <li :class="{active: show === 'download'}">
        <a @click="show = 'download'" v-link="'/download'"><i class="fa fa-life-bouy"></i><span>&nbsp;&nbsp;Download App</span></a>
      </li>

      <li :class="{active: show === 'module'}">
        <a @click="show = 'module'" v-link="'/module'"><i class="fa fa-cubes"></i><span>&nbsp;Module Manage</span></a>
      </li>
      <li :class="{active: show === 'menu'}">
        <a @click="show = 'menu'" v-link="'/menu'"><i class="fa fa-cube"></i><span>&nbsp;&nbsp;Menu Manage</span></a>
      </li>
      <li :class="{active: show === 'route'}">
        <a @click="show = 'route'" v-link="'/route'"><i class="fa fa-life-bouy"></i><span>&nbsp;&nbsp;Route Manage</span></a>
      </li>
      <li :class="{active: show === 'auth'}">
        <a @click="show = 'auth'" v-link="'/auth'"><i class="fa fa-legal"></i><span>&nbsp;&nbsp;Auth Manage</span></a>
      </li>
      <li :class="{active: show === 'role'}">
        <a @click="show = 'role'" v-link="'/role'"><i class="fa fa-github-alt"></i><span>&nbsp;&nbsp;Role Manage</span></a>
      </li>
      <li :class="{active: show === 'user'}">
        <a @click="show = 'user'" v-link="'/user'"><i class="fa fa-database"></i><span>&nbsp;&nbsp;User Manage</span></a>
      </li>
    </ul>
    <ul class="nav-user">
      <li><a href="#"><i class="fa fa-font"></i><span>&nbsp;&nbsp;View Mode</span></a></li>
      <li><a v-link="'/login'"><i class="fa fa-sign-in"></i><span>&nbsp;&nbsp;Login</span></a></li>
    </ul>
  </div>
  <div class="home">
    <router-view transition = 'display' transition-mode = 'out-in'></router-view>
  </div>
  <div class="rightbar">
    <nav>
      <a v-link="'/login'" @click="changeLogin('login')"><i class="fa fa-sign-in"></i>Login</a>
      <a v-link="'/login'" @click="changeLogin('register')"><i class="fa fa-user"></i>Register</a>
    </nav>
  </div>
</div>
</template>
<style scoped>
  .display-transition{
  transition: all 0.5s;
  }
  .display-leave{
  opacity: 0;
  transform: translateX(50px);
  }
  .display-enter{
    opacity: 1;
  }
  .container{
    height: 100%;
  }
  .dropdown .active{
    background-color: #e78170;
  }
  .dropdown .active a{
    color: #ffffff;
  }
  @media screen and (max-width: 1100px){
    .home{
      width: calc(100% - 80px);
      margin-right: 0;
    }
  }
  @media screen and (max-width: 1300px){
    .home{
      width: calc(100% - 240px);
      margin-left: 40px;
    }
    .nav-user li{
        width: 40px;
        height: 30px;
        overflow: hidden;
    }
    .sidebar{
      transition: all 0.5s;
      width: 40px;
      overflow: hidden;
    }
    .sidebar li{
      padding: 20px 0;
    }
    .sidebar li a{
      padding: 0 auto;
      margin:0 auto;
    }
    .sidebar i{
      font-size: 30px;
    }
    .sidebar .fa-mobile{
      margin-right: 8px;
      font-size: 50px;
    }
  }
</style>
<script>
import store from './vuex/store'
import { changeLogin } from './vuex/actions'

export default {
  store,
  data () {
    return {
      show:'home'
    }
  },
  vuex:{
    actions:{
      changeLogin
    }
  }

}
</script>
