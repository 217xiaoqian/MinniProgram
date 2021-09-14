// pages/home/home.js
import request from '../../service/network'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 发送网络请求
    // wx.request({
    //   url: 'http://152.136.185.210:7878/api/m5/recommend',
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })

    // 使用封装的request发送网络请求
    request({
      url: 'http://152.136.185.210:7878/api/m5/recommend'
    }).then(res =>{
      console.log(res)
    })
  },
})