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
                          "margin-right": 13
                        }
                      },
                      {
                        "type": "tpl",
                        "tpl": "碳和科技",
                        "style": {
                          "font-size": 26,
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
                            "to": "/docs/api"
                          },
                          {
                            "label": "技术与服务",
                            "to": "/docs/renderers"
                          },
                          {
                            "label": "工程案例",
                            "to": "/docs/renderers"
                          },
                          {
                            "label": "新闻咨询",
                            "to": "/docs/renderers"
                          },
                          {
                            "label": "联系我们",
                            "to": "/docs/renderers"
                          }
                        ]
                      },
                      {
                        "type": "tpl",
                        "tpl": "<span class='chinese-span'>中文</span>",
                        "style": {
                          "font-size": 16,
                          "color": "#666",
                          "font-weight": 500
                        }
                      },
                      {
                        "type": "tpl",
                        "tpl": "/ <span class='english-span'>EN</span>",
                        "style": {
                          "font-size": 16,
                          "color": "#999",
                          "font-weight": 500
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
      /* let headerSchema = {
        "type": "nav",
        "stacked": false,
        "links": [
          {
            "label": "首页",
            "to": "/home",
            // "icon": "fa fa-user"
          },
          {
            "label": "关于我们",
            "to": "/docs/api"
          },
          {
            "label": "技术与服务",
            "to": "/docs/renderers"
          },
          {
            "label": "工程案例",
            "to": "/docs/renderers"
          },
          {
            "label": "新闻咨询",
            "to": "/docs/renderers"
          },
          {
            "label": "联系我们",
            "to": "/docs/renderers"
          }
        ]
      } */
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
