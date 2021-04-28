import { getComponentFromProp, initDefaultProps } from '../_util/props-util';
import KeyCode from '../_util/KeyCode';
import contains from '../vc-util/Dom/contains';
import LazyRenderBox from './LazyRenderBox';
import ResizerWrap from './ResizerWrap';
import BaseMixin from '../_util/BaseMixin';
import getTransitionProps from '../_util/getTransitionProps';
import switchScrollingEffect from '../_util/switchScrollingEffect';
import getDialogPropTypes from './IDialogPropTypes';
import Icon from '../icon';
import classNames from 'classnames';
const IDialogPropTypes = getDialogPropTypes();

let uuid = 0;

function noop() { }
function getScroll(w, top) {
  let ret = w[`page${top ? 'Y' : 'X'}Offset`];
  const method = `scroll${top ? 'Top' : 'Left'}`;
  if (typeof ret !== 'number') {
    const d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }
  return ret;
}

function setTransformOrigin(node, value) {
  const style = node.style;
  ['Webkit', 'Moz', 'Ms', 'ms'].forEach(prefix => {
    style[`${prefix}TransformOrigin`] = value;
  });
  style[`transformOrigin`] = value;
}

function offset(el) {
  const rect = el.getBoundingClientRect();
  const pos = {
    left: rect.left,
    top: rect.top,
  };
  const doc = el.ownerDocument;
  const w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}

let cacheOverflow = {};

