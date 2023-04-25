// import { getSubNav } from '../utils/common'
/* 
  根据类型获取子菜单列表
*/
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
              "to": "?id=" + item.id + '&active=news',
              "id": item.id
            })
          })
          if (isDefaultActive &&  tempResult.length > 0 && tempResult[0].id) {
            tempResult[0].active = true
            window.location.href = '/#/news' +'?id=' + tempResult[0].id + '&active=news'
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
let newsJson = {
    "type": "service",
      "body": [
        {
          "type": "image",
          "src": "../../assets/news/newsTop.png",
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
                "news1"
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
                  "key": "news1",
                  "className": "news1",
                  "header": "企业动态",
                  "body": getSubNav("企业动态", true)
                },
                {
                  "type": "collapse",
                  "key": "news2",
                  "className": "news2",
                  "header": "专业文章",
                  "body": getSubNav("专业文章", false)
                },
                {
                  "type": "collapse",
                  "key": "news3",
                  "className": "news3",
                  "header": "行业资讯",
                  "body": getSubNav("行业资讯", false)
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

export default newsJson