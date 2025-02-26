// import { getSubNav } from '../utils/common'
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
              "to": "?id=" + item.id + '&active=case' + '&catalog=' + catalogType,
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
              (currentCatalog == 'case1' && catalog == '二氧化碳捕集利用')
              || (currentCatalog == 'case2' && catalog == '变压吸附回收CO')
              || (currentCatalog == 'case3' && catalog == '变压吸附提纯氢气')
              || (currentCatalog == 'case4' && catalog == '甲烷提纯')
              || (currentCatalog == 'case5' && catalog == '空分制氮制氧')
              || (currentCatalog == 'case6' && catalog == '气体净化干燥')
              || (currentCatalog == 'case7' && catalog == '吸附剂、催化剂')
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
                window.location.href = '/#/case' + '?id=' + tempResult[0].id + '&active=case' + '&catalog=' + catalogType
              }
            }
          }
        }
        return {
          status: payload.status,
          msg: payload.msg,
          data: tempResult
        }
        /* let hash = window.location.hash
        let id: any = null
        let currentCatalog: any = null
        if(hash.length >= 1) {
          let paramsString = hash.slice(hash.indexOf('?') + 1);
          // 解析键值对
          let params = new URLSearchParams(paramsString)
          id = params.get('id')
          currentCatalog = params.get('catalog')
        }
        
        let tempResult:any[] = []
        if (payload.data && payload.data.items) {
          payload.data.items.forEach((item:any, index: any) => {
            tempResult.push({
              "label": item.title,
              "to": "?id=" + item.id + '&active=case' + '&catalog=' + catalogType,
              "id": item.id
            })
            // id 从地址栏获取，是字符串类型，item.id 从数据库获取，是整形，使用 == 比对
            if (id && id == item.id) {
              tempResult[index].active = true
            }
          })
          if (id) {
            setTimeout(() => {
              // 使用 js 配合模拟点击实现点击、选中子选项功能
              const temp = document.querySelector(`.${currentCatalog} .cxd-Collapse-header`)
              if (temp) {
                const event:any = new MouseEvent('click', {
                  'view': window,
                  'bubbles': true,
                  'cancelable': true
                });
                temp.dispatchEvent(event)
              }
            }, 100)
          }
          // 在 id 没有值的情况下，默认选中指定菜单的第一项
          if(!id && isDefaultActive &&  tempResult.length > 0 && tempResult[0].id) {
            tempResult[0].active = true
            window.location.href = '/#/case' +'?id=' + tempResult[0].id + '&active=case' + '&catalog=' + catalogType
          }
        }
        return {
          status: payload.status,
          msg: payload.msg,
          data: tempResult
        } */
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
          /* "activeKey": [
            "case1"
          ], */
          "accordion": true,
          "onEvent": {
            "selectServiceCatalog": {
              "actions": [
                {
                  "actionType": "custom",
                  "script": function (context: any, doAction: any, event: any) {
                    // 用于处理顶部导航的事件
                    const selectedCatalog = event.data.selectedCatalog
                    if (selectedCatalog && selectedCatalog.indexOf('case') >= 0) {
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
              "body": getSubNav("二氧化碳捕集利用", "case1", true)
            },
            {
              "type": "collapse",
              "key": "case2",
              "className": "case2",
              "header": "变压吸附回收CO",
              "body": getSubNav("变压吸附回收CO", "case2", false)
            },
            {
              "type": "collapse",
              "key": "case3",
              "className": "case3",
              "header": "变压吸附提纯氢气",
              "body": getSubNav("变压吸附提纯氢气", "case3", false)
            },
            {
              "type": "collapse",
              "key": "case4",
              "className": "case4",
              "header": "甲烷提纯",
              "body": getSubNav("甲烷提纯", "case4", false)
            },
            {
              "type": "collapse",
              "key": "case5",
              "className": "case5",
              "header": "空分制氮制氧",
              "body": getSubNav("空分制氮制氧", "case5", false)
            },
            {
              "type": "collapse",
              "key": "case6",
              "className": "case6",
              "header": "气体净化干燥",
              "body": getSubNav("气体净化干燥", "case6", false)
            },
            {
              "type": "collapse",
              "key": "case7",
              "className": "case7",
              "header": "吸附剂、催化剂",
              "body": getSubNav("吸附剂、催化剂", "case7", false)
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
            "adaptor": function (payload: any) {
              window.scrollTo(0, 0)
              return {
                status: payload.status,
                msg: payload.msg,
                data: payload.data
              }
            }
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
              "label": "联系我们 >>",
              "className": "sl-more-btn",
              "style": {
                "position": "absolute",
                "right": "80px",
                "top": "26px",
                "cursor": "pointer",
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