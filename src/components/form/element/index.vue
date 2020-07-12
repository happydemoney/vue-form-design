<template>
  <component
    v-bind="$attrs"
    v-on="$listeners"
    :is="componentType"
    :renderConfig="renderConfig"
    :value="val"
    @input="handleInput"
  />
</template>

<script>
import Custom from "./Custom.vue";
import Select from "./Select.vue";
import Radio from "./Radio.vue";
import Checkbox from "./Checkbox.vue";
import Input from "./Input.vue";

const ComponentsMap = {
  Custom,
  Select,
  Radio,
  Checkbox,
  Input
};

export default {
  components: ComponentsMap,
  props: {
    type: {
      type: String
    },
    value: {
      default: null
    },
    renderConfig: {
      type: Object,
      default: function() {
        return {
          type: "input"
        };
      }
    }
  },
  computed: {
    componentType() {
      return this.upperCaseFirst(this.type);
    }
  },
  data() {
    return {
      val: this.value
    };
  },
  watch: {
    value(newVal) {
      this.val = newVal;
    }
  },
  methods: {
    handleInput(val) {
      this.$emit("input", val);
    },
    upperCaseFirst(str) {
      if (!str) {
        return "Input";
      }
      str = str.replace(/\b\w+\b/g, arg => {
        arg = arg.trim();
        return arg.substring(0, 1).toUpperCase() + arg.substring(1);
      });
      return str;
    }
  }
};
</script>
