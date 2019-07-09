// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navs: ["湿垃圾", "干垃圾", "可回收物", "有害垃圾"],
    current: 0,
    list:[
      "艾草",
      "鹌鹑",
      "鹌鹑蛋",
      "鹌鹑蛋壳",
      "菠菜",
      "奥尔良鸡翅",
      "奥利奥饼干",
      "棒棒糖",
      "八宝粥",
      "布丁"
    ],
    list1: [
      "CD",
      "DVD",
      "KFC全家桶",
      "KFC食物包装",
      "KFC纸盒",
      "1号电池(无汞)",
      "5号电池(无汞)",
      "7号电池(无汞)",
      "艾草灰",
      "艾灸条"
    ], 
    list2: [
      "A4纸",
      "AD钙奶瓶",
      "KT板",
      "MP3",
      "PS4",
      "T恤",
      "USB线",
      "USB风扇",
      "U盘",
      "奥特曼玩具"
    ],
    list3: [
      "502胶水",
      "704粘合剂",
      "X光片",
      "保健品",
      "板蓝根冲剂",
      "玻璃药瓶",
      "充电电池",
      "电灯泡",
      "冻干粉",
      "打火机燃料罐"
    ],
    selcted:""
  },
  bun(e) {
    // console.log(e)
    var idx = e.target.dataset.idx
    this.setData({
      selcted:this.data.list[idx]
    })
    wx.showToast({
      title: this.data.selcted,
      image: '../../images/IMG_2042_03.png',
      duration: 1000
    })
  },
  bun1(e) {
    console.log(e)
    var idx = e.target.dataset.idx
    this.setData({
      selcted: this.data.list1[idx]
    })
    wx.showToast({
      title: this.data.selcted,
      image: '../../images/IMG_2042_05.png',
      duration: 1000
    })
  },
  bun2(e) {
    console.log(e)
    var idx = e.target.dataset.idx
    this.setData({
      selcted: this.data.list2[idx]
    })
    wx.showToast({
      title: this.data.selcted,
      image: '../../images/IMG_2042_07.png',
      duration: 1000
    })
  },
  bun3(e) {
    console.log(e)
    var idx = e.target.dataset.idx
    this.setData({
      selcted: this.data.list3[idx]
    })
    wx.showToast({
      title: this.data.selcted,
      image: '../../images/IMG_2042_09.png',
      duration: 1000
    })
  },
  changeCurrent(e) {
    this.setData({
      current: e.target.dataset.idx
    })
  },
  swiperchange(e) {
    this.setData({
      current: e.detail.current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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