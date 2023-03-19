let serviceJson = {
  "type": "service",
  "body": [
    {
      "type": "image",
      "src": "../../assets/service/serviceTop.png",
      "height": 350,
      "width": "100%",
      "innerClassName": "no-border"
    },
    {
      "type": "service",
      "data": {
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
      },
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
                "header": "二氧化碳的捕集利用",
                "body": {
                  "type": "nav",
                  "stacked": true,
                  "source": "${nav}"
                }
              },
              {
                "type": "collapse",
                "key": "2",
                "header": "变压吸附提纯CO技术",
                "body": "这里是内容2"
              },
              {
                "type": "collapse",
                "key": "3",
                "header": "变压吸附制氢技术",
                "body": "这里是内容3"
              },
              {
                "type": "collapse",
                "key": "4",
                "header": "甲烷提浓技术",
                "body": "这里是内容1"
              },
              {
                "type": "collapse",
                "key": "5",
                "header": "空分PSA制氮、制氧技术",
                "body": "这里是内容2"
              },
              {
                "type": "collapse",
                "key": "6",
                "header": "气体干燥净化技术",
                "body": "这里是内容3"
              },
              {
                "type": "collapse",
                "key": "7",
                "header": "吸附剂、催化剂",
                "body": "这里是内容3"
              }
            ]
          },
          {
            "type": "wrapper",
            "body": {
              "type": "tpl",
              "tpl": "内容"
            }
          }
        ]
      }
    }
  ]
}

export default serviceJson