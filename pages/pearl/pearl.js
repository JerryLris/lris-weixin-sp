// pages/pearl/pearl.js
Page({

  data: {
    listData: [],
    url: app.data.url
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: url+'/lrisweixin/pearlseven/getUserPearlByLimit',
      data: {},
      method: 'GET',
      success: function (res) {
        var list = res.data.areaList;
        if (list == null) {
          var toastText = '获取数据失败' + res.data.errMsg;
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000
          });
        } else {
          that.setData({
            listData: list
          });
        }
      }
    })
  }
})