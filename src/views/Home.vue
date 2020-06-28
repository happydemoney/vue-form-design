<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container class="main" direction="horizontal">
      <el-aside width="250px">
        <form-model></form-model>
      </el-aside>
      <el-container>
        <el-header>form handle</el-header>
        <el-main>
          <form-widget></form-widget>
        </el-main>
      </el-container>
      <el-aside width="300px">form and item config set</el-aside>
    </el-container>
    <el-footer style="height: 30px;">Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  components: {
    formModel: () => import("./form/model.vue"),
    formWidget: () => import("./form/widget.vue")
  },
  data () {
    return {

    }
  }
};
</script>

<style lang="scss" scoped>
  .main {
    height: calc(100% - 90px);
  }
</style>