<template>
  <div class="model-container">
    <p>基础表单项</p>
    <draggable
      v-model="formItem"
      :group="{ name: 'form', pull: 'clone', put: false }"
      :sort="false"
      ghostClass="ghost"
      @start="drag = true"
      @end="drag = false"
      tag="ul"
      :move="handleMove"
      class="form-item-select"
    >
      <li v-for="(item, index) in formItem" :key="index">
        <span>
          <svg-icon :icon-class="item.type" class="icon"></svg-icon>
          {{ typeTextMap[item.type] }}
        </span>
      </li>
    </draggable>
  </div>
</template>

<script>
import Draggable from "vuedraggable";

export default {
  name: "formModel",
  components: {
    Draggable
  },
  data() {
    return {
      drag: false,
      typeTextMap: {
        input: "单行文本框",
        select: "下拉选择框",
        radio: "单选框",
        checkbox: "多选框",
        custom: "自定义"
      },
      formItem: [
        {
          type: "input",
          label: "单行输入框",
          renderConfig: {
            defaultValue: "",
            disabled: false,
            required: false
          }
        },
        {
          type: "select",
          label: "下拉选择",
          renderConfig: {
            defaultValue: "",
            disabled: false,
            required: false,
            options: [
              { label: "label_1", value: "value_1" },
              { label: "label_2", value: "value_2" }
            ]
          }
        },
        {
          type: "radio",
          label: "单选框",
          renderConfig: {
            defaultValue: "",
            disabled: false,
            required: false,
            options: [
              { label: "label_1", value: "value_1" },
              { label: "label_2", value: "value_2" }
            ]
          }
        },
        {
          type: "checkbox",
          label: "多选框",
          renderConfig: {
            defaultValue: [],
            disabled: false,
            required: false,
            options: [
              { label: "label_1", value: "value_1" },
              { label: "label_2", value: "value_2" }
            ]
          }
        },
        {
          type: "custom",
          label: "switch切换",
          renderConfig: {
            defaultValue: false,
            name: "ElSwitch"
          }
        },
        {
          type: "custom",
          label: "customInput",
          renderConfig: {
            name: "ElInput"
          }
        }
      ]
    };
  },
  methods: {
    handleMove() {
      return true;
    }
  }
};
</script>

<style lang="scss">
li {
  list-style: none;
  font-size: 12px;
  box-sizing: border-box;
}
</style>

<style lang="scss" scoped>
.model-container {
  padding: 0 10px 10px;
  .form-item-select {
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      padding: 4px;
      > span {
        background-color: #ebeef5;
        display: block;
        padding: 8px;
        cursor: pointer;
        .icon {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
