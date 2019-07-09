// pages/itemdetail/itemdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailList:[
      [
        {
          itemName:"整只小龙虾",
          src:"../../images/IMG_2048_04.png",
          classify:"湿垃圾"
        },
        {
          itemName: "去黄龙虾壳",
          src: "../../images/IMG_2047_06.png",
          classify: "湿垃圾"
        },
        {
          itemName: "龙虾壳",
          src: "../../images/IMG_2047_08.png",
          classify: "湿垃圾"
        },
        {
          itemName: "龙虾肉",
          src: "../../images/IMG_2047_10.png",
          classify: "湿垃圾"
        },
        {
          itemName: "龙虾黄",
          src: "../../images/IMG_2047_12.png",
          classify: "湿垃圾"
        }
      ],
      [
        {
          itemName: "整只粽子",
          src: "../../images/IMG_2046_03.png",
          classify: "湿垃圾"
        },
        {
          itemName: "粽叶",
          src: "../../images/IMG_2046_06.png",
          classify: "干垃圾"
        },
        {
          itemName: "粽子馅",
          src: "../../images/IMG_2046_08.png",
          classify: "湿垃圾"
        },
        {
          itemName: "粽子绳",
          src: "../../images/IMG_2046_10.png",
          classify: "干垃圾"
        },
        {
          itemName: "蛋黄",
          src: "../../images/IMG_2046_12.png",
          classify: "湿垃圾"
        }
      ],
      [
        {
          itemName: "没喝完的奶茶",
          src: "../../images/IMG_2045_03.png",
          classify: "倒掉"
        },
        {
          itemName: "奶茶杯",
          src: "../../images/IMG_2045_06.png",
          classify: "干垃圾"
        },
        {
          itemName: "奶茶杯盖",
          src: "../../images/IMG_2045_08.png",
          classify: "湿垃圾"
        },
        {
          itemName: "奶茶杯身",
          src: "../../images/IMG_2045_10.png",
          classify: "干垃圾"
        },
        {
          itemName: "珍珠",
          src: "../../images/IMG_2045_12.png",
          classify: "湿垃圾"
        }
      ],
      [
        {
          itemName: "干电池",
          src: "../../images/IMG_2048_13.png",
          classify: "干垃圾"
        },
        {
          itemName: "充电宝",
          src: "../../images/IMG_2044_03.png",
          classify: "可回收垃圾"
        },
        {
          itemName: "手机电池",
          src: "../../images/IMG_2044_06.png",
          classify: "有害垃圾"
        },
        {
          itemName: "蓄电池",
          src: "../../images/IMG_2044_08.png",
          classify: "有害垃圾"
        }
      ]
    ],
    showList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var idx = options.idx
    this.setData({
      showList:this.data.detailList[idx]
    })
  },
  showTap(e){
    console.log(e)
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

  }
})