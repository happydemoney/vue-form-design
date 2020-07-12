<template>
  <el-select
    :value="val"
    @input="handleInput"
    :multiple="renderConfig.multiple"
    :disabled="renderConfig.disabled"
    :value-key="renderConfig.valueKey"
    :size="renderConfig.size"
    :clearable="renderConfig.clearable"
    :collapse-tags="renderConfig.collapseTags"
    :multiple-limit="renderConfig.multipleLimit"
    :name="renderConfig.name"
    :autocomplete="renderConfig.autocomplete"
    :placeholder="renderConfig.placeholder"
    :filterable="renderConfig.filterable"
    :allow-create="renderConfig.allowCreate"
    :filter-method="renderConfig.filterMethod"
    :remote="renderConfig.remote"
    :remote-method="renderConfig.remoteMethod"
    :loading="renderConfig.loading"
    :loading-text="renderConfig.loadingText"
    :no-match-text="renderConfig.noMatchText"
    :no-data-text="renderConfig.noDataText"
    :popper-class="renderConfig.propperClass"
    :reserve-keyword="renderConfig.reserveKeyword"
    :default-first-option="renderConfig.defaultFirstOption"
    :popper-append-to-body="renderConfig.popperAppendToBody"
    :automatic-dropdown="renderConfig.automaticDropdown"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled || false"
    >
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
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      options: (this.renderConfig && this.renderConfig.options) || [],
      val: this.value || (this.renderConfig.multiple ? [] : "")
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
