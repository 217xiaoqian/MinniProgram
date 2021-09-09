// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['shoes', 'clothes', 'trousers']

  },

  handleClick() {
    console.log('呗今典')
  },

  handleTouchStart() {
    console.log("handleTouchStart")
  },

  handleTouchMove() {
    console.log("handleTouchMove")
  },
  handleTouchEnd() {
    console.log("handleTouchEnd")
  },
  handleLongpress() {
    console.log("handleLongpress")
  },

  handleEventClick(event) {
    console.log(event)
  },
  handleEventEnd(event) {
    console.log('+++++++', event)
  },

  handleOuterClick(event) {
    console.log('outer', event)
  },
  handleinnerClick(event) {
    console.log('inner', event)
  },
  handleItemClick(event) {
    console.log(event.currentTarget.dataset.index)
    console.log(event.currentTarget.dataset.item)
  },
  // ------事件冒泡和捕获--------------
  handleCaptureView1() {
    console.log('handleCaptureView1')
  },
  handleClickView1() {
    console.log('handleClickView1')
  },
  handleCaptureView2() {
    console.log('handleCaptureView2')
  },
  handleClickView2() {
    console.log('handleClickView2')
  },
  handleCaptureView3() {
    console.log('handleCaptureView3')
  },
  handleClickView3() {
    console.log('handleClickView3')
  },
})