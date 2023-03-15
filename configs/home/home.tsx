// import carouse2 from '../../assets/home/carouse2.png'
// import carouse3 from '../../assets/home/carouse3.png'
// import carouse2 from '../../assets/home/carouse4.png'
// import carouse4 from '../../assets/home/carouse4.png'
let homeJson = {
  "type": "service",
  "body": [
    // 轮播图
    {
      "type": "carousel",
      "auto": true,
      "thumbMode": "cover",
      "animation": "slide",
      "height": 600,
      // "interval": '5s',
      "options": [
        {
          "image": "../../assets/home/carousel1.png"
        },
        {
          "image": "../../assets/home/carousel2.png"
        },
        {
          "image": "../../assets/home/carousel3.png"
        },
        {
          "image": "../../assets/home/carousel4.png"
        }
      ]
    },
    // 关于我们
    {
      "type": "wrapper",
      "width": "100%",
      "style": {
        "background": "url('../../assets/home/aboutUs.png') no-repeat top center",
        // "background-size": "cover",
        // "padding": "40px 80px",
        "paddingTop": "36px",
        "margin": "40px 60px",
        "height": 464,
      },
      "body": [
        {
          "type": "flex",
          "direction": "column",
          "alignItems": "end",
          "items": [
            {
              "style": {
                "fontSize": 40,
                "fontWeight": 500,
                "color": "#2F3C43"
              },
              "type": "tpl",
              "tpl": "关于我们"
            },
            {
              "style": {
                "fontSize": 28,
                "fontWeight": 600,
                "color": "#025DAD",
                "marginBottom": 30
              },
              "type": "tpl",
              "tpl": "诚信 创新 高效 发展"
            },
          ]
          /* "type": "flex",
          "style": {
            "padding": "40px 80px",
            "width": "100%",
          },
          "items": [
            {
              "type": "wrapper",
              "height": 464,
              "width": "100%",
              "style": {
                "background": "url('../../assets/home/aboutUs.png') no-repeat top center",
                "background-size": "cover",
                // "padding": "40px 80px",
              },
              "body": [
                {
                  "type": "flex",
                  "direction": "column",
                  "alignItems": "end",
                  "items": [
                    {
                      "style": {
                        "font-size": 40,
                        "font-weight": 500,
                        "color": "#2F3C43"
                      },
                      "type": "tpl",
                      "tpl": "关于我们"
                    },
                    {
                      "style": {
                        "font-size": 28,
                        "font-weight": 600,
                        "color": "#025DAD",
                        "margin-bottom": 30
                      },
                      "type": "tpl",
                      "tpl": "诚信 创新 高效 发展"
                    },
                  ]
                },
                {
                  "type": "flex",
                  "direction": "column",
                  "alignItems": "start",
                  "items": [
                    {
                      "style": {
                        "font-size": 22,
                        "font-weight": 400,
                        "color": "#2F3C43",
                        "margin-bottom": 6
                      },
                      "type": "tpl",
                      "tpl": "碳和科技（北京）有限公司"
                    },
                    {
                      "style": {
                        "font-size": 14,
                        "font-weight": 400,
                        "color": "#2F3C43"
                      },
                      "type": "tpl",
                      "tpl": "位于北京市北京经济技术开发区（通州），是一家专业从事气体净化回收的高新技术企业。公司以碳捕集回收应用为出发点，结合三十余年PSA行业经验，开发了二氧化碳捕集利用、煤层气、甲烷等温室气体的治理和分离以及CO、H2等工业尾气的回收利用等多种气体净化回收技术，是集技术研发、工程设计、设备制造、安装调试、EPC总包、EP承包及技术优化升级改造服务于…"
                    },
                  ]
                }]
            }
          ]*/
        } 
      ]
    },
    // 技术与服务
    {
      "type": "wrapper",
      "height": 464,
      "width": "100%",
      "style": {
        "background": "url('../../assets/home/service.png') no-repeat top center",
        "backgroundSize": "cover",
        "padding": "40px 80px",
      },
      "body": [
        {
          "type": "flex",
          "direction": "column",
          "items": [
            {
              "type": "flex",
              "items": [
                {
                  "type": "flex",
                  "direction": "column",
                  "alignItems": "start",
                  "style": {
                    "paddingRight": "140px"
                  },
                  "items": [
                    {
                      "type": "tpl",
                      "tpl": "技术与服务",
                      "style": {
                        "font-size": 40,
                        "font-weight": 500,
                        "color": "#FFFFFF",
                        "margin-bottom": "8px"
                      }
                    },
                    {
                      "type": "tpl",
                      "tpl": "公司有近三十年的变压吸附行业经验，集研究、设计、工程建设于一体，长期致力于气体分离、净化、提纯技术及材料的研发及应用，客户遍布全国各地。",
                      "style": {
                        "font-size": 22,
                        "font-weight": 400,
                        "color": "#FFFFFF",
                        "margin-bottom": "8px"
                      }
                    }
                  ]
                },
                {
                  "type": "button",
                  "label": "查看更多 >>",
                  "className": "sl-more-btn",
                }
              ]
            },
            {
              "type": "flex",
              "justify": "space-between",
              "style": {
                "width": "100%"
              },
              "className": "sl-image-container",
              "items": [
                {
                  "type": "image",
                  "src": "../../assets/home/service/service1.png",
                  "width": 300,
                  "height": 192,
                  "innerClassName": "no-border",
                  "title": "CCUS技术"
                },
                {
                  "type": "image",
                  "src": "../../assets/home/service/service2.png",
                  "width": 300,
                  "height": 192,
                  "innerClassName": "no-border",
                  "title": "制氢技术"
                },
                {
                  "type": "image",
                  "src": "../../assets/home/service/service3.png",
                  "width": 300,
                  "height": 192,
                  "innerClassName": "no-border",
                  "title": "甲烷回收技术"
                },
                {
                  "type": "image",
                  "src": "../../assets/home/service/service4.png",
                  "width": 300,
                  "height": 192,
                  "innerClassName": "no-border",
                  "title": "PSA空分制氮技术"
                },
              ]
            }
          ]
        }
      ]
    },
    // 工程案例
    {
      "type": "wrapper",
      "height": 464,
      "width": "100%",
      "style": {
        "background": "url('../../assets/home/case/case.png') no-repeat top center",
        "backgroundSize": "cover",
        "padding": "40px 80px",
      },
      "body": [
        {
          "type": "flex",
          "direction": "column",
          "items": [
            {
              "type": "flex",
              "items": [
                {
                  "type": "flex",
                  "direction": "column",
                  "alignItems": "start",
                  "style": {
                    "paddingRight": "140px"
                  },
                  "items": [
                    {
                      "type": "tpl",
                      "tpl": "工程案例",
                      "style": {
                        "fontSize": 40,
                        "fontWeight": 500,
                        "color": "#424242",
                        "marginBottom": "8px"
                      }
                    },
                    {
                      "type": "tpl",
                      "tpl": "公司有近三十年的变压吸附行业经验，集研究、设计、工程建设与一体，长期致力于气体分离、净化、提纯技术及材料的研发及应用，客户遍布全国各地。",
                      "style": {
                        "fontSize": 22,
                        "fontWeight": 400,
                        "color": "#424242",
                        "marginBottom": "8px"
                      }
                    }
                  ]
                },
                {
                  "type": "button",
                  "label": "查看更多 >>",
                  "className": "sl-more-btn",
                }
              ]
            },
            {
              "type": "flex",
              "justify": "space-between",
              "style": {
                "width": "100%"
              },
              "className": "sl-image-container",
              "items": [
                {
                  "type": "image",
                  "src": "../../assets/home/case/case1.png",
                  "width": 300,
                  "height": 192,
                  "innerClassName": "no-border",
                  "title": "山东某热电厂烟道气碳氮联产项目"
                },
                {
                  "type": "image",
                  "src": "../../assets/home/case/case2.png",
                  "width": 300,
                  "height": 192,
                  "innerClassName": "no-border",
                  // "title": "北京某企业超高纯二氧化碳电子气99.9995"
                  "title": "北京某企业超高纯二氧化碳电子气"
                },
                {
                  "type": "image",
                  "src": "../../assets/home/case/case3.png",
                  "width": 300,
                  "height": 192,
                  "innerClassName": "no-border",
                  "title": "山东某企业变压吸附回收CO"
                },
                {
                  "type": "image",
                  "src": "../../assets/home/case/case4.png",
                  "width": 300,
                  "height": 192,
                  "innerClassName": "no-border",
                  "title": "山西某企业煤层气回收甲烷装置"
                },
              ]
            }
          ]
        }
      ]
    },
    // 新闻咨询
    {
      "type": "wrapper",
      "height": 464,
      "width": "100%",
      "style": {
        // "background": "url('../../assets/home/case/case.png') no-repeat top center",
        // "background-size": "cover",
        "padding": "40px 80px",
      },
      "body": [
        {
          "type": "flex",
          "direction": "column",
          "items": [
            {
              "type": "flex",
              "items": [
                {
                  "type": "flex",
                  "direction": "column",
                  "alignItems": "start",
                  "style": {
                    "paddingRight": "140px"
                  },
                  "items": [
                    {
                      "type": "tpl",
                      "tpl": "新闻咨询",
                      "style": {
                        "fontSize": 40,
                        "fontWeight": 500,
                        "color": "#424242",
                        "marginBottom": "8px"
                      }
                    },
                    {
                      "type": "tpl",
                      "tpl": "公司有近三十年的变压吸附行业经验，集研究、设计、工程建设与一体，长期致力于气体分离、净化、提纯技术及材料的研发及应用，客户遍布全国各地。",
                      "style": {
                        "fontSize": 22,
                        "fontWeight": 400,
                        "color": "#424242",
                        "marginBottom": "8px"
                      }
                    }
                  ]
                },
                {
                  "type": "button",
                  "label": "查看更多 >>",
                  "className": "sl-more-btn",
                }
              ]
            },
            {
              "type": "flex",
              "justify": "space-between",
              "style": {
                "width": "100%"
              },
              "className": "sl-news-image-container",
              "items": [
                {
                  "type": "image",
                  "src": "../../assets/home/news/news1.png",
                  "width": 400,
                  "height": 192,
                  "title": "企业动态"
                },
                {
                  "type": "image",
                  "src": "../../assets/home/news/news2.png",
                  "width": 400,
                  "height": 192,
                  "title": "行业发展"
                },
                {
                  "type": "image",
                  "src": "../../assets/home/news/news3.png",
                  "width": 400,
                  "height": 192,
                  "title": "专业文章"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
export default homeJson