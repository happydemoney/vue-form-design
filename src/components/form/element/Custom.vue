<template>
  <render-custom-component
    :value="val"
    @input="handleInput"
    :component-name="renderConfig.name"
    :props="renderConfig.props ? renderConfig.props : null"
    :scope="scope"
  >
  </render-custom-component>
</template>

<script>
import RenderCustomComponent from "./component/RenderCustomComponent.vue";

export default {
  name: "iCustom",
  components: {
    RenderCustomComponent
  },
  props: {
    value: {
      default: null
    },
    renderConfig: {
      type: Object,
      default: null
    },
    scope: {
      default: null
    }
  },
  data() {
    return {
      val: this.value
    };
  },
  watch: {
    value(newVal
    ) {
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
