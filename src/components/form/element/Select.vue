<template>
  <el-select
    v-model="val"
    :multiple="attrs.multiple"
    :disabled="attrs.disabled"
    :value-key="attrs.valueKey"
    :size="attrs.size"
    :clearable="attrs.clearable"
    :collapse-tags="attrs.collapseTags"
    :multiple-limit="attrs.multipleLimit"
    :name="attrs.name"
    :autocomplete="attrs.autocomplete"
    :placeholder="attrs.placeholder"
    :filterable="attrs.filterable"
    :allow-create="attrs.allowCreate"
    :filter-method="attrs.filterMethod"
    :remote="attrs.remote"
    :remote-method="attrs.remoteMethod"
    :loading="attrs.loading"
    :loading-text="attrs.loadingText"
    :no-match-text="attrs.noMatchText"
    :no-data-text="attrs.noDataText"
    :popper-class="attrs.propperClass"
    :reserve-keyword="attrs.reserveKeyword"
    :default-first-option="attrs.defaultFirstOption"
    :popper-append-to-body="attrs.popperAppendToBody"
    :automatic-dropdown="attrs.automaticDropdown">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled || false">
    </el-option>
  </el-select>
</template>

<script>
export default {
  props: {
    value: {
      default: null
    },
    renderConfig: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      options: (this.renderConfig && this.renderConfig.options) || [],
      val: this.value || (this.renderConfig.multiple ? [] : ''),
      attrs: Object.assign(
        {
          multiple: false,
          disabled: false,
          valueKey: "value",
          clearable: false,
          collapseTags: false,
          multipleLimit: 0,
          autocomplete: "off",
          placeholder: "请选择",
          filterable: false,
          allowCreate: false,
          remote: false,
          loading: false,
          loadingText: "加载中",
          noMatchText: "无匹配数据",
          noDataText: "无数据",
          reserveKeyword: false,
          defaultFirstOption: false,
          popperAppendToBody: true,
          automaticDropdown: false
        },
        this.renderConfig
      )
    };
  },
  watch: {
    value(newVal) {
      this.val = newVal;
    }
  },
  methods: {
    handleInput(value) {
      this.$emit("input", value);
    }
  }
};
</script>
