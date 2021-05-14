<template>
  <div>
    <v-button @click="info">Info</v-button>
    <v-button @click="success">Success</v-button>
    <v-button @click="error">Error</v-button>
    <v-button @click="warning">Warning</v-button>
  </div>
</template>
<script>
export default {
  methods: {
    info() {
      const h = this.$createElement
      this.$info({
        title: 'This is a notification message',
        content: h('div',{}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
        onOk() {},
      });
    },

    success() {
      this.$success({
        title: 'This is a success message',
        content: (  // JSX support
          <div>
            <p>some messages...some messages...</p>
            <p>some messages...some messages...</p>
          </div>
        ),
      });
    },

    error() {
      this.$error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
      });
    },

    warning() {
      this.$warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
      });
    },
  }
}
</script>