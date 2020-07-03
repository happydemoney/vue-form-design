<template>
  <el-input
    v-bind="$attrs"
    v-on="$listeners"
    :type="renderConfig.subtype"
    :value="val"
    @input="input"
    :placeholder="renderConfig.placeholder"
    :disabled="renderConfig.disabled"
    :maxlength="renderConfig.maxlength"
    :show-word-limit="renderConfig.showlimit"
    :show-password="renderConfig.subtype === 'password'"
    :autocomplete="renderConfig.autocomplete"
    :title="renderConfig.title"
    :class="renderConfig.class">
    <el-button v-if="renderConfig.suffix" slot="suffix" type="primary" size="small" @click="renderConfig.suffix.click">
      {{ renderConfig.suffix.text }}
    </el-button>
    <template v-if="renderConfig.prepend" slot="prepend">{{renderConfig.prepend}}</template>
    <template v-if="renderConfig.append" slot="prepend">{{renderConfig.append}}</template>
  </el-input>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number]
    },
    renderConfig: {
      type: Object,
      default: function () {
        return {
          class: '',
          suffix: null
        }
      }
    }
  },
  data () {
    return {
      val: this.value,
      autocomplete: this.renderConfig.subtype === 'password' ? 'new-password' : undefined
    }
  },
  methods: {
    input (val) {
      this.val = val
      this.$emit('input', val)
    }
  },
  watch: {
    value: function (newValue) {
      this.val = newValue
    }
  }
}
</script>
<style>
    input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{
        -webkit-appearance: none !important;
    }
    /* input[type="number"]{-moz-appearance:textfield;} */
</style>
