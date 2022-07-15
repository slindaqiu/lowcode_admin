;/*!renderer/MyRenderer.tsx*/
amis.define("de955de",(function(e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d=e("849c8c1"),o=e("167c905"),u=d.__importDefault(e("cc4bbf0")),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d.__extends(t,e),t.prototype.render=function(){var e=this.props.target;return u.default.createElement("p",null,"Hello ",e,"! @amis-editor")},t.defaultProps={target:"world"},t=d.__decorate([(0,o.Renderer)({test:/\bmy-renderer$/,name:"my-renderer"})],t)}(u.default.Component);t.default=a}));
;/*!index.tsx*/
amis.define("8d0e5e4",(function(e,t,a,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bootstrap=void 0;var o=e("849c8c1"),r=o.__importDefault(e("cc4bbf0")),u=o.__importDefault(e("3c5b02d")),f=o.__importDefault(e("4c5556c"));t.bootstrap=function(e){u.default.render(r.default.createElement(f.default,null),e)}}));
;/*!loadMonacoEditor.ts*/
amis.define("800eaff",(function(s,a,e,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.__mod__async__load=void 0,a.__mod__async__load=function(s){amis.require.loadJs("/amis-editor-demo/n/monaco-editor/min/vs/loader.js").onload=function(){return function(s,a){var e={"vs/nls":{availableLanguages:{"*":"zh-cn"}},paths:{vs:"/amis-editor-demo/n/monaco-editor/min/vs/editor/editor.main.js".replace(/\/vs\/.*$/,""),"vs/base/worker/workerMain":"/amis-editor-demo/n/monaco-editor/min/vs/base/worker/workerMain.js","vs/basic-languages/apex/apex":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/apex/apex.js","vs/basic-languages/azcli/azcli":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/azcli/azcli.js","vs/basic-languages/clojure/clojure":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/clojure/clojure.js","vs/basic-languages/bat/bat":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/bat/bat.js","vs/basic-languages/coffee/coffee":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/coffee/coffee.js","vs/basic-languages/cpp/cpp":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/cpp/cpp.js","vs/basic-languages/csharp/csharp":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/csharp/csharp.js","vs/basic-languages/css/css":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/css/css.js","vs/basic-languages/dockerfile/dockerfile":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/dockerfile/dockerfile.js","vs/basic-languages/fsharp/fsharp":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/fsharp/fsharp.js","vs/basic-languages/go/go":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/go/go.js","vs/basic-languages/handlebars/handlebars":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/handlebars/handlebars.js","vs/basic-languages/html/html":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/html/html.js","vs/basic-languages/ini/ini":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/ini/ini.js","vs/basic-languages/java/java":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/java/java.js","vs/basic-languages/javascript/javascript":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/javascript/javascript.js","vs/basic-languages/less/less":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/less/less.js","vs/basic-languages/lua/lua":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/lua/lua.js","vs/basic-languages/markdown/markdown":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/markdown/markdown.js","vs/basic-languages/msdax/msdax":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/msdax/msdax.js","vs/basic-languages/objective-c/objective-c":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/objective-c/objective-c.js","vs/basic-languages/php/php":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/php/php.js","vs/basic-languages/postiats/postiats":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/postiats/postiats.js","vs/basic-languages/powershell/powershell":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/powershell/powershell.js","vs/basic-languages/pug/pug":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/pug/pug.js","vs/basic-languages/python/python":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/python/python.js","vs/basic-languages/r/r":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/r/r.js","vs/basic-languages/razor/razor":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/razor/razor.js","vs/basic-languages/redis/redis":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/redis/redis.js","vs/basic-languages/redshift/redshift":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/redshift/redshift.js","vs/basic-languages/ruby/ruby":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/ruby/ruby.js","vs/basic-languages/rust/rust":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/rust/rust.js","vs/basic-languages/sb/sb":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/sb/sb.js","vs/basic-languages/scheme/scheme":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/scheme/scheme.js","vs/basic-languages/scss/scss":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/scss/scss.js","vs/basic-languages/shell/shell":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/shell/shell.js","vs/basic-languages/solidity/solidity":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/solidity/solidity.js","vs/basic-languages/sql/sql":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/sql/sql.js","vs/basic-languages/st/st":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/st/st.js","vs/basic-languages/swift/swift":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/swift/swift.js","vs/basic-languages/typescript/typescript":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/typescript/typescript.js","vs/basic-languages/vb/vb":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/vb/vb.js","vs/basic-languages/xml/xml":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/xml/xml.js","vs/basic-languages/yaml/yaml":"/amis-editor-demo/n/monaco-editor/min/vs/basic-languages/yaml/yaml.js","vs/editor/editor.main":"/amis-editor-demo/n/monaco-editor/min/vs/editor/editor.main.js","vs/editor/editor.main.css":"/amis-editor-demo/n/monaco-editor/min/vs/editor/editor.main.css","vs/editor/editor.main.nls":"/amis-editor-demo/n/monaco-editor/min/vs/editor/editor.main.nls.js","vs/editor/editor.main.nls.zh-cn":"/amis-editor-demo/n/monaco-editor/min/vs/editor/editor.main.nls.zh-cn.js","vs/language/typescript/tsMode":"/amis-editor-demo/n/monaco-editor/min/vs/language/typescript/tsMode.js","vs/language/typescript/tsWorker":"/amis-editor-demo/n/monaco-editor/min/vs/language/typescript/tsWorker.js","vs/language/json/jsonMode":"/amis-editor-demo/n/monaco-editor/min/vs/language/json/jsonMode.js","vs/language/json/jsonWorker":"/amis-editor-demo/n/monaco-editor/min/vs/language/json/jsonWorker.js","vs/language/html/htmlMode":"/amis-editor-demo/n/monaco-editor/min/vs/language/html/htmlMode.js","vs/language/html/htmlWorker":"/amis-editor-demo/n/monaco-editor/min/vs/language/html/htmlWorker.js","vs/language/css/cssMode":"/amis-editor-demo/n/monaco-editor/min/vs/language/css/cssMode.js","vs/language/css/cssWorker":"/amis-editor-demo/n/monaco-editor/min/vs/language/css/cssWorker.js"}};Object.keys(e.paths).forEach((function(s){e.paths[s]=e.paths[s].replace(/\.js$/,"")})),s.config(e),/^(https?:)?\/\//.test(e.paths.vs)?window.MonacoEnvironment={getWorkerUrl:function(){return"data:text/javascript;charset=utf-8,".concat(encodeURIComponent("\n              self.MonacoEnvironment = {\n                  baseUrl: '".concat(e.paths.vs,"',\n                  paths: ").concat(JSON.stringify(e.paths),"\n              };\n              importScripts('").concat("/amis-editor-demo/n/monaco-editor/min/vs/base/worker/workerMain.js","');")))}}:delete window.MonacoEnvironment;s(["vs/editor/editor.main"],(function(s){a(s)}))}(window.require,s)}}}));
;/*!route/NotFound.tsx*/
amis.define("0d8fb78",(function(e,t,a,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=e("849c8c1").__importDefault(e("cc4bbf0")),r=e("f7998ad"),c=e("167c905");t.default=function(){return l.default.createElement(c.NotFound,{links:l.default.createElement(r.Link,{to:"/",className:"list-group-item"},l.default.createElement("i",{className:"fa fa-chevron-right text-muted"}),l.default.createElement("i",{className:"fa fa-fw fa-mail-forward m-r-xs"}),"去首页"),footerText:""})}}));
;/*!component/AMISRenderer.tsx*/
amis.define("bf6b35d",(function(e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.schema2component=void 0;var a=e("849c8c1"),o=a.__importDefault(e("cc4bbf0")),s=e("6af3be1"),i=e("fc22630"),p=e("2426036"),c=a.__importDefault(e("9c65a3c")),u=e("167c905");function f(e,t,r){void 0===r&&(r="page");var n=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return a.__extends(s,n),s.prototype.getEnv=function(){var e=this;if(this.env)return this.env;var t=this.props,n=t.store,o=(0,p.getEnv)(n),s=function(t,r){if(/^\/api\//.test(t))return t;t=t||"";var n=e.props.history.location,a=c.default.parse(n.search.substring(1));(t=(0,u.filter)(t.replace(/\$\$/g,c.default.stringify(a)),a))&&"#"===t[0]?t=n.pathname+n.search+t:t&&"?"===t[0]&&(t=n.pathname+t);var o=t.indexOf("?"),s=t.indexOf("#"),i=~o?t.substring(0,o):~s?t.substring(0,s):t,p=~o?t.substring(o,~s?s:void 0):"",f=~s?t.substring(s):r?n.hash:"";if(i){if("/"!=i[0]&&!/^\w+\:/.test(i)){var h=n.pathname.split("/");h.pop();for(var d=void 0;d=/^\.\.?\//.exec(i);)"../"===d[0]&&h.pop(),i=i.substring(d[0].length);i=h.concat(i).join("/")}}else i=n.pathname;return i+p+f},i=function(t){var r=e.props.history,n=s(t),a=r.location,o=n,i="",p=n.indexOf("?");if(~p&&(o=n.substring(0,p),i=n.substring(p)),i){if(o!==a.pathname||!a.search)return!1;var u=c.default.parse(a.search.substring(1)),f=c.default.parse(i.substring(1));return Object.keys(f).every((function(e){return f[e]===u[e]}))}return o===a.pathname};return this.env=a.__assign(a.__assign({},o),{session:r,isCurrentUrl:i,updateLocation:t.updateLocation||function(t,r){var n=e.props.history;return"goBack"===t?n.goBack():/^https?\:\/\//.test(t)?window.location.href=t:void n[r?"replace":"push"](s(t,r))},jumpTo:t.jumpTo||function(t,r){var n=e.props.history;if("goBack"===t)return n.goBack();t=s(t),i(t)||(r&&"url"===r.actionType?!1===r.blank?window.location.href=t:window.open(t,"_blank"):r&&r.blank?window.open(t,"_blank"):/^https?:\/\//.test(t)?window.location.href=t:n.push(t))},affixOffsetTop:t.embedMode?0:50,theme:n.theme})},s.prototype.render=function(){var r,n=this.props,s=(n.router,n.match),i=n.location,p=(n.history,n.store),c=n.schema,f=(n.jumpTo,n.updateLocation,n.embedMode,a.__rest(n,["router","match","location","history","store","schema","jumpTo","updateLocation","embedMode"])),h=c||e;return h.type||(h.type="page"),r=(0,u.render)(h,a.__assign(a.__assign({location:i,data:u.utils.createObject(a.__assign(a.__assign({},s.params),{amisStore:p,pathname:i.pathname,params:s.params}))},f),{fetcher:p.fetcher,notify:p.notify,alert:p.alert,copy:p.copy,propsTransform:t}),this.getEnv()),o.default.createElement(o.default.Fragment,null,r)},s.displayName="SchemaRenderer",s=a.__decorate([(0,i.inject)("store"),i.observer],s)}(o.default.Component);return(0,s.withRouter)(n)}t.schema2component=f,t.default=f({type:"page",body:"It works"})}));
;/*!component/AddPageModal.tsx*/
amis.define("3b1184e",(function(e,t,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("849c8c1"),r=e("bf6b35d");t.default=(0,r.schema2component)({type:"dialog",title:"新增页面",body:{type:"form",controls:[{type:"text",label:"名称",name:"label",validations:{maxLength:20},required:!0},{type:"text",label:"路径",name:"path",validations:{isUrlPath:!0},required:!0,validate:function(e,t){return!!e.pages.filter((function(e){return e.path===t})).length?"当前路径已被占用，请换一个":""}},{type:"icon-picker",label:"图标",name:"icon"}]}},(function(e){var t=e.onConfirm,n=e.pages,a=i.__rest(e,["onConfirm","pages"]);return i.__assign(i.__assign({},a),{data:{pages:n},onConfirm:function(e){return t&&t(e[0])}})}))}));
;/*!route/Preview.tsx*/
amis.define("816c31c",(function(e,t,a,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=e("849c8c1"),c=l.__importDefault(e("cc4bbf0")),i=e("fc22630"),d=e("167c905"),o=e("6af3be1"),s=e("f7998ad"),r=l.__importDefault(e("0d8fb78")),u=l.__importDefault(e("bf6b35d")),f=l.__importDefault(e("3b1184e"));t.default=(0,i.inject)("store")((0,i.observer)((function(e){var t,a,n=e.store,i=e.location,m=e.history;return c.default.createElement(d.Layout,{aside:(t=n.pages.map((function(e){return{label:e.label,path:"/".concat(e.path),icon:e.icon}})),a=t.map((function(e){return e.path})),c.default.createElement(d.AsideNav,{key:n.asideFolded?"folded-aside":"aside",navigations:[{label:"导航",children:t}],renderLink:function(e){var t=e.link,l=e.toggleExpand,i=e.classnames,o=e.depth;if(t.hidden)return null;var r=[];return t.children&&r.push(c.default.createElement("span",{key:"expand-toggle",className:i("AsideNav-itemArrow"),onClick:function(e){return l(t,e)}})),t.badge&&r.push(c.default.createElement("b",{key:"badge",className:i("AsideNav-itemBadge",t.badgeClassName||"bg-info")},t.badge)),t.icon?r.push(c.default.createElement("i",{key:"icon",className:i("AsideNav-itemIcon",t.icon)})):n.asideFolded&&1===o&&r.push(c.default.createElement("i",{key:"icon",className:i("AsideNav-itemIcon",t.children?"fa fa-folder":"fa fa-info")})),t.active||r.push(c.default.createElement("i",{key:"delete","data-tooltip":"删除","data-position":"bottom",className:"navbtn fa fa-times",onClick:function(e){e.preventDefault(),(0,d.confirm)("确认要删除").then((function(e){e&&n.removePageAt(a.indexOf(t.path))}))}})),r.push(c.default.createElement("i",{key:"edit","data-tooltip":"编辑","data-position":"bottom",className:"navbtn fa fa-pencil",onClick:function(e){e.preventDefault(),m.push("/edit/".concat(a.indexOf(t.path)))}})),r.push(c.default.createElement("span",{key:"label",className:i("AsideNav-itemLabel")},t.label)),t.path?t.active?c.default.createElement("a",null,r):c.default.createElement(s.Link,{to:"/"===t.path[0]?t.path:"".concat(t.path)},r):c.default.createElement("a",{onClick:t.onClick?t.onClick:t.children?function(){return l(t)}:void 0},r)},isActive:function(e){return function(e,t){return!!(0,o.matchPath)(t.pathname,{path:e?e.replace(/\?.*$/,""):"",exact:!0,strict:!0})}(e.path&&"/"===e.path[0]?e.path:"".concat(e.path),i)}})),header:c.default.createElement("div",null,c.default.createElement("div",{className:"a-Layout-headerBar"},c.default.createElement("div",{className:"hidden-xs p-t-sm pull-right px-2"},c.default.createElement(d.Button,{size:"sm",className:"m-r-xs",level:"success",disabled:!0},"全部导出"),c.default.createElement(d.Button,{size:"sm",level:"info",onClick:function(){return n.setAddPageIsOpen(!0)}},"新增页面")))),folded:n.asideFolded,offScreen:n.offScreen},c.default.createElement(o.Switch,null,n.pages.map((function(e){return c.default.createElement(o.Route,{key:e.id,path:"/".concat(e.path),render:function(){return c.default.createElement(u.default,{schema:e.schema})}})})),c.default.createElement(o.Route,{component:r.default})),c.default.createElement(f.default,{show:n.addPageIsOpen,onClose:function(){return n.setAddPageIsOpen(!1)},onConfirm:function(e){n.addPage(l.__assign(l.__assign({},e),{schema:{type:"page",title:e.label,body:"这是你刚刚新增的页面。"}})),n.setAddPageIsOpen(!1)},pages:n.pages.concat()}))})))}));
;/*!icons/index.tsx*/
amis.define("e6f7e6c",(function(e,r,c,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Icon=void 0;var t=e("849c8c1"),n=e("167c905");Object.defineProperty(r,"Icon",{enumerable:!0,get:function(){return n.Icon}});var o=t.__importDefault(e("icons/pc-preview.svg")),u=t.__importDefault(e("icons/h5-preview.svg"));(0,n.registerIcon)("pc-preview",o.default),(0,n.registerIcon)("h5-preview",u.default)}));
;/*!editor/DisabledEditorPlugin.tsx*/
amis.define("0cbf1f5",(function(e,r,n,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ManagerEditorPlugin=void 0;var t=e("849c8c1"),u=e("39ea9ea"),a=["audio","carousel","custom","log","sparkline"],o=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.order=9999,r}return t.__extends(r,e),r.prototype.buildSubRenderers=function(e,r){for(var n=0,i=r.length;n<i;n++){var t=r[n].rendererName;t&&a.indexOf(t)>-1&&(r[n].disabledRendererPlugin=!0)}},r}(u.BasePlugin);r.ManagerEditorPlugin=o,(0,u.registerEditorPlugin)(o)}));
;/*!editor/MyRenderer.tsx*/
amis.define("bef2b8d",(function(e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("849c8c1"),o=e("39ea9ea"),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tipName="自定义组件",t.settingsSchema={title:"自定义组件配置",body:[{type:"tabs",tabsMode:"line",className:"m-t-n-xs",contentClassName:"no-border p-l-none p-r-none",tabs:[{title:"常规",controls:[{name:"target",label:"Target",type:"text"}]},{title:"外观",controls:[]}]}]},t}return a.__extends(t,e),t=a.__decorate([(0,o.RendererEditor)("my-renderer",{name:"自定义渲染器",description:"这只是个示例",type:"my-renderer",previewSchema:{type:"my-renderer",target:"demo"},scaffold:{type:"my-renderer",target:"233"}})],t)}(o.BasicEditor);t.default=s}));
;/*!route/Editor.tsx*/
amis.define("218f7cb",(function(e,t,a,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=e("849c8c1").__importDefault(e("cc4bbf0")),o=e("39ea9ea"),n=e("fc22630"),r=e("167c905"),l=e("e6f7e6c");e("0cbf1f5"),e("de955de"),e("bef2b8d");var s=-1,d="".concat(window.location.protocol,"//").concat(window.location.host),m="/editor.html";/^\/amis-editor-demo/.test(window.location.pathname)&&(d+="/amis-editor",m="/amis-editor-demo"+m);var f="".concat(d,"/schema.json");t.default=(0,n.inject)("store")((0,n.observer)((function(e){var t=e.store,a=(e.location,e.history),i=e.match,n=parseInt(i.params.id,10);return n!==s&&(s=n,t.updateSchema(t.pages[n].schema)),c.default.createElement("div",{className:"Editor-Demo"},c.default.createElement("div",{className:"Editor-header"},c.default.createElement("div",{className:"Editor-title"},"amis 可视化编辑器"),c.default.createElement("div",{className:"Editor-view-mode-group-container"},c.default.createElement("div",{className:"Editor-view-mode-group"},c.default.createElement("div",{className:"Editor-view-mode-btn ".concat(t.isMobile?"":"is-active"),onClick:function(){t.setIsMobile(!1)}},c.default.createElement(l.Icon,{icon:"pc-preview",title:"PC模式"})),c.default.createElement("div",{className:"Editor-view-mode-btn ".concat(t.isMobile?"is-active":""),onClick:function(){t.setIsMobile(!0)}},c.default.createElement(l.Icon,{icon:"h5-preview",title:"移动模式"})))),c.default.createElement("div",{className:"Editor-header-actions"},c.default.createElement(o.ShortcutKey,null),c.default.createElement("div",{className:"header-action-btn margin-left-space ".concat(t.preview?"primary":""),onClick:function(){t.setPreview(!t.preview)}},t.preview?"编辑":"预览"),!t.preview&&c.default.createElement("div",{className:"header-action-btn exit-btn",onClick:function(){a.push("/".concat(t.pages[n].path))}},"退出"))),c.default.createElement("div",{className:"Editor-inner"},c.default.createElement(o.Editor,{theme:"cxd",preview:t.preview,isMobile:t.isMobile,value:t.schema,onChange:function(e){return t.updateSchema(e)},onPreview:function(){t.setPreview(!0)},onSave:function(){t.updatePageSchemaAt(n),r.toast.success("保存成功","提示")},className:"is-fixed",$schemaUrl:f,iframeUrl:m,showCustomRenderersPanel:!0,amisEnv:{fetcher:t.fetcher,notify:t.notify,alert:t.alert,copy:t.copy}})))})))}));