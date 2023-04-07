let contactJson = {
    "type": "service",
    "id": "contactNav",
    "data": {
      "contactType": "contactInfo"
      // "contactType": "employInfo"
    },
    "body": [
        {
          "type": "image",
          "src": "../../assets/contact/contactTop.png",
          "height": 350,
          "width": "100%",
          "innerClassName": "no-border"
        },
        {
          "type": "flex",
          "justify": "start",
          "alignItems": "start",
          "style": {
            "paddingLeft": "160px"
          },
          "items": [
            {
              "type": "wrapper",
              "width": "188px",
              "height": "130px",
              "style": {
                "background": "linear-gradient(138deg, #4783E9 0%, #46BEE6 100%, #4EC1FE 100%)",
                "boxShadow": "0px 2px 10px 0px rgba(0,0,0,0.3)",
                "borderRadius": "10px",
                "position": "relative",
                "top": "-22px",
                "padding": "30px 22px",
                "color": "#fff",
                "fontWeight": 500,
                "fontSize": "14px",
                "minWidth": "188px"
              },
              "body": [
                {
                  "type": "flex",
                  "direction": "column",
                  "alignItems": "start",
                  "items": [{
                    "type": "flex",
                    "style": {
                      "marginBottom": "26px"
                    },
                    "items": [
                      {
                        "type": "tpl",
                        "tpl": "联系方式",
                        "style": {
                          "marginRight": "60px",
                          "cursor": "pointer"
                        },
                        "onEvent": {
                          "click": {
                            "actions": [
                              {
                                "actionType": "setValue",
                                "componentId": "contactNav",
                                "args": {
                                  "value": {
                                    "contactType": "contactInfo"
                                  }
                                }
                              }
                            ]
                          }
                        },
                      },
                      {
                        "type": "wrapper",
                        "style": {
                          "width": '20px',
                          "height": "2px",
                          "background": "#fff",
                          "padding": 0
                        },
                        "visibleOn": "this.contactType === 'contactInfo'"
                      },
                    ]
                  },
                  {
                    "type": "flex",
                    "style": {
                      "marginBottom": "26px"
                    },
                    "items": [
                      {
                        "type": "tpl",
                        "tpl": "人才招聘",
                        "style": {
                          "marginRight": "60px",
                          "cursor": "pointer"
                        },
                        "onEvent": {
                          "click": {
                            "actions": [
                              {
                                "actionType": "setValue",
                                "componentId": "contactNav",
                                "args": {
                                  "value": {
                                    "contactType": 'employInfo'
                                  }
                                }
                              }
                            ]
                          }
                        },
                      },
                      {
                        "type": "wrapper",
                        "style": {
                          "width": '20px',
                          "height": "2px",
                          "background": "#fff",
                          "padding": 0
                        },
                        "visibleOn": "this.contactType === 'employInfo'"
                      }
                    ]
                  },
                  {
                    "type": "flex",
                    "style": {
                      "marginBottom": "26px"
                    },
                    "items": [
                      {
                        "type": "tpl",
                        "tpl": "在线留言",
                        "style": {
                          "marginRight": "60px",
                          "cursor": "pointer"
                        },
                        "onEvent": {
                          "click": {
                            "actions": [
                              {
                                "actionType": "setValue",
                                "componentId": "contactNav",
                                "args": {
                                  "value": {
                                    "contactType": 'messageInfo'
                                  }
                                }
                              }
                            ]
                          }
                        },
                      },
                      {
                        "type": "wrapper",
                        "style": {
                          "width": '20px',
                          "height": "2px",
                          "background": "#fff",
                          "padding": 0
                        },
                        "visibleOn": "this.contactType === 'messageInfo'"
                      }
                    ]
                  }]
                }
              ]
            },
            {
              "type": "flex",
              "visibleOn": "this.contactType === 'contactInfo'",
              "direction": "column",
              "alignItems": "start",
              "style": {
                "padding": "20px 160px 84px 36px"
              },
              "items": [
                {
                  "type": "tpl",
                  "style": {
                    "fontSize": "32px",
                    "fontWeight": 600,
                    "color": "#333",
                  },
                  "tpl": "碳和科技（北京）有限公司",
                },
                {
                  "type": "tpl",
                  "tpl": "联系人：李经理",
                  "style": {
                    "display": "block",
                    "marginBottom": "4px",
                    "marginTop": "10px"
                  }
                },
                {
                  "type": "flex",
                  "items": [
                    {
                      "type": "tpl",
                      "tpl": "联系电话: 13261287370",
                      "style": {
                        "display": "block",
                        "marginBottom": "4px"
                      }
                    },
                    {
                      "type": "button",
                      "label": "复制",
                      "level": "link",
                      "actionType": "copy",
                      "content": "13261287370"
                    }
                  ]
                },
                {
                  "type": "flex",
                  "items": [
                    {
                      "type": "tpl",
                      "tpl": "邮箱：tanhekeji@163.com",
                      "style": {
                        "display": "block",
                        "marginBottom": "4px"
                      }
                    },
                    {
                      "type": "button",
                      "label": "复制",
                      "level": "link",
                      "actionType": "copy",
                      "content": "tanhekeji@163.com"
                    }
                  ]
                },
                {
                  "type": "flex",
                  "items": [
                    {
                      "type": "tpl",
                      "tpl": "地址：北京市北京经济技术开发区 （通州）景盛南四街甲13号19幢2层"
                    },
                    {
                      "type": "button",
                      "label": "复制",
                      "level": "link",
                      "actionType": "copy",
                      "content": "北京市北京经济技术开发区 （通州）景盛南四街甲13号19幢2层"
                    }
                  ]
                },
                {
                  "type": "image",
                  "src": "../../assets/contact/addressBg.png",
                  "height": 451,
                  "width": 896,
                  "innerClassName": "no-border",
                  "style": {
                    "marginTop": "20px"
                  },
                  "href": "https://map.baidu.com/search/%E5%8C%97%E4%BA%AC%E5%B8%82%E9%80%9A%E5%B7%9E%E5%8C%BA%E6%99%AF%E7%9B%9B%E5%8D%97%E5%9B%9B%E8%A1%9713%E5%8F%B719%E6%A0%8B2%E5%B1%82/@12977904.125,4800210,19z?querytype=s&da_src=shareurl&wd=%E5%8C%97%E4%BA%AC%E5%B8%82%E9%80%9A%E5%B7%9E%E5%8C%BA%E6%99%AF%E7%9B%9B%E5%8D%97%E5%9B%9B%E8%A1%9713%E5%8F%B719%E6%A0%8B2%E5%B1%82&c=131&src=0&pn=0&sug=0&l=19&b=(12977541.625,4800019.5;12978266.625,4800400.5)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&device_ratio=2"
                }
              ]
            },
            {
              "type": "flex",
              "visibleOn": "this.contactType === 'employInfo'",
              "direction": "column",
              "alignItems": "start",
              "style": {
                "padding": "20px 160px 84px 36px"
              },
              "className": "employ-wrapper",
              "items": [
                {
                  "type": "collapse-group",
                  /* "activeKey": [
                    "1"
                  ], */
                  "accordion": true,
                  "body": [
                    {
                      "type": "collapse",
                      "key": "1",
                      "header": "售后服务工程师",
                      "body": [
                        {
                          "type": "tpl",
                          "className": "employ-title",
                          "tpl": "<p>职责描述：</p>"
                        },
                        {
                          "type": "tpl",
                          "className": "employ-content",
                          "tpl": `
                          <p>1、负责成套气体分离设备工程类项目的全过程支持、协调、执行；</p>
                          <p>2、负责工程各阶段的施工、验收、工程移交及售后维修工作；</p>
                          <p>3、与甲方、监理等的沟通协调，负责项目的验收；</p>
                          <p>4、负责工具准备，材料清单核实、技术资料准备工作，与用户及公司相关部门进行充分沟通，以期顺利、高效完成现场工作；</p>
                          <p>5、负责项目设备在现场的安装、调试、培训、资料交接、设备或工程验收等工作。</p>
                          `
                        },
                        {
                          "type": "tpl",
                          "className": "employ-title",
                          "tpl": "<p>任职要求：</p>"
                        },
                        {
                          "type": "tpl",
                          "className": "employ-content",
                          "tpl": `
                          <p>1、大专以上学历，机械、化工、机电或自控等相关工科背景；</p>
                          <p>2、工作认真踏实，能吃苦耐劳，积极主动，动手能力强；</p>
                          <p>3、良好的沟通与协调能力，富有责任心和团队协作精神；</p>
                          <p>4、身体健康，能独立工作；</p>
                          <p>5、能适应经常出差。</p>
                          `
                        },
                        {
                          "type": "tpl",
                          "className": "employ-title",
                          "tpl": "<p>加分项：</p>"
                        },
                        {
                          "type": "tpl",
                          "className": "employ-content",
                          "tpl": `
                          <p>1、有多年现场施工管理经验；</p>
                          <p>2、有气体分离、气体提纯等施工管理经验；</p>
                          <p>3、有驾照、开车熟练；</p>
                          <p>4、熟练使用AutoCAD、office等工作软件。</p>
                          <p>5、有空压机维修或机电设备安装、调试、维修工作经验，熟悉机械设备和PLC控制系统相关知识；</p>
                          `
                        }
                      ]
                    },
                    {
                      "type": "collapse",
                      "key": "2",
                      "header": "研发工程师",
                      "body": [
                        {
                          "type": "tpl",
                          "className": "employ-title",
                          "tpl": "<p>工作职责：</p>"
                        },
                        {
                          "type": "tpl",
                          "className": "employ-content",
                          "tpl": `
                          <p>从事气体分离净化相关工艺的研发和优化。负责领导下达的日常研发工作，主要是开发设计新工艺，并对其进行实验验证（包括小试、中试及工业侧线试验），根据实验结果得出新开发或改进工艺的使用条件及参数，为工业设计提供工艺包数据。</p>
                          `
                        },
                        {
                          "type": "tpl",
                          "className": "employ-title",
                          "tpl": "<p>岗位要求：</p>"
                        },
                        {
                          "type": "tpl",
                          "className": "employ-content",
                          "tpl": `
                          <p>1、负责现有技术的改进工作；</p>
                          <p>2、协助研发经理进行新技术的开发工作；</p>
                          <p>3、管理好研发项目实施过程中产生的样品和各类文件；</p>
                          <p>4、参与公司下达的文献调研任务，或自发调研与公司有关的技术，提出工艺开发建议；</p>
                          <p>5、设计并绘制工艺流程图、平面布置图、设备安装施工图、非标设备施工图及压力容器图；</p>
                          <p>6、能在指导下搭建或调试实验装置。</p>
                          `
                        },
                        {
                          "type": "tpl",
                          "className": "employ-title",
                          "tpl": "<p>任职要求：</p>"
                        },
                        {
                          "type": "tpl",
                          "className": "employ-content",
                          "tpl": `
                          <p>1、踏实肯干、吃苦耐劳、诚实可靠，爱岗敬业；</p>
                          <p>2、本科以上学历，化学工程与工艺专业，或化学化工相关专业（个别优秀者，大专也可）；</p>
                          <p>3、善于独立思考、学习、创新意识强，做事有条理，有良好的沟通能力；</p>
                          <p>4、具有传递过程、反应工程、化工原理、热力学、物理化学等基础知识，熟悉其中一种制图软件（如：CAD），</p>
                          `
                        },
                        {
                          "type": "tpl",
                          "className": "employ-title",
                          "tpl": "<p>加分项：</p>"
                        },
                        {
                          "type": "tpl",
                          "className": "employ-content",
                          "tpl": `
                          <p>1、有驾照、开车熟练；<p>
                          <p>2、具备科研、设计、生产一线相关工作经历；</p>
                          <p>3、了解常规的化工仪表及设备，有色谱使用经验者；</p>
                          <p>4、会Origin、Matlab、AutoCAD等工具软件或者其他三维软件；</p>
                          <p>5、有可研论文发表、专利申请或者科研成果转化。</p>
                          `
                        }
                      ]
                    },
                    {
                      "type": "collapse",
                      "key": "3",
                      "header": "工艺工程师",
                      "body": [
                        {
                          "type": "tpl",
                          "className": "employ-title",
                          "tpl": "<p>岗位职责：</p>"
                        },
                        {
                          "type": "tpl",
                          "className": "employ-content",
                          "tpl": `
                          <p>1、负责变压吸附气体分离设备及相关设备的工艺设计、施工图设计、技术资料编制等技术性工作；</p>
                          <p>2、负责协助采购部门订购配套设备、对配套设备的技术性指标进行协商、确认；</p>
                          <p>3、负责协助项目经理对项目实施过程进行管理，与各方保持良好的沟通。</p>
                          `
                        },
                        {
                          "type": "tpl",
                          "className": "employ-title",
                          "tpl": "<p>任职要求：</p>"
                        },
                        {
                          "type": "tpl",
                          "className": "employ-content",
                          "tpl": `
                          <p>1、学历：大专以上学历，化工、工业催化、或化学、机械制造、设备等相关理工科专业；</p>
                          <p>2、工作年限：工作经验1-3年及以上，有在设计院、化工企业从事过设计工作经验，有过行业经验者优先;具体要求：</p>
                          <p>3、工作勤恳踏实，认真负责；</p>
                          <p>4、具备良好的沟通协调能力；</p>
                          <p>5、熟练使用AUTOCAD等绘图软件及常用办公软件；</p>
                          <p>6、能够适应经常出差。</p>
                          `
                        },
                        {
                          "type": "tpl",
                          "className": "employ-title",
                          "tpl": "<p>加分项：</p>"
                        },
                        {
                          "type": "tpl",
                          "className": "employ-content",
                          "tpl": `
                          <p>1、有驾照、开车熟练；</p>
                          <p>2、具备科研、设计、生产一线或者设计院相关工作经历；</p>
                          <p>3、会三维绘图软件。</p>
                          `
                        },
                      ]
                    },
                    {
                      "type": "collapse",
                      "key": "4",
                      "header": "市场销售工程师",
                      "body": [
                        {
                          "type": "tpl",
                          "className": "employ-title",
                          "tpl": "<p>岗位职责：</p>"
                        },
                        {
                          "type": "tpl",
                          "className": "employ-content",
                          "tpl": `
                          <p>1、根据公司技术特点，结合市场需求，通过市场调研及与相关部门论证，制定出出商务、技术解决方案，配合相关部门实施；<p>
                          <p>2、负责调研了解客户行业，技术应用的需求，初步拟定气体回收、再循环利用的解决方案；<p>
                          <p>3、配合相关部门，完成对客户售后服务与可开发的技术应用市场的拓展。<p>
                          <p>4、完成公司项目拓展及产品销售任务；<p>
                          <p>5、收集、整理可开发的应用方面的市场方面的信息，并提交项目可行性分析报告；<p>
                          <p>6、协助开展立项报批工作，负责做好其他部门或外部单位的协调沟通工作；</p>
                          <p>7、做好与各个合作方的联络、沟通工作，发展新客户等各项工作；</p>
                          <p>8、完成制定招投标方案，完成招投标工作，参与项目的合同签订；</p>
                          `
                        },
                        {
                          "type": "tpl",
                          "className": "employ-title",
                          "tpl": "<p>任职要求：</p>"
                        },
                        {
                          "type": "tpl",
                          "className": "employ-content",
                          "tpl": `
                          <p>1、年龄25-50岁，化工或化学类或气体类型或营销相关的专业；</p>
                          <p>2、3年以上相关技术工作经历；</p>
                          <p>3、工作认真，责任心强，善于表达，积极热情；</p>
                          <p>4、适应经常性出差，会驾驶；</p>
                          <p>5、头脑灵活，有较好的社会交往能力、协助开拓市场和售后支持服务；</p>
                          `
                        },
                        // 模板
                        /* {
                          "type": "tpl",
                          "className": "employ-title",
                          "tpl": "<p>：</p>"
                        },
                        {
                          "type": "tpl",
                          "className": "employ-content",
                          "tpl": `
                          <p>1、<p>
                          <p>2、<p>
                          <p>3、<p>
                          <p>4、<p>
                          <p>5、<p>
                          `
                        }, */
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "flex",
              "visibleOn": "this.contactType === 'messageInfo'",
              "direction": "column",
              "alignItems": "start",
              "style": {
                "padding": "20px 160px 84px 36px"
              },
              "items": [
                {
                  "type": "wrapper",
                  "style": {
                    "background": "#F5F5F5",
                    "textAlign": "center"
                  },
                  "body": [
                    {
                      "type": "tpl",
                      "tpl": "您有任何意见或建议，可以留言给我们",
                      "style": {
                        "fontSize": "32px",
                        "fontWeight": "600",
                        "color": "#333",
                        "textAlign": "center",
                        "display": "block",
                        "marginTop": "6px"
                      }
                    },
                    {
                      "type": "form",
                      "api": "post:/message/create",
                      "mode": "horizontal",
                      "wrapWithPanel": false,
                      "className": "contact-comment-wrapper",
                      "labelWidth": 0,
                      "body": [
                        {
                          "type": "textarea",
                          "name": "content",
                          "placeholder": "请输入内容",
                          "minRows": 7,
                          "style": {
                            "width": 808
                          },
                          "required": true
                        },
                        {
                          "type": "group",
                          "body": [
                            {
                              "type": "input-text",
                              "className": "input-comment",
                              "name": "username",
                              "placeholder": "请输入姓名",
                              "style": {
                                "marginRight": "8px",
                                "width": 400,
                                "height": 60,
                                "required": true
                              }
                            },
                            {
                              "type": "input-text",
                              "name": "phone",
                              "placeholder": "请输入手机号",
                              "style": {
                                "width": 400,
                                "height": 60
                              },
                              "required": true
                            }
                          ]
                        },
                        {
                          "type": "group",
                          "body": [
                            {
                              "type": "input-text",
                              "name": "email",
                              "placeholder": "请输入邮箱",
                              "style": {
                                "marginRight": "8px",
                                "width": 400,
                                "height": 60,
                                "marginBottom": "12px"
                              }
                            },
                            {
                              "type": "input-text",
                              "name": "companyName",
                              "placeholder": "请输入公司名",
                              "style": {
                                "width": 400,
                                "height": 60,
                                "marginBottom": "12px"
                              }
                            }
                          ]
                        },
                        {
                          "type": "submit",
                          "label": "提交",
                          "placeholder": "请输入公司名",
                          "style": {
                            "width": 808,
                            "height": 54,
                            "background": "#005BAC",
                            "color": "#FFFFFF"
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
    ]
}

export default contactJson