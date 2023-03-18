import {types, getEnv, applySnapshot, getSnapshot} from 'mobx-state-tree';
import {PageStore} from './Page';
import {when, reaction} from 'mobx';
import homeJson from '../configs/home/home';
import aboutJson from '../configs/about/about';
import serviceJson from '../configs/service/service';
import caseJson from '../configs/case/case';
import newsJson from '../configs/news/news';
import contactJson from '../configs/contact/contact';
import adminJson from '../configs/admin/admin';
let pagIndex = 1;

export const MainStore = types
  .model('MainStore', {
    pages: types.optional(types.array(PageStore), [
      /* {
        id: `${pagIndex}`,
        path: 'hello-world',
        label: 'Hello world',
        icon: 'fa fa-file',
        schema: {
          type: 'page',
          title: 'Hello world',
          body: '初始页面'
        }
      }, */
      {
        id: `2`,
        path: 'home',
        label: '首页',
        // icon: 'iconfont menu10',
        schema: homeJson
      },
      {
        id: `3`,
        path: 'about',
        label: '关于我们',
        schema: aboutJson
      },
      {
        id: `4`,
        path: 'service',
        label: '技术与服务',
        schema: serviceJson
      },
      {
        id: `5`,
        path: 'case',
        label: '工程案例',
        schema: caseJson
      },
      {
        id: `6`,
        path: 'news',
        label: '新闻咨询',
        schema: newsJson
      },
      {
        id: `7`,
        path: 'contact',
        label: '联系我们',
        schema: contactJson
      },
      {
        id: `8`,
        path: 'admin',
        label: '后台管理',
        schema: adminJson
      },
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
          // 每次重新生成实例，无需从 localStorage 中获取
          const storeData = window.localStorage.getItem('store');
          console.log('----------storeData-----------', storeData)
          if (storeData) applySnapshot(self, JSON.parse(storeData));

          reaction(
            () => getSnapshot(self),
            json => {
              // TODO 每次重新生成实例，无需从 localStorage 中获取, 暂不保存 store 信息
              window.localStorage.setItem('store', JSON.stringify(json));
            }
          );
        }
      }
    };
  });

export type IMainStore = typeof MainStore.Type;
