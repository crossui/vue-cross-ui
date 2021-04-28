const inRange = (from, to, value) => {
  return value < from ? from : value > to ? to : value;
};
const windowWidthWithoutScrollbar = () => {
  const { innerWidth } = window;
  const { clientWidth } = document.documentElement;

  if (innerWidth && clientWidth) {
    return Math.min(innerWidth, clientWidth);
  }

  return clientWidth || innerWidth;
};
export default {
  data() {
    return {
      clicked: false,
      size: {}
    };
  },
  props: {
    prefixCls: {
      type: String,
      default: 'rc-dialog'
    },
    minHeight: {
      type: Number,
      default: 0
    },
    minWidth: {
      type: Number,
      default: 0
    },
    maxWidth: {
      type: Number,
      default: Number.MAX_SAFE_INTEGER
    },
    maxHeight: {
      type: Number,
      default: Number.MAX_SAFE_INTEGER
    }
  },
  mounted() {
    this.$el.addEventListener("mousedown", this.start, false);
  },
  computed: {
    className() {
      const { clicked, prefixCls } = this;
      return [`${prefixCls}-resizer`, { clicked }];
    }
  },
  methods: {
    start(event) {
      this.clicked = true;

      window.addEventListener("mousemove", this.mousemove, false);
      window.addEventListener("mouseup", this.stop, false);

      event.stopPropagation();
      event.preventDefault();
    },

    stop() {
      this.clicked = false;

      window.removeEventListener("mousemove", this.mousemove, false);
      window.removeEventListener("mouseup", this.stop, false);

      this.$emit("resize-stop", {
        element: this.$el.parentElement,
        size: this.size
      });
    },

    mousemove(event) {
      this.resize(event);
    },

    resize(event) {
      var el = this.$el.parentElement.parentElement;
      var elBody = el.getElementsByClassName("vcu-modal-body")[0]
      if (el) {
        var width = event.clientX - el.offsetLeft;
        var height = event.clientY - el.offsetTop;
        const maxWidth = Math.min(windowWidthWithoutScrollbar(), this.maxWidth);
        const maxHeight = Math.min(window.innerHeight, this.maxHeight);

        width = inRange(this.minWidth, maxWidth, width);
        height = inRange(this.minHeight, maxHeight, height);

        this.size = { width, height };
        el.style.width = width + "px";
        elBody.style.height = height + "px";

        this.$emit("resize", {
          element: el,
          size: this.size
        });
      }
    }
  },
  render() {
    const { className } = this
    return <div class={className}></div>;
  },
};
