// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowTime: new Date().toLocaleString(),
    isActive: false,
    moives: [1,2,3,4]
  },

  handleSwitchColor() {
    this.setData({
      isActive: !this.data.isActive
      
    })
  },
  onLoad() {
    setInterval(() =>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  }
})