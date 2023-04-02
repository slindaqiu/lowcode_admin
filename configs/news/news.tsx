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
              "to": "?id=" + item.id,
              "id": item.id
            })
          })
          if (isDefaultActive &&  tempResult.length > 0 && tempResult[0].id) {
            tempResult[0].active = true
            window.location.href = '/#/news' +'?id=' + tempResult[0].id
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
                "1"
              ],
              "accordion": true,
              "body": [
                {
                  "type": "collapse",
                  "key": "1",
                  "header": "企业动态",
                  "body": getSubNav("企业动态", true)
                },
                {
                  "type": "collapse",
                  "key": "2",
                  "header": "专业文章",
                  "body": getSubNav("专业文章", false)
                },
                {
                  "type": "collapse",
                  "key": "3",
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