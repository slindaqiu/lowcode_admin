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
  "type": "service",
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
      "type": "flex",
      "justify": "start",
      "alignItems": "start",
      "className": "info-wrapper",
      "items": [
        {
          "type": "collapse-group",
          "style": {
            "width": "400px",
            "minWidth": "400px"
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
        {
          "name": "detailForm",
          "type": "form",
          "wrapWithPanel": false,
          "title": "",
          "initApi": "/news/info?id=${id}",
          "actions": [],
          "className": "info-detail-wrapper",
          "body": [
            {
              "type": "tpl",
              "name": "title",
              "className": "info-title",
              "style": {
                "fontSize": "32px",
                "fontWeight": "600",
                "color": "#333",
              },
             
            },
            {
              "type": "tpl",
              "name": "description"
            }
          ]
        }
      ]
    }
    /* {
      "type": "wrapper",
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
          {
            "name": "detailForm",
            "type": "form",
            "wrapWithPanel": false,
            "title": "",
            "initApi": "/news/info?id=${id}",
            "actions": [],
            "className": "info-detail-wrapper",
            "body": [
              {
                "type": "tpl",
                "name": "title",
                "className": "info-title",
                "style": {
                  "fontSize": "32px",
                  "fontWeight": "600",
                  "color": "#333",
                  "textAlign": "center",
                  "display": "block"
                }
              },
              {
                "type": "tpl",
                "name": "description"
              }
            ]
          }
        ]
      }
    } */
  ]
}

export default serviceJson