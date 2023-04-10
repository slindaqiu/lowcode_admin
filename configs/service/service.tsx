/* 
  根据类型获取子菜单列表
*/
const getSubNav = (catalog: any, isDefaultActive: any) => {
  debugger
  /* let isDefaultActive = false
  if (catalog === selectCatalog) {
    isDefaultActive = true
  } */
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
            window.location.href = '/#/service' +'?id=' + tempResult[0].id
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
let serviceJson = {
  "type": "service",
  "id": "serviceContainer",
  "debug": true,
  "data": {
    "catalog": "变压吸附提纯CO技术"
  },
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
          "id": "catalogCollapseGroup",
          "$ref": "catalogCollapseGroup",
          "type": "collapse-group",
          "style": {
            "width": "400px",
            "minWidth": "400px"
          },
          "activeKey": "service1",
          "accordion": true,
          "onEvent": {
            "selectServiceCatalog": {
              "actions": [
                /* {
                  "actionType": "toast",
                  "args": {
                    "msgType": "info",
                    "msg": "${selectedCatalog}"
                  }
                }, */
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
                      /* if (temp && !temp.classList.contains('is-active')) {
                        temp.classList.add('is-active')
                      }

                      const subTemp = document.querySelector(`.${selectedCatalog} .cxd-Nav-list`)
                      if (subTemp && !subTemp.classList.contains('cxd-Nav-list--stacked')) {
                        subTemp.classList.add('cxd-Nav-list--stacked')
                      }

                      const subTemp2 = document.querySelector(`.${selectedCatalog} .cxd-Collapse-contentWrapper`)
                      if (subTemp2 && subTemp2.classList.contains('out')) {
                        subTemp2.classList.remove('out')
                      } */
                    }
                    /* debugger
                    if (temp) {
                      const event = new MouseEvent('click', {
                        bubbles: true,
                        cancelable: true,
                        view: window
                      })
                      temp.dispatchEvent(event);
                    } */
                  }
                },
                
              ]
            }
          },
          "body": [
            {
              "type": "collapse",
              "className": "service1",
              "key": "service1",
              "header": "二氧化碳的捕集利用77",
              "body": getSubNav("二氧化碳的捕集利用", true)
            },
            {
              "type": "collapse",
              "className": "service2",
              "key": "service2",
              "header": "变压吸附提纯CO技术",
              "isActive": true,
              "body": getSubNav("变压吸附提纯CO技术", false)
            },
            {
              "type": "collapse",
              "className": "service3",
              "key": "service3",
              "header": "变压吸附制氢技术",
              "body": getSubNav("变压吸附制氢技术", false)
            },
            {
              "type": "collapse",
              "className": "service4",
              "key": "service4",
              "header": "甲烷提浓技术",
              "body": getSubNav("甲烷提浓技术", false)
            },
            {
              "type": "collapse",
              "className": "service5",
              "key": "service5",
              "header": "空分PSA制氮、制氧技术",
              "body": getSubNav("空分PSA制氮、制氧技术", false)
            },
            {
              "type": "collapse",
              "className": "service6",
              "key": "service6",
              "header": "气体干燥净化技术",
              "body": getSubNav("气体干燥净化技术", false)
            },
            {
              "type": "collapse",
              "className": "service7",
              "key": "service7",
              "header": "吸附剂、催化剂",
              "body": getSubNav("吸附剂、催化剂",  false)
            }
          ]
        },
        {
          "name": "detailForm",
          "type": "form",
          "wrapWithPanel": false,
          "title": "",
          "initApi": {
            "method": "get",
            "url": "/news/info?id=${id}",
            "sendOn": "this.id",
          },
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
  ]
}

export default serviceJson