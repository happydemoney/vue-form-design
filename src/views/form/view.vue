<template>
  <i-form :model="model" :formItems="formItems" :formAttrs="formAttrs"></i-form>
</template>

<script>
import Draggable from "vuedraggable"

export default {
  name: "formWidget",
  components: {
    Draggable
  },
  data () {
    return {
      model: {
        address: 'beijing',
        name: "",
        delivery: false,
        desc: "",
        priority: 1,
        type: []
      },
      formAttrs: {
        labelPosition: "right",
        labelWidth: "100px",
        columns: 1
      },
      formItems: [
        {
          type: "select",
          prop: "address",
          label: "活动地点",
          renderConfig: {
            options: [
              { label: '北京', value: 'beijing' },
              { label: '上海', value: 'shanghai' }
            ]
          }
        },
        {
          type: "custom",
          label: "活动名称",
          prop: "name",
          renderConfig: {
            name: "ElInput"
          }
        },
        {
          type: "custom",
          label: "即时配送",
          prop: "delivery",
          renderConfig: {
            name: "ElSwitch"
          }
        },
        {
          type: "custom",
          label: "活动形式",
          prop: "desc",
          renderConfig: {
            name: "ElInput",
            subType: "textarea"
          }
        },
        {
          type: 'radio',
          label: '优先级',
          prop: 'priority',
          renderConfig: {
            options: [
              { label: '高', value: 1 },
              { label: '中', value: 2 },
              { label: '低', value: 3 }
            ]
          }
        },
        {
          type: 'checkbox',
          label: '活动性质',
          prop: 'type',
          renderConfig: {
            options: [
              { label: '美食/餐厅线上活动', value: '美食/餐厅线上活动' },
              { label: '地推活动', value: '地推活动' },
              { label: '线下主题活动', value: '线下主题活动' }
            ]
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .model-container {

  }
</style>