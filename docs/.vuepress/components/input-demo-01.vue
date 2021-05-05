<template>
  <wl-input v-model="text" @change="handleChange"></wl-input>
</template>

<script>
export default {
  name: 'input-demo-01',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>
