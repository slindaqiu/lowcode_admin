import React from 'react';
import {observer, inject} from 'mobx-react';
import {IMainStore} from '../store';
import {Button, AsideNav, Layout, confirm, Renderer} from 'amis';
import {RouteComponentProps, matchPath, Switch, Route} from 'react-router';
import {Link} from 'react-router-dom';
import NotFound from './NotFound';
import AMISRenderer from '../component/AMISRenderer';
import AddPageModal from '../component/AddPageModal';

function isActive(link: any, location: any) {
  const ret = matchPath(location.pathname, {
    path: link ? link.replace(/\?.*$/, '') : '',
    exact: true,
    strict: true
  });

  return !!ret;
}

const getEvent = (catalog: any) => {
  return {
    "click": {
      "actions": [
        {
          "actionType": "broadcast",
          "args": {
            "eventName": "selectServiceCatalog"
          },
          "data": {
            "selectedCatalog": catalog,
          }
        }
      ]
    }
  }
}

export default inject('store')(
  observer(function ({
    store,
    location,
    history
  }: {store: IMainStore} & RouteComponentProps) {
    function renderHeader() {
      let headerSchema = {
        // "type": "page",
        // "body": [
          // {
            "type": "grid",
            // "height": 72,
            "style": {
              "background": "#FFFFFF",
              "paddingLeft": 44,
              "paddingRight": 84
            },
            "columns": [
              {
                "md": 4,
                // "columnClassName": "bg-green-300",
                "body": [
                  {
                    "type": "flex",
                    "style": {
                      "height": 72,
                      "float": "left"
                    },
                    "items": [
                      {
                        "type": "image",
                        "src": "../assets/logo/logo.png",
                        "width": 46,
                        "height": 46,
                        "innerClassName": "no-border",
                        "style": {
                          "marginRight": 13
                        }
                      },
                      {
                        "type": "tpl",
                        "tpl": "碳和科技（北京）有限公司",
                        "style": {
                          "fontSize": 26,
                          "color": "#224165"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "md": 8,
                "columnClassName": "bg-white",
                "body": [
                  {
                    "type": "service",
                    "body": {
                      "type": "flex",
                      "className": "nav-container",
                      "style": {
                        "height": 72,
                        "float": "right"
                      },
                      "items": [
                        {
                          "type": "button",
                          "label": "首页",
                          "className": {"home-active": "this.active=='home'", "nav-title": true},
                          "level": "link",
                          "actionType": "link",
                          "link": "/home?active=home",
                          "style": {
                            "fontSize": "16px",
                            "fontWeight": "600",
                            "color": "#333"
                          }
                        },
                        {
                          "type": "dropdown-button",
                          "label": "关于我们",
                          "className": {"nav-active": "this.active=='about'", "nav-title": true},
                          "level": "link",
                          "trigger": "hover",
                          // "trigger": "click",
                          "buttons": [
                            {
                              "type": "button",
                              "label": "公司简介",
                              "actionType": "link",
                              "link": "/about?aboutType=company&active=about"
                            },
                            {
                              "type": "button",
                              "label": "荣誉资质",
                              "actionType": "link",
                              "link": "/about?aboutType=certificate&active=about"
                            }
                          ]
                        },
                        {
                          "type": "dropdown-button",
                          "label": "技术与服务",
                          "className": {"nav-active": "this.active=='service'", "nav-title": true},
                          "level": "link",
                          "trigger": "hover",
                          "buttons": [
                            {
                              "type": "button",
                              "label": "二氧化碳的捕集利用",
                              "actionType": "link",
                              "link": "/service?catalog=service1&active=service",
                              "onEvent": getEvent('service1')
                              /* "onEvent": {
                                "click": {
                                  "actions": [
                                    {
                                      "actionType": "broadcast",
                                      "args": {
                                        "eventName": "selectServiceCatalog"
                                      },
                                      "data": {
                                        "selectedCatalog": "service1",
                                      }
                                    }
                                  ]
                                }
                              } */
                            },
                            {
                              "type": "button",
                              "label": "变压吸附提纯CO技术",
                              "actionType": "link",
                              "link": "/service?catalog=service2&active=service",
                              "onEvent": getEvent('service2')
                            },
                            {
                              "type": "button",
                              "label": "变压吸附制氢技术",
                              "actionType": "link",
                              "link": "/service?catalog=service3&active=service",
                              "onEvent": getEvent('service3')
                            },
                            {
                              "type": "button",
                              "label": "甲烷提浓技术",
                              "actionType": "link",
                              "link": "/service?catalog=service4&active=service",
                              "onEvent": getEvent('service4')
                            },
                            {
                              "type": "button",
                              "label": "空分PSA制氮、制氧技术",
                              "actionType": "link",
                              "link": "/service?catalog=service5&active=service",
                              "onEvent": getEvent('service5')
                            },
                            {
                              "type": "button",
                              "label": "气体干燥净化技术",
                              "actionType": "link",
                              "link": "/service?catalog=service6&active=service",
                              "onEvent": getEvent('service6')
                            },
                            {
                              "type": "button",
                              "label": "吸附剂、催化剂",
                              "actionType": "link",
                              "link": "/service?catalog=service7&active=service",
                              "onEvent": getEvent('service7')
                            }
                          ]
                        },
                        {
                          "type": "dropdown-button",
                          "label": "工程案例",
                          "className": {"nav-active": "this.active=='case'", "nav-title": true},
                          "level": "link",
                          "trigger": "hover",
                          "buttons": [
                            {
                              "type": "button",
                              "label": "二氧化碳捕集利用",
                              "actionType": "link",
                              "link": "/case?catalog=case1&active=case",
                              "onEvent": getEvent('case1')
                            },
                            {
                              "type": "button",
                              "label": "变压吸附回收CO",
                              "actionType": "link",
                              "link": "/case?catalog=case2&active=case",
                              "onEvent": getEvent('case2')
                            },
                            {
                              "type": "button",
                              "label": "变压吸附提纯氢气",
                              "actionType": "link",
                              "link": "/case?catalog=case3&active=case",
                              "onEvent": getEvent('case3')
                            },
                            {
                              "type": "button",
                              "label": "甲烷提纯",
                              "actionType": "link",
                              "link": "/case?catalog=case4&active=case",
                              "onEvent": getEvent('case4')
                            },
                            {
                              "type": "button",
                              "label": "空分制氮制氧",
                              "actionType": "link",
                              "link": "/case?catalog=case5&active=case",
                              "onEvent": getEvent('case5')
                            },
                            {
                              "type": "button",
                              "label": "气体净化干燥",
                              "actionType": "link",
                              "link": "/case?catalog=case6&active=case",
                              "onEvent": getEvent('case6')
                            },
                            {
                              "type": "button",
                              "label": "吸附剂、催化剂",
                              "actionType": "link",
                              "link": "/case?catalog=case7&active=case",
                              "onEvent": getEvent('case7')
                            }
                          ]
                        },
                        {
                          "type": "dropdown-button",
                          "label": "新闻咨询",
                          "className": {"nav-active": "this.active=='news'", "nav-title": true},
                          "level": "link",
                          "trigger": "hover",
                          "buttons": [
                            {
                              "type": "button",
                              "label": "企业动态",
                              "actionType": "link",
                              "link": "/news?catalog=news1&active=news",
                              "onEvent": getEvent('news1')
                            },
                            {
                              "type": "button",
                              "label": "专业文章",
                              "actionType": "link",
                              "link": "/news?catalog=news2&active=news",
                              "onEvent": getEvent('news2')
                            },
                            {
                              "type": "button",
                              "label": "行业资讯",
                              "actionType": "link",
                              "link": "/news?catalog=news3&active=news3",
                              "onEvent": getEvent('news3')
                            }
                          ]
                        },
                        {
                          "type": "dropdown-button",
                          "label": "联系我们",
                          "className": {"nav-active": "this.active=='contact'", "nav-title": true},
                          "level": "link",
                          "trigger": "hover",
                          "style": {
                            "marginRight": "46px"
                          },
                          "buttons": [
                            {
                              "type": "button",
                              "label": "联系方式",
                              "actionType": "link",
                              "link": "/contact?contactType=contactInfo&active=contact"
                            },
                            {
                              "type": "button",
                              "label": "人才招聘",
                              "actionType": "link",
                              "link": "/contact?contactType=employInfo&active=contact"
                            },
                            {
                              "type": "button",
                              "label": "在线留言",
                              "actionType": "link",
                              "link": "/contact?contactType=messageInfo&active=contact"
                            }
                          ]
                        },
                        /* {
                          "type": "nav",
                          "stacked": false,
                          "className": "sl-nav",
                          "links": [
                            {
                              "label": "首页",
                              "to": "/home"
                              // "icon": "fa fa-user"
                            },
                            {
                              "label": "关于我们",
                              "to": "/about"
                            },
                            {
                              "label": "技术与服务",
                              "to": "/service",
                            },
                            {
                              "label": "工程案例",
                              "to": "/case"
                            },
                            {
                              "label": "新闻咨询",
                              "to": "/news"
                            },
                            {
                              "label": "联系我们",
                              "to": "/contact"
                            }
                          ]
                        }, */
                        {
                          "type": "tpl",
                          "tpl": "<span class='chinese-span'>中文</span>",
                          "style": {
                            "fontSize": 16,
                            "color": "#666",
                            "fontWeight": 500
                          }
                        },
                        {
                          "type": "tpl",
                          "tpl": "/ <span class='english-span'>EN</span>",
                          "style": {
                            "fontSize": 16,
                            "color": "#999",
                            "fontWeight": 500
                          }
                        }
                      ]
                    }
                  }
                ]
              },
            ]
          // }
        // ]
      }
      return (
        <AMISRenderer schema={headerSchema} />
      )
      /* return (
        <div>
          <div className={`a-Layout-headerBar`}>
            <div className="hidden-xs p-t-sm pull-right px-2">
              <Button size="sm" className="m-r-xs" level="success" disabled>
                全部导出
              </Button>
              <Button
                size="sm"
                level="info"
                onClick={() => store.setAddPageIsOpen(true)}
              >
                新增页面
              </Button>
            </div>
          </div>
        </div>
      ); */
    }

    function renderFooter() {
      // let footerSchema = {}
      let footerSchema: any = {
        "type": "service",
        "id": "messageContainer",
        "data": {
          "isShowMsg": true
        },
        "body": [
          // 在线留言
          {
            "type": "flex",
            "className": "message-wrapper",
            "direction": "column",
            "alignItems": "start",
            "visibleOn": "this.isShowMsg",
            "items": [
              {
                "type": "flex",
                "className": "message-title",
                "items": [
                  {
                    "type": "tpl",
                    "tpl": "留言板"
                  },
                  {
                    "type": "tpl",
                    "style": {
                      "display": "inline-block",
                      "width": "16px",
                      "height": "4px",
                      "background": "rgba(255,255,255,0.9)",
                      "float": "right",
                      "marginTop": "24px",
                      "marginRight": "16px"
                    },
                    "onEvent": {
                      "click": {
                        "actions": [
                          {
                            "actionType": "setValue",
                            "componentId": "messageContainer",
                            "args": {
                              "value": {
                                "isShowMsg": false
                              }
                            }
                          }
                        ]
                      }
                    },
                  }

                ]
                
              },
              {
                "type": "tpl",
                "tpl": "碳和科技（北京）有限公司",
                "style": {
                  "fontSize": "16px",
                  "fontWeight": 600,
                  "color": "#333",
                  "marginLeft": "16px",
                  "marginTop": "10px",
                  "textAlign": "left"
                },
              },
              {
                "type": "tpl",
                "tpl": "联系人：李经理",
                "style": {
                  "display": "block",
                  "marginBottom": "6px",
                  "marginTop": "4px",
                  "color": "#414141",
                  "marginLeft": "16px",
                  "textAlign": "left"
                }
              },
              {
                "type": "tpl",
                "tpl": "联系电话: 13261287370",
                "style": {
                  "display": "block",
                  "marginBottom": "6px",
                  "color": "#414141",
                  "marginLeft": "16px",
                  "textAlign": "left"
                }
              },
              {
                "type": "form",
                "api": "post:/message/create",
                "mode": "horizontal",
                "wrapWithPanel": false,
                "className": "message-form-wrapper",
                "labelWidth": 0,
                "body": [
                  {
                    "type": "textarea",
                    "name": "content",
                    "placeholder": "内容",
                    "clearable": true,
                    "minRows": 4,
                    "style": {
                      "width": 240,
                      "marginBottom": "10px",
                    },
                    // "required": true
                  },
                  {
                    "type": "input-text",
                    "className": "input-comment",
                    "name": "username",
                    "placeholder": "姓名",
                    "clearable": true,
                    "style": {
                      "width": 240,
                      "height": 40,
                      "marginBottom": "4px",
                    },
                    // "required": true
                  },
                  {
                    "type": "input-text",
                    "name": "phone",
                    "placeholder": "手机号",
                    "clearable": true,
                    "style": {
                      "width": 240,
                      "height": 40,
                      "marginBottom": "4px",
                    },
                    // "required": true
                  },
                  {
                    "type": "input-text",
                    "name": "companyName",
                    "placeholder": "公司名",
                    "clearable": true,
                    "style": {
                      "width": 240,
                      "height": 40,
                      "marginBottom": "4px",
                    }
                  },
                  {
                    "type": "input-text",
                    "name": "email",
                    "placeholder": "邮箱",
                    "clearable": true,
                    "style": {
                      "width": 240,
                      "height": 40,
                      "marginBottom": "4px",
                    }
                  },
                  {
                    "type": "submit",
                    "label": "提交",
                    "style": {
                      "background": "#005BAC",
                      "color": "#FFFFFF",
                      "width": 216,
                      "marginBottom": "24px",
                      "marginLeft": "12px"
                    }
                  }
                ]
              }
            ]
          },
          // 缩小留言板
          {
            "type": "flex",
            "className": "message-title-small",
            "visibleOn": "!this.isShowMsg",
            "justify": "start",
            "style": {
              "alignItems": "center",
              "placeContent": "left"
            },
            "items": [
              {
                "type": "tpl",
                "tpl": "留言板",
                "style": {
                  "fontWeight": 600
                }
              },
              {
                "type": "tpl",
                "style": {
                  "display": "block",
                  "width": "16px",
                  "height": "10px",
                  "border": "2px solid #FFFFFF",
                  "float": "right",
                  "position": "absolute",
                  "right": "16px",
                  "cursor": "pointer"
                },
                "onEvent": {
                  "click": {
                    "actions": [
                      {
                        "actionType": "setValue",
                        "componentId": "messageContainer",
                        "args": {
                          "value": {
                            "isShowMsg": true
                          }
                        }
                      }
                    ]
                  }
                },
              }
            ]
          },
          // 联系我们
          {
            "type": "grid",
            "style": {
              "padding": "40px 80px",
              "background": "#2C2F33",
              "color": "#fff",
              "borderBottom": "1px solid #494949"
            },
            "columns": [{
              "type": "flex",
              "direction": "column",
              "alignItems": "start",
              "items": [{
                "type": "tpl",
                "tpl": "联系我们",
                "style": {
                  "fontSize": "24px"
                }
              },
              {
                "type": "tpl",
                "style": {
                  "margin": "6px 0"
                },
                "tpl": "碳和科技（北京）有限公司"
              },
              {
                "type": "flex",
                "items": [{
                  "type": "image",
                  "width": "28px",
                  "height": "28px",
                  "src": "../assets/contact/phone.png",
                  "innerClassName": "no-border",
                  "style": {
                    "marginRight": "10px"
                  }
                }, {
                  "type": "tpl",
                  "tpl": "李经理 13261287370"
                }]
              },
              {
                "type": "flex",
                "items": [{
                  "type": "image",
                  "width": "28px",
                  "height": "28px",
                  "src": "../assets/contact/email.png",
                  "innerClassName": "no-border",
                  "style": {
                    "marginRight": "10px"
                  }
                }, {
                  "type": "tpl",
                  "tpl": "tanhekeji@163.com"
                }]
              },
              {
                "type": "flex",
                "items": [{
                  "type": "image",
                  "width": "28px",
                  "height": "28px",
                  "src": "../assets/contact/address.png",
                  "innerClassName": "no-border",
                  "style": {
                    "marginRight": "10px"
                  }
                }, {
                  "type": "tpl",
                  "tpl": "北京市北京经济技术开发区（通州）景盛南四街甲13号19幢2层"
                }]
              }
            ]}, {
              "type": "flex",
              "direction": "column",
              "alignItems": "start",
              "className": "sl-bottom-nav",
              "style": {
                "paddingLeft": "38px",
                "borderLeft": "1px solid #494949"
              },
              "items": [{
                "type": "tpl",
                "tpl": "快捷导航",
                "style": {
                  "fontSize": "24px",
                  "marginBottom": "36px"
                }
              },
              {
                "type": "flex",
                "items": [{
                  "type": "button",
                  "level": "link",
                  "label": "首页",
                  "actionType": "link",
                  "link": "home"
                },,
                {
                  "type": "button",
                  "level": "link",
                  "label": "工程案例",
                  "actionType": "link",
                  "link": "case"
                },
                {
                  "type": "button",
                  "level": "link",
                  "label": "联系我们",
                  "actionType": "link",
                  "link": "contact"
                }]
              },
              {
                "type": "flex",
                "style":{
                  "margin": "16px 0"
                },
                "items": [{
                  "type": "button",
                  "level": "link",
                  "label": "关于我们",
                  "actionType": "link",
                  "link": "about"
                },,
                {
                  "type": "button",
                  "level": "link",
                  "label": "新闻咨询",
                  "actionType": "link",
                  "link": "news"
                }]
              },
              {
                "type": "flex",
                "items": [{
                  "type": "button",
                  "level": "link",
                  "label": "技术与服务",
                  "actionType": "link",
                  "link": "service"
                },
                {
                  "type": "button",
                  "level": "link",
                  "label": "人才招聘",
                  "actionType": "link",
                  "link": "contact"
                }]
              }
            ]
            }]
          },
          // 备案
          {
            "type": "wrapper",
            "style": {
              "fontSize": "14px",
              "height": "54px",
              "background": "#2C2F33",
              "textAlign": "center"
            },
            "body": {
              "type": "tpl",
              "style": {
                "color": "#A0A0A0",
              },
              "tpl": "Copyright © 2023 www.thkjbj.com 京ICP备2023003067号 碳和科技（北京）有限公司"
            }
          }
        ]
      }
      return (
        <AMISRenderer schema={footerSchema} />
      )
    }

    function renderAside() {
      const navigations = store.pages.map(item => ({
        label: item.label,
        path: `/${item.path}`,
        icon: item.icon
      }));
      const paths = navigations.map(item => item.path);

      return (
        <AsideNav
          key={store.asideFolded ? 'folded-aside' : 'aside'}
          navigations={[
            {
              label: '导航',
              children: navigations
            }
          ]}
          renderLink={({link, toggleExpand, classnames: cx, depth}: any) => {
            if (link.hidden) {
              return null;
            }

            let children = [];

            if (link.children) {
              children.push(
                <span
                  key="expand-toggle"
                  className={cx('AsideNav-itemArrow')}
                  onClick={e => toggleExpand(link, e)}
                ></span>
              );
            }

            link.badge &&
              children.push(
                <b
                  key="badge"
                  className={cx(
                    `AsideNav-itemBadge`,
                    link.badgeClassName || 'bg-info'
                  )}
                >
                  {link.badge}
                </b>
              );

            if (link.icon) {
              children.push(
                <i key="icon" className={cx(`AsideNav-itemIcon`, link.icon)} />
              );
            } else if (store.asideFolded && depth === 1) {
              children.push(
                <i
                  key="icon"
                  className={cx(
                    `AsideNav-itemIcon`,
                    link.children ? 'fa fa-folder' : 'fa fa-info'
                  )}
                />
              );
            }

            link.active ||
              children.push(
                <i
                  key="delete"
                  data-tooltip="删除"
                  data-position="bottom"
                  className={'navbtn fa fa-times'}
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    confirm('确认要删除').then(confirmed => {
                      confirmed && store.removePageAt(paths.indexOf(link.path));
                    });
                  }}
                />
              );

            children.push(
              <i
                key="edit"
                data-tooltip="编辑"
                data-position="bottom"
                className={'navbtn fa fa-pencil'}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  history.push(`/edit/${paths.indexOf(link.path)}`);
                }}
              />
            );

            children.push(
              <span key="label" className={cx('AsideNav-itemLabel')}>
                {link.label}
              </span>
            );

            return link.path ? (
              link.active ? (
                <a>{children}</a>
              ) : (
                <Link to={link.path[0] === '/' ? link.path : `${link.path}`}>
                  {children}
                </Link>
              )
            ) : (
              <a
                onClick={
                  link.onClick
                    ? link.onClick
                    : link.children
                    ? () => toggleExpand(link)
                    : undefined
                }
              >
                {children}
              </a>
            );
          }}
          isActive={(link: any) =>
            isActive(
              link.path && link.path[0] === '/' ? link.path : `${link.path}`,
              location
            )
          }
        />
      );
    }

    function handleConfirm(value: {label: string; icon: string; path: string}) {
      store.addPage({
        ...value,
        schema: {
          type: 'page',
          title: value.label,
          body: '这是你刚刚新增的页面。'
        }
      });
      store.setAddPageIsOpen(false);
    }

    return (
      <Layout
        // aside={renderAside()}
        header={renderHeader()}
        folded={store.asideFolded}
        offScreen={store.offScreen}
        footer={renderFooter()}
      >
        <Switch>
          {store.pages.map(item => (
            <Route
              key={item.id}
              path={`/${item.path}`}
              render={() => <AMISRenderer schema={item.schema} />}
            />
          ))}
          <Route component={NotFound} />
        </Switch>
        <AddPageModal
          show={store.addPageIsOpen}
          onClose={() => store.setAddPageIsOpen(false)}
          onConfirm={handleConfirm}
          pages={store.pages.concat()}
        />
      </Layout>
    );
  })
);
