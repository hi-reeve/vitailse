"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var vueI18n = require("vue-i18n");
var pinia = require("pinia");
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var viteSsg = require("vite-ssg");
var core = require("@vueuse/core");
var workboxWindow = require("workbox-window");
var head = require("@vueuse/head");
var en = {
  "pages": {
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Home"]);
    },
    "other": {
      "menu": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Other Page"]);
      },
      "desc": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["An example of other pages"]);
      }
    },
    "not-found": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Page not found"]);
    }
  },
  "app": {
    "header": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["App Title"]);
    },
    "offline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["App ready to work offline"]);
    },
    "new-content": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["New content available, click on reload button to update."]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Welcome to Vitailse, Vite starter template with ", _interpolate(_named("tailwindurl"))]);
    },
    "github": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Please give stars and report any issues on our ", _interpolate(_named("githuburl"))]);
    }
  },
  "button": {
    "reload": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Reload"]);
    },
    "close": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Close"]);
    }
  }
};
var __glob_1_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": en
});
var id = {
  "pages": {
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Beranda"]);
    },
    "other": {
      "menu": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Halaman lain"]);
      },
      "desc": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Contoh untuk halaman lain"]);
      }
    },
    "not-found": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Laman tidak ditemukan"]);
    }
  },
  "app": {
    "header": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Judul Aplikasi"]);
    },
    "offline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Aplikasi siap digunakan tanpa jaringan internet"]);
    },
    "new-content": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Konten baru ditemukan, Tekan tombol perbarui untuk memperbarui laman."]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Selamat datang di Vitailse, Template awal vite dengan "]);
    },
    "github": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mohon berikan bintang dan laporkan masalah pada "]);
    }
  },
  "button": {
    "reload": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Perbarui"]);
    },
    "close": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tutup"]);
    }
  }
};
var __glob_1_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": id
});
const messages = Object.fromEntries(Object.entries({ "../../locales/en.json": __glob_1_0, "../../locales/id.json": __glob_1_1 }).map(([key, value]) => {
  const isYamlOrJson = key.endsWith(".yaml") || key.endsWith(".json");
  return [key.slice(14, isYamlOrJson ? -5 : -4), value.default];
}));
const install$2 = ({ app }) => {
  const i18n = vueI18n.createI18n({
    legacy: false,
    locale: "en",
    messages,
    globalInjection: true
  });
  app.use(i18n);
};
var __glob_5_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  install: install$2
});
const install$1 = ({ isClient, initialState, app }) => {
  const pinia$1 = pinia.createPinia();
  app.use(pinia$1);
  if (isClient)
    pinia$1.state.value = initialState.pinia || {};
  else
    initialState.pinia = pinia$1.state.value;
};
var __glob_5_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  install: install$1
});
const install = ({ isClient, router }) => {
  if (!isClient)
    return;
  router.isReady().then(async () => {
    const { registerSW: registerSW2 } = await Promise.resolve().then(function() {
      return virtual_pwaRegister;
    });
    registerSW2({ immediate: true });
  });
};
var __glob_5_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  install
});
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$7 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_router_view = vue.resolveComponent("router-view");
  _push(serverRenderer.ssrRenderComponent(_component_router_view, _attrs, null, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/App.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_router_view = vue.resolveComponent("router-view");
  _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "w-full min-h-screen bg-blue-100 grid place-items-center" }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/layouts/404.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var __layout_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1]]);
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$2 = /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93a9.93 9.93 0 0 0 7.07-2.929a10.007 10.007 0 0 0 2.583-4.491a1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343a7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483a10.027 10.027 0 0 0 2.89 7.848a9.972 9.972 0 0 0 7.848 2.891a8.036 8.036 0 0 1-1.484 2.059z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
var __unplugin_components_0 = { name: "bx-bx-moon", render: render$2 };
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$1 = /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142c3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
var __unplugin_components_1 = { name: "bx-bxs-moon", render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("g", { fill: "none" }, [
  /* @__PURE__ */ vue.createElementVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z",
    fill: "currentColor"
  })
], -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1, _hoisted_3);
}
var __unplugin_components_2 = { name: "akar-icons-github-fill", render };
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggleSidebar"],
  setup(__props) {
    const { availableLocales } = vueI18n.useI18n();
    const preferedDark = core.usePreferredDark();
    const isDark = core.useStorage("isDark", preferedDark.value);
    const body = vue.ref(null);
    vue.onMounted(async () => {
      await vue.nextTick();
      body.value = document.querySelector("body");
      if (body.value) {
        if (isDark.value)
          body.value.classList.add("dark");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vue.resolveComponent("router-link");
      const _component_icon58bx58bx_moon = __unplugin_components_0;
      const _component_icon58bx58bxs_moon = __unplugin_components_1;
      const _component_icon_akar_icons58github_fill = __unplugin_components_2;
      _push(`<header${serverRenderer.ssrRenderAttrs(_attrs)}><nav class="w-full bg-white text-gray-800 dark:bg-gray-800 dark:text-white py-4 px-8 shadow-md dark:shadow-md flex items-center border-b border-gray-400/50">`);
      _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: { name: "home" } }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="font-bold lg:text-xl md:text-lg text-md"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.$t("app.header"))}</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "font-bold lg:text-xl md:text-lg text-md" }, vue.toDisplayString(_ctx.$t("app.header")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="ml-auto flex items-center h-full"><select id="language" class="py-1 focus:outline-none rounded dark:text-gray-800"><!--[-->`);
      serverRenderer.ssrRenderList(vue.unref(availableLocales), (locale) => {
        _push(`<option${serverRenderer.ssrRenderAttr("value", locale)}>${serverRenderer.ssrInterpolate(locale)}</option>`);
      });
      _push(`<!--]--></select><button class="mx-5 cursor-pointer focus:outline-none">`);
      if (!vue.unref(isDark)) {
        _push(serverRenderer.ssrRenderComponent(_component_icon58bx58bx_moon, { class: "w-6 h-6" }, null, _parent));
      } else {
        _push(serverRenderer.ssrRenderComponent(_component_icon58bx58bxs_moon, { class: "w-6 h-6" }, null, _parent));
      }
      _push(`</button><a href="https://github.com/zynth17/vitailse">`);
      _push(serverRenderer.ssrRenderComponent(_component_icon_akar_icons58github_fill, null, null, _parent));
      _push(`</a></div></nav></header>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/AppHeader.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
function registerSW$1(options = {}) {
  const {
    immediate = false,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisterError
  } = options;
  let wb;
  let registration;
  const updateServiceWorker = async (reloadPage = true) => {
    {
      if (reloadPage) {
        wb == null ? void 0 : wb.addEventListener("controlling", (event) => {
          if (event.isUpdate)
            window.location.reload();
        });
      }
      if (registration && registration.waiting) {
        await workboxWindow.messageSW(registration.waiting, { type: "SKIP_WAITING" });
      }
    }
  };
  if ("serviceWorker" in navigator) {
    wb = new workboxWindow.Workbox("/sw.js", { scope: "/" });
    wb.addEventListener("activated", (event) => {
      if (event.isUpdate)
        ;
      else
        onOfflineReady == null ? void 0 : onOfflineReady();
    });
    {
      const showSkipWaitingPrompt = () => {
        onNeedRefresh == null ? void 0 : onNeedRefresh();
      };
      wb.addEventListener("waiting", showSkipWaitingPrompt);
      wb.addEventListener("externalwaiting", showSkipWaitingPrompt);
    }
    wb.register({ immediate }).then((r) => {
      registration = r;
      onRegistered == null ? void 0 : onRegistered(r);
    }).catch((e) => {
      onRegisterError == null ? void 0 : onRegisterError(e);
    });
  }
  return updateServiceWorker;
}
function useRegisterSW(options = {}) {
  const {
    immediate = true,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisterError
  } = options;
  const needRefresh = vue.ref(false);
  const offlineReady = vue.ref(false);
  const updateServiceWorker = registerSW$1({
    immediate,
    onNeedRefresh() {
      needRefresh.value = true;
      onNeedRefresh == null ? void 0 : onNeedRefresh();
    },
    onOfflineReady() {
      offlineReady.value = true;
      onOfflineReady == null ? void 0 : onOfflineReady();
    },
    onRegistered,
    onRegisterError
  });
  return {
    updateServiceWorker,
    offlineReady,
    needRefresh
  };
}
var PeriodicUpdate_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();
    const { t } = vueI18n.useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(offlineReady) || vue.unref(needRefresh)) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: "pwa-toast",
          role: "alert"
        }, _attrs))}><div class="message">`);
        if (vue.unref(offlineReady)) {
          _push(`<span>${serverRenderer.ssrInterpolate(vue.unref(t)("app.offline"))}</span>`);
        } else {
          _push(`<span>${serverRenderer.ssrInterpolate(_ctx.$t("app.new-content"))}</span>`);
        }
        _push(`</div>`);
        if (vue.unref(needRefresh)) {
          _push(`<button>${serverRenderer.ssrInterpolate(_ctx.$t("button.reload"))}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button>${serverRenderer.ssrInterpolate(_ctx.$t("button.close"))}</button></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/PeriodicUpdate.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_app_header = _sfc_main$5;
  const _component_router_view = vue.resolveComponent("router-view");
  const _component_periodic_update = _sfc_main$4;
  _push(`<!--[--><header>`);
  _push(serverRenderer.ssrRenderComponent(_component_app_header, null, null, _parent));
  _push(`</header><main class="p-8 dark:bg-gray-800 dark:text-white bg-white text-gray-800 min-h-screen">`);
  _push(serverRenderer.ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(`</main>`);
  _push(serverRenderer.ssrRenderComponent(_component_periodic_update, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/layouts/default.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var __layout_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const layouts = {
  "404": __layout_0,
  "default": __layout_1
};
function setupLayouts(routes2) {
  return routes2.map((route) => {
    var _a;
    return {
      path: route.path,
      component: layouts[((_a = route.meta) == null ? void 0 : _a.layout) || "default"],
      children: [__spreadProps(__spreadValues({}, route), { path: "" })]
    };
  });
}
const useStore = pinia.defineStore("store", {
  state: () => ({
    count: 0
  })
});
var VitailseLogo = "/assets/logo.fc1e97ba.png";
var block0$2 = {};
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    head.useHead({
      title: "Vitailse | Opinionated vite starter template"
    });
    const store = useStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vue.resolveComponent("router-link");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "grid place-items-center min-h-[80vh]" }, _attrs))}><div><img${serverRenderer.ssrRenderAttr("src", vue.unref(VitailseLogo))} width="300" class="mx-auto"><p class="lg:text-left text-center">${serverRenderer.ssrInterpolate(_ctx.$t("intro.desc"))} <a href="https://tailwindcss.com/" class="text-blue-500 hover:underline">TailwindCSS</a></p><p class="text-center">${serverRenderer.ssrInterpolate(_ctx.$t("intro.github"))} <a class="text-blue-500 hover:underline" href="https://github.com/zynth17/vitailse">Github Repo</a></p><div class="mt-5 text-center"><button class="px-4 py-2 bg-blue-500 text-white rounded"> Count : ${serverRenderer.ssrInterpolate(vue.unref(store).$state.count)}</button></div></div>`);
      _push(serverRenderer.ssrRenderComponent(_component_router_link, {
        to: { name: "other-page" },
        class: "mt-5 text-center hover:text-gray-200 dark:hover:text-gray-500 hover:underline"
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.$t("pages.other.menu"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.$t("pages.other.menu")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
if (typeof block0$2 === "function")
  block0$2(_sfc_main$2);
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const routes$1 = [{ "name": "other-page", "path": "/other-page", "component": () => Promise.resolve().then(function() {
  return otherPage;
}), "props": true }, { "name": "home", "path": "/", "component": _sfc_main$2, "props": true }, { "name": "not-found", "path": "/:all(.*)*", "component": () => Promise.resolve().then(function() {
  return ____all_;
}), "props": true, "meta": { "layout": 404 } }];
var index = "";
const routes = setupLayouts(routes$1);
const createApp = viteSsg.ViteSSG(App, { routes }, async (ctx) => {
  Object.values({ "./modules/i18n.ts": __glob_5_0, "./modules/pinia.ts": __glob_5_1, "./modules/pwa.ts": __glob_5_2 }).map((i) => {
    var _a;
    return (_a = i.install) == null ? void 0 : _a.call(i, ctx);
  });
});
function registerSW(options = {}) {
  const {
    immediate = false,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisterError
  } = options;
  let wb;
  let registration;
  const updateServiceWorker = async (reloadPage = true) => {
    {
      if (reloadPage) {
        wb == null ? void 0 : wb.addEventListener("controlling", (event) => {
          if (event.isUpdate)
            window.location.reload();
        });
      }
      if (registration && registration.waiting) {
        await workboxWindow.messageSW(registration.waiting, { type: "SKIP_WAITING" });
      }
    }
  };
  if ("serviceWorker" in navigator) {
    wb = new workboxWindow.Workbox("/sw.js", { scope: "/" });
    wb.addEventListener("activated", (event) => {
      if (event.isUpdate)
        ;
      else
        onOfflineReady == null ? void 0 : onOfflineReady();
    });
    {
      const showSkipWaitingPrompt = () => {
        onNeedRefresh == null ? void 0 : onNeedRefresh();
      };
      wb.addEventListener("waiting", showSkipWaitingPrompt);
      wb.addEventListener("externalwaiting", showSkipWaitingPrompt);
    }
    wb.register({ immediate }).then((r) => {
      registration = r;
      onRegistered == null ? void 0 : onRegistered(r);
    }).catch((e) => {
      onRegisterError == null ? void 0 : onRegisterError(e);
    });
  }
  return updateServiceWorker;
}
var virtual_pwaRegister = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  registerSW
});
var block0$1 = {};
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    head.useHead({
      title: "Other Pages"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vue.resolveComponent("router-link");
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p>${serverRenderer.ssrInterpolate(_ctx.$t("pages.other.desc"))}</p>`);
      _push(serverRenderer.ssrRenderComponent(_component_router_link, {
        to: { name: "home" },
        class: "mt-5 hover:text-gray-200 dark:hover:text-gray-500 hover:underline"
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.$t("pages.home"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.$t("pages.home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
if (typeof block0$1 === "function")
  block0$1(_sfc_main$1);
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/other-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var otherPage = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1
});
var block0 = {};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    head.useHead({
      title: "404. Not Found"
    });
    const { t } = vueI18n.useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "text-blue-500 font-extrabold flex flex-col text-center" }, _attrs))}><span class="text-7xl">404.</span><span class="text-5xl mt-5">${serverRenderer.ssrInterpolate(vue.unref(t)("pages.not-found"))}</span></h1>`);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/[...all].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ____all_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
exports.createApp = createApp;
