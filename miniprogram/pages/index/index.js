// index.js
// const amapFile = require('../../lib/amap-wx.js');
import request from '../../utils/request'
const app = getApp()
const APIMap = wx.getStorageSync('APIMap')
Page({
  data: {
    version: app.globalData.version,
    settlement: null,
    firstlook: false,
    weather: null,
    coverImgs: [],
  },
  onLoad(options) {


    // myAmapFun.getWeather({
    //   success: res => {
    //     res.icon = "cloud://lzcjwsh-sdx.6c7a-lzcjwsh-sdx-1258290674/newweathericon/" + res.weather.data + ".png"
    //     this.setData({
    //       weather: res,
    //     })
    //   }
    // })


   
    const that = this
    //获取轮播图

    request({
      url: APIMap['SYSTEM_COVER_IMG'],
      method: 'get'
    }).then(
      res => {
        that.setData({
          coverImgs: res
        })
      }
    )
  },
  onShow() {

  },



  /**阅读提示，每次提示更新修改数字为版本号即可 */
  readtip () {
    wx.setStorageSync('firstlook', this.data.version);
    this.setData({
      firstlook: false
    })
  },


  jumpproduct () {
    this.readtip()
    wx.navigateTo({
      url: '/pages/user/product/product' + "?log=true",
    })
  },
  jumprecruit () {
    this.readtip()
    wx.navigateTo({
      url: '/pages/user/recruit/recruit',
    })
  },
  jumptable () {
    wx.switchTab({
      url: '/pages/table/table',
    })
  },
  setting () {
    wx.navigateTo({
      url: '/pages/user/setting/serviceset/serviceset',
    })
  },
  jumpurl (e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },

  onShareAppMessage: function () {

  },
})