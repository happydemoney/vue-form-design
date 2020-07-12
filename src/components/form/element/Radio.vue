<template>
  <el-radio-group
    :value="val"
    @input="handleInput"
    :disabled="renderConfig.disabled"
  >
    <el-radio
      v-for="item in options"
      :key="item.value"
      :label="item.value"
      :disabled="item.disabled || false"
    >
      {{ item.label }}
    </el-radio>
  </el-radio-group>
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
