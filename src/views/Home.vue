<template>
  <el-container>
    <el-header class="header" style="height: 50px;">
      <svg-icon icon-class="form" class="form-icon"></svg-icon>
      <span>Vue Form Design</span>
    </el-header>
    <el-container class="main" direction="horizontal">
      <el-aside class="model">
        <form-model></form-model>
      </el-aside>
      <el-container>
        <el-header class="handle">
          <el-button-group>
            <el-button type="primary" @click="viewForm">查看表单</el-button>
            <el-button type="primary" @click="viewJSON">查看JSON</el-button>
          </el-button-group>
        </el-header>
        <el-main class="widget">
          <form-widget ref="formWidget" :widgetConfig="widgetConfig" @setActiveIndex="setActiveIndex" select.async="widgetConfig.formItems[activeItemIndex]"></form-widget>
        </el-main>
      </el-container>
      <el-aside width="300px">
        <form-config :itemConfig="widgetConfig.formItems[activeItemIndex]" :formConfig="widgetConfig.formConfig"></form-config>
      </el-aside>
    </el-container>
    <el-footer style="height: 30px;" class="footer">
      Power By<a target="_blank" style="margin-left: 8px;" href="https://github.com/happydemoney/vue-form-design">vue-form-design</a>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  components: {
    formModel: () => import("./form/model.vue"),
    formWidget: () => import("./form/widget.vue"),
    formConfig: ()=> import("./form/config.vue")
  },
  data () {
    return {
      widgetConfig: {
        formItems: [],
        formConfig: {
          columns: 1,
          labelPosition: 'right',
          labelWidth: 100,
          size: 'small'
        }
      },
      activeItemIndex: 0
    }
  },
  methods: {
    setActiveIndex (index) {
      this.activeItemIndex = index
    },
    viewForm () {
      this.$refs.formWidget.viewForm()
    },
    viewJSON () {
      this.$refs.formWidget.viewJSON()
    }
  }
};
</script>

<style lang="scss" scoped>
  .el-header {
    display: flex;
    align-items: center;
    &.header {
      background-color: #1296db;
      > span {
        color: #fff;
      }
    }
  }
  .model {
    width: 250px;
    border-right: 1px solid #e4e7ed;
    box-sizing: border-box;
  }
  .form-icon {
    font-size: 18px;
    color: #fff;
    margin-right: 8px;
  }
  .main {
    height: calc(100% - 90px);
    .handle {
      justify-content: flex-end;
      height: 40px !important;
      border-bottom: 1px solid #e4e7ed;
    }
    .widget {
      background-color: rgb(250, 250, 250);
    }
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: #fafafa;
    font-size: 12px;
    color: #409eff;
  }
</style>
