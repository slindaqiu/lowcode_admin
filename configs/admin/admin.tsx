let adminJson = {
    "type": "page",
    // "title": "${id}",
    // "asideResizor": true,
    // "asideMinWidth": 220,
    // "asideMaxWidth": 400,
    "asideClassName": "admin-aside-wrapper",
    // "initApi": "/amis/api/mock2/form/initData?id=${id}",
    "aside": {
      "type": "wrapper",
      "body": {
        "type": "nav",
        "stacked": true,
        "links": [
          {
            "label": "技术与服务",
            "children": [
              {
                "label": "二氧化碳的捕集利用",
                "to": "?id=二氧化碳的捕集利用"
              },
              {
                "label": "变压吸附提纯CO技术",
                "to": "?id=变压吸附提纯CO技术"
              },
              {
                "label": "变压吸附制氢技术",
                "to": "?id=变压吸附制氢技术"
              },
              {
                "label": "甲烷提浓技术",
                "to": "?id=甲烷提浓技术"
              },
              {
                "label": "空分PSA制氮、制氧技术",
                "to": "?id=空分PSA制氮、制氧技术"
              },
              {
                "label": "气体干燥净化技术",
                "to": "?id=气体干燥净化技术"
              },
              {
                "label": "吸附剂、催化剂",
                "to": "?id=吸附剂、催化剂"
              }
            ]
          },
          {
            "label": "工程案例",
            "children": [
              {
                "label": "二氧化碳捕集利用",
                "to": "?id=二氧化碳捕集利用"
              },
              {
                "label": "变压吸附回收CO",
                "to": "?id=变压吸附回收CO"
              },
              {
                "label": "变压吸附提纯氢气",
                "to": "?id=变压吸附提纯氢气"
              },
              {
                "label": "甲烷提纯",
                "to": "?id=甲烷提纯"
              },
              {
                "label": "空分制氮制氧",
                "to": "?id=空分制氮制氧"
              },
              {
                "label": "气体净化干燥",
                "to": "?id=气体净化干燥"
              }
            ]
          },
          {
            "label": "新闻咨询",
            "children": [
              {
                "label": "二氧化碳的应用",
                "to": "?id=二氧化碳的应用"
              },
            ]
          },
        ]
      }
    },
    "body": [
        {
            "type": "service",
            "data": {
              "myItems": [
                {
                    "id": 1,
                    "title": "CO2精制提纯技术"
                },
                {
                    "id": 2,
                    "title": "超高纯电子级二氧化碳"
                },
                {
                    "id": 3,
                    "title": "电厂烟气同步回收CO2和氮气技术"
                },
                {
                    "id": 4,
                    "title": "干冰尾气、啤酒发酵尾气回收"
                },
                {
                    "id": 5,
                    "title": "石灰窑气、烟道气等碳捕集利用技术"
                },
              ]
            },
            "body": {
              "type": "crud",
              "source": "${myItems}",
              "syncLocation": true,
              "filter": {
                "title": "",
                "body": {
                    "type": "input-text",
                    "name": "title",
                    "label": "标题",
                    "clearable": true,
                    "placeholder": "请输入关键字",
                    "size": "lg"
                },
                "actions": [
                    {
                        "type": "button",
                        "label": "新增",
                        "actionType": "dialog",
                        "level": "primary",
                        "dialog": {
                            "title": "新增页面",
                            "size": "full",
                            "body":  {
                                "type": "form",
                                "api": "post:/amis/api/mock2/sample",
                                "body": [
                                  {
                                    "type": "input-text",
                                    "name": "title",
                                    "label": "标题"
                                  },
                                  {
                                    "type": "input-rich-text",
                                    "name": "content",
                                    "label": "内容",
                                    "options": {
                                        "menubar": true,
                                        "height": 200,
                                        "plugins": [
                                        //   "advlist",
                                        //   "autolink",
                                        //   "link",
                                          "image",
                                          "lists",
                                        //   "charmap",
                                          "preview",
                                        //   "anchor",
                                        //   "pagebreak",
                                          "searchreplace",
                                          "wordcount",
                                        //   "visualblocks",
                                        //   "visualchars",
                                          "code",
                                        //   "fullscreen",
                                        //   "insertdatetime",
                                        //   "media",
                                        //   "nonbreaking",
                                        //   "table",
                                        //   "emoticons",
                                        //   "template",
                                        //   "help"
                                        ],
                                        // "toolbar": "undo redo | formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help"
                                        "toolbar": "undo redo | formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat "
                                      }
                                  }
                                ]
                            }
                        }
                    },
                    {
                        "type": "reset",
                        "label": "重置"
                    },
                    {
                        "type": "submit",
                        "label": "提交",
                        "level": "primary",
                    }
                ]

              },
              "columns": [
                {
                    "name": "id",
                    "label": "ID"
                },
                {
                    "name": "title",
                    "label": "标题"
                },
                {
                    "type": "operation",
                    "label": "操作",
                    "buttons": [
                        {
                            "type": "button",
                            "label": "查看详情",
                            "actionType": "dialog",
                            "dialog": {
                            },
                        },
                        {
                            "type": "button",
                            "label": "修改",
                            "actionType": "dialog",
                            "dialog": {
                                "title": "修改页面",
                                "size": "full",
                                "body":  {
                                    "type": "form",
                                    "api": "post:/amis/api/mock2/sample",
                                    "body": [
                                        {
                                        "type": "input-text",
                                        "name": "title",
                                        "label": "标题"
                                        },
                                        {
                                        "type": "input-rich-text",
                                        "name": "content",
                                        "label": "内容"
                                        }
                                    ]
                                }
                            },
                        },
                        {
                            "type": "button",
                            "label": "删除",
                            "actionType": "ajax",
                            "level": "danger",
                            "confimText": "确定要删除吗?",
                            "api": ""
                        }
                    ]
                }
              ]
            }
          }
    ]
  }

export default adminJson