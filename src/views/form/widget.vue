<template>
  <div class="model-container">
    <div class="form-empty" v-if="widgetConfig.formItems.length === 0">从左侧拖拽来添加表单项</div>
    <el-form
      ref="iForm"
      :model="modelValue"
      :columns="widgetConfig.formConfig.columns"
      :label-position="widgetConfig.formConfig.labelPosition"
      :label-width="widgetConfig.formConfig.labelWidth + 'px'"
      :size="widgetConfig.formConfig.size">
      <draggable
        v-model="widgetConfig.formItems"
        group="form"
        ghostClass="ghost"
        animation=200
        handle='.drag-widget'
        @start="drag=true"
        @end="drag=false"
        @add="handleWidgetAdd">
        <el-form-item
          v-for="(item, index) in widgetConfig.formItems"
          :key="index"
          :label="item.label"
          :prop="item.prop || item.key"
          :label-width="item.renderConfig.labelWidth ? item.renderConfig.labelWidth + 'px': undefined"
          :columns="item.renderConfig.columns || widgetConfig.formConfig.columns"
        >
          <form-element
            v-model="modelValue[item.prop || item.key]"
            :renderConfig="item.renderConfig"
            :type="item.type">
          </form-element>
        </el-form-item>
        <template></template>
      </draggable>
    </el-form>
    <!-- dialog form -->
    <el-dialog title="表单预览" :visible.sync="dialogFormVisible">
      <i-form :model="modelValue" :formItems="widgetConfig.formItems" :formAttrs="widgetConfig.formConfig"></i-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormDataVisible = true">获取数据</el-button>
        <el-button type="primary" @click="formConfirm">确 定</el-button>
      </div>
    </el-dialog>
    <!-- dialog form data -->
    <el-dialog title="表单数据" :visible.sync="dialogFormDataVisible">
      <pre style="overflow-y: auto">{{ JSON.stringify(modelValue, null, 4) }}</pre>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormDataVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- dialog JSON -->
    <el-dialog title="JSON预览" :visible.sync="dialogJSONVisible">
      <pre style="height: 400px; overflow-y: auto">{{ JSON.stringify(widgetConfig, null, 4) }}</pre>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogJSONVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogJSONVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Draggable from "vuedraggable"

export default {
  name: "formWidget",
  components: {
    Draggable,
    FormElement: () => import('@/components/form/element')
  },
  props: {
    widgetConfig: {
      type: Object
    }
  },
  data () {
    return {
      drag: false,
      dialogFormVisible: false,
      dialogJSONVisible: false,
      dialogFormDataVisible: false
    }
  },
  computed: {
    modelValue: {
      get () {
        const model = {}
        if (this.widgetConfig.formItems.length > 0) {
          this.widgetConfig.formItems.forEach(item => {
            if (item.renderConfig && item.renderConfig.defaultValue !== undefined) {
              model[item.prop || item.key] = (item.renderConfig && item.renderConfig.defaultValue)
            } else {
              model[item.prop || item.key] = ''
            }
          })
        }
        return model
      },
      set (val) {
        console.log('set: ' + val)
      }
    }
  },
  methods: {
    handleWidgetAdd (evt) {
      console.log(evt.newIndex)
      this.$emit('setActiveIndex', evt.newIndex)
    },
    formConfirm () {
      console.log(this.modelValue)
      this.dialogFormVisible = false
    },
    viewForm () {
      this.dialogFormVisible = true
    },
    viewJSON () {
      this.dialogJSONVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .model-container {
    position: relative;
    .el-form {
      display: grid;
    }
    .form-empty {
      position: absolute;
      text-align: center;
      width: 300px;
      font-size: 20px;
      top: 200px;
      left: 50%;
      margin-left: -150px;
      color: #ccc;
    }
  }
</style>
