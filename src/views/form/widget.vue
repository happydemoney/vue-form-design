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
        @end="handleWidgetEnd"
        @add="handleWidgetAdd">
        <el-form-item
          v-for="(item, index) in widgetConfig.formItems"
          :key="index"
          :prop="item.prop || item.key"
          :label-width="item.renderConfig.labelWidth ? item.renderConfig.labelWidth + 'px': undefined"
          :columns="item.renderConfig.columns || widgetConfig.formConfig.columns"
          @click.native.stop="handleSelectWidget(index)"
          class="widget-view"
          :class="formItemClass(item.renderConfig.columns || widgetConfig.formConfig.columns)"
        >
          <template slot="label">
            {{ item.label }}
            <el-tooltip
              v-if="item.renderConfig.labelTips"
              :placement="item.renderConfig.labelTips.placement || 'top'"
              :effect="item.renderConfig.labelTips.effect">
              <i class="el-icon-question"></i>
              <div slot="content" v-html="item.renderConfig.labelTips.content || item.renderConfig.labelTips"></div>
            </el-tooltip>
          </template>
          <form-element
            v-model="modelValue[item.prop || item.key]"
            :renderConfig="item.renderConfig"
            :type="item.type">
          </form-element>

          <div class="widget-view-action" v-if="selectWidget._uniqueKey == item._uniqueKey">
            <!-- <svg-icon icon-class="clone" class="icon-icon_clone" @click.stop="handleWidgetClone(index)"></svg-icon> -->
            <svg-icon icon-class="delete" class="icon-trash" @click.stop="handleWidgetDelete(index)"></svg-icon>
          </div>

          <div class="widget-view-drag" v-if="selectWidget._uniqueKey == item._uniqueKey">
            <svg-icon icon-class="move" class="icon-drag drag-widget"></svg-icon>
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
    activeItemIndex: {
      type: Number,
      default: 0
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
    },
    selectWidget () {
      return this.widgetConfig.formItems[this.activeItemIndex]
    }
  },
  methods: {
    formItemClass (columns) {
      const classMap = {
        1: 'single',
        2: 'two',
        3: 'three',
        4: 'four'
      }
      return classMap[columns] || 'single'
    },
    updateActiveIndex (index) {
      this.$emit('setActiveIndex', index)
    },
    getPropByType (type, _uniqueKey) {
      return type + '_' + _uniqueKey
    },
    handleWidgetAdd (evt) {
      const newIndex = evt.newIndex
      this.updateActiveIndex(newIndex)
      // 生成唯一key
      const _uniqueKey = Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999)
      const propType = this.widgetConfig.formItems[newIndex].type
      const prop = this.getPropByType(propType, _uniqueKey)
      this.$set(this.widgetConfig.formItems, newIndex, {
        ...this.widgetConfig.formItems[newIndex],
        renderConfig: {
          ...this.widgetConfig.formItems[newIndex].renderConfig
        },
        _uniqueKey,
        prop
      })
    },
    handleWidgetEnd (evt) {
      this.updateActiveIndex(evt.newIndex)
    },
    formConfirm () {
      this.dialogFormVisible = false
    },
    viewForm () {
      this.dialogFormVisible = true
    },
    viewJSON () {
      this.dialogJSONVisible = true
    },
    handleSelectWidget (index) {
      this.updateActiveIndex(index)
    },
    handleWidgetDelete (index) {
      this.$emit('deleteItemByIndex', index)
    },
    handleWidgetClone (index) {
      console.log(index)
    }
  }
}
</script>

<style lang="scss" scoped>
  .model-container {
    position: relative;
    .el-form {
      > div {
        display: grid;
        grid-template-columns: repeat(12, minmax(0px, 1fr));
        grid-area: span 1 / span 12;
        gap: 20px;
        align-content: start;
        min-height: 600px;
        .el-form-item {
          grid-area: span 1 / span 12;
          margin-bottom: 0;
          &.single {
            grid-area: span 1 / span 12;
          }
          &.two {
            grid-area: span 1 / span 6;
          }
          &.three {
            grid-area: span 1 / span 4;
          }
          &.four {
            grid-area: span 1 / span 3;
          }
        }
      }
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
