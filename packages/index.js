// import pfTable from './components/pf-table/pf-table'
// import pFrom from './components/pf-table/p-form'
// import pDialogForm from './components/pf-table/p-dialog-form'
// import pfTabTable from './components/pf-table/pf-tab-table'
// import pTable from './components/pf-table/p-table'
import WlTable from './components/table'
import WlInput from './components/input'
import WlSelect from './components/select'
import WlRadio from './components/radio'
import WlCheckbox from './components/checkbox'
import WlDate from './components/date'
import WlButton from './components/button'
import WlTipButton from './components/tip-button'
import WlSwitch from './components/switch'
import WlTime from './components/time'
import WlForm from './components/form'
import WlSearchList from './components/search-list'
import WlSearchTabList from './components/search-tab-list'
import WlDialog from './components/dialog'
import WlDialogFrom from './components/dialog-form'
import * as utils from './utils'
import './styles/index.styl'

const WElement = {
  install: function(Vue, opts = {}) {
    Vue.component('wl-table', WlTable)
    Vue.component('wl-input', WlInput)
    Vue.component('wl-select', WlSelect)
    Vue.component('wl-radio', WlRadio)
    Vue.component('wl-checkbox', WlCheckbox)
    Vue.component('wl-date', WlDate)
    Vue.component('wl-switch', WlSwitch)
    Vue.component('wl-time', WlTime)
    Vue.component('wl-form', WlForm)
    Vue.component('wl-button', WlButton)
    Vue.component('wl-tip-button', WlTipButton)
    Vue.component('wl-search-list', WlSearchList)
    Vue.component('wl-search-tab-list', WlSearchTabList)
    Vue.component('wl-dialog', WlDialog)
    Vue.component('wl-dialog-form', WlDialogFrom)
    Vue.prototype.$WlElement = {
      tableConfig: opts.tableConfig,
      pageConfig: opts.pageConfig,
      selectConfig: opts.selectConfig,
      inputConfig: opts.inputConfig,
      dateConfig: opts.dateConfig,
      formConfig: opts.formConfig
    }
  }
}
export default WElement
export { utils }
