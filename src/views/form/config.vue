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

      <!-- defaultValue -->
      <div class="config-item" v-if="itemConfig.renderConfig && itemConfig.renderConfig.defaultValue !== undefined && canSetDefalutValueList.indexOf(itemConfig.type) > -1">
        <label>默认值: </label>
        <el-input v-if="itemConfig.type=='textarea'" type="textarea" :rows="5" v-model="itemConfig.renderConfig.defaultValue"></el-input>
        <el-input v-if="itemConfig.type=='input'" v-model="itemConfig.renderConfig.defaultValue"></el-input>
        <el-rate v-if="itemConfig.type == 'rate'" style="display:inline-block;vertical-align: middle;" :max="data.renderConfig.max" :allow-half="data.options.allowHalf" v-model="data.options.defaultValue"></el-rate>
        <el-button type="text" v-if="itemConfig.type == 'rate'" style="display:inline-block;vertical-align: middle;margin-left: 10px;" @click="data.options.defaultValue=0">{{$t('fm.actions.clear')}}</el-button>
        <el-color-picker 
          v-if="itemConfig.type == 'color'"
          v-model="itemConfig.renderConfig.defaultValue"
          :show-alpha="itemConfig.renderConfig.showAlpha"
        ></el-color-picker>
        <el-switch v-if="itemConfig.type=='switch'" v-model="itemConfig.renderConfig.defaultValue"></el-switch>
      </div>

      <!-- options -->
      <div class="config-item" v-if="itemConfig.renderConfig && itemConfig.renderConfig.options !== undefined">
        <label>选项: </label>
        <template v-if="itemConfig.type=='radio' || (itemConfig.type=='select' && !itemConfig.renderConfig.multiple)">
          <el-radio-group v-model="itemConfig.renderConfig.defaultValue">
            <draggable
              tag="ul"
              :list="itemConfig.renderConfig.options" 
              v-bind="{group:{ name:'options'}, ghostClass: 'ghost',handle: '.drag-item'}"
              handle=".drag-item">
              <li v-for="(item, index) in itemConfig.renderConfig.options" :key="index" >
                <el-radio
                  :label="item.value" 
                  style="margin-right: 5px;">
                  <el-input style="width: 90px;" size="mini" v-model="item.value"></el-input>
                  <el-input style="width: 90px;" size="mini" v-model="item.label"></el-input>
                  <!-- <input v-model="item.value"/> -->
                </el-radio>
                <svg-icon class="drag-item" icon-class="MoveVertical" style="font-size: 16px; margin: 0 5px;cursor: move;"></svg-icon>
                <el-button @click="handleOptionsRemove(index)" circle plain type="danger" size="mini" icon="el-icon-minus" style="padding: 4px;margin-left: 5px;"></el-button>
              </li>
            </draggable>
          </el-radio-group>
        </template>

        <template v-if="itemConfig.type=='checkbox' || (itemConfig.type=='select' && itemConfig.renderConfig.multiple)">
          <el-checkbox-group v-model="itemConfig.renderConfig.defaultValue">

            <draggable tag="ul" :list="itemConfig.renderConfig.options" 
              v-bind="{group:{ name:'options'}, ghostClass: 'ghost',handle: '.drag-item'}"
              handle=".drag-item"
            >
              <li v-for="(item, index) in itemConfig.renderConfig.options" :key="index" >
                <el-checkbox
                  :label="item.value"
                  style="margin-right: 5px;">
                  <el-input style="width: 90px;" size="mini" v-model="item.value"></el-input>
                  <el-input style="width: 90px;" size="mini" v-model="item.label"></el-input>
                </el-checkbox>
                <svg-icon class="drag-item" icon-class="MoveVertical" style="font-size: 16px; margin: 0 5px;cursor: move;"></svg-icon>
                <el-button @click="handleOptionsRemove(index)" circle plain type="danger" size="mini" icon="el-icon-minus" style="padding: 4px;margin-left: 5px;"></el-button>
              </li>
            </draggable>
          </el-checkbox-group>
        </template>
        <div style="margin-left: 22px;">
          <el-button type="text" @click="handleAddOption">添加选项</el-button>
        </div>
      </div>
      <!-- disabled -->
      <div class="config-item" v-if="itemConfig.renderConfig && itemConfig.renderConfig.disabled !== undefined">
        <label>操作属性: </label>
        <el-checkbox v-model="itemConfig.renderConfig.disabled">禁用</el-checkbox>
      </div>
      <!-- required -->
      <div class="config-item" v-if="itemConfig.renderConfig && itemConfig.renderConfig.required !== undefined">
        <label>校验: </label>
        <el-checkbox v-model="itemConfig.renderConfig.required">必填</el-checkbox>
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
import Draggable from "vuedraggable"

export default {
  name: 'formConfig',
  components: {
    Draggable
  },
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
    return {
      validator: {
        type: null,
        required: null,
        pattern: null,
        range: null,
        length: null
      },
      canSetDefalutValueList: ['textarea', 'input', 'rate', 'color', 'switch']
    }
  },
   watch: {
    // 'itemConfig.renderConfig.isRange': function(val) {
    //   if (typeof val !== 'undefined') {
    //     if (val) {
    //       this.itemConfig.renderConfig.defaultValue = null
    //     } else {
    //       if (Object.keys(this.itemConfig.renderConfig).indexOf('defaultValue')>=0) 
    //         this.itemConfig.renderConfig.defaultValue = ''
    //     }
    //   }
    // },
    'itemConfig.renderConfig.required': function(val) {
      this.validateRequired(val)
    },
    // 'itemConfig.renderConfig.dataType': function (val) {
    //   this.validateDataType(val)
    // },
    // 'itemConfig.renderConfig.pattern': function (val) {
    //   this.valiatePattern(val)
    // },
    // 'data.name': function (val) {
    //   if (this.itemConfig.renderConfig) {
    //     this.validateRequired(this.itemConfig.renderConfig.required)
    //     this.validateDataType(this.itemConfig.renderConfig.dataType)
    //     this.valiatePattern(this.itemConfig.renderConfig.pattern)
    //   }
    // }
  },
  methods: {
    handleOptionsRemove (index) {
      this.itemConfig.renderConfig.options.splice(index, 1)
    },
    handleAddOption () {
      this.itemConfig.renderConfig.options.push({
        value: 'value_' + new Date().getTime(),
        label: 'label_' + new Date().getTime()
      })
    },
    handleSelectMuliple (value) {
      if (value) {
        if (this.itemConfig.renderConfig.defaultValue) {
          this.itemConfig.renderConfig.defaultValue = [this.itemConfig.renderConfig.defaultValue]
        } else {
          this.itemConfig.renderConfig.defaultValue = []
        }
        
      } else {
        if (this.itemConfig.renderConfig.defaultValue.length>0){
          this.itemConfig.renderConfig.defaultValue = this.itemConfig.renderConfig.defaultValue[0]
        } else {
          this.itemConfig.renderConfig.defaultValue = ''
        }
        
      }
    },
    validateRequired (val) {
      if (val) {
        this.validator.required = {required: true, message: `${this.itemConfig.label}必须填写`}
      } else {
        this.validator.required = null
      }
      this.$nextTick(() => {
        this.generateRule()
      })
    },
    generateRule () {
      this.itemConfig.rules = []
      Object.keys(this.validator).forEach(key => {
        if (this.validator[key]) {
          this.itemConfig.rules.push(this.validator[key])
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-tabs {
    height: 100%;
    box-sizing: border-box;
  }
  ul {
    padding-left: 0;
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
