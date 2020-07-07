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
          @click.native.stop="handleSelectWidget(index)"
        >
          <form-element
            v-model="modelValue[item.prop || item.key]"
            :renderConfig="item.renderConfig"
            :type="item.type">
          </form-element>

          <div class="widget-view-action" v-if="selectWidget.prop == item.prop">
            <svg-icon icon-class="clone" class="icon-icon_clone" @click.stop="handleWidgetClone(index)"></svg-icon>
            <svg-icon icon-class="delete" class="icon-trash" @click.stop="handleWidgetDelete(index)"></svg-icon>
          </div>

          <div class="widget-view-drag" v-if="selectWidget.prop == item.prop">
            <svg-icon icon-class="move" class="icon-drag drag-widget" @click.stop="handleWidgetDelete(index)"></svg-icon>
          </div>
        </el-form-item>
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
    },
    select: {
      type: Object
    }
  },
  data () {
    return {
      drag: false,
      dialogFormVisible: false,
      dialogJSONVisible: false,
      dialogFormDataVisible: false,
      selectWidget: this.select
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
    },
    handleSelectWidget (index) {
      // this.selectWidget = this.data.list[index]
    },
    handleWidgetDelete (index) {
      // if (this.data.list.length - 1 === index) {
      //   if (index === 0) {
      //     this.selectWidget = {}
      //   } else {
      //     this.selectWidget = this.data.list[index - 1]
      //   }
      // } else {
      //   this.selectWidget = this.data.list[index + 1]
      // }

      // this.$nextTick(() => {
      //   this.data.list.splice(index, 1)
      // })
    },
    handleWidgetClone (index) {
      // let cloneData = {
      //   ...this.data.list[index],
      //   options: {...this.data.list[index].options},
      //   key: Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999)
      // }

      // if (this.data.list[index].type === 'radio' || this.data.list[index].type === 'checkbox' || this.data.list[index].type === 'select') {

      //   cloneData = {
      //     ...cloneData,
      //     options: {
      //       ...cloneData.options,
      //       options: cloneData.options.options.map(item => ({...item}))
      //     }
      //   }
      // }

      // this.data.list.splice(index, 0, cloneData)

      // this.$nextTick(() => {
      //   this.selectWidget = this.data.list[index + 1]
      // })
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
