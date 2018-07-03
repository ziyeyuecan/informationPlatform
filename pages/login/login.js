//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userName: null,
    passworld: null
  },
  onLoad: function () {
    
  },
  userNameInput (e) {
    var value = e.detail.value
    this.setData({
      userName: value
    })
  },
  passworldInput(e) {
    var value = e.detail.value
    this.setData({
      passworld: value
    })
  },
  login: function (e) {
    app.globalData.userName = this.data.userName
    console.log('login - ' + app.globalData.userName)
    if (app.globalData.userName) {
      wx.switchTab({
        url: '../user/user',
      })
    } else {
      console.log('请登录')
    }
    
  }
})
