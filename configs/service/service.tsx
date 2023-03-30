/* 
  根据类型获取子菜单列表
*/
const getSubNav = (title: any) => {
  return {
    "type": "nav",
    "stacked": true,
    // "source": "${nav}"
    "source": {
      "method": "get",
      "url": "/news/list",
      "data": {
        "catalog": title
      },
      "adaptor": function(payload: any) {
        let tempResult:any[] = []
        if (payload.data && payload.data.items) {
          payload.data.items.forEach((item:any) => {
            tempResult.push({
              "label": item.title,
              "to": "?id=" + item.id
            })
          })
        }
        return {
          status: payload.status,
          msg: payload.msg,
          data: tempResult
        }
      }
    }
  }
}
let serviceJson = {
  "type": "page",
  // "initApi": "/news/info?id=${id}",
  "body": [
    {
      "type": "image",
      "src": "../../assets/service/serviceTop.png",
      "height": 350,
      "width": "100%",
      "innerClassName": "no-border"
    },
    {
      "type": "wrapper",
      /* "data": {
        "nav": [
          {
            "label": "CO2精制提纯技术",
            "to": "?title=CO2精制提纯技术"
          },
          {
            "label": "超高纯电子级二氧化碳",
            "to": "?title=超高纯电子级二氧化碳"
          },
          {
            "label": "电厂烟气同步回收CO2和氮气技术",
            "to": "?title=电厂烟气同步回收CO2和氮气技术"
          },
          {
            "label": "干冰尾气、啤酒发酵尾气回收",
            "to": "?title=干冰尾气、啤酒发酵尾气回收"
          },
          {
            "label": "石灰窑气、烟道气等碳捕集利用技术",
            "to": "?title=石灰窑气、烟道气等碳捕集利用技术"
          }
        ]
      }, */
      "body": {
        "type": "flex",
        "justify": "start",
        "alignItems": "start",
        "className": "info-wrapper",
        "items": [
          {
            "type": "collapse-group",
            "style": {
              "width": "422px"
            },
            "activeKey": [
              "1"
            ],
            "accordion": true,
            "body": [
              {
                "type": "collapse",
                "key": "1",
                "header": "二氧化碳的捕集利用22211",
                "body": getSubNav("二氧化碳的捕集利用")
              },
              {
                "type": "collapse",
                "key": "2",
                "header": "变压吸附提纯CO技术",
                "body": getSubNav("变压吸附提纯CO技术")
              },
              {
                "type": "collapse",
                "key": "3",
                "header": "变压吸附制氢技术",
                "body": getSubNav("变压吸附制氢技术")
              },
              {
                "type": "collapse",
                "key": "4",
                "header": "甲烷提浓技术",
                "body": getSubNav("甲烷提浓技术")
              },
              {
                "type": "collapse",
                "key": "5",
                "header": "空分PSA制氮、制氧技术",
                "body": getSubNav("空分PSA制氮、制氧技术")
              },
              {
                "type": "collapse",
                "key": "6",
                "header": "气体干燥净化技术",
                "body": getSubNav("气体干燥净化技术")
              },
              {
                "type": "collapse",
                "key": "7",
                "header": "吸附剂、催化剂",
                "body": getSubNav("吸附剂、催化剂")
              }
            ]
          },
          /* {
            "type": "page",
            "initApi": "/news/info?id=${id}",
            "body": {
              "type": "tpl",
              "tpl": "${title}"
            }

          } */
          {
            "name": "detailForm",
            "type": "form",
            "wrapWithPanel": false,
            "title": "",
            "initApi": "/news/info?id=${id}",
            "actions": [],
            "body": [
              {
                "type": "tpl",
                "name": "title"
              },
              {
                "type": "tpl",
                "name": "description"
              }
            ]
          }
        ]
      }
    }
  ]
}

export default serviceJson