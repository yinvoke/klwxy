// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isBind: wx.getStorageSync('isBind'),
    userData: {
      name: '游客'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  jumpRegister() {
    wx.navigateTo({
      url: '../bind/bind',
    })
  },
  logout() {
    wx.clearStorage()
    wx.exitMiniProgram({

    })
  },


  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  bind() {
    wx.navigateTo({
      url: '/pages/bind/bind'
    })
  }
})