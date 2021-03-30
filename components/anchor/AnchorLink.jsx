import PropTypes from '../_util/vue-types';
import { initDefaultProps, getComponentFromProp } from '../_util/props-util';
import classNames from 'classnames';
import { ConfigConsumerProps } from '../config-provider/configConsumerProps';

export const AnchorLinkProps = {
  prefixCls: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.any,
  target: PropTypes.string,
};

export default {
  name: 'VAnchorLink',
  props: initDefaultProps(AnchorLinkProps, {
    href: '#',
  }),
  inject: {
    vcuAnchor: { default: () => ({}) },
    vcuAnchorContext: { default: () => ({}) },
    configProvider: { default: () => ConfigConsumerProps },
  },
  watch: {
    href(val, oldVal) {
      this.$nextTick(() => {
        this.vcuAnchor.unregisterLink(oldVal);
        this.vcuAnchor.registerLink(val);
      });
    },
  },

  mounted() {
    this.vcuAnchor.registerLink(this.href);
  },

  beforeDestroy() {
    this.vcuAnchor.unregisterLink(this.href);
  },
  methods: {
    handleClick(e) {
      this.vcuAnchor.scrollTo(this.href);
      const { scrollTo } = this.vcuAnchor;
      const { href, title } = this.$props;
      if (this.vcuAnchorContext.$emit) {
        this.vcuAnchorContext.$emit('click', e, { title, href });
      }
      scrollTo(href);
    },
  },
  render() {
    const { prefixCls: customizePrefixCls, href, $slots, target } = this;

    const getPrefixCls = this.configProvider.getPrefixCls;
    const prefixCls = getPrefixCls('anchor', customizePrefixCls);

    const title = getComponentFromProp(this, 'title');
    const active = this.vcuAnchor.$data.activeLink === href;
    const wrapperClassName = classNames(`${prefixCls}-link`, {
      [`${prefixCls}-link-active`]: active,
    });
    const titleClassName = classNames(`${prefixCls}-link-title`, {
      [`${prefixCls}-link-title-active`]: active,
    });
    return (
      <div class={wrapperClassName}>
        <a
          class={titleClassName}
          href={href}
          title={typeof title === 'string' ? title : ''}
          target={target}
          onClick={this.handleClick}
        >
          {title}
        </a>
        {$slots.default}
      </div>
    );
  },
};
