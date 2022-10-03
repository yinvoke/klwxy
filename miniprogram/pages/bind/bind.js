// pages/bind/bind.js
import Toast from '@vant/weapp/toast/toast';
import request from '../../utils/request'
const app = getApp()
const APIMap = wx.getStorageSync('APIMap')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showpassword: "closed-eye",
    ispwd: true,
    eduUsername: undefined,
    eduPassword: undefined,
    jscode: undefined
  },
  onShow() {
    let that = this
    wx.login({
      success(res) {
        if (res.code) {
          that.setData({
            jscode: res.code
          })
        } else {
          console.log('微信error！' + res.errMsg)
        }
      }
    })
  },
  bind() {
    if (this.data.eduPassword && this.data.eduUsername) {
      request({
        url: APIMap['USER_BIND_REQUEST'],
        method: 'post',
        data: {
          eduUsername: this.data.eduUsername.trim(),
          eduPassword: this.data.eduPassword.trim(),
          username: wx.getStorageSync('loginId'),
          jscode: this.data.jscode
        }
      }).then(
        res => {
          if (res.code == 0) {
            wx.requestSubscribeMessage({
              tmplIds: ['HFwfg-cGLiCN7E5_NgZaTTCbMj4SyeoOc3GJ3Gi-sWg'],
              success(res) {
                console.log(res)
                if (res['HFwfg-cGLiCN7E5_NgZaTTCbMj4SyeoOc3GJ3Gi-sWg'] === 'accept')
                  Toast.success("我们将于注册成功后通知您")
              },
              fail(res) {
                console.log(res)
                Toast.fail("由于您未开启通知，请于24小时候自行查看是否注册成功")
              },
            })
            // wx.navigateBack({
            //   delta: 0,
            // })
          } else {
            Toast.fail(res.message)
          }
        }
      )
    } else {
      Toast.fail('请输入用户名和密码');
    }
  },

  eduUsernameInput(e) {
    this.setData({
      eduUsername: e.detail.value
    });
  },

  eduPasswordInput(e) {
    this.setData({
      eduPassword: e.detail.value
    });
  },
  tapHelp(e) {
    if (e.target.id == 'help') {
      this.hideHelp();
    }
  },
  showHelp(e) {
    this.setData({
      help_status: true
    });
  },
  hideHelp(e) {
    this.setData({
      help_status: false
    });
  },
  /**查看密码 */
  change() {
    if (this.data.showpassword == 'closed-eye') {
      this.setData({
        showpassword: 'eye-o',
        ispwd: false
      });
    } else {
      this.setData({
        showpassword: 'closed-eye',
        ispwd: true
      });
    }

  },
})