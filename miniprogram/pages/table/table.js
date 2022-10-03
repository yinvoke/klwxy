// pages/table/table.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weeks: ["第一周", "第二周", "第三周", "第四周", "第五周", "第六周", "第七周", "第八周", "第九周", "第十周", "第十一周", "第十二周", "第十三周", "第十四周", "第十五周", "第十六周", "第十七周", "第十八周"],
    weekIndex: 0,
    colorArrays: ["#96bb7c", "#ff9f7f", "#16c79a", "#e7bcf3", "#fb7293", "#9fe6b8", "#ffdb5c", "#93abd3", "#67e0e3", "#ffabe1"],
    colorMap: {},
    wlist: [],
    all: 0,
    isBind: wx.getStorageSync('isBind')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    wx.setNavigationBarTitle({
      title: `${year} — ${year+1}学年 ${month > 2 && month < 8 ? '春季学期' : '秋季学期'}`,
    })

  },

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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

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

  bind: () => {
    wx.navigateTo({
      url: '/pages/bind/bind'
    })
  }
})