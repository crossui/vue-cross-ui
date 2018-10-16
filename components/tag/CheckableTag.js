
export default {
  name: 'VCheckableTag',
  model: {
    prop: 'checked',
  },
  props: {
    prefixCls: {
      default: 'vcu-tag',
      type: String,
    },
    checked: Boolean,
  },
  computed: {
    classes () {
      const { prefixCls, checked } = this
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-checkable`]: true,
        [`${prefixCls}-checkable-checked`]: checked,
      }
    },
  },
  methods: {
    handleClick () {
      const { checked } = this
      this.$emit('input', !checked)
      this.$emit('change', !checked)
    },
  },
  render () {
    const { classes, handleClick, $slots } = this
    return (
      <div class={classes} onClick={handleClick}>
        {$slots.default}
      </div>
    )
  },
}

