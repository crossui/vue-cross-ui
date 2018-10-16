import PropTypes from '../_util/vue-types'
export default () => ({
  prefixCls: PropTypes.string.def('vcu-btn'),
  type: PropTypes.oneOf(['primary', 'success', 'warning', 'error', 'info', 'danger', 'dashed', 'text', 'ghost', 'default']).def('default'),
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset']).def('button'),
  icon: PropTypes.string,
  shape: PropTypes.oneOf(['circle', 'circle-outline']),
  size: PropTypes.oneOf(['small', 'large', 'default']).def('default'),
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  disabled: PropTypes.bool,
  ghost: PropTypes.bool,
  block: PropTypes.bool,
})
