// app.js
import request from './utils/request'
App({
  onLaunch() {
    let that = this
    const token = wx.getStorageSync('token')
    request({
      url: 'https://lancai.kaolastudio.com:9099/config/entrance.json',
      method: 'get'
    }).then(
      res => {
        wx.setStorageSync('APIMap', res)
        this.globalData.APIMap = res
      }
    ).then(res => {
      if (!token) this.login()
      else
        request({
          method: 'GET',
          url: this.globalData.APIMap['USER_ISLOGIN'],
        }).then(res => {
          if (res?.data?.object !== true) {
            this.login()
          }
        })
    })
  },
  login() {
    const APIMap = wx.getStorageSync('APIMap')
    wx.login({
      success: (res) => {
        request({
          method: 'POST',
          url: APIMap['USER_LOGIN_BY_WECHAT'],
          data: {
            jscode: res.code
          }
        }).then(res => {
          if (res.code !== 0) return Toast.fail(res.message)
          const token = {}
          token[res.object.token.tokenName] = res.object.token.tokenValue
          wx.setStorageSync('token', token)
          wx.setStorageSync('loginId', res.object.token.loginId)
          wx.setStorageSync('sessionKey',
            res.object.sessionKey)
        }).then(res => {
          request({
            url: APIMap['USER_IS_BIND'],
          }).then(res => {
            wx.setStorageSync('isBind', res?.object)
          })
        })
      },
      fail: (err => {
        Toast.fail('登陆失败，请重新登录')
      })
    })

  },
  globalData: {
    version: "v4.0.0",
    APIMap: {}
  }
});