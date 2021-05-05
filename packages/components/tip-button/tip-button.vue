<template>
  <el-tooltip :content="content" v-bind="attrs">
    <wl-button v-bind="$attrs" v-on="$listeners">
      <slot />
    </wl-button>
  </el-tooltip>
</template>

<script>
export default {
  name: 'WlTipButton',
  props: {
    content: {
      type: String,
      required: true
    },
    tipConfig: {
      type: Object,
      default: null
    }
  },
  computed: {
    attrs() {
      return {
        effect: 'dark',
        placement: 'top',
        ...this.tipConfig
      }
    }
  }
}
</script>
