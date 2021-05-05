<template>
  <el-form ref="wlForm" :model="form" :rules="rules" v-bind="attrs">
    <template v-for="(item, index) in formItems">
      <slot :name="item.slotName" v-bind="{ form, item }">
        <wl-form-item
          v-if="!item.cols"
          :key="index"
          v-model="form[item.prop]"
          v-bind="item"
          :form="form"
        />
        <!--        <form-item-grid v-else :item="item" :form="form">-->
        <!--          <slot-->
        <!--            v-for="col in item.cols"-->
        <!--            :slot="col.slotName"-->
        <!--            :name="col.slotName"-->
        <!--            v-bind="{ form, item: col }"-->
        <!--          />-->
        <!--        </form-item-grid>-->
        <el-row v-if="item.cols" v-bind="item.attrs">
          <el-col v-for="(col, index2) in item.cols" :key="index2" :span="col.span">
            <slot v-if="col.slotName" :name="col.slotName" v-bind="{ form, item: col }" />
            <wl-form-item v-else v-model="form[col.prop]" v-bind="col" :form="form" />
          </el-col>
        </el-row>
      </slot>
    </template>
    <slot />
    <slot v-if="showSubmit" name="submit" v-bind="{ form }">
      <el-form-item style="margin-top: 20px;">
        <el-button type="primary" @click="submitForm">
          提交
        </el-button>
        <el-button @click="resetFields">
          重置
        </el-button>
      </el-form-item>
    </slot>
  </el-form>
</template>

<script>
import { getRandomKey } from '../../utils'
// import FormItemGrid from './form-item-grid'
import WlFormItem from './pl-form-item'

const Item2UIDMap = new WeakMap()
export default {
  name: 'WlForm',
  componentName: 'WlForm',
  components: {
    WlFormItem
    // FormItemGrid
  },
  inheritAttrs: false,
  provide() {
    return {
      wlForm: this
    }
  },
  props: {
    formItems: {
      type: Array,
      default: () => []
    },
    value: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: [Object, Array],
      default: null
    },
    showSubmit: {
      type: Boolean,
      default: true
    },
    asyncInitValue: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      // form: {},
      fields: []
    }
  },
  computed: {
    attrs() {
      return { ...this.$WlElement?.formConfig, ...this.$attrs }
    },
    form: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  watch: {
    asyncInitValue: {
      deep: true,
      immediate: true,
      handler(val) {
        if (val) {
          this.form = JSON.parse(JSON.stringify(val))
        }
      }
    }
  },
  created() {
    this.setKeyValue(this.formItems)
    this.$on('pl.form.addField', (field) => {
      if (field) {
        this.fields.push(field)
      }
    })
    this.$emit('form-mounted', {
      plFrom: this.$refs.wlForm,
      fields: this.fields
    })
    /* istanbul ignore next */
    this.$on('pl.form.removeField', (prop) => {
      if (prop) {
        const index = this.fields.findIndex((item) => item.prop === prop)
        this.fields.splice(index, 1)
        this.$set(this.form, prop, null)
      }
    })
  },
  methods: {
    setKeyValue(list) {
      list.forEach((item) => {
        if (item.prop && typeof this.form[item.prop] === 'undefined') {
          if (item.attrs && item.attrs.multiple) {
            this.$set(this.form, item.prop, [])
          } else if (item.comp === 'date' && item.attrs && item.attrs.type === 'daterange') {
            this.$set(this.form, item.prop, [])
          } else {
            this.$set(this.form, item.prop, '')
          }
        }
      })
    },
    async submitForm() {
      try {
        await this.$refs.wlForm.validate()
        this.$emit('submit', this.form)
        return Promise.resolve({ ...this.form })
      } catch (e) {
        return Promise.reject(e)
      }
    },
    getRandomKey(item) {
      const persistedUID = Item2UIDMap.get(item)
      if (!persistedUID) {
        Item2UIDMap.set(item, getRandomKey())
        return getRandomKey()
      }
      return persistedUID
    },
    getComp(comp) {
      const map = {
        input: 'wl-input',
        select: 'wl-select',
        radio: 'wl-radio',
        checkbox: 'wl-checkbox',
        date: 'wl-date',
        time: 'wl-time',
        switch: 'wl-switch'
      }
      return map[comp] || comp
    },
    validate(...args) {
      return this.$refs.wlForm.validate(...args)
    },
    validateField(...args) {
      this.$refs.wlForm.validateField(...args)
    },
    resetFields(...args) {
      if (this.asyncInitValue) {
        this.form = JSON.parse(JSON.stringify(this.asyncInitValue))
      } else {
        this.$refs.wlForm.resetFields(...args)
      }
    },
    clearValidate(...args) {
      this.$refs.wlForm.clearValidate(...args)
    },
    handleForm(event, ...args) {
      if (this[event] && typeof this[event] === 'function') {
        return this[event](...args)
      }
      if (this.$refs.wlForm[event] && typeof this.$refs.wlForm[event]) {
        return this.$refs.wlForm[event](...args)
      } else {
        throw new Error('eventName is not exit')
      }
    },
    // 供父组件找formItem
    findFormItem(prop) {
      const formItem = this.fields.find((item) => item.prop === prop)
      return formItem.formItem
    },
    // 供父组件找formItemFiled
    findFormItemFiled(prop) {
      const formItem = this.fields.find((item) => item.prop === prop)
      return formItem.formItemFiled
    },
    findFormRef() {
      return this.$refs.wlForm
    },
    setForm(key, value) {
      this.$set(this.form, key, value)
    }
  }
}
</script>

<style lang="stylus"></style>
