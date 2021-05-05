// import FileHandle from '../packages/file-handle/index'
// import TestModule from '../packages/test-module/index'
import WlTable from '../packages/components/table'
import WlInput from '../packages/components/input'
import WlSelect from '../packages/components/select'
import WlRadio from '../packages/components/radio'
import WlCheckbox from '../packages/components/checkbox'
import WlDate from '../packages/components/date'
import WlButton from '../packages/components/button'
import WlTipButton from '../packages/components/tip-button'
import WlSwitch from '../packages/components/switch'
import WlTime from '../packages/components/time'
import WlForm from '../packages/components/form'
import WlSearchList from '../packages/components/search-list'
import WlSearchTabList from '../packages/components/search-tab-list'
import WlDialog from '../packages/components/dialog'
import WlDialogFrom from '../packages/components/dialog-form'
// import * as utils from '../packages/utils'
import '../packages/styles/index.styl'
import { version } from '../package.json'

const components = [WlTable, WlInput, WlSelect, WlRadio, WlCheckbox, WlDate, WlButton, WlTipButton, WlSwitch, WlTime, WlForm, WlSearchList, WlSearchTabList, WlDialog, WlDialogFrom]
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) {
    return
  }
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version,
  install,
  WlTable,
  WlInput,
  WlSelect,
  WlRadio,
  WlCheckbox,
  WlDate,
  WlButton,
  WlTipButton,
  WlSwitch,
  WlTime,
  WlForm,
  WlSearchList,
  WlSearchTabList,
  WlDialog,
  WlDialogFrom
}
