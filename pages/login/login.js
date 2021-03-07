// pages/login/login.js
Page({
    data: {
      Tid:"",
      Tpwd:"",
      hint:"",
      login:{
        user:"请输入职工号",
        psw:"请输入邮箱验证码",
        captcha:"获取验证码",
        

        // hint:"职工号错误",
      },
      
      user_psw: [
          {
            "src": "icon-fukuan",
            "text": "用户",
          },
          {
            "src": "icon-shuohuaqipao",
            "text": "密码",
          },
      ]
    },

    TidInput:function (e) {
      this.setData({
        Tid: e.detail.value
      });
    },
    TpwdInput:function (e) {
      this.setData({
        Tpwd: e.detail.value
      });
    },
    setHint:function (hint_) {
      this.setData({
        hint: hint_
      }); 
    },
    
    login: function(){
      var this_ = this;
      if(this.data.Tid==""){
        this_.setHint("您的职工号似乎没输入:)")
      }
      else if(this.data.Tpwd==""){
        this_.setHint("您的验证码似乎没输入:)")
      }
      else {
        wx.request({
          method:'post',
          url: getApp().url+"/loginBypwd", 
          data: {
            "Tid": this.data.Tid,
            "Tpwd": this.data.Tpwd
          },
          header: {
              'content-type': 'application/x-www-form-urlencoded'
          },
          success: function(res) {
            if(res.data.code==0){
              try {
                
                wx.setStorageSync('a', res.data.info.a)
                wx.setStorageSync('r', res.data.info.r)
                wx.setStorageSync('i', this_.data.Tid)
                // wx.setStorage({key:'a', data:res.data.info.a})
                // wx.setStorage({key:'r', data:res.data.info.r})
                // wx.setStorage({key:'i', data:this_.data.Tid})

                getApp().Tid=this_.data.Tid;
                getApp().Tname=res.data.info.Tname;
                this_.setData({
                  Tpwd: "小伙子想看密码？"
                });
                wx.switchTab({
                  url: '/pages/index/index'
                });
              } catch (e) { console.log(e);}
              
            }
            else this_.setHint(res.data.info)
          }
        })
      }
    },
    getCaptcha: function(){
      var this_ = this;
      if(this.data.Tid){
        wx.request({
          method:'post',
          url: getApp().url+"/getCaptcha", //仅为示例，并非真实的接口地址
          data: {
            "Tid": this.data.Tid
          },
          header: {
              'content-type': 'application/x-www-form-urlencoded'
          },
          success: function(res) {
            if(res.data.code==0){
              this_.setHint(res.data.info);  
            }
            // console.log("2323");
          }
        })
      }
      else this.setHint("您的职工号似乎没输入:)");
      
    },
    login_action: function (Tid,res) {
      
    },
    onLoad: function (options) {
      var this_ = this;
      var i = wx.getStorageSync('i');
      var a = wx.getStorageSync('a');
      var r = wx.getStorageSync('r');
      // console.log("1");
      if(a!=""&&i!=""){
        // console.log("2");
        wx.request({
          method:'post',
          url: getApp().url+"/loginByaccess", //仅为示例，并非真实的接口地址
          data: {
            "Tid": i,
            "access": a
          },
          header: {
              'content-type': 'application/x-www-form-urlencoded'
          },
          success: function(res) {
            if(res.data.code==0){
              // console.log("3");
              try{
                wx.setStorageSync('a', res.data.info.a)
                wx.setStorageSync('r', res.data.info.r)
                getApp().Tid=i;
                getApp().Tname=res.data.info.Tname;
                this_.setData({
                  Tpwd: "小伙子想看密码？"
                });
                wx.switchTab({
                  url: '/pages/index/index'
                });
              }
              catch(e){console.log(e);}
              // for (var _item of res.data.info){
              //   a.push({name:"恋爱心理",css:""})
              // }
              // getApp().Eyear = a;
            }
            else{
              // console.log("4");
              wx.request({
                method:'post',
                url: getApp().url+"/refresh", //仅为示例，并非真实的接口地址
                data: {
                  "Tid": i,
                  "refresh": r
                },
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                success: function(res) {
                  if(res.data.code==0){
                    wx.setStorageSync('a', res.data.info.a)
                    wx.setStorageSync('r', res.data.info.r)
                    // wx.setStorage({key:'a', data:res.data.info.a})
                    // wx.setStorage({key:'r', data:res.data.info.r})
                    // wx.setStorage({key:'i', data:this_.data.Tid})
                    wx.switchTab({
                      url: '/pages/index/index'
                    });
                  }
                  else{
                    // console.log("5");
                  }
                }
              })
            }
          }
        })
      }
    },
})