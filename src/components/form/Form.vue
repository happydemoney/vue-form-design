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
      :prop="item.prop"
      :label-width="item.labelWidth"
      :required="item.required || false"
      :rules="item.rules"
      :error="item.error"
      :show-message="item.showMessage || true"
      :inline-message="item.inlineMessage || false"
      :size="item.size"
      :class="formItemClass(item.columns || curFormAttrs.columns)">
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
    formItemClass (columns) {
      const classMap = {
        1: 'single',
        2: 'two',
        3: 'three',
        4: 'four'
      }
      return classMap[columns] || 'single'
    },
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
    /**
     * grid-template-columns: Attributes define the width of each column
     * repeat(arg1, arg2): arg1 - repeat times, arg2 - repeat value
     * minmax: The function generates a length range, indicating that the length is within this range. It accepts two parameters, the minimum and maximum
     * fr: (fraction) If the width of the two columns is 1fr and 2fr, it means that the latter is twice the former.
     */
    grid-template-columns: repeat(12, minmax(0px, 1fr));
    // grid-template-rows:  Attributes define the height of each row
    grid-area: span 1 / span 1;
    gap: 20px;
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
</style>
