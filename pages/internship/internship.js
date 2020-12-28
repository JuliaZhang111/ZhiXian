//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    option1: [
      { text: '北京', value: 0 },
      { text: '上海', value: 1 },
      { text: '武汉', value: 2 },
    ],
    option2: [
      { text: '100以下', value: 'a' },
      { text: '100-200', value: 'b' },
      { text: '200以上', value: 'c' },
    ],
    option3: [
      { text: '产品', value: 'm' },
      { text: '运营', value: 'l' },
      { text: '市场', value: 'n' },
    ],
    value1: 0,
    value2: 'a',
    value3:'m'
  },
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    show:false;//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData:['北京','上海','广州','武汉','深圳','长沙'];
    index:0//选择的下拉列表下标
  },
  // 点击下拉显示框
  selectTap(){
    this.setData({
      show: !this.data.show
    });
  },
  // 点击下拉列表
  optionTap(e){
    let Index=e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index:Index,
      show:!this.data.show
    });
  },
  onLoad: function (options) {
  
  }

})
