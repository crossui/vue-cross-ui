
import PropTypes from '../_util/vue-types'

export default {
  name: 'VCardGrid',
  __ANT_CARD_GRID: true,
  props: {
    prefixCls: PropTypes.string.def('vcu-card'),
  },
  render () {
    const { prefixCls = 'vcu-card' } = this.$props
    const classString = {
      [`${prefixCls}-grid`]: true,
    }
    return (
      <div {...{ on: this.$listeners }} class={classString}>{this.$slots.default}</div>
    )
  },
}

