// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handleChange() {
    // 修改my-sel中的count
    // 获取组件对象
    // const my_sel = this.selectComponent('#sel-id')
    const my_sel = this.selectComponent('.sel-class')
    // 直接修改变量(不合理)
    // my_sel.setData({
    //   count: my_sel.data.count + 20
    // })

    // 推荐使用  在组件的js中暴露方法
    my_sel.increment(10)
  },
})