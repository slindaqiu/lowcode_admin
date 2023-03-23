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
                        "tpl": "碳和科技",
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
                    "type": "flex",
                    "style": {
                      "height": 72,
                      "float": "right"
                    },
                    "items": [
                      {
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
                            "to": "/service"
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
                      },
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
        "body": [
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
              "style": {
                "borderRight": "1px solid #494949"
              },
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
                "marginLeft": "34px"
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
