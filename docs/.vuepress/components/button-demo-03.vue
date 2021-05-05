<template>
  <div>
    <wl-button confirm-type="pop" type="primary" @confirm="confirm" fullscreen-loading >删除</wl-button>
    <wl-button confirm-type="confirm" type="danger" @confirm="confirm" fullscreen-loading >删除</wl-button>
  </div>
</template>

<script>
export default {
  name: 'button-demo-03',
  methods: {
    confirm (done) {
      setTimeout(() => {
        done()
      }, 1000)
    }
  }
}
</script>
