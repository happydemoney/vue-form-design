<template>
  <div class="model-container">
    <el-form
      ref="iForm"
      :model="modelValue"
      :columns="widgetConfig.formConfig.columns"
      :label-position="widgetConfig.formConfig.labelPosition"
      :label-width="widgetConfig.formConfig.labelWidth"
      :size="widgetConfig.formConfig.size">
      <draggable
        v-model="widgetConfig.itemList"
        group="people"
        ghostClass="ghost"
        animation=200
        handle='.drag-widget'
        @start="drag=true"
        @end="drag=false"
        @add="handleWidgetAdd">
        <el-form-item
          v-for="(item, index) in widgetConfig.itemList"
          :key="index"
          :label="item.label"
          :prop="item.prop || item.key"
          :label-width="item.renderConfig.labelWidth"
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
      <i-form :model="modelValue" :formItems="widgetConfig.itemList" :formAttrs="widgetConfig.formConfig"></i-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="formConfirm">确 定</el-button>
      </div>
    </el-dialog>
    <!-- dialog JSON -->
    <el-dialog title="JSON预览" :visible.sync="dialogJSONVisible">
      <pre style="height: 500px; overflow-y: auto">{{ JSON.stringify(widgetConfig, null, 4) }}</pre>
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
  data () {
    return {
      drag: false,
      widgetConfig: {
        itemList: [],
        formConfig: {
          columns: 1,
          labelPosition: 'right',
          labelWidth: '100px',
          size: 'small'
        }
      },
      dialogFormVisible: false,
      dialogJSONVisible: false
    }
  },
  computed: {
    modelValue: {
      get () {
        const model = {}
        if (this.widgetConfig.itemList.length > 0) {
          this.widgetConfig.itemList.forEach(item => {
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
    handleWidgetAdd (evt, row, colIndex) {
      console.log(evt, row, colIndex)
    },
    formConfirm () {
      console.log(this.modelValue)
      this.dialogFormVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .model-container {

  }
</style>
