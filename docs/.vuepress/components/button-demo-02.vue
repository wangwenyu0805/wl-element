<template>
  <div>
    <wl-button loading @click="handleClick" type="success">自动loading</wl-button>
    <wl-button fullscreen-loading @click="handleClick" type="warning">全屏loading</wl-button>
  </div>
</template>

<script>
export default {
  name: 'button-demo-02',
  data () {
    return {
      fullscreenLoading: false
    }
  },
  methods: {
    handleClick (done) {
      setTimeout(() => {
        // do something
        done()  // done控制loading关闭
      }, 1000)
    }
  }
}
</script>
