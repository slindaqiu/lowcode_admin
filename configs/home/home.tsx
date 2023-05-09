import BASE_URL from '../../settings'

// window.onload = function() {
// 滑动
let slider: any = null
let caseSlider: any = null
let counter: any = 0
let caseCounter: any = 0
let targetPosition: any = 0

function sliderInit(slider: any) {
  // 滚动容器的左右移动，增加点击事件，清理 counter 值
  if (slider) {
    if (slider.querySelectorAll('a').length === 7) {
      slider.innerHTML = slider.innerHTML + slider.innerHTML + slider.innerHTML
      let links = slider.querySelectorAll('a')
      for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function () {
          counter = 0
          caseCounter = 0
        })
      }
    }
    // 初始化位置
    counter = 7
    caseCounter = 7
    targetPosition = -counter * 326
    slider.style.transition = 'inherit'
    slider.style.transform = `translateX(${targetPosition}px)`
  }
}

// 开始滑动
setTimeout(() => {
  slider = document.querySelector('.slider-wrapper')
  // 滚动容器的左右移动，增加点击事件，清理 counter 值
  sliderInit(slider)

  // 工程案例
  caseSlider = document.querySelector('.case-slider-wrapper')
  sliderInit(caseSlider)
}, 500)
// }

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
      "className": "carousel-wrapper",
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
      ],
      itemSchema: {
        type: 'tpl',
        tpl: `
        <div style="background-image: url('<%= data.image %>'); background-size: cover; background-repeat: no-repeat; background-position: center center;" class="image <%= data.imageClassName %>">
         <image src='../../assets/home/leftArrow.png' class='left-arrow'></image>
         <image src='../../assets/home/rightArrow.png'  class='right-arrow'></image>
        </div>`
      }
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
                "color": "#2F3C43",
                "cursor": "pointer"
              },
              "type": "button",
              "level": "link",
              "label": "关于我们",
              "actionType": "link",
              "to": "/about?aboutType=company&active=about"
            },
            {
              "style": {
                "fontSize": 28,
                "fontWeight": 600,
                "color": "#025DAD",
                "marginTop": "16px",
                "marginBottom": 30
              },
              "type": "tpl",
              "tpl": "诚信 创新 高效 发展"
            },
          ]
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
          "style": {
            "position": "relative",
            "width": "100%"
          },
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
                  "actionType": "url",
                  "url": "/#/service?catalog=service1&active=service ",
                  "blank": false
                }
              ]
            },
            {
              "type": "button",
              "className": "slider-left-arrow",
              "level": "link",
              "innerClassName": "no-border",
              "width": 36,
              "height": 36,
              "style": {
                "background": "url('../../assets/home/whiteLeftArrow.png')",
                "position": "absolute",
                "left": "-60px",
                "top": "236px",
                "cursor": "pointer"
              },
              "onEvent": {
                "click": {
                  "actions": [
                    {
                      "actionType": "custom",
                      "script": function (context: any, doAction: any, event: any) {
                        let timer = 0
                        let startHome = window.localStorage.getItem('startHome')
                        if (startHome === 'yes') {
                          timer = 100
                          slider = document.querySelector('.slider-wrapper')
                          if (slider.querySelectorAll('a').length === 7) {
                            slider.innerHTML = slider.innerHTML + slider.innerHTML + slider.innerHTML
                          }
                          if (slider) {
                            // 初始化位置, 并定位到指定位置，不要过渡效果
                            counter = 7
                            targetPosition = -counter * 326
                            slider.style.transitionProperty = 'none'
                            slider.style.transform = `translateX(${targetPosition}px)`
                          }
                        }
                        // 处理重新初始化
                        setTimeout(() => {
                          slider = document.querySelector('.slider-wrapper')
                          if (counter < 17) {
                            counter++
                            targetPosition = -counter * 326
                            slider.style.transition = 'transform 0.8s ease-in-out'
                            slider.style.transform = `translateX(${targetPosition}px)`
                          } else if (counter === 3) {
                            slider.style.transition = 'inherit'
                            slider.style.transform = `translateX(0)`
                            counter = 0
                          }
                        }, timer)
                        // 设置标志位
                        window.localStorage.setItem('startHome', 'false')
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "button",
              "level": "link",
              "className": "slider-right-arrow",
              "innerClassName": "no-border",
              "style": {
                "background": "url('../../assets/home/whiteRightArrow.png') 36px 36px",
                "position": "absolute",
                "right": "-60px",
                "top": "236px",
                "cursor": "pointer",
                "width": "36px",
                "height": "36px",
              },
              "onEvent": {
                "click": {
                  "actions": [
                    {
                      "actionType": "custom",
                      "script": function (context: any, doAction: any, event: any) {
                        let timer = 0
                        let startHome = window.localStorage.getItem('startHome')
                        if (startHome === 'yes') {
                          timer = 100
                          slider = document.querySelector('.slider-wrapper')
                          if (slider.querySelectorAll('a').length === 7) {
                            slider.innerHTML = slider.innerHTML + slider.innerHTML + slider.innerHTML
                          }
                          if (slider) {
                            // 初始化位置
                            counter = 7
                            targetPosition = -counter * 326
                            slider.style.transitionProperty = 'none'
                            slider.style.transform = `translateX(${targetPosition}px)`
                          }
                        }
                        // 处理重新初始化
                        setTimeout(() => {
                          slider = document.querySelector('.slider-wrapper')
                          /* if (slider.querySelectorAll('a').length === 7) {
                            slider.innerHTML = slider.innerHTML + slider.innerHTML + slider.innerHTML
                          } */
                          if (counter > 0) {
                            counter--
                            targetPosition = -counter * 326
                            slider.style.transition = 'transform 0.8s ease-in-out'
                            slider.style.transform = `translateX(${targetPosition}px)`
                          } else if (counter === 0) {
                            counter--
                            slider.style.transition = 'transform 0.8s ease-in-out'
                            slider.style.transform = "translateX(slideWidth)"
                          }
                        }, timer)
                        // 设置标志位
                        window.localStorage.setItem('startHome', 'false')
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "wrapper",
              "style": {
                "overflow": "hidden",
                "width": "100%",
                "padding": 0
              },
              "body": {
                "type": "flex",
                // "justify": "space-start",
                "justify": "flex-start",
                "style": {
                  // "width": "2256px",
                  "width": "6820px",
                  "height": "240px"
                },
                "className": "sl-image-container slider-wrapper",
                "items": [
                  {
                    "type": "link",
                    "href": `${BASE_URL}/#/service?id=4&active=service&catalog=service1`,
                    "body": {
                      "type": "image",
                      "src": "../../assets/home/service/service1.png",
                      "width": 300,
                      "height": 192,
                      "innerClassName": "no-border",
                      "title": "CCUS技术"
                    },
                    "blank": false,
                    "style": {
                      "cursor": "poiner"
                    }
                  },
                  {
                    "type": "link",
                    "href": `${BASE_URL}/#/service?id=8&active=service&catalog=service3`,
                    "body": {
                      "type": "image",
                      "src": "../../assets/home/service/service2.png",
                      "width": 300,
                      "height": 192,
                      "innerClassName": "no-border",
                      "title": "制氢技术"
                    },
                    "blank": false,
                    "style": {
                      "cursor": "poiner"
                    }
                  },
                  {
                    "type": "link",
                    "href": `${BASE_URL}/#/service?id=10&active=service&catalog=service4`,
                    "body": {
                      "type": "image",
                      "src": "../../assets/home/service/service3.png",
                      "width": 300,
                      "height": 192,
                      "innerClassName": "no-border",
                      "title": "甲烷回收技术"
                    },
                    "blank": false,
                    "style": {
                      "cursor": "poiner"
                    }
                  },
                  {
                    "type": "link",
                    "href": `${BASE_URL}/#/service?id=12&active=service&catalog=service5`,
                    "body": {
                      "type": "image",
                      "src": "../../assets/home/service/service4.png",
                      "width": 300,
                      "height": 192,
                      "innerClassName": "no-border",
                      "title": "PSA空分制氮技术"
                    },
                    "blank": false,
                    "style": {
                      "cursor": "poiner"
                    }
                  },
                  {
                    "type": "link",
                    "href": `${BASE_URL}/#/service?id=7&active=service&catalog=service2`,
                    "body": {
                      "type": "image",
                      "src": "../../assets/home/service/service5.png",
                      "width": 300,
                      "height": 192,
                      "innerClassName": "no-border",
                      "title": "变压吸附提纯CO"
                    },
                    "blank": false,
                    "style": {
                      "cursor": "poiner"
                    }
                  },
                  {
                    "type": "link",
                    "href": `${BASE_URL}/#/service?id=17&active=service&catalog=service6`,
                    "body": {
                      "type": "image",
                      "src": "../../assets/home/service/service6.png",
                      "width": 300,
                      "height": 192,
                      "innerClassName": "no-border",
                      "title": "气体干燥净化技术"
                    },
                    "blank": false,
                    "style": {
                      "cursor": "poiner"
                    }
                  },
                  {
                    "type": "link",
                    "href": `${BASE_URL}/#/service?id=26&active=service&catalog=service7`,
                    "body": {
                      "type": "image",
                      "src": "../../assets/home/service/service7.png",
                      "width": 300,
                      "height": 192,
                      "innerClassName": "no-border",
                      "title": "吸附剂、催化剂"
                    },
                    "blank": false,
                    "style": {
                      "cursor": "poiner"
                    }
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    // 工程案例
    {
      "type": "wrapper",
      "height": 464,
      "style": {
        "background": "url('../../assets/home/case/case.png') no-repeat top center",
        "backgroundSize": "cover",
        "padding": "40px 80px"
      },
      "body": [
        {
          "type": "flex",
          "direction": "column",
          "style": {
            "position": "relative",
            "width": "100%",
          },
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
                      "tpl": "公司有近三十年的变压吸附行业经验，集研究、设计、工程建设于一体，长期致力于气体分离、净化、提纯技术及材料的研发及应用，客户遍布全国各地。",
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
                  "actionType": "url",
                  "url": "/#/case?catalog=case1&active=case",
                  "blank": false
                }
              ]
            },
            {
              "type": "button",
              "className": "slider-left-arrow",
              "level": "link",
              "innerClassName": "no-border",
              "width": 36,
              "height": 36,
              "style": {
                "background": "url('../../assets/home/imgLeft.png')",
                "position": "absolute",
                "left": "-60px",
                "top": "236px",
                "cursor": "pointer"
              },
              "onEvent": {
                "click": {
                  "actions": [
                    {
                      "actionType": "custom",
                      "script": function (context: any, doAction: any, event: any) {
                        let timer = 0
                        let startHome = window.localStorage.getItem('startHome')
                        if (startHome === 'yes') {
                          timer = 100
                          slider = document.querySelector('.case-slider-wrapper')
                          if (slider.querySelectorAll('a').length === 7) {
                            slider.innerHTML = slider.innerHTML + slider.innerHTML + slider.innerHTML
                          }
                          if (slider) {
                            // 初始化位置
                            caseCounter = 7
                            targetPosition = -caseCounter * 326
                            slider.style.transitionProperty = 'none'
                            slider.style.transform = `translateX(${targetPosition}px)`
                          }
                        }
                        // 处理重新初始化
                        setTimeout(() => {
                          slider = document.querySelector('.case-slider-wrapper')
                          if (caseCounter < 17) {
                            caseCounter++
                            targetPosition = -caseCounter * 326
                            slider.style.transition = 'transform 0.8s ease-in-out'
                            slider.style.transform = `translateX(${targetPosition}px)`
                          } else if (caseCounter === 3) {
                            slider.style.transition = 'inherit'
                            slider.style.transform = `translateX(0)`
                            caseCounter = 0
                          }
                        }, timer)
                        // 设置标志位
                        window.localStorage.setItem('startHome', 'false')
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "button",
              "level": "link",
              "className": "slider-right-arrow",
              "innerClassName": "no-border",
              "style": {
                "background": "url('../../assets/home/imgRight.png')",
                "position": "absolute",
                "right": "-60px",
                "top": "236px",
                "cursor": "pointer",
                "width": "36px",
                "height": "36px"
              },
              "onEvent": {
                "click": {
                  "actions": [
                    {
                      "actionType": "custom",
                      "script": function (context: any, doAction: any, event: any) {
                        let timer = 0
                        let startHome = window.localStorage.getItem('startHome')
                        if (startHome === 'yes') {
                          timer = 100
                          slider = document.querySelector('.case-slider-wrapper')
                          if (slider.querySelectorAll('a').length === 7) {
                            slider.innerHTML = slider.innerHTML + slider.innerHTML + slider.innerHTML
                          }
                          if (slider) {
                            // 初始化位置
                            caseCounter = 7
                            targetPosition = -caseCounter * 326
                            slider.style.transitionProperty = 'none'
                            slider.style.transform = `translateX(${targetPosition}px)`
                          }
                        }
                        // 处理重新初始化
                        setTimeout(() => {
                          slider = document.querySelector('.case-slider-wrapper')
                          if (caseCounter > 0) {
                            caseCounter--
                            targetPosition = -caseCounter * 326
                            slider.style.transition = 'transform 0.8s ease-in-out'
                            slider.style.transform = `translateX(${targetPosition}px)`
                          } else if (caseCounter === 0) {
                            caseCounter--
                            slider.style.transition = 'transform 0.8s ease-in-out'
                            slider.style.transform = "translateX(slideWidth)"
                          }
                        }, timer)
                        // 设置标志位
                        window.localStorage.setItem('startHome', 'false')
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "wrapper",
              "style": {
                "overflow": "hidden",
                "width": "100%",
                "padding": 0
              },
              "body": {
                "type": "flex",
                // "justify": "space-between",
                "justify": "flex-start",
                "style": {
                  // "width": "100%",
                  "width": "6820px",
                  "height": "240px"
                },
                "className": "sl-image-container case-slider-wrapper",
                "items": [
                  {
                    "type": "link",
                    "href": `${BASE_URL}/#/case?id=60&active=case&catalog=case1`,
                    "body": {
                      "type": "image",
                      "src": "../../assets/home/case/case1.png",
                      "width": 300,
                      "height": 192,
                      "innerClassName": "no-border",
                      "title": "山东某热电厂烟道气碳氮联产项目",
                      "style": {
                        "cursor": "poiner"
                      }
                    },
                    "blank": false,
                    "style": {
                      "cursor": "poiner"
                    }
                  },
                  {
                    "type": "link",
                    "href": `${BASE_URL}/#/case?id=61&active=case&catalog=case1`,
                    "body": {
                      "type": "image",
                      "src": "../../assets/home/case/case2.png",
                      "width": 300,
                      "height": 192,
                      "innerClassName": "no-border",
                      // "title": "北京某企业超高纯二氧化碳电子气99.9995"
                      "title": "北京某企业超高纯二氧化碳电子气",
                    },
                    "blank": false,
                    "style": {
                      "cursor": "poiner"
                    }
                  },
                  {
                    "type": "link",
                    "href": `${BASE_URL}/#/case?id=66&active=case&catalog=case2`,
                    "body": {
                      "type": "image",
                      "src": "../../assets/home/case/case3.png",
                      "width": 300,
                      "height": 192,
                      "innerClassName": "no-border",
                      "title": "山东某企业变压吸附回收CO",
                    },
                    "blank": false,
                    "style": {
                      "cursor": "poiner"
                    }
                  },
                  {
                    "type": "link",
                    "href": `${BASE_URL}/#/case?id=68&active=case&catalog=case4`,
                    "body": {
                      "type": "image",
                      "src": "../../assets/home/case/case4.png",
                      "width": 300,
                      "height": 192,
                      "innerClassName": "no-border",
                      "title": "山西某企业煤层气回收甲烷装置",
                    },
                    "blank": false,
                    "style": {
                      "cursor": "poiner"
                    }
                  },
                  {
                    "type": "link",
                    "href": `${BASE_URL}/#/case?id=41&active=case&catalog=case5`,
                    "body": {
                      "type": "image",
                      "src": "../../assets/home/case/case5.png",
                      "width": 300,
                      "height": 192,
                      "innerClassName": "no-border",
                      "title": "某企业空分PSA制氮装置",
                    },
                    "blank": false,
                    "style": {
                      "cursor": "poiner"
                    }
                  },
                  {
                    "type": "link",
                    "href": `${BASE_URL}/#/case?id=45&active=case&catalog=case6`,
                    "body": {
                      "type": "image",
                      "src": "../../assets/home/case/case6.png",
                      "width": 300,
                      "height": 192,
                      "innerClassName": "no-border",
                      "title": "高纯氮气装置",
                    },
                    "blank": false,
                    "style": {
                      "cursor": "poiner"
                    }
                  },
                  {
                    "type": "link",
                    "href": `${BASE_URL}/#/case?id=27&active=case&catalog=case7`,
                    "body": {
                      "type": "image",
                      "src": "../../assets/home/case/case7.png",
                      "width": 300,
                      "height": 192,
                      "innerClassName": "no-border",
                      "title": "吸附剂、催化剂",
                    },
                    "blank": false,
                    "style": {
                      "cursor": "poiner"
                    }
                  }
                ]
              }
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
                      "tpl": "公司有近三十年的变压吸附行业经验，集研究、设计、工程建设于一体，长期致力于气体分离、净化、提纯技术及材料的研发及应用，客户遍布全国各地。",
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
                  "actionType": "url",
                  "url": "/#/news?active=news&catalog=news1",
                  "blank": false
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
                  "type": "link",
                  "href": `${BASE_URL}/#/news?&active=news&catalog=news1`,
                  "body": {
                    "type": "image",
                    "src": "../../assets/home/news/news1.png",
                    "width": 400,
                    "height": 192,
                    "title": "企业动态"
                  },
                  "blank": false,
                  "style": {
                    "cursor": "poiner"
                  }
                },
                {
                  "type": "link",
                  "href": `${BASE_URL}/#/news?active=news&catalog=news3`,
                  "body": {
                    "type": "image",
                    "src": "../../assets/home/news/news2.png",
                    "width": 400,
                    "height": 192,
                    "title": "行业发展"
                  },
                  "blank": false,
                  "style": {
                    "cursor": "poiner"
                  }
                },
                {
                  "type": "link",
                  "href": `${BASE_URL}/#/news?active=news&catalog=news2`,
                  "body": {
                    "type": "image",
                    "src": "../../assets/home/news/news3.png",
                    "width": 400,
                    "height": 192,
                    "title": "专业文章"
                  },
                  "blank": false,
                  "style": {
                    "cursor": "poiner"
                  }
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