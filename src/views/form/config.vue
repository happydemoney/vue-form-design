<template>
  <el-tabs type="border-card" :stretch=true>
    <el-tab-pane label="表单项属性">
      <!-- 字段标识 -->
      <div class="config-item" v-if="itemConfig.prop !== undefined">
        <label>字段标识: </label>
        <el-input v-model="itemConfig.prop"/>
      </div>
      <!-- label -->
      <div class="config-item" v-if="itemConfig.label !== undefined">
        <label>标签名: </label>
        <el-input v-model="itemConfig.label"/>
      </div>
    </el-tab-pane>
    <el-tab-pane label="表单属性">
      <div class="config-item">
        <label>标签对齐方式: </label>
        <el-radio-group v-model="formConfig.labelPosition" size="small">
          <el-radio-button label="left">左对齐</el-radio-button>
          <el-radio-button label="right">右对齐</el-radio-button>
          <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group>
      </div>
      <div class="config-item">
        <label>标签宽度: </label>
        <el-input-number v-model.number="formConfig.labelWidth" :step="10" :min="0" :max="200"></el-input-number>
      </div>
      <div class="config-item">
        <label>组件尺寸: </label>
        <el-radio-group v-model="formConfig.size" size="small">
          <el-radio-button label="medium">中等</el-radio-button>
          <el-radio-button label="small">小</el-radio-button>
          <el-radio-button label="mini">迷你</el-radio-button>
        </el-radio-group>
      </div>
      <div class="config-item">
        <label>元素布局: </label>
        <el-radio-group v-model="formConfig.columns" size="small">
          <el-radio-button :label="1">整行</el-radio-button>
          <el-radio-button :label="2">二等分</el-radio-button>
          <el-radio-button :label="3">三等分</el-radio-button>
          <el-radio-button :label="4">四等分</el-radio-button>
        </el-radio-group>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'formConfig',
  props: {
    itemConfig: {
      type: Object,
      default: function () {
        return {}
      }
    },
    formConfig: {
      type: Object,
      default: function () {
        return {
          columns: 1,
          labelPosition: 'right',
          labelWidth: 100,
          size: 'small'
        }
      }
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .el-tabs {
    height: 100%;
    box-sizing: border-box;
  }
  .config-item {
    margin-bottom: 16px;
    border-bottom: 1px solid #e1e1e1;
    padding-bottom: 8px;
    > label {
      display: block;
      margin-bottom: 8px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>