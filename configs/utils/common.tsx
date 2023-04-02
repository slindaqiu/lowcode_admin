const getSubNav = (title: any, isDefaultActive: any) => {
    return {
      "type": "nav",
      "stacked": true,
      // "source": "${nav}"
      "source": {
        "method": "get",
        "url": "/news/list/title",
        "data": {
          "catalog": title
        },
        "sendOn": "${catalog}",
        "adaptor": function(payload: any) {
          debugger
          let tempResult:any[] = []
          if (payload.data && payload.data.items) {
            payload.data.items.forEach((item:any) => {
              tempResult.push({
                "label": item.title,
                "to": "?id=" + item.id
              })
            })
            if (isDefaultActive &&  payload.data.items.length > 0) {
              payload.data.items[0].active = true
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

    
export {
    getSubNav
} 