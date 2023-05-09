/* 
  根据类型获取子菜单列表
*/
const getSubNav = (catalog: any, catalogType: any, isDefaultActive: any) => {
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
      "adaptor": function (payload: any) {
        let hash = window.location.hash
        let id: any = null
        let currentCatalog: any = null
        if (hash.length >= 1) {
          let paramsString = hash.slice(hash.indexOf('?') + 1);
          // 解析键值对
          let params = new URLSearchParams(paramsString)
          id = params.get('id')
          currentCatalog = params.get('catalog')
        }

        // 从导航进入，包含 catalog，不包含 id，不处理
        let tempResult: any[] = []
        if (payload.data && payload.data.items) {
          payload.data.items.forEach((item: any, index: any) => {
            tempResult.push({
              "label": item.title,
              "to": "?id=" + item.id + '&active=service' + '&catalog=' + catalogType,
              "id": item.id
            })
            // id 从地址栏获取，是字符串类型，item.id 从数据库获取，是整形，使用 == 比对
            if (id && id == item.id) {
              // 如果 id 一样，则高亮子菜单
              tempResult[index].active = true
            }
          })
          // 从首页进来，包含 catalog 和 id ，默认选中指定文章
          if (currentCatalog) {
            // 如果 id 不存在，则选择导航默认第一条数据, 默认选中第一个
            if (
              (currentCatalog == 'service1' && catalog == '二氧化碳的捕集利用')
              || (currentCatalog == 'service2' && catalog == '变压吸附提纯CO技术')
              || (currentCatalog == 'service3' && catalog == '变压吸附制氢技术')
              || (currentCatalog == 'service4' && catalog == '甲烷提浓技术')
              || (currentCatalog == 'service5' && catalog == '空分PSA制氮、制氧技术')
              || (currentCatalog == 'service6' && catalog == '气体干燥净化技术')
              || (currentCatalog == 'service7' && catalog == '吸附剂、催化剂')
            ) {
              setTimeout(() => {
                // 使用 js 配合模拟点击实现菜单点击，高亮菜单
                const temp = document.querySelector(`.${currentCatalog} .cxd-Collapse-header`)
                if (temp && temp.parentElement && !temp.parentElement.classList.contains('is-active')) {
                  const event: any = new MouseEvent('click', {
                    'view': window,
                    'bubbles': true,
                    'cancelable': true
                  });
                  temp.dispatchEvent(event)
                }
              }, 50)
              // id 不存在
              if (!id) {
                tempResult[0].active = true
                window.location.href = '/#/service' + '?id=' + tempResult[0].id + '&active=service' + '&catalog=' + catalogType
              }
            }
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
  // "debug": true,
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
          // "activeKey": "service1",
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
                        // 如果节点已经选中，则不处理
                        if (temp.parentElement && !temp.parentElement.classList.contains('is-active')) {
                          const event: any = new MouseEvent('click', {
                            'view': window,
                            'bubbles': true,
                            'cancelable': true
                          });
                          temp.dispatchEvent(event)
                        }

                        // 默认点击下拉框第一个元素
                        const subTemp = document.querySelector(`.${selectedCatalog} .cxd-Nav-item a`)
                        if (subTemp) {
                          const event2: any = new MouseEvent('click', {
                            'view': window,
                            'bubbles': true,
                            'cancelable': true
                          });
                          setTimeout(() => {
                            subTemp.dispatchEvent(event2)
                          }, 50)
                        }
                      }
                    }
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
              "header": "二氧化碳的捕集利用",
              "body": getSubNav("二氧化碳的捕集利用", "service1", true)
            },
            {
              "type": "collapse",
              "className": "service2",
              "key": "service2",
              "header": "变压吸附提纯CO技术",
              "isActive": true,
              "body": getSubNav("变压吸附提纯CO技术", "service2", false)
            },
            {
              "type": "collapse",
              "className": "service3",
              "key": "service3",
              "header": "变压吸附制氢技术",
              "body": getSubNav("变压吸附制氢技术", "service3", false)
            },
            {
              "type": "collapse",
              "className": "service4",
              "key": "service4",
              "header": "甲烷提浓技术",
              "body": getSubNav("甲烷提浓技术", "service4", false)
            },
            {
              "type": "collapse",
              "className": "service5",
              "key": "service5",
              "header": "空分PSA制氮、制氧技术",
              "body": getSubNav("空分PSA制氮、制氧技术", "service5", false)
            },
            {
              "type": "collapse",
              "className": "service6",
              "key": "service6",
              "header": "气体干燥净化技术",
              "body": getSubNav("气体干燥净化技术", "service6", false)
            },
            {
              "type": "collapse",
              "className": "service7",
              "key": "service7",
              "header": "吸附剂、催化剂",
              "body": getSubNav("吸附剂、催化剂", "service7", false)
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
            "adaptor": function (payload: any) {
              window.scrollTo(0, 0)
              return {
                status: payload.status,
                msg: payload.msg,
                data: payload.data
              }
            }
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