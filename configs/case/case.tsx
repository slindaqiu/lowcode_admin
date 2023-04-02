// import { getSubNav } from '../utils/common'
const getSubNav = (catalog: any, isDefaultActive: any) => {
  return {
    "type": "nav",
    "stacked": true,
    // "source": "${nav}"
    "source": {
      "method": "get",
      "url": "/news/list/title",
      "data": {
        "catalog": catalog
      },
      "adaptor": function(payload: any) {
        let tempResult:any[] = []
        if (payload.data && payload.data.items) {
          payload.data.items.forEach((item:any) => {
            tempResult.push({
              "label": item.title,
              "to": "?id=" + item.id,
              "id": item.id
            })
          })
          if (isDefaultActive &&  tempResult.length > 0 && tempResult[0].id) {
            tempResult[0].active = true
            window.location.href = '/#/case' +'?id=' + tempResult[0].id
          }
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
let caseJson = {
    "type": "service",
      "body": [
        {
          "type": "image",
          "src": "../../assets/case/caseTop.png",
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
                  "header": "二氧化碳捕集利用",
                  "body": getSubNav("二氧化碳捕集利用", true)
                },
                {
                  "type": "collapse",
                  "key": "2",
                  "header": "变压吸附回收CO",
                  "body": getSubNav("变压吸附回收CO", false)
                },
                {
                  "type": "collapse",
                  "key": "3",
                  "header": "变压吸附提纯氢气",
                  "body": getSubNav("变压吸附提纯氢气", false)
                },
                {
                  "type": "collapse",
                  "key": "4",
                  "header": "甲烷提纯",
                  "body": getSubNav("甲烷提纯", false)
                },
                {
                  "type": "collapse",
                  "key": "5",
                  "header": "空分制氮制氧",
                  "body": getSubNav("空分制氮制氧", false)
                },
                {
                  "type": "collapse",
                  "key": "6",
                  "header": "气体净化干燥",
                  "body": getSubNav("气体净化干燥", false)
                },
                {
                  "type": "collapse",
                  "key": "7",
                  "header": "吸附剂、催化剂",
                  "body": getSubNav("吸附剂、催化剂", false)
                }
              ]
            },
            {
              "name": "detailForm",
              "type": "form",
              "wrapWithPanel": false,
              "title": "",
              // "initApi": "/news/info?id=${id}",
              "initApi": {
                "method": "get",
                "url": "/news/info?id=${id}",
                "sendOn": "this.id",
              },
              "sendOn": "this.id",
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
      ]
}

export default caseJson