// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    content: {
      type: String,
      value: '222',
      // 观察者
      observer: function(newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    }
  },
  externalClasses: [
    'titleclass',
    'contentclass'
  ],

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
