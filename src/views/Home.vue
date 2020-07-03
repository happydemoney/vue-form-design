<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container class="main" direction="horizontal">
      <el-aside width="250px">
        <form-model></form-model>
      </el-aside>
      <el-container>
        <el-header>
          <el-button-group>
            <el-button type="primary" @click="viewForm">查看表单</el-button>
            <el-button type="primary" @click="viewJSON">查看JSON</el-button>
          </el-button-group>
        </el-header>
        <el-main>
          <form-widget ref="formWidget"></form-widget>
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
  },
  methods: {
    viewForm () {
      this.$refs.formWidget.dialogFormVisible = true
    },
    viewJSON () {
      this.$refs.formWidget.dialogJSONVisible = true
    }
  }
};
</script>

<style lang="scss" scoped>
  .main {
    height: calc(100% - 90px);
  }
</style>
