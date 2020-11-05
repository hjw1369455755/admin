// pages/luck/luck.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deg: 0, // 初始化角度
    singleAngle: 60, // 每片扇形的角度
    awardNumer: 1, // 中奖区域 从1开始
    isStart: false,
    animationData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const animation = wx.createAnimation({
      duration: 2000,
      timingFunction: 'ease-in-out'
    })
    this.animation = animation
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