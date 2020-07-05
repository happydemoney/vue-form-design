<template>
  <el-form
    v-bind="$attrs"
    v-on="$listeners"
    ref="iForm"
    :model="modelValue"
    :columns="curFormAttrs.columns"
    :label-position="curFormAttrs.labelPosition"
    :label-width="curFormAttrs.labelWidth + 'px'"
    :size="curFormAttrs.size"
  >
    <el-form-item
      v-for="(item, index) in formItems"
      :key="index"
      :label="item.label"
      :prop="item.prop || item.key"
      :label-width="item.labelWidth ? item.labelWidth + 'px': undefined"
      :columns="item.columns || curFormAttrs.columns"
    >
      <form-element
        v-model="modelValue[item.prop || item.key]"
        :renderConfig="item.renderConfig"
        :type="item.type"
      >
      </form-element>
    </el-form-item>
  </el-form>
</template>

<script>
import formElement from "./element/index.vue";

export default {
  name: "iForm",
  components: { formElement },
  props: {
    formItems: {
      type: Array,
      default: function() {
        return [];
      }
    },
    formAttrs: {
      type: Object
    },
    model: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      curFormAttrs: Object.assign({
        labelPosition: "right",
        labelWidth: "100px",
        columns: 1
      }, this.formAttrs)
    }
  },
  computed: {
    modelValue() {
      if (this.model) {
        return this.model;
      }
      if (this.formItems.length > 0) {
        const model = {};
        this.formItems.forEach((item) => {
          model[item.key] = item.value || "";
        });
        return model;
      }
      return null;
    }
  },
  methods: {
    validate (callback) {
      this.$refs.iForm.validate(callback);
    },
    validateField (props, callback) {
      this.$refs.iForm.validateField(props, callback);
    },
    resetFields () {
      this.$refs.iForm.resetFields();
    },
    clearValidate (props) {
      this.$refs.iForm.clearValidate(props);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-form {
  display: grid;
}
</style>