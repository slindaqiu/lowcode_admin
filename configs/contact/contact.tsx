let contactJson = {
    "type": "service",
    "id": "contactNav",
    "data": {
      "contactType": "contactInfo"
    },
    "body": [
        {
          "type": "image",
          "src": "../../assets/contact/contactTop.png",
          "height": 350,
          "width": "100%",
          "innerClassName": "no-border"
        },
        {
          "type": "flex",
          "justify": "start",
          "alignItems": "start",
          "style": {
            "paddingLeft": "160px"
          },
          "items": [
            {
              "type": "wrapper",
              "width": "188px",
              "height": "130px",
              "style": {
                "background": "linear-gradient(138deg, #4783E9 0%, #46BEE6 100%, #4EC1FE 100%)",
                "boxShadow": "0px 2px 10px 0px rgba(0,0,0,0.3)",
                "borderRadius": "10px",
                "position": "relative",
                "top": "-22px",
                "padding": "30px 22px",
                "color": "#fff",
                "fontWeight": 500,
                "fontSize": "14px",
                "minWidth": "188px"
              },
              "body": [
                {
                  "type": "flex",
                  "direction": "column",
                  "alignItems": "start",
                  "items": [{
                    "type": "flex",
                    "style": {
                      "marginBottom": "26px"
                    },
                    "items": [
                      {
                        "type": "tpl",
                        "tpl": "联系方式",
                        "style": {
                          "marginRight": "60px",
                          "cursor": "pointer"
                        },
                        "onEvent": {
                          "click": {
                            "actions": [
                              {
                                "actionType": "setValue",
                                "componentId": "contactNav",
                                "args": {
                                  "value": {
                                    "contactType": "contactInfo"
                                  }
                                }
                              }
                            ]
                          }
                        },
                      },
                      {
                        "type": "wrapper",
                        "style": {
                          "width": '20px',
                          "height": "2px",
                          "background": "#fff",
                          "padding": 0
                        },
                        "visibleOn": "this.contactType === 'contactInfo'"
                      },
                    ]
                  },
                  {
                    "type": "flex",
                    "style": {
                      "marginBottom": "26px"
                    },
                    "items": [
                      {
                        "type": "tpl",
                        "tpl": "人才招聘",
                        "style": {
                          "marginRight": "60px",
                          "cursor": "pointer"
                        },
                        "onEvent": {
                          "click": {
                            "actions": [
                              {
                                "actionType": "setValue",
                                "componentId": "contactNav",
                                "args": {
                                  "value": {
                                    "contactType": 'employInfo'
                                  }
                                }
                              }
                            ]
                          }
                        },
                      },
                      {
                        "type": "wrapper",
                        "style": {
                          "width": '20px',
                          "height": "2px",
                          "background": "#fff",
                          "padding": 0
                        },
                        "visibleOn": "this.contactType === 'employInfo'"
                      }
                    ]
                  },
                  {
                    "type": "flex",
                    "style": {
                      "marginBottom": "26px"
                    },
                    "items": [
                      {
                        "type": "tpl",
                        "tpl": "在线留言",
                        "style": {
                          "marginRight": "60px",
                          "cursor": "pointer"
                        },
                        "onEvent": {
                          "click": {
                            "actions": [
                              {
                                "actionType": "setValue",
                                "componentId": "contactNav",
                                "args": {
                                  "value": {
                                    "contactType": 'commentInfo'
                                  }
                                }
                              }
                            ]
                          }
                        },
                      },
                      {
                        "type": "wrapper",
                        "style": {
                          "width": '20px',
                          "height": "2px",
                          "background": "#fff",
                          "padding": 0
                        },
                        "visibleOn": "this.contactType === 'commentInfo'"
                      }
                    ]
                  }]
                }
              ]
            },
            {
              "type": "flex",
              "visibleOn": "this.contactType === 'contactInfo'",
              "direction": "column",
              "alignItems": "start",
              "style": {
                "padding": "20px 160px 84px 36px"
              },
              "items": [
                {
                  "type": "tpl",
                  "style": {
                    "fontSize": "32px",
                    "fontWeight": 600,
                    "color": "#333",
                  },
                  "tpl": "碳和科技（北京）有限公司",
                },
                {
                  "type": "tpl",
                  "tpl": "联系人：李经理"
                },
                {
                  "type": "tpl",
                  "tpl": "联系人号码：18910357656"
                },
                {
                  "type": "tpl",
                  "tpl": "邮箱：tanhekeji@163.com"
                },
                {
                  "type": "tpl",
                  "tpl": "地址：北京市北京经济技术开发区 （通州）景盛南四街甲13号19幢2层"
                }
              ]
            },
            {
              "type": "flex",
              "visibleOn": "this.contactType === 'employInfo'",
              "direction": "column",
              "alignItems": "start",
              "style": {
                "padding": "20px 160px 84px 36px"
              },
              "items": [
                {
                  "type": "tpl",
                  "tpl": "人才招聘"
                }
              ]
            },
            {
              "type": "flex",
              "visibleOn": "this.contactType === 'commentInfo'",
              "direction": "column",
              "alignItems": "start",
              "style": {
                "padding": "20px 160px 84px 36px"
              },
              "items": [
                {
                  "type": "tpl",
                  "tpl": "在线留言"
                }
              ]
            }
            /* {
              "type": "flex",
              "direction": "column",
              "alignItems": "start",
              "visibleOn": "this.contactType === 'contactInfo'",
              "className": "text-info-wrapper",
              "style": {
                "padding": "4px 160px 18px 36px "
              },
              "body": [
                {
                  "type": "tpl",
                  "style": {
                    "fontSize": "32px",
                    "fontWeight": 600,
                    "color": "#333",
                  },
                  "tpl": "碳和科技（北京）有限公司",
                },
                {
                  "type": "tpl",
                  "tpl": "联系人：李经理"
                },
                {
                  "type": "tpl",
                  "tpl": "联系人号码：18910357656"
                },
                {
                  "type": "tpl",
                  "tpl": "邮箱：tanhekeji@163.com"
                },
                {
                  "type": "tpl",
                  "tpl": "地址：北京市北京经济技术开发区 （通州）景盛南四街甲13号19幢2层"
                },
                {
                  "type": "wrapper",
                  "style": {
                    "textAlign": "center"
                  },
                  "body": {
                    "type": "image",
                    "src": "../../assets/about/aboutInfo.png",
                    "height": 280,
                    "width": 600,
                    "innerClassName": "no-border"
                  }
                },
                {
                  "type": "tpl",
                  "tpl": `
                  <p>碳和科技属于北京市飞达捷能气体分离技术有限公司控股子公司，公司以研发为基石，与国内多所高校和科研院所建立了紧密的研发合作关系，先后取得了四十余项国家专利，研发生产出烟气提纯二氧化碳、变压吸附法制氮、制氧、制氢，煤层气提纯甲烷，以及气体净化干燥等多种工艺及装备，拥有自主知识产权的核心吸附材料，具备中试及产业化所需的工艺开发、设备制造、分析检测等条件，拥有较强的研发成果转化能力和丰富的工程化经验。</p>
                  <p>公司配备一、二类压力容器设备设计、制造基地及实验中试基地；拥有完善的质保体系，并取得ISO9001质量管理体系认证、ISO14001管理体系认证、ISO45001职业健康体系认证，以及CCS船级社认证和MA煤安标志认证。拥有先进的机械加工设备、完善的检测手段、科学的管理体系和专业化的研发队伍；拥有紧密型战略合作的甲级工程设计院，为用户的新建生产装置或老装置的技术改造量身定制；提供项目技术方案、立项可研、技术咨询、工程设计、设备加工、培训、调试等一体化服务。</p>
                  <p>未来，公司继续积极响应政府号召，把握发展机遇，以“让工业气体更安全、更节能、更洁净”为使命，致力于打造成为国内工业气体综合解决方案的服务商！</p>
                  `
                }
              ]
            },
            {
              "type": "wrapper",
              "className": "sl-news-image-container about-img-wrapper",
              "style": {
                "width": "100%",
                "padding": "4px 160px 70px 36px"
              },
              "visibleOn": "this.contactType === 'employInfo'",
              "body": [
                {
                  "type": "tpl",
                  "tpl": "人才招聘",
                  "style": {
                    "fontSize": "32px",
                    "fontWeight": 600,
                    "color": "#333"
                  },
                },
                {
                  "type": "tpl",
                  "tpl": "招聘内容"
                }
              ]
            } */
          ]
        }
    ]
}

export default contactJson