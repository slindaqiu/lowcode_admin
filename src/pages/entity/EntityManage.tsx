import * as React from 'react';
import axios from 'axios';
import copy from 'copy-to-clipboard';

import {render as renderAmis} from 'amis';
import {ToastComponent, AlertComponent, alert, confirm, toast} from 'amis-ui';
let entityJson = {
  "type": "page",
  "body": [
      {
        "label": "新增",
        "type": "button",
        "actionType": "dialog",
        "level": "primary",
        "className": "m-b-sm",
        "dialog": {
          "title": "新增数据源",
          "body": {
            "type": "form",
            "api": {
              "method": "post",
              "url": "/acs/bcp/api/datasource/save"
            },
            "body": [
              {
                "type": "input-text",
                "name": "datasourceName",
                "label": "数据源名称"
              },
              {
                "type": "input-text",
                "name": "datasourceCode",
                "label": "数据源编码"
              },
              {
                "type": "select",
                "name": "datasourceType",
                "label": "数据源类型",
                "options": [
                  {
                    "label": "MYSQL",
                    "value": "MYSQL"
                  },
                  {
                    "label": "ORACLE",
                    "value": "ORACLE"
                  }
                ]
              },
              {
                "type": "input-text",
                "name": "datasourceUsername",
                "label": "数据源用户名"
              },
              {
                "type": "input-text",
                "name": "datasourceJdbcUrl",
                "label": "JdbcUrl"
              },
              {
                "type": "input-text",
                "name": "datasourceJdbcDriverClass",
                "label": "JdbcDirverClass"
              },
              {
                "type": "input-text",
                "name": "datasourceResultMaxRows",
                "label": "最大返回行"
              },
              {
                "type": "input-password",
                "name": "datasourcePassword",
                "label": "数据源密码"
              }
            ]
          }
        }
      },
      {
        "type": "crud",
        "api": {
            "method": "get",
            "url": "http://39.103.173.64:31347/acs/bcp/api/datasource/allList",
            "adaptor": "return {status: payload.STATUS === '0000' ? 0 : payload.STATUS,msg: payload.MSG,data: payload.RSP && payload.RSP.DATA ? {items: payload.RSP.DATA,count:payload.RSP.DATA.length}: {count:0,items:[]}}",
            "replaceData": true
        },
        "headerToolbar": [
          "bulkActions"
        ],
        "bulkActions": [
          {
            "label": "批量删除",
            "actionType": "ajax",
            "api": "",
            "confirmText": "您确定要批量删除吗?"
          }
        ],
        "columns": [
            {
                "name": "datasourceId",
                "label": "ID编号"
            }, 
            {
                "name": "datasourceName",
                "label": "数据源名称"
            }, 
            {
                "name": "datasourceCode",
                "label": "数据源编码"
            }, 
            {
                "name": "datasourceType",
                "label": "数据源类型"
            }, 
            {
                "name": "datasourceUsername",
                "label": "数据源用户名"
            }, 
            {
                "name": "datasourcePassword",
                "label": "数据源密码"
            }, 
            {
                "type": "operation",
                "label": "操作",
                "buttons": [
                    {
                        "label": "详情",
                        "type": "button",
                        "level": "link",
                        "actionType": "dialog",
                        "dialog": {
                            "title": "查看详情",
                            "body": {
                                "type": "form",
                                "body": [
                                    {
                                        "type": "static",
                                        "name": "datasourceName",
                                        "label": "数据源名称"
                                    },
                                    {
                                        "type": "static",
                                        "name": "datasourceCode",
                                        "label": "数据源编码"
                                    },
                                    {
                                        "type": "static",
                                        "name": "datasourceType",
                                        "label": "数据源类型"
                                    },
                                    {
                                        "type": "static",
                                        "name": "datasourceUsername",
                                        "label": "数据源用户名"
                                    },
                                    {
                                        "type": "static",
                                        "name": "datasourcePassword",
                                        "label": "数据源密码"
                                    }
                                ]
                            }
                        }
                    },
                    {
                      "label": "修改",
                      "type": "button",
                      "level": "link",
                      "actionType": "dialog",
                      "dialog": {
                        "title": "修改数据源",
                        "body": {
                          "type": "form",
                          "api": {
                            "method": "post",
                            "url": "http://39.103.173.64:31347/acs/bcp/api/datasource/save",
                            "adaptor": "return {status: payload.STATUS === '0000' ? 0 : 422,msg: payload.MSG,errors:'修改数据源失败！'}"
                          },
                          "body": [
                            {
                              "type": "input-text",
                              "name": "datasourceId",
                              "label": "数据源Id"
                            },
                            {
                              "type": "input-text",
                              "name": "datasourceName",
                              "label": "数据源名称"
                            },
                            {
                              "type": "input-text",
                              "name": "datasourceCode",
                              "label": "数据源编码"
                            },
                            {
                              "type": "select",
                              "name": "datasourceType",
                              "label": "数据源类型",
                              "options": [
                                {
                                  "label": "MYSQL",
                                  "value": "MYSQL"
                                },
                                {
                                  "label": "ORACLE",
                                  "value": "ORACLE"
                                }
                              ]
                            },
                            {
                              "type": "input-text",
                              "name": "datasourceUsername",
                              "label": "数据源用户名"
                            },
                            {
                              "type": "input-text",
                              "name": "datasourceJdbcUrl",
                              "label": "JdbcUrl"
                            },
                            {
                              "type": "input-text",
                              "name": "datasourceJdbcDriverClass",
                              "label": "JdbcDirverClass"
                            },
                            {
                              "type": "input-text",
                              "name": "datasourceResultMaxRows",
                              "label": "最大返回行"
                            },
                            {
                              "type": "input-text",
                              "name": "datasourcePassword",
                              "label": "数据源密码"
                            }
                          ]
                        }
                      }
                    },
                    {
                        "label": "删除",
                        "type": "button",
                        "actionType": "ajax",
                        "level": "danger",
                        "confirmText": "您确定要删除吗？",
                        "api": {
                          "method": "delete",
                          "url": "http://39.103.173.64:31347/acs/bcp/api/datasource/deleteById?id=$datasourceId"
                        }
                    }
                ]
            }
        ]
      }
  ]
}

