<template>
  <div class="model-container">
    <draggable
      v-model="formItem"
      :group="{ name: 'people', pull: 'clone', put: false }"
      :sort="false"
      ghostClass='ghost'
      @start="drag=true"
      @end="drag=false"
      :move="handleMove">
      <div v-for="element in formItem" :key="element.prop">{{element.label}}</div>
    </draggable>
  </div>
</template>

<script>
import Draggable from "vuedraggable"

export default {
  name: "formModel",
  components: {
    Draggable
  },
  data () {
    return {
      drag: false,
      formItem: [
        {
          type: "input",
          prop: "input_" + new Date().getTime(),
          label: "单行输入框",
          renderConfig: {
            defaultValue: ''
          }
        },
        {
          type: "select",
          prop: "select_" + new Date().getTime(),
          label: "下拉选择",
          renderConfig: {
            defaultValue: '',
            options: [
              { label: '北京', value: 'beijing' },
              { label: '上海', value: 'shanghai' }
            ]
          }
        },
        {
          type: 'radio',
          label: '单选框',
          prop: 'radio_' + new Date().getTime(),
          renderConfig: {
            defaultValue: '',
            options: [
              { label: '高', value: 1 },
              { label: '中', value: 2 },
              { label: '低', value: 3 }
            ]
          }
        },
        {
          type: 'checkbox',
          label: '多选框',
          prop: 'checkbox_' + new Date().getTime(),
          renderConfig: {
            defaultValue: [],
            options: [
              { label: '美食/餐厅线上活动', value: '美食/餐厅线上活动' },
              { label: '地推活动', value: '地推活动' },
              { label: '线下主题活动', value: '线下主题活动' }
            ]
          }
        },
        {
          type: "custom",
          label: "switch切换",
          prop: "switch_" + new Date().getTime(),
          renderConfig: {
            defaultValue: false,
            name: "ElSwitch"
          }
        },
        {
          type: "custom",
          label: "customInput",
          prop: "customInput_" + new Date().getTime(),
          renderConfig: {
            name: "ElInput"
          }
        }
      ]
    }
  },
  methods: {
    handleMove () {
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
  .model-container {

  }
</style>
