Page({
  data: {
    name:"",
    elabel:"2019-1 学评教",
    swiperList: [
      "http://www.hdu.edu.cn/uploads/images/20200423/202004231246411000.jpg",
      "http://www.hdu.edu.cn/uploads/images/20190401/201904011018051000.jpg",
      "http://www.hdu.edu.cn/uploads/images/20190912/201909121632111000.jpg"
    ],
    e:{
      srank:{
        name:"学校排名",
        value:"100"
      },
      prank:{
        name:"学院排名",
        value:"100"
      },
      score:{
        name:"总共得分",
        value:"100"
      },
      participate:{
        name:"参评人次",
        value:"100"
      },
    },
    c:[],
    a:{
      alabel:"2018-2019 教学业绩考核",
      accident:"未", //已出现教学事故
      info:"S3总分100分封顶，S4总分100分封顶", // 备注
      aitem:[
        {
          icon:"icon-shuohuaqipao",
          name:"考核等级",
          value:"A"
        },
        {
          icon:"icon-shuohuaqipao",
          name:"教学学时",
          value:"100"
        },
        {
          icon:"icon-shuohuaqipao",
          name:"考核分数",
          value:"100"
        }
      ] 
    },
    contentOpacity:0.0,
    zIndex:10,
    cap_info:{},
  },
  onLoad: function () {
    var _this = this;
    _this.setData({
      name:getApp().Tname
    })
    wx.request({
      method:'post',
      url: getApp().url+"/AgetLast", //仅为示例，并非真实的接口地址
      data: {
        "ATid": getApp().Tid,
        "access": wx.getStorageSync('a')
      },
      header: {
          'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        var temp = res.data.info;
        _this.setData({
          a:{
            alabel: temp.Atime+"-"+(temp.Atime+1)+" 教学业绩考核",
            accident: temp=="否"?"有":"未", //已出现教学事故
            info: temp.Ainfo,
            aitem:[
              {
                icon:"icon-shuohuaqipao",
                name:"考核等级",
                value: temp.Agrade
              },
              {
                icon:"icon-shuohuaqipao",
                name:"教学学时",
                value: temp.Ahour
              },
              {
                icon:"icon-shuohuaqipao",
                name:"考核分数",
                value: temp.Ascore
              }
            ]
          }
        })
      },
      fail:function (res) {
        console.log("fail AgetLast years"+res);
      }
    })

    wx.request({
      method:'post',
      url: getApp().url+"/CgetLast", //仅为示例，并非真实的接口地址
      data: {
        "CTid": getApp().Tid,
        "access": wx.getStorageSync('a')
      },
      header: {
          'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        var a = [];
        for (var _item of res.data.info){
          a.push({
            name: _item.Cname,
            cid: _item.CCid,
            item:[
              {
                name:"总共得分",
                value: _item.Cscore
              },
              {
                name:"参评人数",
                value: _item.Cparticipate
              },
              {
                name:"教学能力",
                value:_item.Cscore_1
              },
              {
                name:"教学态度",
                value:_item.Cscore_2
              },
              {
                name:"师生交流",
                value:_item.Cscore_3
              },
              {
                name:"教学效果",
                value:_item.Cscore_4
              }
            ]
          })
        }
        _this.setData({
          c : a
        })
      },
      fail:function (res) {
        console.log("fail CgetLast years"+res);
      }
    })
    
    wx.request({
      method:'post',
      url: getApp().url+"/EgetLast", //仅为示例，并非真实的接口地址
      data: {
        "ETid": getApp().Tid,
        "access": wx.getStorageSync('a')
      },
      header: {
          'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        _this.setData({
          e:{
            srank:{
              name:"学校排名",
              value:res.data.info.Esrank
            },
            prank:{
              name:"学院排名",
              value:res.data.info.Eprank
            },
            score:{
              name:"总共得分",
              value:res.data.info.Escore
            },
            participate:{
              name:"参评人次",
              value:res.data.info.Eparticipate
            },
          },
        })
      },
      fail:function (res) {
        console.log("fail EgetLast years"+res);
      }
    })
    // console.log("EGetAllYears");
    wx.request({
      method:'post',
      url: getApp().url+"/EGetAllYears", //仅为示例，并非真实的接口地址
      data: {
        "ETid": getApp().Tid,
        "access": wx.getStorageSync('a')
      },
      header: {
          'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        var a = [];
        for (var _item of res.data.info){
          a.push({name:_item,css:""})
        }
        getApp().Eyear = a;
      },
      fail:function (res) {
        console.log("fail EGetAll years"+res);
      }
    });
    // console.log("AGetAllYears");
    wx.request({
      method:'post',
      url: getApp().url+"/AGetAllYears", //仅为示例，并非真实的接口地址
      data: {
        "ATid": getApp().Tid,
        "access": wx.getStorageSync('a')
      },
      header: {
          'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        var a = [];
        for (var _item of res.data.info){
          a.push({name:_item,css:""})
        }
        getApp().Ayear = a;
      },
      fail:function (res) {
        console.log("fail EGetAll years"+res);
      }
    })
  
  },
  onReady: function () {
    this.setData({
      cap_info : getApp().cap_info,
      user : getApp().user,
      contentOpacity: 1.0
      // css 采用transition 可以不用js实现渐现
    })
  },
  // onPageScroll: function (e) {
  //   this.setData({
  //     headerOpacity : e.scrollTop/300
  //   })
    
  // }
})