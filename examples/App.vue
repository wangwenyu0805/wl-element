<template>
  <div id="app">
    <router-view />
    <wl-table :data="tableData" :columns="columns"></wl-table>
    <!-- <wl-date v-model="date2" :attrs="attrs"></wl-date> -->
    <!-- <wl-date v-model="date1"></wl-date> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' },
        { date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1519 弄' },
        { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' }
      ]
      // date1: '',
      // date2: [],
      // attrs: {
      //   type: 'daterange',
      //   'range-separator': '至',
      //   'start-placeholder': '开始日期',
      //   'end-placeholder': '结束日期'
      // }
    }
  },
  computed: {
    columns() {
      return [
        { label: '日期', prop: 'date', attrs: { width: 180 } },
        { label: '姓名', prop: 'name', attrs: { width: 180 } },
        { label: '地址', prop: 'address' }
      ]
    }
    // columns() {
    //   return [
    //     {
    //       label: '日期',
    //       prop: 'date',
    //       attrs: { width: 150 }
    //     },
    //     {
    //       label: '配送信息',
    //       childColumns: [
    //         {
    //           label: '姓名',
    //           prop: 'name'
    //         },
    //         {
    //           label: '地址',
    //           childColumns: [
    //             {
    //               label: '省份',
    //               prop: 'province'
    //             },
    //             {
    //               label: '市区',
    //               prop: 'city'
    //             },
    //             {
    //               label: '地址',
    //               prop: 'address'
    //             },
    //             {
    //               label: '邮编',
    //               prop: 'zip'
    //             }
    //           ]
    //         }
    //       ]
    //     }
    //   ]
    // },
    // tableData() {
    //   return [
    //     {
    //       date: '2016-05-03',
    //       name: '王小虎',
    //       province: '上海',
    //       city: '普陀区',
    //       address: '上海市普陀区金沙江路 1518 弄',
    //       zip: 200333
    //     },
    //     {
    //       date: '2016-05-02',
    //       name: '王小虎',
    //       province: '上海',
    //       city: '普陀区',
    //       address: '上海市普陀区金沙江路 1518 弄',
    //       zip: 200333
    //     },
    //     {
    //       date: '2016-05-04',
    //       name: '王小虎',
    //       province: '上海',
    //       city: '普陀区',
    //       address: '上海市普陀区金沙江路 1518 弄',
    //       zip: 200333
    //     },
    //     {
    //       date: '2016-05-01',
    //       name: '王小虎',
    //       province: '上海',
    //       city: '普陀区',
    //       address: '上海市普陀区金沙江路 1518 弄',
    //       zip: 200333
    //     },
    //     {
    //       date: '2016-05-08',
    //       name: '王小虎',
    //       province: '上海',
    //       city: '普陀区',
    //       address: '上海市普陀区金沙江路 1518 弄',
    //       zip: 200333
    //     },
    //     {
    //       date: '2016-05-06',
    //       name: '王小虎',
    //       province: '上海',
    //       city: '普陀区',
    //       address: '上海市普陀区金沙江路 1518 弄',
    //       zip: 200333
    //     },
    //     {
    //       date: '2016-05-07',
    //       name: '王小虎',
    //       province: '上海',
    //       city: '普陀区',
    //       address: '上海市普陀区金沙江路 1518 弄',
    //       zip: 200333
    //     }
    //   ]
    // }
  }
}
</script>
