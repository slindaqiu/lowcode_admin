const options = {
  "menubar": true,
  "height": 430,
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
  "toolbar": "undo redo | formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | preview "
}
let adminJson = {
    "type": "page",
    // "title": "${id}",
    // "asideResizor": true,
    // "asideMinWidth": 220,
    // "asideMaxWidth": 400,
    "asideClassName": "admin-aside-wrapper",
    // "initApi": "/amis/api/mock2/form/initData?catalog=${id}",
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
                "to": "?catalog=二氧化碳的捕集利用"
              },
              {
                "label": "变压吸附提纯CO技术",
                "to": "?catalog=变压吸附提纯CO技术"
              },
              {
                "label": "变压吸附制氢技术",
                "to": "?catalog=变压吸附制氢技术"
              },
              {
                "label": "甲烷提浓技术",
                "to": "?catalog=甲烷提浓技术"
              },
              {
                "label": "空分PSA制氮、制氧技术",
                "to": "?catalog=空分PSA制氮、制氧技术"
              },
              {
                "label": "气体干燥净化技术",
                "to": "?catalog=气体干燥净化技术"
              },
              {
                "label": "吸附剂、催化剂",
                "to": "?catalog=吸附剂、催化剂"
              }
            ]
          },
          {
            "label": "工程案例",
            "children": [
              {
                "label": "二氧化碳捕集利用",
                "to": "?catalog=二氧化碳捕集利用"
              },
              {
                "label": "变压吸附回收CO",
                "to": "?catalog=变压吸附回收CO"
              },
              {
                "label": "变压吸附提纯氢气",
                "to": "?catalog=变压吸附提纯氢气"
              },
              {
                "label": "甲烷提纯",
                "to": "?catalog=甲烷提纯"
              },
              {
                "label": "空分制氮制氧",
                "to": "?catalog=空分制氮制氧"
              },
              {
                "label": "气体净化干燥",
                "to": "?catalog=气体净化干燥"
              }
            ]
          },
          {
            "label": "新闻咨询",
            "children": [
              {
                "label": "二氧化碳的应用",
                "to": "?catalog=二氧化碳的应用"
              },
            ]
          },
          {
            "label": "在线留言",
            "children": [
              {
                "label": "查看留言",
                "to": "?catalog=查看留言"
              }
            ]
          }
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
              "api": "/news/list?catalog=${catalog}",
              // "source": "${myItems}",
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
                        "visibleOn": "this.catalog",
                        "dialog": {
                            "title": "新增页面",
                            "size": "full",
                            "debug": true,
                            "body":  {
                                "type": "form",
                                "api": "post:/news/create",
                                "body": [
                                  {
                                    "type": "input-text",
                                    "name": "catalog",
                                    "label": "类型",
                                    "value": "${catalog}",
                                    "disabled": true
                                  },
                                  {
                                    "type": "input-text",
                                    "name": "title",
                                    "label": "标题"
                                  },
                                  {
                                    "type": "input-rich-text",
                                    "style": {
                                      "height": "100%"
                                    },
                                    "name": "description",
                                    "label": "内容",
                                    "options": options
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
               /*  {
                    "name": "id",
                    "label": "ID"
                }, */
                {
                    "name": "title",
                    "label": "标题"
                },
                {
                  "name": "createTime",
                    "label": "创建时间"
                },
                {
                  "name": "updateTime",
                  "label": "修改时间"
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
                              "title": "查看详情",
                                "size": "full",
                                "body":  {
                                    "type": "form",
                                    // "api": "post:/amis/api/mock2/sample",
                                    "body": [
                                        {
                                          "type": "input-text",
                                          "name": "catalog",
                                          "label": "类型",
                                          "value": "${catalog}",
                                          "disabled": true
                                        },
                                        {
                                          "type": "input-text",
                                          "name": "title",
                                          "label": "标题",
                                          "disabled": true
                                        },
                                        {
                                          "type": "input-rich-text",
                                          "options": options,
                                          "name": "description",
                                          "label": "内容",
                                          // "disabled": true
                                        }
                                    ]
                                }
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
                                    "api": "post:/news/update",
                                    "body": [
                                        {
                                          "type": "hidden",
                                          "name": "id",
                                        },
                                        {
                                          "type": "input-text",
                                          "name": "catalog",
                                          "label": "类型",
                                          "value": "${catalog}",
                                          "disabled": true
                                        },
                                        {
                                          "type": "input-text",
                                          "name": "title",
                                          "label": "标题"
                                        },
                                        {
                                          "type": "input-rich-text",
                                          "options": options,
                                          "name": "description",
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
                            "confirmText": "确认要删除 ${title} 吗？",
                            "api": "get:/news/delete?id=${id}"
                        }
                    ]
                }
              ]
            }
          }
    ]
  }

export default adminJson