export default {
  mixins: [BaseMixin],
  props: initDefaultProps(IDialogPropTypes, {
    mask: true,
    visible: false,
    keyboard: true,
    closable: true,
    maskClosable: true,
    destroyOnClose: false,
    prefixCls: 'rc-dialog',
    getOpenCount: () => null,
    focusTriggerAfterClose: true,
  }),
  data() {
    return {
      destroyPopup: false,
      dragData: {},
      dragStatus: false,
      minimizeStatus: false
    };
  },

  provide() {
    return {
      dialogContext: this,
    };
  },

  watch: {
    visible(val) {
      if (val) {
        this.destroyPopup = false;
      }
      this.$nextTick(() => {
        this.updatedCallback(!val);
      });
    },
  },

  beforeMount() {
    this.inTransition = false;
    this.titleId = `rcDialogTitle${uuid++}`;
  },
  mounted() {
    this.$nextTick(() => {
      this.updatedCallback(false);
      // if forceRender is true, set element style display to be none;
      if ((this.forceRender || (this.getContainer === false && !this.visible)) && this.$refs.wrap) {
        this.$refs.wrap.style.display = 'none';
      }
    });
  },
  beforeDestroy() {
    const { visible, getOpenCount } = this;
    if ((visible || this.inTransition) && !getOpenCount()) {
      this.switchScrollingEffect();
    }
    clearTimeout(this.timeoutId);
  },
  methods: {
    // 对外暴露的 api 不要更改名称或删除
    getDialogWrap() {
      return this.$refs.wrap;
    },
    updatedCallback(visible) {
      const mousePosition = this.mousePosition;
      const { mask, focusTriggerAfterClose } = this;
      if (this.visible) {
        // first show
        if (!visible) {
          this.openTime = Date.now();
          // this.lastOutSideFocusNode = document.activeElement
          this.switchScrollingEffect();
          // this.$refs.wrap.focus()
          this.tryFocus();
          const dialogNode = this.$refs.dialog.$el;
          if (mousePosition) {
            const elOffset = offset(dialogNode);
            setTransformOrigin(
              dialogNode,
              `${mousePosition.x - elOffset.left}px ${mousePosition.y - elOffset.top}px`,
            );
          } else {
            setTransformOrigin(dialogNode, '');
          }
        }
      } else if (visible) {
        this.inTransition = true;
        if (mask && this.lastOutSideFocusNode && focusTriggerAfterClose) {
          try {
            this.lastOutSideFocusNode.focus();
          } catch (e) {
            this.lastOutSideFocusNode = null;
          }
          this.lastOutSideFocusNode = null;
        }
      }
    },
    tryFocus() {
      if (!contains(this.$refs.wrap, document.activeElement)) {
        this.lastOutSideFocusNode = document.activeElement;
        this.$refs.sentinelStart.focus();
      }
    },
    onAnimateLeave() {
      const { afterClose, destroyOnClose } = this;
      // need demo?
      // https://github.com/react-component/dialog/pull/28
      if (this.$refs.wrap) {
        this.$refs.wrap.style.display = 'none';
      }
      if (destroyOnClose) {
        this.destroyPopup = true;
      }
      this.inTransition = false;
      this.switchScrollingEffect();
      if (afterClose) {
        afterClose();
      }
    },
    onDialogMouseDown() {
      this.dialogMouseDown = true;
    },

    onMaskMouseUp() {
      if (this.dialogMouseDown) {
        this.timeoutId = setTimeout(() => {
          this.dialogMouseDown = false;
        }, 0);
      }
    },
    onMaskClick(e) {
      // android trigger click on open (fastclick??)
      if (Date.now() - this.openTime < 300) {
        return;
      }
      if (e.target === e.currentTarget && !this.dialogMouseDown && !this.minimizeStatus) {
        this.close(e);
      }
    },
    onKeydown(e) {
      const props = this.$props;
      if (props.keyboard && e.keyCode === KeyCode.ESC) {
        e.stopPropagation();
        this.close(e);
        return;
      }
      // keep focus inside dialog
      if (props.visible) {
        if (e.keyCode === KeyCode.TAB) {
          const activeElement = document.activeElement;
          const sentinelStart = this.$refs.sentinelStart;
          if (e.shiftKey) {
            if (activeElement === sentinelStart) {
              this.$refs.sentinelEnd.focus();
            }
          } else if (activeElement === this.$refs.sentinelEnd) {
            sentinelStart.focus();
          }
        }
      }
    },
    handleDragMousedown(e) {
      if (!this.$props.draggable) return;
      const { title, prefixCls } = this;
      if (title) {
        if (!e.target.classList.contains(`${prefixCls}-title`)) return
      } else {
        if (!e.target.classList.contains(`${prefixCls}-body`)) return
      }
      const dom = this.$refs.content;
      this.dragData.x = e.pageX - dom.offsetLeft;
      this.dragData.y = e.pageY - dom.offsetTop;
      this.dragStatus = true;
    },
    handleDragMousemove(e) {
      if (!this.dragStatus) return
      const dom = this.$refs.content;
      dom.style.left = e.pageX - this.dragData.x + "px";
      dom.style.top = e.pageY - this.dragData.y + "px";
    },
    handleDragMouseup(e) {
      if (!this.dragStatus) return
      this.dragData = {}
      this.dragStatus = false;
    },
    handleMini() {
      this.minimizeStatus = !this.minimizeStatus;
      this.__emit('mini', this.minimizeStatus);
    },
    getDialogElement() {
      const {
        closable,
        prefixCls,
        width,
        height,
        title,
        footer: tempFooter,
        bodyStyle,
        visible,
        bodyProps,
        forceRender,
        dialogStyle,
        dialogClass,
        minimizeStatus,
        handleDragMousedown,
        handleDragMousemove,
        handleDragMouseup
      } = this;
      const { draggable, resizer, minimize } = this.$props;
      const dest = { ...dialogStyle };
      const miniShowStyle = { display: minimizeStatus ? 'none' : undefined }
      if (width !== undefined) {
        dest.width = typeof width === 'number' ? `${width}px` : width;
      }
      if (height !== undefined) {
        dest.height = typeof height === 'number' ? `${height}px` : height;
      }

      let footer;
      if (tempFooter) {
        footer = (
          <div key="footer" class={`${prefixCls}-footer`} ref="footer" style={miniShowStyle}>
            {tempFooter}
          </div>
        );
      }
      let header;
      if (title) {
        const className = classNames({
          [`${prefixCls}-header`]: true,
          [`${prefixCls}-draggable`]: draggable,
        });
        const titleClassName = classNames({
          [`${prefixCls}-title`]: true,
          [`${prefixCls}-title-mini`]: minimizeStatus,
        });
        header = (
          <div key="header" class={className} ref="header">
            <div class={titleClassName} id={this.titleId}>
              {title}
            </div>
          </div>
        );
      }

      let mini;
      if (minimize) {
        const miniIconType = minimizeStatus ? "border" : "minus"
        mini = (
          <button
            type="button"
            key="mini"
            onClick={this.handleMini}
            aria-label="Mini"
            class={`${prefixCls}-mini`}
          >
            <Icon type={miniIconType} class={`${prefixCls}-mini-x`} />
          </button>
        )
      }

      let closer;
      if (closable) {
        const closeIcon = getComponentFromProp(this, 'closeIcon');
        closer = (
          <button
            type="button"
            key="close"
            onClick={this.close || noop}
            aria-label="Close"
            class={`${prefixCls}-close`}
          >
            {closeIcon || <span class={`${prefixCls}-close-x`} />}
          </button>
        );
      }

      let resizerDom;
      if (resizer) {
        const ResizerProps = {
          props: {
            prefixCls
          }
        }
        resizerDom = (
          <ResizerWrap {...ResizerProps} style={miniShowStyle} />
        )
      }

      const style = dest;
      const sentinelStyle = { width: 0, height: 0, overflow: 'hidden' };
      const cls = {
        [prefixCls]: true,
      };
      const transitionName = this.getTransitionName();
      const contentClassName = classNames({
        [`${prefixCls}-content`]: true,
        [`${prefixCls}-content-draggable`]: draggable && !title,
      });

      if (minimizeStatus) style.width = "320px";

      const dialogElement = (
        <LazyRenderBox
          v-show={visible}
          key="dialog-element"
          role="document"
          ref="dialog"
          style={style}
          class={[cls, dialogClass]}
          forceRender={forceRender}
          onMousedown={this.onDialogMouseDown}
        >
          <div tabIndex={0} ref="sentinelStart" style={sentinelStyle} aria-hidden="true" />
          <div class={contentClassName} ref="content" onMousedown={handleDragMousedown} onMousemove={handleDragMousemove} onMouseup={handleDragMouseup}>
            <div class={`${prefixCls}-icon-btn`}>
              {mini}
              {closer}
            </div>
            {header}
            <div key="body" class={`${prefixCls}-body`} style={bodyStyle} ref="body" {...bodyProps} style={miniShowStyle}>
              {this.$slots.default}
            </div>
            {footer}
            {resizerDom}
          </div>
          <div tabIndex={0} ref="sentinelEnd" style={sentinelStyle} aria-hidden="true" />
        </LazyRenderBox>
      );
      const dialogTransitionProps = getTransitionProps(transitionName, {
        afterLeave: this.onAnimateLeave,
      });
      return (
        <transition key="dialog" {...dialogTransitionProps}>
          {visible || !this.destroyPopup ? dialogElement : null}
        </transition>
      );
    },
    getZIndexStyle() {
      const style = {};
      const props = this.$props;
      if (props.zIndex !== undefined) {
        style.zIndex = props.zIndex;
      }
      return style;
    },
    getWrapStyle() {
      return { ...this.getZIndexStyle(), ...this.wrapStyle };
    },
    getMaskStyle() {
      return { ...this.getZIndexStyle(), ...this.maskStyle };
    },
    getMaskElement() {
      const props = this.$props;
      let maskElement;
      if (props.mask && !this.minimizeStatus) {
        const maskTransition = this.getMaskTransitionName();
        maskElement = (
          <LazyRenderBox
            v-show={props.visible}
            style={this.getMaskStyle()}
            key="mask"
            class={`${props.prefixCls}-mask`}
            {...props.maskProps}
          />
        );
        if (maskTransition) {
          const maskTransitionProps = getTransitionProps(maskTransition);
          maskElement = (
            <transition key="mask" {...maskTransitionProps}>
              {maskElement}
            </transition>
          );
        }
      }
      return maskElement;
    },
    getMaskTransitionName() {
      const props = this.$props;
      let transitionName = props.maskTransitionName;
      const animation = props.maskAnimation;
      if (!transitionName && animation) {
        transitionName = `${props.prefixCls}-${animation}`;
      }
      return transitionName;
    },
    getTransitionName() {
      const props = this.$props;
      let transitionName = props.transitionName;
      const animation = props.animation;
      if (!transitionName && animation) {
        transitionName = `${props.prefixCls}-${animation}`;
      }
      return transitionName;
    },
    // setScrollbar() {
    //   if (this.bodyIsOverflowing && this.scrollbarWidth !== undefined) {
    //     document.body.style.paddingRight = `${this.scrollbarWidth}px`;
    //   }
    // },
    switchScrollingEffect() {
      const { getOpenCount } = this;
      const openCount = getOpenCount();
      if (openCount === 1) {
        if (cacheOverflow.hasOwnProperty('overflowX')) {
          return;
        }
        cacheOverflow = {
          overflowX: document.body.style.overflowX,
          overflowY: document.body.style.overflowY,
          overflow: document.body.style.overflow,
        };
        switchScrollingEffect();
        // Must be set after switchScrollingEffect
        document.body.style.overflow = 'hidden';
      } else if (!openCount) {
        // IE browser doesn't merge overflow style, need to set it separately
        if (cacheOverflow.overflow !== undefined) {
          document.body.style.overflow = cacheOverflow.overflow;
        }
        if (cacheOverflow.overflowX !== undefined) {
          document.body.style.overflowX = cacheOverflow.overflowX;
        }
        if (cacheOverflow.overflowY !== undefined) {
          document.body.style.overflowY = cacheOverflow.overflowY;
        }
        cacheOverflow = {};
        switchScrollingEffect(true);
      }
    },
    // removeScrollingEffect() {
    //   const { getOpenCount } = this;
    //   const openCount = getOpenCount();
    //   if (openCount !== 0) {
    //     return;
    //   }
    //   document.body.style.overflow = '';
    //   switchScrollingEffect(true);
    //   // this.resetAdjustments();
    // },
    close(e) {
      this.__emit('close', e);
    },
  },
  render() {
    const { prefixCls, maskClosable, visible, wrapClassName, title, wrapProps } = this;
    const style = this.getWrapStyle();
    // clear hide display
    // and only set display after async anim, not here for hide
    if (visible) {
      style.display = null;
    }
    let modalWrap;
    if (this.minimizeStatus) {
      const props = this.$props;

      const miniStyle = {
        top: document.body.offsetHeight - 300 + 'px',
        right: '50px'
      }
      if (props.zIndex !== undefined) {
        miniStyle.zIndex = props.zIndex;
      }
      modalWrap = (
        <div class={`${prefixCls}-mini-wrap ${wrapClassName || ''}`} style={miniStyle}>
          {this.getDialogElement()}
        </div>
      )
    } else {
      modalWrap = (
        <div class={`${prefixCls}-root`}>
          {this.getMaskElement()}
          <div
            tabIndex={-1}
            onKeydown={this.onKeydown}
            class={`${prefixCls}-wrap ${wrapClassName || ''}`}
            ref="wrap"
            onClick={maskClosable ? this.onMaskClick : noop}
            onMouseup={maskClosable ? this.onMaskMouseUp : noop}
            role="dialog"
            aria-labelledby={title ? this.titleId : null}
            style={style}
            {...wrapProps}
          >
            {this.getDialogElement()}
          </div>
        </div>
      );
    }
    return modalWrap;
  },
};
