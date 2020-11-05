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
  start(){
    console.log(1)
    if (this.isStart) return
    let tmpnum = Math.random()
    tmpnum = tmpnum < 0.5 ? tmpnum + 0.1 : tmpnum - 0.1
    const endAddAngle = (this.awardNumer - 1 + tmpnum) * this.singleAngle + 360 // 中奖角度
    const rangeAngle = (Math.floor(Math.random() * 4) + 4) * 360 // 随机旋转几圈再停止
    this.animation.rotate(this.deg + endAddAngle + rangeAngle).step()
    this.animationData = this.animation.export()
    this.deg += rangeAngle
    //this.$apply()
  },
  
  closeWin(){
    console.log(2)
    this.animation.rotate(0).step()
    this.animationData = this.animation.export()
    this.deg = 0
    //this.$apply()
  },
  methods(){
  
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