<template>
  <el-checkbox-group
    :value="val"
    @input="handleInput"
    :disabled="renderConfig.disabled"
    :min="renderConfig.min"
    :max="renderConfig.max"
  >
    <el-checkbox
      v-for="item in options"
      :key="item.value"
      :label="item.value"
      :disabled="item.disabled || false"
    >
      {{ item.label }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  props: {
    value: {
      default: ""
    },
    renderConfig: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      options: (this.renderConfig && this.renderConfig.options) || [],
      val: this.value || ""
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
