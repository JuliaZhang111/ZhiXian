//app.js
App({
    onLaunch: function () {
        // 初始化云开发环境
        if (!wx.cloud) {
            console.error('请使用 2.2.3 或以上的基础库以使用云能力')
        } else {
            wx.cloud.init({
                env: 'zhixian-3bw69',
                traceUser: true,
            })
        }
      
    },

    //检测是否登录函数
    // 为登录则提示登录
    

    globalData: {
        userInfo: null,
        UserLogin:false
    }
})