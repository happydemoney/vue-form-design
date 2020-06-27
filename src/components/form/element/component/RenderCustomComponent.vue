<script>
export default {
  name: "renderCustomComponent",
  props: {
    value: {
      type: [String, Array, Number, Boolean],
      require: true
    },
    componentName: {
      type: String,
      required: true
    },
    props: {
      type: Object,
      default: function() {
        return null;
      }
    },
    scope: {
      default: null
    }
  },
  render(h) {
    const componentName = this.componentName;
    const value = this.value;
    const scope = this.scope;
    const props = this.props;
    const self = this;
    return h(componentName, {
      props: {
        value,
        scope,
        ...props
      },
      on: {
        input: function(value) {
          self.$emit("input", value);
        }
      }
    });
  }
};
</script>
