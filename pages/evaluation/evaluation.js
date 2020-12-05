Page({
    data: {
        hide:{
            choice_1:"choice_hide",
        },
        cap_info:{},
        combobox:{},
        evaluation:{
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
        c:[
          {
            name:"物联网技术基础",
            cid:"(2019-2020-1)-B0405450-42119-1",
            item:[
              {
                name:"总共得分",
                value:"100",
              },
              {
                name:"参评人数",
                value:"100"
              },
              {
                name:"教学能力",
                value:"100"
              },
              {
                name:"教学态度",
                value:"100"
              },
              {
                name:"师生交流",
                value:"100"
              },
              {
                name:"教学效果",
                value:"100"
              }
            ]
          },
          {
              name:"物联网技术基础",
              cid:"(2019-2020-1)-B0405450-42119-1",
              item:[
                {
                  name:"总共得分",
                  value:"100",
                },
                {
                  name:"参评人数",
                  value:"100"
                },
                {
                  name:"教学能力",
                  value:"100"
                },
                {
                  name:"教学态度",
                  value:"100"
                },
                {
                  name:"师生交流",
                  value:"100"
                },
                {
                  name:"教学效果",
                  value:"100"
                }
              ]
            },
            {
              name:"物联网技术基础",
              cid:"(2019-2020-1)-B0405450-42119-1",
              item:[
                {
                  name:"总共得分",
                  value:"100",
                },
                {
                  name:"参评人数",
                  value:"100"
                },
                {
                  name:"教学能力",
                  value:"100"
                },
                {
                  name:"教学态度",
                  value:"100"
                },
                {
                  name:"师生交流",
                  value:"100"
                },
                {
                  name:"教学效果",
                  value:"100"
                }
              ]
            },
            {
              name:"物联网技术基础",
              cid:"(2019-2020-1)-B0405450-42119-1",
              item:[
                {
                  name:"总共得分",
                  value:"100",
                },
                {
                  name:"参评人数",
                  value:"100"
                },
                {
                  name:"教学能力",
                  value:"100"
                },
                {
                  name:"教学态度",
                  value:"100"
                },
                {
                  name:"师生交流",
                  value:"100"
                },
                {
                  name:"教学效果",
                  value:"100"
                }
              ]
            },
            {
              name:"物联网技术基础",
              cid:"(2019-2020-1)-B0405450-42119-1",
              item:[
                {
                  name:"总共得分",
                  value:"100",
                },
                {
                  name:"参评人数",
                  value:"100"
                },
                {
                  name:"教学能力",
                  value:"100"
                },
                {
                  name:"教学态度",
                  value:"100"
                },
                {
                  name:"师生交流",
                  value:"100"
                },
                {
                  name:"教学效果",
                  value:"100"
                }
              ]
            },
            {
              name:"物联网技术基础",
              cid:"(2019-2020-1)-B0405450-42119-1",
              item:[
                {
                  name:"总共得分",
                  value:"100",
                },
                {
                  name:"参评人数",
                  value:"100"
                },
                {
                  name:"教学能力",
                  value:"100"
                },
                {
                  name:"教学态度",
                  value:"100"
                },
                {
                  name:"师生交流",
                  value:"100"
                },
                {
                  name:"教学效果",
                  value:"100"
                }
              ]
            },
            {
              name:"物联网技术基础",
              cid:"(2019-2020-1)-B0405450-42119-1",
              item:[
                {
                  name:"总共得分",
                  value:"100",
                },
                {
                  name:"参评人数",
                  value:"100"
                },
                {
                  name:"教学能力",
                  value:"100"
                },
                {
                  name:"教学态度",
                  value:"100"
                },
                {
                  name:"师生交流",
                  value:"100"
                },
                {
                  name:"教学效果",
                  value:"100"
                }
              ]
            },
            {
              name:"物联网技术基础",
              cid:"(2019-2020-1)-B0405450-42119-1",
              item:[
                {
                  name:"总共得分",
                  value:"100",
                },
                {
                  name:"参评人数",
                  value:"100"
                },
                {
                  name:"教学能力",
                  value:"100"
                },
                {
                  name:"教学态度",
                  value:"100"
                },
                {
                  name:"师生交流",
                  value:"100"
                },
                {
                  name:"教学效果",
                  value:"100"
                }
              ]
            },
            {
              name:"物联网技术基础",
              cid:"(2019-2020-1)-B0405450-42119-1",
              item:[
                {
                  name:"总共得分",
                  value:"100",
                },
                {
                  name:"参评人数",
                  value:"100"
                },
                {
                  name:"教学能力",
                  value:"100"
                },
                {
                  name:"教学态度",
                  value:"100"
                },
                {
                  name:"师生交流",
                  value:"100"
                },
                {
                  name:"教学效果",
                  value:"100"
                }
              ]
            }
        ],
        opacity_shield:0,
        z_shield:0,
        scrollEnable:"relative",
    },
    shield:function(e) {
        let type = parseInt(e.currentTarget.dataset.type);
        
        this.setData({'hide.choice_1':"choice_hide"}); 

        this.setData({
            opacity_shield:0,
            z_shield:0,
            scrollEnable:"relative"
        });
    },
    filter:function(e){
        
        let _combobox = this.data.combobox;
        let last_index = this.data.combobox.last_index;
        let choice = parseInt(e.currentTarget.dataset.choice);
        // console.log(e);
        _combobox.child[last_index].css = "";
        _combobox.child[choice].css="active";
        _combobox.name = _combobox.child[last_index].name;

        _combobox.last_index = choice;
        this.setData({
            combobox : _combobox
        });
        this.choiceChange_1();
        // get data
    },
    choiceChange_1:function () {
        // console.log("change_1",this.data.hide.filter,this.data.hide.choice_1,this.data.hide.choice_2,this.data.hide.choice_3);
        if(this.data.hide.choice_1=="choice_hide"){
            this.setData({
                opacity_shield:0.2,
                z_shield:3,
                scrollEnable:"fixed"
            });

            this.setData({"hide.choice_1":""});
        } 
        else if(this.data.hide.choice_1==""){
            this.setData({"hide.choice_1":"choice_hide"});
            this.setData({
                opacity_shield:0,
                z_shield:0,
                scrollEnable:"relative"
            });
        } 
    },
    trim:function(str){
      var reg = /(\d{4})-(\d{1})/;
      let temp = reg.exec(str);
      return temp[1]+"-"+(parseInt(temp[1])+1)+"-"+temp[2];
    },
    onLoad: function () {
      let _this = this;
      let _combobox = {
        last_index: 0,
        name: "",
        child: getApp().Eyear
      };
      let index = _combobox.last_index;
      _combobox.name = _combobox.child[index].name;
      _combobox.child[index].css = "active";
      _this.setData({
          cap_info : getApp().cap_info,
          combobox:_combobox
        });
      wx.request({
        method:'post',
        url: getApp().url+"/EGetOne", //仅为示例，并非真实的接口地址
        data: {
          "ETid": getApp().Tid,
          "year": _combobox.child[index].name,
          "access": wx.getStorageSync('a')
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
          // console.log(res);
          if(res.data.code==0){
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
          }
        },
      })
      
      wx.request({
        method:'post',
        url: getApp().url+"/CGetOne", //仅为示例，并非真实的接口地址
        
        data: {
          "CTid": getApp().Tid,
          "year": _this.trim(_combobox.child[index].name),
          "access": wx.getStorageSync('a')
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
          if(res.data.code==0){
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
          }
        },
      })
      _this.animation = wx.createAnimation();
    },
    
})