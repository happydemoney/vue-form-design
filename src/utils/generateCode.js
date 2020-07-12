export default function(data, type = "vue") {
  const { model, formItems, formAttrs } = data;
  if (type == "vue") {
    return `<template>
  <div>
    <i-form :model="model" :formItems="formItems" :formAttrs="formItems"></i-form>
    </i-form>
    <el-button type="primary" @click="handleSubmit">提交</el-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        model: ${model},
        formItems: ${formItems},
        formAttrs: ${formAttrs}
      }
    },
    methods: {
      handleSubmit () {
        console.log(this.model)
      }
    }
  }
</script>`;
  }
}
