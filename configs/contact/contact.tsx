let contactJson = {
    "type": "service",
    "id": "contactNav",
    "data": {
      // "contactType": "contactInfo"
      "contactType": "commentInfo"
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
                },
                {
                  "type": "image",
                  "src": "../../assets/contact/addressBg.png",
                  "height": 451,
                  "width": 896,
                  "innerClassName": "no-border",
                  "style": {
                    "marginTop": "20px"
                  }
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
                  "type": "wrapper",
                  "style": {
                    "padding": "36px",
                    "background": "#F5F5F5"
                  },
                  "body": [
                    {
                      "type": "tpl",
                      "tpl": "您有任何意见或建议，可以留言给我们",
                      "style": {
                        "fontSize": "32px",
                        "fontWeight": "600",
                        "color": "#333",
                        "textAlign": "center"
                      }
                    },
                    {
                      "type": "form",
                      "mode": "horizontal",
                      "wrapWithPanel": false,
                      "className": "contact-comment-wrapper",
                      "labelWidth": 0,
                      "body": [
                        {
                          "type": "textarea",
                          "name": "content",
                          "placeholder": "请输入内容",
                          "minRows": 7,
                        },
                        {
                          "type": "group",
                          "body": [
                            {
                              "type": "input-text",
                              "name": "content",
                              "placeholder": "请输入姓名"
                            },
                            {
                              "type": "input-text",
                              "name": "phone",
                              "placeholder": "请输入手机号"
                            }
                          ]
                        },
                        {
                          "type": "group",
                          "body": [
                            {
                              "type": "input-text",
                              "name": "email",
                              "placeholder": "请输入邮箱"
                            },
                            {
                              "type": "input-text",
                              "name": "companyName",
                              "placeholder": "请输入公司名"
                            }
                          ]
                        },
                        {
                          "type": "button",
                          "label": "提交",
                          "placeholder": "请输入公司名"
                        }
                      ]
                    }

                  ]
                }
              ]
            }
          ]
        }
    ]
}

export default contactJson