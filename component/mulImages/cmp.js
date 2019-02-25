// component/mulImages/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     imgArr:Array,
     text:String
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
    onPreImgs:function(e){
      wx.previewImage({
        urls : this.properties.imgArr,
        current:this.properties.imgArr[e.currentTarget.dataset.imgindex]
      })
    }
  }
})
