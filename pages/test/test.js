// pages/test/test.js
var array = []
var score =0
Page({

  /**
   * 页面的初始数据
   */

  data: {
    lists: [{
        "title": "密封袋",
        "item": "有害垃圾"
      },
      {
        "title": "胶片",
        "item": "干垃圾"
      },
      {
        "title": "人丹",
        "item": "有害垃圾"
      },
      {
        "title": "垃圾箱",
        "item": "可回收物"
      },
      {
        "title": "药水玻璃瓶",
        "item": "有害垃圾"
      },
      {
        "title": "牙套",
        "item": "干垃圾"
      },
      {
        "title": "化学剂桶",
        "item": "有害垃圾"
      },
      {
        "title": "保健品",
        "item": "有害垃圾"
      },
      {
        "title": "药丸",
        "item": "有害垃圾"
      },
      {
        "title": "葡萄酒木塞",
        "item": "干垃圾"
      },
    ],
    num: 1,
    index: 0,
    answer: [],
    flag:true,
    flag1:false,
    gou:"√",
    count:0
  },
  settitle(e) {
    var obj = {}
    var title = this.data.lists[this.data.index].title
    var item = this.data.lists[this.data.index].item
    obj.title = title
    obj.item = item
    obj.name = e.target.dataset.name
    array.push(obj)
    // console.log(array)
    // console.log(this.data.answer)
    if (this.data.num == 10) {
      console.log("xxxxxxxx")
      this.settitle = null;
      this.setData({
        flag: false,
        flag1: true,
        answer: array,
      })

      for (var i = 0; i < this.data.answer.length; i++) {
        console.log("sssssssss")
        if (this.data.answer[i].name == this.data.answer[i].item) {
          score += 10

        }
      }
      this.setData({
        count: score

      })
      // console.log(this.data.count)
    }
    this.setData({
      index: this.data.index + 1,
      num: this.data.num + 1,
    })
  },
  settitle1(e) {
    var obj = {}
    var title = this.data.lists[this.data.index].title
    var item = this.data.lists[this.data.index].item
    obj.title = title
    obj.item = item
    obj.name = e.target.dataset.name
    array.push(obj)
    // console.log(array)
    // console.log(this.data.answer)
    if (this.data.num == 10) {
      console.log("xxxxxxxx")
      this.settitle = null;
      this.setData({
        flag: false,
        flag1: true,
        answer: array,
      })

      for (var i = 0; i<this.data.answer.length; i++){
        console.log("sssssssss")
        if (this.data.answer[i].name == this.data.answer[i].item){
          score+=10
         
        }
      }
      this.setData({
        count: score
        
      })
      // console.log(this.data.count)
    }
    this.setData({
      index: this.data.index + 1,
      num: this.data.num + 1,
    })
  },
  settitle2(e) {
    var obj = {}
    var title = this.data.lists[this.data.index].title
    var item = this.data.lists[this.data.index].item
    obj.title = title
    obj.item = item
    obj.name = e.target.dataset.name
    array.push(obj)
    // console.log(array)
    // console.log(this.data.answer)
    if (this.data.num == 10) {
      console.log("xxxxxxxx")
      this.settitle = null;
      this.setData({
        flag: false,
        flag1: true,
        answer: array,
      })

      for (var i = 0; i < this.data.answer.length; i++) {
        console.log("sssssssss")
        if (this.data.answer[i].name == this.data.answer[i].item) {
          score += 10

        }
      }
      this.setData({
        count: score

      })
      // console.log(this.data.count)
    }
    this.setData({
      index: this.data.index + 1,
      num: this.data.num + 1,
    })
  },
  settitle3(e) {
    var obj = {}
    var title = this.data.lists[this.data.index].title
    var item = this.data.lists[this.data.index].item
    obj.title = title
    obj.item = item
    obj.name = e.target.dataset.name
    array.push(obj)
    // console.log(array)
    // console.log(this.data.answer)
    if (this.data.num == 10) {
      console.log("xxxxxxxx")
      this.settitle = null;
      this.setData({
        flag: false,
        flag1: true,
        answer: array,
      })

      for (var i = 0; i < this.data.answer.length; i++) {
        console.log("sssssssss")
        if (this.data.answer[i].name == this.data.answer[i].item) {
          score += 10

        }
      }
      this.setData({
        count: score

      })
      // console.log(this.data.count)
    }
    this.setData({
      index: this.data.index + 1,
      num: this.data.num + 1,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '随堂测试'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})