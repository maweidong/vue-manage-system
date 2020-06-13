<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#33afe0"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>

      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="item.path" v-for="item in asideMenu" :key="item.path">
      <i :class="'el-icon-' +item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  computed:{
    noChildren(){
      return this.a
      sideMenu.filter(item=>!item.childern)
    }

  },
  data() {
    return {
      asideMenu: [
        {
          path: "/",
          label: "首页",
          icon: "home",
        },
        {
          path: "/video",
          label: "视频管理",
          icon: "video-play",
        },
        {
          path: "/user",
          label: "用户管理",
          icon: "user",
        },
        {
          label: "其他",
          icon: "user",
          childern: [
            {
              path: "/page1",
              label: "页面1",
              icon: "setting",
            },
            {
              path: "/page2",
              label: "页面2",
              icon: "setting",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
}
</style>
