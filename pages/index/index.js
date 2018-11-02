//index.js
//获取应用实例
const util = require('../../utils/util.js')
const app = getApp()
//Page Object
Page({
  data: {
    curTime: ''
  },
  //options(Object)
  onLoad: function(options){
    // 拿到用户信息
    wx.getUserInfo({
      withCredentials: 'false',
      lang: 'zh_CN',
      timeout:10000,
      success: (result)=>{
        console.log(result, '000')
      },
      fail: ()=>{},
      complete: ()=>{}
    });
    // 拿到当前系统时间
    var time = util.formatTime(new Date())
    this.setData({
      curTime: time
    })
  },
  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});
