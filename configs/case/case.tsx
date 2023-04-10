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
                "case1"
              ],
              "accordion": true,
              "onEvent": {
                "selectServiceCatalog": {
                  "actions": [
                    {
                      "actionType": "custom",
                      "script": function (context: any, doAction: any, event: any) {
                        const selectedCatalog = event.data.selectedCatalog
                        if (selectedCatalog) {
                          const temp = document.querySelector(`.${selectedCatalog} .cxd-Collapse-header`)
                          if (temp) {
                            const event:any = new MouseEvent('click', {
                              'view': window,
                              'bubbles': true,
                              'cancelable': true
                            });
                            temp.dispatchEvent(event);
    
                            // 默认点击下拉框第一个元素
                            const subTemp = document.querySelector(`.${selectedCatalog} .cxd-Nav-item a`)
                            if (subTemp) {
                              const event2:any = new MouseEvent('click', {
                                'view': window,
                                'bubbles': true,
                                'cancelable': true
                              });
                              setTimeout(() => {
                                debugger
                                subTemp.dispatchEvent(event2)
                              }, 100);
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              },
              "body": [
                {
                  "type": "collapse",
                  "key": "case1",
                  "className": "case1",
                  "header": "二氧化碳捕集利用",
                  "body": getSubNav("二氧化碳捕集利用", true)
                },
                {
                  "type": "collapse",
                  "key": "case2",
                  "className": "case2",
                  "header": "变压吸附回收CO",
                  "body": getSubNav("变压吸附回收CO", false)
                },
                {
                  "type": "collapse",
                  "key": "case3",
                  "className": "case3",
                  "header": "变压吸附提纯氢气",
                  "body": getSubNav("变压吸附提纯氢气", false)
                },
                {
                  "type": "collapse",
                  "key": "case4",
                  "className": "case4",
                  "header": "甲烷提纯",
                  "body": getSubNav("甲烷提纯", false)
                },
                {
                  "type": "collapse",
                  "key": "case5",
                  "className": "case5",
                  "header": "空分制氮制氧",
                  "body": getSubNav("空分制氮制氧", false)
                },
                {
                  "type": "collapse",
                  "key": "case6",
                  "className": "case6",
                  "header": "气体净化干燥",
                  "body": getSubNav("气体净化干燥", false)
                },
                {
                  "type": "collapse",
                  "key": "case7",
                  "className": "case7",
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
                },
                {
                  "type": "button",
                  "level": "primary",
                  "label": "联系我们",
                  "style": {
                    "position": "absolute",
                    // "right": "70px",
                    "right": "46px",
                    "top": "36px",
                    "cursor": "pointer",
                    "width": "156px",
                    "height": "42px",
                    "fontWeight": 500,
                    "backgroundColor": "#005BAC"
                  },
                  "actionType": "link",
                  "to": "/contact?contactType=contactInfo"
                }
              ]
            }
          ]
        }
      ]
}

export default caseJson