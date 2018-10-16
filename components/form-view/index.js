import PropTypes from '../_util/vue-types'
import BaseMixin from '../_util/BaseMixin'
import { getOptionProps } from '../_util/props-util'

export default {
  name: 'VFormView',
  props: {
    title: PropTypes.string,
    content: PropTypes.string,
    lableWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    textAlign: PropTypes.string,
    prefixCls: PropTypes.string.def('vcu-form-view'),
  },
  mixins: [BaseMixin],
  data() {
    return {

    }
  },
  inject: {

  },
  provide() {
    return {
    }
  },
  updated() {

  },
  methods: {

  },
  render() {
    const { classes, $slots, $attrs, $listeners } = this
    const props = getOptionProps(this)
    const { title, content, prefixCls, lableWidth, textAlign } = props
    const _title = title ? title : $slots.title;
    const _content = content ? content : $slots.content;
    const formViemProps = {
      attrs: {
        ...$attrs,
      },
      class: [classes, prefixCls],
      on: {
        ...$listeners
      },
    }
    const titleProps = {
      class: prefixCls + '-title',
      style: {
        width: typeof lableWidth === 'number' ? `${lableWidth}px` : lableWidth,
        textAlign: typeof textAlign === undefined ? 'left' : textAlign,
      }
    }
    return (
      <div {...formViemProps}>
        <div {...titleProps}>{_title}</div>
        <div class={`${prefixCls}-content`}>{_content}</div>
      </div >
    )
  },
}
