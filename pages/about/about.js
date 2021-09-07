// pages/about/about.js
// 获取app.js的全局变量
const app = getApp()
console.log(app.gobalData.data)
Page({

  /**
   * 页面的初始数据
   */

   // ---------------------初始化数据------------------------------------
  data: {
    list: []
  },
// -------------------------监听生命周期函数-------------------------------
  handleGetUserInfo(event) {
    console.log('用户信息',event)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const this_ = this
    wx.request({
      url: 'http://152.136.185.210:7878/api/m5/recommend',
      success(res) {
        const data = res.data.data.list
        this_.setData({
          list: data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

// 监听其他事件 -------------------------------
onPageScroll(obj) {
  console.log(obj)
},

//监听页面滚动到底部
onReachBottom() {
  console.log('页面到底部')
},

// 顶部下拉刷新
onPullDownRefresh() {
  console.log('下拉刷新')
}
})