import {types, getEnv, applySnapshot, getSnapshot} from 'mobx-state-tree';
import {PageStore} from './Page';
import {when, reaction} from 'mobx';
let pagIndex = 1;
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
export const MainStore = types
  .model('MainStore', {
    pages: types.optional(types.array(PageStore), [
      {
        id: `${pagIndex}`,
        path: 'hello-world',
        label: '首页管理',
        icon: 'fa fa-file',
        schema: {
          type: 'page',
          title: 'Hello world',
          body: '首页管理'
        }
      },
      {
        id: `2`,
        path: 'entityManage',
        label: '实例管理',
        icon: 'fa fa-file',
        schema: entityJson
      }
    ]),
    theme: 'cxd',
    asideFixed: true,
    asideFolded: false,
    offScreen: false,
    addPageIsOpen: false,
    preview: false,
    isMobile: false,
    schema: types.frozen()
  })
  .views(self => ({
    get fetcher() {
      return getEnv(self).fetcher;
    },
    get notify() {
      return getEnv(self).notify;
    },
    get alert() {
      return getEnv(self).alert;
    },
    get copy() {
      return getEnv(self).copy;
    }
  }))
  .actions(self => {
    function toggleAsideFolded() {
      self.asideFolded = !self.asideFolded;
    }

    function toggleAsideFixed() {
      self.asideFixed = !self.asideFixed;
    }

    function toggleOffScreen() {
      self.offScreen = !self.offScreen;
    }

    function setAddPageIsOpen(isOpened: boolean) {
      self.addPageIsOpen = isOpened;
    }

    function addPage(data: {
      label: string;
      path: string;
      icon?: string;
      schema?: any;
    }) {
      self.pages.push(
        PageStore.create({
          ...data,
          id: `${++pagIndex}`
        })
      );
    }

    function removePageAt(index: number) {
      self.pages.splice(index, 1);
    }

    function updatePageSchemaAt(index: number) {
      self.pages[index].updateSchema(self.schema);
    }

    function updateSchema(value: any) {
      self.schema = value;
    }

    function setPreview(value: boolean) {
      self.preview = value;
    }

    function setIsMobile(value: boolean) {
      self.isMobile = value;
    }

    return {
      toggleAsideFolded,
      toggleAsideFixed,
      toggleOffScreen,
      setAddPageIsOpen,
      addPage,
      removePageAt,
      updatePageSchemaAt,
      updateSchema,
      setPreview,
      setIsMobile,
      afterCreate() {
        // persist store
        if (typeof window !== 'undefined' && window.localStorage) {
          const storeData = window.localStorage.getItem('store');
          if (storeData) applySnapshot(self, JSON.parse(storeData));

          reaction(
            () => getSnapshot(self),
            json => {
              window.localStorage.setItem('store', JSON.stringify(json));
            }
          );
        }
      }
    };
  });

export type IMainStore = typeof MainStore.Type;