class MyComponent extends React.Component<any, any> {
  render() {
    let amisScoped;
    let theme = 'cxd';
    let locale = 'zh-CN';

    // 请勿使用 React.StrictMode，目前还不支持
    return (
      <div>
        <p>实例管理</p>
        <ToastComponent
          theme={theme}
          key="toast"
          position={'top-right'}
          locale={locale}
        />
        <AlertComponent theme={theme} key="alert" locale={locale} />
        {renderAmis(
          entityJson,
          {
            // props...
            // locale: 'en-US' // 请参考「多语言」的文档
            // scopeRef: (ref: any) => (amisScoped = ref)  // 功能和前面 SDK 的 amisScoped 一样
          },
          {
            // 下面三个接口必须实现
            fetcher: ({
              url, // 接口地址
              method, // 请求方法 get、post、put、delete
              data, // 请求数据
              responseType,
              config, // 其他配置
              headers // 请求头
            }: any) => {
              debugger
              config = config || {};
              config.withCredentials = true;
              responseType && (config.responseType = responseType);

              if (config.cancelExecutor) {
                config.cancelToken = new (axios as any).CancelToken(
                  config.cancelExecutor
                );
              }

              config.headers = headers || {};

              if (method !== 'post' && method !== 'put' && method !== 'patch') {
                if (data) {
                  config.params = data;
                }

                return (axios as any)[method](url, config);
              } else if (data && data instanceof FormData) {
                config.headers = config.headers || {};
                config.headers['Content-Type'] = 'multipart/form-data';
              } else if (
                data &&
                typeof data !== 'string' &&
                !(data instanceof Blob) &&
                !(data instanceof ArrayBuffer)
              ) {
                data = JSON.stringify(data);
                config.headers = config.headers || {};
                config.headers['Content-Type'] = 'application/json';
              }

              return (axios as any)[method](url, data, config);
            },
            isCancel: (value: any) => (axios as any).isCancel(value),
            copy: content => {
              copy(content);
              toast.success('内容已复制到粘贴板');
            },
            theme

            // 后面这些接口可以不用实现

            // 默认是地址跳转
            // jumpTo: (
            //   location: string /*目标地址*/,
            //   action: any /* action对象*/
            // ) => {
            //   // 用来实现页面跳转, actionType:link、url 都会进来。
            // },

            // updateLocation: (
            //   location: string /*目标地址*/,
            //   replace: boolean /*是replace，还是push？*/
            // ) => {
            //   // 地址替换，跟 jumpTo 类似
            // },

            // isCurrentUrl: (
            //   url: string /*url地址*/,
            // ) => {
            //   // 用来判断是否目标地址当前地址
            // },

            // notify: (
            //   type: 'error' | 'success' /**/,
            //   msg: string /*提示内容*/
            // ) => {
            //   toast[type]
            //     ? toast[type](msg, type === 'error' ? '系统错误' : '系统消息')
            //     : console.warn('[Notify]', type, msg);
            // },
            // alert,
            // confirm,
            // tracker: (eventTracke) => {}
          }
        )}
      </div>
    );
  }
}

export default () => (
  <MyComponent />
);