// components/my-mslot/my-mslot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  options: {
    multipleSlots: true
  },
  // 外界给组件传入额外的样式
  externalClasses:[],

  // ------------- 监听properties/data的改变 -------
  observers: {},

  // ------- 组件中监听生命周期函数 -----------------
  // 1 监听所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log('监听组件所在页面显示出来')
    },
    hide() {
      console.log('监听组件所在页面隐藏')
    },
    resize() {
      console.log('监听页面尺寸改变')
    }
  },
  // 2 监听组件的生命周期
  lifetimes: {
    created() {
      console.log('组件创建')
    },
    attached() {
      console.log('组件被添加')
    },
    ready() {
      console.log('组件渲染')
    },
    moved() {
      console.log('组件移动到另外一个节点')
    },
    detached() {
      console.log('组件移除')
    }
  },


  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
