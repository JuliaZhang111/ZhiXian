// miniprogram/pages/login2.js
let app = getApp();
// 获取数据库引用
const db = wx.cloud.database();
const userListDB = db.collection('UserList');

let username = null;
let password = null;


Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    
      
    },

  

  /**
   * 生命周期函数--监听页面加载
   */
  getUsername(event) {
    console.log( event.detail.value)
    username = event.detail.value;

  },
  //获取输入的密码
  getPassword(event) {
    console.log(event.detail.value)
    password = event.detail.value;
  },

  login() {
    let that = this;
    
    //登陆获取用户信息
    userListDB.where({
     _openid: app.globalData.openid
    }).get({
     success:function(res) {
      let userInfos = res.data;
      console.log(res.data)
      if (userInfos && userInfos.length >= 0) {
       let user = userInfos[0]
       
       if (user.name !== username) {
        console.log(username)
        wx.showModal({
          title: '用户名不匹配',
   
          confirmText: '确定',
   
       
        content: '请重新输入用户名',
   
        success: function (res) {
       if (res.confirm) {
              return;
               }
   
                 
   
              }
   
             })

        
       } else if (user.password !== password) {
        console.log(password)
        wx.showModal({
          title: '密码不匹配',
   
          confirmText: '确定',
   
       
        content: '请重新输入密码',
   
        success: function (res) {
       if (res.confirm) {
              return;
               }
   
                 
   
              }
   
             })
       } else {
        console.log(username)
        wx.showModal({
          title: '登录成功',
   
          confirmText: '确定',
   
         cancelText: '取消',
   
        content: '点击确定，直线实习欢迎你',
   
        success: function (res) {
       if (res.confirm) {
               wx.switchTab({
                 url: '../home/home',
               })
   
                  } else if (res.cancel) {
               return;
   
              }
   
             }
   
    })
       
       }
      } else {
       app.showTips('用户不存在');
      }
     }
    })
   },
   home(){
    wx.switchTab({
      url: '../home/home',
     })
   
    },
  
 



  onLoad: function (e) {

  
      
      

  
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

  /*
  Navigate: function (e) {
    wx.switchTab({
      url: '../home/home',
    })
  },*/

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
