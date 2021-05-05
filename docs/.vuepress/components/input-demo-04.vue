<template>
  <wl-input v-model="textarea" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></wl-input>
</template>

<script>
export default {
  name: 'input-demo-04',
  data () {
    return {
      textarea: ''
    }
  }
}
</script>

<style scoped>

</style>
