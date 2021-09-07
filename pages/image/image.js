// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: ''
  },
  handleChooseAlbum() {
    // 系统API 让用户选中图片或图片
    wx.chooseImage({
      success: (res) =>{
        const path = res.tempFilePaths[0]
        this.setData({
          imagePath: path
        })
      },
    })
  },

  handleImageLoad() {
    console.log('加载完成')
  }
})