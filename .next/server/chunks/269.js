exports.id = 269;
exports.ids = [269];
exports.modules = {

/***/ 7162:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Inter_19640c', '__Inter_Fallback_19640c'","fontStyle":"normal"},
	"className": "__className_19640c",
	"variable": "__variable_19640c"
};


/***/ }),

/***/ 4578:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addBasePath", ({
    enumerable: true,
    get: function() {
        return addBasePath;
    }
}));
const _addpathprefix = __webpack_require__(893);
const _normalizetrailingslash = __webpack_require__(1094);
const basePath =  false || "";
function addBasePath(path, required) {
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)( false ? 0 : (0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map


/***/ }),

/***/ 3005:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addLocale", ({
    enumerable: true,
    get: function() {
        return addLocale;
    }
}));
const _normalizetrailingslash = __webpack_require__(1094);
const addLocale = function(path) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if (false) {}
    return path;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 6937:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "callServer", ({
    enumerable: true,
    get: function() {
        return callServer;
    }
}));
const _approuter = __webpack_require__(2987);
async function callServer(actionId, actionArgs) {
    const actionDispatcher = (0, _approuter.getServerActionDispatcher)();
    if (!actionDispatcher) {
        throw new Error("Invariant: missing action dispatcher.");
    }
    return new Promise((resolve, reject)=>{
        actionDispatcher({
            actionId,
            actionArgs,
            resolve,
            reject
        });
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-call-server.js.map


/***/ }),

/***/ 3049:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "AppRouterAnnouncer", ({
    enumerable: true,
    get: function() {
        return AppRouterAnnouncer;
    }
}));
const _react = __webpack_require__(8038);
const _reactdom = __webpack_require__(8704);
const ANNOUNCER_TYPE = "next-route-announcer";
const ANNOUNCER_ID = "__next-route-announcer__";
function getAnnouncerNode() {
    var _existingAnnouncer_shadowRoot;
    const existingAnnouncer = document.getElementsByName(ANNOUNCER_TYPE)[0];
    if (existingAnnouncer == null ? void 0 : (_existingAnnouncer_shadowRoot = existingAnnouncer.shadowRoot) == null ? void 0 : _existingAnnouncer_shadowRoot.childNodes[0]) {
        return existingAnnouncer.shadowRoot.childNodes[0];
    } else {
        const container = document.createElement(ANNOUNCER_TYPE);
        container.style.cssText = "position:absolute";
        const announcer = document.createElement("div");
        announcer.ariaLive = "assertive";
        announcer.id = ANNOUNCER_ID;
        announcer.role = "alert";
        announcer.style.cssText = "position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal";
        // Use shadow DOM here to avoid any potential CSS bleed
        const shadow = container.attachShadow({
            mode: "open"
        });
        shadow.appendChild(announcer);
        document.body.appendChild(container);
        return announcer;
    }
}
function AppRouterAnnouncer(param) {
    let { tree } = param;
    const [portalNode, setPortalNode] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        const announcer = getAnnouncerNode();
        setPortalNode(announcer);
        return ()=>{
            const container = document.getElementsByTagName(ANNOUNCER_TYPE)[0];
            if (container == null ? void 0 : container.isConnected) {
                document.body.removeChild(container);
            }
        };
    }, []);
    const [routeAnnouncement, setRouteAnnouncement] = (0, _react.useState)("");
    const previousTitle = (0, _react.useRef)();
    (0, _react.useEffect)(()=>{
        let currentTitle = "";
        if (document.title) {
            currentTitle = document.title;
        } else {
            const pageHeader = document.querySelector("h1");
            if (pageHeader) {
                currentTitle = pageHeader.innerText || pageHeader.textContent || "";
            }
        }
        // Only announce the title change, but not for the first load because screen
        // readers do that automatically.
        if (previousTitle.current !== undefined) {
            setRouteAnnouncement(currentTitle);
        }
        previousTitle.current = currentTitle;
    }, [
        tree
    ]);
    return portalNode ? /*#__PURE__*/ (0, _reactdom.createPortal)(routeAnnouncement, portalNode) : null;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-announcer.js.map


/***/ }),

/***/ 6265:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RSC: function() {
        return RSC;
    },
    ACTION: function() {
        return ACTION;
    },
    NEXT_ROUTER_STATE_TREE: function() {
        return NEXT_ROUTER_STATE_TREE;
    },
    NEXT_ROUTER_PREFETCH: function() {
        return NEXT_ROUTER_PREFETCH;
    },
    NEXT_URL: function() {
        return NEXT_URL;
    },
    FETCH_CACHE_HEADER: function() {
        return FETCH_CACHE_HEADER;
    },
    RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_VARY_HEADER: function() {
        return RSC_VARY_HEADER;
    },
    FLIGHT_PARAMETERS: function() {
        return FLIGHT_PARAMETERS;
    },
    NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
    }
});
const RSC = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH = "Next-Router-Prefetch";
const NEXT_URL = "Next-Url";
const FETCH_CACHE_HEADER = "x-vercel-sc-headers";
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
const RSC_VARY_HEADER = RSC + ", " + NEXT_ROUTER_STATE_TREE + ", " + NEXT_ROUTER_PREFETCH + ", " + NEXT_URL;
const FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ]
];
const NEXT_RSC_UNION_QUERY = "_rsc";
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map


/***/ }),

/***/ 2987:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getServerActionDispatcher: function() {
        return getServerActionDispatcher;
    },
    urlToUrlWithoutFlightMarker: function() {
        return urlToUrlWithoutFlightMarker;
    },
    default: function() {
        return AppRouter;
    }
});
const _interop_require_wildcard = __webpack_require__(4009);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(8038));
const _approutercontext = __webpack_require__(7085);
const _routerreducer = __webpack_require__(7189);
const _routerreducertypes = __webpack_require__(2836);
const _createhreffromurl = __webpack_require__(4331);
const _hooksclientcontext = __webpack_require__(9569);
const _usereducerwithdevtools = __webpack_require__(7951);
const _errorboundary = __webpack_require__(9571);
const _createinitialrouterstate = __webpack_require__(1684);
const _isbot = __webpack_require__(8735);
const _addbasepath = __webpack_require__(4578);
const _approuterannouncer = __webpack_require__(3049);
const _redirectboundary = __webpack_require__(1442);
const _findheadincache = __webpack_require__(1333);
const _infinitepromise = __webpack_require__(6360);
const _approuterheaders = __webpack_require__(6265);
const _removebasepath = __webpack_require__(2666);
const _hasbasepath = __webpack_require__(4374);
const isServer = "undefined" === "undefined";
// Ensure the initialParallelRoutes are not combined because of double-rendering in the browser with Strict Mode.
let initialParallelRoutes = isServer ? null : new Map();
let globalServerActionDispatcher = null;
function getServerActionDispatcher() {
    return globalServerActionDispatcher;
}
function urlToUrlWithoutFlightMarker(url) {
    const urlWithoutFlightParameters = new URL(url, location.origin);
    urlWithoutFlightParameters.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    if (true) {
        if (false) {}
    }
    return urlWithoutFlightParameters;
}
function isExternalURL(url) {
    return url.origin !== window.location.origin;
}
function HistoryUpdater(param) {
    let { tree, pushRef, canonicalUrl, sync } = param;
    (0, _react.useInsertionEffect)(()=>{
        // Identifier is shortened intentionally.
        // __NA is used to identify if the history entry can be handled by the app-router.
        // __N is used to identify if the history entry can be handled by the old router.
        const historyState = {
            __NA: true,
            tree
        };
        if (pushRef.pendingPush && (0, _createhreffromurl.createHrefFromUrl)(new URL(window.location.href)) !== canonicalUrl) {
            // This intentionally mutates React state, pushRef is overwritten to ensure additional push/replace calls do not trigger an additional history entry.
            pushRef.pendingPush = false;
            window.history.pushState(historyState, "", canonicalUrl);
        } else {
            window.history.replaceState(historyState, "", canonicalUrl);
        }
        sync();
    }, [
        tree,
        pushRef,
        canonicalUrl,
        sync
    ]);
    return null;
}
const createEmptyCacheNode = ()=>({
        status: _approutercontext.CacheStates.LAZY_INITIALIZED,
        data: null,
        subTreeData: null,
        parallelRoutes: new Map()
    });
function useServerActionDispatcher(dispatch) {
    const serverActionDispatcher = (0, _react.useCallback)((actionPayload)=>{
        (0, _react.startTransition)(()=>{
            dispatch({
                ...actionPayload,
                type: _routerreducertypes.ACTION_SERVER_ACTION,
                mutable: {},
                cache: createEmptyCacheNode()
            });
        });
    }, [
        dispatch
    ]);
    globalServerActionDispatcher = serverActionDispatcher;
}
/**
 * Server response that only patches the cache and tree.
 */ function useChangeByServerResponse(dispatch) {
    return (0, _react.useCallback)((previousTree, flightData, overrideCanonicalUrl)=>{
        (0, _react.startTransition)(()=>{
            dispatch({
                type: _routerreducertypes.ACTION_SERVER_PATCH,
                flightData,
                previousTree,
                overrideCanonicalUrl,
                cache: createEmptyCacheNode(),
                mutable: {}
            });
        });
    }, [
        dispatch
    ]);
}
function useNavigate(dispatch) {
    return (0, _react.useCallback)((href, navigateType, forceOptimisticNavigation, shouldScroll)=>{
        const url = new URL((0, _addbasepath.addBasePath)(href), location.href);
        return dispatch({
            type: _routerreducertypes.ACTION_NAVIGATE,
            url,
            isExternalUrl: isExternalURL(url),
            locationSearch: location.search,
            forceOptimisticNavigation,
            shouldScroll: shouldScroll != null ? shouldScroll : true,
            navigateType,
            cache: createEmptyCacheNode(),
            mutable: {}
        });
    }, [
        dispatch
    ]);
}
/**
 * The global router that wraps the application components.
 */ function Router(param) {
    let { buildId, initialHead, initialTree, initialCanonicalUrl, children, assetPrefix } = param;
    const initialState = (0, _react.useMemo)(()=>(0, _createinitialrouterstate.createInitialRouterState)({
            buildId,
            children,
            initialCanonicalUrl,
            initialTree,
            initialParallelRoutes,
            isServer,
            location: !isServer ? window.location : null,
            initialHead
        }), [
        buildId,
        children,
        initialCanonicalUrl,
        initialTree,
        initialHead
    ]);
    const [{ tree, cache, prefetchCache, pushRef, focusAndScrollRef, canonicalUrl, nextUrl }, dispatch, sync] = (0, _usereducerwithdevtools.useReducerWithReduxDevtools)(_routerreducer.reducer, initialState);
    (0, _react.useEffect)(()=>{
        // Ensure initialParallelRoutes is cleaned up from memory once it's used.
        initialParallelRoutes = null;
    }, []);
    // Add memoized pathname/query for useSearchParams and usePathname.
    const { searchParams, pathname } = (0, _react.useMemo)(()=>{
        const url = new URL(canonicalUrl,  true ? "http://n" : 0);
        return {
            // This is turned into a readonly class in `useSearchParams`
            searchParams: url.searchParams,
            pathname: (0, _hasbasepath.hasBasePath)(url.pathname) ? (0, _removebasepath.removeBasePath)(url.pathname) : url.pathname
        };
    }, [
        canonicalUrl
    ]);
    const changeByServerResponse = useChangeByServerResponse(dispatch);
    const navigate = useNavigate(dispatch);
    useServerActionDispatcher(dispatch);
    /**
   * The app router that is exposed through `useRouter`. It's only concerned with dispatching actions to the reducer, does not hold state.
   */ const appRouter = (0, _react.useMemo)(()=>{
        const routerInstance = {
            back: ()=>window.history.back(),
            forward: ()=>window.history.forward(),
            prefetch: (href, options)=>{
                // Don't prefetch for bots as they don't navigate.
                // Don't prefetch during development (improves compilation performance)
                if ((0, _isbot.isBot)(window.navigator.userAgent) || "production" === "development") {
                    return;
                }
                const url = new URL((0, _addbasepath.addBasePath)(href), location.href);
                // External urls can't be prefetched in the same way.
                if (isExternalURL(url)) {
                    return;
                }
                (0, _react.startTransition)(()=>{
                    var _options_kind;
                    dispatch({
                        type: _routerreducertypes.ACTION_PREFETCH,
                        url,
                        kind: (_options_kind = options == null ? void 0 : options.kind) != null ? _options_kind : _routerreducertypes.PrefetchKind.FULL
                    });
                });
            },
            replace: (href, options)=>{
                if (options === void 0) options = {};
                (0, _react.startTransition)(()=>{
                    var _options_scroll;
                    navigate(href, "replace", Boolean(options.forceOptimisticNavigation), (_options_scroll = options.scroll) != null ? _options_scroll : true);
                });
            },
            push: (href, options)=>{
                if (options === void 0) options = {};
                (0, _react.startTransition)(()=>{
                    var _options_scroll;
                    navigate(href, "push", Boolean(options.forceOptimisticNavigation), (_options_scroll = options.scroll) != null ? _options_scroll : true);
                });
            },
            refresh: ()=>{
                (0, _react.startTransition)(()=>{
                    dispatch({
                        type: _routerreducertypes.ACTION_REFRESH,
                        cache: createEmptyCacheNode(),
                        mutable: {},
                        origin: window.location.origin
                    });
                });
            },
            // @ts-ignore we don't want to expose this method at all
            fastRefresh: ()=>{
                if (true) {
                    throw new Error("fastRefresh can only be used in development mode. Please use refresh instead.");
                } else {}
            }
        };
        return routerInstance;
    }, [
        dispatch,
        navigate
    ]);
    (0, _react.useEffect)(()=>{
        // Exists for debugging purposes. Don't use in application code.
        if (window.next) {
            window.next.router = appRouter;
        }
    }, [
        appRouter
    ]);
    if (false) {}
    (0, _react.useEffect)(()=>{
        // If the app is restored from bfcache, it's possible that
        // pushRef.mpaNavigation is true, which would mean that any re-render of this component
        // would trigger the mpa navigation logic again from the lines below.
        // This will restore the router to the initial state in the event that the app is restored from bfcache.
        function handlePageShow(event) {
            var _window_history_state;
            if (!event.persisted || !((_window_history_state = window.history.state) == null ? void 0 : _window_history_state.tree)) return;
            dispatch({
                type: _routerreducertypes.ACTION_RESTORE,
                url: new URL(window.location.href),
                tree: window.history.state.tree
            });
        }
        window.addEventListener("pageshow", handlePageShow);
        return ()=>{
            window.removeEventListener("pageshow", handlePageShow);
        };
    }, [
        dispatch
    ]);
    // When mpaNavigation flag is set do a hard navigation to the new url.
    // Infinitely suspend because we don't actually want to rerender any child
    // components with the new URL and any entangled state updates shouldn't
    // commit either (eg: useTransition isPending should stay true until the page
    // unloads).
    //
    // This is a side effect in render. Don't try this at home, kids. It's
    // probably safe because we know this is a singleton component and it's never
    // in <Offscreen>. At least I hope so. (It will run twice in dev strict mode,
    // but that's... fine?)
    if (pushRef.mpaNavigation) {
        const location1 = window.location;
        if (pushRef.pendingPush) {
            location1.assign(canonicalUrl);
        } else {
            location1.replace(canonicalUrl);
        }
        // TODO-APP: Should we listen to navigateerror here to catch failed
        // navigations somehow? And should we call window.stop() if a SPA navigation
        // should interrupt an MPA one?
        (0, _react.use)((0, _infinitepromise.createInfinitePromise)());
    }
    /**
   * Handle popstate event, this is used to handle back/forward in the browser.
   * By default dispatches ACTION_RESTORE, however if the history entry was not pushed/replaced by app-router it will reload the page.
   * That case can happen when the old router injected the history entry.
   */ const onPopState = (0, _react.useCallback)((param)=>{
        let { state } = param;
        if (!state) {
            // TODO-APP: this case only happens when pushState/replaceState was called outside of Next.js. It should probably reload the page in this case.
            return;
        }
        // This case happens when the history entry was pushed by the `pages` router.
        if (!state.__NA) {
            window.location.reload();
            return;
        }
        // @ts-ignore useTransition exists
        // TODO-APP: Ideally the back button should not use startTransition as it should apply the updates synchronously
        // Without startTransition works if the cache is there for this path
        (0, _react.startTransition)(()=>{
            dispatch({
                type: _routerreducertypes.ACTION_RESTORE,
                url: new URL(window.location.href),
                tree: state.tree
            });
        });
    }, [
        dispatch
    ]);
    // Register popstate event to call onPopstate.
    (0, _react.useEffect)(()=>{
        window.addEventListener("popstate", onPopState);
        return ()=>{
            window.removeEventListener("popstate", onPopState);
        };
    }, [
        onPopState
    ]);
    const head = (0, _react.useMemo)(()=>{
        return (0, _findheadincache.findHeadInCache)(cache, tree[1]);
    }, [
        cache,
        tree
    ]);
    let content = /*#__PURE__*/ _react.default.createElement(_redirectboundary.RedirectBoundary, null, head, cache.subTreeData, /*#__PURE__*/ _react.default.createElement(_approuterannouncer.AppRouterAnnouncer, {
        tree: tree
    }));
    if (false) {}
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(HistoryUpdater, {
        tree: tree,
        pushRef: pushRef,
        canonicalUrl: canonicalUrl,
        sync: sync
    }), /*#__PURE__*/ _react.default.createElement(_hooksclientcontext.PathnameContext.Provider, {
        value: pathname
    }, /*#__PURE__*/ _react.default.createElement(_hooksclientcontext.SearchParamsContext.Provider, {
        value: searchParams
    }, /*#__PURE__*/ _react.default.createElement(_approutercontext.GlobalLayoutRouterContext.Provider, {
        value: {
            buildId,
            changeByServerResponse,
            tree,
            focusAndScrollRef,
            nextUrl
        }
    }, /*#__PURE__*/ _react.default.createElement(_approutercontext.AppRouterContext.Provider, {
        value: appRouter
    }, /*#__PURE__*/ _react.default.createElement(_approutercontext.LayoutRouterContext.Provider, {
        value: {
            childNodes: cache.parallelRoutes,
            tree: tree,
            // Root node always has `url`
            // Provided in AppTreeContext to ensure it can be overwritten in layout-router
            url: canonicalUrl
        }
    }, content))))));
}
function AppRouter(props) {
    const { globalErrorComponent, ...rest } = props;
    return /*#__PURE__*/ _react.default.createElement(_errorboundary.ErrorBoundary, {
        errorComponent: globalErrorComponent
    }, /*#__PURE__*/ _react.default.createElement(Router, rest));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router.js.map


/***/ }),

/***/ 5661:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "bailoutToClientRendering", ({
    enumerable: true,
    get: function() {
        return bailoutToClientRendering;
    }
}));
const _dynamicnossr = __webpack_require__(9708);
const _staticgenerationasyncstorage = __webpack_require__(3539);
function bailoutToClientRendering() {
    const staticGenerationStore = _staticgenerationasyncstorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        (0, _dynamicnossr.suspense)();
    }
    return false;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map


/***/ }),

/***/ 2633:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "clientHookInServerComponentError", ({
    enumerable: true,
    get: function() {
        return clientHookInServerComponentError;
    }
}));
const _interop_require_default = __webpack_require__(2147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
function clientHookInServerComponentError(hookName) {
    if (false) {}
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-hook-in-server-component-error.js.map


/***/ }),

/***/ 9571:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorBoundaryHandler: function() {
        return ErrorBoundaryHandler;
    },
    GlobalError: function() {
        return GlobalError;
    },
    // Exported so that the import signature in the loaders can be identical to user
    // supplied custom global error signatures.
    default: function() {
        return _default;
    },
    ErrorBoundary: function() {
        return ErrorBoundary;
    }
});
const _interop_require_default = __webpack_require__(2147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
const _navigation = __webpack_require__(696);
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "28px",
        margin: "0 8px"
    }
};
class ErrorBoundaryHandler extends _react.default.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    static getDerivedStateFromProps(props, state) {
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.error) {
            return {
                error: null,
                previousPathname: props.pathname
            };
        }
        return {
            error: state.error,
            previousPathname: props.pathname
        };
    }
    render() {
        if (this.state.error) {
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, this.props.errorStyles, /*#__PURE__*/ _react.default.createElement(this.props.errorComponent, {
                error: this.state.error,
                reset: this.reset
            }));
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.reset = ()=>{
            this.setState({
                error: null
            });
        };
        this.state = {
            error: null,
            previousPathname: this.props.pathname
        };
    }
}
function GlobalError(param) {
    let { error } = param;
    const digest = error == null ? void 0 : error.digest;
    return /*#__PURE__*/ _react.default.createElement("html", {
        id: "__next_error__"
    }, /*#__PURE__*/ _react.default.createElement("head", null), /*#__PURE__*/ _react.default.createElement("body", null, /*#__PURE__*/ _react.default.createElement("div", {
        style: styles.error
    }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("h2", {
        style: styles.text
    }, "Application error: a " + (digest ? "server" : "client") + "-side exception has occurred (see the " + (digest ? "server logs" : "browser console") + " for more information)."), digest ? /*#__PURE__*/ _react.default.createElement("p", {
        style: styles.text
    }, "Digest: " + digest) : null))));
}
const _default = GlobalError;
function ErrorBoundary(param) {
    let { errorComponent, errorStyles, children } = param;
    const pathname = (0, _navigation.usePathname)();
    if (errorComponent) {
        return /*#__PURE__*/ _react.default.createElement(ErrorBoundaryHandler, {
            pathname: pathname,
            errorComponent: errorComponent,
            errorStyles: errorStyles
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 8047:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DYNAMIC_ERROR_CODE: function() {
        return DYNAMIC_ERROR_CODE;
    },
    DynamicServerError: function() {
        return DynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
class DynamicServerError extends Error {
    constructor(type){
        super("Dynamic server usage: " + type);
        this.digest = DYNAMIC_ERROR_CODE;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map


/***/ }),

/***/ 6360:
/***/ ((module, exports) => {

"use strict";
/**
 * Used to cache in createInfinitePromise
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createInfinitePromise", ({
    enumerable: true,
    get: function() {
        return createInfinitePromise;
    }
}));
let infinitePromise;
function createInfinitePromise() {
    if (!infinitePromise) {
        // Only create the Promise once
        infinitePromise = new Promise(()=>{
        // This is used to debug when the rendering is never updated.
        // setTimeout(() => {
        //   infinitePromise = new Error('Infinite promise')
        //   resolve()
        // }, 5000)
        });
    }
    return infinitePromise;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=infinite-promise.js.map


/***/ }),

/***/ 831:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return OuterLayoutRouter;
    }
}));
const _interop_require_default = __webpack_require__(2147);
const _interop_require_wildcard = __webpack_require__(4009);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(8038));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8704));
const _approutercontext = __webpack_require__(7085);
const _fetchserverresponse = __webpack_require__(8080);
const _infinitepromise = __webpack_require__(6360);
const _errorboundary = __webpack_require__(9571);
const _matchsegments = __webpack_require__(7618);
const _handlesmoothscroll = __webpack_require__(7887);
const _redirectboundary = __webpack_require__(1442);
const _notfoundboundary = __webpack_require__(6505);
const _getsegmentvalue = __webpack_require__(7741);
const _createroutercachekey = __webpack_require__(8870);
/**
 * Add refetch marker to router state at the point of the current layout segment.
 * This ensures the response returned is not further down than the current layout segment.
 */ function walkAddRefetch(segmentPathToWalk, treeToRecreate) {
    if (segmentPathToWalk) {
        const [segment, parallelRouteKey] = segmentPathToWalk;
        const isLast = segmentPathToWalk.length === 2;
        if ((0, _matchsegments.matchSegment)(treeToRecreate[0], segment)) {
            if (treeToRecreate[1].hasOwnProperty(parallelRouteKey)) {
                if (isLast) {
                    const subTree = walkAddRefetch(undefined, treeToRecreate[1][parallelRouteKey]);
                    return [
                        treeToRecreate[0],
                        {
                            ...treeToRecreate[1],
                            [parallelRouteKey]: [
                                subTree[0],
                                subTree[1],
                                subTree[2],
                                "refetch"
                            ]
                        }
                    ];
                }
                return [
                    treeToRecreate[0],
                    {
                        ...treeToRecreate[1],
                        [parallelRouteKey]: walkAddRefetch(segmentPathToWalk.slice(2), treeToRecreate[1][parallelRouteKey])
                    }
                ];
            }
        }
    }
    return treeToRecreate;
}
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (true) return null;
    // Only apply strict mode warning when not in production
    if (false) {}
    return _reactdom.default.findDOMNode(instance);
}
const rectProperties = [
    "bottom",
    "height",
    "left",
    "right",
    "top",
    "width",
    "x",
    "y"
];
/**
 * Check if a HTMLElement is hidden or fixed/sticky position
 */ function shouldSkipElement(element) {
    // we ignore fixed or sticky positioned elements since they'll likely pass the "in-viewport" check
    // and will result in a situation we bail on scroll because of something like a fixed nav,
    // even though the actual page content is offscreen
    if ([
        "sticky",
        "fixed"
    ].includes(getComputedStyle(element).position)) {
        if (false) {}
        return true;
    }
    // Uses `getBoundingClientRect` to check if the element is hidden instead of `offsetParent`
    // because `offsetParent` doesn't consider document/body
    const rect = element.getBoundingClientRect();
    return rectProperties.every((item)=>rect[item] === 0);
}
/**
 * Check if the top corner of the HTMLElement is in the viewport.
 */ function topOfElementInViewport(element, viewportHeight) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= viewportHeight;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === "top") {
        return document.body;
    }
    var _document_getElementById;
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return (_document_getElementById = document.getElementById(hashFragment)) != null ? _document_getElementById : document.getElementsByName(hashFragment)[0];
}
class InnerScrollAndFocusHandler extends _react.default.Component {
    componentDidMount() {
        this.handlePotentialScroll();
    }
    componentDidUpdate() {
        // Because this property is overwritten in handlePotentialScroll it's fine to always run it when true as it'll be set to false for subsequent renders.
        if (this.props.focusAndScrollRef.apply) {
            this.handlePotentialScroll();
        }
    }
    render() {
        return this.props.children;
    }
    constructor(...args){
        super(...args);
        this.handlePotentialScroll = ()=>{
            // Handle scroll and focus, it's only applied once in the first useEffect that triggers that changed.
            const { focusAndScrollRef, segmentPath } = this.props;
            if (focusAndScrollRef.apply) {
                // segmentPaths is an array of segment paths that should be scrolled to
                // if the current segment path is not in the array, the scroll is not applied
                // unless the array is empty, in which case the scroll is always applied
                if (focusAndScrollRef.segmentPaths.length !== 0 && !focusAndScrollRef.segmentPaths.some((scrollRefSegmentPath)=>segmentPath.every((segment, index)=>(0, _matchsegments.matchSegment)(segment, scrollRefSegmentPath[index])))) {
                    return;
                }
                let domNode = null;
                const hashFragment = focusAndScrollRef.hashFragment;
                if (hashFragment) {
                    domNode = getHashFragmentDomNode(hashFragment);
                }
                // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
                // This already caused a bug where the first child was a <link/> in head.
                if (!domNode) {
                    domNode = findDOMNode(this);
                }
                // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
                if (!(domNode instanceof Element)) {
                    return;
                }
                // Verify if the element is a HTMLElement and if we want to consider it for scroll behavior.
                // If the element is skipped, try to select the next sibling and try again.
                while(!(domNode instanceof HTMLElement) || shouldSkipElement(domNode)){
                    // No siblings found that match the criteria are found, so handle scroll higher up in the tree instead.
                    if (domNode.nextElementSibling === null) {
                        return;
                    }
                    domNode = domNode.nextElementSibling;
                }
                // State is mutated to ensure that the focus and scroll is applied only once.
                focusAndScrollRef.apply = false;
                focusAndScrollRef.hashFragment = null;
                focusAndScrollRef.segmentPaths = [];
                (0, _handlesmoothscroll.handleSmoothScroll)(()=>{
                    // In case of hash scroll, we only need to scroll the element into view
                    if (hashFragment) {
                        domNode.scrollIntoView();
                        return;
                    }
                    // Store the current viewport height because reading `clientHeight` causes a reflow,
                    // and it won't change during this function.
                    const htmlElement = document.documentElement;
                    const viewportHeight = htmlElement.clientHeight;
                    // If the element's top edge is already in the viewport, exit early.
                    if (topOfElementInViewport(domNode, viewportHeight)) {
                        return;
                    }
                    // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                    // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                    // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                    // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                    htmlElement.scrollTop = 0;
                    // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                    if (!topOfElementInViewport(domNode, viewportHeight)) {
                        domNode.scrollIntoView();
                    }
                }, {
                    // We will force layout by querying domNode position
                    dontForceLayout: true,
                    onlyHashChange: focusAndScrollRef.onlyHashChange
                });
                // Mutate after scrolling so that it can be read by `handleSmoothScroll`
                focusAndScrollRef.onlyHashChange = false;
                // Set focus on the element
                domNode.focus();
            }
        };
    }
}
function ScrollAndFocusHandler(param) {
    let { segmentPath, children } = param;
    const context = (0, _react.useContext)(_approutercontext.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error("invariant global layout router not mounted");
    }
    return /*#__PURE__*/ _react.default.createElement(InnerScrollAndFocusHandler, {
        segmentPath: segmentPath,
        focusAndScrollRef: context.focusAndScrollRef
    }, children);
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter(param) {
    let { parallelRouterKey, url, childNodes, childProp, segmentPath, tree, // isActive,
    cacheKey } = param;
    const context = (0, _react.useContext)(_approutercontext.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error("invariant global layout router not mounted");
    }
    const { buildId, changeByServerResponse, tree: fullTree } = context;
    // Read segment path from the parallel router cache node.
    let childNode = childNodes.get(cacheKey);
    // If childProp is available this means it's the Flight / SSR case.
    if (childProp && // TODO-APP: verify if this can be null based on user code
    childProp.current !== null) {
        if (!childNode) {
            // Add the segment's subTreeData to the cache.
            // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
            childNode = {
                status: _approutercontext.CacheStates.READY,
                data: null,
                subTreeData: childProp.current,
                parallelRoutes: new Map()
            };
            childNodes.set(cacheKey, childNode);
        } else {
            if (childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED) {
                // @ts-expect-error we're changing it's type!
                childNode.status = _approutercontext.CacheStates.READY;
                // @ts-expect-error
                childNode.subTreeData = childProp.current;
            }
        }
    }
    // When childNode is not available during rendering client-side we need to fetch it from the server.
    if (!childNode || childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED) {
        /**
     * Router state with refetch marker added
     */ // TODO-APP: remove ''
        const refetchTree = walkAddRefetch([
            "",
            ...segmentPath
        ], fullTree);
        childNode = {
            status: _approutercontext.CacheStates.DATA_FETCH,
            data: (0, _fetchserverresponse.fetchServerResponse)(new URL(url, location.origin), refetchTree, context.nextUrl, buildId),
            subTreeData: null,
            head: childNode && childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED ? childNode.head : undefined,
            parallelRoutes: childNode && childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED ? childNode.parallelRoutes : new Map()
        };
        /**
     * Flight data fetch kicked off during render and put into the cache.
     */ childNodes.set(cacheKey, childNode);
    }
    // This case should never happen so it throws an error. It indicates there's a bug in the Next.js.
    if (!childNode) {
        throw new Error("Child node should always exist");
    }
    // This case should never happen so it throws an error. It indicates there's a bug in the Next.js.
    if (childNode.subTreeData && childNode.data) {
        throw new Error("Child node should not have both subTreeData and data");
    }
    // If cache node has a data request we have to unwrap response by `use` and update the cache.
    if (childNode.data) {
        /**
     * Flight response data
     */ // When the data has not resolved yet `use` will suspend here.
        const [flightData, overrideCanonicalUrl] = (0, _react.use)(childNode.data);
        // segmentPath from the server does not match the layout's segmentPath
        childNode.data = null;
        // setTimeout is used to start a new transition during render, this is an intentional hack around React.
        setTimeout(()=>{
            (0, _react.startTransition)(()=>{
                changeByServerResponse(fullTree, flightData, overrideCanonicalUrl);
            });
        });
        // Suspend infinitely as `changeByServerResponse` will cause a different part of the tree to be rendered.
        (0, _react.use)((0, _infinitepromise.createInfinitePromise)());
    }
    // If cache node has no subTreeData and no data request we have to infinitely suspend as the data will likely flow in from another place.
    // TODO-APP: double check users can't return null in a component that will kick in here.
    if (!childNode.subTreeData) {
        (0, _react.use)((0, _infinitepromise.createInfinitePromise)());
    }
    const subtree = /*#__PURE__*/ _react.default.createElement(_approutercontext.LayoutRouterContext.Provider, {
        value: {
            tree: tree[1][parallelRouterKey],
            childNodes: childNode.parallelRoutes,
            // TODO-APP: overriding of url for parallel routes
            url: url
        }
    }, childNode.subTreeData);
    // Ensure root layout is not wrapped in a div as the root layout renders `<html>`
    return subtree;
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary(param) {
    let { children, loading, loadingStyles, hasLoading } = param;
    if (hasLoading) {
        return /*#__PURE__*/ _react.default.createElement(_react.Suspense, {
            fallback: /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, loadingStyles, loading)
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
function OuterLayoutRouter(param) {
    let { parallelRouterKey, segmentPath, childProp, error, errorStyles, templateStyles, loading, loadingStyles, hasLoading, template, notFound, notFoundStyles, styles } = param;
    const context = (0, _react.useContext)(_approutercontext.LayoutRouterContext);
    if (!context) {
        throw new Error("invariant expected layout router to be mounted");
    }
    const { childNodes, tree, url } = context;
    // Get the current parallelRouter cache node
    let childNodesForParallelRouter = childNodes.get(parallelRouterKey);
    // If the parallel router cache node does not exist yet, create it.
    // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
    if (!childNodesForParallelRouter) {
        childNodesForParallelRouter = new Map();
        childNodes.set(parallelRouterKey, childNodesForParallelRouter);
    }
    // Get the active segment in the tree
    // The reason arrays are used in the data format is that these are transferred from the server to the browser so it's optimized to save bytes.
    const treeSegment = tree[1][parallelRouterKey][0];
    const childPropSegment = childProp.segment;
    // If segment is an array it's a dynamic route and we want to read the dynamic route value as the segment to get from the cache.
    const currentChildSegmentValue = (0, _getsegmentvalue.getSegmentValue)(treeSegment);
    /**
   * Decides which segments to keep rendering, all segments that are not active will be wrapped in `<Offscreen>`.
   */ // TODO-APP: Add handling of `<Offscreen>` when it's available.
    const preservedSegments = [
        treeSegment
    ];
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, styles, preservedSegments.map((preservedSegment)=>{
        const isChildPropSegment = (0, _matchsegments.matchSegment)(preservedSegment, childPropSegment);
        const preservedSegmentValue = (0, _getsegmentvalue.getSegmentValue)(preservedSegment);
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(preservedSegment);
        return(/*
            - Error boundary
              - Only renders error boundary if error component is provided.
              - Rendered for each segment to ensure they have their own error state.
            - Loading boundary
              - Only renders suspense boundary if loading components is provided.
              - Rendered for each segment to ensure they have their own loading state.
              - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
          */ /*#__PURE__*/ _react.default.createElement(_approutercontext.TemplateContext.Provider, {
            key: (0, _createroutercachekey.createRouterCacheKey)(preservedSegment, true),
            value: /*#__PURE__*/ _react.default.createElement(ScrollAndFocusHandler, {
                segmentPath: segmentPath
            }, /*#__PURE__*/ _react.default.createElement(_errorboundary.ErrorBoundary, {
                errorComponent: error,
                errorStyles: errorStyles
            }, /*#__PURE__*/ _react.default.createElement(LoadingBoundary, {
                hasLoading: hasLoading,
                loading: loading,
                loadingStyles: loadingStyles
            }, /*#__PURE__*/ _react.default.createElement(_notfoundboundary.NotFoundBoundary, {
                notFound: notFound,
                notFoundStyles: notFoundStyles
            }, /*#__PURE__*/ _react.default.createElement(_redirectboundary.RedirectBoundary, null, /*#__PURE__*/ _react.default.createElement(InnerLayoutRouter, {
                parallelRouterKey: parallelRouterKey,
                url: url,
                tree: tree,
                childNodes: childNodesForParallelRouter,
                childProp: isChildPropSegment ? childProp : null,
                segmentPath: segmentPath,
                cacheKey: cacheKey,
                isActive: currentChildSegmentValue === preservedSegmentValue
            }))))))
        }, templateStyles, template));
    }));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=layout-router.js.map


/***/ }),

/***/ 7618:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    matchSegment: function() {
        return matchSegment;
    },
    canSegmentBeOverridden: function() {
        return canSegmentBeOverridden;
    }
});
const _getsegmentparam = __webpack_require__(1844);
const matchSegment = (existingSegment, segment)=>{
    // segment is either Array or string
    if (typeof existingSegment === "string") {
        if (typeof segment === "string") {
            // Common case: segment is just a string
            return existingSegment === segment;
        }
        return false;
    }
    if (typeof segment === "string") {
        return false;
    }
    return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
};
const canSegmentBeOverridden = (existingSegment, segment)=>{
    var _getSegmentParam;
    if (Array.isArray(existingSegment) || !Array.isArray(segment)) {
        return false;
    }
    return ((_getSegmentParam = (0, _getsegmentparam.getSegmentParam)(existingSegment)) == null ? void 0 : _getSegmentParam.param) === segment[0];
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=match-segments.js.map


/***/ }),

/***/ 696:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
// useLayoutSegments() // Only the segments for the current place. ['children', 'dashboard', 'children', 'integrations'] -> /dashboard/integrations (/dashboard/layout.js would get ['children', 'dashboard', 'children', 'integrations'])

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    usePathname: function() {
        return usePathname;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtml.ServerInsertedHTMLContext;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtml.useServerInsertedHTML;
    },
    useRouter: function() {
        return useRouter;
    },
    useParams: function() {
        return useParams;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    notFound: function() {
        return _notfound.notFound;
    }
});
const _react = __webpack_require__(8038);
const _approutercontext = __webpack_require__(7085);
const _hooksclientcontext = __webpack_require__(9569);
const _clienthookinservercomponenterror = __webpack_require__(2633);
const _getsegmentvalue = __webpack_require__(7741);
const _serverinsertedhtml = __webpack_require__(9618);
const _redirect = __webpack_require__(2622);
const _notfound = __webpack_require__(5858);
const INTERNAL_URLSEARCHPARAMS_INSTANCE = Symbol("internal for urlsearchparams readonly");
function readonlyURLSearchParamsError() {
    return new Error("ReadonlyURLSearchParams cannot be modified");
}
class ReadonlyURLSearchParams {
    [Symbol.iterator]() {
        return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]();
    }
    append() {
        throw readonlyURLSearchParamsError();
    }
    delete() {
        throw readonlyURLSearchParamsError();
    }
    set() {
        throw readonlyURLSearchParamsError();
    }
    sort() {
        throw readonlyURLSearchParamsError();
    }
    constructor(urlSearchParams){
        this[INTERNAL_URLSEARCHPARAMS_INSTANCE] = urlSearchParams;
        this.entries = urlSearchParams.entries.bind(urlSearchParams);
        this.forEach = urlSearchParams.forEach.bind(urlSearchParams);
        this.get = urlSearchParams.get.bind(urlSearchParams);
        this.getAll = urlSearchParams.getAll.bind(urlSearchParams);
        this.has = urlSearchParams.has.bind(urlSearchParams);
        this.keys = urlSearchParams.keys.bind(urlSearchParams);
        this.values = urlSearchParams.values.bind(urlSearchParams);
        this.toString = urlSearchParams.toString.bind(urlSearchParams);
        this.size = urlSearchParams.size;
    }
}
function useSearchParams() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSearchParams");
    const searchParams = (0, _react.useContext)(_hooksclientcontext.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if (true) {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering } = __webpack_require__(5661);
        if (bailoutToClientRendering()) {
            // TODO-APP: handle dynamic = 'force-static' here and on the client
            return readonlySearchParams;
        }
    }
    return readonlySearchParams;
}
function usePathname() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("usePathname");
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return (0, _react.useContext)(_hooksclientcontext.PathnameContext);
}
function useRouter() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useRouter");
    const router = (0, _react.useContext)(_approutercontext.AppRouterContext);
    if (router === null) {
        throw new Error("invariant expected app router to be mounted");
    }
    return router;
}
// this function performs a depth-first search of the tree to find the selected
// params
function getSelectedParams(tree, params) {
    if (params === void 0) params = {};
    const parallelRoutes = tree[1];
    for (const parallelRoute of Object.values(parallelRoutes)){
        const segment = parallelRoute[0];
        const isDynamicParameter = Array.isArray(segment);
        const segmentValue = isDynamicParameter ? segment[1] : segment;
        if (!segmentValue || segmentValue.startsWith("__PAGE__")) continue;
        // Ensure catchAll and optional catchall are turned into an array
        const isCatchAll = isDynamicParameter && (segment[2] === "c" || segment[2] === "oc");
        if (isCatchAll) {
            params[segment[0]] = segment[1].split("/");
        } else if (isDynamicParameter) {
            params[segment[0]] = segment[1];
        }
        params = getSelectedParams(parallelRoute, params);
    }
    return params;
}
function useParams() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useParams");
    const globalLayoutRouterContext = (0, _react.useContext)(_approutercontext.GlobalLayoutRouterContext);
    if (!globalLayoutRouterContext) {
        // This only happens in `pages`. Type is overwritten in navigation.d.ts
        return null;
    }
    return getSelectedParams(globalLayoutRouterContext.tree);
}
// TODO-APP: handle parallel routes
/**
 * Get the canonical parameters from the current level to the leaf node.
 */ function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
    if (first === void 0) first = true;
    if (segmentPath === void 0) segmentPath = [];
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    const segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
    if (!segmentValue || segmentValue.startsWith("__PAGE__")) return segmentPath;
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSelectedLayoutSegments");
    const { tree } = (0, _react.useContext)(_approutercontext.LayoutRouterContext);
    return getSelectedLayoutSegmentPath(tree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSelectedLayoutSegment");
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (selectedLayoutSegments.length === 0) {
        return null;
    }
    return selectedLayoutSegments[0];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map


/***/ }),

/***/ 6505:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "NotFoundBoundary", ({
    enumerable: true,
    get: function() {
        return NotFoundBoundary;
    }
}));
const _interop_require_default = __webpack_require__(2147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
const _navigation = __webpack_require__(696);
class NotFoundErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((error == null ? void 0 : error.digest) === "NEXT_NOT_FOUND") {
            return {
                notFoundTriggered: true
            };
        }
        // Re-throw if error is not for 404
        throw error;
    }
    static getDerivedStateFromProps(props, state) {
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.notFoundTriggered) {
            return {
                notFoundTriggered: false,
                previousPathname: props.pathname
            };
        }
        return {
            notFoundTriggered: state.notFoundTriggered,
            previousPathname: props.pathname
        };
    }
    render() {
        if (this.state.notFoundTriggered) {
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("meta", {
                name: "robots",
                content: "noindex"
            }),  false && /*#__PURE__*/ 0, this.props.notFoundStyles, this.props.notFound);
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            notFoundTriggered: !!props.asNotFound,
            previousPathname: props.pathname
        };
    }
}
function NotFoundBoundary(param) {
    let { notFound, notFoundStyles, asNotFound, children } = param;
    const pathname = (0, _navigation.usePathname)();
    return notFound ? /*#__PURE__*/ _react.default.createElement(NotFoundErrorBoundary, {
        pathname: pathname,
        notFound: notFound,
        notFoundStyles: notFoundStyles,
        asNotFound: asNotFound
    }, children) : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found-boundary.js.map


/***/ }),

/***/ 5858:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    notFound: function() {
        return notFound;
    },
    isNotFoundError: function() {
        return isNotFoundError;
    }
});
const NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
}
function isNotFoundError(error) {
    return (error == null ? void 0 : error.digest) === NOT_FOUND_ERROR_CODE;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map


/***/ }),

/***/ 8811:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/*
    This is a simple promise queue that allows you to limit the number of concurrent promises
    that are running at any given time. It's used to limit the number of concurrent
    prefetch requests that are being made to the server but could be used for other
    things as well.
*/ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "PromiseQueue", ({
    enumerable: true,
    get: function() {
        return PromiseQueue;
    }
}));
const _class_private_field_loose_base = __webpack_require__(8324);
const _class_private_field_loose_key = __webpack_require__(4567);
var _maxConcurrency = /*#__PURE__*/ _class_private_field_loose_key._("_maxConcurrency"), _runningCount = /*#__PURE__*/ _class_private_field_loose_key._("_runningCount"), _queue = /*#__PURE__*/ _class_private_field_loose_key._("_queue"), _processNext = /*#__PURE__*/ _class_private_field_loose_key._("_processNext");
class PromiseQueue {
    enqueue(promiseFn) {
        let taskResolve;
        let taskReject;
        const taskPromise = new Promise((resolve, reject)=>{
            taskResolve = resolve;
            taskReject = reject;
        });
        const task = async ()=>{
            try {
                _class_private_field_loose_base._(this, _runningCount)[_runningCount]++;
                const result = await promiseFn();
                taskResolve(result);
            } catch (error) {
                taskReject(error);
            } finally{
                _class_private_field_loose_base._(this, _runningCount)[_runningCount]--;
                _class_private_field_loose_base._(this, _processNext)[_processNext]();
            }
        };
        const enqueueResult = {
            promiseFn: taskPromise,
            task
        };
        // wonder if we should take a LIFO approach here
        _class_private_field_loose_base._(this, _queue)[_queue].push(enqueueResult);
        _class_private_field_loose_base._(this, _processNext)[_processNext]();
        return taskPromise;
    }
    bump(promiseFn) {
        const index = _class_private_field_loose_base._(this, _queue)[_queue].findIndex((item)=>item.promiseFn === promiseFn);
        if (index > -1) {
            const bumpedItem = _class_private_field_loose_base._(this, _queue)[_queue].splice(index, 1)[0];
            _class_private_field_loose_base._(this, _queue)[_queue].unshift(bumpedItem);
            _class_private_field_loose_base._(this, _processNext)[_processNext](true);
        }
    }
    constructor(maxConcurrency = 5){
        Object.defineProperty(this, _processNext, {
            value: processNext
        });
        Object.defineProperty(this, _maxConcurrency, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _runningCount, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _queue, {
            writable: true,
            value: void 0
        });
        _class_private_field_loose_base._(this, _maxConcurrency)[_maxConcurrency] = maxConcurrency;
        _class_private_field_loose_base._(this, _runningCount)[_runningCount] = 0;
        _class_private_field_loose_base._(this, _queue)[_queue] = [];
    }
}
function processNext(forced) {
    if (forced === void 0) forced = false;
    if ((_class_private_field_loose_base._(this, _runningCount)[_runningCount] < _class_private_field_loose_base._(this, _maxConcurrency)[_maxConcurrency] || forced) && _class_private_field_loose_base._(this, _queue)[_queue].length > 0) {
        var _class_private_field_loose_base__queue_shift;
        (_class_private_field_loose_base__queue_shift = _class_private_field_loose_base._(this, _queue)[_queue].shift()) == null ? void 0 : _class_private_field_loose_base__queue_shift.task();
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=promise-queue.js.map


/***/ }),

/***/ 1442:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectErrorBoundary: function() {
        return RedirectErrorBoundary;
    },
    RedirectBoundary: function() {
        return RedirectBoundary;
    }
});
const _interop_require_wildcard = __webpack_require__(4009);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(8038));
const _navigation = __webpack_require__(696);
const _redirect = __webpack_require__(2622);
function HandleRedirect(param) {
    let { redirect, reset, redirectType } = param;
    const router = (0, _navigation.useRouter)();
    (0, _react.useEffect)(()=>{
        // @ts-ignore startTransition exists
        _react.default.startTransition(()=>{
            if (redirectType === _redirect.RedirectType.push) {
                router.push(redirect, {});
            } else {
                router.replace(redirect, {});
            }
            reset();
        });
    }, [
        redirect,
        redirectType,
        reset,
        router
    ]);
    return null;
}
class RedirectErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((0, _redirect.isRedirectError)(error)) {
            const url = (0, _redirect.getURLFromRedirectError)(error);
            const redirectType = (0, _redirect.getRedirectTypeFromError)(error);
            return {
                redirect: url,
                redirectType
            };
        }
        // Re-throw if error is not for redirect
        throw error;
    }
    render() {
        const { redirect, redirectType } = this.state;
        if (redirect !== null && redirectType !== null) {
            return /*#__PURE__*/ _react.default.createElement(HandleRedirect, {
                redirect: redirect,
                redirectType: redirectType,
                reset: ()=>this.setState({
                        redirect: null
                    })
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            redirect: null,
            redirectType: null
        };
    }
}
function RedirectBoundary(param) {
    let { children } = param;
    const router = (0, _navigation.useRouter)();
    return /*#__PURE__*/ _react.default.createElement(RedirectErrorBoundary, {
        router: router
    }, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-boundary.js.map


/***/ }),

/***/ 2622:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectType: function() {
        return RedirectType;
    },
    getRedirectError: function() {
        return getRedirectError;
    },
    redirect: function() {
        return redirect;
    },
    isRedirectError: function() {
        return isRedirectError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    }
});
const _requestasyncstorage = __webpack_require__(1715);
const REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
var RedirectType;
(function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
})(RedirectType || (RedirectType = {}));
function getRedirectError(url, type) {
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = REDIRECT_ERROR_CODE + ";" + type + ";" + url;
    const requestStore = _requestasyncstorage.requestAsyncStorage.getStore();
    if (requestStore) {
        error.mutableCookies = requestStore.mutableCookies;
    }
    return error;
}
function redirect(url, type) {
    if (type === void 0) type = "replace";
    throw getRedirectError(url, type);
}
function isRedirectError(error) {
    if (typeof (error == null ? void 0 : error.digest) !== "string") return false;
    const [errorCode, type, destination] = error.digest.split(";", 3);
    return errorCode === REDIRECT_ERROR_CODE && (type === "replace" || type === "push") && typeof destination === "string";
}
function getURLFromRedirectError(error) {
    if (!isRedirectError(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(";", 3)[2];
}
function getRedirectTypeFromError(error) {
    if (!isRedirectError(error)) {
        throw new Error("Not a redirect error");
    }
    return error.digest.split(";", 3)[1];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map


/***/ }),

/***/ 6926:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return RenderFromTemplateContext;
    }
}));
const _interop_require_wildcard = __webpack_require__(4009);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(8038));
const _approutercontext = __webpack_require__(7085);
function RenderFromTemplateContext() {
    const children = (0, _react.useContext)(_approutercontext.TemplateContext);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=render-from-template-context.js.map


/***/ }),

/***/ 4173:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "applyFlightData", ({
    enumerable: true,
    get: function() {
        return applyFlightData;
    }
}));
const _approutercontext = __webpack_require__(7085);
const _filllazyitemstillleafwithhead = __webpack_require__(2684);
const _fillcachewithnewsubtreedata = __webpack_require__(8921);
function applyFlightData(existingCache, cache, flightDataPath, wasPrefetched) {
    if (wasPrefetched === void 0) wasPrefetched = false;
    // The one before last item is the router state tree patch
    const [treePatch, subTreeData, head] = flightDataPath.slice(-3);
    // Handles case where prefetch only returns the router tree patch without rendered components.
    if (subTreeData === null) {
        return false;
    }
    if (flightDataPath.length === 3) {
        cache.status = _approutercontext.CacheStates.READY;
        cache.subTreeData = subTreeData;
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, existingCache, treePatch, head, wasPrefetched);
    } else {
        // Copy subTreeData for the root node of the cache.
        cache.status = _approutercontext.CacheStates.READY;
        cache.subTreeData = existingCache.subTreeData;
        cache.parallelRoutes = new Map(existingCache.parallelRoutes);
        // Create a copy of the existing cache with the subTreeData applied.
        (0, _fillcachewithnewsubtreedata.fillCacheWithNewSubTreeData)(cache, existingCache, flightDataPath, wasPrefetched);
    }
    return true;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-flight-data.js.map


/***/ }),

/***/ 3914:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "applyRouterStatePatchToTree", ({
    enumerable: true,
    get: function() {
        return applyRouterStatePatchToTree;
    }
}));
const _matchsegments = __webpack_require__(7618);
/**
 * Deep merge of the two router states. Parallel route keys are preserved if the patch doesn't have them.
 */ function applyPatch(initialTree, patchTree) {
    const [initialSegment, initialParallelRoutes] = initialTree;
    const [patchSegment, patchParallelRoutes] = patchTree;
    // if the applied patch segment is __DEFAULT__ then we can ignore it and return the initial tree
    // this is because the __DEFAULT__ segment is used as a placeholder on navigation
    if (patchSegment === "__DEFAULT__" && initialSegment !== "__DEFAULT__") {
        return initialTree;
    }
    if ((0, _matchsegments.matchSegment)(initialSegment, patchSegment)) {
        const newParallelRoutes = {};
        for(const key in initialParallelRoutes){
            const isInPatchTreeParallelRoutes = typeof patchParallelRoutes[key] !== "undefined";
            if (isInPatchTreeParallelRoutes) {
                newParallelRoutes[key] = applyPatch(initialParallelRoutes[key], patchParallelRoutes[key]);
            } else {
                newParallelRoutes[key] = initialParallelRoutes[key];
            }
        }
        for(const key in patchParallelRoutes){
            if (newParallelRoutes[key]) {
                continue;
            }
            newParallelRoutes[key] = patchParallelRoutes[key];
        }
        const tree = [
            initialSegment,
            newParallelRoutes
        ];
        if (initialTree[2]) {
            tree[2] = initialTree[2];
        }
        if (initialTree[3]) {
            tree[3] = initialTree[3];
        }
        if (initialTree[4]) {
            tree[4] = initialTree[4];
        }
        return tree;
    }
    return patchTree;
}
function applyRouterStatePatchToTree(flightSegmentPath, flightRouterState, treePatch) {
    const [segment, parallelRoutes, , , isRootLayout] = flightRouterState;
    // Root refresh
    if (flightSegmentPath.length === 1) {
        const tree = applyPatch(flightRouterState, treePatch);
        return tree;
    }
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Tree path returned from the server should always match up with the current tree in the browser
    if (!(0, _matchsegments.matchSegment)(currentSegment, segment)) {
        return null;
    }
    const lastSegment = flightSegmentPath.length === 2;
    let parallelRoutePatch;
    if (lastSegment) {
        parallelRoutePatch = applyPatch(parallelRoutes[parallelRouteKey], treePatch);
    } else {
        parallelRoutePatch = applyRouterStatePatchToTree(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey], treePatch);
        if (parallelRoutePatch === null) {
            return null;
        }
    }
    const tree = [
        flightSegmentPath[0],
        {
            ...parallelRoutes,
            [parallelRouteKey]: parallelRoutePatch
        }
    ];
    // Current segment is the root layout
    if (isRootLayout) {
        tree[4] = true;
    }
    return tree;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-router-state-patch-to-tree.js.map


/***/ }),

/***/ 9089:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    extractPathFromFlightRouterState: function() {
        return extractPathFromFlightRouterState;
    },
    computeChangedPath: function() {
        return computeChangedPath;
    }
});
const _interceptionroutes = __webpack_require__(6624);
const _matchsegments = __webpack_require__(7618);
const segmentToPathname = (segment)=>{
    if (typeof segment === "string") {
        return segment;
    }
    return segment[1];
};
function normalizePathname(pathname) {
    return pathname.split("/").reduce((acc, segment)=>{
        if (segment === "" || segment.startsWith("(") && segment.endsWith(")")) {
            return acc;
        }
        return acc + "/" + segment;
    }, "") || "/";
}
function extractPathFromFlightRouterState(flightRouterState) {
    const segment = Array.isArray(flightRouterState[0]) ? flightRouterState[0][1] : flightRouterState[0];
    if (segment === "__DEFAULT__" || _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m))) return undefined;
    if (segment.startsWith("__PAGE__")) return "";
    const path = [
        segment
    ];
    var _flightRouterState_;
    const parallelRoutes = (_flightRouterState_ = flightRouterState[1]) != null ? _flightRouterState_ : {};
    const childrenPath = parallelRoutes.children ? extractPathFromFlightRouterState(parallelRoutes.children) : undefined;
    if (childrenPath !== undefined) {
        path.push(childrenPath);
    } else {
        for (const [key, value] of Object.entries(parallelRoutes)){
            if (key === "children") continue;
            const childPath = extractPathFromFlightRouterState(value);
            if (childPath !== undefined) {
                path.push(childPath);
            }
        }
    }
    // TODO-APP: optimise this, it's not ideal to join and split
    return normalizePathname(path.join("/"));
}
function computeChangedPathImpl(treeA, treeB) {
    const [segmentA, parallelRoutesA] = treeA;
    const [segmentB, parallelRoutesB] = treeB;
    const normalizedSegmentA = segmentToPathname(segmentA);
    const normalizedSegmentB = segmentToPathname(segmentB);
    if (_interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>normalizedSegmentA.startsWith(m) || normalizedSegmentB.startsWith(m))) {
        return "";
    }
    if (!(0, _matchsegments.matchSegment)(segmentA, segmentB)) {
        var _extractPathFromFlightRouterState;
        // once we find where the tree changed, we compute the rest of the path by traversing the tree
        return (_extractPathFromFlightRouterState = extractPathFromFlightRouterState(treeB)) != null ? _extractPathFromFlightRouterState : "";
    }
    for(const parallelRouterKey in parallelRoutesA){
        if (parallelRoutesB[parallelRouterKey]) {
            const changedPath = computeChangedPathImpl(parallelRoutesA[parallelRouterKey], parallelRoutesB[parallelRouterKey]);
            if (changedPath !== null) {
                return segmentToPathname(segmentB) + "/" + changedPath;
            }
        }
    }
    return null;
}
function computeChangedPath(treeA, treeB) {
    const changedPath = computeChangedPathImpl(treeA, treeB);
    if (changedPath == null || changedPath === "/") {
        return changedPath;
    }
    // lightweight normalization to remove route groups
    return normalizePathname(changedPath);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=compute-changed-path.js.map


/***/ }),

/***/ 4331:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createHrefFromUrl", ({
    enumerable: true,
    get: function() {
        return createHrefFromUrl;
    }
}));
function createHrefFromUrl(url, includeHash) {
    if (includeHash === void 0) includeHash = true;
    return url.pathname + url.search + (includeHash ? url.hash : "");
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-href-from-url.js.map


/***/ }),

/***/ 1684:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createInitialRouterState", ({
    enumerable: true,
    get: function() {
        return createInitialRouterState;
    }
}));
const _approutercontext = __webpack_require__(7085);
const _createhreffromurl = __webpack_require__(4331);
const _filllazyitemstillleafwithhead = __webpack_require__(2684);
const _computechangedpath = __webpack_require__(9089);
function createInitialRouterState(param) {
    let { buildId, initialTree, children, initialCanonicalUrl, initialParallelRoutes, isServer, location, initialHead } = param;
    const cache = {
        status: _approutercontext.CacheStates.READY,
        data: null,
        subTreeData: children,
        // The cache gets seeded during the first render. `initialParallelRoutes` ensures the cache from the first render is there during the second render.
        parallelRoutes: isServer ? new Map() : initialParallelRoutes
    };
    // When the cache hasn't been seeded yet we fill the cache with the head.
    if (initialParallelRoutes === null || initialParallelRoutes.size === 0) {
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, initialTree, initialHead);
    }
    var _ref;
    return {
        buildId,
        tree: initialTree,
        cache,
        prefetchCache: new Map(),
        pushRef: {
            pendingPush: false,
            mpaNavigation: false
        },
        focusAndScrollRef: {
            apply: false,
            onlyHashChange: false,
            hashFragment: null,
            segmentPaths: []
        },
        canonicalUrl: // This is safe to do as canonicalUrl can't be rendered, it's only used to control the history updates in the useEffect further down in this file.
        location ? (0, _createhreffromurl.createHrefFromUrl)(location) : initialCanonicalUrl,
        nextUrl: (_ref = (0, _computechangedpath.extractPathFromFlightRouterState)(initialTree) || (location == null ? void 0 : location.pathname)) != null ? _ref : null
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-initial-router-state.js.map


/***/ }),

/***/ 8503:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createOptimisticTree", ({
    enumerable: true,
    get: function() {
        return createOptimisticTree;
    }
}));
const _matchsegments = __webpack_require__(7618);
function createOptimisticTree(segments, flightRouterState, parentRefetch) {
    const [existingSegment, existingParallelRoutes, url, refresh, isRootLayout] = flightRouterState || [
        null,
        {}
    ];
    const segment = segments[0];
    const isLastSegment = segments.length === 1;
    const segmentMatches = existingSegment !== null && (0, _matchsegments.matchSegment)(existingSegment, segment);
    // if there are multiple parallel routes at this level, we need to refetch here
    // to ensure we get the correct tree. This is because we don't know which
    // parallel route will match the next segment.
    const hasMultipleParallelRoutes = Object.keys(existingParallelRoutes).length > 1;
    const shouldRefetchThisLevel = !flightRouterState || !segmentMatches || hasMultipleParallelRoutes;
    let parallelRoutes = {};
    if (existingSegment !== null && segmentMatches) {
        parallelRoutes = existingParallelRoutes;
    }
    let childTree;
    // if there's multiple parallel routes at this level, we shouldn't create an
    // optimistic tree for the next level because we don't know which one will
    // match the next segment.
    if (!isLastSegment && !hasMultipleParallelRoutes) {
        const childItem = createOptimisticTree(segments.slice(1), parallelRoutes ? parallelRoutes.children : null, parentRefetch || shouldRefetchThisLevel);
        childTree = childItem;
    }
    const result = [
        segment,
        {
            ...parallelRoutes,
            ...childTree ? {
                children: childTree
            } : {}
        }
    ];
    if (url) {
        result[2] = url;
    }
    if (!parentRefetch && shouldRefetchThisLevel) {
        result[3] = "refetch";
    } else if (segmentMatches && refresh) {
        result[3] = refresh;
    }
    if (segmentMatches && isRootLayout) {
        result[4] = isRootLayout;
    }
    return result;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-optimistic-tree.js.map


/***/ }),

/***/ 4621:
/***/ ((module, exports) => {

"use strict";
/**
 * Create data fetching record for Promise.
 */ // TODO-APP: change `any` to type inference.

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createRecordFromThenable", ({
    enumerable: true,
    get: function() {
        return createRecordFromThenable;
    }
}));
function createRecordFromThenable(thenable) {
    thenable.status = "pending";
    thenable.then((value)=>{
        if (thenable.status === "pending") {
            thenable.status = "fulfilled";
            thenable.value = value;
        }
    }, (err)=>{
        if (thenable.status === "pending") {
            thenable.status = "rejected";
            thenable.value = err;
        }
    });
    return thenable;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-record-from-thenable.js.map


/***/ }),

/***/ 8870:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createRouterCacheKey", ({
    enumerable: true,
    get: function() {
        return createRouterCacheKey;
    }
}));
function createRouterCacheKey(segment, withoutSearchParameters) {
    if (withoutSearchParameters === void 0) withoutSearchParameters = false;
    return Array.isArray(segment) ? segment[0] + "|" + segment[1] + "|" + segment[2] : withoutSearchParameters && segment.startsWith("__PAGE__") ? "__PAGE__" : segment;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-router-cache-key.js.map


/***/ }),

/***/ 8080:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fetchServerResponse", ({
    enumerable: true,
    get: function() {
        return fetchServerResponse;
    }
}));
const _client = __webpack_require__(7897);
const _approuterheaders = __webpack_require__(6265);
const _approuter = __webpack_require__(2987);
const _appcallserver = __webpack_require__(6937);
const _routerreducertypes = __webpack_require__(2836);
const _hash = __webpack_require__(199);
function doMpaNavigation(url) {
    return [
        (0, _approuter.urlToUrlWithoutFlightMarker)(url).toString(),
        undefined
    ];
}
async function fetchServerResponse(url, flightRouterState, nextUrl, currentBuildId, prefetchKind) {
    const headers = {
        // Enable flight response
        [_approuterheaders.RSC]: "1",
        // Provide the current router state
        [_approuterheaders.NEXT_ROUTER_STATE_TREE]: encodeURIComponent(JSON.stringify(flightRouterState))
    };
    /**
   * Three cases:
   * - `prefetchKind` is `undefined`, it means it's a normal navigation, so we want to prefetch the page data fully
   * - `prefetchKind` is `full` - we want to prefetch the whole page so same as above
   * - `prefetchKind` is `auto` - if the page is dynamic, prefetch the page data partially, if static prefetch the page data fully
   */ if (prefetchKind === _routerreducertypes.PrefetchKind.AUTO) {
        headers[_approuterheaders.NEXT_ROUTER_PREFETCH] = "1";
    }
    if (nextUrl) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    const uniqueCacheQuery = (0, _hash.hexHash)([
        headers[_approuterheaders.NEXT_ROUTER_PREFETCH] || "0",
        headers[_approuterheaders.NEXT_ROUTER_STATE_TREE],
        headers[_approuterheaders.NEXT_URL]
    ].join(","));
    try {
        let fetchUrl = new URL(url);
        if (true) {
            if (false) {}
        }
        // Add unique cache query to avoid caching conflicts on CDN which don't respect to Vary header
        fetchUrl.searchParams.set(_approuterheaders.NEXT_RSC_UNION_QUERY, uniqueCacheQuery);
        const res = await fetch(fetchUrl, {
            // Backwards compat for older browsers. `same-origin` is the default in modern browsers.
            credentials: "same-origin",
            headers
        });
        const responseUrl = (0, _approuter.urlToUrlWithoutFlightMarker)(res.url);
        const canonicalUrl = res.redirected ? responseUrl : undefined;
        const contentType = res.headers.get("content-type") || "";
        let isFlightResponse = contentType === _approuterheaders.RSC_CONTENT_TYPE_HEADER;
        if (true) {
            if (false) {}
        }
        // If fetch returns something different than flight response handle it like a mpa navigation
        // If the fetch was not 200, we also handle it like a mpa navigation
        if (!isFlightResponse || !res.ok) {
            return doMpaNavigation(responseUrl.toString());
        }
        // Handle the `fetch` readable stream that can be unwrapped by `React.use`.
        const [buildId, flightData] = await (0, _client.createFromFetch)(Promise.resolve(res), {
            callServer: _appcallserver.callServer
        });
        if (currentBuildId !== buildId) {
            return doMpaNavigation(res.url);
        }
        return [
            flightData,
            canonicalUrl
        ];
    } catch (err) {
        console.error("Failed to fetch RSC payload. Falling back to browser navigation.", err);
        // If fetch fails handle it like a mpa navigation
        // TODO-APP: Add a test for the case where a CORS request fails, e.g. external url redirect coming from the response.
        // See https://github.com/vercel/next.js/issues/43605#issuecomment-1451617521 for a reproduction.
        return [
            url.toString(),
            undefined
        ];
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fetch-server-response.js.map


/***/ }),

/***/ 9996:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fillCacheWithDataProperty", ({
    enumerable: true,
    get: function() {
        return fillCacheWithDataProperty;
    }
}));
const _approutercontext = __webpack_require__(7085);
const _createroutercachekey = __webpack_require__(8870);
function fillCacheWithDataProperty(newCache, existingCache, flightSegmentPath, fetchResponse, bailOnParallelRoutes) {
    if (bailOnParallelRoutes === void 0) bailOnParallelRoutes = false;
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap || bailOnParallelRoutes && existingCache.parallelRoutes.size > 1) {
        // Bailout because the existing cache does not have the path to the leaf node
        // or the existing cache has multiple parallel routes
        // Will trigger lazy fetch in layout-router because of missing segment
        return {
            bailOptimistic: true
        };
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    // In case of last segment start off the fetch at this level and don't copy further down.
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childSegmentMap.set(cacheKey, {
                status: _approutercontext.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Start fetch in the place where the existing cache doesn't have the data yet.
        if (!childCacheNode) {
            childSegmentMap.set(cacheKey, {
                status: _approutercontext.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    return fillCacheWithDataProperty(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2), fetchResponse);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-cache-with-data-property.js.map


/***/ }),

/***/ 8921:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fillCacheWithNewSubTreeData", ({
    enumerable: true,
    get: function() {
        return fillCacheWithNewSubTreeData;
    }
}));
const _approutercontext = __webpack_require__(7085);
const _invalidatecachebyrouterstate = __webpack_require__(1727);
const _filllazyitemstillleafwithhead = __webpack_require__(2684);
const _createroutercachekey = __webpack_require__(8870);
function fillCacheWithNewSubTreeData(newCache, existingCache, flightDataPath, wasPrefetched) {
    const isLastEntry = flightDataPath.length <= 5;
    const [parallelRouteKey, segment] = flightDataPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childCacheNode = {
                status: _approutercontext.CacheStates.READY,
                data: null,
                subTreeData: flightDataPath[3],
                // Ensure segments other than the one we got data for are preserved.
                parallelRoutes: existingChildCacheNode ? new Map(existingChildCacheNode.parallelRoutes) : new Map()
            };
            if (existingChildCacheNode) {
                (0, _invalidatecachebyrouterstate.invalidateCacheByRouterState)(childCacheNode, existingChildCacheNode, flightDataPath[2]);
            }
            (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(childCacheNode, existingChildCacheNode, flightDataPath[2], flightDataPath[4], wasPrefetched);
            childSegmentMap.set(cacheKey, childCacheNode);
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    fillCacheWithNewSubTreeData(childCacheNode, existingChildCacheNode, flightDataPath.slice(2), wasPrefetched);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-cache-with-new-subtree-data.js.map


/***/ }),

/***/ 2684:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fillLazyItemsTillLeafWithHead", ({
    enumerable: true,
    get: function() {
        return fillLazyItemsTillLeafWithHead;
    }
}));
const _approutercontext = __webpack_require__(7085);
const _createroutercachekey = __webpack_require__(8870);
function fillLazyItemsTillLeafWithHead(newCache, existingCache, routerState, head, wasPrefetched) {
    const isLastSegment = Object.keys(routerState[1]).length === 0;
    if (isLastSegment) {
        newCache.head = head;
        return;
    }
    // Remove segment that we got data for so that it is filled in during rendering of subTreeData.
    for(const key in routerState[1]){
        const parallelRouteState = routerState[1][key];
        const segmentForParallelRoute = parallelRouteState[0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        if (existingCache) {
            const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
            if (existingParallelRoutesCacheNode) {
                let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
                const existingCacheNode = parallelRouteCacheNode.get(cacheKey);
                const newCacheNode = wasPrefetched && existingCacheNode ? {
                    status: existingCacheNode.status,
                    data: existingCacheNode.data,
                    subTreeData: existingCacheNode.subTreeData,
                    parallelRoutes: new Map(existingCacheNode.parallelRoutes)
                } : {
                    status: _approutercontext.CacheStates.LAZY_INITIALIZED,
                    data: null,
                    subTreeData: null,
                    parallelRoutes: new Map(existingCacheNode == null ? void 0 : existingCacheNode.parallelRoutes)
                };
                // Overrides the cache key with the new cache node.
                parallelRouteCacheNode.set(cacheKey, newCacheNode);
                // Traverse deeper to apply the head / fill lazy items till the head.
                fillLazyItemsTillLeafWithHead(newCacheNode, existingCacheNode, parallelRouteState, head, wasPrefetched);
                newCache.parallelRoutes.set(key, parallelRouteCacheNode);
                continue;
            }
        }
        const newCacheNode = {
            status: _approutercontext.CacheStates.LAZY_INITIALIZED,
            data: null,
            subTreeData: null,
            parallelRoutes: new Map()
        };
        const existingParallelRoutes = newCache.parallelRoutes.get(key);
        if (existingParallelRoutes) {
            existingParallelRoutes.set(cacheKey, newCacheNode);
        } else {
            newCache.parallelRoutes.set(key, new Map([
                [
                    cacheKey,
                    newCacheNode
                ]
            ]));
        }
        fillLazyItemsTillLeafWithHead(newCacheNode, undefined, parallelRouteState, head, wasPrefetched);
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-lazy-items-till-leaf-with-head.js.map


/***/ }),

/***/ 6489:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PrefetchCacheEntryStatus: function() {
        return PrefetchCacheEntryStatus;
    },
    getPrefetchEntryCacheStatus: function() {
        return getPrefetchEntryCacheStatus;
    }
});
const FIVE_MINUTES = 5 * 60 * 1000;
const THIRTY_SECONDS = 30 * 1000;
var PrefetchCacheEntryStatus;
(function(PrefetchCacheEntryStatus) {
    PrefetchCacheEntryStatus["fresh"] = "fresh";
    PrefetchCacheEntryStatus["reusable"] = "reusable";
    PrefetchCacheEntryStatus["expired"] = "expired";
    PrefetchCacheEntryStatus["stale"] = "stale";
})(PrefetchCacheEntryStatus || (PrefetchCacheEntryStatus = {}));
function getPrefetchEntryCacheStatus(param) {
    let { kind, prefetchTime, lastUsedTime } = param;
    // if the cache entry was prefetched or read less than 30s ago, then we want to re-use it
    if (Date.now() < (lastUsedTime != null ? lastUsedTime : prefetchTime) + THIRTY_SECONDS) {
        return lastUsedTime ? "reusable" : "fresh";
    }
    // if the cache entry was prefetched less than 5 mins ago, then we want to re-use only the loading state
    if (kind === "auto") {
        if (Date.now() < prefetchTime + FIVE_MINUTES) {
            return "stale";
        }
    }
    // if the cache entry was prefetched less than 5 mins ago and was a "full" prefetch, then we want to re-use it "full
    if (kind === "full") {
        if (Date.now() < prefetchTime + FIVE_MINUTES) {
            return "reusable";
        }
    }
    return "expired";
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-prefetch-cache-entry-status.js.map


/***/ }),

/***/ 7462:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "handleMutable", ({
    enumerable: true,
    get: function() {
        return handleMutable;
    }
}));
const _computechangedpath = __webpack_require__(9089);
function handleMutable(state, mutable) {
    var _mutable_canonicalUrl;
    var _mutable_shouldScroll;
    // shouldScroll is true by default, can override to false.
    const shouldScroll = (_mutable_shouldScroll = mutable.shouldScroll) != null ? _mutable_shouldScroll : true;
    var _mutable_scrollableSegments, _computeChangedPath;
    return {
        buildId: state.buildId,
        // Set href.
        canonicalUrl: mutable.canonicalUrl != null ? mutable.canonicalUrl === state.canonicalUrl ? state.canonicalUrl : mutable.canonicalUrl : state.canonicalUrl,
        pushRef: {
            pendingPush: mutable.pendingPush != null ? mutable.pendingPush : state.pushRef.pendingPush,
            mpaNavigation: mutable.mpaNavigation != null ? mutable.mpaNavigation : state.pushRef.mpaNavigation
        },
        // All navigation requires scroll and focus management to trigger.
        focusAndScrollRef: {
            apply: shouldScroll ? (mutable == null ? void 0 : mutable.scrollableSegments) !== undefined ? true : state.focusAndScrollRef.apply : false,
            onlyHashChange: !!mutable.hashFragment && state.canonicalUrl.split("#")[0] === ((_mutable_canonicalUrl = mutable.canonicalUrl) == null ? void 0 : _mutable_canonicalUrl.split("#")[0]),
            hashFragment: shouldScroll ? mutable.hashFragment && mutable.hashFragment !== "" ? decodeURIComponent(mutable.hashFragment.slice(1)) : state.focusAndScrollRef.hashFragment : null,
            segmentPaths: shouldScroll ? (_mutable_scrollableSegments = mutable == null ? void 0 : mutable.scrollableSegments) != null ? _mutable_scrollableSegments : state.focusAndScrollRef.segmentPaths : []
        },
        // Apply cache.
        cache: mutable.cache ? mutable.cache : state.cache,
        prefetchCache: mutable.prefetchCache ? mutable.prefetchCache : state.prefetchCache,
        // Apply patched router state.
        tree: mutable.patchedTree !== undefined ? mutable.patchedTree : state.tree,
        nextUrl: mutable.patchedTree !== undefined ? (_computeChangedPath = (0, _computechangedpath.computeChangedPath)(state.tree, mutable.patchedTree)) != null ? _computeChangedPath : state.canonicalUrl : state.nextUrl
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-mutable.js.map


/***/ }),

/***/ 8457:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "invalidateCacheBelowFlightSegmentPath", ({
    enumerable: true,
    get: function() {
        return invalidateCacheBelowFlightSegmentPath;
    }
}));
const _createroutercachekey = __webpack_require__(8870);
function invalidateCacheBelowFlightSegmentPath(newCache, existingCache, flightSegmentPath) {
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    // In case of last entry don't copy further down.
    if (isLastEntry) {
        childSegmentMap.delete(cacheKey);
        return;
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    invalidateCacheBelowFlightSegmentPath(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-below-flight-segmentpath.js.map


/***/ }),

/***/ 1727:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "invalidateCacheByRouterState", ({
    enumerable: true,
    get: function() {
        return invalidateCacheByRouterState;
    }
}));
const _createroutercachekey = __webpack_require__(8870);
function invalidateCacheByRouterState(newCache, existingCache, routerState) {
    // Remove segment that we got data for so that it is filled in during rendering of subTreeData.
    for(const key in routerState[1]){
        const segmentForParallelRoute = routerState[1][key][0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
        if (existingParallelRoutesCacheNode) {
            let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
            parallelRouteCacheNode.delete(cacheKey);
            newCache.parallelRoutes.set(key, parallelRouteCacheNode);
        }
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-by-router-state.js.map


/***/ }),

/***/ 2615:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isNavigatingToNewRootLayout", ({
    enumerable: true,
    get: function() {
        return isNavigatingToNewRootLayout;
    }
}));
function isNavigatingToNewRootLayout(currentTree, nextTree) {
    // Compare segments
    const currentTreeSegment = currentTree[0];
    const nextTreeSegment = nextTree[0];
    // If any segment is different before we find the root layout, the root layout has changed.
    // E.g. /same/(group1)/layout.js -> /same/(group2)/layout.js
    // First segment is 'same' for both, keep looking. (group1) changed to (group2) before the root layout was found, it must have changed.
    if (Array.isArray(currentTreeSegment) && Array.isArray(nextTreeSegment)) {
        // Compare dynamic param name and type but ignore the value, different values would not affect the current root layout
        // /[name] - /slug1 and /slug2, both values (slug1 & slug2) still has the same layout /[name]/layout.js
        if (currentTreeSegment[0] !== nextTreeSegment[0] || currentTreeSegment[2] !== nextTreeSegment[2]) {
            return true;
        }
    } else if (currentTreeSegment !== nextTreeSegment) {
        return true;
    }
    // Current tree root layout found
    if (currentTree[4]) {
        // If the next tree doesn't have the root layout flag, it must have changed.
        return !nextTree[4];
    }
    // Current tree  didn't have its root layout here, must have changed.
    if (nextTree[4]) {
        return true;
    }
    // We can't assume it's `parallelRoutes.children` here in case the root layout is `app/@something/layout.js`
    // But it's not possible to be more than one parallelRoutes before the root layout is found
    // TODO-APP: change to traverse all parallel routes
    const currentTreeChild = Object.values(currentTree[1])[0];
    const nextTreeChild = Object.values(nextTree[1])[0];
    if (!currentTreeChild || !nextTreeChild) return true;
    return isNavigatingToNewRootLayout(currentTreeChild, nextTreeChild);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-navigating-to-new-root-layout.js.map


/***/ }),

/***/ 2401:
/***/ ((module, exports) => {

"use strict";
/**
 * Read record value or throw Promise if it's not resolved yet.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "readRecordValue", ({
    enumerable: true,
    get: function() {
        return readRecordValue;
    }
}));
function readRecordValue(thenable) {
    // @ts-expect-error TODO: fix type
    if (thenable.status === "fulfilled") {
        // @ts-expect-error TODO: fix type
        return thenable.value;
    } else {
        throw thenable;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=read-record-value.js.map


/***/ }),

/***/ 4838:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fastRefreshReducer", ({
    enumerable: true,
    get: function() {
        return fastRefreshReducer;
    }
}));
const _fetchserverresponse = __webpack_require__(8080);
const _createrecordfromthenable = __webpack_require__(4621);
const _readrecordvalue = __webpack_require__(2401);
const _createhreffromurl = __webpack_require__(4331);
const _applyrouterstatepatchtotree = __webpack_require__(3914);
const _isnavigatingtonewrootlayout = __webpack_require__(2615);
const _navigatereducer = __webpack_require__(9962);
const _handlemutable = __webpack_require__(7462);
const _applyflightdata = __webpack_require__(4173);
// A version of refresh reducer that keeps the cache around instead of wiping all of it.
function fastRefreshReducerImpl(state, action) {
    const { cache, mutable, origin } = action;
    const href = state.canonicalUrl;
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    if (!cache.data) {
        // TODO-APP: verify that `href` is not an external url.
        // Fetch data from the root of the tree.
        cache.data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(new URL(href, origin), [
            state.tree[0],
            state.tree[1],
            state.tree[2],
            "refetch"
        ], state.nextUrl, state.buildId));
    }
    const [flightData, canonicalUrlOverride] = (0, _readrecordvalue.readRecordValue)(cache.data);
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
    }
    // Remove cache.data as it has been resolved at this point.
    cache.data = null;
    let currentTree = state.tree;
    let currentCache = state.cache;
    for (const flightDataPath of flightData){
        // FlightDataPath with more than two items means unexpected Flight data was returned
        if (flightDataPath.length !== 3) {
            // TODO-APP: handle this case better
            console.log("REFRESH FAILED");
            return state;
        }
        // Given the path can only have two items the items are only the router state and subTreeData for the root.
        const [treePatch] = flightDataPath;
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            ""
        ], currentTree, treePatch);
        if (newTree === null) {
            throw new Error("SEGMENT MISMATCH");
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
        }
        const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : undefined;
        if (canonicalUrlOverride) {
            mutable.canonicalUrl = canonicalUrlOverrideHref;
        }
        const applied = (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath);
        if (applied) {
            mutable.cache = cache;
            currentCache = cache;
        }
        mutable.previousTree = currentTree;
        mutable.patchedTree = newTree;
        mutable.canonicalUrl = href;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
function fastRefreshReducerNoop(state, _action) {
    return state;
}
const fastRefreshReducer =  true ? fastRefreshReducerNoop : 0;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fast-refresh-reducer.js.map


/***/ }),

/***/ 1333:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "findHeadInCache", ({
    enumerable: true,
    get: function() {
        return findHeadInCache;
    }
}));
const _createroutercachekey = __webpack_require__(8870);
function findHeadInCache(cache, parallelRoutes) {
    const isLastItem = Object.keys(parallelRoutes).length === 0;
    if (isLastItem) {
        return cache.head;
    }
    for(const key in parallelRoutes){
        const [segment, childParallelRoutes] = parallelRoutes[key];
        const childSegmentMap = cache.parallelRoutes.get(key);
        if (!childSegmentMap) {
            continue;
        }
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
        const cacheNode = childSegmentMap.get(cacheKey);
        if (!cacheNode) {
            continue;
        }
        const item = findHeadInCache(cacheNode, childParallelRoutes);
        if (item) {
            return item;
        }
    }
    return undefined;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=find-head-in-cache.js.map


/***/ }),

/***/ 7741:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getSegmentValue", ({
    enumerable: true,
    get: function() {
        return getSegmentValue;
    }
}));
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-segment-value.js.map


/***/ }),

/***/ 9962:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    handleExternalUrl: function() {
        return handleExternalUrl;
    },
    navigateReducer: function() {
        return navigateReducer;
    }
});
const _approutercontext = __webpack_require__(7085);
const _fetchserverresponse = __webpack_require__(8080);
const _createrecordfromthenable = __webpack_require__(4621);
const _readrecordvalue = __webpack_require__(2401);
const _createhreffromurl = __webpack_require__(4331);
const _invalidatecachebelowflightsegmentpath = __webpack_require__(8457);
const _fillcachewithdataproperty = __webpack_require__(9996);
const _createoptimistictree = __webpack_require__(8503);
const _applyrouterstatepatchtotree = __webpack_require__(3914);
const _shouldhardnavigate = __webpack_require__(8072);
const _isnavigatingtonewrootlayout = __webpack_require__(2615);
const _routerreducertypes = __webpack_require__(2836);
const _handlemutable = __webpack_require__(7462);
const _applyflightdata = __webpack_require__(4173);
const _getprefetchcacheentrystatus = __webpack_require__(6489);
const _pruneprefetchcache = __webpack_require__(7025);
const _prefetchreducer = __webpack_require__(1910);
function handleExternalUrl(state, mutable, url, pendingPush) {
    mutable.previousTree = state.tree;
    mutable.mpaNavigation = true;
    mutable.canonicalUrl = url;
    mutable.pendingPush = pendingPush;
    mutable.scrollableSegments = undefined;
    return (0, _handlemutable.handleMutable)(state, mutable);
}
function generateSegmentsFromPatch(flightRouterPatch) {
    const segments = [];
    const [segment, parallelRoutes] = flightRouterPatch;
    if (Object.keys(parallelRoutes).length === 0) {
        return [
            [
                segment
            ]
        ];
    }
    for (const [parallelRouteKey, parallelRoute] of Object.entries(parallelRoutes)){
        for (const childSegment of generateSegmentsFromPatch(parallelRoute)){
            // If the segment is empty, it means we are at the root of the tree
            if (segment === "") {
                segments.push([
                    parallelRouteKey,
                    ...childSegment
                ]);
            } else {
                segments.push([
                    segment,
                    parallelRouteKey,
                    ...childSegment
                ]);
            }
        }
    }
    return segments;
}
function addRefetchToLeafSegments(newCache, currentCache, flightSegmentPath, treePatch, data) {
    let appliedPatch = false;
    newCache.status = _approutercontext.CacheStates.READY;
    newCache.subTreeData = currentCache.subTreeData;
    newCache.parallelRoutes = new Map(currentCache.parallelRoutes);
    const segmentPathsToFill = generateSegmentsFromPatch(treePatch).map((segment)=>[
            ...flightSegmentPath,
            ...segment
        ]);
    for (const segmentPaths of segmentPathsToFill){
        const res = (0, _fillcachewithdataproperty.fillCacheWithDataProperty)(newCache, currentCache, segmentPaths, data);
        if (!(res == null ? void 0 : res.bailOptimistic)) {
            appliedPatch = true;
        }
    }
    return appliedPatch;
}
function navigateReducer(state, action) {
    const { url, isExternalUrl, navigateType, cache, mutable, forceOptimisticNavigation, shouldScroll } = action;
    const { pathname, hash } = url;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    const pendingPush = navigateType === "push";
    // we want to prune the prefetch cache on every navigation to avoid it growing too large
    (0, _pruneprefetchcache.prunePrefetchCache)(state.prefetchCache);
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    if (isExternalUrl) {
        return handleExternalUrl(state, mutable, url.toString(), pendingPush);
    }
    let prefetchValues = state.prefetchCache.get((0, _createhreffromurl.createHrefFromUrl)(url, false));
    if (forceOptimisticNavigation && (prefetchValues == null ? void 0 : prefetchValues.kind) !== _routerreducertypes.PrefetchKind.TEMPORARY) {
        const segments = pathname.split("/");
        // TODO-APP: figure out something better for index pages
        segments.push("__PAGE__");
        // Optimistic tree case.
        // If the optimistic tree is deeper than the current state leave that deeper part out of the fetch
        const optimisticTree = (0, _createoptimistictree.createOptimisticTree)(segments, state.tree, false);
        // we need a copy of the cache in case we need to revert to it
        const temporaryCacheNode = {
            ...cache
        };
        // Copy subTreeData for the root node of the cache.
        // Note: didn't do it above because typescript doesn't like it.
        temporaryCacheNode.status = _approutercontext.CacheStates.READY;
        temporaryCacheNode.subTreeData = state.cache.subTreeData;
        temporaryCacheNode.parallelRoutes = new Map(state.cache.parallelRoutes);
        let data;
        const fetchResponse = ()=>{
            if (!data) {
                data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(url, optimisticTree, state.nextUrl, state.buildId));
            }
            return data;
        };
        // TODO-APP: segments.slice(1) strips '', we can get rid of '' altogether.
        // TODO-APP: re-evaluate if we need to strip the last segment
        const optimisticFlightSegmentPath = segments.slice(1).map((segment)=>[
                "children",
                segment
            ]).flat();
        // Copy existing cache nodes as far as possible and fill in `data` property with the started data fetch.
        // The `data` property is used to suspend in layout-router during render if it hasn't resolved yet by the time it renders.
        const res = (0, _fillcachewithdataproperty.fillCacheWithDataProperty)(temporaryCacheNode, state.cache, optimisticFlightSegmentPath, fetchResponse, true);
        // If optimistic fetch couldn't happen it falls back to the non-optimistic case.
        if (!(res == null ? void 0 : res.bailOptimistic)) {
            mutable.previousTree = state.tree;
            mutable.patchedTree = optimisticTree;
            mutable.pendingPush = pendingPush;
            mutable.hashFragment = hash;
            mutable.shouldScroll = shouldScroll;
            mutable.scrollableSegments = [];
            mutable.cache = temporaryCacheNode;
            mutable.canonicalUrl = href;
            state.prefetchCache.set((0, _createhreffromurl.createHrefFromUrl)(url, false), {
                data: Promise.resolve(data),
                // this will make sure that the entry will be discarded after 30s
                kind: _routerreducertypes.PrefetchKind.TEMPORARY,
                prefetchTime: Date.now(),
                treeAtTimeOfPrefetch: state.tree,
                lastUsedTime: Date.now()
            });
            return (0, _handlemutable.handleMutable)(state, mutable);
        }
    }
    // If we don't have a prefetch value, we need to create one
    if (!prefetchValues) {
        const data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(url, state.tree, state.nextUrl, state.buildId, // in order to simulate the behavior of the prefetch cache
         false ? 0 : undefined));
        const newPrefetchValue = {
            data: Promise.resolve(data),
            // this will make sure that the entry will be discarded after 30s
            kind:  false ? 0 : _routerreducertypes.PrefetchKind.TEMPORARY,
            prefetchTime: Date.now(),
            treeAtTimeOfPrefetch: state.tree,
            lastUsedTime: null
        };
        state.prefetchCache.set((0, _createhreffromurl.createHrefFromUrl)(url, false), newPrefetchValue);
        prefetchValues = newPrefetchValue;
    }
    const prefetchEntryCacheStatus = (0, _getprefetchcacheentrystatus.getPrefetchEntryCacheStatus)(prefetchValues);
    // The one before last item is the router state tree patch
    const { treeAtTimeOfPrefetch, data } = prefetchValues;
    _prefetchreducer.prefetchQueue.bump(data);
    // Unwrap cache data with `use` to suspend here (in the reducer) until the fetch resolves.
    const [flightData, canonicalUrlOverride] = (0, _readrecordvalue.readRecordValue)(data);
    // important: we should only mark the cache node as dirty after we unsuspend from the call above
    prefetchValues.lastUsedTime = Date.now();
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return handleExternalUrl(state, mutable, flightData, pendingPush);
    }
    let currentTree = state.tree;
    let currentCache = state.cache;
    let scrollableSegments = [];
    for (const flightDataPath of flightData){
        const flightSegmentPath = flightDataPath.slice(0, -4);
        // The one before last item is the router state tree patch
        const treePatch = flightDataPath.slice(-3)[0];
        // TODO-APP: remove ''
        const flightSegmentPathWithLeadingEmpty = [
            "",
            ...flightSegmentPath
        ];
        // Create new tree based on the flightSegmentPath and router state patch
        let newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, currentTree, treePatch);
        // If the tree patch can't be applied to the current tree then we use the tree at time of prefetch
        // TODO-APP: This should instead fill in the missing pieces in `currentTree` with the data from `treeAtTimeOfPrefetch`, then apply the patch.
        if (newTree === null) {
            newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, treeAtTimeOfPrefetch, treePatch);
        }
        if (newTree !== null) {
            if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                return handleExternalUrl(state, mutable, href, pendingPush);
            }
            let applied = (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath, prefetchValues.kind === "auto" && prefetchEntryCacheStatus === _getprefetchcacheentrystatus.PrefetchCacheEntryStatus.reusable);
            if (!applied && prefetchEntryCacheStatus === _getprefetchcacheentrystatus.PrefetchCacheEntryStatus.stale) {
                applied = addRefetchToLeafSegments(cache, currentCache, flightSegmentPath, treePatch, ()=>(0, _fetchserverresponse.fetchServerResponse)(url, currentTree, state.nextUrl, state.buildId));
            }
            const hardNavigate = (0, _shouldhardnavigate.shouldHardNavigate)(flightSegmentPathWithLeadingEmpty, currentTree);
            if (hardNavigate) {
                cache.status = _approutercontext.CacheStates.READY;
                // Copy subTreeData for the root node of the cache.
                cache.subTreeData = currentCache.subTreeData;
                (0, _invalidatecachebelowflightsegmentpath.invalidateCacheBelowFlightSegmentPath)(cache, currentCache, flightSegmentPath);
                // Ensure the existing cache value is used when the cache was not invalidated.
                mutable.cache = cache;
            } else if (applied) {
                mutable.cache = cache;
            }
            currentCache = cache;
            currentTree = newTree;
            for (const subSegment of generateSegmentsFromPatch(treePatch)){
                const scrollableSegmentPath = [
                    ...flightSegmentPath,
                    ...subSegment
                ];
                // Filter out the __DEFAULT__ paths as they shouldn't be scrolled to in this case.
                if (scrollableSegmentPath[scrollableSegmentPath.length - 1] !== "__DEFAULT__") {
                    scrollableSegments.push(scrollableSegmentPath);
                }
            }
        }
    }
    mutable.previousTree = state.tree;
    mutable.patchedTree = currentTree;
    mutable.canonicalUrl = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : href;
    mutable.pendingPush = pendingPush;
    mutable.scrollableSegments = scrollableSegments;
    mutable.hashFragment = hash;
    mutable.shouldScroll = shouldScroll;
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigate-reducer.js.map


/***/ }),

/***/ 1910:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    prefetchQueue: function() {
        return prefetchQueue;
    },
    prefetchReducer: function() {
        return prefetchReducer;
    }
});
const _createhreffromurl = __webpack_require__(4331);
const _fetchserverresponse = __webpack_require__(8080);
const _routerreducertypes = __webpack_require__(2836);
const _createrecordfromthenable = __webpack_require__(4621);
const _pruneprefetchcache = __webpack_require__(7025);
const _approuterheaders = __webpack_require__(6265);
const _promisequeue = __webpack_require__(8811);
const prefetchQueue = new _promisequeue.PromiseQueue(5);
function prefetchReducer(state, action) {
    // let's prune the prefetch cache before we do anything else
    (0, _pruneprefetchcache.prunePrefetchCache)(state.prefetchCache);
    const { url } = action;
    url.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    const href = (0, _createhreffromurl.createHrefFromUrl)(url, false);
    const cacheEntry = state.prefetchCache.get(href);
    if (cacheEntry) {
        /**
     * If the cache entry present was marked as temporary, it means that we prefetched it from the navigate reducer,
     * where we didn't have the prefetch intent. We want to update it to the new, more accurate, kind here.
     */ if (cacheEntry.kind === _routerreducertypes.PrefetchKind.TEMPORARY) {
            state.prefetchCache.set(href, {
                ...cacheEntry,
                kind: action.kind
            });
        }
        /**
     * if the prefetch action was a full prefetch and that the current cache entry wasn't one, we want to re-prefetch,
     * otherwise we can re-use the current cache entry
     **/ if (!(cacheEntry.kind === _routerreducertypes.PrefetchKind.AUTO && action.kind === _routerreducertypes.PrefetchKind.FULL)) {
            return state;
        }
    }
    // fetchServerResponse is intentionally not awaited so that it can be unwrapped in the navigate-reducer
    const serverResponse = (0, _createrecordfromthenable.createRecordFromThenable)(prefetchQueue.enqueue(()=>(0, _fetchserverresponse.fetchServerResponse)(url, state.tree, state.nextUrl, state.buildId, action.kind)));
    // Create new tree based on the flightSegmentPath and router state patch
    state.prefetchCache.set(href, {
        // Create new tree based on the flightSegmentPath and router state patch
        treeAtTimeOfPrefetch: state.tree,
        data: serverResponse,
        kind: action.kind,
        prefetchTime: Date.now(),
        lastUsedTime: null
    });
    return state;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prefetch-reducer.js.map


/***/ }),

/***/ 7025:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "prunePrefetchCache", ({
    enumerable: true,
    get: function() {
        return prunePrefetchCache;
    }
}));
const _getprefetchcacheentrystatus = __webpack_require__(6489);
function prunePrefetchCache(prefetchCache) {
    for (const [href, prefetchCacheEntry] of prefetchCache){
        if ((0, _getprefetchcacheentrystatus.getPrefetchEntryCacheStatus)(prefetchCacheEntry) === _getprefetchcacheentrystatus.PrefetchCacheEntryStatus.expired) {
            prefetchCache.delete(href);
        }
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prune-prefetch-cache.js.map


/***/ }),

/***/ 9082:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "refreshReducer", ({
    enumerable: true,
    get: function() {
        return refreshReducer;
    }
}));
const _fetchserverresponse = __webpack_require__(8080);
const _createrecordfromthenable = __webpack_require__(4621);
const _readrecordvalue = __webpack_require__(2401);
const _createhreffromurl = __webpack_require__(4331);
const _applyrouterstatepatchtotree = __webpack_require__(3914);
const _isnavigatingtonewrootlayout = __webpack_require__(2615);
const _navigatereducer = __webpack_require__(9962);
const _handlemutable = __webpack_require__(7462);
const _approutercontext = __webpack_require__(7085);
const _filllazyitemstillleafwithhead = __webpack_require__(2684);
function refreshReducer(state, action) {
    const { cache, mutable, origin } = action;
    const href = state.canonicalUrl;
    let currentTree = state.tree;
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(currentTree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    if (!cache.data) {
        // TODO-APP: verify that `href` is not an external url.
        // Fetch data from the root of the tree.
        cache.data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(new URL(href, origin), [
            currentTree[0],
            currentTree[1],
            currentTree[2],
            "refetch"
        ], state.nextUrl, state.buildId));
    }
    const [flightData, canonicalUrlOverride] = (0, _readrecordvalue.readRecordValue)(cache.data);
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
    }
    // Remove cache.data as it has been resolved at this point.
    cache.data = null;
    for (const flightDataPath of flightData){
        // FlightDataPath with more than two items means unexpected Flight data was returned
        if (flightDataPath.length !== 3) {
            // TODO-APP: handle this case better
            console.log("REFRESH FAILED");
            return state;
        }
        // Given the path can only have two items the items are only the router state and subTreeData for the root.
        const [treePatch] = flightDataPath;
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            ""
        ], currentTree, treePatch);
        if (newTree === null) {
            throw new Error("SEGMENT MISMATCH");
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
        }
        const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : undefined;
        if (canonicalUrlOverride) {
            mutable.canonicalUrl = canonicalUrlOverrideHref;
        }
        // The one before last item is the router state tree patch
        const [subTreeData, head] = flightDataPath.slice(-2);
        // Handles case where prefetch only returns the router tree patch without rendered components.
        if (subTreeData !== null) {
            cache.status = _approutercontext.CacheStates.READY;
            cache.subTreeData = subTreeData;
            (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, treePatch, head);
            mutable.cache = cache;
            mutable.prefetchCache = new Map();
        }
        mutable.previousTree = currentTree;
        mutable.patchedTree = newTree;
        mutable.canonicalUrl = href;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=refresh-reducer.js.map


/***/ }),

/***/ 9425:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "restoreReducer", ({
    enumerable: true,
    get: function() {
        return restoreReducer;
    }
}));
const _createhreffromurl = __webpack_require__(4331);
function restoreReducer(state, action) {
    const { url, tree } = action;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    return {
        buildId: state.buildId,
        // Set canonical url
        canonicalUrl: href,
        pushRef: state.pushRef,
        focusAndScrollRef: state.focusAndScrollRef,
        cache: state.cache,
        prefetchCache: state.prefetchCache,
        // Restore provided tree
        tree: tree,
        nextUrl: url.pathname
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=restore-reducer.js.map


/***/ }),

/***/ 7238:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "serverActionReducer", ({
    enumerable: true,
    get: function() {
        return serverActionReducer;
    }
}));
const _appcallserver = __webpack_require__(6937);
const _approuterheaders = __webpack_require__(6265);
const _createrecordfromthenable = __webpack_require__(4621);
const _readrecordvalue = __webpack_require__(2401);
const _client = __webpack_require__(7897);
const _addbasepath = __webpack_require__(4578);
const _createhreffromurl = __webpack_require__(4331);
const _navigatereducer = __webpack_require__(9962);
const _applyrouterstatepatchtotree = __webpack_require__(3914);
const _isnavigatingtonewrootlayout = __webpack_require__(2615);
const _approutercontext = __webpack_require__(7085);
const _handlemutable = __webpack_require__(7462);
const _filllazyitemstillleafwithhead = __webpack_require__(2684);
async function fetchServerAction(state, param) {
    let { actionId, actionArgs } = param;
    const body = await (0, _client.encodeReply)(actionArgs);
    const res = await fetch("", {
        method: "POST",
        headers: {
            Accept: _approuterheaders.RSC_CONTENT_TYPE_HEADER,
            "Next-Action": actionId,
            [_approuterheaders.NEXT_ROUTER_STATE_TREE]: encodeURIComponent(JSON.stringify(state.tree)),
            ... false ? 0 : {},
            ...state.nextUrl ? {
                [_approuterheaders.NEXT_URL]: state.nextUrl
            } : {}
        },
        body
    });
    const location = res.headers.get("x-action-redirect");
    let revalidatedParts;
    try {
        const revalidatedHeader = JSON.parse(res.headers.get("x-action-revalidated") || "[[],0,0]");
        revalidatedParts = {
            paths: revalidatedHeader[0] || [],
            tag: !!revalidatedHeader[1],
            cookie: revalidatedHeader[2]
        };
    } catch (e) {
        revalidatedParts = {
            paths: [],
            tag: false,
            cookie: false
        };
    }
    const redirectLocation = location ? new URL((0, _addbasepath.addBasePath)(location), window.location.origin) : undefined;
    let isFlightResponse = res.headers.get("content-type") === _approuterheaders.RSC_CONTENT_TYPE_HEADER;
    if (isFlightResponse) {
        const response = await (0, _client.createFromFetch)(Promise.resolve(res), {
            callServer: _appcallserver.callServer
        });
        if (location) {
            // if it was a redirection, then result is just a regular RSC payload
            const [, actionFlightData] = response != null ? response : [];
            return {
                actionFlightData: actionFlightData,
                redirectLocation,
                revalidatedParts
            };
        }
        // otherwise it's a tuple of [actionResult, actionFlightData]
        const [actionResult, [, actionFlightData]] = response != null ? response : [];
        return {
            actionResult,
            actionFlightData,
            redirectLocation,
            revalidatedParts
        };
    }
    return {
        redirectLocation,
        revalidatedParts
    };
}
function serverActionReducer(state, action) {
    const { mutable, cache, resolve, reject } = action;
    const href = state.canonicalUrl;
    let currentTree = state.tree;
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(currentTree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    if (!action.mutable.inFlightServerAction) {
        action.mutable.inFlightServerAction = (0, _createrecordfromthenable.createRecordFromThenable)(fetchServerAction(state, action));
    }
    // TODO-APP: Make try/catch wrap only readRecordValue so that other errors bubble up through the reducer instead.
    try {
        // suspends until the server action is resolved.
        const { actionResult, actionFlightData: flightData, redirectLocation } = (0, _readrecordvalue.readRecordValue)(action.mutable.inFlightServerAction);
        mutable.previousTree = state.tree;
        if (!flightData) {
            if (!mutable.actionResultResolved) {
                resolve(actionResult);
                mutable.actionResultResolved = true;
            }
            // If there is a redirect but no flight data we need to do a mpaNavigation.
            if (redirectLocation) {
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, redirectLocation.href, state.pushRef.pendingPush);
            }
            return state;
        }
        if (typeof flightData === "string") {
            // Handle case when navigating to page in `pages` from `app`
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
        }
        // Remove cache.data as it has been resolved at this point.
        mutable.inFlightServerAction = null;
        for (const flightDataPath of flightData){
            // FlightDataPath with more than two items means unexpected Flight data was returned
            if (flightDataPath.length !== 3) {
                // TODO-APP: handle this case better
                console.log("SERVER ACTION APPLY FAILED");
                return state;
            }
            // Given the path can only have two items the items are only the router state and subTreeData for the root.
            const [treePatch] = flightDataPath;
            const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
                ""
            ], currentTree, treePatch);
            if (newTree === null) {
                throw new Error("SEGMENT MISMATCH");
            }
            if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
            }
            // The one before last item is the router state tree patch
            const [subTreeData, head] = flightDataPath.slice(-2);
            // Handles case where prefetch only returns the router tree patch without rendered components.
            if (subTreeData !== null) {
                cache.status = _approutercontext.CacheStates.READY;
                cache.subTreeData = subTreeData;
                (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, treePatch, head);
                mutable.cache = cache;
                mutable.prefetchCache = new Map();
            }
            mutable.previousTree = currentTree;
            mutable.patchedTree = newTree;
            mutable.canonicalUrl = href;
            currentTree = newTree;
        }
        if (redirectLocation) {
            const newHref = (0, _createhreffromurl.createHrefFromUrl)(redirectLocation, false);
            mutable.canonicalUrl = newHref;
        }
        if (!mutable.actionResultResolved) {
            resolve(actionResult);
            mutable.actionResultResolved = true;
        }
        return (0, _handlemutable.handleMutable)(state, mutable);
    } catch (e) {
        if (e.status === "rejected") {
            if (!mutable.actionResultResolved) {
                reject(e.value);
                mutable.actionResultResolved = true;
            }
            // When the server action is rejected we don't update the state and instead call the reject handler of the promise.
            return state;
        }
        throw e;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-action-reducer.js.map


/***/ }),

/***/ 5022:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "serverPatchReducer", ({
    enumerable: true,
    get: function() {
        return serverPatchReducer;
    }
}));
const _createhreffromurl = __webpack_require__(4331);
const _applyrouterstatepatchtotree = __webpack_require__(3914);
const _isnavigatingtonewrootlayout = __webpack_require__(2615);
const _navigatereducer = __webpack_require__(9962);
const _applyflightdata = __webpack_require__(4173);
const _handlemutable = __webpack_require__(7462);
function serverPatchReducer(state, action) {
    const { flightData, previousTree, overrideCanonicalUrl, cache, mutable } = action;
    const isForCurrentTree = JSON.stringify(previousTree) === JSON.stringify(state.tree);
    // When a fetch is slow to resolve it could be that you navigated away while the request was happening or before the reducer runs.
    // In that case opt-out of applying the patch given that the data could be stale.
    if (!isForCurrentTree) {
        // TODO-APP: Handle tree mismatch
        console.log("TREE MISMATCH");
        // Keep everything as-is.
        return state;
    }
    if (mutable.previousTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
    }
    let currentTree = state.tree;
    let currentCache = state.cache;
    for (const flightDataPath of flightData){
        // Slices off the last segment (which is at -4) as it doesn't exist in the tree yet
        const flightSegmentPath = flightDataPath.slice(0, -4);
        const [treePatch] = flightDataPath.slice(-3, -2);
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            "",
            ...flightSegmentPath
        ], currentTree, treePatch);
        if (newTree === null) {
            throw new Error("SEGMENT MISMATCH");
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, state.canonicalUrl, state.pushRef.pendingPush);
        }
        const canonicalUrlOverrideHref = overrideCanonicalUrl ? (0, _createhreffromurl.createHrefFromUrl)(overrideCanonicalUrl) : undefined;
        if (canonicalUrlOverrideHref) {
            mutable.canonicalUrl = canonicalUrlOverrideHref;
        }
        (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath);
        mutable.previousTree = currentTree;
        mutable.patchedTree = newTree;
        mutable.cache = cache;
        currentCache = cache;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-patch-reducer.js.map


/***/ }),

/***/ 2836:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PrefetchKind: function() {
        return PrefetchKind;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_NAVIGATE: function() {
        return ACTION_NAVIGATE;
    },
    ACTION_RESTORE: function() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_PATCH: function() {
        return ACTION_SERVER_PATCH;
    },
    ACTION_PREFETCH: function() {
        return ACTION_PREFETCH;
    },
    ACTION_FAST_REFRESH: function() {
        return ACTION_FAST_REFRESH;
    },
    ACTION_SERVER_ACTION: function() {
        return ACTION_SERVER_ACTION;
    }
});
const ACTION_REFRESH = "refresh";
const ACTION_NAVIGATE = "navigate";
const ACTION_RESTORE = "restore";
const ACTION_SERVER_PATCH = "server-patch";
const ACTION_PREFETCH = "prefetch";
const ACTION_FAST_REFRESH = "fast-refresh";
const ACTION_SERVER_ACTION = "server-action";
var PrefetchKind;
(function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    PrefetchKind["TEMPORARY"] = "temporary";
})(PrefetchKind || (PrefetchKind = {}));
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map


/***/ }),

/***/ 7189:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "reducer", ({
    enumerable: true,
    get: function() {
        return reducer;
    }
}));
const _routerreducertypes = __webpack_require__(2836);
const _navigatereducer = __webpack_require__(9962);
const _serverpatchreducer = __webpack_require__(5022);
const _restorereducer = __webpack_require__(9425);
const _refreshreducer = __webpack_require__(9082);
const _prefetchreducer = __webpack_require__(1910);
const _fastrefreshreducer = __webpack_require__(4838);
const _serveractionreducer = __webpack_require__(7238);
/**
 * Reducer that handles the app-router state updates.
 */ function clientReducer(state, action) {
    switch(action.type){
        case _routerreducertypes.ACTION_NAVIGATE:
            {
                return (0, _navigatereducer.navigateReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_PATCH:
            {
                return (0, _serverpatchreducer.serverPatchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_RESTORE:
            {
                return (0, _restorereducer.restoreReducer)(state, action);
            }
        case _routerreducertypes.ACTION_REFRESH:
            {
                return (0, _refreshreducer.refreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_FAST_REFRESH:
            {
                return (0, _fastrefreshreducer.fastRefreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_PREFETCH:
            {
                return (0, _prefetchreducer.prefetchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_ACTION:
            {
                return (0, _serveractionreducer.serverActionReducer)(state, action);
            }
        // This case should never be hit as dispatch is strongly typed.
        default:
            throw new Error("Unknown action");
    }
}
function serverReducer(state, _action) {
    return state;
}
const reducer =  true ? serverReducer : 0;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer.js.map


/***/ }),

/***/ 8072:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "shouldHardNavigate", ({
    enumerable: true,
    get: function() {
        return shouldHardNavigate;
    }
}));
const _matchsegments = __webpack_require__(7618);
function shouldHardNavigate(flightSegmentPath, flightRouterState) {
    const [segment, parallelRoutes] = flightRouterState;
    // TODO-APP: Check if `as` can be replaced.
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Check if current segment matches the existing segment.
    if (!(0, _matchsegments.matchSegment)(currentSegment, segment)) {
        // If dynamic parameter in tree doesn't match up with segment path a hard navigation is triggered.
        if (Array.isArray(currentSegment)) {
            return true;
        }
        // If the existing segment did not match soft navigation is triggered.
        return false;
    }
    const lastSegment = flightSegmentPath.length <= 2;
    if (lastSegment) {
        return false;
    }
    return shouldHardNavigate(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey]);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=should-hard-navigate.js.map


/***/ }),

/***/ 8437:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createSearchParamsBailoutProxy", ({
    enumerable: true,
    get: function() {
        return createSearchParamsBailoutProxy;
    }
}));
const _staticgenerationbailout = __webpack_require__(8862);
function createSearchParamsBailoutProxy() {
    return new Proxy({}, {
        get (_target, prop) {
            // React adds some properties on the object when serializing for client components
            if (typeof prop === "string") {
                (0, _staticgenerationbailout.staticGenerationBailout)("searchParams." + prop);
            }
        }
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=searchparams-bailout-proxy.js.map


/***/ }),

/***/ 8862:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "staticGenerationBailout", ({
    enumerable: true,
    get: function() {
        return staticGenerationBailout;
    }
}));
const _hooksservercontext = __webpack_require__(8047);
const _staticgenerationasyncstorage = __webpack_require__(3539);
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args);
        this.code = "NEXT_STATIC_GEN_BAILOUT";
    }
}
function formatErrorMessage(reason, opts) {
    const { dynamic, link } = opts || {};
    const suffix = link ? " See more info here: " + link : "";
    return "Page" + (dynamic ? ' with `dynamic = "' + dynamic + '"`' : "") + " couldn't be rendered statically because it used `" + reason + "`." + suffix;
}
const staticGenerationBailout = (reason, opts)=>{
    const staticGenerationStore = _staticgenerationasyncstorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.dynamicShouldError) {
        var _opts_dynamic;
        throw new StaticGenBailoutError(formatErrorMessage(reason, {
            ...opts,
            dynamic: (_opts_dynamic = opts == null ? void 0 : opts.dynamic) != null ? _opts_dynamic : "error"
        }));
    }
    if (staticGenerationStore) {
        staticGenerationStore.revalidate = 0;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        const err = new _hooksservercontext.DynamicServerError(formatErrorMessage(reason, {
            ...opts,
            // this error should be caught by Next to bail out of static generation
            // in case it's uncaught, this link provides some additional context as to why
            link: "https://nextjs.org/docs/messages/dynamic-server-error"
        }));
        staticGenerationStore.dynamicUsageDescription = reason;
        staticGenerationStore.dynamicUsageStack = err.stack;
        throw err;
    }
    return false;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map


/***/ }),

/***/ 4282:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return StaticGenerationSearchParamsBailoutProvider;
    }
}));
const _interop_require_default = __webpack_require__(2147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
const _searchparamsbailoutproxy = __webpack_require__(8437);
function StaticGenerationSearchParamsBailoutProvider(param) {
    let { Component, propsForComponent } = param;
    const searchParams = (0, _searchparamsbailoutproxy.createSearchParamsBailoutProxy)();
    return /*#__PURE__*/ _react.default.createElement(Component, {
        searchParams: searchParams,
        ...propsForComponent
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-searchparams-bailout-provider.js.map


/***/ }),

/***/ 7951:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "useReducerWithReduxDevtools", ({
    enumerable: true,
    get: function() {
        return useReducerWithReduxDevtools;
    }
}));
const _react = __webpack_require__(8038);
function normalizeRouterState(val) {
    if (val instanceof Map) {
        const obj = {};
        for (const [key, value] of val.entries()){
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value._bundlerConfig) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (typeof val === "object" && val !== null) {
        const obj = {};
        for(const key in val){
            const value = val[key];
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value.hasOwnProperty("_bundlerConfig")) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (Array.isArray(val)) {
        return val.map(normalizeRouterState);
    }
    return val;
}
function devToolReducer(fn, ref) {
    return (state, action)=>{
        const res = fn(state, action);
        if (ref.current) {
            ref.current.send(action, normalizeRouterState(res));
        }
        return res;
    };
}
function useReducerWithReduxDevtoolsNoop(fn, initialState) {
    const [state, dispatch] = (0, _react.useReducer)(fn, initialState);
    return [
        state,
        dispatch,
        ()=>{}
    ];
}
function useReducerWithReduxDevtoolsImpl(fn, initialState) {
    const devtoolsConnectionRef = (0, _react.useRef)();
    const enabledRef = (0, _react.useRef)();
    (0, _react.useEffect)(()=>{
        if (devtoolsConnectionRef.current || enabledRef.current === false) {
            return;
        }
        if (enabledRef.current === undefined && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined") {
            enabledRef.current = false;
            return;
        }
        devtoolsConnectionRef.current = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
            instanceId: 8000,
            name: "next-router"
        });
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.init(normalizeRouterState(initialState));
        }
        return ()=>{
            devtoolsConnectionRef.current = undefined;
        };
    }, [
        initialState
    ]);
    const [state, dispatch] = (0, _react.useReducer)(devToolReducer(/* logReducer( */ fn /*)*/ , devtoolsConnectionRef), initialState);
    const sync = (0, _react.useCallback)(()=>{
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.send({
                type: "RENDER_SYNC"
            }, normalizeRouterState(state));
        }
    }, [
        state
    ]);
    return [
        state,
        dispatch,
        sync
    ];
}
const useReducerWithReduxDevtools =  false ? 0 : useReducerWithReduxDevtoolsNoop;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-reducer-with-devtools.js.map


/***/ }),

/***/ 3684:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getDomainLocale", ({
    enumerable: true,
    get: function() {
        return getDomainLocale;
    }
}));
const _normalizetrailingslash = __webpack_require__(1094);
const basePath = (/* unused pure expression or super */ null && ( false || ""));
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map


/***/ }),

/***/ 4374:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "hasBasePath", ({
    enumerable: true,
    get: function() {
        return hasBasePath;
    }
}));
const _pathhasprefix = __webpack_require__(4614);
const basePath =  false || "";
function hasBasePath(path) {
    return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-base-path.js.map


/***/ }),

/***/ 3380:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "Image", ({
    enumerable: true,
    get: function() {
        return Image;
    }
}));
const _interop_require_default = __webpack_require__(2147);
const _interop_require_wildcard = __webpack_require__(4009);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(8038));
const _reactdom = __webpack_require__(8704);
const _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(6864));
const _getimgprops = __webpack_require__(1830);
const _imageconfig = __webpack_require__(2210);
const _imageconfigcontext = __webpack_require__(5359);
const _warnonce = __webpack_require__(8658);
const _routercontext = __webpack_require__(7160);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(5246));
// This is replaced by webpack define plugin
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image/","loader":"default","dangerouslyAllowSVG":false,"unoptimized":true};
if (true) {
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
    const src = img == null ? void 0 : img.src;
    if (!img || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder !== "empty") {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event("load");
            Object.defineProperty(event, "target", {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if (false) {}
    });
}
function getDynamicProps(fetchPriority) {
    const [majorStr, minorStr] = _react.version.split(".");
    const major = parseInt(majorStr, 10);
    const minor = parseInt(minorStr, 10);
    if (major > 18 || major === 18 && minor >= 3) {
        // In React 18.3.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)((param, forwardedRef)=>{
    let { src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, onLoad, onError, ...rest } = param;
    return /*#__PURE__*/ _react.default.createElement("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: loading,
        width: width,
        height: height,
        decoding: decoding,
        "data-nimg": fill ? "fill" : "1",
        className: className,
        style: style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: sizes,
        srcSet: srcSet,
        src: src,
        ref: (0, _react.useCallback)((img)=>{
            if (forwardedRef) {
                if (typeof forwardedRef === "function") forwardedRef(img);
                else if (typeof forwardedRef === "object") {
                    // @ts-ignore - .current is read only it's usually assigned by react internally
                    forwardedRef.current = img;
                }
            }
            if (!img) {
                return;
            }
            if (onError) {
                // If the image has an error before react hydrates, then the error is lost.
                // The workaround is to wait until the image is mounted which is after hydration,
                // then we set the src again to trigger the error handler (if there was an error).
                // eslint-disable-next-line no-self-assign
                img.src = img.src;
            }
            if (false) {}
            if (img.complete) {
                handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
            }
        }, [
            src,
            placeholder,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            onError,
            unoptimized,
            forwardedRef
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder !== "empty") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
function ImagePreload(param) {
    let { isAppRouter, imgAttributes } = param;
    const opts = {
        as: "image",
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
    };
    if (isAppRouter && _reactdom.preload) {
        // See https://github.com/facebook/react/pull/26940
        (0, _reactdom.preload)(imgAttributes.src, opts);
        return null;
    }
    return /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("link", {
        key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
        rel: "preload",
        // Note how we omit the `href` attribute, as it would only be relevant
        // for browsers that do not support `imagesrcset`, and in those cases
        // it would cause the incorrect image to be preloaded.
        //
        // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
        href: imgAttributes.srcSet ? undefined : imgAttributes.src,
        ...opts
    }));
}
const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
    const pagesRouter = (0, _react.useContext)(_routercontext.RouterContext);
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const configContext = (0, _react.useContext)(_imageconfigcontext.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes
        };
    }, [
        configContext
    ]);
    const { onLoad, onLoadingComplete } = props;
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
    });
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(ImageElement, {
        ...imgAttributes,
        unoptimized: imgMeta.unoptimized,
        placeholder: imgMeta.placeholder,
        fill: imgMeta.fill,
        onLoadRef: onLoadRef,
        onLoadingCompleteRef: onLoadingCompleteRef,
        setBlurComplete: setBlurComplete,
        setShowAltText: setShowAltText,
        ref: forwardedRef
    }), imgMeta.priority ? /*#__PURE__*/ _react.default.createElement(ImagePreload, {
        isAppRouter: isAppRouter,
        imgAttributes: imgAttributes
    }) : null);
});
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image-component.js.map


/***/ }),

/***/ 954:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _interop_require_default = __webpack_require__(2147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
const _resolvehref = __webpack_require__(982);
const _islocalurl = __webpack_require__(120);
const _formaturl = __webpack_require__(2336);
const _utils = __webpack_require__(8423);
const _addlocale = __webpack_require__(3005);
const _routercontext = __webpack_require__(7160);
const _approutercontext = __webpack_require__(7085);
const _useintersection = __webpack_require__(4254);
const _getdomainlocale = __webpack_require__(3684);
const _addbasepath = __webpack_require__(4578);
const _routerreducertypes = __webpack_require__(2836);
const prefetched = new Set();
function prefetch(router, href, as, options, appOptions, isAppRouter) {
    if (true) {
        return;
    }
    // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    if (!isAppRouter && !(0, _islocalurl.isLocalURL)(href)) {
        return;
    }
    // We should only dedupe requests when experimental.optimisticClientCache is
    // disabled.
    if (!options.bypassPrefetchedCheck) {
        const locale = typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : undefined;
        const prefetchedKey = href + "%" + as + "%" + locale;
        // If we've already fetched the key, then don't prefetch it again!
        if (prefetched.has(prefetchedKey)) {
            return;
        }
        // Mark this URL as prefetched.
        prefetched.add(prefetchedKey);
    }
    const prefetchPromise = isAppRouter ? router.prefetch(href, appOptions) : router.prefetch(href, as, options);
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    Promise.resolve(prefetchPromise).catch((err)=>{
        if (false) {}
    });
}
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute("target");
    return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === "A";
    if (isAnchorNodeName && (isModifiedEvent(e) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !isAppRouter && !(0, _islocalurl.isLocalURL)(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        const routerScroll = scroll != null ? scroll : true;
        if ("beforePopState" in router) {
            router[replace ? "replace" : "push"](href, as, {
                shallow,
                locale,
                scroll: routerScroll
            });
        } else {
            router[replace ? "replace" : "push"](as || href, {
                forceOptimisticNavigation: !prefetchEnabled,
                scroll: routerScroll
            });
        }
    };
    if (isAppRouter) {
        _react.default.startTransition(navigate);
    } else {
        navigate();
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === "string") {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
/**
 * React Component that enables client-side transitions between routes.
 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    let children;
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, locale, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = true === false, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
    }
    const pagesRouter = _react.default.useContext(_routercontext.RouterContext);
    const appRouter = _react.default.useContext(_approutercontext.AppRouterContext);
    const router = pagesRouter != null ? pagesRouter : appRouter;
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const prefetchEnabled = prefetchProp !== false;
    /**
     * The possible states for prefetch are:
     * - null: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport
     * - true: we will prefetch if the link is visible and prefetch the full page, not just partially
     * - false: we will not prefetch if in the viewport at all
     */ const appPrefetchKind = prefetchProp === null ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.FULL;
    if (false) {}
    if (false) {}
    const { href, as } = _react.default.useMemo(()=>{
        if (!pagesRouter) {
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
        const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(pagesRouter, hrefProp, true);
        return {
            href: resolvedHref,
            as: asProp ? (0, _resolvehref.resolveHref)(pagesRouter, asProp) : resolvedAs || resolvedHref
        };
    }, [
        pagesRouter,
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    } else {
        if (false) {}
    }
    const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
        rootMargin: "200px"
    });
    const setRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === "function") childRef(el);
            else if (typeof childRef === "object") {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    // Prefetch the URL if we haven't already and it's visible.
    _react.default.useEffect(()=>{
        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
        if (false) {}
        if (!router) {
            return;
        }
        // If we don't need to prefetch the URL, don't do prefetch.
        if (!isVisible || !prefetchEnabled) {
            return;
        }
        // Prefetch the URL.
        prefetch(router, href, as, {
            locale
        }, {
            kind: appPrefetchKind
        }, isAppRouter);
    }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        pagesRouter == null ? void 0 : pagesRouter.locale,
        router,
        isAppRouter,
        appPrefetchKind
    ]);
    const childProps = {
        ref: setRef,
        onClick (e) {
            if (false) {}
            if (!legacyBehavior && typeof onClick === "function") {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === "function") {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ((!prefetchEnabled || "production" === "development") && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        },
        onTouchStart (e) {
            if (!legacyBehavior && typeof onTouchStartProp === "function") {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the domain and locale.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : pagesRouter == null ? void 0 : pagesRouter.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = (pagesRouter == null ? void 0 : pagesRouter.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.locales, pagesRouter == null ? void 0 : pagesRouter.domainLocales);
        childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ _react.default.createElement("a", {
        ...restProps,
        ...childProps
    }, children);
});
const _default = Link;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 1094:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizePathTrailingSlash", ({
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
}));
const _removetrailingslash = __webpack_require__(3750);
const _parsepath = __webpack_require__(8231);
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/") || undefined) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    if (true) {
        if (/\.[^/]+\/?$/.test(pathname)) {
            return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
        } else if (pathname.endsWith("/")) {
            return "" + pathname + query + hash;
        } else {
            return pathname + "/" + query + hash;
        }
    }
    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 2666:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removeBasePath", ({
    enumerable: true,
    get: function() {
        return removeBasePath;
    }
}));
const _hasbasepath = __webpack_require__(4374);
const basePath =  false || "";
function removeBasePath(path) {
    if (false) {}
    // Can't trim the basePath if it has zero length!
    if (basePath.length === 0) return path;
    path = path.slice(basePath.length);
    if (!path.startsWith("/")) path = "/" + path;
    return path;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-base-path.js.map


/***/ }),

/***/ 9029:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    requestIdleCallback: function() {
        return requestIdleCallback;
    },
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    }
});
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map


/***/ }),

/***/ 4254:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "useIntersection", ({
    enumerable: true,
    get: function() {
        return useIntersection;
    }
}));
const _react = __webpack_require__(8038);
const _requestidlecallback = __webpack_require__(9029);
const hasIntersectionObserver = typeof IntersectionObserver === "function";
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
function observe(element, callback, options) {
    const { id, observer, elements } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function useIntersection(param) {
    let { rootRef, rootMargin, disabled } = param;
    const isDisabled = disabled || !hasIntersectionObserver;
    const [visible, setVisible] = (0, _react.useState)(false);
    const elementRef = (0, _react.useRef)(null);
    const setElement = (0, _react.useCallback)((element)=>{
        elementRef.current = element;
    }, []);
    (0, _react.useEffect)(()=>{
        if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            const element = elementRef.current;
            if (element && element.tagName) {
                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
                return unobserve;
            }
        } else {
            if (!visible) {
                const idleCallback = (0, _requestidlecallback.requestIdleCallback)(()=>setVisible(true));
                return ()=>(0, _requestidlecallback.cancelIdleCallback)(idleCallback);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
    ]);
    const resetVisible = (0, _react.useCallback)(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 489:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    unstable_getImgProps: function() {
        return unstable_getImgProps;
    }
});
const _interop_require_default = __webpack_require__(2147);
const _getimgprops = __webpack_require__(1830);
const _warnonce = __webpack_require__(8658);
const _imagecomponent = __webpack_require__(3380);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(5246));
const unstable_getImgProps = (imgProps)=>{
    (0, _warnonce.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image/","loader":"default","dangerouslyAllowSVG":false,"unoptimized":true}
    });
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
};
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map


/***/ }),

/***/ 5246:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
function defaultLoader(param) {
    let { config, src, width, quality } = param;
    if (false) {}
    return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + (quality || 75) + ( false ? 0 : "");
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map


/***/ }),

/***/ 9708:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    suspense: function() {
        return suspense;
    },
    NoSSR: function() {
        return NoSSR;
    }
});
const _interop_require_default = __webpack_require__(2147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
const _nossrerror = __webpack_require__(827);
function suspense() {
    const error = new Error(_nossrerror.NEXT_DYNAMIC_NO_SSR_CODE);
    error.digest = _nossrerror.NEXT_DYNAMIC_NO_SSR_CODE;
    throw error;
}
function NoSSR(param) {
    let { children } = param;
    if (true) {
        suspense();
    }
    return children;
} //# sourceMappingURL=dynamic-no-ssr.js.map


/***/ }),

/***/ 827:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// This has to be a shared module which is shared between client component error boundary and dynamic component

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "NEXT_DYNAMIC_NO_SSR_CODE", ({
    enumerable: true,
    get: function() {
        return NEXT_DYNAMIC_NO_SSR_CODE;
    }
}));
const NEXT_DYNAMIC_NO_SSR_CODE = "NEXT_DYNAMIC_NO_SSR_CODE"; //# sourceMappingURL=no-ssr-error.js.map


/***/ }),

/***/ 1363:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* eslint-disable import/no-extraneous-dependencies */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createProxy", ({
    enumerable: true,
    get: function() {
        return createProxy;
    }
}));
const _serveredge = __webpack_require__(9642);
const createProxy = _serveredge.createClientModuleProxy; //# sourceMappingURL=module-proxy.js.map


/***/ }),

/***/ 8225:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("C:\\Users\\ASUS\\Desktop\\abhiram-main\\node_modules\\next\\dist\\client\\components\\app-router.js");
 //# sourceMappingURL=app-router.js.map


/***/ }),

/***/ 1823:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("C:\\Users\\ASUS\\Desktop\\abhiram-main\\node_modules\\next\\dist\\client\\components\\error-boundary.js");
 //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 7149:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("C:\\Users\\ASUS\\Desktop\\abhiram-main\\node_modules\\next\\dist\\client\\components\\layout-router.js");
 //# sourceMappingURL=layout-router.js.map


/***/ }),

/***/ 6966:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("C:\\Users\\ASUS\\Desktop\\abhiram-main\\node_modules\\next\\dist\\client\\components\\not-found-boundary.js");
 //# sourceMappingURL=not-found-boundary.js.map


/***/ }),

/***/ 5493:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return NotFound;
    }
}));
const _interop_require_default = __webpack_require__(3297);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2947));
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    desc: {
        display: "inline-block"
    },
    h1: {
        display: "inline-block",
        margin: "0 20px 0 0",
        padding: "0 23px 0 0",
        fontSize: 24,
        fontWeight: 500,
        verticalAlign: "top",
        lineHeight: "49px"
    },
    h2: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: "49px",
        margin: 0
    }
};
function NotFound() {
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("title", null, "404: This page could not be found."), /*#__PURE__*/ _react.default.createElement("div", {
        style: styles.error
    }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("style", {
        dangerouslySetInnerHTML: {
            /* Minified CSS from
                body { margin: 0; color: #000; background: #fff; }
                .next-error-h1 {
                  border-right: 1px solid rgba(0, 0, 0, .3);
                }

                @media (prefers-color-scheme: dark) {
                  body { color: #fff; background: #000; }
                  .next-error-h1 {
                    border-right: 1px solid rgba(255, 255, 255, .3);
                  }
                }
              */ __html: "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"
        }
    }), /*#__PURE__*/ _react.default.createElement("h1", {
        className: "next-error-h1",
        style: styles.h1
    }, "404"), /*#__PURE__*/ _react.default.createElement("div", {
        style: styles.desc
    }, /*#__PURE__*/ _react.default.createElement("h2", {
        style: styles.h2
    }, "This page could not be found.")))));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found-error.js.map


/***/ }),

/***/ 9278:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("C:\\Users\\ASUS\\Desktop\\abhiram-main\\node_modules\\next\\dist\\client\\components\\render-from-template-context.js");
 //# sourceMappingURL=render-from-template-context.js.map


/***/ }),

/***/ 9444:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createSearchParamsBailoutProxy", ({
    enumerable: true,
    get: function() {
        return createSearchParamsBailoutProxy;
    }
}));
const _staticgenerationbailout = __webpack_require__(6164);
function createSearchParamsBailoutProxy() {
    return new Proxy({}, {
        get (_target, prop) {
            // React adds some properties on the object when serializing for client components
            if (typeof prop === "string") {
                (0, _staticgenerationbailout.staticGenerationBailout)("searchParams." + prop);
            }
        }
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=searchparams-bailout-proxy.js.map


/***/ }),

/***/ 6345:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("C:\\Users\\ASUS\\Desktop\\abhiram-main\\node_modules\\next\\dist\\client\\components\\static-generation-searchparams-bailout-provider.js");
 //# sourceMappingURL=static-generation-searchparams-bailout-provider.js.map


/***/ }),

/***/ 6113:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
/**
 * Tokenize input string.
 */ function lexer(str) {
    var tokens = [];
    var i = 0;
    while(i < str.length){
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({
                type: "MODIFIER",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "\\") {
            tokens.push({
                type: "ESCAPED_CHAR",
                index: i++,
                value: str[i++]
            });
            continue;
        }
        if (char === "{") {
            tokens.push({
                type: "OPEN",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "}") {
            tokens.push({
                type: "CLOSE",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while(j < str.length){
                var code = str.charCodeAt(j);
                if (// `0-9`
                code >= 48 && code <= 57 || // `A-Z`
                code >= 65 && code <= 90 || // `a-z`
                code >= 97 && code <= 122 || // `_`
                code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name) throw new TypeError("Missing parameter name at " + i);
            tokens.push({
                type: "NAME",
                index: i,
                value: name
            });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError('Pattern cannot start with "?" at ' + j);
            }
            while(j < str.length){
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                } else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count) throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern) throw new TypeError("Missing pattern at " + i);
            tokens.push({
                type: "PATTERN",
                index: i,
                value: pattern
            });
            i = j;
            continue;
        }
        tokens.push({
            type: "CHAR",
            index: i,
            value: str[i++]
        });
    }
    tokens.push({
        type: "END",
        index: i,
        value: ""
    });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */ function parse(str, options) {
    if (options === void 0) {
        options = {};
    }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function(type) {
        if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
    };
    var mustConsume = function(type) {
        var value = tryConsume(type);
        if (value !== undefined) return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function() {
        var result = "";
        var value;
        // tslint:disable-next-line
        while(value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")){
            result += value;
        }
        return result;
    };
    while(i < tokens.length){
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */ function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */ function tokensToFunction(tokens, options) {
    if (options === void 0) {
        options = {};
    }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function(x) {
        return x;
    } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function(token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function(data) {
        var path = "";
        for(var i = 0; i < tokens.length; i++){
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError('Expected "' + token.name + '" to not repeat, but got an array');
                }
                if (value.length === 0) {
                    if (optional) continue;
                    throw new TypeError('Expected "' + token.name + '" to not be empty');
                }
                for(var j = 0; j < value.length; j++){
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional) continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError('Expected "' + token.name + '" to be ' + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */ function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */ function regexpToFunction(re, keys, options) {
    if (options === void 0) {
        options = {};
    }
    var _a = options.decode, decode = _a === void 0 ? function(x) {
        return x;
    } : _a;
    return function(pathname) {
        var m = re.exec(pathname);
        if (!m) return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function(i) {
            // tslint:disable-next-line
            if (m[i] === undefined) return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function(value) {
                    return decode(value, key);
                });
            } else {
                params[key.name] = decode(m[i], key);
            }
        };
        for(var i = 1; i < m.length; i++){
            _loop_1(i);
        }
        return {
            path: path,
            index: index,
            params: params
        };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */ function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */ function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */ function regexpToRegexp(path, keys) {
    if (!keys) return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for(var i = 0; i < groups.length; i++){
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */ function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function(path) {
        return pathToRegexp(path, keys, options).source;
    });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */ function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */ function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) {
        options = {};
    }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
        return x;
    } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for(var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++){
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        } else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys) keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    } else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                } else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            } else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict) route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    } else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string" ? delimiter.indexOf(endToken[endToken.length - 1]) > -1 : endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */ function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp) return regexpToRegexp(path, keys);
    if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp; //# sourceMappingURL=index.js.map


/***/ }),

/***/ 5153:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react-dom-server-rendering-stub.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var d = {
    usingClientEntryPoint: !1,
    Events: null,
    Dispatcher: {
        current: null
    }
};
function e(b) {
    for(var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + b, c = 1; c < arguments.length; c++)a += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + b + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var f = d.Dispatcher;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d;
exports.createPortal = function() {
    throw Error(e(448));
};
exports.experimental_useFormStatus = function() {
    throw Error(e(248));
};
exports.flushSync = function() {
    throw Error(e(449));
};
exports.preconnect = function(b, a) {
    var c = f.current;
    c && c.preconnect(b, a);
};
exports.prefetchDNS = function(b) {
    var a = f.current;
    a && a.prefetchDNS(b);
};
exports.preinit = function(b, a) {
    var c = f.current;
    c && c.preinit(b, a);
};
exports.preload = function(b, a) {
    var c = f.current;
    c && c.preload(b, a);
};
exports.unstable_batchedUpdates = function(b, a) {
    return b(a);
};
exports.version = "18.3.0-canary-1a001dac6-20230812";


/***/ }),

/***/ 2060:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(5153);
} else {}


/***/ }),

/***/ 9200:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-server-dom-webpack-server.edge.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var aa = __webpack_require__(2947), ba = __webpack_require__(2060), l = null, m = 0;
function n(a, b) {
    if (0 !== b.byteLength) if (512 < b.byteLength) 0 < m && (a.enqueue(new Uint8Array(l.buffer, 0, m)), l = new Uint8Array(512), m = 0), a.enqueue(b);
    else {
        var d = l.length - m;
        d < b.byteLength && (0 === d ? a.enqueue(l) : (l.set(b.subarray(0, d), m), a.enqueue(l), b = b.subarray(d)), l = new Uint8Array(512), m = 0);
        l.set(b, m);
        m += b.byteLength;
    }
    return !0;
}
var p = new TextEncoder;
function ca(a, b) {
    "function" === typeof a.error ? a.error(b) : a.close();
}
var q = Symbol.for("react.client.reference"), t = Symbol.for("react.server.reference");
function u(a, b, d) {
    return Object.defineProperties(a, {
        $$typeof: {
            value: q
        },
        $$id: {
            value: b
        },
        $$async: {
            value: d
        }
    });
}
var da = Function.prototype.bind, ea = Array.prototype.slice;
function fa() {
    var a = da.apply(this, arguments);
    if (this.$$typeof === t) {
        var b = ea.call(arguments, 1);
        a.$$typeof = t;
        a.$$id = this.$$id;
        a.$$bound = this.$$bound ? this.$$bound.concat(b) : b;
    }
    return a;
}
var ha = Promise.prototype, ia = {
    get: function(a, b) {
        switch(b){
            case "$$typeof":
                return a.$$typeof;
            case "$$id":
                return a.$$id;
            case "$$async":
                return a.$$async;
            case "name":
                return a.name;
            case "displayName":
                return;
            case "defaultProps":
                return;
            case "toJSON":
                return;
            case Symbol.toPrimitive:
                return Object.prototype[Symbol.toPrimitive];
            case "Provider":
                throw Error("Cannot render a Client Context Provider on the Server. Instead, you can export a Client Component wrapper that itself renders a Client Context Provider.");
        }
        throw Error("Cannot access " + (String(a.name) + "." + String(b)) + " on the server. You cannot dot into a client module from a server component. You can only pass the imported name through.");
    },
    set: function() {
        throw Error("Cannot assign to a client module from a server module.");
    }
}, ja = {
    get: function(a, b) {
        switch(b){
            case "$$typeof":
                return a.$$typeof;
            case "$$id":
                return a.$$id;
            case "$$async":
                return a.$$async;
            case "name":
                return a.name;
            case "defaultProps":
                return;
            case "toJSON":
                return;
            case Symbol.toPrimitive:
                return Object.prototype[Symbol.toPrimitive];
            case "__esModule":
                var d = a.$$id;
                a.default = u(function() {
                    throw Error("Attempted to call the default export of " + d + " from the server but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
                }, a.$$id + "#", a.$$async);
                return !0;
            case "then":
                if (a.then) return a.then;
                if (a.$$async) return;
                var c = u({}, a.$$id, !0), e = new Proxy(c, ja);
                a.status = "fulfilled";
                a.value = e;
                return a.then = u(function(f) {
                    return Promise.resolve(f(e));
                }, a.$$id + "#then", !1);
        }
        c = a[b];
        c || (c = u(function() {
            throw Error("Attempted to call " + String(b) + "() from the server but " + String(b) + " is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
        }, a.$$id + "#" + b, a.$$async), Object.defineProperty(c, "name", {
            value: b
        }), c = a[b] = new Proxy(c, ia));
        return c;
    },
    getPrototypeOf: function() {
        return ha;
    },
    set: function() {
        throw Error("Cannot assign to a client module from a server module.");
    }
}, pa = {
    prefetchDNS: ka,
    preconnect: la,
    preload: ma,
    preinit: na
};
function ka(a, b) {
    if ("string" === typeof a) {
        var d = v();
        if (d) {
            var c = d.hints, e = "D" + a;
            c.has(e) || (c.add(e), b ? w(d, "D", [
                a,
                b
            ]) : w(d, "D", a), x(d));
        }
    }
}
function la(a, b) {
    if ("string" === typeof a) {
        var d = v();
        if (d) {
            var c = d.hints, e = null == b || "string" !== typeof b.crossOrigin ? null : "use-credentials" === b.crossOrigin ? "use-credentials" : "";
            e = "C" + (null === e ? "null" : e) + "|" + a;
            c.has(e) || (c.add(e), b ? w(d, "C", [
                a,
                b
            ]) : w(d, "C", a), x(d));
        }
    }
}
function ma(a, b) {
    if ("string" === typeof a) {
        var d = v();
        if (d) {
            var c = d.hints, e = "L" + a;
            c.has(e) || (c.add(e), w(d, "L", [
                a,
                b
            ]), x(d));
        }
    }
}
function na(a, b) {
    if ("string" === typeof a) {
        var d = v();
        if (d) {
            var c = d.hints, e = "I" + a;
            c.has(e) || (c.add(e), w(d, "I", [
                a,
                b
            ]), x(d));
        }
    }
}
var qa = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Dispatcher, ra = "function" === typeof AsyncLocalStorage, sa = ra ? new AsyncLocalStorage : null, C = Symbol.for("react.element"), ta = Symbol.for("react.fragment"), ua = Symbol.for("react.provider"), va = Symbol.for("react.server_context"), wa = Symbol.for("react.forward_ref"), xa = Symbol.for("react.suspense"), ya = Symbol.for("react.suspense_list"), za = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), Aa = Symbol.for("react.default_value"), Ba = Symbol.for("react.memo_cache_sentinel"), Ca = Symbol.iterator, E = null;
function F(a, b) {
    if (a !== b) {
        a.context._currentValue = a.parentValue;
        a = a.parent;
        var d = b.parent;
        if (null === a) {
            if (null !== d) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
            if (null === d) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
            F(a, d);
            b.context._currentValue = b.value;
        }
    }
}
function Da(a) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    null !== a && Da(a);
}
function Ea(a) {
    var b = a.parent;
    null !== b && Ea(b);
    a.context._currentValue = a.value;
}
function Fa(a, b) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === b.depth ? F(a, b) : Fa(a, b);
}
function Ga(a, b) {
    var d = b.parent;
    if (null === d) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === d.depth ? F(a, d) : Ga(a, d);
    b.context._currentValue = b.value;
}
function Ha(a) {
    var b = E;
    b !== a && (null === b ? Ea(a) : null === a ? Da(b) : b.depth === a.depth ? F(b, a) : b.depth > a.depth ? Fa(b, a) : Ga(b, a), E = a);
}
function Ia(a, b) {
    var d = a._currentValue;
    a._currentValue = b;
    var c = E;
    return E = a = {
        parent: c,
        depth: null === c ? 0 : c.depth + 1,
        context: a,
        parentValue: d,
        value: b
    };
}
var Ja = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`");
function Ka() {}
function La(a, b, d) {
    d = a[d];
    void 0 === d ? a.push(b) : d !== b && (b.then(Ka, Ka), b = d);
    switch(b.status){
        case "fulfilled":
            return b.value;
        case "rejected":
            throw b.reason;
        default:
            if ("string" !== typeof b.status) switch(a = b, a.status = "pending", a.then(function(c) {
                if ("pending" === b.status) {
                    var e = b;
                    e.status = "fulfilled";
                    e.value = c;
                }
            }, function(c) {
                if ("pending" === b.status) {
                    var e = b;
                    e.status = "rejected";
                    e.reason = c;
                }
            }), b.status){
                case "fulfilled":
                    return b.value;
                case "rejected":
                    throw b.reason;
            }
            G = b;
            throw Ja;
    }
}
var G = null;
function Ma() {
    if (null === G) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
    var a = G;
    G = null;
    return a;
}
var H = null, I = 0, J = null;
function Na() {
    var a = J;
    J = null;
    return a;
}
function Oa(a) {
    return a._currentValue;
}
var Sa = {
    useMemo: function(a) {
        return a();
    },
    useCallback: function(a) {
        return a;
    },
    useDebugValue: function() {},
    useDeferredValue: K,
    useTransition: K,
    readContext: Oa,
    useContext: Oa,
    useReducer: K,
    useRef: K,
    useState: K,
    useInsertionEffect: K,
    useLayoutEffect: K,
    useImperativeHandle: K,
    useEffect: K,
    useId: Pa,
    useSyncExternalStore: K,
    useCacheRefresh: function() {
        return Qa;
    },
    useMemoCache: function(a) {
        for(var b = Array(a), d = 0; d < a; d++)b[d] = Ba;
        return b;
    },
    use: Ra
};
function K() {
    throw Error("This Hook is not supported in Server Components.");
}
function Qa() {
    throw Error("Refreshing the cache is not supported in Server Components.");
}
function Pa() {
    if (null === H) throw Error("useId can only be used while React is rendering");
    var a = H.identifierCount++;
    return ":" + H.identifierPrefix + "S" + a.toString(32) + ":";
}
function Ra(a) {
    if (null !== a && "object" === typeof a || "function" === typeof a) {
        if ("function" === typeof a.then) {
            var b = I;
            I += 1;
            null === J && (J = []);
            return La(J, a, b);
        }
        if (a.$$typeof === va) return a._currentValue;
    }
    throw Error("An unsupported type was passed to use(): " + String(a));
}
function Ta() {
    return (new AbortController).signal;
}
function Ua() {
    var a = v();
    return a ? a.cache : new Map;
}
var Va = {
    getCacheSignal: function() {
        var a = Ua(), b = a.get(Ta);
        void 0 === b && (b = Ta(), a.set(Ta, b));
        return b;
    },
    getCacheForType: function(a) {
        var b = Ua(), d = b.get(a);
        void 0 === d && (d = a(), b.set(a, d));
        return d;
    }
}, Wa = Array.isArray;
function Xa(a) {
    return Object.prototype.toString.call(a).replace(/^\[object (.*)\]$/, function(b, d) {
        return d;
    });
}
function Ya(a) {
    switch(typeof a){
        case "string":
            return JSON.stringify(10 >= a.length ? a : a.slice(0, 10) + "...");
        case "object":
            if (Wa(a)) return "[...]";
            a = Xa(a);
            return "Object" === a ? "{...}" : a;
        case "function":
            return "function";
        default:
            return String(a);
    }
}
function L(a) {
    if ("string" === typeof a) return a;
    switch(a){
        case xa:
            return "Suspense";
        case ya:
            return "SuspenseList";
    }
    if ("object" === typeof a) switch(a.$$typeof){
        case wa:
            return L(a.render);
        case za:
            return L(a.type);
        case D:
            var b = a._payload;
            a = a._init;
            try {
                return L(a(b));
            } catch (d) {}
    }
    return "";
}
function M(a, b) {
    var d = Xa(a);
    if ("Object" !== d && "Array" !== d) return d;
    d = -1;
    var c = 0;
    if (Wa(a)) {
        var e = "[";
        for(var f = 0; f < a.length; f++){
            0 < f && (e += ", ");
            var g = a[f];
            g = "object" === typeof g && null !== g ? M(g) : Ya(g);
            "" + f === b ? (d = e.length, c = g.length, e += g) : e = 10 > g.length && 40 > e.length + g.length ? e + g : e + "...";
        }
        e += "]";
    } else if (a.$$typeof === C) e = "<" + L(a.type) + "/>";
    else {
        e = "{";
        f = Object.keys(a);
        for(g = 0; g < f.length; g++){
            0 < g && (e += ", ");
            var k = f[g], h = JSON.stringify(k);
            e += ('"' + k + '"' === h ? k : h) + ": ";
            h = a[k];
            h = "object" === typeof h && null !== h ? M(h) : Ya(h);
            k === b ? (d = e.length, c = h.length, e += h) : e = 10 > h.length && 40 > e.length + h.length ? e + h : e + "...";
        }
        e += "}";
    }
    return void 0 === b ? e : -1 < d && 0 < c ? (a = " ".repeat(d) + "^".repeat(c), "\n  " + e + "\n  " + a) : "\n  " + e;
}
var Za = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $a = Za.ContextRegistry, N = JSON.stringify, ab = Za.ReactCurrentDispatcher, bb = Za.ReactCurrentCache;
function cb(a) {
    console.error(a);
}
function db(a, b, d, c, e) {
    if (null !== bb.current && bb.current !== Va) throw Error("Currently React only supports one RSC renderer at a time.");
    qa.current = pa;
    bb.current = Va;
    var f = new Set, g = [], k = new Set, h = {
        status: 0,
        flushScheduled: !1,
        fatalError: null,
        destination: null,
        bundlerConfig: b,
        cache: new Map,
        nextChunkId: 0,
        pendingChunks: 0,
        hints: k,
        abortableTasks: f,
        pingedTasks: g,
        completedImportChunks: [],
        completedHintChunks: [],
        completedRegularChunks: [],
        completedErrorChunks: [],
        writtenSymbols: new Map,
        writtenClientReferences: new Map,
        writtenServerReferences: new Map,
        writtenProviders: new Map,
        identifierPrefix: e || "",
        identifierCount: 1,
        onError: void 0 === d ? cb : d,
        toJSON: function(r, y) {
            return eb(h, this, r, y);
        }
    };
    h.pendingChunks++;
    b = fb(c);
    a = gb(h, a, b, f);
    g.push(a);
    return h;
}
var O = null;
function v() {
    if (O) return O;
    if (ra) {
        var a = sa.getStore();
        if (a) return a;
    }
    return null;
}
var hb = {};
function ib(a, b) {
    a.pendingChunks++;
    var d = gb(a, null, E, a.abortableTasks);
    switch(b.status){
        case "fulfilled":
            return d.model = b.value, jb(a, d), d.id;
        case "rejected":
            var c = P(a, b.reason);
            Q(a, d.id, c);
            return d.id;
        default:
            "string" !== typeof b.status && (b.status = "pending", b.then(function(e) {
                "pending" === b.status && (b.status = "fulfilled", b.value = e);
            }, function(e) {
                "pending" === b.status && (b.status = "rejected", b.reason = e);
            }));
    }
    b.then(function(e) {
        d.model = e;
        jb(a, d);
    }, function(e) {
        d.status = 4;
        e = P(a, e);
        Q(a, d.id, e);
        null !== a.destination && R(a, a.destination);
    });
    return d.id;
}
function kb(a) {
    if ("fulfilled" === a.status) return a.value;
    if ("rejected" === a.status) throw a.reason;
    throw a;
}
function lb(a) {
    switch(a.status){
        case "fulfilled":
        case "rejected":
            break;
        default:
            "string" !== typeof a.status && (a.status = "pending", a.then(function(b) {
                "pending" === a.status && (a.status = "fulfilled", a.value = b);
            }, function(b) {
                "pending" === a.status && (a.status = "rejected", a.reason = b);
            }));
    }
    return {
        $$typeof: D,
        _payload: a,
        _init: kb
    };
}
function S(a, b, d, c, e, f) {
    if (null !== c && void 0 !== c) throw Error("Refs cannot be used in Server Components, nor passed to Client Components.");
    if ("function" === typeof b) {
        if (b.$$typeof === q) return [
            C,
            b,
            d,
            e
        ];
        I = 0;
        J = f;
        e = b(e);
        return "object" === typeof e && null !== e && "function" === typeof e.then ? "fulfilled" === e.status ? e.value : lb(e) : e;
    }
    if ("string" === typeof b) return [
        C,
        b,
        d,
        e
    ];
    if ("symbol" === typeof b) return b === ta ? e.children : [
        C,
        b,
        d,
        e
    ];
    if (null != b && "object" === typeof b) {
        if (b.$$typeof === q) return [
            C,
            b,
            d,
            e
        ];
        switch(b.$$typeof){
            case D:
                var g = b._init;
                b = g(b._payload);
                return S(a, b, d, c, e, f);
            case wa:
                return a = b.render, I = 0, J = f, a(e, void 0);
            case za:
                return S(a, b.type, d, c, e, f);
            case ua:
                return Ia(b._context, e.value), [
                    C,
                    b,
                    d,
                    {
                        value: e.value,
                        children: e.children,
                        __pop: hb
                    }
                ];
        }
    }
    throw Error("Unsupported Server Component type: " + Ya(b));
}
function jb(a, b) {
    var d = a.pingedTasks;
    d.push(b);
    1 === d.length && (a.flushScheduled = null !== a.destination, setTimeout(function() {
        return mb(a);
    }, 0));
}
function gb(a, b, d, c) {
    var e = {
        id: a.nextChunkId++,
        status: 0,
        model: b,
        context: d,
        ping: function() {
            return jb(a, e);
        },
        thenableState: null
    };
    c.add(e);
    return e;
}
function T(a) {
    return "$" + a.toString(16);
}
function nb(a, b, d, c) {
    var e = c.$$async ? c.$$id + "#async" : c.$$id, f = a.writtenClientReferences, g = f.get(e);
    if (void 0 !== g) return b[0] === C && "1" === d ? "$L" + g.toString(16) : T(g);
    try {
        var k = a.bundlerConfig, h = c.$$id;
        g = "";
        var r = k[h];
        if (r) g = r.name;
        else {
            var y = h.lastIndexOf("#");
            -1 !== y && (g = h.slice(y + 1), r = k[h.slice(0, y)]);
            if (!r) throw Error('Could not find the module "' + h + '" in the React Client Manifest. This is probably a bug in the React Server Components bundler.');
        }
        var z = {
            id: r.id,
            chunks: r.chunks,
            name: g,
            async: !!c.$$async
        };
        a.pendingChunks++;
        var A = a.nextChunkId++, oa = N(z), B = A.toString(16) + ":I" + oa + "\n";
        var Fb = p.encode(B);
        a.completedImportChunks.push(Fb);
        f.set(e, A);
        return b[0] === C && "1" === d ? "$L" + A.toString(16) : T(A);
    } catch (Gb) {
        return a.pendingChunks++, b = a.nextChunkId++, d = P(a, Gb), Q(a, b, d), T(b);
    }
}
function ob(a, b) {
    a.pendingChunks++;
    var d = a.nextChunkId++;
    b = pb(a, d, b);
    a.completedRegularChunks.push(b);
    return d;
}
function eb(a, b, d, c) {
    switch(c){
        case C:
            return "$";
    }
    for(; "object" === typeof c && null !== c && (c.$$typeof === C || c.$$typeof === D);)try {
        switch(c.$$typeof){
            case C:
                var e = c;
                c = S(a, e.type, e.key, e.ref, e.props, null);
                break;
            case D:
                var f = c._init;
                c = f(c._payload);
        }
    } catch (g) {
        d = g === Ja ? Ma() : g;
        if ("object" === typeof d && null !== d && "function" === typeof d.then) return a.pendingChunks++, a = gb(a, c, E, a.abortableTasks), c = a.ping, d.then(c, c), a.thenableState = Na(), "$L" + a.id.toString(16);
        a.pendingChunks++;
        c = a.nextChunkId++;
        d = P(a, d);
        Q(a, c, d);
        return "$L" + c.toString(16);
    }
    if (null === c) return null;
    if ("object" === typeof c) {
        if (c.$$typeof === q) return nb(a, b, d, c);
        if ("function" === typeof c.then) return "$@" + ib(a, c).toString(16);
        if (c.$$typeof === ua) return c = c._context._globalName, b = a.writtenProviders, d = b.get(d), void 0 === d && (a.pendingChunks++, d = a.nextChunkId++, b.set(c, d), c = qb(a, d, "$P" + c), a.completedRegularChunks.push(c)), T(d);
        if (c === hb) {
            a = E;
            if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
            c = a.parentValue;
            a.context._currentValue = c === Aa ? a.context._defaultValue : c;
            E = a.parent;
            return;
        }
        return c instanceof Map ? "$Q" + ob(a, Array.from(c)).toString(16) : c instanceof Set ? "$W" + ob(a, Array.from(c)).toString(16) : !Wa(c) && (null === c || "object" !== typeof c ? a = null : (a = Ca && c[Ca] || c["@@iterator"], a = "function" === typeof a ? a : null), a) ? Array.from(c) : c;
    }
    if ("string" === typeof c) {
        if ("Z" === c[c.length - 1] && b[d] instanceof Date) return "$D" + c;
        if (1024 <= c.length) return a.pendingChunks += 2, d = a.nextChunkId++, c = p.encode(c), b = c.byteLength, b = d.toString(16) + ":T" + b.toString(16) + ",", b = p.encode(b), a.completedRegularChunks.push(b, c), T(d);
        a = "$" === c[0] ? "$" + c : c;
        return a;
    }
    if ("boolean" === typeof c) return c;
    if ("number" === typeof c) return a = c, Number.isFinite(a) ? 0 === a && -Infinity === 1 / a ? "$-0" : a : Infinity === a ? "$Infinity" : -Infinity === a ? "$-Infinity" : "$NaN";
    if ("undefined" === typeof c) return "$undefined";
    if ("function" === typeof c) {
        if (c.$$typeof === q) return nb(a, b, d, c);
        if (c.$$typeof === t) return d = a.writtenServerReferences, b = d.get(c), void 0 !== b ? a = "$F" + b.toString(16) : (b = c.$$bound, b = {
            id: c.$$id,
            bound: b ? Promise.resolve(b) : null
        }, a = ob(a, b), d.set(c, a), a = "$F" + a.toString(16)), a;
        if (/^on[A-Z]/.test(d)) throw Error("Event handlers cannot be passed to Client Component props." + M(b, d) + "\nIf you need interactivity, consider converting part of this to a Client Component.");
        throw Error('Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server".' + M(b, d));
    }
    if ("symbol" === typeof c) {
        e = a.writtenSymbols;
        f = e.get(c);
        if (void 0 !== f) return T(f);
        f = c.description;
        if (Symbol.for(f) !== c) throw Error("Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(" + (c.description + ") cannot be found among global symbols.") + M(b, d));
        a.pendingChunks++;
        d = a.nextChunkId++;
        b = qb(a, d, "$S" + f);
        a.completedImportChunks.push(b);
        e.set(c, d);
        return T(d);
    }
    if ("bigint" === typeof c) return "$n" + c.toString(10);
    throw Error("Type " + typeof c + " is not supported in Client Component props." + M(b, d));
}
function P(a, b) {
    a = a.onError;
    b = a(b);
    if (null != b && "string" !== typeof b) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof b + '" instead');
    return b || "";
}
function rb(a, b) {
    null !== a.destination ? (a.status = 2, ca(a.destination, b)) : (a.status = 1, a.fatalError = b);
}
function Q(a, b, d) {
    d = {
        digest: d
    };
    b = b.toString(16) + ":E" + N(d) + "\n";
    b = p.encode(b);
    a.completedErrorChunks.push(b);
}
function w(a, b, d) {
    var c = a.nextChunkId++;
    d = N(d);
    b = "H" + b;
    c = c.toString(16) + ":" + b;
    c = p.encode(c + d + "\n");
    a.completedHintChunks.push(c);
}
function mb(a) {
    var b = ab.current;
    ab.current = Sa;
    var d = O;
    H = O = a;
    try {
        var c = a.pingedTasks;
        a.pingedTasks = [];
        for(var e = 0; e < c.length; e++){
            var f = c[e];
            var g = a;
            if (0 === f.status) {
                Ha(f.context);
                try {
                    var k = f.model;
                    if ("object" === typeof k && null !== k && k.$$typeof === C) {
                        var h = k, r = f.thenableState;
                        f.model = k;
                        k = S(g, h.type, h.key, h.ref, h.props, r);
                        for(f.thenableState = null; "object" === typeof k && null !== k && k.$$typeof === C;)h = k, f.model = k, k = S(g, h.type, h.key, h.ref, h.props, null);
                    }
                    var y = pb(g, f.id, k);
                    g.completedRegularChunks.push(y);
                    g.abortableTasks.delete(f);
                    f.status = 1;
                } catch (B) {
                    var z = B === Ja ? Ma() : B;
                    if ("object" === typeof z && null !== z && "function" === typeof z.then) {
                        var A = f.ping;
                        z.then(A, A);
                        f.thenableState = Na();
                    } else {
                        g.abortableTasks.delete(f);
                        f.status = 4;
                        var oa = P(g, z);
                        Q(g, f.id, oa);
                    }
                }
            }
        }
        null !== a.destination && R(a, a.destination);
    } catch (B) {
        P(a, B), rb(a, B);
    } finally{
        ab.current = b, H = null, O = d;
    }
}
function R(a, b) {
    l = new Uint8Array(512);
    m = 0;
    try {
        for(var d = a.completedImportChunks, c = 0; c < d.length; c++)a.pendingChunks--, n(b, d[c]);
        d.splice(0, c);
        var e = a.completedHintChunks;
        for(c = 0; c < e.length; c++)n(b, e[c]);
        e.splice(0, c);
        var f = a.completedRegularChunks;
        for(c = 0; c < f.length; c++)a.pendingChunks--, n(b, f[c]);
        f.splice(0, c);
        var g = a.completedErrorChunks;
        for(c = 0; c < g.length; c++)a.pendingChunks--, n(b, g[c]);
        g.splice(0, c);
    } finally{
        a.flushScheduled = !1, l && 0 < m && (b.enqueue(new Uint8Array(l.buffer, 0, m)), l = null, m = 0);
    }
    0 === a.pendingChunks && b.close();
}
function sb(a) {
    a.flushScheduled = null !== a.destination;
    ra ? setTimeout(function() {
        return sa.run(a, mb, a);
    }, 0) : setTimeout(function() {
        return mb(a);
    }, 0);
}
function x(a) {
    if (!1 === a.flushScheduled && 0 === a.pingedTasks.length && null !== a.destination) {
        var b = a.destination;
        a.flushScheduled = !0;
        setTimeout(function() {
            return R(a, b);
        }, 0);
    }
}
function tb(a, b) {
    try {
        var d = a.abortableTasks;
        if (0 < d.size) {
            var c = P(a, void 0 === b ? Error("The render was aborted by the server without a reason.") : b);
            a.pendingChunks++;
            var e = a.nextChunkId++;
            Q(a, e, c);
            d.forEach(function(f) {
                f.status = 3;
                var g = T(e);
                f = qb(a, f.id, g);
                a.completedErrorChunks.push(f);
            });
            d.clear();
        }
        null !== a.destination && R(a, a.destination);
    } catch (f) {
        P(a, f), rb(a, f);
    }
}
function fb(a) {
    if (a) {
        var b = E;
        Ha(null);
        for(var d = 0; d < a.length; d++){
            var c = a[d], e = c[0];
            c = c[1];
            $a[e] || ($a[e] = aa.createServerContext(e, Aa));
            Ia($a[e], c);
        }
        a = E;
        Ha(b);
        return a;
    }
    return null;
}
function pb(a, b, d) {
    a = N(d, a.toJSON);
    b = b.toString(16) + ":" + a + "\n";
    return p.encode(b);
}
function qb(a, b, d) {
    a = N(d);
    b = b.toString(16) + ":" + a + "\n";
    return p.encode(b);
}
function ub(a, b) {
    var d = "", c = a[b];
    if (c) d = c.name;
    else {
        var e = b.lastIndexOf("#");
        -1 !== e && (d = b.slice(e + 1), c = a[b.slice(0, e)]);
        if (!c) throw Error('Could not find the module "' + b + '" in the React Server Manifest. This is probably a bug in the React Server Components bundler.');
    }
    return {
        id: c.id,
        chunks: c.chunks,
        name: d,
        async: !1
    };
}
var U = new Map;
function vb(a) {
    var b = globalThis.__next_require__(a);
    if ("function" !== typeof b.then || "fulfilled" === b.status) return null;
    b.then(function(d) {
        b.status = "fulfilled";
        b.value = d;
    }, function(d) {
        b.status = "rejected";
        b.reason = d;
    });
    return b;
}
function wb() {}
function xb(a) {
    for(var b = a.chunks, d = [], c = 0; c < b.length; c++){
        var e = b[c], f = U.get(e);
        if (void 0 === f) {
            f = globalThis.__next_chunk_load__(e);
            d.push(f);
            var g = U.set.bind(U, e, null);
            f.then(g, wb);
            U.set(e, f);
        } else null !== f && d.push(f);
    }
    return a.async ? 0 === d.length ? vb(a.id) : Promise.all(d).then(function() {
        return vb(a.id);
    }) : 0 < d.length ? Promise.all(d) : null;
}
function V(a) {
    var b = globalThis.__next_require__(a.id);
    if (a.async && "function" === typeof b.then) if ("fulfilled" === b.status) b = b.value;
    else throw b.reason;
    return "*" === a.name ? b : "" === a.name ? b.__esModule ? b.default : b : b[a.name];
}
function W(a, b, d, c) {
    this.status = a;
    this.value = b;
    this.reason = d;
    this._response = c;
}
W.prototype = Object.create(Promise.prototype);
W.prototype.then = function(a, b) {
    switch(this.status){
        case "resolved_model":
            yb(this);
    }
    switch(this.status){
        case "fulfilled":
            a(this.value);
            break;
        case "pending":
        case "blocked":
            a && (null === this.value && (this.value = []), this.value.push(a));
            b && (null === this.reason && (this.reason = []), this.reason.push(b));
            break;
        default:
            b(this.reason);
    }
};
function zb(a, b) {
    for(var d = 0; d < a.length; d++)(0, a[d])(b);
}
function Ab(a, b) {
    if ("pending" === a.status || "blocked" === a.status) {
        var d = a.reason;
        a.status = "rejected";
        a.reason = b;
        null !== d && zb(d, b);
    }
}
function Bb(a, b, d, c, e, f) {
    var g = ub(a._bundlerConfig, b);
    a = xb(g);
    if (d) d = Promise.all([
        d,
        a
    ]).then(function(k) {
        k = k[0];
        var h = V(g);
        return h.bind.apply(h, [
            null
        ].concat(k));
    });
    else if (a) d = Promise.resolve(a).then(function() {
        return V(g);
    });
    else return V(g);
    d.then(Cb(c, e, f), Db(c));
    return null;
}
var X = null, Y = null;
function yb(a) {
    var b = X, d = Y;
    X = a;
    Y = null;
    try {
        var c = JSON.parse(a.value, a._response._fromJSON);
        null !== Y && 0 < Y.deps ? (Y.value = c, a.status = "blocked", a.value = null, a.reason = null) : (a.status = "fulfilled", a.value = c);
    } catch (e) {
        a.status = "rejected", a.reason = e;
    } finally{
        X = b, Y = d;
    }
}
function Eb(a, b) {
    a._chunks.forEach(function(d) {
        "pending" === d.status && Ab(d, b);
    });
}
function Z(a, b) {
    var d = a._chunks, c = d.get(b);
    c || (c = a._formData.get(a._prefix + b), c = null != c ? new W("resolved_model", c, null, a) : new W("pending", null, null, a), d.set(b, c));
    return c;
}
function Cb(a, b, d) {
    if (Y) {
        var c = Y;
        c.deps++;
    } else c = Y = {
        deps: 1,
        value: null
    };
    return function(e) {
        b[d] = e;
        c.deps--;
        0 === c.deps && "blocked" === a.status && (e = a.value, a.status = "fulfilled", a.value = c.value, null !== e && zb(e, c.value));
    };
}
function Db(a) {
    return function(b) {
        return Ab(a, b);
    };
}
function Hb(a, b) {
    a = Z(a, b);
    "resolved_model" === a.status && yb(a);
    if ("fulfilled" !== a.status) throw a.reason;
    return a.value;
}
function Ib(a, b, d, c) {
    if ("$" === c[0]) switch(c[1]){
        case "$":
            return c.slice(1);
        case "@":
            return b = parseInt(c.slice(2), 16), Z(a, b);
        case "S":
            return Symbol.for(c.slice(2));
        case "F":
            return c = parseInt(c.slice(2), 16), c = Hb(a, c), Bb(a, c.id, c.bound, X, b, d);
        case "Q":
            return b = parseInt(c.slice(2), 16), a = Hb(a, b), new Map(a);
        case "W":
            return b = parseInt(c.slice(2), 16), a = Hb(a, b), new Set(a);
        case "K":
            b = c.slice(2);
            var e = a._prefix + b + "_", f = new FormData;
            a._formData.forEach(function(g, k) {
                k.startsWith(e) && f.append(k.slice(e.length), g);
            });
            return f;
        case "I":
            return Infinity;
        case "-":
            return "$-0" === c ? -0 : -Infinity;
        case "N":
            return NaN;
        case "u":
            return;
        case "D":
            return new Date(Date.parse(c.slice(2)));
        case "n":
            return BigInt(c.slice(2));
        default:
            c = parseInt(c.slice(1), 16);
            a = Z(a, c);
            switch(a.status){
                case "resolved_model":
                    yb(a);
            }
            switch(a.status){
                case "fulfilled":
                    return a.value;
                case "pending":
                case "blocked":
                    return c = X, a.then(Cb(c, b, d), Db(c)), null;
                default:
                    throw a.reason;
            }
    }
    return c;
}
function Jb(a, b) {
    var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : new FormData, c = new Map, e = {
        _bundlerConfig: a,
        _prefix: b,
        _formData: d,
        _chunks: c,
        _fromJSON: function(f, g) {
            return "string" === typeof g ? Ib(e, this, f, g) : g;
        }
    };
    return e;
}
function Kb(a) {
    Eb(a, Error("Connection closed."));
}
function Lb(a, b, d) {
    var c = ub(a, b);
    a = xb(c);
    return d ? Promise.all([
        d,
        a
    ]).then(function(e) {
        e = e[0];
        var f = V(c);
        return f.bind.apply(f, [
            null
        ].concat(e));
    }) : a ? Promise.resolve(a).then(function() {
        return V(c);
    }) : Promise.resolve(V(c));
}
exports.createClientModuleProxy = function(a) {
    a = u({}, a, !1);
    return new Proxy(a, ja);
};
exports.decodeAction = function(a, b) {
    var d = new FormData, c = null;
    a.forEach(function(e, f) {
        if (f.startsWith("$ACTION_")) if (f.startsWith("$ACTION_REF_")) {
            e = "$ACTION_" + f.slice(12) + ":";
            e = Jb(b, e, a);
            Kb(e);
            e = Z(e, 0);
            e.then(function() {});
            if ("fulfilled" !== e.status) throw e.reason;
            e = e.value;
            c = Lb(b, e.id, e.bound);
        } else f.startsWith("$ACTION_ID_") && (e = f.slice(11), c = Lb(b, e, null));
        else d.append(f, e);
    });
    return null === c ? null : c.then(function(e) {
        return e.bind(null, d);
    });
};
exports.decodeReply = function(a, b) {
    if ("string" === typeof a) {
        var d = new FormData;
        d.append("0", a);
        a = d;
    }
    a = Jb(b, "", a);
    Kb(a);
    return Z(a, 0);
};
exports.registerClientReference = function(a, b, d) {
    return u(a, b + "#" + d, !1);
};
exports.registerServerReference = function(a, b, d) {
    return Object.defineProperties(a, {
        $$typeof: {
            value: t
        },
        $$id: {
            value: null === d ? b : b + "#" + d
        },
        $$bound: {
            value: null
        },
        bind: {
            value: fa
        }
    });
};
exports.renderToReadableStream = function(a, b, d) {
    var c = db(a, b, d ? d.onError : void 0, d ? d.context : void 0, d ? d.identifierPrefix : void 0);
    if (d && d.signal) {
        var e = d.signal;
        if (e.aborted) tb(c, e.reason);
        else {
            var f = function() {
                tb(c, e.reason);
                e.removeEventListener("abort", f);
            };
            e.addEventListener("abort", f);
        }
    }
    return new ReadableStream({
        type: "bytes",
        start: function() {
            sb(c);
        },
        pull: function(g) {
            if (1 === c.status) c.status = 2, ca(g, c.fatalError);
            else if (2 !== c.status && null === c.destination) {
                c.destination = g;
                try {
                    R(c, g);
                } catch (k) {
                    P(c, k), rb(c, k);
                }
            }
        },
        cancel: function() {}
    }, {
        highWaterMark: 0
    });
};


/***/ }),

/***/ 9642:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(9200);
} else {}


/***/ }),

/***/ 9446:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react.shared-subset.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var m = Object.assign, n = {
    current: null
};
function p() {
    return new Map;
}
if ("function" === typeof fetch) {
    var q = fetch, r = function(a, b) {
        var d = n.current;
        if (!d || b && b.signal && b.signal !== d.getCacheSignal()) return q(a, b);
        if ("string" !== typeof a || b) {
            var c = "string" === typeof a || a instanceof URL ? new Request(a, b) : a;
            if ("GET" !== c.method && "HEAD" !== c.method || c.keepalive) return q(a, b);
            var e = JSON.stringify([
                c.method,
                Array.from(c.headers.entries()),
                c.mode,
                c.redirect,
                c.credentials,
                c.referrer,
                c.referrerPolicy,
                c.integrity
            ]);
            c = c.url;
        } else e = '["GET",[],null,"follow",null,null,null,null]', c = a;
        var f = d.getCacheForType(p);
        d = f.get(c);
        if (void 0 === d) a = q(a, b), f.set(c, [
            e,
            a
        ]);
        else {
            c = 0;
            for(f = d.length; c < f; c += 2){
                var h = d[c + 1];
                if (d[c] === e) return a = h, a.then(function(g) {
                    return g.clone();
                });
            }
            a = q(a, b);
            d.push(e, a);
        }
        return a.then(function(g) {
            return g.clone();
        });
    };
    m(r, q);
    try {
        fetch = r;
    } catch (a) {
        try {
            globalThis.fetch = r;
        } catch (b) {
            console.warn("React was unable to patch the fetch() function in this environment. Suspensey APIs might not work correctly as a result.");
        }
    }
}
var t = Symbol.for("react.element"), u = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), z = Symbol.for("react.server_context"), A = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), aa = Symbol.for("react.lazy"), D = Symbol.for("react.default_value"), E = Symbol.iterator;
function ba(a) {
    if (null === a || "object" !== typeof a) return null;
    a = E && a[E] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
function F(a) {
    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, d = 1; d < arguments.length; d++)b += "&args[]=" + encodeURIComponent(arguments[d]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var G = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, H = {};
function I(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = H;
    this.updater = d || G;
}
I.prototype.isReactComponent = {};
I.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(F(85));
    this.updater.enqueueSetState(this, a, b, "setState");
};
I.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function J() {}
J.prototype = I.prototype;
function K(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = H;
    this.updater = d || G;
}
var L = K.prototype = new J;
L.constructor = K;
m(L, I.prototype);
L.isPureReactComponent = !0;
var M = Array.isArray, N = Object.prototype.hasOwnProperty, O = {
    current: null
}, P = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ca(a, b) {
    return {
        $$typeof: t,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function Q(a) {
    return "object" === typeof a && null !== a && a.$$typeof === t;
}
function escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(d) {
        return b[d];
    });
}
var R = /\/+/g;
function S(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function T(a, b, d, c, e) {
    var f = typeof a;
    if ("undefined" === f || "boolean" === f) a = null;
    var h = !1;
    if (null === a) h = !0;
    else switch(f){
        case "string":
        case "number":
            h = !0;
            break;
        case "object":
            switch(a.$$typeof){
                case t:
                case u:
                    h = !0;
            }
    }
    if (h) return h = a, e = e(h), a = "" === c ? "." + S(h, 0) : c, M(e) ? (d = "", null != a && (d = a.replace(R, "$&/") + "/"), T(e, b, d, "", function(l) {
        return l;
    })) : null != e && (Q(e) && (e = ca(e, d + (!e.key || h && h.key === e.key ? "" : ("" + e.key).replace(R, "$&/") + "/") + a)), b.push(e)), 1;
    h = 0;
    c = "" === c ? "." : c + ":";
    if (M(a)) for(var g = 0; g < a.length; g++){
        f = a[g];
        var k = c + S(f, g);
        h += T(f, b, d, k, e);
    }
    else if (k = ba(a), "function" === typeof k) for(a = k.call(a), g = 0; !(f = a.next()).done;)f = f.value, k = c + S(f, g++), h += T(f, b, d, k, e);
    else if ("object" === f) throw b = String(a), Error(F(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
    return h;
}
function U(a, b, d) {
    if (null == a) return a;
    var c = [], e = 0;
    T(a, c, "", "", function(f) {
        return b.call(d, f, e++);
    });
    return c;
}
function da(a) {
    if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(d) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = d;
        }, function(d) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = d;
        });
        -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
function ea() {
    return new WeakMap;
}
function V() {
    return {
        s: 0,
        v: void 0,
        o: null,
        p: null
    };
}
var W = {
    current: null
}, X = {
    transition: null
}, Y = {
    ReactCurrentDispatcher: W,
    ReactCurrentCache: n,
    ReactCurrentBatchConfig: X,
    ReactCurrentOwner: O,
    ContextRegistry: {}
}, Z = Y.ContextRegistry;
exports.Children = {
    map: U,
    forEach: function(a, b, d) {
        U(a, function() {
            b.apply(this, arguments);
        }, d);
    },
    count: function(a) {
        var b = 0;
        U(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a) {
        return U(a, function(b) {
            return b;
        }) || [];
    },
    only: function(a) {
        if (!Q(a)) throw Error(F(143));
        return a;
    }
};
exports.Fragment = v;
exports.Profiler = x;
exports.StrictMode = w;
exports.Suspense = B;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y;
exports.cache = function(a) {
    return function() {
        var b = n.current;
        if (!b) return a.apply(null, arguments);
        var d = b.getCacheForType(ea);
        b = d.get(a);
        void 0 === b && (b = V(), d.set(a, b));
        d = 0;
        for(var c = arguments.length; d < c; d++){
            var e = arguments[d];
            if ("function" === typeof e || "object" === typeof e && null !== e) {
                var f = b.o;
                null === f && (b.o = f = new WeakMap);
                b = f.get(e);
                void 0 === b && (b = V(), f.set(e, b));
            } else f = b.p, null === f && (b.p = f = new Map), b = f.get(e), void 0 === b && (b = V(), f.set(e, b));
        }
        if (1 === b.s) return b.v;
        if (2 === b.s) throw b.v;
        try {
            var h = a.apply(null, arguments);
            d = b;
            d.s = 1;
            return d.v = h;
        } catch (g) {
            throw h = b, h.s = 2, h.v = g, g;
        }
    };
};
exports.cloneElement = function(a, b, d) {
    if (null === a || void 0 === a) throw Error(F(267, a));
    var c = m({}, a.props), e = a.key, f = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (f = b.ref, h = O.current);
        void 0 !== b.key && (e = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for(k in b)N.call(b, k) && !P.hasOwnProperty(k) && (c[k] = void 0 === b[k] && void 0 !== g ? g[k] : b[k]);
    }
    var k = arguments.length - 2;
    if (1 === k) c.children = d;
    else if (1 < k) {
        g = Array(k);
        for(var l = 0; l < k; l++)g[l] = arguments[l + 2];
        c.children = g;
    }
    return {
        $$typeof: t,
        type: a.type,
        key: e,
        ref: f,
        props: c,
        _owner: h
    };
};
exports.createElement = function(a, b, d) {
    var c, e = {}, f = null, h = null;
    if (null != b) for(c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (f = "" + b.key), b)N.call(b, c) && !P.hasOwnProperty(c) && (e[c] = b[c]);
    var g = arguments.length - 2;
    if (1 === g) e.children = d;
    else if (1 < g) {
        for(var k = Array(g), l = 0; l < g; l++)k[l] = arguments[l + 2];
        e.children = k;
    }
    if (a && a.defaultProps) for(c in g = a.defaultProps, g)void 0 === e[c] && (e[c] = g[c]);
    return {
        $$typeof: t,
        type: a,
        key: f,
        ref: h,
        props: e,
        _owner: O.current
    };
};
exports.createRef = function() {
    return {
        current: null
    };
};
exports.createServerContext = function(a, b) {
    var d = !0;
    if (!Z[a]) {
        d = !1;
        var c = {
            $$typeof: z,
            _currentValue: b,
            _currentValue2: b,
            _defaultValue: b,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _globalName: a
        };
        c.Provider = {
            $$typeof: y,
            _context: c
        };
        Z[a] = c;
    }
    c = Z[a];
    if (c._defaultValue === D) c._defaultValue = b, c._currentValue === D && (c._currentValue = b), c._currentValue2 === D && (c._currentValue2 = b);
    else if (d) throw Error(F(429, a));
    return c;
};
exports.forwardRef = function(a) {
    return {
        $$typeof: A,
        render: a
    };
};
exports.isValidElement = Q;
exports.lazy = function(a) {
    return {
        $$typeof: aa,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: da
    };
};
exports.memo = function(a, b) {
    return {
        $$typeof: C,
        type: a,
        compare: void 0 === b ? null : b
    };
};
exports.startTransition = function(a) {
    var b = X.transition;
    X.transition = {};
    try {
        a();
    } finally{
        X.transition = b;
    }
};
exports.use = function(a) {
    return W.current.use(a);
};
exports.useCallback = function(a, b) {
    return W.current.useCallback(a, b);
};
exports.useContext = function(a) {
    return W.current.useContext(a);
};
exports.useDebugValue = function() {};
exports.useId = function() {
    return W.current.useId();
};
exports.useMemo = function(a, b) {
    return W.current.useMemo(a, b);
};
exports.version = "18.3.0-canary-1a001dac6-20230812";


/***/ }),

/***/ 2947:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(9446);
} else {}


/***/ }),

/***/ 85:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    fillMetadataSegment: function() {
        return fillMetadataSegment;
    },
    normalizeMetadataRoute: function() {
        return normalizeMetadataRoute;
    }
});
const _ismetadataroute = __webpack_require__(4982);
const _path = /*#__PURE__*/ _interop_require_default(__webpack_require__(2490));
const _serverutils = __webpack_require__(9179);
const _routeregex = __webpack_require__(8630);
const _hash = __webpack_require__(376);
const _apppaths = __webpack_require__(7879);
const _normalizepathsep = __webpack_require__(2883);
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/*
 * If there's special convention like (...) or @ in the page path,
 * Give it a unique hash suffix to avoid conflicts
 *
 * e.g.
 * /app/open-graph.tsx -> /open-graph/route
 * /app/(post)/open-graph.tsx -> /open-graph/route-[0-9a-z]{6}
 */ function getMetadataRouteSuffix(page) {
    let suffix = "";
    if (page.includes("(") && page.includes(")") || page.includes("@")) {
        suffix = (0, _hash.djb2Hash)(page).toString(36).slice(0, 6);
    }
    return suffix;
}
function fillMetadataSegment(segment, params, imageSegment) {
    const pathname = (0, _apppaths.normalizeAppPath)(segment);
    const routeRegex = (0, _routeregex.getNamedRouteRegex)(pathname, false);
    const route = (0, _serverutils.interpolateDynamicPath)(pathname, params, routeRegex);
    const suffix = getMetadataRouteSuffix(segment);
    const routeSuffix = suffix ? `-${suffix}` : "";
    const { name, ext } = _path.default.parse(imageSegment);
    return (0, _normalizepathsep.normalizePathSep)(_path.default.join(route, `${name}${routeSuffix}${ext}`));
}
function normalizeMetadataRoute(page) {
    if (!(0, _ismetadataroute.isMetadataRoute)(page)) {
        return page;
    }
    let route = page;
    let suffix = "";
    if (route === "/robots") {
        route += ".txt";
    } else if (route === "/manifest") {
        route += ".webmanifest";
    } else if (route.endsWith("/sitemap")) {
        route += ".xml";
    } else {
        // Remove the file extension, e.g. /route-path/robots.txt -> /route-path
        const pathnamePrefix = page.slice(0, -(_path.default.basename(page).length + 1));
        suffix = getMetadataRouteSuffix(pathnamePrefix);
    }
    // Support both /<metadata-route.ext> and custom routes /<metadata-route>/route.ts.
    // If it's a metadata file route, we need to append /[id]/route to the page.
    if (!route.endsWith("/route")) {
        const isStaticMetadataFile = (0, _ismetadataroute.isStaticMetadataRouteFile)(page);
        const { dir, name: baseName, ext } = _path.default.parse(route);
        const isStaticRoute = page.startsWith("/robots") || page.startsWith("/manifest") || isStaticMetadataFile;
        route = _path.default.posix.join(dir, `${baseName}${suffix ? `-${suffix}` : ""}${ext}`, isStaticRoute ? "" : "[[...__metadata_id__]]", "route");
    }
    return route;
} //# sourceMappingURL=get-metadata-route.js.map


/***/ }),

/***/ 4982:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    STATIC_METADATA_IMAGES: function() {
        return STATIC_METADATA_IMAGES;
    },
    isMetadataRouteFile: function() {
        return isMetadataRouteFile;
    },
    isStaticMetadataRouteFile: function() {
        return isStaticMetadataRouteFile;
    },
    isMetadataRoute: function() {
        return isMetadataRoute;
    }
});
const _normalizepathsep = __webpack_require__(2883);
const STATIC_METADATA_IMAGES = {
    icon: {
        filename: "icon",
        extensions: [
            "ico",
            "jpg",
            "jpeg",
            "png",
            "svg"
        ]
    },
    apple: {
        filename: "apple-icon",
        extensions: [
            "jpg",
            "jpeg",
            "png"
        ]
    },
    favicon: {
        filename: "favicon",
        extensions: [
            "ico"
        ]
    },
    openGraph: {
        filename: "opengraph-image",
        extensions: [
            "jpg",
            "jpeg",
            "png",
            "gif"
        ]
    },
    twitter: {
        filename: "twitter-image",
        extensions: [
            "jpg",
            "jpeg",
            "png",
            "gif"
        ]
    }
};
// Match routes that are metadata routes, e.g. /sitemap.xml, /favicon.<ext>, /<icon>.<ext>, etc.
// TODO-METADATA: support more metadata routes with more extensions
const defaultExtensions = [
    "js",
    "jsx",
    "ts",
    "tsx"
];
const getExtensionRegexString = (extensions)=>`(?:${extensions.join("|")})`;
function isMetadataRouteFile(appDirRelativePath, pageExtensions, withExtension) {
    const metadataRouteFilesRegex = [
        new RegExp(`^[\\\\/]robots${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat("txt"))}$` : ""}`),
        new RegExp(`^[\\\\/]manifest${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat("webmanifest", "json"))}$` : ""}`),
        new RegExp(`^[\\\\/]favicon\\.ico$`),
        new RegExp(`[\\\\/]sitemap${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat("xml"))}$` : ""}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.icon.filename}\\d?${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat(STATIC_METADATA_IMAGES.icon.extensions))}$` : ""}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.apple.filename}\\d?${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat(STATIC_METADATA_IMAGES.apple.extensions))}$` : ""}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.openGraph.filename}\\d?${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat(STATIC_METADATA_IMAGES.openGraph.extensions))}$` : ""}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.twitter.filename}\\d?${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat(STATIC_METADATA_IMAGES.twitter.extensions))}$` : ""}`)
    ];
    const normalizedAppDirRelativePath = (0, _normalizepathsep.normalizePathSep)(appDirRelativePath);
    return metadataRouteFilesRegex.some((r)=>r.test(normalizedAppDirRelativePath));
}
function isStaticMetadataRouteFile(appDirRelativePath) {
    return isMetadataRouteFile(appDirRelativePath, [], true);
}
function isMetadataRoute(route) {
    let page = route.replace(/^\/?app\//, "").replace(/\/route$/, "");
    if (page[0] !== "/") page = "/" + page;
    return !page.endsWith("/page") && isMetadataRouteFile(page, defaultExtensions, false);
} //# sourceMappingURL=is-metadata-route.js.map


/***/ }),

/***/ 2226:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "acceptLanguage", ({
    enumerable: true,
    get: function() {
        return acceptLanguage;
    }
}));
function parse(raw, preferences, options) {
    const lowers = new Map();
    const header = raw.replace(/[ \t]/g, "");
    if (preferences) {
        let pos = 0;
        for (const preference of preferences){
            const lower = preference.toLowerCase();
            lowers.set(lower, {
                orig: preference,
                pos: pos++
            });
            if (options.prefixMatch) {
                const parts = lower.split("-");
                while(parts.pop(), parts.length > 0){
                    const joined = parts.join("-");
                    if (!lowers.has(joined)) {
                        lowers.set(joined, {
                            orig: preference,
                            pos: pos++
                        });
                    }
                }
            }
        }
    }
    const parts = header.split(",");
    const selections = [];
    const map = new Set();
    for(let i = 0; i < parts.length; ++i){
        const part = parts[i];
        if (!part) {
            continue;
        }
        const params = part.split(";");
        if (params.length > 2) {
            throw new Error(`Invalid ${options.type} header`);
        }
        let token = params[0].toLowerCase();
        if (!token) {
            throw new Error(`Invalid ${options.type} header`);
        }
        const selection = {
            token,
            pos: i,
            q: 1
        };
        if (preferences && lowers.has(token)) {
            selection.pref = lowers.get(token).pos;
        }
        map.add(selection.token);
        if (params.length === 2) {
            const q = params[1];
            const [key, value] = q.split("=");
            if (!value || key !== "q" && key !== "Q") {
                throw new Error(`Invalid ${options.type} header`);
            }
            const score = parseFloat(value);
            if (score === 0) {
                continue;
            }
            if (Number.isFinite(score) && score <= 1 && score >= 0.001) {
                selection.q = score;
            }
        }
        selections.push(selection);
    }
    selections.sort((a, b)=>{
        if (b.q !== a.q) {
            return b.q - a.q;
        }
        if (b.pref !== a.pref) {
            if (a.pref === undefined) {
                return 1;
            }
            if (b.pref === undefined) {
                return -1;
            }
            return a.pref - b.pref;
        }
        return a.pos - b.pos;
    });
    const values = selections.map((selection)=>selection.token);
    if (!preferences || !preferences.length) {
        return values;
    }
    const preferred = [];
    for (const selection of values){
        if (selection === "*") {
            for (const [preference, value] of lowers){
                if (!map.has(preference)) {
                    preferred.push(value.orig);
                }
            }
        } else {
            const lower = selection.toLowerCase();
            if (lowers.has(lower)) {
                preferred.push(lowers.get(lower).orig);
            }
        }
    }
    return preferred;
}
function acceptLanguage(header = "", preferences) {
    return parse(header, preferences, {
        type: "accept-language",
        prefixMatch: true
    })[0] || "";
} //# sourceMappingURL=accept-header.js.map


/***/ }),

/***/ 2502:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AppRouter: function() {
        return AppRouter;
    },
    LayoutRouter: function() {
        return LayoutRouter;
    },
    RenderFromTemplateContext: function() {
        return RenderFromTemplateContext;
    },
    staticGenerationAsyncStorage: function() {
        return staticGenerationAsyncStorage;
    },
    requestAsyncStorage: function() {
        return requestAsyncStorage;
    },
    actionAsyncStorage: function() {
        return actionAsyncStorage;
    },
    staticGenerationBailout: function() {
        return staticGenerationBailout;
    },
    createSearchParamsBailoutProxy: function() {
        return createSearchParamsBailoutProxy;
    },
    serverHooks: function() {
        return serverHooks;
    },
    renderToReadableStream: function() {
        return renderToReadableStream;
    },
    decodeReply: function() {
        return decodeReply;
    },
    decodeAction: function() {
        return decodeAction;
    },
    preloadStyle: function() {
        return preloadStyle;
    },
    preloadFont: function() {
        return preloadFont;
    },
    preconnect: function() {
        return preconnect;
    },
    StaticGenerationSearchParamsBailoutProvider: function() {
        return StaticGenerationSearchParamsBailoutProvider;
    },
    NotFoundBoundary: function() {
        return NotFoundBoundary;
    }
});
const { default: AppRouter } = __webpack_require__(8225);
const { default: LayoutRouter } = __webpack_require__(7149);
const { default: RenderFromTemplateContext } = __webpack_require__(9278);
const { staticGenerationAsyncStorage } = __webpack_require__(3539);
const { requestAsyncStorage } = __webpack_require__(1715);
const { actionAsyncStorage } = __webpack_require__(4876);
const { staticGenerationBailout } = __webpack_require__(6164);
const { default: StaticGenerationSearchParamsBailoutProvider } = __webpack_require__(6345);
const { createSearchParamsBailoutProxy } = __webpack_require__(9444);
const serverHooks = __webpack_require__(1651);
const { renderToReadableStream, decodeReply, decodeAction } = __webpack_require__(9642);
const { preloadStyle, preloadFont, preconnect } = __webpack_require__(6167);
const { NotFoundBoundary } = __webpack_require__(6966); //# sourceMappingURL=entry-base.js.map


/***/ }),

/***/ 6167:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*

Files in the rsc directory are meant to be packaged as part of the RSC graph using next-app-loader.

*/ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    preloadStyle: function() {
        return preloadStyle;
    },
    preloadFont: function() {
        return preloadFont;
    },
    preconnect: function() {
        return preconnect;
    }
});
const _reactdom = /*#__PURE__*/ _interop_require_default(__webpack_require__(2060));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function preloadStyle(href) {
    _reactdom.default.preload(href, {
        as: "style"
    });
}
function preloadFont(href, type) {
    _reactdom.default.preload(href, {
        as: "font",
        type
    });
}
function preconnect(href, crossOrigin) {
    if (typeof crossOrigin === "string") {
        _reactdom.default.preconnect(href, {
            crossOrigin
        });
    } else {
        _reactdom.default.preconnect(href);
    }
} //# sourceMappingURL=preloads.js.map


/***/ }),

/***/ 1499:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
    },
    isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
    },
    extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
    }
});
const _apppaths = __webpack_require__(7879);
const INTERCEPTION_ROUTE_MARKERS = [
    "(..)(..)",
    "(.)",
    "(..)",
    "(...)"
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split("/").find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute, marker, interceptedRoute;
    for (const segment of path.split("/")){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);
    }
    interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case "(.)":
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === "/") {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + "/" + interceptedRoute;
            }
            break;
        case "(..)":
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === "/") {
                throw new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`);
            }
            interceptedRoute = interceptingRoute.split("/").slice(0, -1).concat(interceptedRoute).join("/");
            break;
        case "(...)":
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = "/" + interceptedRoute;
            break;
        case "(..)(..)":
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split("/");
            if (splitInterceptingRoute.length <= 2) {
                throw new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`);
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join("/");
            break;
        default:
            throw new Error("Invariant: unexpected marker");
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=interception-routes.js.map


/***/ }),

/***/ 7262:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AppPageRouteModule: function() {
        return AppPageRouteModule;
    },
    default: function() {
        return _default;
    }
});
const _apprender = __webpack_require__(5868);
const _routemodule = __webpack_require__(5281);
class AppPageRouteModule extends _routemodule.RouteModule {
    render(req, res, context) {
        return (0, _apprender.renderToHTMLOrFlight)(req, res, context.page, context.query, context.renderOpts);
    }
}
const _default = AppPageRouteModule; //# sourceMappingURL=module.js.map


/***/ }),

/***/ 2468:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/* eslint-disable no-redeclare */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    NEXT_REQUEST_META: function() {
        return NEXT_REQUEST_META;
    },
    getRequestMeta: function() {
        return getRequestMeta;
    },
    setRequestMeta: function() {
        return setRequestMeta;
    },
    addRequestMeta: function() {
        return addRequestMeta;
    },
    removeRequestMeta: function() {
        return removeRequestMeta;
    },
    getNextInternalQuery: function() {
        return getNextInternalQuery;
    }
});
const NEXT_REQUEST_META = Symbol.for("NextInternalRequestMeta");
function getRequestMeta(req, key) {
    const meta = req[NEXT_REQUEST_META] || {};
    return typeof key === "string" ? meta[key] : meta;
}
function setRequestMeta(req, meta) {
    req[NEXT_REQUEST_META] = meta;
    return meta;
}
function addRequestMeta(request, key, value) {
    const meta = getRequestMeta(request);
    meta[key] = value;
    return setRequestMeta(request, meta);
}
function removeRequestMeta(request, key) {
    const meta = getRequestMeta(request);
    delete meta[key];
    return setRequestMeta(request, meta);
}
function getNextInternalQuery(query) {
    const keysToInclude = [
        "__nextDefaultLocale",
        "__nextFallback",
        "__nextLocale",
        "__nextSsgPath",
        "_nextBubbleNoFallback",
        "__nextDataReq",
        "__nextInferredLocaleFromDefault"
    ];
    const nextInternalQuery = {};
    for (const key of keysToInclude){
        if (key in query) {
            // @ts-ignore this can't be typed correctly
            nextInternalQuery[key] = query[key];
        }
    }
    return nextInternalQuery;
} //# sourceMappingURL=request-meta.js.map


/***/ }),

/***/ 9179:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    normalizeVercelUrl: function() {
        return normalizeVercelUrl;
    },
    interpolateDynamicPath: function() {
        return interpolateDynamicPath;
    },
    getUtils: function() {
        return getUtils;
    }
});
const _url = __webpack_require__(7310);
const _normalizelocalepath = __webpack_require__(7415);
const _pathmatch = __webpack_require__(3906);
const _routeregex = __webpack_require__(8630);
const _routematcher = __webpack_require__(2286);
const _preparedestination = __webpack_require__(6492);
const _acceptheader = __webpack_require__(2226);
const _detectlocalecookie = __webpack_require__(3720);
const _detectdomainlocale = __webpack_require__(2080);
const _denormalizepagepath = __webpack_require__(8882);
const _cookie = /*#__PURE__*/ _interop_require_default(__webpack_require__(2184));
const _constants = __webpack_require__(462);
const _requestmeta = __webpack_require__(2468);
const _removetrailingslash = __webpack_require__(468);
const _apppaths = __webpack_require__(7879);
const _constants1 = __webpack_require__(2078);
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function normalizeVercelUrl(req, trustQuery, paramKeys, pageIsDynamic, defaultRouteRegex) {
    // make sure to normalize req.url on Vercel to strip dynamic params
    // from the query which are added during routing
    if (pageIsDynamic && trustQuery && defaultRouteRegex) {
        const _parsedUrl = (0, _url.parse)(req.url, true);
        delete _parsedUrl.search;
        for (const key of Object.keys(_parsedUrl.query)){
            if (key !== _constants1.NEXT_QUERY_PARAM_PREFIX && key.startsWith(_constants1.NEXT_QUERY_PARAM_PREFIX) || (paramKeys || Object.keys(defaultRouteRegex.groups)).includes(key)) {
                delete _parsedUrl.query[key];
            }
        }
        req.url = (0, _url.format)(_parsedUrl);
    }
}
function interpolateDynamicPath(pathname, params, defaultRouteRegex) {
    if (!defaultRouteRegex) return pathname;
    for (const param of Object.keys(defaultRouteRegex.groups)){
        const { optional, repeat } = defaultRouteRegex.groups[param];
        let builtParam = `[${repeat ? "..." : ""}${param}]`;
        if (optional) {
            builtParam = `[${builtParam}]`;
        }
        const paramIdx = pathname.indexOf(builtParam);
        if (paramIdx > -1) {
            let paramValue;
            const value = params[param];
            if (Array.isArray(value)) {
                paramValue = value.map((v)=>v && encodeURIComponent(v)).join("/");
            } else if (value) {
                paramValue = encodeURIComponent(value);
            } else {
                paramValue = "";
            }
            pathname = pathname.slice(0, paramIdx) + paramValue + pathname.slice(paramIdx + builtParam.length);
        }
    }
    return pathname;
}
function getUtils({ page, i18n, basePath, rewrites, pageIsDynamic, trailingSlash, caseSensitive }) {
    let defaultRouteRegex;
    let dynamicRouteMatcher;
    let defaultRouteMatches;
    if (pageIsDynamic) {
        defaultRouteRegex = (0, _routeregex.getNamedRouteRegex)(page, false);
        dynamicRouteMatcher = (0, _routematcher.getRouteMatcher)(defaultRouteRegex);
        defaultRouteMatches = dynamicRouteMatcher(page);
    }
    function handleRewrites(req, parsedUrl) {
        const rewriteParams = {};
        let fsPathname = parsedUrl.pathname;
        const matchesPage = ()=>{
            const fsPathnameNoSlash = (0, _removetrailingslash.removeTrailingSlash)(fsPathname || "");
            return fsPathnameNoSlash === (0, _removetrailingslash.removeTrailingSlash)(page) || (dynamicRouteMatcher == null ? void 0 : dynamicRouteMatcher(fsPathnameNoSlash));
        };
        const checkRewrite = (rewrite)=>{
            const matcher = (0, _pathmatch.getPathMatch)(rewrite.source + (trailingSlash ? "(/)?" : ""), {
                removeUnnamedParams: true,
                strict: true,
                sensitive: !!caseSensitive
            });
            let params = matcher(parsedUrl.pathname);
            if ((rewrite.has || rewrite.missing) && params) {
                const hasParams = (0, _preparedestination.matchHas)(req, parsedUrl.query, rewrite.has, rewrite.missing);
                if (hasParams) {
                    Object.assign(params, hasParams);
                } else {
                    params = false;
                }
            }
            if (params) {
                const { parsedDestination, destQuery } = (0, _preparedestination.prepareDestination)({
                    appendParamsToQuery: true,
                    destination: rewrite.destination,
                    params: params,
                    query: parsedUrl.query
                });
                // if the rewrite destination is external break rewrite chain
                if (parsedDestination.protocol) {
                    return true;
                }
                Object.assign(rewriteParams, destQuery, params);
                Object.assign(parsedUrl.query, parsedDestination.query);
                delete parsedDestination.query;
                Object.assign(parsedUrl, parsedDestination);
                fsPathname = parsedUrl.pathname;
                if (basePath) {
                    fsPathname = fsPathname.replace(new RegExp(`^${basePath}`), "") || "/";
                }
                if (i18n) {
                    const destLocalePathResult = (0, _normalizelocalepath.normalizeLocalePath)(fsPathname, i18n.locales);
                    fsPathname = destLocalePathResult.pathname;
                    parsedUrl.query.nextInternalLocale = destLocalePathResult.detectedLocale || params.nextInternalLocale;
                }
                if (fsPathname === page) {
                    return true;
                }
                if (pageIsDynamic && dynamicRouteMatcher) {
                    const dynamicParams = dynamicRouteMatcher(fsPathname);
                    if (dynamicParams) {
                        parsedUrl.query = {
                            ...parsedUrl.query,
                            ...dynamicParams
                        };
                        return true;
                    }
                }
            }
            return false;
        };
        for (const rewrite of rewrites.beforeFiles || []){
            checkRewrite(rewrite);
        }
        if (fsPathname !== page) {
            let finished = false;
            for (const rewrite of rewrites.afterFiles || []){
                finished = checkRewrite(rewrite);
                if (finished) break;
            }
            if (!finished && !matchesPage()) {
                for (const rewrite of rewrites.fallback || []){
                    finished = checkRewrite(rewrite);
                    if (finished) break;
                }
            }
        }
        return rewriteParams;
    }
    function handleBasePath(req, parsedUrl) {
        // always strip the basePath if configured since it is required
        req.url = req.url.replace(new RegExp(`^${basePath}`), "") || "/";
        parsedUrl.pathname = parsedUrl.pathname.replace(new RegExp(`^${basePath}`), "") || "/";
    }
    function getParamsFromRouteMatches(req, renderOpts, detectedLocale) {
        return (0, _routematcher.getRouteMatcher)(function() {
            const { groups, routeKeys } = defaultRouteRegex;
            return {
                re: {
                    // Simulate a RegExp match from the \`req.url\` input
                    exec: (str)=>{
                        const obj = Object.fromEntries(new URLSearchParams(str));
                        const matchesHasLocale = i18n && detectedLocale && obj["1"] === detectedLocale;
                        for (const key of Object.keys(obj)){
                            const value = obj[key];
                            if (key !== _constants1.NEXT_QUERY_PARAM_PREFIX && key.startsWith(_constants1.NEXT_QUERY_PARAM_PREFIX)) {
                                const normalizedKey = key.substring(_constants1.NEXT_QUERY_PARAM_PREFIX.length);
                                obj[normalizedKey] = value;
                                delete obj[key];
                            }
                        }
                        // favor named matches if available
                        const routeKeyNames = Object.keys(routeKeys || {});
                        const filterLocaleItem = (val)=>{
                            if (i18n) {
                                // locale items can be included in route-matches
                                // for fallback SSG pages so ensure they are
                                // filtered
                                const isCatchAll = Array.isArray(val);
                                const _val = isCatchAll ? val[0] : val;
                                if (typeof _val === "string" && i18n.locales.some((item)=>{
                                    if (item.toLowerCase() === _val.toLowerCase()) {
                                        detectedLocale = item;
                                        renderOpts.locale = detectedLocale;
                                        return true;
                                    }
                                    return false;
                                })) {
                                    // remove the locale item from the match
                                    if (isCatchAll) {
                                        val.splice(0, 1);
                                    }
                                    // the value is only a locale item and
                                    // shouldn't be added
                                    return isCatchAll ? val.length === 0 : true;
                                }
                            }
                            return false;
                        };
                        if (routeKeyNames.every((name)=>obj[name])) {
                            return routeKeyNames.reduce((prev, keyName)=>{
                                const paramName = routeKeys == null ? void 0 : routeKeys[keyName];
                                if (paramName && !filterLocaleItem(obj[keyName])) {
                                    prev[groups[paramName].pos] = obj[keyName];
                                }
                                return prev;
                            }, {});
                        }
                        return Object.keys(obj).reduce((prev, key)=>{
                            if (!filterLocaleItem(obj[key])) {
                                let normalizedKey = key;
                                if (matchesHasLocale) {
                                    normalizedKey = parseInt(key, 10) - 1 + "";
                                }
                                return Object.assign(prev, {
                                    [normalizedKey]: obj[key]
                                });
                            }
                            return prev;
                        }, {});
                    }
                },
                groups
            };
        }())(req.headers["x-now-route-matches"]);
    }
    function normalizeDynamicRouteParams(params, ignoreOptional) {
        let hasValidParams = true;
        if (!defaultRouteRegex) return {
            params,
            hasValidParams: false
        };
        params = Object.keys(defaultRouteRegex.groups).reduce((prev, key)=>{
            let value = params[key];
            if (typeof value === "string") {
                value = (0, _apppaths.normalizeRscPath)(value, true);
            }
            if (Array.isArray(value)) {
                value = value.map((val)=>{
                    if (typeof val === "string") {
                        val = (0, _apppaths.normalizeRscPath)(val, true);
                    }
                    return val;
                });
            }
            // if the value matches the default value we can't rely
            // on the parsed params, this is used to signal if we need
            // to parse x-now-route-matches or not
            const defaultValue = defaultRouteMatches[key];
            const isOptional = defaultRouteRegex.groups[key].optional;
            const isDefaultValue = Array.isArray(defaultValue) ? defaultValue.some((defaultVal)=>{
                return Array.isArray(value) ? value.some((val)=>val.includes(defaultVal)) : value == null ? void 0 : value.includes(defaultVal);
            }) : value == null ? void 0 : value.includes(defaultValue);
            if (isDefaultValue || typeof value === "undefined" && !(isOptional && ignoreOptional)) {
                hasValidParams = false;
            }
            // non-provided optional values should be undefined so normalize
            // them to undefined
            if (isOptional && (!value || Array.isArray(value) && value.length === 1 && // fallback optional catch-all SSG pages have
            // [[...paramName]] for the root path on Vercel
            (value[0] === "index" || value[0] === `[[...${key}]]`))) {
                value = undefined;
                delete params[key];
            }
            // query values from the proxy aren't already split into arrays
            // so make sure to normalize catch-all values
            if (value && typeof value === "string" && defaultRouteRegex.groups[key].repeat) {
                value = value.split("/");
            }
            if (value) {
                prev[key] = value;
            }
            return prev;
        }, {});
        return {
            params,
            hasValidParams
        };
    }
    function handleLocale(req, res, parsedUrl, routeNoAssetPath, shouldNotRedirect) {
        if (!i18n) return;
        const pathname = parsedUrl.pathname || "/";
        let defaultLocale = i18n.defaultLocale;
        let detectedLocale = (0, _detectlocalecookie.detectLocaleCookie)(req, i18n.locales);
        let acceptPreferredLocale;
        try {
            acceptPreferredLocale = i18n.localeDetection !== false ? (0, _acceptheader.acceptLanguage)(req.headers["accept-language"], i18n.locales) : detectedLocale;
        } catch (_) {
            acceptPreferredLocale = detectedLocale;
        }
        const { host } = req.headers || {};
        // remove port from host and remove port if present
        const hostname = host && host.split(":")[0].toLowerCase();
        const detectedDomain = (0, _detectdomainlocale.detectDomainLocale)(i18n.domains, hostname);
        if (detectedDomain) {
            defaultLocale = detectedDomain.defaultLocale;
            detectedLocale = defaultLocale;
            (0, _requestmeta.addRequestMeta)(req, "__nextIsLocaleDomain", true);
        }
        // if not domain specific locale use accept-language preferred
        detectedLocale = detectedLocale || acceptPreferredLocale;
        let localeDomainRedirect;
        const localePathResult = (0, _normalizelocalepath.normalizeLocalePath)(pathname, i18n.locales);
        routeNoAssetPath = (0, _normalizelocalepath.normalizeLocalePath)(routeNoAssetPath, i18n.locales).pathname;
        if (localePathResult.detectedLocale) {
            detectedLocale = localePathResult.detectedLocale;
            req.url = (0, _url.format)({
                ...parsedUrl,
                pathname: localePathResult.pathname
            });
            (0, _requestmeta.addRequestMeta)(req, "__nextStrippedLocale", true);
            parsedUrl.pathname = localePathResult.pathname;
        }
        // If a detected locale is a domain specific locale and we aren't already
        // on that domain and path prefix redirect to it to prevent duplicate
        // content from multiple domains
        if (detectedDomain) {
            const localeToCheck = localePathResult.detectedLocale ? detectedLocale : acceptPreferredLocale;
            const matchedDomain = (0, _detectdomainlocale.detectDomainLocale)(i18n.domains, undefined, localeToCheck);
            if (matchedDomain && matchedDomain.domain !== detectedDomain.domain) {
                localeDomainRedirect = `http${matchedDomain.http ? "" : "s"}://${matchedDomain.domain}/${localeToCheck === matchedDomain.defaultLocale ? "" : localeToCheck}`;
            }
        }
        const denormalizedPagePath = (0, _denormalizepagepath.denormalizePagePath)(pathname);
        const detectedDefaultLocale = !detectedLocale || detectedLocale.toLowerCase() === defaultLocale.toLowerCase();
        const shouldStripDefaultLocale = false;
        // detectedDefaultLocale &&
        // denormalizedPagePath.toLowerCase() === \`/\${i18n.defaultLocale.toLowerCase()}\`
        const shouldAddLocalePrefix = !detectedDefaultLocale && denormalizedPagePath === "/";
        detectedLocale = detectedLocale || i18n.defaultLocale;
        if (!shouldNotRedirect && !req.headers["x-vercel-id"] && i18n.localeDetection !== false && (localeDomainRedirect || shouldAddLocalePrefix || shouldStripDefaultLocale)) {
            // set the NEXT_LOCALE cookie when a user visits the default locale
            // with the locale prefix so that they aren't redirected back to
            // their accept-language preferred locale
            if (shouldStripDefaultLocale && acceptPreferredLocale !== defaultLocale) {
                const previous = res.getHeader("set-cookie");
                res.setHeader("set-cookie", [
                    ...typeof previous === "string" ? [
                        previous
                    ] : Array.isArray(previous) ? previous : [],
                    _cookie.default.serialize("NEXT_LOCALE", defaultLocale, {
                        httpOnly: true,
                        path: "/"
                    })
                ]);
            }
            res.setHeader("Location", (0, _url.format)({
                // make sure to include any query values when redirecting
                ...parsedUrl,
                pathname: localeDomainRedirect ? localeDomainRedirect : shouldStripDefaultLocale ? basePath || "/" : `${basePath}/${detectedLocale}`
            }));
            res.statusCode = _constants.TEMPORARY_REDIRECT_STATUS;
            res.end();
            return;
        }
        detectedLocale = localePathResult.detectedLocale || detectedDomain && detectedDomain.defaultLocale || defaultLocale;
        return {
            defaultLocale,
            detectedLocale,
            routeNoAssetPath
        };
    }
    return {
        handleLocale,
        handleRewrites,
        handleBasePath,
        defaultRouteRegex,
        dynamicRouteMatcher,
        defaultRouteMatches,
        getParamsFromRouteMatches,
        normalizeDynamicRouteParams,
        normalizeVercelUrl: (req, trustQuery, paramKeys)=>normalizeVercelUrl(req, trustQuery, paramKeys, pageIsDynamic, defaultRouteRegex),
        interpolateDynamicPath: (pathname, params)=>interpolateDynamicPath(pathname, params, defaultRouteRegex)
    };
} //# sourceMappingURL=server-utils.js.map


/***/ }),

/***/ 462:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    MODERN_BROWSERSLIST_TARGET: function() {
        return _modernbrowserslisttarget.default;
    },
    COMPILER_NAMES: function() {
        return COMPILER_NAMES;
    },
    COMPILER_INDEXES: function() {
        return COMPILER_INDEXES;
    },
    PHASE_EXPORT: function() {
        return PHASE_EXPORT;
    },
    PHASE_PRODUCTION_BUILD: function() {
        return PHASE_PRODUCTION_BUILD;
    },
    PHASE_PRODUCTION_SERVER: function() {
        return PHASE_PRODUCTION_SERVER;
    },
    PHASE_DEVELOPMENT_SERVER: function() {
        return PHASE_DEVELOPMENT_SERVER;
    },
    PHASE_TEST: function() {
        return PHASE_TEST;
    },
    PHASE_INFO: function() {
        return PHASE_INFO;
    },
    PAGES_MANIFEST: function() {
        return PAGES_MANIFEST;
    },
    APP_PATHS_MANIFEST: function() {
        return APP_PATHS_MANIFEST;
    },
    APP_PATH_ROUTES_MANIFEST: function() {
        return APP_PATH_ROUTES_MANIFEST;
    },
    BUILD_MANIFEST: function() {
        return BUILD_MANIFEST;
    },
    APP_BUILD_MANIFEST: function() {
        return APP_BUILD_MANIFEST;
    },
    FUNCTIONS_CONFIG_MANIFEST: function() {
        return FUNCTIONS_CONFIG_MANIFEST;
    },
    SUBRESOURCE_INTEGRITY_MANIFEST: function() {
        return SUBRESOURCE_INTEGRITY_MANIFEST;
    },
    NEXT_FONT_MANIFEST: function() {
        return NEXT_FONT_MANIFEST;
    },
    EXPORT_MARKER: function() {
        return EXPORT_MARKER;
    },
    EXPORT_DETAIL: function() {
        return EXPORT_DETAIL;
    },
    PRERENDER_MANIFEST: function() {
        return PRERENDER_MANIFEST;
    },
    ROUTES_MANIFEST: function() {
        return ROUTES_MANIFEST;
    },
    IMAGES_MANIFEST: function() {
        return IMAGES_MANIFEST;
    },
    SERVER_FILES_MANIFEST: function() {
        return SERVER_FILES_MANIFEST;
    },
    DEV_CLIENT_PAGES_MANIFEST: function() {
        return DEV_CLIENT_PAGES_MANIFEST;
    },
    MIDDLEWARE_MANIFEST: function() {
        return MIDDLEWARE_MANIFEST;
    },
    DEV_MIDDLEWARE_MANIFEST: function() {
        return DEV_MIDDLEWARE_MANIFEST;
    },
    REACT_LOADABLE_MANIFEST: function() {
        return REACT_LOADABLE_MANIFEST;
    },
    FONT_MANIFEST: function() {
        return FONT_MANIFEST;
    },
    SERVER_DIRECTORY: function() {
        return SERVER_DIRECTORY;
    },
    CONFIG_FILES: function() {
        return CONFIG_FILES;
    },
    BUILD_ID_FILE: function() {
        return BUILD_ID_FILE;
    },
    BLOCKED_PAGES: function() {
        return BLOCKED_PAGES;
    },
    CLIENT_PUBLIC_FILES_PATH: function() {
        return CLIENT_PUBLIC_FILES_PATH;
    },
    CLIENT_STATIC_FILES_PATH: function() {
        return CLIENT_STATIC_FILES_PATH;
    },
    STRING_LITERAL_DROP_BUNDLE: function() {
        return STRING_LITERAL_DROP_BUNDLE;
    },
    NEXT_BUILTIN_DOCUMENT: function() {
        return NEXT_BUILTIN_DOCUMENT;
    },
    CLIENT_REFERENCE_MANIFEST: function() {
        return CLIENT_REFERENCE_MANIFEST;
    },
    SERVER_REFERENCE_MANIFEST: function() {
        return SERVER_REFERENCE_MANIFEST;
    },
    MIDDLEWARE_BUILD_MANIFEST: function() {
        return MIDDLEWARE_BUILD_MANIFEST;
    },
    MIDDLEWARE_REACT_LOADABLE_MANIFEST: function() {
        return MIDDLEWARE_REACT_LOADABLE_MANIFEST;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN: function() {
        return CLIENT_STATIC_FILES_RUNTIME_MAIN;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: function() {
        return CLIENT_STATIC_FILES_RUNTIME_MAIN_APP;
    },
    APP_CLIENT_INTERNALS: function() {
        return APP_CLIENT_INTERNALS;
    },
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: function() {
        return CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH;
    },
    CLIENT_STATIC_FILES_RUNTIME_AMP: function() {
        return CLIENT_STATIC_FILES_RUNTIME_AMP;
    },
    CLIENT_STATIC_FILES_RUNTIME_WEBPACK: function() {
        return CLIENT_STATIC_FILES_RUNTIME_WEBPACK;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: function() {
        return CLIENT_STATIC_FILES_RUNTIME_POLYFILLS;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: function() {
        return CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL;
    },
    EDGE_RUNTIME_WEBPACK: function() {
        return EDGE_RUNTIME_WEBPACK;
    },
    TEMPORARY_REDIRECT_STATUS: function() {
        return TEMPORARY_REDIRECT_STATUS;
    },
    PERMANENT_REDIRECT_STATUS: function() {
        return PERMANENT_REDIRECT_STATUS;
    },
    STATIC_PROPS_ID: function() {
        return STATIC_PROPS_ID;
    },
    SERVER_PROPS_ID: function() {
        return SERVER_PROPS_ID;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    GOOGLE_FONT_PROVIDER: function() {
        return GOOGLE_FONT_PROVIDER;
    },
    OPTIMIZED_FONT_PROVIDERS: function() {
        return OPTIMIZED_FONT_PROVIDERS;
    },
    DEFAULT_SERIF_FONT: function() {
        return DEFAULT_SERIF_FONT;
    },
    DEFAULT_SANS_SERIF_FONT: function() {
        return DEFAULT_SANS_SERIF_FONT;
    },
    STATIC_STATUS_PAGES: function() {
        return STATIC_STATUS_PAGES;
    },
    TRACE_OUTPUT_VERSION: function() {
        return TRACE_OUTPUT_VERSION;
    },
    TURBO_TRACE_DEFAULT_MEMORY_LIMIT: function() {
        return TURBO_TRACE_DEFAULT_MEMORY_LIMIT;
    },
    RSC_MODULE_TYPES: function() {
        return RSC_MODULE_TYPES;
    },
    EDGE_UNSUPPORTED_NODE_APIS: function() {
        return EDGE_UNSUPPORTED_NODE_APIS;
    },
    SYSTEM_ENTRYPOINTS: function() {
        return SYSTEM_ENTRYPOINTS;
    }
});
const _interop_require_default = __webpack_require__(3297);
const _modernbrowserslisttarget = /*#__PURE__*/ _interop_require_default._(__webpack_require__(7634));
const COMPILER_NAMES = {
    client: "client",
    server: "server",
    edgeServer: "edge-server"
};
const COMPILER_INDEXES = {
    [COMPILER_NAMES.client]: 0,
    [COMPILER_NAMES.server]: 1,
    [COMPILER_NAMES.edgeServer]: 2
};
const PHASE_EXPORT = "phase-export";
const PHASE_PRODUCTION_BUILD = "phase-production-build";
const PHASE_PRODUCTION_SERVER = "phase-production-server";
const PHASE_DEVELOPMENT_SERVER = "phase-development-server";
const PHASE_TEST = "phase-test";
const PHASE_INFO = "phase-info";
const PAGES_MANIFEST = "pages-manifest.json";
const APP_PATHS_MANIFEST = "app-paths-manifest.json";
const APP_PATH_ROUTES_MANIFEST = "app-path-routes-manifest.json";
const BUILD_MANIFEST = "build-manifest.json";
const APP_BUILD_MANIFEST = "app-build-manifest.json";
const FUNCTIONS_CONFIG_MANIFEST = "functions-config-manifest.json";
const SUBRESOURCE_INTEGRITY_MANIFEST = "subresource-integrity-manifest";
const NEXT_FONT_MANIFEST = "next-font-manifest";
const EXPORT_MARKER = "export-marker.json";
const EXPORT_DETAIL = "export-detail.json";
const PRERENDER_MANIFEST = "prerender-manifest.json";
const ROUTES_MANIFEST = "routes-manifest.json";
const IMAGES_MANIFEST = "images-manifest.json";
const SERVER_FILES_MANIFEST = "required-server-files.json";
const DEV_CLIENT_PAGES_MANIFEST = "_devPagesManifest.json";
const MIDDLEWARE_MANIFEST = "middleware-manifest.json";
const DEV_MIDDLEWARE_MANIFEST = "_devMiddlewareManifest.json";
const REACT_LOADABLE_MANIFEST = "react-loadable-manifest.json";
const FONT_MANIFEST = "font-manifest.json";
const SERVER_DIRECTORY = "server";
const CONFIG_FILES = [
    "next.config.js",
    "next.config.mjs"
];
const BUILD_ID_FILE = "BUILD_ID";
const BLOCKED_PAGES = [
    "/_document",
    "/_app",
    "/_error"
];
const CLIENT_PUBLIC_FILES_PATH = "public";
const CLIENT_STATIC_FILES_PATH = "static";
const STRING_LITERAL_DROP_BUNDLE = "__NEXT_DROP_CLIENT_FILE__";
const NEXT_BUILTIN_DOCUMENT = "__NEXT_BUILTIN_DOCUMENT__";
const CLIENT_REFERENCE_MANIFEST = "client-reference-manifest";
const SERVER_REFERENCE_MANIFEST = "server-reference-manifest";
const MIDDLEWARE_BUILD_MANIFEST = "middleware-build-manifest";
const MIDDLEWARE_REACT_LOADABLE_MANIFEST = "middleware-react-loadable-manifest";
const CLIENT_STATIC_FILES_RUNTIME_MAIN = "main";
const CLIENT_STATIC_FILES_RUNTIME_MAIN_APP = "" + CLIENT_STATIC_FILES_RUNTIME_MAIN + "-app";
const APP_CLIENT_INTERNALS = "app-pages-internals";
const CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = "react-refresh";
const CLIENT_STATIC_FILES_RUNTIME_AMP = "amp";
const CLIENT_STATIC_FILES_RUNTIME_WEBPACK = "webpack";
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = "polyfills";
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL = Symbol(CLIENT_STATIC_FILES_RUNTIME_POLYFILLS);
const EDGE_RUNTIME_WEBPACK = "edge-runtime-webpack";
const TEMPORARY_REDIRECT_STATUS = 307;
const PERMANENT_REDIRECT_STATUS = 308;
const STATIC_PROPS_ID = "__N_SSG";
const SERVER_PROPS_ID = "__N_SSP";
const PAGE_SEGMENT_KEY = "__PAGE__";
const GOOGLE_FONT_PROVIDER = "https://fonts.googleapis.com/";
const OPTIMIZED_FONT_PROVIDERS = [
    {
        url: GOOGLE_FONT_PROVIDER,
        preconnect: "https://fonts.gstatic.com"
    },
    {
        url: "https://use.typekit.net",
        preconnect: "https://use.typekit.net"
    }
];
const DEFAULT_SERIF_FONT = {
    name: "Times New Roman",
    xAvgCharWidth: 821,
    azAvgWidth: 854.3953488372093,
    unitsPerEm: 2048
};
const DEFAULT_SANS_SERIF_FONT = {
    name: "Arial",
    xAvgCharWidth: 904,
    azAvgWidth: 934.5116279069767,
    unitsPerEm: 2048
};
const STATIC_STATUS_PAGES = [
    "/500"
];
const TRACE_OUTPUT_VERSION = 1;
const TURBO_TRACE_DEFAULT_MEMORY_LIMIT = 6000;
const RSC_MODULE_TYPES = {
    client: "client",
    server: "server"
};
const EDGE_UNSUPPORTED_NODE_APIS = [
    "clearImmediate",
    "setImmediate",
    "BroadcastChannel",
    "ByteLengthQueuingStrategy",
    "CompressionStream",
    "CountQueuingStrategy",
    "DecompressionStream",
    "DomException",
    "MessageChannel",
    "MessageEvent",
    "MessagePort",
    "ReadableByteStreamController",
    "ReadableStreamBYOBRequest",
    "ReadableStreamDefaultController",
    "TransformStreamDefaultController",
    "WritableStreamDefaultController"
];
const SYSTEM_ENTRYPOINTS = new Set([
    CLIENT_STATIC_FILES_RUNTIME_MAIN,
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH,
    CLIENT_STATIC_FILES_RUNTIME_AMP,
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP
]);
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=constants.js.map


/***/ }),

/***/ 5284:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// regexp is based on https://github.com/sindresorhus/escape-string-regexp

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "escapeStringRegexp", ({
    enumerable: true,
    get: function() {
        return escapeStringRegexp;
    }
}));
const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
function escapeStringRegexp(str) {
    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
    if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, "\\$&");
    }
    return str;
} //# sourceMappingURL=escape-regexp.js.map


/***/ }),

/***/ 376:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// http://www.cse.yorku.ca/~oz/hash.html

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    djb2Hash: function() {
        return djb2Hash;
    },
    hexHash: function() {
        return hexHash;
    }
});
function djb2Hash(str) {
    let hash = 5381;
    for(let i = 0; i < str.length; i++){
        const char = str.charCodeAt(i);
        hash = (hash << 5) + hash + char;
    }
    return Math.abs(hash);
}
function hexHash(str) {
    return djb2Hash(str).toString(36).slice(0, 5);
} //# sourceMappingURL=hash.js.map


/***/ }),

/***/ 3720:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "detectLocaleCookie", ({
    enumerable: true,
    get: function() {
        return detectLocaleCookie;
    }
}));
function detectLocaleCookie(req, locales) {
    const { NEXT_LOCALE } = req.cookies || {};
    return NEXT_LOCALE ? locales.find((locale)=>NEXT_LOCALE.toLowerCase() === locale.toLowerCase()) : undefined;
} //# sourceMappingURL=detect-locale-cookie.js.map


/***/ }),

/***/ 2490:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * This module is for next.js server internal usage of path module.
 * It will use native path module for nodejs runtime.
 * It will use path-browserify polyfill for edge runtime.
 */ 
let path;
if (false) {} else {
    path = __webpack_require__(1017);
}
module.exports = path; //# sourceMappingURL=path.js.map


/***/ }),

/***/ 7634:
/***/ ((module) => {

"use strict";
// Note: This file is JS because it's used by the taskfile-swc.js file, which is JS.
// Keep file changes in sync with the corresponding `.d.ts` files.
/**
 * These are the browser versions that support all of the following:
 * static import: https://caniuse.com/es6-module
 * dynamic import: https://caniuse.com/es6-module-dynamic-import
 * import.meta: https://caniuse.com/mdn-javascript_operators_import_meta
 */ 
const MODERN_BROWSERSLIST_TARGET = [
    "chrome 64",
    "edge 79",
    "firefox 67",
    "opera 51",
    "safari 12"
];
module.exports = MODERN_BROWSERSLIST_TARGET; //# sourceMappingURL=modern-browserslist-target.js.map


/***/ }),

/***/ 8882:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "denormalizePagePath", ({
    enumerable: true,
    get: function() {
        return denormalizePagePath;
    }
}));
const _utils = __webpack_require__(2100);
const _normalizepathsep = __webpack_require__(2883);
function denormalizePagePath(page) {
    let _page = (0, _normalizepathsep.normalizePathSep)(page);
    return _page.startsWith("/index/") && !(0, _utils.isDynamicRoute)(_page) ? _page.slice(6) : _page !== "/index" ? _page : "/";
} //# sourceMappingURL=denormalize-page-path.js.map


/***/ }),

/***/ 1348:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ensureLeadingSlash", ({
    enumerable: true,
    get: function() {
        return ensureLeadingSlash;
    }
}));
function ensureLeadingSlash(path) {
    return path.startsWith("/") ? path : "/" + path;
} //# sourceMappingURL=ensure-leading-slash.js.map


/***/ }),

/***/ 2883:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * For a given page path, this function ensures that there is no backslash
 * escaping slashes in the path. Example:
 *  - `foo\/bar\/baz` -> `foo/bar/baz`
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizePathSep", ({
    enumerable: true,
    get: function() {
        return normalizePathSep;
    }
}));
function normalizePathSep(path) {
    return path.replace(/\\/g, "/");
} //# sourceMappingURL=normalize-path-sep.js.map


/***/ }),

/***/ 7879:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    normalizeAppPath: function() {
        return normalizeAppPath;
    },
    normalizeRscPath: function() {
        return normalizeRscPath;
    }
});
const _ensureleadingslash = __webpack_require__(1348);
function normalizeAppPath(route) {
    return (0, _ensureleadingslash.ensureLeadingSlash)(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if (segment[0] === "(" && segment.endsWith(")")) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === "@") {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ""));
}
function normalizeRscPath(pathname, enabled) {
    return enabled ? pathname.replace(/\.rsc($|\?)/, "$1") : pathname;
} //# sourceMappingURL=app-paths.js.map


/***/ }),

/***/ 2100:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getSortedRoutes: function() {
        return _sortedroutes.getSortedRoutes;
    },
    isDynamicRoute: function() {
        return _isdynamic.isDynamicRoute;
    }
});
const _sortedroutes = __webpack_require__(6091);
const _isdynamic = __webpack_require__(1136); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 1136:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// Identify /[param]/ in route string

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isDynamicRoute", ({
    enumerable: true,
    get: function() {
        return isDynamicRoute;
    }
}));
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
    return TEST_ROUTE.test(route);
} //# sourceMappingURL=is-dynamic.js.map


/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "parseRelativeUrl", ({
    enumerable: true,
    get: function() {
        return parseRelativeUrl;
    }
}));
const _utils = __webpack_require__(130);
const _querystring = __webpack_require__(2027);
function parseRelativeUrl(url, base) {
    const globalBase = new URL( true ? "http://n" : 0);
    const resolvedBase = base ? new URL(base, globalBase) : url.startsWith(".") ? new URL( true ? "http://n" : 0) : globalBase;
    const { pathname, searchParams, search, hash, href, origin } = new URL(url, resolvedBase);
    if (origin !== globalBase.origin) {
        throw new Error("invariant: invalid relative URL, router received " + url);
    }
    return {
        pathname,
        query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
        search,
        hash,
        href: href.slice(globalBase.origin.length)
    };
} //# sourceMappingURL=parse-relative-url.js.map


/***/ }),

/***/ 1461:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "parseUrl", ({
    enumerable: true,
    get: function() {
        return parseUrl;
    }
}));
const _querystring = __webpack_require__(2027);
const _parserelativeurl = __webpack_require__(3881);
function parseUrl(url) {
    if (url.startsWith("/")) {
        return (0, _parserelativeurl.parseRelativeUrl)(url);
    }
    const parsedURL = new URL(url);
    return {
        hash: parsedURL.hash,
        hostname: parsedURL.hostname,
        href: parsedURL.href,
        pathname: parsedURL.pathname,
        port: parsedURL.port,
        protocol: parsedURL.protocol,
        query: (0, _querystring.searchParamsToUrlQuery)(parsedURL.searchParams),
        search: parsedURL.search
    };
} //# sourceMappingURL=parse-url.js.map


/***/ }),

/***/ 3906:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getPathMatch", ({
    enumerable: true,
    get: function() {
        return getPathMatch;
    }
}));
const _pathtoregexp = __webpack_require__(6113);
function getPathMatch(path, options) {
    const keys = [];
    const regexp = (0, _pathtoregexp.pathToRegexp)(path, keys, {
        delimiter: "/",
        sensitive: typeof (options == null ? void 0 : options.sensitive) === "boolean" ? options.sensitive : false,
        strict: options == null ? void 0 : options.strict
    });
    const matcher = (0, _pathtoregexp.regexpToFunction)((options == null ? void 0 : options.regexModifier) ? new RegExp(options.regexModifier(regexp.source), regexp.flags) : regexp, keys);
    /**
   * A matcher function that will check if a given pathname matches the path
   * given in the builder function. When the path does not match it will return
   * `false` but if it does it will return an object with the matched params
   * merged with the params provided in the second argument.
   */ return (pathname, params)=>{
        const res = pathname == null ? false : matcher(pathname);
        if (!res) {
            return false;
        }
        /**
     * If unnamed params are not allowed they must be removed from
     * the matched parameters. path-to-regexp uses "string" for named and
     * "number" for unnamed parameters.
     */ if (options == null ? void 0 : options.removeUnnamedParams) {
            for (const key of keys){
                if (typeof key.name === "number") {
                    delete res.params[key.name];
                }
            }
        }
        return {
            ...params,
            ...res.params
        };
    };
} //# sourceMappingURL=path-match.js.map


/***/ }),

/***/ 6492:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    matchHas: function() {
        return matchHas;
    },
    compileNonPath: function() {
        return compileNonPath;
    },
    prepareDestination: function() {
        return prepareDestination;
    }
});
const _pathtoregexp = __webpack_require__(6113);
const _escaperegexp = __webpack_require__(5284);
const _parseurl = __webpack_require__(1461);
const _interceptionroutes = __webpack_require__(1499);
const _approuterheaders = __webpack_require__(3909);
/**
 * Ensure only a-zA-Z are used for param names for proper interpolating
 * with path-to-regexp
 */ function getSafeParamName(paramName) {
    let newParamName = "";
    for(let i = 0; i < paramName.length; i++){
        const charCode = paramName.charCodeAt(i);
        if (charCode > 64 && charCode < 91 || // A-Z
        charCode > 96 && charCode < 123 // a-z
        ) {
            newParamName += paramName[i];
        }
    }
    return newParamName;
}
function escapeSegment(str, segmentName) {
    return str.replace(new RegExp(":" + (0, _escaperegexp.escapeStringRegexp)(segmentName), "g"), "__ESC_COLON_" + segmentName);
}
function unescapeSegments(str) {
    return str.replace(/__ESC_COLON_/gi, ":");
}
function matchHas(req, query, has, missing) {
    if (has === void 0) has = [];
    if (missing === void 0) missing = [];
    const params = {};
    const hasMatch = (hasItem)=>{
        let value;
        let key = hasItem.key;
        switch(hasItem.type){
            case "header":
                {
                    key = key.toLowerCase();
                    value = req.headers[key];
                    break;
                }
            case "cookie":
                {
                    value = req.cookies[hasItem.key];
                    break;
                }
            case "query":
                {
                    value = query[key];
                    break;
                }
            case "host":
                {
                    const { host } = (req == null ? void 0 : req.headers) || {};
                    // remove port from host if present
                    const hostname = host == null ? void 0 : host.split(":")[0].toLowerCase();
                    value = hostname;
                    break;
                }
            default:
                {
                    break;
                }
        }
        if (!hasItem.value && value) {
            params[getSafeParamName(key)] = value;
            return true;
        } else if (value) {
            const matcher = new RegExp("^" + hasItem.value + "$");
            const matches = Array.isArray(value) ? value.slice(-1)[0].match(matcher) : value.match(matcher);
            if (matches) {
                if (Array.isArray(matches)) {
                    if (matches.groups) {
                        Object.keys(matches.groups).forEach((groupKey)=>{
                            params[groupKey] = matches.groups[groupKey];
                        });
                    } else if (hasItem.type === "host" && matches[0]) {
                        params.host = matches[0];
                    }
                }
                return true;
            }
        }
        return false;
    };
    const allMatch = has.every((item)=>hasMatch(item)) && !missing.some((item)=>hasMatch(item));
    if (allMatch) {
        return params;
    }
    return false;
}
function compileNonPath(value, params) {
    if (!value.includes(":")) {
        return value;
    }
    for (const key of Object.keys(params)){
        if (value.includes(":" + key)) {
            value = value.replace(new RegExp(":" + key + "\\*", "g"), ":" + key + "--ESCAPED_PARAM_ASTERISKS").replace(new RegExp(":" + key + "\\?", "g"), ":" + key + "--ESCAPED_PARAM_QUESTION").replace(new RegExp(":" + key + "\\+", "g"), ":" + key + "--ESCAPED_PARAM_PLUS").replace(new RegExp(":" + key + "(?!\\w)", "g"), "--ESCAPED_PARAM_COLON" + key);
        }
    }
    value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, "\\$1").replace(/--ESCAPED_PARAM_PLUS/g, "+").replace(/--ESCAPED_PARAM_COLON/g, ":").replace(/--ESCAPED_PARAM_QUESTION/g, "?").replace(/--ESCAPED_PARAM_ASTERISKS/g, "*");
    // the value needs to start with a forward-slash to be compiled
    // correctly
    return (0, _pathtoregexp.compile)("/" + value, {
        validate: false
    })(params).slice(1);
}
function prepareDestination(args) {
    const query = Object.assign({}, args.query);
    delete query.__nextLocale;
    delete query.__nextDefaultLocale;
    delete query.__nextDataReq;
    delete query.__nextInferredLocaleFromDefault;
    delete query[_approuterheaders.NEXT_RSC_UNION_QUERY];
    let escapedDestination = args.destination;
    for (const param of Object.keys({
        ...args.params,
        ...query
    })){
        escapedDestination = escapeSegment(escapedDestination, param);
    }
    const parsedDestination = (0, _parseurl.parseUrl)(escapedDestination);
    const destQuery = parsedDestination.query;
    const destPath = unescapeSegments("" + parsedDestination.pathname + (parsedDestination.hash || ""));
    const destHostname = unescapeSegments(parsedDestination.hostname || "");
    const destPathParamKeys = [];
    const destHostnameParamKeys = [];
    (0, _pathtoregexp.pathToRegexp)(destPath, destPathParamKeys);
    (0, _pathtoregexp.pathToRegexp)(destHostname, destHostnameParamKeys);
    const destParams = [];
    destPathParamKeys.forEach((key)=>destParams.push(key.name));
    destHostnameParamKeys.forEach((key)=>destParams.push(key.name));
    const destPathCompiler = (0, _pathtoregexp.compile)(destPath, // have already validated before we got to this point and validating
    // breaks compiling destinations with named pattern params from the source
    // e.g. /something:hello(.*) -> /another/:hello is broken with validation
    // since compile validation is meant for reversing and not for inserting
    // params from a separate path-regex into another
    {
        validate: false
    });
    const destHostnameCompiler = (0, _pathtoregexp.compile)(destHostname, {
        validate: false
    });
    // update any params in query values
    for (const [key, strOrArray] of Object.entries(destQuery)){
        // the value needs to start with a forward-slash to be compiled
        // correctly
        if (Array.isArray(strOrArray)) {
            destQuery[key] = strOrArray.map((value)=>compileNonPath(unescapeSegments(value), args.params));
        } else if (typeof strOrArray === "string") {
            destQuery[key] = compileNonPath(unescapeSegments(strOrArray), args.params);
        }
    }
    // add path params to query if it's not a redirect and not
    // already defined in destination query or path
    let paramKeys = Object.keys(args.params).filter((name)=>name !== "nextInternalLocale");
    if (args.appendParamsToQuery && !paramKeys.some((key)=>destParams.includes(key))) {
        for (const key of paramKeys){
            if (!(key in destQuery)) {
                destQuery[key] = args.params[key];
            }
        }
    }
    let newUrl;
    // The compiler also that the interception route marker is an unnamed param, hence '0',
    // so we need to add it to the params object.
    if ((0, _interceptionroutes.isInterceptionRouteAppPath)(destPath)) {
        for (const segment of destPath.split("/")){
            const marker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
            if (marker) {
                args.params["0"] = marker;
                break;
            }
        }
    }
    try {
        newUrl = destPathCompiler(args.params);
        const [pathname, hash] = newUrl.split("#");
        parsedDestination.hostname = destHostnameCompiler(args.params);
        parsedDestination.pathname = pathname;
        parsedDestination.hash = "" + (hash ? "#" : "") + (hash || "");
        delete parsedDestination.search;
    } catch (err) {
        if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
            throw new Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");
        }
        throw err;
    }
    // Query merge order lowest priority to highest
    // 1. initial URL query values
    // 2. path segment values
    // 3. destination specified query values
    parsedDestination.query = {
        ...query,
        ...parsedDestination.query
    };
    return {
        newUrl,
        destQuery,
        parsedDestination
    };
} //# sourceMappingURL=prepare-destination.js.map


/***/ }),

/***/ 2027:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    },
    assign: function() {
        return assign;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    searchParams.forEach((value, key)=>{
        if (typeof query[key] === "undefined") {
            query[key] = value;
        } else if (Array.isArray(query[key])) {
            query[key].push(value);
        } else {
            query[key] = [
                query[key],
                value
            ];
        }
    });
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === "string" || typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
        return String(param);
    } else {
        return "";
    }
}
function urlQueryToSearchParams(urlQuery) {
    const result = new URLSearchParams();
    Object.entries(urlQuery).forEach((param)=>{
        let [key, value] = param;
        if (Array.isArray(value)) {
            value.forEach((item)=>result.append(key, stringifyUrlQueryParam(item)));
        } else {
            result.set(key, stringifyUrlQueryParam(value));
        }
    });
    return result;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    searchParamsList.forEach((searchParams)=>{
        Array.from(searchParams.keys()).forEach((key)=>target.delete(key));
        searchParams.forEach((value, key)=>target.append(key, value));
    });
    return target;
} //# sourceMappingURL=querystring.js.map


/***/ }),

/***/ 2286:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getRouteMatcher", ({
    enumerable: true,
    get: function() {
        return getRouteMatcher;
    }
}));
const _utils = __webpack_require__(130);
function getRouteMatcher(param) {
    let { re, groups } = param;
    return (pathname)=>{
        const routeMatch = re.exec(pathname);
        if (!routeMatch) {
            return false;
        }
        const decode = (param)=>{
            try {
                return decodeURIComponent(param);
            } catch (_) {
                throw new _utils.DecodeError("failed to decode param");
            }
        };
        const params = {};
        Object.keys(groups).forEach((slugName)=>{
            const g = groups[slugName];
            const m = routeMatch[g.pos];
            if (m !== undefined) {
                params[slugName] = ~m.indexOf("/") ? m.split("/").map((entry)=>decode(entry)) : g.repeat ? [
                    decode(m)
                ] : decode(m);
            }
        });
        return params;
    };
} //# sourceMappingURL=route-matcher.js.map


/***/ }),

/***/ 8630:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRouteRegex: function() {
        return getRouteRegex;
    },
    getNamedRouteRegex: function() {
        return getNamedRouteRegex;
    },
    getNamedMiddlewareRegex: function() {
        return getNamedMiddlewareRegex;
    }
});
const _interceptionroutes = __webpack_require__(1499);
const _escaperegexp = __webpack_require__(5284);
const _removetrailingslash = __webpack_require__(468);
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const NEXT_INTERCEPTION_MARKER_PREFIX = "nxtI";
/**
 * Parses a given parameter from a route to a data structure that can be used
 * to generate the parametrized route. Examples:
 *   - `[...slug]` -> `{ key: 'slug', repeat: true, optional: true }`
 *   - `...slug` -> `{ key: 'slug', repeat: true, optional: false }`
 *   - `[foo]` -> `{ key: 'foo', repeat: false, optional: true }`
 *   - `bar` -> `{ key: 'bar', repeat: false, optional: false }`
 */ function parseParameter(param) {
    const optional = param.startsWith("[") && param.endsWith("]");
    if (optional) {
        param = param.slice(1, -1);
    }
    const repeat = param.startsWith("...");
    if (repeat) {
        param = param.slice(3);
    }
    return {
        key: param,
        repeat,
        optional
    };
}
function getParametrizedRoute(route) {
    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
    const groups = {};
    let groupIndex = 1;
    return {
        parameterizedRoute: segments.map((segment)=>{
            const markerMatch = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
            const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/) // Check for parameters
            ;
            if (markerMatch && paramMatches) {
                const { key, optional, repeat } = parseParameter(paramMatches[1]);
                groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional
                };
                return "/" + (0, _escaperegexp.escapeStringRegexp)(markerMatch) + "([^/]+?)";
            } else if (paramMatches) {
                const { key, repeat, optional } = parseParameter(paramMatches[1]);
                groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional
                };
                return repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
            } else {
                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
        }).join(""),
        groups
    };
}
function getRouteRegex(normalizedRoute) {
    const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute);
    return {
        re: new RegExp("^" + parameterizedRoute + "(?:/)?$"),
        groups: groups
    };
}
/**
 * Builds a function to generate a minimal routeKey using only a-z and minimal
 * number of characters.
 */ function buildGetSafeRouteKey() {
    let i = 0;
    return ()=>{
        let routeKey = "";
        let j = ++i;
        while(j > 0){
            routeKey += String.fromCharCode(97 + (j - 1) % 26);
            j = Math.floor((j - 1) / 26);
        }
        return routeKey;
    };
}
function getSafeKeyFromSegment(param) {
    let { getSafeRouteKey, segment, routeKeys, keyPrefix } = param;
    const { key, optional, repeat } = parseParameter(segment);
    // replace any non-word characters since they can break
    // the named regex
    let cleanedKey = key.replace(/\W/g, "");
    if (keyPrefix) {
        cleanedKey = "" + keyPrefix + cleanedKey;
    }
    let invalidKey = false;
    // check if the key is still invalid and fallback to using a known
    // safe key
    if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
    }
    if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
    }
    if (invalidKey) {
        cleanedKey = getSafeRouteKey();
    }
    if (keyPrefix) {
        routeKeys[cleanedKey] = "" + keyPrefix + key;
    } else {
        routeKeys[cleanedKey] = "" + key;
    }
    return repeat ? optional ? "(?:/(?<" + cleanedKey + ">.+?))?" : "/(?<" + cleanedKey + ">.+?)" : "/(?<" + cleanedKey + ">[^/]+?)";
}
function getNamedParametrizedRoute(route, prefixRouteKeys) {
    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
    const getSafeRouteKey = buildGetSafeRouteKey();
    const routeKeys = {};
    return {
        namedParameterizedRoute: segments.map((segment)=>{
            const hasInterceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m));
            const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/) // Check for parameters
            ;
            if (hasInterceptionMarker && paramMatches) {
                return getSafeKeyFromSegment({
                    getSafeRouteKey,
                    segment: paramMatches[1],
                    routeKeys,
                    keyPrefix: prefixRouteKeys ? NEXT_INTERCEPTION_MARKER_PREFIX : undefined
                });
            } else if (paramMatches) {
                return getSafeKeyFromSegment({
                    getSafeRouteKey,
                    segment: paramMatches[1],
                    routeKeys,
                    keyPrefix: prefixRouteKeys ? NEXT_QUERY_PARAM_PREFIX : undefined
                });
            } else {
                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
        }).join(""),
        routeKeys
    };
}
function getNamedRouteRegex(normalizedRoute, prefixRouteKey) {
    const result = getNamedParametrizedRoute(normalizedRoute, prefixRouteKey);
    return {
        ...getRouteRegex(normalizedRoute),
        namedRegex: "^" + result.namedParameterizedRoute + "(?:/)?$",
        routeKeys: result.routeKeys
    };
}
function getNamedMiddlewareRegex(normalizedRoute, options) {
    const { parameterizedRoute } = getParametrizedRoute(normalizedRoute);
    const { catchAll = true } = options;
    if (parameterizedRoute === "/") {
        let catchAllRegex = catchAll ? ".*" : "";
        return {
            namedRegex: "^/" + catchAllRegex + "$"
        };
    }
    const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false);
    let catchAllGroupedRegex = catchAll ? "(?:(/.*)?)" : "";
    return {
        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
    };
} //# sourceMappingURL=route-regex.js.map


/***/ }),

/***/ 6091:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getSortedRoutes", ({
    enumerable: true,
    get: function() {
        return getSortedRoutes;
    }
}));
class UrlNode {
    insert(urlPath) {
        this._insert(urlPath.split("/").filter(Boolean), [], false);
    }
    smoosh() {
        return this._smoosh();
    }
    _smoosh(prefix) {
        if (prefix === void 0) prefix = "/";
        const childrenPaths = [
            ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[]"), 1);
        }
        if (this.restSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[...]"), 1);
        }
        if (this.optionalRestSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[[...]]"), 1);
        }
        const routes = childrenPaths.map((c)=>this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr)=>[
                ...prev,
                ...curr
            ], []);
        if (this.slugName !== null) {
            routes.push(...this.children.get("[]")._smoosh(prefix + "[" + this.slugName + "]/"));
        }
        if (!this.placeholder) {
            const r = prefix === "/" ? "/" : prefix.slice(0, -1);
            if (this.optionalRestSlugName != null) {
                throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r + '" and "' + r + "[[..." + this.optionalRestSlugName + ']]").');
            }
            routes.unshift(r);
        }
        if (this.restSlugName !== null) {
            routes.push(...this.children.get("[...]")._smoosh(prefix + "[..." + this.restSlugName + "]/"));
        }
        if (this.optionalRestSlugName !== null) {
            routes.push(...this.children.get("[[...]]")._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
        }
        return routes;
    }
    _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
            this.placeholder = false;
            return;
        }
        if (isCatchAll) {
            throw new Error("Catch-all must be the last part of the URL.");
        }
        // The next segment in the urlPaths list
        let nextSegment = urlPaths[0];
        // Check if the segment matches `[something]`
        if (nextSegment.startsWith("[") && nextSegment.endsWith("]")) {
            // Strip `[` and `]`, leaving only `something`
            let segmentName = nextSegment.slice(1, -1);
            let isOptional = false;
            if (segmentName.startsWith("[") && segmentName.endsWith("]")) {
                // Strip optional `[` and `]`, leaving only `something`
                segmentName = segmentName.slice(1, -1);
                isOptional = true;
            }
            if (segmentName.startsWith("...")) {
                // Strip `...`, leaving only `something`
                segmentName = segmentName.substring(3);
                isCatchAll = true;
            }
            if (segmentName.startsWith("[") || segmentName.endsWith("]")) {
                throw new Error("Segment names may not start or end with extra brackets ('" + segmentName + "').");
            }
            if (segmentName.startsWith(".")) {
                throw new Error("Segment names may not start with erroneous periods ('" + segmentName + "').");
            }
            function handleSlug(previousSlug, nextSlug) {
                if (previousSlug !== null) {
                    // If the specific segment already has a slug but the slug is not `something`
                    // This prevents collisions like:
                    // pages/[post]/index.js
                    // pages/[id]/index.js
                    // Because currently multiple dynamic params on the same segment level are not supported
                    if (previousSlug !== nextSlug) {
                        // TODO: This error seems to be confusing for users, needs an error link, the description can be based on above comment.
                        throw new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "').");
                    }
                }
                slugNames.forEach((slug)=>{
                    if (slug === nextSlug) {
                        throw new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path');
                    }
                    if (slug.replace(/\W/g, "") === nextSegment.replace(/\W/g, "")) {
                        throw new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path');
                    }
                });
                slugNames.push(nextSlug);
            }
            if (isCatchAll) {
                if (isOptional) {
                    if (this.restSlugName != null) {
                        throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).');
                    }
                    handleSlug(this.optionalRestSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.optionalRestSlugName = segmentName;
                    // nextSegment is overwritten to [[...]] so that it can later be sorted specifically
                    nextSegment = "[[...]]";
                } else {
                    if (this.optionalRestSlugName != null) {
                        throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").');
                    }
                    handleSlug(this.restSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.restSlugName = segmentName;
                    // nextSegment is overwritten to [...] so that it can later be sorted specifically
                    nextSegment = "[...]";
                }
            } else {
                if (isOptional) {
                    throw new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").');
                }
                handleSlug(this.slugName, segmentName);
                // slugName is kept as it can only be one particular slugName
                this.slugName = segmentName;
                // nextSegment is overwritten to [] so that it can later be sorted specifically
                nextSegment = "[]";
            }
        }
        // If this UrlNode doesn't have the nextSegment yet we create a new child UrlNode
        if (!this.children.has(nextSegment)) {
            this.children.set(nextSegment, new UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
    }
    constructor(){
        this.placeholder = true;
        this.children = new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
    }
}
function getSortedRoutes(normalizedPages) {
    // First the UrlNode is created, and every UrlNode can have only 1 dynamic segment
    // Eg you can't have pages/[post]/abc.js and pages/[hello]/something-else.js
    // Only 1 dynamic segment per nesting level
    // So in the case that is test/integration/dynamic-routing it'll be this:
    // pages/[post]/comments.js
    // pages/blog/[post]/comment/[id].js
    // Both are fine because `pages/[post]` and `pages/blog` are on the same level
    // So in this case `UrlNode` created here has `this.slugName === 'post'`
    // And since your PR passed through `slugName` as an array basically it'd including it in too many possibilities
    // Instead what has to be passed through is the upwards path's dynamic names
    const root = new UrlNode();
    // Here the `root` gets injected multiple paths, and insert will break them up into sublevels
    normalizedPages.forEach((pagePath)=>root.insert(pagePath));
    // Smoosh will then sort those sublevels up to the point where you get the correct route definition priority
    return root.smoosh();
} //# sourceMappingURL=sorted-routes.js.map


/***/ }),

/***/ 130:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    isResSent: function() {
        return isResSent;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    DecodeError: function() {
        return DecodeError;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    "CLS",
    "FCP",
    "FID",
    "INP",
    "LCP",
    "TTFB"
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ":" + port : "");
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split("?");
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? "?" + urlParts.slice(1).join("?") : "");
}
async function loadGetInitialProps(App, ctx) {
    if (false) { var _App_prototype; }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw new Error(message);
    }
    if (false) {}
    return props;
}
const SP = typeof performance !== "undefined";
const ST = SP && [
    "mark",
    "measure",
    "getEntriesByName"
].every((method)=>typeof performance[method] === "function");
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = "ENOENT";
        this.name = "PageNotFoundError";
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = "ENOENT";
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map


/***/ }),

/***/ 2451:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(489)


/***/ }),

/***/ 1440:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(954)


/***/ }),

/***/ 7114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(696)


/***/ }),

/***/ 8324:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._class_private_field_loose_base = _class_private_field_loose_base;
function _class_private_field_loose_base(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
        throw new TypeError("attempted to use private field on non-instance");
    }

    return receiver;
}


/***/ }),

/***/ 4567:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var id = 0;

exports._ = exports._class_private_field_loose_key = _class_private_field_loose_key;
function _class_private_field_loose_key(name) {
    return "__private_" + id++ + "_" + name;
}


/***/ }),

/***/ 2147:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


/***/ }),

/***/ 4009:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();

    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
exports._ = exports._interop_require_wildcard = _interop_require_wildcard;
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };

    var cache = _getRequireWildcardCache(nodeInterop);

    if (cache && cache.has(obj)) return cache.get(obj);

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }

    newObj.default = obj;

    if (cache) cache.set(obj, newObj);

    return newObj;
}


/***/ }),

/***/ 3297:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 7686:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ AnimatePresence)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var LayoutGroupContext = __webpack_require__(8549);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.mjs
var use_constant = __webpack_require__(4349);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var use_isomorphic_effect = __webpack_require__(381);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var PresenceContext = __webpack_require__(9386);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/is-html-element.mjs
var is_html_element = __webpack_require__(5447);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var MotionConfigContext = __webpack_require__(5248);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
"use client";






/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */
class PopChildMeasure extends react_.Component {
    getSnapshotBeforeUpdate(prevProps) {
        const element = this.props.childRef.current;
        if (element && prevProps.isPresent && !this.props.isPresent) {
            const parent = element.offsetParent;
            const parentWidth = (0,is_html_element/* isHTMLElement */.R)(parent)
                ? parent.offsetWidth || 0
                : 0;
            const size = this.props.sizeRef.current;
            size.height = element.offsetHeight || 0;
            size.width = element.offsetWidth || 0;
            size.top = element.offsetTop;
            size.left = element.offsetLeft;
            size.right = parentWidth - size.width - size.left;
        }
        return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */
    componentDidUpdate() { }
    render() {
        return this.props.children;
    }
}
function PopChild({ children, isPresent, anchorX }) {
    const id = (0,react_.useId)();
    const ref = (0,react_.useRef)(null);
    const size = (0,react_.useRef)({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
    });
    const { nonce } = (0,react_.useContext)(MotionConfigContext/* MotionConfigContext */._);
    /**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */
    (0,react_.useInsertionEffect)(() => {
        const { width, height, top, left, right } = size.current;
        if (isPresent || !ref.current || !width || !height)
            return;
        const x = anchorX === "left" ? `left: ${left}` : `right: ${right}`;
        ref.current.dataset.motionPopId = id;
        const style = document.createElement("style");
        if (nonce)
            style.nonce = nonce;
        document.head.appendChild(style);
        if (style.sheet) {
            style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            top: ${top}px !important;
          }
        `);
        }
        return () => {
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        };
    }, [isPresent]);
    return ((0,jsx_runtime_.jsx)(PopChildMeasure, { isPresent: isPresent, childRef: ref, sizeRef: size, children: react_.cloneElement(children, { ref }) }));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
"use client";







const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, }) => {
    const presenceChildren = (0,use_constant/* useConstant */.h)(newChildrenMap);
    const id = (0,react_.useId)();
    let isReusedContext = true;
    let context = (0,react_.useMemo)(() => {
        isReusedContext = false;
        return {
            id,
            initial,
            isPresent,
            custom,
            onExitComplete: (childId) => {
                presenceChildren.set(childId, true);
                for (const isComplete of presenceChildren.values()) {
                    if (!isComplete)
                        return; // can stop searching when any is incomplete
                }
                onExitComplete && onExitComplete();
            },
            register: (childId) => {
                presenceChildren.set(childId, false);
                return () => presenceChildren.delete(childId);
            },
        };
    }, [isPresent, presenceChildren, onExitComplete]);
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    if (presenceAffectsLayout && isReusedContext) {
        context = { ...context };
    }
    (0,react_.useMemo)(() => {
        presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
    }, [isPresent]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */
    react_.useEffect(() => {
        !isPresent &&
            !presenceChildren.size &&
            onExitComplete &&
            onExitComplete();
    }, [isPresent]);
    if (mode === "popLayout") {
        children = ((0,jsx_runtime_.jsx)(PopChild, { isPresent: isPresent, anchorX: anchorX, children: children }));
    }
    return ((0,jsx_runtime_.jsx)(PresenceContext/* PresenceContext */.O.Provider, { value: context, children: children }));
};
function newChildrenMap() {
    return new Map();
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
var use_presence = __webpack_require__(1886);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs


const getChildKey = (child) => child.key || "";
function onlyElements(children) {
    const filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    react_.Children.forEach(children, (child) => {
        if ((0,react_.isValidElement)(child))
            filtered.push(child);
    });
    return filtered;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
"use client";









/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", }) => {
    const [isParentPresent, safeToRemove] = (0,use_presence/* usePresence */.oO)(propagate);
    /**
     * Filter any children that aren't ReactElements. We can only track components
     * between renders with a props.key.
     */
    const presentChildren = (0,react_.useMemo)(() => onlyElements(children), [children]);
    /**
     * Track the keys of the currently rendered children. This is used to
     * determine which children are exiting.
     */
    const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
    /**
     * If `initial={false}` we only want to pass this to components in the first render.
     */
    const isInitialRender = (0,react_.useRef)(true);
    /**
     * A ref containing the currently present children. When all exit animations
     * are complete, we use this to re-render the component with the latest children
     * *committed* rather than the latest children *rendered*.
     */
    const pendingPresentChildren = (0,react_.useRef)(presentChildren);
    /**
     * Track which exiting children have finished animating out.
     */
    const exitComplete = (0,use_constant/* useConstant */.h)(() => new Map());
    /**
     * Save children to render as React state. To ensure this component is concurrent-safe,
     * we check for exiting children via an effect.
     */
    const [diffedChildren, setDiffedChildren] = (0,react_.useState)(presentChildren);
    const [renderedChildren, setRenderedChildren] = (0,react_.useState)(presentChildren);
    (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.L)(() => {
        isInitialRender.current = false;
        pendingPresentChildren.current = presentChildren;
        /**
         * Update complete status of exiting children.
         */
        for (let i = 0; i < renderedChildren.length; i++) {
            const key = getChildKey(renderedChildren[i]);
            if (!presentKeys.includes(key)) {
                if (exitComplete.get(key) !== true) {
                    exitComplete.set(key, false);
                }
            }
            else {
                exitComplete.delete(key);
            }
        }
    }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
    const exitingChildren = [];
    if (presentChildren !== diffedChildren) {
        let nextChildren = [...presentChildren];
        /**
         * Loop through all the currently rendered components and decide which
         * are exiting.
         */
        for (let i = 0; i < renderedChildren.length; i++) {
            const child = renderedChildren[i];
            const key = getChildKey(child);
            if (!presentKeys.includes(key)) {
                nextChildren.splice(i, 0, child);
                exitingChildren.push(child);
            }
        }
        /**
         * If we're in "wait" mode, and we have exiting children, we want to
         * only render these until they've all exited.
         */
        if (mode === "wait" && exitingChildren.length) {
            nextChildren = exitingChildren;
        }
        setRenderedChildren(onlyElements(nextChildren));
        setDiffedChildren(presentChildren);
        /**
         * Early return to ensure once we've set state with the latest diffed
         * children, we can immediately re-render.
         */
        return null;
    }
    if (false) {}
    /**
     * If we've been provided a forceRender function by the LayoutGroupContext,
     * we can use it to force a re-render amongst all surrounding components once
     * all components have finished animating out.
     */
    const { forceRender } = (0,react_.useContext)(LayoutGroupContext/* LayoutGroupContext */.p);
    return ((0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, { children: renderedChildren.map((child) => {
            const key = getChildKey(child);
            const isPresent = propagate && !isParentPresent
                ? false
                : presentChildren === renderedChildren ||
                    presentKeys.includes(key);
            const onExit = () => {
                if (exitComplete.has(key)) {
                    exitComplete.set(key, true);
                }
                else {
                    return;
                }
                let isEveryExitComplete = true;
                exitComplete.forEach((isExitComplete) => {
                    if (!isExitComplete)
                        isEveryExitComplete = false;
                });
                if (isEveryExitComplete) {
                    forceRender?.();
                    setRenderedChildren(pendingPresentChildren.current);
                    propagate && safeToRemove?.();
                    onExitComplete && onExitComplete();
                }
            };
            return ((0,jsx_runtime_.jsx)(PresenceChild, { isPresent: isPresent, initial: !isInitialRender.current || initial
                    ? undefined
                    : false, custom: custom, presenceAffectsLayout: presenceAffectsLayout, mode: mode, onExitComplete: isPresent ? undefined : onExit, anchorX: anchorX, children: child }, key));
        }) }));
};




/***/ }),

/***/ 1886:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oO: () => (/* binding */ usePresence)
/* harmony export */ });
/* unused harmony exports isPresent, useIsPresent */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9386);



/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
function usePresence(subscribe = true) {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_1__/* .PresenceContext */ .O);
    if (context === null)
        return [true, null];
    const { isPresent, onExitComplete, register } = context;
    // It's safe to call the following hooks conditionally (after an early return) because the context will always
    // either be null or non-null for the lifespan of the component.
    const id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (subscribe) {
            return register(id);
        }
    }, [subscribe]);
    const safeToRemove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => subscribe && onExitComplete && onExitComplete(id), [id, onExitComplete, subscribe]);
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
/**
 * Similar to `usePresence`, except `useIsPresent` simply returns whether or not the component is present.
 * There is no `safeToRemove` function.
 *
 * ```jsx
 * import { useIsPresent } from "framer-motion"
 *
 * export const Component = () => {
 *   const isPresent = useIsPresent()
 *
 *   useEffect(() => {
 *     !isPresent && console.log("I've been removed!")
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * @public
 */
function useIsPresent() {
    return isPresent(useContext(PresenceContext));
}
function isPresent(context) {
    return context === null ? true : context.isPresent;
}




/***/ }),

/***/ 8549:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ LayoutGroupContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
"use client";


const LayoutGroupContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});




/***/ }),

/***/ 5248:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ MotionConfigContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
"use client";


/**
 * @public
 */
const MotionConfigContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    transformPagePoint: (p) => p,
    isStatic: false,
    reducedMotion: "never",
});




/***/ }),

/***/ 9386:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ PresenceContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
"use client";


/**
 * @public
 */
const PresenceContext = 
/* @__PURE__ */ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);




/***/ }),

/***/ 6933:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ motion)
});

;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/components/create-proxy.mjs


function createDOMMotionComponentProxy(componentFactory) {
    if (typeof Proxy === "undefined") {
        return componentFactory;
    }
    /**
     * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
     * Rather than generating them anew every render.
     */
    const componentCache = new Map();
    const deprecatedFactoryFunction = (...args) => {
        if (false) {}
        return componentFactory(...args);
    };
    return new Proxy(deprecatedFactoryFunction, {
        /**
         * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
         * The prop name is passed through as `key` and we can use that to generate a `motion`
         * DOM component with that name.
         */
        get: (_target, key) => {
            if (key === "create")
                return componentFactory;
            /**
             * If this element doesn't exist in the component cache, create it and cache.
             */
            if (!componentCache.has(key)) {
                componentCache.set(key, componentFactory(key));
            }
            return componentCache.get(key);
        },
    });
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function isAnimationControls(v) {
    return (v !== null &&
        typeof v === "object" &&
        typeof v.start === "function");
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs
function getValueState(visualElement) {
    const state = [{}, {}];
    visualElement?.values.forEach((value, key) => {
        state[0][key] = value.get();
        state[1][key] = value.getVelocity();
    });
    return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
    /**
     * If the variant definition is a function, resolve.
     */
    if (typeof definition === "function") {
        const [current, velocity] = getValueState(visualElement);
        definition = definition(custom !== undefined ? custom : props.custom, current, velocity);
    }
    /**
     * If the variant definition is a variant label, or
     * the function returned a variant label, resolve.
     */
    if (typeof definition === "string") {
        definition = props.variants && props.variants[definition];
    }
    /**
     * At this point we've resolved both functions and variant labels,
     * but the resolved variant label might itself have been a function.
     * If so, resolve. This can only have returned a valid target object.
     */
    if (typeof definition === "function") {
        const [current, velocity] = getValueState(visualElement);
        definition = definition(custom !== undefined ? custom : props.custom, current, velocity);
    }
    return definition;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs


function resolveVariant(visualElement, definition, custom) {
    const props = visualElement.getProps();
    return resolveVariantFromProps(props, definition, custom !== undefined ? custom : props.custom, visualElement);
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function getValueTransition(transition, key) {
    return (transition?.[key] ??
        transition?.["default"] ??
        transition);
}



// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/frameloop/frame.mjs
var frameloop_frame = __webpack_require__(3662);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
/**
 * Generate a list of every possible transform key.
 */
const transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
];
/**
 * A quick lookup for transform props.
 */
const transformProps = /*@__PURE__*/ (() => new Set(transformPropOrder))();



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/render/utils/keys-position.mjs


const positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...transformPropOrder,
]);



// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/value/index.mjs
var es_value = __webpack_require__(6728);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
const isKeyframesTarget = (v) => {
    return Array.isArray(v);
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/setters.mjs




/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */
function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
        visualElement.getValue(key).set(value);
    }
    else {
        visualElement.addValue(key, (0,es_value/* motionValue */.BX)(value));
    }
}
function resolveFinalValueInKeyframes(v) {
    // TODO maybe throw if v.length - 1 is placeholder token?
    return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
}
function setTarget(visualElement, definition) {
    const resolved = resolveVariant(visualElement, definition);
    let { transitionEnd = {}, transition = {}, ...target } = resolved || {};
    target = { ...target, ...transitionEnd };
    for (const key in target) {
        const value = resolveFinalValueInKeyframes(target[key]);
        setMotionValue(visualElement, key, value);
    }
}



// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/global-config.mjs
var global_config = __webpack_require__(1206);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
const isMotionValue = (value) => Boolean(value && value.getVelocity);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-will-change/is.mjs


function isWillChangeMotionValue(value) {
    return Boolean(isMotionValue(value) && value.add);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-will-change/add-will-change.mjs



function addValueToWillChange(visualElement, key) {
    const willChange = visualElement.getValue("willChange");
    /**
     * It could be that a user has set willChange to a regular MotionValue,
     * in which case we can't add the value to it.
     */
    if (isWillChangeMotionValue(willChange)) {
        return willChange.add(key);
    }
    else if (!willChange && global_config/* MotionGlobalConfig */.c.WillChange) {
        const newWillChange = new global_config/* MotionGlobalConfig */.c.WillChange("auto");
        visualElement.addValue("willChange", newWillChange);
        newWillChange.add(key);
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
/**
 * Convert camelCase to dash-case properties.
 */
const camelToDash = (str) => str.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs


const optimizedAppearDataId = "framerAppearId";
const optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs


function getOptimisedAppearId(visualElement) {
    return visualElement.props[optimizedAppearDataAttribute];
}



// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/pipe.mjs
var pipe = __webpack_require__(6098);
// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/clamp.mjs
var clamp = __webpack_require__(2541);
;// CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/time-conversion.mjs
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
/*#__NO_SIDE_EFFECTS__*/
const time_conversion_secondsToMilliseconds = (seconds) => seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/
const millisecondsToSeconds = (milliseconds) => milliseconds / 1000;



// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/frameloop/sync-time.mjs
var sync_time = __webpack_require__(7476);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/stats/animation-count.mjs
const activeAnimations = {
    layout: 0,
    mainThread: 0,
    waapi: 0,
};



// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/mix/index.mjs + 5 modules
var mix = __webpack_require__(3349);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/drivers/frame.mjs



const frameloopDriver = (update) => {
    const passTimestamp = ({ timestamp }) => update(timestamp);
    return {
        start: (keepAlive = true) => frameloop_frame/* frame */.Wi.update(passTimestamp, keepAlive),
        stop: () => (0,frameloop_frame/* cancelFrame */.Pn)(passTimestamp),
        /**
         * If we're processing this frame we can use the
         * framelocked timestamp to keep things in sync.
         */
        now: () => (frameloop_frame.frameData.isProcessing ? frameloop_frame.frameData.timestamp : sync_time/* time */.X.now()),
    };
};



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs
const generateLinearEasing = (easing, duration, // as milliseconds
resolution = 10 // as milliseconds
) => {
    let points = "";
    const numPoints = Math.max(Math.round(duration / resolution), 2);
    for (let i = 0; i < numPoints; i++) {
        points += Math.round(easing(i / (numPoints - 1)) * 10000) / 10000 + ", ";
    }
    return `linear(${points.substring(0, points.length - 2)})`;
};



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */
const maxGeneratorDuration = 20000;
function calcGeneratorDuration(generator) {
    let duration = 0;
    const timeStep = 50;
    let state = generator.next(duration);
    while (!state.done && duration < maxGeneratorDuration) {
        duration += timeStep;
        state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs



/**
 * Create a progress => progress easing function from a generator.
 */
function createGeneratorEasing(options, scale = 100, createGenerator) {
    const generator = createGenerator({ ...options, keyframes: [0, scale] });
    const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
    return {
        type: "keyframes",
        ease: (progress) => {
            return generator.next(duration * progress).value / scale;
        },
        duration: millisecondsToSeconds(duration),
    };
}



// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/velocity-per-second.mjs
var velocity_per_second = __webpack_require__(8268);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs


const velocitySampleDuration = 5; // ms
function calcGeneratorVelocity(resolveValue, t, current) {
    const prevT = Math.max(t - velocitySampleDuration, 0);
    return (0,velocity_per_second/* velocityPerSecond */.R)(current - resolveValue(prevT), t - prevT);
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/generators/spring/defaults.mjs
const springDefaults = {
    // Default spring physics
    stiffness: 100,
    damping: 10,
    mass: 1.0,
    velocity: 0.0,
    // Default duration/bounce-based options
    duration: 800, // in ms
    bounce: 0.3,
    visualDuration: 0.3, // in seconds
    // Rest thresholds
    restSpeed: {
        granular: 0.01,
        default: 2,
    },
    restDelta: {
        granular: 0.005,
        default: 0.5,
    },
    // Limits
    minDuration: 0.01, // in seconds
    maxDuration: 10.0, // in seconds
    minDamping: 0.05,
    maxDamping: 1,
};



// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/errors.mjs
var errors = __webpack_require__(7664);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/generators/spring/find.mjs



const safeMin = 0.001;
function findSpring({ duration = springDefaults.duration, bounce = springDefaults.bounce, velocity = springDefaults.velocity, mass = springDefaults.mass, }) {
    let envelope;
    let derivative;
    (0,errors/* warning */.K)(duration <= time_conversion_secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less");
    let dampingRatio = 1 - bounce;
    /**
     * Restrict dampingRatio and duration to within acceptable ranges.
     */
    dampingRatio = (0,clamp/* clamp */.u)(springDefaults.minDamping, springDefaults.maxDamping, dampingRatio);
    duration = (0,clamp/* clamp */.u)(springDefaults.minDuration, springDefaults.maxDuration, millisecondsToSeconds(duration));
    if (dampingRatio < 1) {
        /**
         * Underdamped spring
         */
        envelope = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const a = exponentialDecay - velocity;
            const b = calcAngularFreq(undampedFreq, dampingRatio);
            const c = Math.exp(-delta);
            return safeMin - (a / b) * c;
        };
        derivative = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const d = delta * velocity + velocity;
            const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
            const f = Math.exp(-delta);
            const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
            const factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
            return (factor * ((d - e) * f)) / g;
        };
    }
    else {
        /**
         * Critically-damped spring
         */
        envelope = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (undampedFreq - velocity) * duration + 1;
            return -safeMin + a * b;
        };
        derivative = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (velocity - undampedFreq) * (duration * duration);
            return a * b;
        };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = time_conversion_secondsToMilliseconds(duration);
    if (isNaN(undampedFreq)) {
        return {
            stiffness: springDefaults.stiffness,
            damping: springDefaults.damping,
            duration,
        };
    }
    else {
        const stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
            duration,
        };
    }
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for (let i = 1; i < rootIterations; i++) {
        result = result - envelope(result) / derivative(result);
    }
    return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/generators/spring/index.mjs








const durationKeys = ["duration", "bounce"];
const physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
    return keys.some((key) => options[key] !== undefined);
}
function getSpringOptions(options) {
    let springOptions = {
        velocity: springDefaults.velocity,
        stiffness: springDefaults.stiffness,
        damping: springDefaults.damping,
        mass: springDefaults.mass,
        isResolvedFromDuration: false,
        ...options,
    };
    // stiffness/damping/mass overrides duration/bounce
    if (!isSpringType(options, physicsKeys) &&
        isSpringType(options, durationKeys)) {
        if (options.visualDuration) {
            const visualDuration = options.visualDuration;
            const root = (2 * Math.PI) / (visualDuration * 1.2);
            const stiffness = root * root;
            const damping = 2 *
                (0,clamp/* clamp */.u)(0.05, 1, 1 - (options.bounce || 0)) *
                Math.sqrt(stiffness);
            springOptions = {
                ...springOptions,
                mass: springDefaults.mass,
                stiffness,
                damping,
            };
        }
        else {
            const derived = findSpring(options);
            springOptions = {
                ...springOptions,
                ...derived,
                mass: springDefaults.mass,
            };
            springOptions.isResolvedFromDuration = true;
        }
    }
    return springOptions;
}
function spring(optionsOrVisualDuration = springDefaults.visualDuration, bounce = springDefaults.bounce) {
    const options = typeof optionsOrVisualDuration !== "object"
        ? {
            visualDuration: optionsOrVisualDuration,
            keyframes: [0, 1],
            bounce,
        }
        : optionsOrVisualDuration;
    let { restSpeed, restDelta } = options;
    const origin = options.keyframes[0];
    const target = options.keyframes[options.keyframes.length - 1];
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */
    const state = { done: false, value: origin };
    const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration, } = getSpringOptions({
        ...options,
        velocity: -millisecondsToSeconds(options.velocity || 0),
    });
    const initialVelocity = velocity || 0.0;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const initialDelta = target - origin;
    const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
    /**
     * If we're working on a granular scale, use smaller defaults for determining
     * when the spring is finished.
     *
     * These defaults have been selected emprically based on what strikes a good
     * ratio between feeling good and finishing as soon as changes are imperceptible.
     */
    const isGranularScale = Math.abs(initialDelta) < 5;
    restSpeed || (restSpeed = isGranularScale
        ? springDefaults.restSpeed.granular
        : springDefaults.restSpeed.default);
    restDelta || (restDelta = isGranularScale
        ? springDefaults.restDelta.granular
        : springDefaults.restDelta.default);
    let resolveSpring;
    if (dampingRatio < 1) {
        const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
        // Underdamped spring
        resolveSpring = (t) => {
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            return (target -
                envelope *
                    (((initialVelocity +
                        dampingRatio * undampedAngularFreq * initialDelta) /
                        angularFreq) *
                        Math.sin(angularFreq * t) +
                        initialDelta * Math.cos(angularFreq * t)));
        };
    }
    else if (dampingRatio === 1) {
        // Critically damped spring
        resolveSpring = (t) => target -
            Math.exp(-undampedAngularFreq * t) *
                (initialDelta +
                    (initialVelocity + undampedAngularFreq * initialDelta) * t);
    }
    else {
        // Overdamped spring
        const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
        resolveSpring = (t) => {
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            // When performing sinh or cosh values can hit Infinity so we cap them here
            const freqForT = Math.min(dampedAngularFreq * t, 300);
            return (target -
                (envelope *
                    ((initialVelocity +
                        dampingRatio * undampedAngularFreq * initialDelta) *
                        Math.sinh(freqForT) +
                        dampedAngularFreq *
                            initialDelta *
                            Math.cosh(freqForT))) /
                    dampedAngularFreq);
        };
    }
    const generator = {
        calculatedDuration: isResolvedFromDuration ? duration || null : null,
        next: (t) => {
            const current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                let currentVelocity = t === 0 ? initialVelocity : 0.0;
                /**
                 * We only need to calculate velocity for under-damped springs
                 * as over- and critically-damped springs can't overshoot, so
                 * checking only for displacement is enough.
                 */
                if (dampingRatio < 1) {
                    currentVelocity =
                        t === 0
                            ? time_conversion_secondsToMilliseconds(initialVelocity)
                            : calcGeneratorVelocity(resolveSpring, t, current);
                }
                const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
                state.done =
                    isBelowVelocityThreshold && isBelowDisplacementThreshold;
            }
            else {
                state.done = t >= duration;
            }
            state.value = state.done ? target : current;
            return state;
        },
        toString: () => {
            const calculatedDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
            const easing = generateLinearEasing((progress) => generator.next(calculatedDuration * progress).value, calculatedDuration, 30);
            return calculatedDuration + "ms " + easing;
        },
        toTransition: () => { },
    };
    return generator;
}
spring.applyToOptions = (options) => {
    const generatorOptions = createGeneratorEasing(options, 100, spring);
    options.ease = generatorOptions.ease;
    options.duration = time_conversion_secondsToMilliseconds(generatorOptions.duration);
    options.type = "keyframes";
    return options;
};



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/generators/inertia.mjs



function inertia({ keyframes, velocity = 0.0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed, }) {
    const origin = keyframes[0];
    const state = {
        done: false,
        value: origin,
    };
    const isOutOfBounds = (v) => (min !== undefined && v < min) || (max !== undefined && v > max);
    const nearestBoundary = (v) => {
        if (min === undefined)
            return max;
        if (max === undefined)
            return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    let amplitude = power * velocity;
    const ideal = origin + amplitude;
    const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    /**
     * If the target has changed we need to re-calculate the amplitude, otherwise
     * the animation will start from the wrong position.
     */
    if (target !== ideal)
        amplitude = target - origin;
    const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
    const calcLatest = (t) => target + calcDelta(t);
    const applyFriction = (t) => {
        const delta = calcDelta(t);
        const latest = calcLatest(t);
        state.done = Math.abs(delta) <= restDelta;
        state.value = state.done ? target : latest;
    };
    /**
     * Ideally this would resolve for t in a stateless way, we could
     * do that by always precalculating the animation but as we know
     * this will be done anyway we can assume that spring will
     * be discovered during that.
     */
    let timeReachedBoundary;
    let spring$1;
    const checkCatchBoundary = (t) => {
        if (!isOutOfBounds(state.value))
            return;
        timeReachedBoundary = t;
        spring$1 = spring({
            keyframes: [state.value, nearestBoundary(state.value)],
            velocity: calcGeneratorVelocity(calcLatest, t, state.value), // TODO: This should be passing * 1000
            damping: bounceDamping,
            stiffness: bounceStiffness,
            restDelta,
            restSpeed,
        });
    };
    checkCatchBoundary(0);
    return {
        calculatedDuration: null,
        next: (t) => {
            /**
             * We need to resolve the friction to figure out if we need a
             * spring but we don't want to do this twice per frame. So here
             * we flag if we updated for this frame and later if we did
             * we can skip doing it again.
             */
            let hasUpdatedFrame = false;
            if (!spring$1 && timeReachedBoundary === undefined) {
                hasUpdatedFrame = true;
                applyFriction(t);
                checkCatchBoundary(t);
            }
            /**
             * If we have a spring and the provided t is beyond the moment the friction
             * animation crossed the min/max boundary, use the spring.
             */
            if (timeReachedBoundary !== undefined && t >= timeReachedBoundary) {
                return spring$1.next(t - timeReachedBoundary);
            }
            else {
                !hasUpdatedFrame && applyFriction(t);
                return state;
            }
        },
    };
}



// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/noop.mjs
var noop = __webpack_require__(3201);
;// CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs


/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2) => (((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) *
    t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        }
        else {
            lowerBound = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision &&
        ++i < subdivisionMaxIterations);
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2)
        return noop/* noop */.Z;
    const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}



;// CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/easing/ease.mjs


const easeIn = /*@__PURE__*/ cubicBezier(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ cubicBezier(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ cubicBezier(0.42, 0, 0.58, 1);



;// CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs
const isEasingArray = (ease) => {
    return Array.isArray(ease) && typeof ease[0] !== "number";
};



;// CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
const mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;



;// CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs
// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
const reverseEasing = (easing) => (p) => 1 - easing(1 - p);



;// CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/easing/back.mjs




const backOut = /*@__PURE__*/ cubicBezier(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ reverseEasing(backOut);
const backInOut = /*@__PURE__*/ mirrorEasing(backIn);



;// CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/easing/anticipate.mjs


const anticipate = (p) => (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));



;// CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/easing/circ.mjs



const circIn = (p) => 1 - Math.sin(Math.acos(p));
const circOut = reverseEasing(circIn);
const circInOut = mirrorEasing(circIn);



;// CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
const isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";



;// CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/easing/utils/map.mjs









const easingLookup = {
    linear: noop/* noop */.Z,
    easeIn: easeIn,
    easeInOut: easeInOut,
    easeOut: easeOut,
    circIn: circIn,
    circInOut: circInOut,
    circOut: circOut,
    backIn: backIn,
    backInOut: backInOut,
    backOut: backOut,
    anticipate: anticipate,
};
const isValidEasing = (easing) => {
    return typeof easing === "string";
};
const easingDefinitionToFunction = (definition) => {
    if (isBezierDefinition(definition)) {
        // If cubic bezier definition, create bezier curve
        (0,errors/* invariant */.k)(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
        const [x1, y1, x2, y2] = definition;
        return cubicBezier(x1, y1, x2, y2);
    }
    else if (isValidEasing(definition)) {
        // Else lookup from table
        (0,errors/* invariant */.k)(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`);
        return easingLookup[definition];
    }
    return definition;
};



// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/interpolate.mjs
var interpolate = __webpack_require__(9613);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs + 1 modules
var offsets_default = __webpack_require__(5819);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function convertOffsetToTimes(offset, duration) {
    return offset.map((o) => o * duration);
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs





function defaultEasing(values, easing) {
    return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease = "easeInOut", }) {
    /**
     * Easing functions can be externally defined as strings. Here we convert them
     * into actual functions.
     */
    const easingFunctions = isEasingArray(ease)
        ? ease.map(easingDefinitionToFunction)
        : easingDefinitionToFunction(ease);
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */
    const state = {
        done: false,
        value: keyframeValues[0],
    };
    /**
     * Create a times array based on the provided 0-1 offsets
     */
    const absoluteTimes = convertOffsetToTimes(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length
        ? times
        : (0,offsets_default/* defaultOffset */.Y)(keyframeValues), duration);
    const mapTimeToKeyframe = (0,interpolate/* interpolate */.s)(absoluteTimes, keyframeValues, {
        ease: Array.isArray(easingFunctions)
            ? easingFunctions
            : defaultEasing(keyframeValues, easingFunctions),
    });
    return {
        calculatedDuration: duration,
        next: (t) => {
            state.value = mapTimeToKeyframe(t);
            state.done = t >= duration;
            return state;
        },
    };
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
const isNotNull = (value) => value !== null;
function getFinalKeyframe(keyframes, { repeat, repeatType = "loop" }, finalKeyframe, speed = 1) {
    const resolvedKeyframes = keyframes.filter(isNotNull);
    const useFirstKeyframe = speed < 0 || (repeat && repeatType !== "loop" && repeat % 2 === 1);
    const index = useFirstKeyframe ? 0 : resolvedKeyframes.length - 1;
    return !index || finalKeyframe === undefined
        ? resolvedKeyframes[index]
        : finalKeyframe;
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs




const transitionTypeMap = {
    decay: inertia,
    inertia: inertia,
    tween: keyframes,
    keyframes: keyframes,
    spring: spring,
};
function replaceTransitionType(transition) {
    if (typeof transition.type === "string") {
        transition.type = transitionTypeMap[transition.type];
    }
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
class WithPromise {
    constructor() {
        this.updateFinished();
    }
    get finished() {
        return this._finished;
    }
    updateFinished() {
        this._finished = new Promise((resolve) => {
            this.resolve = resolve;
        });
    }
    notifyFinished() {
        this.resolve();
    }
    /**
     * Allows the animation to be awaited.
     *
     * @deprecated Use `finished` instead.
     */
    then(onResolve, onReject) {
        return this.finished.then(onResolve, onReject);
    }
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/JSAnimation.mjs












const percentToProgress = (percent) => percent / 100;
class JSAnimation extends WithPromise {
    constructor(options) {
        super();
        this.state = "idle";
        this.startTime = null;
        this.isStopped = false;
        /**
         * The current time of the animation.
         */
        this.currentTime = 0;
        /**
         * The time at which the animation was paused.
         */
        this.holdTime = null;
        /**
         * Playback speed as a factor. 0 would be stopped, -1 reverse and 2 double speed.
         */
        this.playbackSpeed = 1;
        /**
         * This method is bound to the instance to fix a pattern where
         * animation.stop is returned as a reference from a useEffect.
         */
        this.stop = () => {
            const { motionValue } = this.options;
            if (motionValue && motionValue.updatedAt !== sync_time/* time */.X.now()) {
                this.tick(sync_time/* time */.X.now());
            }
            this.isStopped = true;
            if (this.state === "idle")
                return;
            this.teardown();
            this.options.onStop?.();
        };
        activeAnimations.mainThread++;
        this.options = options;
        this.initAnimation();
        this.play();
        if (options.autoplay === false)
            this.pause();
    }
    initAnimation() {
        const { options } = this;
        replaceTransitionType(options);
        const { type = keyframes, repeat = 0, repeatDelay = 0, repeatType, velocity = 0, } = options;
        let { keyframes: keyframes$1 } = options;
        const generatorFactory = type || keyframes;
        if (false) {}
        if (generatorFactory !== keyframes &&
            typeof keyframes$1[0] !== "number") {
            this.mixKeyframes = (0,pipe/* pipe */.z)(percentToProgress, (0,mix/* mix */.C)(keyframes$1[0], keyframes$1[1]));
            keyframes$1 = [0, 100];
        }
        const generator = generatorFactory({ ...options, keyframes: keyframes$1 });
        /**
         * If we have a mirror repeat type we need to create a second generator that outputs the
         * mirrored (not reversed) animation and later ping pong between the two generators.
         */
        if (repeatType === "mirror") {
            this.mirroredGenerator = generatorFactory({
                ...options,
                keyframes: [...keyframes$1].reverse(),
                velocity: -velocity,
            });
        }
        /**
         * If duration is undefined and we have repeat options,
         * we need to calculate a duration from the generator.
         *
         * We set it to the generator itself to cache the duration.
         * Any timeline resolver will need to have already precalculated
         * the duration by this step.
         */
        if (generator.calculatedDuration === null) {
            generator.calculatedDuration = calcGeneratorDuration(generator);
        }
        const { calculatedDuration } = generator;
        this.calculatedDuration = calculatedDuration;
        this.resolvedDuration = calculatedDuration + repeatDelay;
        this.totalDuration = this.resolvedDuration * (repeat + 1) - repeatDelay;
        this.generator = generator;
    }
    updateTime(timestamp) {
        const animationTime = Math.round(timestamp - this.startTime) * this.playbackSpeed;
        // Update currentTime
        if (this.holdTime !== null) {
            this.currentTime = this.holdTime;
        }
        else {
            // Rounding the time because floating point arithmetic is not always accurate, e.g. 3000.367 - 1000.367 =
            // 2000.0000000000002. This is a problem when we are comparing the currentTime with the duration, for
            // example.
            this.currentTime = animationTime;
        }
    }
    tick(timestamp, sample = false) {
        const { generator, totalDuration, mixKeyframes, mirroredGenerator, resolvedDuration, calculatedDuration, } = this;
        if (this.startTime === null)
            return generator.next(0);
        const { delay = 0, keyframes, repeat, repeatType, repeatDelay, type, onUpdate, finalKeyframe, } = this.options;
        /**
         * requestAnimationFrame timestamps can come through as lower than
         * the startTime as set by performance.now(). Here we prevent this,
         * though in the future it could be possible to make setting startTime
         * a pending operation that gets resolved here.
         */
        if (this.speed > 0) {
            this.startTime = Math.min(this.startTime, timestamp);
        }
        else if (this.speed < 0) {
            this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
        }
        if (sample) {
            this.currentTime = timestamp;
        }
        else {
            this.updateTime(timestamp);
        }
        // Rebase on delay
        const timeWithoutDelay = this.currentTime - delay * (this.playbackSpeed >= 0 ? 1 : -1);
        const isInDelayPhase = this.playbackSpeed >= 0
            ? timeWithoutDelay < 0
            : timeWithoutDelay > totalDuration;
        this.currentTime = Math.max(timeWithoutDelay, 0);
        // If this animation has finished, set the current time  to the total duration.
        if (this.state === "finished" && this.holdTime === null) {
            this.currentTime = totalDuration;
        }
        let elapsed = this.currentTime;
        let frameGenerator = generator;
        if (repeat) {
            /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */
            const progress = Math.min(this.currentTime, totalDuration) / resolvedDuration;
            /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */
            let currentIteration = Math.floor(progress);
            /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */
            let iterationProgress = progress % 1.0;
            /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */
            if (!iterationProgress && progress >= 1) {
                iterationProgress = 1;
            }
            iterationProgress === 1 && currentIteration--;
            currentIteration = Math.min(currentIteration, repeat + 1);
            /**
             * Reverse progress if we're not running in "normal" direction
             */
            const isOddIteration = Boolean(currentIteration % 2);
            if (isOddIteration) {
                if (repeatType === "reverse") {
                    iterationProgress = 1 - iterationProgress;
                    if (repeatDelay) {
                        iterationProgress -= repeatDelay / resolvedDuration;
                    }
                }
                else if (repeatType === "mirror") {
                    frameGenerator = mirroredGenerator;
                }
            }
            elapsed = (0,clamp/* clamp */.u)(0, 1, iterationProgress) * resolvedDuration;
        }
        /**
         * If we're in negative time, set state as the initial keyframe.
         * This prevents delay: x, duration: 0 animations from finishing
         * instantly.
         */
        const state = isInDelayPhase
            ? { done: false, value: keyframes[0] }
            : frameGenerator.next(elapsed);
        if (mixKeyframes) {
            state.value = mixKeyframes(state.value);
        }
        let { done } = state;
        if (!isInDelayPhase && calculatedDuration !== null) {
            done =
                this.playbackSpeed >= 0
                    ? this.currentTime >= totalDuration
                    : this.currentTime <= 0;
        }
        const isAnimationFinished = this.holdTime === null &&
            (this.state === "finished" || (this.state === "running" && done));
        // TODO: The exception for inertia could be cleaner here
        if (isAnimationFinished && type !== inertia) {
            state.value = getFinalKeyframe(keyframes, this.options, finalKeyframe, this.speed);
        }
        if (onUpdate) {
            onUpdate(state.value);
        }
        if (isAnimationFinished) {
            this.finish();
        }
        return state;
    }
    /**
     * Allows the returned animation to be awaited or promise-chained. Currently
     * resolves when the animation finishes at all but in a future update could/should
     * reject if its cancels.
     */
    then(resolve, reject) {
        return this.finished.then(resolve, reject);
    }
    get duration() {
        return millisecondsToSeconds(this.calculatedDuration);
    }
    get time() {
        return millisecondsToSeconds(this.currentTime);
    }
    set time(newTime) {
        newTime = time_conversion_secondsToMilliseconds(newTime);
        this.currentTime = newTime;
        if (this.startTime === null ||
            this.holdTime !== null ||
            this.playbackSpeed === 0) {
            this.holdTime = newTime;
        }
        else if (this.driver) {
            this.startTime = this.driver.now() - newTime / this.playbackSpeed;
        }
        this.driver?.start(false);
    }
    get speed() {
        return this.playbackSpeed;
    }
    set speed(newSpeed) {
        this.updateTime(sync_time/* time */.X.now());
        const hasChanged = this.playbackSpeed !== newSpeed;
        this.playbackSpeed = newSpeed;
        if (hasChanged) {
            this.time = millisecondsToSeconds(this.currentTime);
        }
    }
    play() {
        if (this.isStopped)
            return;
        const { driver = frameloopDriver, startTime } = this.options;
        if (!this.driver) {
            this.driver = driver((timestamp) => this.tick(timestamp));
        }
        this.options.onPlay?.();
        const now = this.driver.now();
        if (this.state === "finished") {
            this.updateFinished();
            this.startTime = now;
        }
        else if (this.holdTime !== null) {
            this.startTime = now - this.holdTime;
        }
        else if (!this.startTime) {
            this.startTime = startTime ?? now;
        }
        if (this.state === "finished" && this.speed < 0) {
            this.startTime += this.calculatedDuration;
        }
        this.holdTime = null;
        /**
         * Set playState to running only after we've used it in
         * the previous logic.
         */
        this.state = "running";
        this.driver.start();
    }
    pause() {
        this.state = "paused";
        this.updateTime(sync_time/* time */.X.now());
        this.holdTime = this.currentTime;
    }
    complete() {
        if (this.state !== "running") {
            this.play();
        }
        this.state = "finished";
        this.holdTime = null;
    }
    finish() {
        this.notifyFinished();
        this.teardown();
        this.state = "finished";
        this.options.onComplete?.();
    }
    cancel() {
        this.holdTime = null;
        this.startTime = 0;
        this.tick(0);
        this.teardown();
        this.options.onCancel?.();
    }
    teardown() {
        this.state = "idle";
        this.stopDriver();
        this.startTime = this.holdTime = null;
        activeAnimations.mainThread--;
    }
    stopDriver() {
        if (!this.driver)
            return;
        this.driver.stop();
        this.driver = undefined;
    }
    sample(sampleTime) {
        this.startTime = 0;
        return this.tick(sampleTime, true);
    }
    attachTimeline(timeline) {
        if (this.options.allowFlatten) {
            this.options.type = "keyframes";
            this.options.ease = "linear";
            this.initAnimation();
        }
        this.driver?.stop();
        return timeline.observe(this);
    }
}
// Legacy function support
function animateValue(options) {
    return new JSAnimation(options);
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function fillWildcards(keyframes) {
    for (let i = 1; i < keyframes.length; i++) {
        keyframes[i] ?? (keyframes[i] = keyframes[i - 1]);
    }
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
const radToDeg = (rad) => (rad * 180) / Math.PI;
const rotate = (v) => {
    const angle = radToDeg(Math.atan2(v[1], v[0]));
    return rebaseAngle(angle);
};
const matrix2dParsers = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (v) => (Math.abs(v[0]) + Math.abs(v[3])) / 2,
    rotate,
    rotateZ: rotate,
    skewX: (v) => radToDeg(Math.atan(v[1])),
    skewY: (v) => radToDeg(Math.atan(v[2])),
    skew: (v) => (Math.abs(v[1]) + Math.abs(v[2])) / 2,
};
const rebaseAngle = (angle) => {
    angle = angle % 360;
    if (angle < 0)
        angle += 360;
    return angle;
};
const rotateZ = rotate;
const scaleX = (v) => Math.sqrt(v[0] * v[0] + v[1] * v[1]);
const scaleY = (v) => Math.sqrt(v[4] * v[4] + v[5] * v[5]);
const matrix3dParsers = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX,
    scaleY,
    scale: (v) => (scaleX(v) + scaleY(v)) / 2,
    rotateX: (v) => rebaseAngle(radToDeg(Math.atan2(v[6], v[5]))),
    rotateY: (v) => rebaseAngle(radToDeg(Math.atan2(-v[2], v[0]))),
    rotateZ,
    rotate: rotateZ,
    skewX: (v) => radToDeg(Math.atan(v[4])),
    skewY: (v) => radToDeg(Math.atan(v[1])),
    skew: (v) => (Math.abs(v[1]) + Math.abs(v[4])) / 2,
};
function defaultTransformValue(name) {
    return name.includes("scale") ? 1 : 0;
}
function parseValueFromTransform(transform, name) {
    if (!transform || transform === "none") {
        return defaultTransformValue(name);
    }
    const matrix3dMatch = transform.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let parsers;
    let match;
    if (matrix3dMatch) {
        parsers = matrix3dParsers;
        match = matrix3dMatch;
    }
    else {
        const matrix2dMatch = transform.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        parsers = matrix2dParsers;
        match = matrix2dMatch;
    }
    if (!match) {
        return defaultTransformValue(name);
    }
    const valueParser = parsers[name];
    const values = match[1].split(",").map(convertTransformToNumber);
    return typeof valueParser === "function"
        ? valueParser(values)
        : values[valueParser];
}
const readTransformValue = (instance, name) => {
    const { transform = "none" } = getComputedStyle(instance);
    return parseValueFromTransform(transform, name);
};
function convertTransformToNumber(value) {
    return parseFloat(value.trim());
}



// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var numbers = __webpack_require__(4628);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/value/types/numbers/units.mjs
var units = __webpack_require__(260);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs





const isNumOrPxType = (v) => v === numbers/* number */.Rx || v === units.px;
const transformKeys = new Set(["x", "y", "z"]);
const nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
    const removedTransforms = [];
    nonTranslationalTransformKeys.forEach((key) => {
        const value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([key, value.get()]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    return removedTransforms;
}
const positionalValues = {
    // Dimensions
    width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
    height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
    top: (_bbox, { top }) => parseFloat(top),
    left: (_bbox, { left }) => parseFloat(left),
    bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
    right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
    // Transform
    x: (_bbox, { transform }) => parseValueFromTransform(transform, "x"),
    y: (_bbox, { transform }) => parseValueFromTransform(transform, "y"),
};
// Alias translate longform names
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs




const toResolve = new Set();
let isScheduled = false;
let anyNeedsMeasurement = false;
let isForced = false;
function measureAllKeyframes() {
    if (anyNeedsMeasurement) {
        const resolversToMeasure = Array.from(toResolve).filter((resolver) => resolver.needsMeasurement);
        const elementsToMeasure = new Set(resolversToMeasure.map((resolver) => resolver.element));
        const transformsToRestore = new Map();
        /**
         * Write pass
         * If we're measuring elements we want to remove bounding box-changing transforms.
         */
        elementsToMeasure.forEach((element) => {
            const removedTransforms = removeNonTranslationalTransform(element);
            if (!removedTransforms.length)
                return;
            transformsToRestore.set(element, removedTransforms);
            element.render();
        });
        // Read
        resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
        // Write
        elementsToMeasure.forEach((element) => {
            element.render();
            const restore = transformsToRestore.get(element);
            if (restore) {
                restore.forEach(([key, value]) => {
                    element.getValue(key)?.set(value);
                });
            }
        });
        // Read
        resolversToMeasure.forEach((resolver) => resolver.measureEndState());
        // Write
        resolversToMeasure.forEach((resolver) => {
            if (resolver.suspendedScrollY !== undefined) {
                window.scrollTo(0, resolver.suspendedScrollY);
            }
        });
    }
    anyNeedsMeasurement = false;
    isScheduled = false;
    toResolve.forEach((resolver) => resolver.complete(isForced));
    toResolve.clear();
}
function readAllKeyframes() {
    toResolve.forEach((resolver) => {
        resolver.readKeyframes();
        if (resolver.needsMeasurement) {
            anyNeedsMeasurement = true;
        }
    });
}
function flushKeyframeResolvers() {
    isForced = true;
    readAllKeyframes();
    measureAllKeyframes();
    isForced = false;
}
class KeyframeResolver {
    constructor(unresolvedKeyframes, onComplete, name, motionValue, element, isAsync = false) {
        this.state = "pending";
        /**
         * Track whether this resolver is async. If it is, it'll be added to the
         * resolver queue and flushed in the next frame. Resolvers that aren't going
         * to trigger read/write thrashing don't need to be async.
         */
        this.isAsync = false;
        /**
         * Track whether this resolver needs to perform a measurement
         * to resolve its keyframes.
         */
        this.needsMeasurement = false;
        this.unresolvedKeyframes = [...unresolvedKeyframes];
        this.onComplete = onComplete;
        this.name = name;
        this.motionValue = motionValue;
        this.element = element;
        this.isAsync = isAsync;
    }
    scheduleResolve() {
        this.state = "scheduled";
        if (this.isAsync) {
            toResolve.add(this);
            if (!isScheduled) {
                isScheduled = true;
                frameloop_frame/* frame */.Wi.read(readAllKeyframes);
                frameloop_frame/* frame */.Wi.resolveKeyframes(measureAllKeyframes);
            }
        }
        else {
            this.readKeyframes();
            this.complete();
        }
    }
    readKeyframes() {
        const { unresolvedKeyframes, name, element, motionValue } = this;
        // If initial keyframe is null we need to read it from the DOM
        if (unresolvedKeyframes[0] === null) {
            const currentValue = motionValue?.get();
            // TODO: This doesn't work if the final keyframe is a wildcard
            const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
            if (currentValue !== undefined) {
                unresolvedKeyframes[0] = currentValue;
            }
            else if (element && name) {
                const valueAsRead = element.readValue(name, finalKeyframe);
                if (valueAsRead !== undefined && valueAsRead !== null) {
                    unresolvedKeyframes[0] = valueAsRead;
                }
            }
            if (unresolvedKeyframes[0] === undefined) {
                unresolvedKeyframes[0] = finalKeyframe;
            }
            if (motionValue && currentValue === undefined) {
                motionValue.set(unresolvedKeyframes[0]);
            }
        }
        fillWildcards(unresolvedKeyframes);
    }
    setFinalKeyframe() { }
    measureInitialState() { }
    renderEndStyles() { }
    measureEndState() { }
    complete(isForcedComplete = false) {
        this.state = "complete";
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, isForcedComplete);
        toResolve.delete(this);
    }
    cancel() {
        if (this.state === "scheduled") {
            toResolve.delete(this);
            this.state = "pending";
        }
    }
    resume() {
        if (this.state === "pending")
            this.scheduleResolve();
    }
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs
const isCSSVar = (name) => name.startsWith("--");



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/render/dom/style-set.mjs


function setStyle(element, name, value) {
    isCSSVar(name)
        ? element.style.setProperty(name, value)
        : (element.style[name] = value);
}



// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var scroll_timeline = __webpack_require__(7662);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/stats/buffer.mjs
var buffer = __webpack_require__(7052);
// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/memo.mjs
var memo = __webpack_require__(1831);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/supports/flags.mjs
/**
 * Add the ability for test suites to manually set support flags
 * to better test more environments.
 */
const supportsFlags = {};



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/supports/memo.mjs



function memoSupports(callback, supportsFlag) {
    const memoized = (0,memo/* memo */.X)(callback);
    return () => supportsFlags[supportsFlag] ?? memoized();
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs


const supportsLinearEasing = /*@__PURE__*/ memoSupports(() => {
    try {
        document
            .createElement("div")
            .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    }
    catch (e) {
        return false;
    }
    return true;
}, "linearEasing");



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/waapi/easing/cubic-bezier.mjs
const cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/waapi/easing/supported.mjs


const supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: /*@__PURE__*/ cubicBezierAsString([0, 0.65, 0.55, 1]),
    circOut: /*@__PURE__*/ cubicBezierAsString([0.55, 0, 1, 0.45]),
    backIn: /*@__PURE__*/ cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
    backOut: /*@__PURE__*/ cubicBezierAsString([0.33, 1.53, 0.69, 0.99]),
};



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs






function mapEasingToNativeEasing(easing, duration) {
    if (!easing) {
        return undefined;
    }
    else if (typeof easing === "function") {
        return supportsLinearEasing()
            ? generateLinearEasing(easing, duration)
            : "ease-out";
    }
    else if (isBezierDefinition(easing)) {
        return cubicBezierAsString(easing);
    }
    else if (Array.isArray(easing)) {
        return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) ||
            supportedWaapiEasing.easeOut);
    }
    else {
        return supportedWaapiEasing[easing];
    }
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs




function startWaapiAnimation(element, valueName, keyframes, { delay = 0, duration = 300, repeat = 0, repeatType = "loop", ease = "easeOut", times, } = {}, pseudoElement = undefined) {
    const keyframeOptions = {
        [valueName]: keyframes,
    };
    if (times)
        keyframeOptions.offset = times;
    const easing = mapEasingToNativeEasing(ease, duration);
    /**
     * If this is an easing array, apply to keyframes, not animation as a whole
     */
    if (Array.isArray(easing))
        keyframeOptions.easing = easing;
    if (buffer/* statsBuffer */.f.value) {
        activeAnimations.waapi++;
    }
    const options = {
        delay,
        duration,
        easing: !Array.isArray(easing) ? easing : "linear",
        fill: "both",
        iterations: repeat + 1,
        direction: repeatType === "reverse" ? "alternate" : "normal",
    };
    if (pseudoElement)
        options.pseudoElement = pseudoElement;
    const animation = element.animate(keyframeOptions, options);
    if (buffer/* statsBuffer */.f.value) {
        animation.finished.finally(() => {
            activeAnimations.waapi--;
        });
    }
    return animation;
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function isGenerator(type) {
    return typeof type === "function" && "applyToOptions" in type;
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs



function applyGeneratorOptions({ type, ...options }) {
    if (isGenerator(type) && supportsLinearEasing()) {
        return type.applyToOptions(options);
    }
    else {
        options.duration ?? (options.duration = 300);
        options.ease ?? (options.ease = "easeOut");
    }
    return options;
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs








/**
 * NativeAnimation implements AnimationPlaybackControls for the browser's Web Animations API.
 */
class NativeAnimation extends WithPromise {
    constructor(options) {
        super();
        this.finishedTime = null;
        this.isStopped = false;
        if (!options)
            return;
        const { element, name, keyframes, pseudoElement, allowFlatten = false, finalKeyframe, onComplete, } = options;
        this.isPseudoElement = Boolean(pseudoElement);
        this.allowFlatten = allowFlatten;
        this.options = options;
        (0,errors/* invariant */.k)(typeof options.type !== "string", `animateMini doesn't support "type" as a string. Did you mean to import { spring } from "motion"?`);
        const transition = applyGeneratorOptions(options);
        this.animation = startWaapiAnimation(element, name, keyframes, transition, pseudoElement);
        if (transition.autoplay === false) {
            this.animation.pause();
        }
        this.animation.onfinish = () => {
            this.finishedTime = this.time;
            if (!pseudoElement) {
                const keyframe = getFinalKeyframe(keyframes, this.options, finalKeyframe, this.speed);
                if (this.updateMotionValue) {
                    this.updateMotionValue(keyframe);
                }
                else {
                    /**
                     * If we can, we want to commit the final style as set by the user,
                     * rather than the computed keyframe value supplied by the animation.
                     */
                    setStyle(element, name, keyframe);
                }
                this.animation.cancel();
            }
            onComplete?.();
            this.notifyFinished();
        };
    }
    play() {
        if (this.isStopped)
            return;
        this.animation.play();
        if (this.state === "finished") {
            this.updateFinished();
        }
    }
    pause() {
        this.animation.pause();
    }
    complete() {
        this.animation.finish?.();
    }
    cancel() {
        try {
            this.animation.cancel();
        }
        catch (e) { }
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = true;
        const { state } = this;
        if (state === "idle" || state === "finished") {
            return;
        }
        if (this.updateMotionValue) {
            this.updateMotionValue();
        }
        else {
            this.commitStyles();
        }
        if (!this.isPseudoElement)
            this.cancel();
    }
    /**
     * WAAPI doesn't natively have any interruption capabilities.
     *
     * In this method, we commit styles back to the DOM before cancelling
     * the animation.
     *
     * This is designed to be overridden by NativeAnimationExtended, which
     * will create a renderless JS animation and sample it twice to calculate
     * its current value, "previous" value, and therefore allow
     * Motion to also correctly calculate velocity for any subsequent animation
     * while deferring the commit until the next animation frame.
     */
    commitStyles() {
        if (!this.isPseudoElement) {
            this.animation.commitStyles?.();
        }
    }
    get duration() {
        const duration = this.animation.effect?.getComputedTiming?.().duration || 0;
        return millisecondsToSeconds(Number(duration));
    }
    get time() {
        return millisecondsToSeconds(Number(this.animation.currentTime) || 0);
    }
    set time(newTime) {
        this.finishedTime = null;
        this.animation.currentTime = time_conversion_secondsToMilliseconds(newTime);
    }
    /**
     * The playback speed of the animation.
     * 1 = normal speed, 2 = double speed, 0.5 = half speed.
     */
    get speed() {
        return this.animation.playbackRate;
    }
    set speed(newSpeed) {
        // Allow backwards playback after finishing
        if (newSpeed < 0)
            this.finishedTime = null;
        this.animation.playbackRate = newSpeed;
    }
    get state() {
        return this.finishedTime !== null
            ? "finished"
            : this.animation.playState;
    }
    get startTime() {
        return Number(this.animation.startTime);
    }
    set startTime(newStartTime) {
        this.animation.startTime = newStartTime;
    }
    /**
     * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
     */
    attachTimeline({ timeline, observe }) {
        if (this.allowFlatten) {
            this.animation.effect?.updateTiming({ easing: "linear" });
        }
        this.animation.onfinish = null;
        if (timeline && (0,scroll_timeline/* supportsScrollTimeline */.t)()) {
            this.animation.timeline = timeline;
            return noop/* noop */.Z;
        }
        else {
            return observe(this);
        }
    }
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/waapi/utils/unsupported-easing.mjs


const unsupportedEasingFunctions = {
    anticipate: anticipate,
    backInOut: backInOut,
    circInOut: circInOut,
};
function isUnsupportedEase(key) {
    return key in unsupportedEasingFunctions;
}
function replaceStringEasing(transition) {
    if (typeof transition.ease === "string" &&
        isUnsupportedEase(transition.ease)) {
        transition.ease = unsupportedEasingFunctions[transition.ease];
    }
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs






/**
 * 10ms is chosen here as it strikes a balance between smooth
 * results (more than one keyframe per frame at 60fps) and
 * keyframe quantity.
 */
const sampleDelta = 10; //ms
class NativeAnimationExtended extends NativeAnimation {
    constructor(options) {
        /**
         * The base NativeAnimation function only supports a subset
         * of Motion easings, and WAAPI also only supports some
         * easing functions via string/cubic-bezier definitions.
         *
         * This function replaces those unsupported easing functions
         * with a JS easing function. This will later get compiled
         * to a linear() easing function.
         */
        replaceStringEasing(options);
        /**
         * Ensure we replace the transition type with a generator function
         * before passing to WAAPI.
         *
         * TODO: Does this have a better home? It could be shared with
         * JSAnimation.
         */
        replaceTransitionType(options);
        super(options);
        if (options.startTime) {
            this.startTime = options.startTime;
        }
        this.options = options;
    }
    /**
     * WAAPI doesn't natively have any interruption capabilities.
     *
     * Rather than read commited styles back out of the DOM, we can
     * create a renderless JS animation and sample it twice to calculate
     * its current value, "previous" value, and therefore allow
     * Motion to calculate velocity for any subsequent animation.
     */
    updateMotionValue(value) {
        const { motionValue, onUpdate, onComplete, element, ...options } = this.options;
        if (!motionValue)
            return;
        if (value !== undefined) {
            motionValue.set(value);
            return;
        }
        const sampleAnimation = new JSAnimation({
            ...options,
            autoplay: false,
        });
        const sampleTime = time_conversion_secondsToMilliseconds(this.finishedTime ?? this.time);
        motionValue.setWithVelocity(sampleAnimation.sample(sampleTime - sampleDelta).value, sampleAnimation.sample(sampleTime).value, sampleDelta);
        sampleAnimation.stop();
    }
}



// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/value/types/complex/index.mjs + 1 modules
var complex = __webpack_require__(8043);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/utils/is-animatable.mjs


/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
const isAnimatable = (value, name) => {
    // If the list of keys tat might be non-animatable grows, replace with Set
    if (name === "zIndex")
        return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value))
        return true;
    if (typeof value === "string" && // It's animatable if we have a string
        (complex/* complex */.P.test(value) || value === "0") && // And it contains numbers and/or colors
        !value.startsWith("url(") // Unless it starts with "url("
    ) {
        return true;
    }
    return false;
};



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs




function hasKeyframesChanged(keyframes) {
    const current = keyframes[0];
    if (keyframes.length === 1)
        return true;
    for (let i = 0; i < keyframes.length; i++) {
        if (keyframes[i] !== current)
            return true;
    }
}
function canAnimate(keyframes, name, type, velocity) {
    /**
     * Check if we're able to animate between the start and end keyframes,
     * and throw a warning if we're attempting to animate between one that's
     * animatable and another that isn't.
     */
    const originKeyframe = keyframes[0];
    if (originKeyframe === null)
        return false;
    /**
     * These aren't traditionally animatable but we do support them.
     * In future we could look into making this more generic or replacing
     * this function with mix() === mixImmediate
     */
    if (name === "display" || name === "visibility")
        return true;
    const targetKeyframe = keyframes[keyframes.length - 1];
    const isOriginAnimatable = isAnimatable(originKeyframe, name);
    const isTargetAnimatable = isAnimatable(targetKeyframe, name);
    (0,errors/* warning */.K)(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
    // Always skip if any of these are true
    if (!isOriginAnimatable || !isTargetAnimatable) {
        return false;
    }
    return (hasKeyframesChanged(keyframes) ||
        ((type === "spring" || isGenerator(type)) && velocity));
}



// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/is-html-element.mjs
var is_html_element = __webpack_require__(5447);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs



/**
 * A list of values that can be hardware-accelerated.
 */
const acceleratedValues = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    // TODO: Could be re-enabled now we have support for linear() easing
    // "background-color"
]);
const supportsWaapi = /*@__PURE__*/ (0,memo/* memo */.X)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function supportsBrowserAnimation(options) {
    const { motionValue, name, repeatDelay, repeatType, damping, type } = options;
    if (!(0,is_html_element/* isHTMLElement */.R)(motionValue?.owner?.current)) {
        return false;
    }
    const { onUpdate, transformTemplate } = motionValue.owner.getProps();
    return (supportsWaapi() &&
        name &&
        acceleratedValues.has(name) &&
        (name !== "transform" || !transformTemplate) &&
        /**
         * If we're outputting values to onUpdate then we can't use WAAPI as there's
         * no way to read the value from WAAPI every frame.
         */
        !onUpdate &&
        !repeatDelay &&
        repeatType !== "mirror" &&
        damping !== 0 &&
        type !== "inertia");
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs










/**
 * Maximum time allowed between an animation being created and it being
 * resolved for us to use the latter as the start time.
 *
 * This is to ensure that while we prefer to "start" an animation as soon
 * as it's triggered, we also want to avoid a visual jump if there's a big delay
 * between these two moments.
 */
const MAX_RESOLVE_DELAY = 40;
class AsyncMotionValueAnimation extends WithPromise {
    constructor({ autoplay = true, delay = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", keyframes, name, motionValue, element, ...options }) {
        super();
        /**
         * Bound to support return animation.stop pattern
         */
        this.stop = () => {
            if (this._animation) {
                this._animation.stop();
                this.stopTimeline?.();
            }
            this.keyframeResolver?.cancel();
        };
        this.createdAt = sync_time/* time */.X.now();
        const optionsWithDefaults = {
            autoplay,
            delay,
            type,
            repeat,
            repeatDelay,
            repeatType,
            name,
            motionValue,
            element,
            ...options,
        };
        const KeyframeResolver$1 = element?.KeyframeResolver || KeyframeResolver;
        this.keyframeResolver = new KeyframeResolver$1(keyframes, (resolvedKeyframes, finalKeyframe, forced) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe, optionsWithDefaults, !forced), name, motionValue, element);
        this.keyframeResolver?.scheduleResolve();
    }
    onKeyframesResolved(keyframes, finalKeyframe, options, sync) {
        this.keyframeResolver = undefined;
        const { name, type, velocity, delay, isHandoff, onUpdate } = options;
        this.resolvedAt = sync_time/* time */.X.now();
        /**
         * If we can't animate this value with the resolved keyframes
         * then we should complete it immediately.
         */
        if (!canAnimate(keyframes, name, type, velocity)) {
            if (global_config/* MotionGlobalConfig */.c.instantAnimations || !delay) {
                onUpdate?.(getFinalKeyframe(keyframes, options, finalKeyframe));
            }
            keyframes[0] = keyframes[keyframes.length - 1];
            options.duration = 0;
            options.repeat = 0;
        }
        /**
         * Resolve startTime for the animation.
         *
         * This method uses the createdAt and resolvedAt to calculate the
         * animation startTime. *Ideally*, we would use the createdAt time as t=0
         * as the following frame would then be the first frame of the animation in
         * progress, which would feel snappier.
         *
         * However, if there's a delay (main thread work) between the creation of
         * the animation and the first commited frame, we prefer to use resolvedAt
         * to avoid a sudden jump into the animation.
         */
        const startTime = sync
            ? !this.resolvedAt
                ? this.createdAt
                : this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY
                    ? this.resolvedAt
                    : this.createdAt
            : undefined;
        const resolvedOptions = {
            startTime,
            finalKeyframe,
            ...options,
            keyframes,
        };
        /**
         * Animate via WAAPI if possible. If this is a handoff animation, the optimised animation will be running via
         * WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
         * optimised animation.
         */
        const animation = !isHandoff && supportsBrowserAnimation(resolvedOptions)
            ? new NativeAnimationExtended({
                ...resolvedOptions,
                element: resolvedOptions.motionValue.owner.current,
            })
            : new JSAnimation(resolvedOptions);
        animation.finished.then(() => this.notifyFinished()).catch(noop/* noop */.Z);
        if (this.pendingTimeline) {
            this.stopTimeline = animation.attachTimeline(this.pendingTimeline);
            this.pendingTimeline = undefined;
        }
        this._animation = animation;
    }
    get finished() {
        if (!this._animation) {
            return this._finished;
        }
        else {
            return this.animation.finished;
        }
    }
    then(onResolve, _onReject) {
        return this.finished.finally(onResolve).then(() => { });
    }
    get animation() {
        if (!this._animation) {
            this.keyframeResolver?.resume();
            flushKeyframeResolvers();
        }
        return this._animation;
    }
    get duration() {
        return this.animation.duration;
    }
    get time() {
        return this.animation.time;
    }
    set time(newTime) {
        this.animation.time = newTime;
    }
    get speed() {
        return this.animation.speed;
    }
    get state() {
        return this.animation.state;
    }
    set speed(newSpeed) {
        this.animation.speed = newSpeed;
    }
    get startTime() {
        return this.animation.startTime;
    }
    attachTimeline(timeline) {
        if (this._animation) {
            this.stopTimeline = this.animation.attachTimeline(timeline);
        }
        else {
            this.pendingTimeline = timeline;
        }
        return () => this.stop();
    }
    play() {
        this.animation.play();
    }
    pause() {
        this.animation.pause();
    }
    complete() {
        this.animation.complete();
    }
    cancel() {
        if (this._animation) {
            this.animation.cancel();
        }
        this.keyframeResolver?.cancel();
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs
const get_final_keyframe_isNotNull = (value) => value !== null;
function get_final_keyframe_getFinalKeyframe(keyframes, { repeat, repeatType = "loop" }, finalKeyframe) {
    const resolvedKeyframes = keyframes.filter(get_final_keyframe_isNotNull);
    const index = repeat && repeatType !== "loop" && repeat % 2 === 1
        ? 0
        : resolvedKeyframes.length - 1;
    return !index || finalKeyframe === undefined
        ? resolvedKeyframes[index]
        : finalKeyframe;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs


const underDampedSpring = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10,
};
const criticallyDampedSpring = (target) => ({
    type: "spring",
    stiffness: 550,
    damping: target === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
});
const keyframesTransition = {
    type: "keyframes",
    duration: 0.8,
};
/**
 * Default easing curve is a slightly shallower version of
 * the default browser easing curve.
 */
const ease = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3,
};
const getDefaultTransition = (valueKey, { keyframes }) => {
    if (keyframes.length > 2) {
        return keyframesTransition;
    }
    else if (transformProps.has(valueKey)) {
        return valueKey.startsWith("scale")
            ? criticallyDampedSpring(keyframes[1])
            : underDampedSpring;
    }
    return ease;
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/is-transition-defined.mjs
/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */
function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...transition }) {
    return !!Object.keys(transition).length;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs






const animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
    const valueTransition = getValueTransition(transition, name) || {};
    /**
     * Most transition values are currently completely overwritten by value-specific
     * transitions. In the future it'd be nicer to blend these transitions. But for now
     * delay actually does inherit from the root transition if not value-specific.
     */
    const delay = valueTransition.delay || transition.delay || 0;
    /**
     * Elapsed isn't a public transition option but can be passed through from
     * optimized appear effects in milliseconds.
     */
    let { elapsed = 0 } = transition;
    elapsed = elapsed - time_conversion_secondsToMilliseconds(delay);
    const options = {
        keyframes: Array.isArray(target) ? target : [null, target],
        ease: "easeOut",
        velocity: value.getVelocity(),
        ...valueTransition,
        delay: -elapsed,
        onUpdate: (v) => {
            value.set(v);
            valueTransition.onUpdate && valueTransition.onUpdate(v);
        },
        onComplete: () => {
            onComplete();
            valueTransition.onComplete && valueTransition.onComplete();
        },
        name,
        motionValue: value,
        element: isHandoff ? undefined : element,
    };
    /**
     * If there's no transition defined for this value, we can generate
     * unique transition settings for this value.
     */
    if (!isTransitionDefined(valueTransition)) {
        Object.assign(options, getDefaultTransition(name, options));
    }
    /**
     * Both WAAPI and our internal animation functions use durations
     * as defined by milliseconds, while our external API defines them
     * as seconds.
     */
    options.duration && (options.duration = time_conversion_secondsToMilliseconds(options.duration));
    options.repeatDelay && (options.repeatDelay = time_conversion_secondsToMilliseconds(options.repeatDelay));
    /**
     * Support deprecated way to set initial value. Prefer keyframe syntax.
     */
    if (options.from !== undefined) {
        options.keyframes[0] = options.from;
    }
    let shouldSkip = false;
    if (options.type === false ||
        (options.duration === 0 && !options.repeatDelay)) {
        options.duration = 0;
        if (options.delay === 0) {
            shouldSkip = true;
        }
    }
    if (global_config/* MotionGlobalConfig */.c.instantAnimations ||
        global_config/* MotionGlobalConfig */.c.skipAnimations) {
        shouldSkip = true;
        options.duration = 0;
        options.delay = 0;
    }
    /**
     * If the transition type or easing has been explicitly set by the user
     * then we don't want to allow flattening the animation.
     */
    options.allowFlatten = !valueTransition.type && !valueTransition.ease;
    /**
     * If we can or must skip creating the animation, and apply only
     * the final keyframe, do so. We also check once keyframes are resolved but
     * this early check prevents the need to create an animation at all.
     */
    if (shouldSkip && !isHandoff && value.get() !== undefined) {
        const finalKeyframe = get_final_keyframe_getFinalKeyframe(options.keyframes, valueTransition);
        if (finalKeyframe !== undefined) {
            frameloop_frame/* frame */.Wi.update(() => {
                options.onUpdate(finalKeyframe);
                options.onComplete();
            });
            return;
        }
    }
    return valueTransition.isSync
        ? new JSAnimation(options)
        : new AsyncMotionValueAnimation(options);
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs






/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
    const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay = 0, transitionOverride, type } = {}) {
    let { transition = visualElement.getDefaultTransition(), transitionEnd, ...target } = targetAndTransition;
    if (transitionOverride)
        transition = transitionOverride;
    const animations = [];
    const animationTypeState = type &&
        visualElement.animationState &&
        visualElement.animationState.getState()[type];
    for (const key in target) {
        const value = visualElement.getValue(key, visualElement.latestValues[key] ?? null);
        const valueTarget = target[key];
        if (valueTarget === undefined ||
            (animationTypeState &&
                shouldBlockAnimation(animationTypeState, key))) {
            continue;
        }
        const valueTransition = {
            delay,
            ...getValueTransition(transition || {}, key),
        };
        /**
         * If the value is already at the defined target, skip the animation.
         */
        const currentValue = value.get();
        if (currentValue !== undefined &&
            !value.isAnimating &&
            !Array.isArray(valueTarget) &&
            valueTarget === currentValue &&
            !valueTransition.velocity) {
            continue;
        }
        /**
         * If this is the first time a value is being animated, check
         * to see if we're handling off from an existing animation.
         */
        let isHandoff = false;
        if (window.MotionHandoffAnimation) {
            const appearId = getOptimisedAppearId(visualElement);
            if (appearId) {
                const startTime = window.MotionHandoffAnimation(appearId, key, frameloop_frame/* frame */.Wi);
                if (startTime !== null) {
                    valueTransition.startTime = startTime;
                    isHandoff = true;
                }
            }
        }
        addValueToWillChange(visualElement, key);
        value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && positionalKeys.has(key)
            ? { type: false }
            : valueTransition, visualElement, isHandoff));
        const animation = value.animation;
        if (animation) {
            animations.push(animation);
        }
    }
    if (transitionEnd) {
        Promise.all(animations).then(() => {
            frameloop_frame/* frame */.Wi.update(() => {
                transitionEnd && setTarget(visualElement, transitionEnd);
            });
        });
    }
    return animations;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs



function animateVariant(visualElement, variant, options = {}) {
    const resolved = resolveVariant(visualElement, variant, options.type === "exit"
        ? visualElement.presenceContext?.custom
        : undefined);
    let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
    if (options.transitionOverride) {
        transition = options.transitionOverride;
    }
    /**
     * If we have a variant, create a callback that runs it as an animation.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    const getAnimation = resolved
        ? () => Promise.all(animateTarget(visualElement, resolved, options))
        : () => Promise.resolve();
    /**
     * If we have children, create a callback that runs all their animations.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size
        ? (forwardDelay = 0) => {
            const { delayChildren = 0, staggerChildren, staggerDirection, } = transition;
            return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
        }
        : () => Promise.resolve();
    /**
     * If the transition explicitly defines a "when" option, we need to resolve either
     * this animation or all children animations before playing the other.
     */
    const { when } = transition;
    if (when) {
        const [first, last] = when === "beforeChildren"
            ? [getAnimation, getChildAnimations]
            : [getChildAnimations, getAnimation];
        return first().then(() => last());
    }
    else {
        return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
    }
}
function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
    const animations = [];
    const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
    const generateStaggerDuration = staggerDirection === 1
        ? (i = 0) => i * staggerChildren
        : (i = 0) => maxStaggerDuration - i * staggerChildren;
    Array.from(visualElement.variantChildren)
        .sort(sortByTreeOrder)
        .forEach((child, i) => {
        child.notify("AnimationStart", variant);
        animations.push(animateVariant(child, variant, {
            ...options,
            delay: delayChildren + generateStaggerDuration(i),
        }).then(() => child.notify("AnimationComplete", variant)));
    });
    return Promise.all(animations);
}
function sortByTreeOrder(a, b) {
    return a.sortNodePosition(b);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs




function animateVisualElement(visualElement, definition, options = {}) {
    visualElement.notify("AnimationStart", definition);
    let animation;
    if (Array.isArray(definition)) {
        const animations = definition.map((variant) => animateVariant(visualElement, variant, options));
        animation = Promise.all(animations);
    }
    else if (typeof definition === "string") {
        animation = animateVariant(visualElement, definition, options);
    }
    else {
        const resolvedDefinition = typeof definition === "function"
            ? resolveVariant(visualElement, definition, options.custom)
            : definition;
        animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
    }
    return animation.then(() => {
        visualElement.notify("AnimationComplete", definition);
    });
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
    if (!Array.isArray(prev))
        return false;
    const prevLength = prev.length;
    if (prevLength !== next.length)
        return false;
    for (let i = 0; i < prevLength; i++) {
        if (prev[i] !== next[i])
            return false;
    }
    return true;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs
/**
 * Decides if the supplied variable is variant label
 */
function isVariantLabel(v) {
    return typeof v === "string" || Array.isArray(v);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/variant-props.mjs
const variantPriorityOrder = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
];
const variantProps = ["initial", ...variantPriorityOrder];



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/get-variant-context.mjs



const numVariantProps = variantProps.length;
function getVariantContext(visualElement) {
    if (!visualElement)
        return undefined;
    if (!visualElement.isControllingVariants) {
        const context = visualElement.parent
            ? getVariantContext(visualElement.parent) || {}
            : {};
        if (visualElement.props.initial !== undefined) {
            context.initial = visualElement.props.initial;
        }
        return context;
    }
    const context = {};
    for (let i = 0; i < numVariantProps; i++) {
        const name = variantProps[i];
        const prop = visualElement.props[name];
        if (isVariantLabel(prop) || prop === false) {
            context[name] = prop;
        }
    }
    return context;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/animation-state.mjs









const reversePriorityOrder = [...variantPriorityOrder].reverse();
const numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
    return (animations) => Promise.all(animations.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
    let animate = animateList(visualElement);
    let state = createState();
    let isInitialRender = true;
    /**
     * This function will be used to reduce the animation definitions for
     * each active animation type into an object of resolved values for it.
     */
    const buildResolvedTypeValues = (type) => (acc, definition) => {
        const resolved = resolveVariant(visualElement, definition, type === "exit"
            ? visualElement.presenceContext?.custom
            : undefined);
        if (resolved) {
            const { transition, transitionEnd, ...target } = resolved;
            acc = { ...acc, ...target, ...transitionEnd };
        }
        return acc;
    };
    /**
     * This just allows us to inject mocked animation functions
     * @internal
     */
    function setAnimateFunction(makeAnimator) {
        animate = makeAnimator(visualElement);
    }
    /**
     * When we receive new props, we need to:
     * 1. Create a list of protected keys for each type. This is a directory of
     *    value keys that are currently being "handled" by types of a higher priority
     *    so that whenever an animation is played of a given type, these values are
     *    protected from being animated.
     * 2. Determine if an animation type needs animating.
     * 3. Determine if any values have been removed from a type and figure out
     *    what to animate those to.
     */
    function animateChanges(changedActiveType) {
        const { props } = visualElement;
        const context = getVariantContext(visualElement.parent) || {};
        /**
         * A list of animations that we'll build into as we iterate through the animation
         * types. This will get executed at the end of the function.
         */
        const animations = [];
        /**
         * Keep track of which values have been removed. Then, as we hit lower priority
         * animation types, we can check if they contain removed values and animate to that.
         */
        const removedKeys = new Set();
        /**
         * A dictionary of all encountered keys. This is an object to let us build into and
         * copy it without iteration. Each time we hit an animation type we set its protected
         * keys - the keys its not allowed to animate - to the latest version of this object.
         */
        let encounteredKeys = {};
        /**
         * If a variant has been removed at a given index, and this component is controlling
         * variant animations, we want to ensure lower-priority variants are forced to animate.
         */
        let removedVariantIndex = Infinity;
        /**
         * Iterate through all animation types in reverse priority order. For each, we want to
         * detect which values it's handling and whether or not they've changed (and therefore
         * need to be animated). If any values have been removed, we want to detect those in
         * lower priority props and flag for animation.
         */
        for (let i = 0; i < numAnimationTypes; i++) {
            const type = reversePriorityOrder[i];
            const typeState = state[type];
            const prop = props[type] !== undefined
                ? props[type]
                : context[type];
            const propIsVariant = isVariantLabel(prop);
            /**
             * If this type has *just* changed isActive status, set activeDelta
             * to that status. Otherwise set to null.
             */
            const activeDelta = type === changedActiveType ? typeState.isActive : null;
            if (activeDelta === false)
                removedVariantIndex = i;
            /**
             * If this prop is an inherited variant, rather than been set directly on the
             * component itself, we want to make sure we allow the parent to trigger animations.
             *
             * TODO: Can probably change this to a !isControllingVariants check
             */
            let isInherited = prop === context[type] &&
                prop !== props[type] &&
                propIsVariant;
            /**
             *
             */
            if (isInherited &&
                isInitialRender &&
                visualElement.manuallyAnimateOnMount) {
                isInherited = false;
            }
            /**
             * Set all encountered keys so far as the protected keys for this type. This will
             * be any key that has been animated or otherwise handled by active, higher-priortiy types.
             */
            typeState.protectedKeys = { ...encounteredKeys };
            // Check if we can skip analysing this prop early
            if (
            // If it isn't active and hasn't *just* been set as inactive
            (!typeState.isActive && activeDelta === null) ||
                // If we didn't and don't have any defined prop for this animation type
                (!prop && !typeState.prevProp) ||
                // Or if the prop doesn't define an animation
                isAnimationControls(prop) ||
                typeof prop === "boolean") {
                continue;
            }
            /**
             * As we go look through the values defined on this type, if we detect
             * a changed value or a value that was removed in a higher priority, we set
             * this to true and add this prop to the animation list.
             */
            const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
            let shouldAnimateType = variantDidChange ||
                // If we're making this variant active, we want to always make it active
                (type === changedActiveType &&
                    typeState.isActive &&
                    !isInherited &&
                    propIsVariant) ||
                // If we removed a higher-priority variant (i is in reverse order)
                (i > removedVariantIndex && propIsVariant);
            let handledRemovedValues = false;
            /**
             * As animations can be set as variant lists, variants or target objects, we
             * coerce everything to an array if it isn't one already
             */
            const definitionList = Array.isArray(prop) ? prop : [prop];
            /**
             * Build an object of all the resolved values. We'll use this in the subsequent
             * animateChanges calls to determine whether a value has changed.
             */
            let resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
            if (activeDelta === false)
                resolvedValues = {};
            /**
             * Now we need to loop through all the keys in the prev prop and this prop,
             * and decide:
             * 1. If the value has changed, and needs animating
             * 2. If it has been removed, and needs adding to the removedKeys set
             * 3. If it has been removed in a higher priority type and needs animating
             * 4. If it hasn't been removed in a higher priority but hasn't changed, and
             *    needs adding to the type's protectedKeys list.
             */
            const { prevResolvedValues = {} } = typeState;
            const allKeys = {
                ...prevResolvedValues,
                ...resolvedValues,
            };
            const markToAnimate = (key) => {
                shouldAnimateType = true;
                if (removedKeys.has(key)) {
                    handledRemovedValues = true;
                    removedKeys.delete(key);
                }
                typeState.needsAnimating[key] = true;
                const motionValue = visualElement.getValue(key);
                if (motionValue)
                    motionValue.liveStyle = false;
            };
            for (const key in allKeys) {
                const next = resolvedValues[key];
                const prev = prevResolvedValues[key];
                // If we've already handled this we can just skip ahead
                if (encounteredKeys.hasOwnProperty(key))
                    continue;
                /**
                 * If the value has changed, we probably want to animate it.
                 */
                let valueHasChanged = false;
                if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
                    valueHasChanged = !shallowCompare(next, prev);
                }
                else {
                    valueHasChanged = next !== prev;
                }
                if (valueHasChanged) {
                    if (next !== undefined && next !== null) {
                        // If next is defined and doesn't equal prev, it needs animating
                        markToAnimate(key);
                    }
                    else {
                        // If it's undefined, it's been removed.
                        removedKeys.add(key);
                    }
                }
                else if (next !== undefined && removedKeys.has(key)) {
                    /**
                     * If next hasn't changed and it isn't undefined, we want to check if it's
                     * been removed by a higher priority
                     */
                    markToAnimate(key);
                }
                else {
                    /**
                     * If it hasn't changed, we add it to the list of protected values
                     * to ensure it doesn't get animated.
                     */
                    typeState.protectedKeys[key] = true;
                }
            }
            /**
             * Update the typeState so next time animateChanges is called we can compare the
             * latest prop and resolvedValues to these.
             */
            typeState.prevProp = prop;
            typeState.prevResolvedValues = resolvedValues;
            /**
             *
             */
            if (typeState.isActive) {
                encounteredKeys = { ...encounteredKeys, ...resolvedValues };
            }
            if (isInitialRender && visualElement.blockInitialAnimation) {
                shouldAnimateType = false;
            }
            /**
             * If this is an inherited prop we want to skip this animation
             * unless the inherited variants haven't changed on this render.
             */
            const willAnimateViaParent = isInherited && variantDidChange;
            const needsAnimating = !willAnimateViaParent || handledRemovedValues;
            if (shouldAnimateType && needsAnimating) {
                animations.push(...definitionList.map((animation) => ({
                    animation: animation,
                    options: { type },
                })));
            }
        }
        /**
         * If there are some removed value that haven't been dealt with,
         * we need to create a new animation that falls back either to the value
         * defined in the style prop, or the last read value.
         */
        if (removedKeys.size) {
            const fallbackAnimation = {};
            /**
             * If the initial prop contains a transition we can use that, otherwise
             * allow the animation function to use the visual element's default.
             */
            if (typeof props.initial !== "boolean") {
                const initialTransition = resolveVariant(visualElement, Array.isArray(props.initial)
                    ? props.initial[0]
                    : props.initial);
                if (initialTransition && initialTransition.transition) {
                    fallbackAnimation.transition = initialTransition.transition;
                }
            }
            removedKeys.forEach((key) => {
                const fallbackTarget = visualElement.getBaseTarget(key);
                const motionValue = visualElement.getValue(key);
                if (motionValue)
                    motionValue.liveStyle = true;
                // @ts-expect-error - @mattgperry to figure if we should do something here
                fallbackAnimation[key] = fallbackTarget ?? null;
            });
            animations.push({ animation: fallbackAnimation });
        }
        let shouldAnimate = Boolean(animations.length);
        if (isInitialRender &&
            (props.initial === false || props.initial === props.animate) &&
            !visualElement.manuallyAnimateOnMount) {
            shouldAnimate = false;
        }
        isInitialRender = false;
        return shouldAnimate ? animate(animations) : Promise.resolve();
    }
    /**
     * Change whether a certain animation type is active.
     */
    function setActive(type, isActive) {
        // If the active state hasn't changed, we can safely do nothing here
        if (state[type].isActive === isActive)
            return Promise.resolve();
        // Propagate active change to children
        visualElement.variantChildren?.forEach((child) => child.animationState?.setActive(type, isActive));
        state[type].isActive = isActive;
        const animations = animateChanges(type);
        for (const key in state) {
            state[key].protectedKeys = {};
        }
        return animations;
    }
    return {
        animateChanges,
        setActive,
        setAnimateFunction,
        getState: () => state,
        reset: () => {
            state = createState();
            isInitialRender = true;
        },
    };
}
function checkVariantsDidChange(prev, next) {
    if (typeof next === "string") {
        return next !== prev;
    }
    else if (Array.isArray(next)) {
        return !shallowCompare(next, prev);
    }
    return false;
}
function createTypeState(isActive = false) {
    return {
        isActive,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
    };
}
function createState() {
    return {
        animate: createTypeState(true),
        whileInView: createTypeState(),
        whileHover: createTypeState(),
        whileTap: createTypeState(),
        whileDrag: createTypeState(),
        whileFocus: createTypeState(),
        exit: createTypeState(),
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/Feature.mjs
class Feature {
    constructor(node) {
        this.isMounted = false;
        this.node = node;
    }
    update() { }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/animation/index.mjs




class AnimationFeature extends Feature {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    constructor(node) {
        super(node);
        node.animationState || (node.animationState = createAnimationState(node));
    }
    updateAnimationControlsSubscription() {
        const { animate } = this.node.getProps();
        if (isAnimationControls(animate)) {
            this.unmountControls = animate.subscribe(this.node);
        }
    }
    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */
    mount() {
        this.updateAnimationControlsSubscription();
    }
    update() {
        const { animate } = this.node.getProps();
        const { animate: prevAnimate } = this.node.prevProps || {};
        if (animate !== prevAnimate) {
            this.updateAnimationControlsSubscription();
        }
    }
    unmount() {
        this.node.animationState.reset();
        this.unmountControls?.();
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs


let id = 0;
class ExitAnimationFeature extends Feature {
    constructor() {
        super(...arguments);
        this.id = id++;
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const { isPresent, onExitComplete } = this.node.presenceContext;
        const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || isPresent === prevIsPresent) {
            return;
        }
        const exitAnimation = this.node.animationState.setActive("exit", !isPresent);
        if (onExitComplete && !isPresent) {
            exitAnimation.then(() => {
                onExitComplete(this.id);
            });
        }
    }
    mount() {
        const { register, onExitComplete } = this.node.presenceContext || {};
        if (onExitComplete) {
            onExitComplete(this.id);
        }
        if (register) {
            this.unmount = register(this.id);
        }
    }
    unmount() { }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/animations.mjs



const animations = {
    animation: {
        Feature: AnimationFeature,
    },
    exit: {
        Feature: ExitAnimationFeature,
    },
};



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs
const isDragging = {
    x: false,
    y: false,
};
function isDragActive() {
    return isDragging.x || isDragging.y;
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs


function setDragLock(axis) {
    if (axis === "x" || axis === "y") {
        if (isDragging[axis]) {
            return null;
        }
        else {
            isDragging[axis] = true;
            return () => {
                isDragging[axis] = false;
            };
        }
    }
    else {
        if (isDragging.x || isDragging.y) {
            return null;
        }
        else {
            isDragging.x = isDragging.y = true;
            return () => {
                isDragging.x = isDragging.y = false;
            };
        }
    }
}



// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/mix/number.mjs
var number = __webpack_require__(2986);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/events/add-dom-event.mjs
function addDomEvent(target, eventName, handler, options = { passive: true }) {
    target.addEventListener(eventName, handler, options);
    return () => target.removeEventListener(eventName, handler);
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs
const isPrimaryPointer = (event) => {
    if (event.pointerType === "mouse") {
        return typeof event.button !== "number" || event.button <= 0;
    }
    else {
        /**
         * isPrimary is true for all mice buttons, whereas every touch point
         * is regarded as its own input. So subsequent concurrent touch points
         * will be false.
         *
         * Specifically match against false here as incomplete versions of
         * PointerEvents in very old browser might have it set as undefined.
         */
        return event.isPrimary !== false;
    }
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/events/event-info.mjs


function extractEventInfo(event) {
    return {
        point: {
            x: event.pageX,
            y: event.pageY,
        },
    };
}
const addPointerInfo = (handler) => {
    return (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/events/add-pointer-event.mjs



function addPointerEvent(target, eventName, handler, options) {
    return addDomEvent(target, eventName, addPointerInfo(handler), options);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
function convertBoundingBoxToBox({ top, left, right, bottom, }) {
    return {
        x: { min: left, max: right },
        y: { min: top, max: bottom },
    };
}
function convertBoxToBoundingBox({ x, y }) {
    return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */
function transformBoxPoints(point, transformPoint) {
    if (!transformPoint)
        return point;
    const topLeft = transformPoint({ x: point.left, y: point.top });
    const bottomRight = transformPoint({ x: point.right, y: point.bottom });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x,
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs


const SCALE_PRECISION = 0.0001;
const SCALE_MIN = 1 - SCALE_PRECISION;
const SCALE_MAX = 1 + SCALE_PRECISION;
const TRANSLATE_PRECISION = 0.01;
const TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
const TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(axis) {
    return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
    return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
    delta.origin = origin;
    delta.originPoint = (0,number/* mixNumber */.t)(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    delta.translate =
        (0,number/* mixNumber */.t)(target.min, target.max, delta.origin) - delta.originPoint;
    if ((delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX) ||
        isNaN(delta.scale)) {
        delta.scale = 1.0;
    }
    if ((delta.translate >= TRANSLATE_MIN &&
        delta.translate <= TRANSLATE_MAX) ||
        isNaN(delta.translate)) {
        delta.translate = 0.0;
    }
}
function calcBoxDelta(delta, source, target, origin) {
    calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : undefined);
    calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : undefined);
}
function calcRelativeAxis(target, relative, parent) {
    target.min = parent.min + relative.min;
    target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
    calcRelativeAxis(target.x, relative.x, parent.x);
    calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout, parent) {
    target.min = layout.min - parent.min;
    target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent) {
    calcRelativeAxisPosition(target.x, layout.x, parent.x);
    calcRelativeAxisPosition(target.y, layout.y, parent.y);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/models.mjs
const createAxisDelta = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
});
const createDelta = () => ({
    x: createAxisDelta(),
    y: createAxisDelta(),
});
const createAxis = () => ({ min: 0, max: 0 });
const createBox = () => ({
    x: createAxis(),
    y: createAxis(),
});



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
    return [callback("x"), callback("y")];
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale) {
    return scale === undefined || scale === 1;
}
function hasScale({ scale, scaleX, scaleY }) {
    return (!isIdentityScale(scale) ||
        !isIdentityScale(scaleX) ||
        !isIdentityScale(scaleY));
}
function hasTransform(values) {
    return (hasScale(values) ||
        has2DTranslate(values) ||
        values.z ||
        values.rotate ||
        values.rotateX ||
        values.rotateY ||
        values.skewX ||
        values.skewY);
}
function has2DTranslate(values) {
    return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
    return value && value !== "0%";
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs



/**
 * Scales a point based on a factor and an originPoint
 */
function scalePoint(point, scale, originPoint) {
    const distanceFromOrigin = point - originPoint;
    const scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== undefined) {
        point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */
function applyAxisDelta(axis, translate = 0, scale = 1, originPoint, boxScale) {
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */
function applyBoxDelta(box, { x, y }) {
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
const TREE_SCALE_SNAP_MIN = 0.999999999999;
const TREE_SCALE_SNAP_MAX = 1.0000000000001;
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
    const treeLength = treePath.length;
    if (!treeLength)
        return;
    // Reset the treeScale
    treeScale.x = treeScale.y = 1;
    let node;
    let delta;
    for (let i = 0; i < treeLength; i++) {
        node = treePath[i];
        delta = node.projectionDelta;
        /**
         * TODO: Prefer to remove this, but currently we have motion components with
         * display: contents in Framer.
         */
        const { visualElement } = node.options;
        if (visualElement &&
            visualElement.props.style &&
            visualElement.props.style.display === "contents") {
            continue;
        }
        if (isSharedTransition &&
            node.options.layoutScroll &&
            node.scroll &&
            node !== node.root) {
            transformBox(box, {
                x: -node.scroll.offset.x,
                y: -node.scroll.offset.y,
            });
        }
        if (delta) {
            // Incoporate each ancestor's scale into a culmulative treeScale for this component
            treeScale.x *= delta.x.scale;
            treeScale.y *= delta.y.scale;
            // Apply each ancestor's calculated delta into this component's recorded layout box
            applyBoxDelta(box, delta);
        }
        if (isSharedTransition && hasTransform(node.latestValues)) {
            transformBox(box, node.latestValues);
        }
    }
    /**
     * Snap tree scale back to 1 if it's within a non-perceivable threshold.
     * This will help reduce useless scales getting rendered.
     */
    if (treeScale.x < TREE_SCALE_SNAP_MAX &&
        treeScale.x > TREE_SCALE_SNAP_MIN) {
        treeScale.x = 1.0;
    }
    if (treeScale.y < TREE_SCALE_SNAP_MAX &&
        treeScale.y > TREE_SCALE_SNAP_MIN) {
        treeScale.y = 1.0;
    }
}
function translateAxis(axis, distance) {
    axis.min = axis.min + distance;
    axis.max = axis.max + distance;
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */
function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = 0.5) {
    const originPoint = (0,number/* mixNumber */.t)(axis.min, axis.max, axisOrigin);
    // Apply the axis delta to the final axis
    applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
}
/**
 * Apply a transform to a box from the latest resolved motion values.
 */
function transformBox(box, transform) {
    transformAxis(box.x, transform.x, transform.scaleX, transform.scale, transform.originX);
    transformAxis(box.y, transform.y, transform.scaleY, transform.scale, transform.originY);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/utils/measure.mjs



function measureViewportBox(instance, transformPoint) {
    return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
    const viewportBox = measureViewportBox(element, transformPagePoint);
    const { scroll } = rootProjectionNode;
    if (scroll) {
        translateAxis(viewportBox.x, scroll.offset.x);
        translateAxis(viewportBox.y, scroll.offset.y);
    }
    return viewportBox;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/get-context-window.mjs
// Fixes https://github.com/motiondivision/motion/issues/2270
const getContextWindow = ({ current }) => {
    return current ? current.ownerDocument.defaultView : null;
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
    return (ref &&
        typeof ref === "object" &&
        Object.prototype.hasOwnProperty.call(ref, "current"));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/distance.mjs
const distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
    // Multi-dimensional
    const xDelta = distance(a.x, b.x);
    const yDelta = distance(a.y, b.y);
    return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs






/**
 * @internal
 */
class PanSession {
    constructor(event, handlers, { transformPagePoint, contextWindow, dragSnapToOrigin = false, } = {}) {
        /**
         * @internal
         */
        this.startEvent = null;
        /**
         * @internal
         */
        this.lastMoveEvent = null;
        /**
         * @internal
         */
        this.lastMoveEventInfo = null;
        /**
         * @internal
         */
        this.handlers = {};
        /**
         * @internal
         */
        this.contextWindow = window;
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const info = getPanInfo(this.lastMoveEventInfo, this.history);
            const isPanStarted = this.startEvent !== null;
            // Only start panning if the offset is larger than 3 pixels. If we make it
            // any larger than this we'll want to reset the pointer history
            // on the first update to avoid visual snapping to the cursoe.
            const isDistancePastThreshold = distance2D(info.offset, { x: 0, y: 0 }) >= 3;
            if (!isPanStarted && !isDistancePastThreshold)
                return;
            const { point } = info;
            const { timestamp } = frameloop_frame.frameData;
            this.history.push({ ...point, timestamp });
            const { onStart, onMove } = this.handlers;
            if (!isPanStarted) {
                onStart && onStart(this.lastMoveEvent, info);
                this.startEvent = this.lastMoveEvent;
            }
            onMove && onMove(this.lastMoveEvent, info);
        };
        this.handlePointerMove = (event, info) => {
            this.lastMoveEvent = event;
            this.lastMoveEventInfo = transformPoint(info, this.transformPagePoint);
            // Throttle mouse move event to once per frame
            frameloop_frame/* frame */.Wi.update(this.updatePoint, true);
        };
        this.handlePointerUp = (event, info) => {
            this.end();
            const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
            if (this.dragSnapToOrigin)
                resumeAnimation && resumeAnimation();
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const panInfo = getPanInfo(event.type === "pointercancel"
                ? this.lastMoveEventInfo
                : transformPoint(info, this.transformPagePoint), this.history);
            if (this.startEvent && onEnd) {
                onEnd(event, panInfo);
            }
            onSessionEnd && onSessionEnd(event, panInfo);
        };
        // If we have more than one touch, don't start detecting this gesture
        if (!isPrimaryPointer(event))
            return;
        this.dragSnapToOrigin = dragSnapToOrigin;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        this.contextWindow = contextWindow || window;
        const info = extractEventInfo(event);
        const initialInfo = transformPoint(info, this.transformPagePoint);
        const { point } = initialInfo;
        const { timestamp } = frameloop_frame.frameData;
        this.history = [{ ...point, timestamp }];
        const { onSessionStart } = handlers;
        onSessionStart &&
            onSessionStart(event, getPanInfo(initialInfo, this.history));
        this.removeListeners = (0,pipe/* pipe */.z)(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
    }
    updateHandlers(handlers) {
        this.handlers = handlers;
    }
    end() {
        this.removeListeners && this.removeListeners();
        (0,frameloop_frame/* cancelFrame */.Pn)(this.updatePoint);
    }
}
function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
    return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo({ point }, history) {
    return {
        point,
        delta: subtractPoint(point, lastDevicePoint(history)),
        offset: subtractPoint(point, startDevicePoint(history)),
        velocity: getVelocity(history, 0.1),
    };
}
function startDevicePoint(history) {
    return history[0];
}
function lastDevicePoint(history) {
    return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
    if (history.length < 2) {
        return { x: 0, y: 0 };
    }
    let i = history.length - 1;
    let timestampedPoint = null;
    const lastPoint = lastDevicePoint(history);
    while (i >= 0) {
        timestampedPoint = history[i];
        if (lastPoint.timestamp - timestampedPoint.timestamp >
            time_conversion_secondsToMilliseconds(timeDelta)) {
            break;
        }
        i--;
    }
    if (!timestampedPoint) {
        return { x: 0, y: 0 };
    }
    const time = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
    if (time === 0) {
        return { x: 0, y: 0 };
    }
    const currentVelocity = {
        x: (lastPoint.x - timestampedPoint.x) / time,
        y: (lastPoint.y - timestampedPoint.y) / time,
    };
    if (currentVelocity.x === Infinity) {
        currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
        currentVelocity.y = 0;
    }
    return currentVelocity;
}



// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/progress.mjs
var progress = __webpack_require__(1756);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs




/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */
function applyConstraints(point, { min, max }, elastic) {
    if (min !== undefined && point < min) {
        // If we have a min point defined, and this is outside of that, constrain
        point = elastic
            ? (0,number/* mixNumber */.t)(min, point, elastic.min)
            : Math.max(point, min);
    }
    else if (max !== undefined && point > max) {
        // If we have a max point defined, and this is outside of that, constrain
        point = elastic
            ? (0,number/* mixNumber */.t)(max, point, elastic.max)
            : Math.min(point, max);
    }
    return point;
}
/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */
function calcRelativeAxisConstraints(axis, min, max) {
    return {
        min: min !== undefined ? axis.min + min : undefined,
        max: max !== undefined
            ? axis.max + max - (axis.max - axis.min)
            : undefined,
    };
}
/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
    return {
        x: calcRelativeAxisConstraints(layoutBox.x, left, right),
        y: calcRelativeAxisConstraints(layoutBox.y, top, bottom),
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    let min = constraintsAxis.min - layoutAxis.min;
    let max = constraintsAxis.max - layoutAxis.max;
    // If the constraints axis is actually smaller than the layout axis then we can
    // flip the constraints
    if (constraintsAxis.max - constraintsAxis.min <
        layoutAxis.max - layoutAxis.min) {
        [min, max] = [max, min];
    }
    return { min, max };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative box
 */
function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
        x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
        y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y),
    };
}
/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */
function calcOrigin(source, target) {
    let origin = 0.5;
    const sourceLength = calcLength(source);
    const targetLength = calcLength(target);
    if (targetLength > sourceLength) {
        origin = (0,progress/* progress */.Y)(target.min, target.max - sourceLength, source.min);
    }
    else if (sourceLength > targetLength) {
        origin = (0,progress/* progress */.Y)(source.min, source.max - targetLength, target.min);
    }
    return (0,clamp/* clamp */.u)(0, 1, origin);
}
/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */
function rebaseAxisConstraints(layout, constraints) {
    const relativeConstraints = {};
    if (constraints.min !== undefined) {
        relativeConstraints.min = constraints.min - layout.min;
    }
    if (constraints.max !== undefined) {
        relativeConstraints.max = constraints.max - layout.min;
    }
    return relativeConstraints;
}
const defaultElastic = 0.35;
/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */
function resolveDragElastic(dragElastic = defaultElastic) {
    if (dragElastic === false) {
        dragElastic = 0;
    }
    else if (dragElastic === true) {
        dragElastic = defaultElastic;
    }
    return {
        x: resolveAxisElastic(dragElastic, "left", "right"),
        y: resolveAxisElastic(dragElastic, "top", "bottom"),
    };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
        min: resolvePointElastic(dragElastic, minLabel),
        max: resolvePointElastic(dragElastic, maxLabel),
    };
}
function resolvePointElastic(dragElastic, label) {
    return typeof dragElastic === "number"
        ? dragElastic
        : dragElastic[label] || 0;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs

















const elementDragControls = new WeakMap();
/**
 *
 */
// let latestPointerEvent: PointerEvent
class VisualElementDragControls {
    constructor(visualElement) {
        this.openDragLock = null;
        this.isDragging = false;
        this.currentDirection = null;
        this.originPoint = { x: 0, y: 0 };
        /**
         * The permitted boundaries of travel, in pixels.
         */
        this.constraints = false;
        this.hasMutatedConstraints = false;
        /**
         * The per-axis resolved elastic values.
         */
        this.elastic = createBox();
        this.visualElement = visualElement;
    }
    start(originEvent, { snapToCursor = false } = {}) {
        /**
         * Don't start dragging if this component is exiting
         */
        const { presenceContext } = this.visualElement;
        if (presenceContext && presenceContext.isPresent === false)
            return;
        const onSessionStart = (event) => {
            const { dragSnapToOrigin } = this.getProps();
            // Stop or pause any animations on both axis values immediately. This allows the user to throw and catch
            // the component.
            dragSnapToOrigin ? this.pauseAnimation() : this.stopAnimation();
            if (snapToCursor) {
                this.snapToCursor(extractEventInfo(event).point);
            }
        };
        const onStart = (event, info) => {
            // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
            const { drag, dragPropagation, onDragStart } = this.getProps();
            if (drag && !dragPropagation) {
                if (this.openDragLock)
                    this.openDragLock();
                this.openDragLock = setDragLock(drag);
                // If we don 't have the lock, don't start dragging
                if (!this.openDragLock)
                    return;
            }
            this.isDragging = true;
            this.currentDirection = null;
            this.resolveConstraints();
            if (this.visualElement.projection) {
                this.visualElement.projection.isAnimationBlocked = true;
                this.visualElement.projection.target = undefined;
            }
            /**
             * Record gesture origin
             */
            eachAxis((axis) => {
                let current = this.getAxisMotionValue(axis).get() || 0;
                /**
                 * If the MotionValue is a percentage value convert to px
                 */
                if (units/* percent */.aQ.test(current)) {
                    const { projection } = this.visualElement;
                    if (projection && projection.layout) {
                        const measuredAxis = projection.layout.layoutBox[axis];
                        if (measuredAxis) {
                            const length = calcLength(measuredAxis);
                            current = length * (parseFloat(current) / 100);
                        }
                    }
                }
                this.originPoint[axis] = current;
            });
            // Fire onDragStart event
            if (onDragStart) {
                frameloop_frame/* frame */.Wi.postRender(() => onDragStart(event, info));
            }
            addValueToWillChange(this.visualElement, "transform");
            const { animationState } = this.visualElement;
            animationState && animationState.setActive("whileDrag", true);
        };
        const onMove = (event, info) => {
            // latestPointerEvent = event
            const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag, } = this.getProps();
            // If we didn't successfully receive the gesture lock, early return.
            if (!dragPropagation && !this.openDragLock)
                return;
            const { offset } = info;
            // Attempt to detect drag direction if directionLock is true
            if (dragDirectionLock && this.currentDirection === null) {
                this.currentDirection = getCurrentDirection(offset);
                // If we've successfully set a direction, notify listener
                if (this.currentDirection !== null) {
                    onDirectionLock && onDirectionLock(this.currentDirection);
                }
                return;
            }
            // Update each point with the latest position
            this.updateAxis("x", info.point, offset);
            this.updateAxis("y", info.point, offset);
            /**
             * Ideally we would leave the renderer to fire naturally at the end of
             * this frame but if the element is about to change layout as the result
             * of a re-render we want to ensure the browser can read the latest
             * bounding box to ensure the pointer and element don't fall out of sync.
             */
            this.visualElement.render();
            /**
             * This must fire after the render call as it might trigger a state
             * change which itself might trigger a layout update.
             */
            onDrag && onDrag(event, info);
        };
        const onSessionEnd = (event, info) => this.stop(event, info);
        const resumeAnimation = () => eachAxis((axis) => this.getAnimationState(axis) === "paused" &&
            this.getAxisMotionValue(axis).animation?.play());
        const { dragSnapToOrigin } = this.getProps();
        this.panSession = new PanSession(originEvent, {
            onSessionStart,
            onStart,
            onMove,
            onSessionEnd,
            resumeAnimation,
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin,
            contextWindow: getContextWindow(this.visualElement),
        });
    }
    stop(event, info) {
        const isDragging = this.isDragging;
        this.cancel();
        if (!isDragging)
            return;
        const { velocity } = info;
        this.startAnimation(velocity);
        const { onDragEnd } = this.getProps();
        if (onDragEnd) {
            frameloop_frame/* frame */.Wi.postRender(() => onDragEnd(event, info));
        }
    }
    cancel() {
        this.isDragging = false;
        const { projection, animationState } = this.visualElement;
        if (projection) {
            projection.isAnimationBlocked = false;
        }
        this.panSession && this.panSession.end();
        this.panSession = undefined;
        const { dragPropagation } = this.getProps();
        if (!dragPropagation && this.openDragLock) {
            this.openDragLock();
            this.openDragLock = null;
        }
        animationState && animationState.setActive("whileDrag", false);
    }
    updateAxis(axis, _point, offset) {
        const { drag } = this.getProps();
        // If we're not dragging this axis, do an early return.
        if (!offset || !shouldDrag(axis, drag, this.currentDirection))
            return;
        const axisValue = this.getAxisMotionValue(axis);
        let next = this.originPoint[axis] + offset[axis];
        // Apply constraints
        if (this.constraints && this.constraints[axis]) {
            next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
        }
        axisValue.set(next);
    }
    resolveConstraints() {
        const { dragConstraints, dragElastic } = this.getProps();
        const layout = this.visualElement.projection &&
            !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(false)
            : this.visualElement.projection?.layout;
        const prevConstraints = this.constraints;
        if (dragConstraints && isRefObject(dragConstraints)) {
            if (!this.constraints) {
                this.constraints = this.resolveRefConstraints();
            }
        }
        else {
            if (dragConstraints && layout) {
                this.constraints = calcRelativeConstraints(layout.layoutBox, dragConstraints);
            }
            else {
                this.constraints = false;
            }
        }
        this.elastic = resolveDragElastic(dragElastic);
        /**
         * If we're outputting to external MotionValues, we want to rebase the measured constraints
         * from viewport-relative to component-relative.
         */
        if (prevConstraints !== this.constraints &&
            layout &&
            this.constraints &&
            !this.hasMutatedConstraints) {
            eachAxis((axis) => {
                if (this.constraints !== false &&
                    this.getAxisMotionValue(axis)) {
                    this.constraints[axis] = rebaseAxisConstraints(layout.layoutBox[axis], this.constraints[axis]);
                }
            });
        }
    }
    resolveRefConstraints() {
        const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
        if (!constraints || !isRefObject(constraints))
            return false;
        const constraintsElement = constraints.current;
        (0,errors/* invariant */.k)(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
        const { projection } = this.visualElement;
        // TODO
        if (!projection || !projection.layout)
            return false;
        const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
        let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
        /**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */
        if (onMeasureDragConstraints) {
            const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
            this.hasMutatedConstraints = !!userConstraints;
            if (userConstraints) {
                measuredConstraints = convertBoundingBoxToBox(userConstraints);
            }
        }
        return measuredConstraints;
    }
    startAnimation(velocity) {
        const { drag, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd, } = this.getProps();
        const constraints = this.constraints || {};
        const momentumAnimations = eachAxis((axis) => {
            if (!shouldDrag(axis, drag, this.currentDirection)) {
                return;
            }
            let transition = (constraints && constraints[axis]) || {};
            if (dragSnapToOrigin)
                transition = { min: 0, max: 0 };
            /**
             * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
             * of spring animations so we should look into adding a disable spring option to `inertia`.
             * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
             * using the value of `dragElastic`.
             */
            const bounceStiffness = dragElastic ? 200 : 1000000;
            const bounceDamping = dragElastic ? 40 : 10000000;
            const inertia = {
                type: "inertia",
                velocity: dragMomentum ? velocity[axis] : 0,
                bounceStiffness,
                bounceDamping,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...dragTransition,
                ...transition,
            };
            // If we're not animating on an externally-provided `MotionValue` we can use the
            // component's animation controls which will handle interactions with whileHover (etc),
            // otherwise we just have to animate the `MotionValue` itself.
            return this.startAxisValueAnimation(axis, inertia);
        });
        // Run all animations and then resolve the new drag constraints.
        return Promise.all(momentumAnimations).then(onDragTransitionEnd);
    }
    startAxisValueAnimation(axis, transition) {
        const axisValue = this.getAxisMotionValue(axis);
        addValueToWillChange(this.visualElement, axis);
        return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
    }
    stopAnimation() {
        eachAxis((axis) => this.getAxisMotionValue(axis).stop());
    }
    pauseAnimation() {
        eachAxis((axis) => this.getAxisMotionValue(axis).animation?.pause());
    }
    getAnimationState(axis) {
        return this.getAxisMotionValue(axis).animation?.state;
    }
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    getAxisMotionValue(axis) {
        const dragKey = `_drag${axis.toUpperCase()}`;
        const props = this.visualElement.getProps();
        const externalMotionValue = props[dragKey];
        return externalMotionValue
            ? externalMotionValue
            : this.visualElement.getValue(axis, (props.initial
                ? props.initial[axis]
                : undefined) || 0);
    }
    snapToCursor(point) {
        eachAxis((axis) => {
            const { drag } = this.getProps();
            // If we're not dragging this axis, do an early return.
            if (!shouldDrag(axis, drag, this.currentDirection))
                return;
            const { projection } = this.visualElement;
            const axisValue = this.getAxisMotionValue(axis);
            if (projection && projection.layout) {
                const { min, max } = projection.layout.layoutBox[axis];
                axisValue.set(point[axis] - (0,number/* mixNumber */.t)(min, max, 0.5));
            }
        });
    }
    /**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const { drag, dragConstraints } = this.getProps();
        const { projection } = this.visualElement;
        if (!isRefObject(dragConstraints) || !projection || !this.constraints)
            return;
        /**
         * Stop current animations as there can be visual glitching if we try to do
         * this mid-animation
         */
        this.stopAnimation();
        /**
         * Record the relative position of the dragged element relative to the
         * constraints box and save as a progress value.
         */
        const boxProgress = { x: 0, y: 0 };
        eachAxis((axis) => {
            const axisValue = this.getAxisMotionValue(axis);
            if (axisValue && this.constraints !== false) {
                const latest = axisValue.get();
                boxProgress[axis] = calcOrigin({ min: latest, max: latest }, this.constraints[axis]);
            }
        });
        /**
         * Update the layout of this element and resolve the latest drag constraints
         */
        const { transformTemplate } = this.visualElement.getProps();
        this.visualElement.current.style.transform = transformTemplate
            ? transformTemplate({}, "")
            : "none";
        projection.root && projection.root.updateScroll();
        projection.updateLayout();
        this.resolveConstraints();
        /**
         * For each axis, calculate the current progress of the layout axis
         * within the new constraints.
         */
        eachAxis((axis) => {
            if (!shouldDrag(axis, drag, null))
                return;
            /**
             * Calculate a new transform based on the previous box progress
             */
            const axisValue = this.getAxisMotionValue(axis);
            const { min, max } = this.constraints[axis];
            axisValue.set((0,number/* mixNumber */.t)(min, max, boxProgress[axis]));
        });
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        elementDragControls.set(this.visualElement, this);
        const element = this.visualElement.current;
        /**
         * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
         */
        const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
            const { drag, dragListener = true } = this.getProps();
            drag && dragListener && this.start(event);
        });
        const measureDragConstraints = () => {
            const { dragConstraints } = this.getProps();
            if (isRefObject(dragConstraints) && dragConstraints.current) {
                this.constraints = this.resolveRefConstraints();
            }
        };
        const { projection } = this.visualElement;
        const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
        if (projection && !projection.layout) {
            projection.root && projection.root.updateScroll();
            projection.updateLayout();
        }
        frameloop_frame/* frame */.Wi.read(measureDragConstraints);
        /**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */
        const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
        /**
         * If the element's layout changes, calculate the delta and apply that to
         * the drag gesture's origin point.
         */
        const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
            if (this.isDragging && hasLayoutChanged) {
                eachAxis((axis) => {
                    const motionValue = this.getAxisMotionValue(axis);
                    if (!motionValue)
                        return;
                    this.originPoint[axis] += delta[axis].translate;
                    motionValue.set(motionValue.get() + delta[axis].translate);
                });
                this.visualElement.render();
            }
        }));
        return () => {
            stopResizeListener();
            stopPointerListener();
            stopMeasureLayoutListener();
            stopLayoutUpdateListener && stopLayoutUpdateListener();
        };
    }
    getProps() {
        const props = this.visualElement.getProps();
        const { drag = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true, } = props;
        return {
            ...props,
            drag,
            dragDirectionLock,
            dragPropagation,
            dragConstraints,
            dragElastic,
            dragMomentum,
        };
    }
}
function shouldDrag(direction, drag, currentDirection) {
    return ((drag === true || drag === direction) &&
        (currentDirection === null || currentDirection === direction));
}
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */
function getCurrentDirection(offset, lockThreshold = 10) {
    let direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
        direction = "y";
    }
    else if (Math.abs(offset.x) > lockThreshold) {
        direction = "x";
    }
    return direction;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/drag/index.mjs




class DragGesture extends Feature {
    constructor(node) {
        super(node);
        this.removeGroupControls = noop/* noop */.Z;
        this.removeListeners = noop/* noop */.Z;
        this.controls = new VisualElementDragControls(node);
    }
    mount() {
        // If we've been provided a DragControls for manual control over the drag gesture,
        // subscribe this component to it on mount.
        const { dragControls } = this.node.getProps();
        if (dragControls) {
            this.removeGroupControls = dragControls.subscribe(this.controls);
        }
        this.removeListeners = this.controls.addListeners() || noop/* noop */.Z;
    }
    unmount() {
        this.removeGroupControls();
        this.removeListeners();
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/pan/index.mjs







const asyncHandler = (handler) => (event, info) => {
    if (handler) {
        frameloop_frame/* frame */.Wi.postRender(() => handler(event, info));
    }
};
class PanGesture extends Feature {
    constructor() {
        super(...arguments);
        this.removePointerDownListener = noop/* noop */.Z;
    }
    onPointerDown(pointerDownEvent) {
        this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: getContextWindow(this.node),
        });
    }
    createPanHandlers() {
        const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
        return {
            onSessionStart: asyncHandler(onPanSessionStart),
            onStart: asyncHandler(onPanStart),
            onMove: onPan,
            onEnd: (event, info) => {
                delete this.session;
                if (onPanEnd) {
                    frameloop_frame/* frame */.Wi.postRender(() => onPanEnd(event, info));
                }
            },
        };
    }
    mount() {
        this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
        this.removePointerDownListener();
        this.session && this.session.end();
    }
}



// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/frameloop/batcher.mjs + 2 modules
var batcher = __webpack_require__(4839);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/frameloop/microtask.mjs


const { schedule: microtask, cancel: cancelMicrotask } = 
/* @__PURE__ */ (0,batcher/* createRenderBatcher */.Z)(queueMicrotask, false);



// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
var use_presence = __webpack_require__(1886);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var LayoutGroupContext = __webpack_require__(8549);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
"use client";


/**
 * Internal, exported only for usage in Framer
 */
const SwitchLayoutGroupContext = (0,react_.createContext)({});



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/node/state.mjs
/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */
const globalProjectionState = {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */
    hasAnimatedSinceResize: true,
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */
    hasEverUpdated: false,
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs


function pixelsToPercent(pixels, axis) {
    if (axis.max === axis.min)
        return 0;
    return (pixels / (axis.max - axis.min)) * 100;
}
/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */
const correctBorderRadius = {
    correct: (latest, node) => {
        if (!node.target)
            return latest;
        /**
         * If latest is a string, if it's a percentage we can return immediately as it's
         * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
         */
        if (typeof latest === "string") {
            if (units.px.test(latest)) {
                latest = parseFloat(latest);
            }
            else {
                return latest;
            }
        }
        /**
         * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
         * pixel value as a percentage of each axis
         */
        const x = pixelsToPercent(latest, node.target.x);
        const y = pixelsToPercent(latest, node.target.y);
        return `${x}% ${y}%`;
    },
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs


const correctBoxShadow = {
    correct: (latest, { treeScale, projectionDelta }) => {
        const original = latest;
        const shadow = complex/* complex */.P.parse(latest);
        // TODO: Doesn't support multiple shadows
        if (shadow.length > 5)
            return original;
        const template = complex/* complex */.P.createTransformer(latest);
        const offset = typeof shadow[0] !== "number" ? 1 : 0;
        // Calculate the overall context scale
        const xScale = projectionDelta.x.scale * treeScale.x;
        const yScale = projectionDelta.y.scale * treeScale.y;
        shadow[0 + offset] /= xScale;
        shadow[1 + offset] /= yScale;
        /**
         * Ideally we'd correct x and y scales individually, but because blur and
         * spread apply to both we have to take a scale average and apply that instead.
         * We could potentially improve the outcome of this by incorporating the ratio between
         * the two scales.
         */
        const averageScale = (0,number/* mixNumber */.t)(xScale, yScale, 0.5);
        // Blur
        if (typeof shadow[2 + offset] === "number")
            shadow[2 + offset] /= averageScale;
        // Spread
        if (typeof shadow[3 + offset] === "number")
            shadow[3 + offset] /= averageScale;
        return template(shadow);
    },
};



// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs
var is_css_variable = __webpack_require__(3593);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs


const scaleCorrectors = {};
function addScaleCorrector(correctors) {
    for (const key in correctors) {
        scaleCorrectors[key] = correctors[key];
        if ((0,is_css_variable/* isCSSVariableName */.f)(key)) {
            scaleCorrectors[key].isCSSVariable = true;
        }
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
"use client";











class MeasureLayoutWithContext extends react_.Component {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    componentDidMount() {
        const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
        const { projection } = visualElement;
        addScaleCorrector(defaultScaleCorrectors);
        if (projection) {
            if (layoutGroup.group)
                layoutGroup.group.add(projection);
            if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
                switchLayoutGroup.register(projection);
            }
            projection.root.didUpdate();
            projection.addEventListener("animationComplete", () => {
                this.safeToRemove();
            });
            projection.setOptions({
                ...projection.options,
                onExitComplete: () => this.safeToRemove(),
            });
        }
        globalProjectionState.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(prevProps) {
        const { layoutDependency, visualElement, drag, isPresent } = this.props;
        const { projection } = visualElement;
        if (!projection)
            return null;
        /**
         * TODO: We use this data in relegate to determine whether to
         * promote a previous element. There's no guarantee its presence data
         * will have updated by this point - if a bug like this arises it will
         * have to be that we markForRelegation and then find a new lead some other way,
         * perhaps in didUpdate
         */
        projection.isPresent = isPresent;
        if (drag ||
            prevProps.layoutDependency !== layoutDependency ||
            layoutDependency === undefined ||
            prevProps.isPresent !== isPresent) {
            projection.willUpdate();
        }
        else {
            this.safeToRemove();
        }
        if (prevProps.isPresent !== isPresent) {
            if (isPresent) {
                projection.promote();
            }
            else if (!projection.relegate()) {
                /**
                 * If there's another stack member taking over from this one,
                 * it's in charge of the exit animation and therefore should
                 * be in charge of the safe to remove. Otherwise we call it here.
                 */
                frameloop_frame/* frame */.Wi.postRender(() => {
                    const stack = projection.getStack();
                    if (!stack || !stack.members.length) {
                        this.safeToRemove();
                    }
                });
            }
        }
        return null;
    }
    componentDidUpdate() {
        const { projection } = this.props.visualElement;
        if (projection) {
            projection.root.didUpdate();
            microtask.postRender(() => {
                if (!projection.currentAnimation && projection.isLead()) {
                    this.safeToRemove();
                }
            });
        }
    }
    componentWillUnmount() {
        const { visualElement, layoutGroup, switchLayoutGroup: promoteContext, } = this.props;
        const { projection } = visualElement;
        if (projection) {
            projection.scheduleCheckAfterUnmount();
            if (layoutGroup && layoutGroup.group)
                layoutGroup.group.remove(projection);
            if (promoteContext && promoteContext.deregister)
                promoteContext.deregister(projection);
        }
    }
    safeToRemove() {
        const { safeToRemove } = this.props;
        safeToRemove && safeToRemove();
    }
    render() {
        return null;
    }
}
function MeasureLayout(props) {
    const [isPresent, safeToRemove] = (0,use_presence/* usePresence */.oO)();
    const layoutGroup = (0,react_.useContext)(LayoutGroupContext/* LayoutGroupContext */.p);
    return ((0,jsx_runtime_.jsx)(MeasureLayoutWithContext, { ...props, layoutGroup: layoutGroup, switchLayoutGroup: (0,react_.useContext)(SwitchLayoutGroupContext), isPresent: isPresent, safeToRemove: safeToRemove }));
}
const defaultScaleCorrectors = {
    borderRadius: {
        ...correctBorderRadius,
        applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
        ],
    },
    borderTopLeftRadius: correctBorderRadius,
    borderTopRightRadius: correctBorderRadius,
    borderBottomLeftRadius: correctBorderRadius,
    borderBottomRightRadius: correctBorderRadius,
    boxShadow: correctBoxShadow,
};



// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
var is_svg_element = __webpack_require__(7286);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs


/**
 * Checks if an element is specifically an SVGSVGElement (the root SVG element)
 * in a way that works across iframes
 */
function isSVGSVGElement(element) {
    return (0,is_svg_element/* isSVGElement */.v)(element) && element.tagName === "svg";
}



// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/subscription-manager.mjs
var subscription_manager = __webpack_require__(5024);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animate/single-value.mjs



function animateSingleValue(value, keyframes, options) {
    const motionValue$1 = isMotionValue(value) ? value : (0,es_value/* motionValue */.BX)(value);
    motionValue$1.start(animateMotionValue("", motionValue$1, keyframes, options));
    return motionValue$1.animation;
}



// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/array.mjs
var array = __webpack_require__(3697);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
const compareByDepth = (a, b) => a.depth - b.depth;



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs



class FlatTree {
    constructor() {
        this.children = [];
        this.isDirty = false;
    }
    add(child) {
        (0,array/* addUniqueItem */.y4)(this.children, child);
        this.isDirty = true;
    }
    remove(child) {
        (0,array/* removeItem */.cl)(this.children, child);
        this.isDirty = true;
    }
    forEach(callback) {
        this.isDirty && this.children.sort(compareByDepth);
        this.isDirty = false;
        this.children.forEach(callback);
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/delay.mjs



/**
 * Timeout defined in ms
 */
function delay(callback, timeout) {
    const start = sync_time/* time */.X.now();
    const checkElapsed = ({ timestamp }) => {
        const elapsed = timestamp - start;
        if (elapsed >= timeout) {
            (0,frameloop_frame/* cancelFrame */.Pn)(checkElapsed);
            callback(elapsed - timeout);
        }
    };
    frameloop_frame/* frame */.Wi.setup(checkElapsed, true);
    return () => (0,frameloop_frame/* cancelFrame */.Pn)(checkElapsed);
}
function delayInSeconds(callback, timeout) {
    return delay(callback, secondsToMilliseconds(timeout));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs


/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 */
function resolveMotionValue(value) {
    return isMotionValue(value) ? value.get() : value;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs



const borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
const numBorders = borders.length;
const asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
const isPx = (value) => typeof value === "number" || units.px.test(value);
function mixValues(target, follow, lead, progress, shouldCrossfadeOpacity, isOnlyMember) {
    if (shouldCrossfadeOpacity) {
        target.opacity = (0,number/* mixNumber */.t)(0, lead.opacity ?? 1, easeCrossfadeIn(progress));
        target.opacityExit = (0,number/* mixNumber */.t)(follow.opacity ?? 1, 0, easeCrossfadeOut(progress));
    }
    else if (isOnlyMember) {
        target.opacity = (0,number/* mixNumber */.t)(follow.opacity ?? 1, lead.opacity ?? 1, progress);
    }
    /**
     * Mix border radius
     */
    for (let i = 0; i < numBorders; i++) {
        const borderLabel = `border${borders[i]}Radius`;
        let followRadius = getRadius(follow, borderLabel);
        let leadRadius = getRadius(lead, borderLabel);
        if (followRadius === undefined && leadRadius === undefined)
            continue;
        followRadius || (followRadius = 0);
        leadRadius || (leadRadius = 0);
        const canMix = followRadius === 0 ||
            leadRadius === 0 ||
            isPx(followRadius) === isPx(leadRadius);
        if (canMix) {
            target[borderLabel] = Math.max((0,number/* mixNumber */.t)(asNumber(followRadius), asNumber(leadRadius), progress), 0);
            if (units/* percent */.aQ.test(leadRadius) || units/* percent */.aQ.test(followRadius)) {
                target[borderLabel] += "%";
            }
        }
        else {
            target[borderLabel] = leadRadius;
        }
    }
    /**
     * Mix rotation
     */
    if (follow.rotate || lead.rotate) {
        target.rotate = (0,number/* mixNumber */.t)(follow.rotate || 0, lead.rotate || 0, progress);
    }
}
function getRadius(values, radiusName) {
    return values[radiusName] !== undefined
        ? values[radiusName]
        : values.borderRadius;
}
// /**
//  * We only want to mix the background color if there's a follow element
//  * that we're not crossfading opacity between. For instance with switch
//  * AnimateSharedLayout animations, this helps the illusion of a continuous
//  * element being animated but also cuts down on the number of paints triggered
//  * for elements where opacity is doing that work for us.
//  */
// if (
//     !hasFollowElement &&
//     latestLeadValues.backgroundColor &&
//     latestFollowValues.backgroundColor
// ) {
//     /**
//      * This isn't ideal performance-wise as mixColor is creating a new function every frame.
//      * We could probably create a mixer that runs at the start of the animation but
//      * the idea behind the crossfader is that it runs dynamically between two potentially
//      * changing targets (ie opacity or borderRadius may be animating independently via variants)
//      */
//     leadState.backgroundColor = followState.backgroundColor = mixColor(
//         latestFollowValues.backgroundColor as string,
//         latestLeadValues.backgroundColor as string
//     )(p)
// }
const easeCrossfadeIn = /*@__PURE__*/ compress(0, 0.5, circOut);
const easeCrossfadeOut = /*@__PURE__*/ compress(0.5, 0.95, noop/* noop */.Z);
function compress(min, max, easing) {
    return (p) => {
        // Could replace ifs with clamp
        if (p < min)
            return 0;
        if (p > max)
            return 1;
        return easing((0,progress/* progress */.Y)(min, max, p));
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyAxisInto(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
}
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyBoxInto(box, originBox) {
    copyAxisInto(box.x, originBox.x);
    copyAxisInto(box.y, originBox.y);
}
/**
 * Reset a delta to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyAxisDeltaInto(delta, originDelta) {
    delta.translate = originDelta.translate;
    delta.scale = originDelta.scale;
    delta.originPoint = originDelta.originPoint;
    delta.origin = originDelta.origin;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs



/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */
function removePointDelta(point, translate, scale, originPoint, boxScale) {
    point -= translate;
    point = scalePoint(point, 1 / scale, originPoint);
    if (boxScale !== undefined) {
        point = scalePoint(point, 1 / boxScale, originPoint);
    }
    return point;
}
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */
function removeAxisDelta(axis, translate = 0, scale = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
    if (units/* percent */.aQ.test(translate)) {
        translate = parseFloat(translate);
        const relativeProgress = (0,number/* mixNumber */.t)(sourceAxis.min, sourceAxis.max, translate / 100);
        translate = relativeProgress - sourceAxis.min;
    }
    if (typeof translate !== "number")
        return;
    let originPoint = (0,number/* mixNumber */.t)(originAxis.min, originAxis.max, origin);
    if (axis === originAxis)
        originPoint -= translate;
    axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
const xKeys = ["x", "scaleX", "originX"];
const yKeys = ["y", "scaleY", "originY"];
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
    removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : undefined, sourceBox ? sourceBox.x : undefined);
    removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : undefined, sourceBox ? sourceBox.y : undefined);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/utils.mjs


function isAxisDeltaZero(delta) {
    return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
    return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a, b) {
    return a.min === b.min && a.max === b.max;
}
function boxEquals(a, b) {
    return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
}
function axisEqualsRounded(a, b) {
    return (Math.round(a.min) === Math.round(b.min) &&
        Math.round(a.max) === Math.round(b.max));
}
function boxEqualsRounded(a, b) {
    return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
}
function aspectRatio(box) {
    return calcLength(box.x) / calcLength(box.y);
}
function axisDeltaEquals(a, b) {
    return (a.translate === b.translate &&
        a.scale === b.scale &&
        a.originPoint === b.originPoint);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/shared/stack.mjs


class NodeStack {
    constructor() {
        this.members = [];
    }
    add(node) {
        (0,array/* addUniqueItem */.y4)(this.members, node);
        node.scheduleRender();
    }
    remove(node) {
        (0,array/* removeItem */.cl)(this.members, node);
        if (node === this.prevLead) {
            this.prevLead = undefined;
        }
        if (node === this.lead) {
            const prevLead = this.members[this.members.length - 1];
            if (prevLead) {
                this.promote(prevLead);
            }
        }
    }
    relegate(node) {
        const indexOfNode = this.members.findIndex((member) => node === member);
        if (indexOfNode === 0)
            return false;
        /**
         * Find the next projection node that is present
         */
        let prevLead;
        for (let i = indexOfNode; i >= 0; i--) {
            const member = this.members[i];
            if (member.isPresent !== false) {
                prevLead = member;
                break;
            }
        }
        if (prevLead) {
            this.promote(prevLead);
            return true;
        }
        else {
            return false;
        }
    }
    promote(node, preserveFollowOpacity) {
        const prevLead = this.lead;
        if (node === prevLead)
            return;
        this.prevLead = prevLead;
        this.lead = node;
        node.show();
        if (prevLead) {
            prevLead.instance && prevLead.scheduleRender();
            node.scheduleRender();
            node.resumeFrom = prevLead;
            if (preserveFollowOpacity) {
                node.resumeFrom.preserveOpacity = true;
            }
            if (prevLead.snapshot) {
                node.snapshot = prevLead.snapshot;
                node.snapshot.latestValues =
                    prevLead.animationValues || prevLead.latestValues;
            }
            if (node.root && node.root.isUpdating) {
                node.isLayoutDirty = true;
            }
            const { crossfade } = node.options;
            if (crossfade === false) {
                prevLead.hide();
            }
            /**
             * TODO:
             *   - Test border radius when previous node was deleted
             *   - boxShadow mixing
             *   - Shared between element A in scrolled container and element B (scroll stays the same or changes)
             *   - Shared between element A in transformed container and element B (transform stays the same or changes)
             *   - Shared between element A in scrolled page and element B (scroll stays the same or changes)
             * ---
             *   - Crossfade opacity of root nodes
             *   - layoutId changes after animation
             *   - layoutId changes mid animation
             */
        }
    }
    exitAnimationComplete() {
        this.members.forEach((node) => {
            const { options, resumingFrom } = node;
            options.onExitComplete && options.onExitComplete();
            if (resumingFrom) {
                resumingFrom.options.onExitComplete &&
                    resumingFrom.options.onExitComplete();
            }
        });
    }
    scheduleRender() {
        this.members.forEach((node) => {
            node.instance && node.scheduleRender(false);
        });
    }
    /**
     * Clear any leads that have been removed this render to prevent them from being
     * used in future animations and to prevent memory leaks
     */
    removeLeadSnapshot() {
        if (this.lead && this.lead.snapshot) {
            this.lead.snapshot = undefined;
        }
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/styles/transform.mjs
function buildProjectionTransform(delta, treeScale, latestTransform) {
    let transform = "";
    /**
     * The translations we use to calculate are always relative to the viewport coordinate space.
     * But when we apply scales, we also scale the coordinate space of an element and its children.
     * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
     * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
     */
    const xTranslate = delta.x.translate / treeScale.x;
    const yTranslate = delta.y.translate / treeScale.y;
    const zTranslate = latestTransform?.z || 0;
    if (xTranslate || yTranslate || zTranslate) {
        transform = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
    }
    /**
     * Apply scale correction for the tree transform.
     * This will apply scale to the screen-orientated axes.
     */
    if (treeScale.x !== 1 || treeScale.y !== 1) {
        transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
    }
    if (latestTransform) {
        const { transformPerspective, rotate, rotateX, rotateY, skewX, skewY } = latestTransform;
        if (transformPerspective)
            transform = `perspective(${transformPerspective}px) ${transform}`;
        if (rotate)
            transform += `rotate(${rotate}deg) `;
        if (rotateX)
            transform += `rotateX(${rotateX}deg) `;
        if (rotateY)
            transform += `rotateY(${rotateY}deg) `;
        if (skewX)
            transform += `skewX(${skewX}deg) `;
        if (skewY)
            transform += `skewY(${skewY}deg) `;
    }
    /**
     * Apply scale to match the size of the element to the size we want it.
     * This will apply scale to the element-orientated axes.
     */
    const elementScaleX = delta.x.scale * treeScale.x;
    const elementScaleY = delta.y.scale * treeScale.y;
    if (elementScaleX !== 1 || elementScaleY !== 1) {
        transform += `scale(${elementScaleX}, ${elementScaleY})`;
    }
    return transform || "none";
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs





















const metrics = {
    nodes: 0,
    calculatedTargetDeltas: 0,
    calculatedProjections: 0,
};
const transformAxes = ["", "X", "Y", "Z"];
const hiddenVisibility = { visibility: "hidden" };
/**
 * We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
 * which has a noticeable difference in spring animations
 */
const animationTarget = 1000;
let create_projection_node_id = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
    const { latestValues } = visualElement;
    // Record the distorting transform and then temporarily set it to 0
    if (latestValues[key]) {
        values[key] = latestValues[key];
        visualElement.setStaticValue(key, 0);
        if (sharedAnimationValues) {
            sharedAnimationValues[key] = 0;
        }
    }
}
function cancelTreeOptimisedTransformAnimations(projectionNode) {
    projectionNode.hasCheckedOptimisedAppear = true;
    if (projectionNode.root === projectionNode)
        return;
    const { visualElement } = projectionNode.options;
    if (!visualElement)
        return;
    const appearId = getOptimisedAppearId(visualElement);
    if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
        const { layout, layoutId } = projectionNode.options;
        window.MotionCancelOptimisedAnimation(appearId, "transform", frameloop_frame/* frame */.Wi, !(layout || layoutId));
    }
    const { parent } = projectionNode;
    if (parent && !parent.hasCheckedOptimisedAppear) {
        cancelTreeOptimisedTransformAnimations(parent);
    }
}
function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform, }) {
    return class ProjectionNode {
        constructor(latestValues = {}, parent = defaultParent?.()) {
            /**
             * A unique ID generated for every projection node.
             */
            this.id = create_projection_node_id++;
            /**
             * An id that represents a unique session instigated by startUpdate.
             */
            this.animationId = 0;
            /**
             * A Set containing all this component's children. This is used to iterate
             * through the children.
             *
             * TODO: This could be faster to iterate as a flat array stored on the root node.
             */
            this.children = new Set();
            /**
             * Options for the node. We use this to configure what kind of layout animations
             * we should perform (if any).
             */
            this.options = {};
            /**
             * We use this to detect when its safe to shut down part of a projection tree.
             * We have to keep projecting children for scale correction and relative projection
             * until all their parents stop performing layout animations.
             */
            this.isTreeAnimating = false;
            this.isAnimationBlocked = false;
            /**
             * Flag to true if we think this layout has been changed. We can't always know this,
             * currently we set it to true every time a component renders, or if it has a layoutDependency
             * if that has changed between renders. Additionally, components can be grouped by LayoutGroup
             * and if one node is dirtied, they all are.
             */
            this.isLayoutDirty = false;
            /**
             * Flag to true if we think the projection calculations for this node needs
             * recalculating as a result of an updated transform or layout animation.
             */
            this.isProjectionDirty = false;
            /**
             * Flag to true if the layout *or* transform has changed. This then gets propagated
             * throughout the projection tree, forcing any element below to recalculate on the next frame.
             */
            this.isSharedProjectionDirty = false;
            /**
             * Flag transform dirty. This gets propagated throughout the whole tree but is only
             * respected by shared nodes.
             */
            this.isTransformDirty = false;
            /**
             * Block layout updates for instant layout transitions throughout the tree.
             */
            this.updateManuallyBlocked = false;
            this.updateBlockedByResize = false;
            /**
             * Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
             * call.
             */
            this.isUpdating = false;
            /**
             * If this is an SVG element we currently disable projection transforms
             */
            this.isSVG = false;
            /**
             * Flag to true (during promotion) if a node doing an instant layout transition needs to reset
             * its projection styles.
             */
            this.needsReset = false;
            /**
             * Flags whether this node should have its transform reset prior to measuring.
             */
            this.shouldResetTransform = false;
            /**
             * Store whether this node has been checked for optimised appear animations. As
             * effects fire bottom-up, and we want to look up the tree for appear animations,
             * this makes sure we only check each path once, stopping at nodes that
             * have already been checked.
             */
            this.hasCheckedOptimisedAppear = false;
            /**
             * An object representing the calculated contextual/accumulated/tree scale.
             * This will be used to scale calculcated projection transforms, as these are
             * calculated in screen-space but need to be scaled for elements to layoutly
             * make it to their calculated destinations.
             *
             * TODO: Lazy-init
             */
            this.treeScale = { x: 1, y: 1 };
            /**
             *
             */
            this.eventHandlers = new Map();
            this.hasTreeAnimated = false;
            // Note: Currently only running on root node
            this.updateScheduled = false;
            this.scheduleUpdate = () => this.update();
            this.projectionUpdateScheduled = false;
            this.checkUpdateFailed = () => {
                if (this.isUpdating) {
                    this.isUpdating = false;
                    this.clearAllSnapshots();
                }
            };
            /**
             * This is a multi-step process as shared nodes might be of different depths. Nodes
             * are sorted by depth order, so we need to resolve the entire tree before moving to
             * the next step.
             */
            this.updateProjection = () => {
                this.projectionUpdateScheduled = false;
                /**
                 * Reset debug counts. Manually resetting rather than creating a new
                 * object each frame.
                 */
                if (buffer/* statsBuffer */.f.value) {
                    metrics.nodes =
                        metrics.calculatedTargetDeltas =
                            metrics.calculatedProjections =
                                0;
                }
                this.nodes.forEach(propagateDirtyNodes);
                this.nodes.forEach(resolveTargetDelta);
                this.nodes.forEach(calcProjection);
                this.nodes.forEach(cleanDirtyNodes);
                if (buffer/* statsBuffer */.f.addProjectionMetrics) {
                    buffer/* statsBuffer */.f.addProjectionMetrics(metrics);
                }
            };
            /**
             * Frame calculations
             */
            this.resolvedRelativeTargetAt = 0.0;
            this.hasProjected = false;
            this.isVisible = true;
            this.animationProgress = 0;
            /**
             * Shared layout
             */
            // TODO Only running on root node
            this.sharedNodes = new Map();
            this.latestValues = latestValues;
            this.root = parent ? parent.root || parent : this;
            this.path = parent ? [...parent.path, parent] : [];
            this.parent = parent;
            this.depth = parent ? parent.depth + 1 : 0;
            for (let i = 0; i < this.path.length; i++) {
                this.path[i].shouldResetTransform = true;
            }
            if (this.root === this)
                this.nodes = new FlatTree();
        }
        addEventListener(name, handler) {
            if (!this.eventHandlers.has(name)) {
                this.eventHandlers.set(name, new subscription_manager/* SubscriptionManager */.L());
            }
            return this.eventHandlers.get(name).add(handler);
        }
        notifyListeners(name, ...args) {
            const subscriptionManager = this.eventHandlers.get(name);
            subscriptionManager && subscriptionManager.notify(...args);
        }
        hasListeners(name) {
            return this.eventHandlers.has(name);
        }
        /**
         * Lifecycles
         */
        mount(instance) {
            if (this.instance)
                return;
            this.isSVG = (0,is_svg_element/* isSVGElement */.v)(instance) && !isSVGSVGElement(instance);
            this.instance = instance;
            const { layoutId, layout, visualElement } = this.options;
            if (visualElement && !visualElement.current) {
                visualElement.mount(instance);
            }
            this.root.nodes.add(this);
            this.parent && this.parent.children.add(this);
            if (this.root.hasTreeAnimated && (layout || layoutId)) {
                this.isLayoutDirty = true;
            }
            if (attachResizeListener) {
                let cancelDelay;
                const resizeUnblockUpdate = () => (this.root.updateBlockedByResize = false);
                attachResizeListener(instance, () => {
                    this.root.updateBlockedByResize = true;
                    cancelDelay && cancelDelay();
                    cancelDelay = delay(resizeUnblockUpdate, 250);
                    if (globalProjectionState.hasAnimatedSinceResize) {
                        globalProjectionState.hasAnimatedSinceResize = false;
                        this.nodes.forEach(finishAnimation);
                    }
                });
            }
            if (layoutId) {
                this.root.registerSharedNode(layoutId, this);
            }
            // Only register the handler if it requires layout animation
            if (this.options.animate !== false &&
                visualElement &&
                (layoutId || layout)) {
                this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeLayoutChanged, layout: newLayout, }) => {
                    if (this.isTreeAnimationBlocked()) {
                        this.target = undefined;
                        this.relativeTarget = undefined;
                        return;
                    }
                    // TODO: Check here if an animation exists
                    const layoutTransition = this.options.transition ||
                        visualElement.getDefaultTransition() ||
                        defaultLayoutTransition;
                    const { onLayoutAnimationStart, onLayoutAnimationComplete, } = visualElement.getProps();
                    /**
                     * The target layout of the element might stay the same,
                     * but its position relative to its parent has changed.
                     */
                    const hasTargetChanged = !this.targetLayout ||
                        !boxEqualsRounded(this.targetLayout, newLayout);
                    /*
                     * Note: Disabled to fix relative animations always triggering new
                     * layout animations. If this causes further issues, we can try
                     * a different approach to detecting relative target changes.
                     */
                    // || hasRelativeLayoutChanged
                    /**
                     * If the layout hasn't seemed to have changed, it might be that the
                     * element is visually in the same place in the document but its position
                     * relative to its parent has indeed changed. So here we check for that.
                     */
                    const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeLayoutChanged;
                    if (this.options.layoutRoot ||
                        this.resumeFrom ||
                        hasOnlyRelativeTargetChanged ||
                        (hasLayoutChanged &&
                            (hasTargetChanged || !this.currentAnimation))) {
                        if (this.resumeFrom) {
                            this.resumingFrom = this.resumeFrom;
                            this.resumingFrom.resumingFrom = undefined;
                        }
                        const animationOptions = {
                            ...getValueTransition(layoutTransition, "layout"),
                            onPlay: onLayoutAnimationStart,
                            onComplete: onLayoutAnimationComplete,
                        };
                        if (visualElement.shouldReduceMotion ||
                            this.options.layoutRoot) {
                            animationOptions.delay = 0;
                            animationOptions.type = false;
                        }
                        this.startAnimation(animationOptions);
                        /**
                         * Set animation origin after starting animation to avoid layout jump
                         * caused by stopping previous layout animation
                         */
                        this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
                    }
                    else {
                        /**
                         * If the layout hasn't changed and we have an animation that hasn't started yet,
                         * finish it immediately. Otherwise it will be animating from a location
                         * that was probably never commited to screen and look like a jumpy box.
                         */
                        if (!hasLayoutChanged) {
                            finishAnimation(this);
                        }
                        if (this.isLead() && this.options.onExitComplete) {
                            this.options.onExitComplete();
                        }
                    }
                    this.targetLayout = newLayout;
                });
            }
        }
        unmount() {
            this.options.layoutId && this.willUpdate();
            this.root.nodes.remove(this);
            const stack = this.getStack();
            stack && stack.remove(this);
            this.parent && this.parent.children.delete(this);
            this.instance = undefined;
            this.eventHandlers.clear();
            (0,frameloop_frame/* cancelFrame */.Pn)(this.updateProjection);
        }
        // only on the root
        blockUpdate() {
            this.updateManuallyBlocked = true;
        }
        unblockUpdate() {
            this.updateManuallyBlocked = false;
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
            return (this.isAnimationBlocked ||
                (this.parent && this.parent.isTreeAnimationBlocked()) ||
                false);
        }
        // Note: currently only running on root node
        startUpdate() {
            if (this.isUpdateBlocked())
                return;
            this.isUpdating = true;
            this.nodes && this.nodes.forEach(resetSkewAndRotation);
            this.animationId++;
        }
        getTransformTemplate() {
            const { visualElement } = this.options;
            return visualElement && visualElement.getProps().transformTemplate;
        }
        willUpdate(shouldNotifyListeners = true) {
            this.root.hasTreeAnimated = true;
            if (this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return;
            }
            /**
             * If we're running optimised appear animations then these must be
             * cancelled before measuring the DOM. This is so we can measure
             * the true layout of the element rather than the WAAPI animation
             * which will be unaffected by the resetSkewAndRotate step.
             *
             * Note: This is a DOM write. Worst case scenario is this is sandwiched
             * between other snapshot reads which will cause unnecessary style recalculations.
             * This has to happen here though, as we don't yet know which nodes will need
             * snapshots in startUpdate(), but we only want to cancel optimised animations
             * if a layout animation measurement is actually going to be affected by them.
             */
            if (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear) {
                cancelTreeOptimisedTransformAnimations(this);
            }
            !this.root.isUpdating && this.root.startUpdate();
            if (this.isLayoutDirty)
                return;
            this.isLayoutDirty = true;
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                node.shouldResetTransform = true;
                node.updateScroll("snapshot");
                if (node.options.layoutRoot) {
                    node.willUpdate(false);
                }
            }
            const { layoutId, layout } = this.options;
            if (layoutId === undefined && !layout)
                return;
            const transformTemplate = this.getTransformTemplate();
            this.prevTransformTemplateValue = transformTemplate
                ? transformTemplate(this.latestValues, "")
                : undefined;
            this.updateSnapshot();
            shouldNotifyListeners && this.notifyListeners("willUpdate");
        }
        update() {
            this.updateScheduled = false;
            const updateWasBlocked = this.isUpdateBlocked();
            // When doing an instant transition, we skip the layout update,
            // but should still clean up the measurements so that the next
            // snapshot could be taken correctly.
            if (updateWasBlocked) {
                this.unblockUpdate();
                this.clearAllSnapshots();
                this.nodes.forEach(clearMeasurements);
                return;
            }
            if (!this.isUpdating) {
                this.nodes.forEach(clearIsLayoutDirty);
            }
            this.isUpdating = false;
            /**
             * Write
             */
            this.nodes.forEach(resetTransformStyle);
            /**
             * Read ==================
             */
            // Update layout measurements of updated children
            this.nodes.forEach(updateLayout);
            /**
             * Write
             */
            // Notify listeners that the layout is updated
            this.nodes.forEach(notifyLayoutUpdate);
            this.clearAllSnapshots();
            /**
             * Manually flush any pending updates. Ideally
             * we could leave this to the following requestAnimationFrame but this seems
             * to leave a flash of incorrectly styled content.
             */
            const now = sync_time/* time */.X.now();
            frameloop_frame.frameData.delta = (0,clamp/* clamp */.u)(0, 1000 / 60, now - frameloop_frame.frameData.timestamp);
            frameloop_frame.frameData.timestamp = now;
            frameloop_frame.frameData.isProcessing = true;
            frameloop_frame/* frameSteps */.yL.update.process(frameloop_frame.frameData);
            frameloop_frame/* frameSteps */.yL.preRender.process(frameloop_frame.frameData);
            frameloop_frame/* frameSteps */.yL.render.process(frameloop_frame.frameData);
            frameloop_frame.frameData.isProcessing = false;
        }
        didUpdate() {
            if (!this.updateScheduled) {
                this.updateScheduled = true;
                microtask.read(this.scheduleUpdate);
            }
        }
        clearAllSnapshots() {
            this.nodes.forEach(clearSnapshot);
            this.sharedNodes.forEach(removeLeadSnapshots);
        }
        scheduleUpdateProjection() {
            if (!this.projectionUpdateScheduled) {
                this.projectionUpdateScheduled = true;
                frameloop_frame/* frame */.Wi.preRender(this.updateProjection, false, true);
            }
        }
        scheduleCheckAfterUnmount() {
            /**
             * If the unmounting node is in a layoutGroup and did trigger a willUpdate,
             * we manually call didUpdate to give a chance to the siblings to animate.
             * Otherwise, cleanup all snapshots to prevents future nodes from reusing them.
             */
            frameloop_frame/* frame */.Wi.postRender(() => {
                if (this.isLayoutDirty) {
                    this.root.didUpdate();
                }
                else {
                    this.root.checkUpdateFailed();
                }
            });
        }
        /**
         * Update measurements
         */
        updateSnapshot() {
            if (this.snapshot || !this.instance)
                return;
            this.snapshot = this.measure();
            if (this.snapshot &&
                !calcLength(this.snapshot.measuredBox.x) &&
                !calcLength(this.snapshot.measuredBox.y)) {
                this.snapshot = undefined;
            }
        }
        updateLayout() {
            if (!this.instance)
                return;
            // TODO: Incorporate into a forwarded scroll offset
            this.updateScroll();
            if (!(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty) {
                return;
            }
            /**
             * When a node is mounted, it simply resumes from the prevLead's
             * snapshot instead of taking a new one, but the ancestors scroll
             * might have updated while the prevLead is unmounted. We need to
             * update the scroll again to make sure the layout we measure is
             * up to date.
             */
            if (this.resumeFrom && !this.resumeFrom.instance) {
                for (let i = 0; i < this.path.length; i++) {
                    const node = this.path[i];
                    node.updateScroll();
                }
            }
            const prevLayout = this.layout;
            this.layout = this.measure(false);
            this.layoutCorrected = createBox();
            this.isLayoutDirty = false;
            this.projectionDelta = undefined;
            this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement } = this.options;
            visualElement &&
                visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : undefined);
        }
        updateScroll(phase = "measure") {
            let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
            if (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === phase) {
                needsMeasurement = false;
            }
            if (needsMeasurement && this.instance) {
                const isRoot = checkIsScrollRoot(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase,
                    isRoot,
                    offset: measureScroll(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : isRoot,
                };
            }
        }
        resetTransform() {
            if (!resetTransform)
                return;
            const isResetRequested = this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout;
            const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
            const transformTemplate = this.getTransformTemplate();
            const transformTemplateValue = transformTemplate
                ? transformTemplate(this.latestValues, "")
                : undefined;
            const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
            if (isResetRequested &&
                this.instance &&
                (hasProjection ||
                    hasTransform(this.latestValues) ||
                    transformTemplateHasChanged)) {
                resetTransform(this.instance, transformTemplateValue);
                this.shouldResetTransform = false;
                this.scheduleRender();
            }
        }
        measure(removeTransform = true) {
            const pageBox = this.measurePageBox();
            let layoutBox = this.removeElementScroll(pageBox);
            /**
             * Measurements taken during the pre-render stage
             * still have transforms applied so we remove them
             * via calculation.
             */
            if (removeTransform) {
                layoutBox = this.removeTransform(layoutBox);
            }
            roundBox(layoutBox);
            return {
                animationId: this.root.animationId,
                measuredBox: pageBox,
                layoutBox,
                latestValues: {},
                source: this.id,
            };
        }
        measurePageBox() {
            const { visualElement } = this.options;
            if (!visualElement)
                return createBox();
            const box = visualElement.measureViewportBox();
            const wasInScrollRoot = this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot);
            if (!wasInScrollRoot) {
                // Remove viewport scroll to give page-relative coordinates
                const { scroll } = this.root;
                if (scroll) {
                    translateAxis(box.x, scroll.offset.x);
                    translateAxis(box.y, scroll.offset.y);
                }
            }
            return box;
        }
        removeElementScroll(box) {
            const boxWithoutScroll = createBox();
            copyBoxInto(boxWithoutScroll, box);
            if (this.scroll?.wasRoot) {
                return boxWithoutScroll;
            }
            /**
             * Performance TODO: Keep a cumulative scroll offset down the tree
             * rather than loop back up the path.
             */
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                const { scroll, options } = node;
                if (node !== this.root && scroll && options.layoutScroll) {
                    /**
                     * If this is a new scroll root, we want to remove all previous scrolls
                     * from the viewport box.
                     */
                    if (scroll.wasRoot) {
                        copyBoxInto(boxWithoutScroll, box);
                    }
                    translateAxis(boxWithoutScroll.x, scroll.offset.x);
                    translateAxis(boxWithoutScroll.y, scroll.offset.y);
                }
            }
            return boxWithoutScroll;
        }
        applyTransform(box, transformOnly = false) {
            const withTransforms = createBox();
            copyBoxInto(withTransforms, box);
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                if (!transformOnly &&
                    node.options.layoutScroll &&
                    node.scroll &&
                    node !== node.root) {
                    transformBox(withTransforms, {
                        x: -node.scroll.offset.x,
                        y: -node.scroll.offset.y,
                    });
                }
                if (!hasTransform(node.latestValues))
                    continue;
                transformBox(withTransforms, node.latestValues);
            }
            if (hasTransform(this.latestValues)) {
                transformBox(withTransforms, this.latestValues);
            }
            return withTransforms;
        }
        removeTransform(box) {
            const boxWithoutTransform = createBox();
            copyBoxInto(boxWithoutTransform, box);
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                if (!node.instance)
                    continue;
                if (!hasTransform(node.latestValues))
                    continue;
                hasScale(node.latestValues) && node.updateSnapshot();
                const sourceBox = createBox();
                const nodeBox = node.measurePageBox();
                copyBoxInto(sourceBox, nodeBox);
                removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : undefined, sourceBox);
            }
            if (hasTransform(this.latestValues)) {
                removeBoxTransforms(boxWithoutTransform, this.latestValues);
            }
            return boxWithoutTransform;
        }
        setTargetDelta(delta) {
            this.targetDelta = delta;
            this.root.scheduleUpdateProjection();
            this.isProjectionDirty = true;
        }
        setOptions(options) {
            this.options = {
                ...this.options,
                ...options,
                crossfade: options.crossfade !== undefined ? options.crossfade : true,
            };
        }
        clearMeasurements() {
            this.scroll = undefined;
            this.layout = undefined;
            this.snapshot = undefined;
            this.prevTransformTemplateValue = undefined;
            this.targetDelta = undefined;
            this.target = undefined;
            this.isLayoutDirty = false;
        }
        forceRelativeParentToResolveTarget() {
            if (!this.relativeParent)
                return;
            /**
             * If the parent target isn't up-to-date, force it to update.
             * This is an unfortunate de-optimisation as it means any updating relative
             * projection will cause all the relative parents to recalculate back
             * up the tree.
             */
            if (this.relativeParent.resolvedRelativeTargetAt !==
                frameloop_frame.frameData.timestamp) {
                this.relativeParent.resolveTargetDelta(true);
            }
        }
        resolveTargetDelta(forceRecalculation = false) {
            /**
             * Once the dirty status of nodes has been spread through the tree, we also
             * need to check if we have a shared node of a different depth that has itself
             * been dirtied.
             */
            const lead = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
            this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
            const isShared = Boolean(this.resumingFrom) || this !== lead;
            /**
             * We don't use transform for this step of processing so we don't
             * need to check whether any nodes have changed transform.
             */
            const canSkip = !(forceRecalculation ||
                (isShared && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                this.parent?.isProjectionDirty ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize);
            if (canSkip)
                return;
            const { layout, layoutId } = this.options;
            /**
             * If we have no layout, we can't perform projection, so early return
             */
            if (!this.layout || !(layout || layoutId))
                return;
            this.resolvedRelativeTargetAt = frameloop_frame.frameData.timestamp;
            /**
             * If we don't have a targetDelta but do have a layout, we can attempt to resolve
             * a relativeParent. This will allow a component to perform scale correction
             * even if no animation has started.
             */
            if (!this.targetDelta && !this.relativeTarget) {
                const relativeParent = this.getClosestProjectingParent();
                if (relativeParent &&
                    relativeParent.layout &&
                    this.animationProgress !== 1) {
                    this.relativeParent = relativeParent;
                    this.forceRelativeParentToResolveTarget();
                    this.relativeTarget = createBox();
                    this.relativeTargetOrigin = createBox();
                    calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
                    copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
                }
                else {
                    this.relativeParent = this.relativeTarget = undefined;
                }
            }
            /**
             * If we have no relative target or no target delta our target isn't valid
             * for this frame.
             */
            if (!this.relativeTarget && !this.targetDelta)
                return;
            /**
             * Lazy-init target data structure
             */
            if (!this.target) {
                this.target = createBox();
                this.targetWithTransforms = createBox();
            }
            /**
             * If we've got a relative box for this component, resolve it into a target relative to the parent.
             */
            if (this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.relativeParent &&
                this.relativeParent.target) {
                this.forceRelativeParentToResolveTarget();
                calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
                /**
                 * If we've only got a targetDelta, resolve it into a target
                 */
            }
            else if (this.targetDelta) {
                if (Boolean(this.resumingFrom)) {
                    // TODO: This is creating a new object every frame
                    this.target = this.applyTransform(this.layout.layoutBox);
                }
                else {
                    copyBoxInto(this.target, this.layout.layoutBox);
                }
                applyBoxDelta(this.target, this.targetDelta);
            }
            else {
                /**
                 * If no target, use own layout as target
                 */
                copyBoxInto(this.target, this.layout.layoutBox);
            }
            /**
             * If we've been told to attempt to resolve a relative target, do so.
             */
            if (this.attemptToResolveRelativeTarget) {
                this.attemptToResolveRelativeTarget = false;
                const relativeParent = this.getClosestProjectingParent();
                if (relativeParent &&
                    Boolean(relativeParent.resumingFrom) ===
                        Boolean(this.resumingFrom) &&
                    !relativeParent.options.layoutScroll &&
                    relativeParent.target &&
                    this.animationProgress !== 1) {
                    this.relativeParent = relativeParent;
                    this.forceRelativeParentToResolveTarget();
                    this.relativeTarget = createBox();
                    this.relativeTargetOrigin = createBox();
                    calcRelativePosition(this.relativeTargetOrigin, this.target, relativeParent.target);
                    copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
                }
                else {
                    this.relativeParent = this.relativeTarget = undefined;
                }
            }
            /**
             * Increase debug counter for resolved target deltas
             */
            if (buffer/* statsBuffer */.f.value) {
                metrics.calculatedTargetDeltas++;
            }
        }
        getClosestProjectingParent() {
            if (!this.parent ||
                hasScale(this.parent.latestValues) ||
                has2DTranslate(this.parent.latestValues)) {
                return undefined;
            }
            if (this.parent.isProjecting()) {
                return this.parent;
            }
            else {
                return this.parent.getClosestProjectingParent();
            }
        }
        isProjecting() {
            return Boolean((this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
                this.layout);
        }
        calcProjection() {
            const lead = this.getLead();
            const isShared = Boolean(this.resumingFrom) || this !== lead;
            let canSkip = true;
            /**
             * If this is a normal layout animation and neither this node nor its nearest projecting
             * is dirty then we can't skip.
             */
            if (this.isProjectionDirty || this.parent?.isProjectionDirty) {
                canSkip = false;
            }
            /**
             * If this is a shared layout animation and this node's shared projection is dirty then
             * we can't skip.
             */
            if (isShared &&
                (this.isSharedProjectionDirty || this.isTransformDirty)) {
                canSkip = false;
            }
            /**
             * If we have resolved the target this frame we must recalculate the
             * projection to ensure it visually represents the internal calculations.
             */
            if (this.resolvedRelativeTargetAt === frameloop_frame.frameData.timestamp) {
                canSkip = false;
            }
            if (canSkip)
                return;
            const { layout, layoutId } = this.options;
            /**
             * If this section of the tree isn't animating we can
             * delete our target sources for the following frame.
             */
            this.isTreeAnimating = Boolean((this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation);
            if (!this.isTreeAnimating) {
                this.targetDelta = this.relativeTarget = undefined;
            }
            if (!this.layout || !(layout || layoutId))
                return;
            /**
             * Reset the corrected box with the latest values from box, as we're then going
             * to perform mutative operations on it.
             */
            copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
            /**
             * Record previous tree scales before updating.
             */
            const prevTreeScaleX = this.treeScale.x;
            const prevTreeScaleY = this.treeScale.y;
            /**
             * Apply all the parent deltas to this box to produce the corrected box. This
             * is the layout box, as it will appear on screen as a result of the transforms of its parents.
             */
            applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
            /**
             * If this layer needs to perform scale correction but doesn't have a target,
             * use the layout as the target.
             */
            if (lead.layout &&
                !lead.target &&
                (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
                lead.target = lead.layout.layoutBox;
                lead.targetWithTransforms = createBox();
            }
            const { target } = lead;
            if (!target) {
                /**
                 * If we don't have a target to project into, but we were previously
                 * projecting, we want to remove the stored transform and schedule
                 * a render to ensure the elements reflect the removed transform.
                 */
                if (this.prevProjectionDelta) {
                    this.createProjectionDeltas();
                    this.scheduleRender();
                }
                return;
            }
            if (!this.projectionDelta || !this.prevProjectionDelta) {
                this.createProjectionDeltas();
            }
            else {
                copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x);
                copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y);
            }
            /**
             * Update the delta between the corrected box and the target box before user-set transforms were applied.
             * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
             * for our layout reprojection, but still allow them to be scaled correctly by the user.
             * It might be that to simplify this we may want to accept that user-set scale is also corrected
             * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
             * to allow people to choose whether these styles are corrected based on just the
             * layout reprojection or the final bounding box.
             */
            calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
            if (this.treeScale.x !== prevTreeScaleX ||
                this.treeScale.y !== prevTreeScaleY ||
                !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) ||
                !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) {
                this.hasProjected = true;
                this.scheduleRender();
                this.notifyListeners("projectionUpdate", target);
            }
            /**
             * Increase debug counter for recalculated projections
             */
            if (buffer/* statsBuffer */.f.value) {
                metrics.calculatedProjections++;
            }
        }
        hide() {
            this.isVisible = false;
            // TODO: Schedule render
        }
        show() {
            this.isVisible = true;
            // TODO: Schedule render
        }
        scheduleRender(notifyAll = true) {
            this.options.visualElement?.scheduleRender();
            if (notifyAll) {
                const stack = this.getStack();
                stack && stack.scheduleRender();
            }
            if (this.resumingFrom && !this.resumingFrom.instance) {
                this.resumingFrom = undefined;
            }
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = createDelta();
            this.projectionDelta = createDelta();
            this.projectionDeltaWithTransform = createDelta();
        }
        setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
            const snapshot = this.snapshot;
            const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
            const mixedValues = { ...this.latestValues };
            const targetDelta = createDelta();
            if (!this.relativeParent ||
                !this.relativeParent.options.layoutRoot) {
                this.relativeTarget = this.relativeTargetOrigin = undefined;
            }
            this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
            const relativeLayout = createBox();
            const snapshotSource = snapshot ? snapshot.source : undefined;
            const layoutSource = this.layout ? this.layout.source : undefined;
            const isSharedLayoutAnimation = snapshotSource !== layoutSource;
            const stack = this.getStack();
            const isOnlyMember = !stack || stack.members.length <= 1;
            const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation &&
                !isOnlyMember &&
                this.options.crossfade === true &&
                !this.path.some(hasOpacityCrossfade));
            this.animationProgress = 0;
            let prevRelativeTarget;
            this.mixTargetDelta = (latest) => {
                const progress = latest / 1000;
                mixAxisDelta(targetDelta.x, delta.x, progress);
                mixAxisDelta(targetDelta.y, delta.y, progress);
                this.setTargetDelta(targetDelta);
                if (this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout) {
                    calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
                    mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress);
                    /**
                     * If this is an unchanged relative target we can consider the
                     * projection not dirty.
                     */
                    if (prevRelativeTarget &&
                        boxEquals(this.relativeTarget, prevRelativeTarget)) {
                        this.isProjectionDirty = false;
                    }
                    if (!prevRelativeTarget)
                        prevRelativeTarget = createBox();
                    copyBoxInto(prevRelativeTarget, this.relativeTarget);
                }
                if (isSharedLayoutAnimation) {
                    this.animationValues = mixedValues;
                    mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress, shouldCrossfadeOpacity, isOnlyMember);
                }
                this.root.scheduleUpdateProjection();
                this.scheduleRender();
                this.animationProgress = progress;
            };
            this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
        }
        startAnimation(options) {
            this.notifyListeners("animationStart");
            this.currentAnimation?.stop();
            this.resumingFrom?.currentAnimation?.stop();
            if (this.pendingAnimation) {
                (0,frameloop_frame/* cancelFrame */.Pn)(this.pendingAnimation);
                this.pendingAnimation = undefined;
            }
            /**
             * Start the animation in the next frame to have a frame with progress 0,
             * where the target is the same as when the animation started, so we can
             * calculate the relative positions correctly for instant transitions.
             */
            this.pendingAnimation = frameloop_frame/* frame */.Wi.update(() => {
                globalProjectionState.hasAnimatedSinceResize = true;
                activeAnimations.layout++;
                this.motionValue || (this.motionValue = (0,es_value/* motionValue */.BX)(0));
                this.currentAnimation = animateSingleValue(this.motionValue, [0, 1000], {
                    ...options,
                    velocity: 0,
                    isSync: true,
                    onUpdate: (latest) => {
                        this.mixTargetDelta(latest);
                        options.onUpdate && options.onUpdate(latest);
                    },
                    onStop: () => {
                        activeAnimations.layout--;
                    },
                    onComplete: () => {
                        activeAnimations.layout--;
                        options.onComplete && options.onComplete();
                        this.completeAnimation();
                    },
                });
                if (this.resumingFrom) {
                    this.resumingFrom.currentAnimation = this.currentAnimation;
                }
                this.pendingAnimation = undefined;
            });
        }
        completeAnimation() {
            if (this.resumingFrom) {
                this.resumingFrom.currentAnimation = undefined;
                this.resumingFrom.preserveOpacity = undefined;
            }
            const stack = this.getStack();
            stack && stack.exitAnimationComplete();
            this.resumingFrom =
                this.currentAnimation =
                    this.animationValues =
                        undefined;
            this.notifyListeners("animationComplete");
        }
        finishAnimation() {
            if (this.currentAnimation) {
                this.mixTargetDelta && this.mixTargetDelta(animationTarget);
                this.currentAnimation.stop();
            }
            this.completeAnimation();
        }
        applyTransformsToTarget() {
            const lead = this.getLead();
            let { targetWithTransforms, target, layout, latestValues } = lead;
            if (!targetWithTransforms || !target || !layout)
                return;
            /**
             * If we're only animating position, and this element isn't the lead element,
             * then instead of projecting into the lead box we instead want to calculate
             * a new target that aligns the two boxes but maintains the layout shape.
             */
            if (this !== lead &&
                this.layout &&
                layout &&
                shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout.layoutBox)) {
                target = this.target || createBox();
                const xLength = calcLength(this.layout.layoutBox.x);
                target.x.min = lead.target.x.min;
                target.x.max = target.x.min + xLength;
                const yLength = calcLength(this.layout.layoutBox.y);
                target.y.min = lead.target.y.min;
                target.y.max = target.y.min + yLength;
            }
            copyBoxInto(targetWithTransforms, target);
            /**
             * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
             * This is the final box that we will then project into by calculating a transform delta and
             * applying it to the corrected box.
             */
            transformBox(targetWithTransforms, latestValues);
            /**
             * Update the delta between the corrected box and the final target box, after
             * user-set transforms are applied to it. This will be used by the renderer to
             * create a transform style that will reproject the element from its layout layout
             * into the desired bounding box.
             */
            calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
        }
        registerSharedNode(layoutId, node) {
            if (!this.sharedNodes.has(layoutId)) {
                this.sharedNodes.set(layoutId, new NodeStack());
            }
            const stack = this.sharedNodes.get(layoutId);
            stack.add(node);
            const config = node.options.initialPromotionConfig;
            node.promote({
                transition: config ? config.transition : undefined,
                preserveFollowOpacity: config && config.shouldPreserveFollowOpacity
                    ? config.shouldPreserveFollowOpacity(node)
                    : undefined,
            });
        }
        isLead() {
            const stack = this.getStack();
            return stack ? stack.lead === this : true;
        }
        getLead() {
            const { layoutId } = this.options;
            return layoutId ? this.getStack()?.lead || this : this;
        }
        getPrevLead() {
            const { layoutId } = this.options;
            return layoutId ? this.getStack()?.prevLead : undefined;
        }
        getStack() {
            const { layoutId } = this.options;
            if (layoutId)
                return this.root.sharedNodes.get(layoutId);
        }
        promote({ needsReset, transition, preserveFollowOpacity, } = {}) {
            const stack = this.getStack();
            if (stack)
                stack.promote(this, preserveFollowOpacity);
            if (needsReset) {
                this.projectionDelta = undefined;
                this.needsReset = true;
            }
            if (transition)
                this.setOptions({ transition });
        }
        relegate() {
            const stack = this.getStack();
            if (stack) {
                return stack.relegate(this);
            }
            else {
                return false;
            }
        }
        resetSkewAndRotation() {
            const { visualElement } = this.options;
            if (!visualElement)
                return;
            // If there's no detected skew or rotation values, we can early return without a forced render.
            let hasDistortingTransform = false;
            /**
             * An unrolled check for rotation values. Most elements don't have any rotation and
             * skipping the nested loop and new object creation is 50% faster.
             */
            const { latestValues } = visualElement;
            if (latestValues.z ||
                latestValues.rotate ||
                latestValues.rotateX ||
                latestValues.rotateY ||
                latestValues.rotateZ ||
                latestValues.skewX ||
                latestValues.skewY) {
                hasDistortingTransform = true;
            }
            // If there's no distorting values, we don't need to do any more.
            if (!hasDistortingTransform)
                return;
            const resetValues = {};
            if (latestValues.z) {
                resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
            }
            // Check the skew and rotate value of all axes and reset to 0
            for (let i = 0; i < transformAxes.length; i++) {
                resetDistortingTransform(`rotate${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
                resetDistortingTransform(`skew${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
            }
            // Force a render of this element to apply the transform with all skews and rotations
            // set to 0.
            visualElement.render();
            // Put back all the values we reset
            for (const key in resetValues) {
                visualElement.setStaticValue(key, resetValues[key]);
                if (this.animationValues) {
                    this.animationValues[key] = resetValues[key];
                }
            }
            // Schedule a render for the next frame. This ensures we won't visually
            // see the element with the reset rotate value applied.
            visualElement.scheduleRender();
        }
        getProjectionStyles(styleProp) {
            if (!this.instance || this.isSVG)
                return undefined;
            if (!this.isVisible) {
                return hiddenVisibility;
            }
            const styles = {
                visibility: "",
            };
            const transformTemplate = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = false;
                styles.opacity = "";
                styles.pointerEvents =
                    resolveMotionValue(styleProp?.pointerEvents) || "";
                styles.transform = transformTemplate
                    ? transformTemplate(this.latestValues, "")
                    : "none";
                return styles;
            }
            const lead = this.getLead();
            if (!this.projectionDelta || !this.layout || !lead.target) {
                const emptyStyles = {};
                if (this.options.layoutId) {
                    emptyStyles.opacity =
                        this.latestValues.opacity !== undefined
                            ? this.latestValues.opacity
                            : 1;
                    emptyStyles.pointerEvents =
                        resolveMotionValue(styleProp?.pointerEvents) || "";
                }
                if (this.hasProjected && !hasTransform(this.latestValues)) {
                    emptyStyles.transform = transformTemplate
                        ? transformTemplate({}, "")
                        : "none";
                    this.hasProjected = false;
                }
                return emptyStyles;
            }
            const valuesToRender = lead.animationValues || lead.latestValues;
            this.applyTransformsToTarget();
            styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
            if (transformTemplate) {
                styles.transform = transformTemplate(valuesToRender, styles.transform);
            }
            const { x, y } = this.projectionDelta;
            styles.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
            if (lead.animationValues) {
                /**
                 * If the lead component is animating, assign this either the entering/leaving
                 * opacity
                 */
                styles.opacity =
                    lead === this
                        ? valuesToRender.opacity ??
                            this.latestValues.opacity ??
                            1
                        : this.preserveOpacity
                            ? this.latestValues.opacity
                            : valuesToRender.opacityExit;
            }
            else {
                /**
                 * Or we're not animating at all, set the lead component to its layout
                 * opacity and other components to hidden.
                 */
                styles.opacity =
                    lead === this
                        ? valuesToRender.opacity !== undefined
                            ? valuesToRender.opacity
                            : ""
                        : valuesToRender.opacityExit !== undefined
                            ? valuesToRender.opacityExit
                            : 0;
            }
            /**
             * Apply scale correction
             */
            for (const key in scaleCorrectors) {
                if (valuesToRender[key] === undefined)
                    continue;
                const { correct, applyTo, isCSSVariable } = scaleCorrectors[key];
                /**
                 * Only apply scale correction to the value if we have an
                 * active projection transform. Otherwise these values become
                 * vulnerable to distortion if the element changes size without
                 * a corresponding layout animation.
                 */
                const corrected = styles.transform === "none"
                    ? valuesToRender[key]
                    : correct(valuesToRender[key], lead);
                if (applyTo) {
                    const num = applyTo.length;
                    for (let i = 0; i < num; i++) {
                        styles[applyTo[i]] = corrected;
                    }
                }
                else {
                    // If this is a CSS variable, set it directly on the instance.
                    // Replacing this function from creating styles to setting them
                    // would be a good place to remove per frame object creation
                    if (isCSSVariable) {
                        this.options.visualElement.renderState.vars[key] = corrected;
                    }
                    else {
                        styles[key] = corrected;
                    }
                }
            }
            /**
             * Disable pointer events on follow components. This is to ensure
             * that if a follow component covers a lead component it doesn't block
             * pointer events on the lead.
             */
            if (this.options.layoutId) {
                styles.pointerEvents =
                    lead === this
                        ? resolveMotionValue(styleProp?.pointerEvents) || ""
                        : "none";
            }
            return styles;
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = undefined;
        }
        // Only run on root
        resetTree() {
            this.root.nodes.forEach((node) => node.currentAnimation?.stop());
            this.root.nodes.forEach(clearMeasurements);
            this.root.sharedNodes.clear();
        }
    };
}
function updateLayout(node) {
    node.updateLayout();
}
function notifyLayoutUpdate(node) {
    const snapshot = node.resumeFrom?.snapshot || node.snapshot;
    if (node.isLead() &&
        node.layout &&
        snapshot &&
        node.hasListeners("didUpdate")) {
        const { layoutBox: layout, measuredBox: measuredLayout } = node.layout;
        const { animationType } = node.options;
        const isShared = snapshot.source !== node.layout.source;
        // TODO Maybe we want to also resize the layout snapshot so we don't trigger
        // animations for instance if layout="size" and an element has only changed position
        if (animationType === "size") {
            eachAxis((axis) => {
                const axisSnapshot = isShared
                    ? snapshot.measuredBox[axis]
                    : snapshot.layoutBox[axis];
                const length = calcLength(axisSnapshot);
                axisSnapshot.min = layout[axis].min;
                axisSnapshot.max = axisSnapshot.min + length;
            });
        }
        else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout)) {
            eachAxis((axis) => {
                const axisSnapshot = isShared
                    ? snapshot.measuredBox[axis]
                    : snapshot.layoutBox[axis];
                const length = calcLength(layout[axis]);
                axisSnapshot.max = axisSnapshot.min + length;
                /**
                 * Ensure relative target gets resized and rerendererd
                 */
                if (node.relativeTarget && !node.currentAnimation) {
                    node.isProjectionDirty = true;
                    node.relativeTarget[axis].max =
                        node.relativeTarget[axis].min + length;
                }
            });
        }
        const layoutDelta = createDelta();
        calcBoxDelta(layoutDelta, layout, snapshot.layoutBox);
        const visualDelta = createDelta();
        if (isShared) {
            calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
        }
        else {
            calcBoxDelta(visualDelta, layout, snapshot.layoutBox);
        }
        const hasLayoutChanged = !isDeltaZero(layoutDelta);
        let hasRelativeLayoutChanged = false;
        if (!node.resumeFrom) {
            const relativeParent = node.getClosestProjectingParent();
            /**
             * If the relativeParent is itself resuming from a different element then
             * the relative snapshot is not relavent
             */
            if (relativeParent && !relativeParent.resumeFrom) {
                const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
                if (parentSnapshot && parentLayout) {
                    const relativeSnapshot = createBox();
                    calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
                    const relativeLayout = createBox();
                    calcRelativePosition(relativeLayout, layout, parentLayout.layoutBox);
                    if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
                        hasRelativeLayoutChanged = true;
                    }
                    if (relativeParent.options.layoutRoot) {
                        node.relativeTarget = relativeLayout;
                        node.relativeTargetOrigin = relativeSnapshot;
                        node.relativeParent = relativeParent;
                    }
                }
            }
        }
        node.notifyListeners("didUpdate", {
            layout,
            snapshot,
            delta: visualDelta,
            layoutDelta,
            hasLayoutChanged,
            hasRelativeLayoutChanged,
        });
    }
    else if (node.isLead()) {
        const { onExitComplete } = node.options;
        onExitComplete && onExitComplete();
    }
    /**
     * Clearing transition
     * TODO: Investigate why this transition is being passed in as {type: false } from Framer
     * and why we need it at all
     */
    node.options.transition = undefined;
}
function propagateDirtyNodes(node) {
    /**
     * Increase debug counter for nodes encountered this frame
     */
    if (buffer/* statsBuffer */.f.value) {
        metrics.nodes++;
    }
    if (!node.parent)
        return;
    /**
     * If this node isn't projecting, propagate isProjectionDirty. It will have
     * no performance impact but it will allow the next child that *is* projecting
     * but *isn't* dirty to just check its parent to see if *any* ancestor needs
     * correcting.
     */
    if (!node.isProjecting()) {
        node.isProjectionDirty = node.parent.isProjectionDirty;
    }
    /**
     * Propagate isSharedProjectionDirty and isTransformDirty
     * throughout the whole tree. A future revision can take another look at
     * this but for safety we still recalcualte shared nodes.
     */
    node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty ||
        node.parent.isProjectionDirty ||
        node.parent.isSharedProjectionDirty));
    node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
    node.isProjectionDirty =
        node.isSharedProjectionDirty =
            node.isTransformDirty =
                false;
}
function clearSnapshot(node) {
    node.clearSnapshot();
}
function clearMeasurements(node) {
    node.clearMeasurements();
}
function clearIsLayoutDirty(node) {
    node.isLayoutDirty = false;
}
function resetTransformStyle(node) {
    const { visualElement } = node.options;
    if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
        visualElement.notify("BeforeLayoutMeasure");
    }
    node.resetTransform();
}
function finishAnimation(node) {
    node.finishAnimation();
    node.targetDelta = node.relativeTarget = node.target = undefined;
    node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
    node.resolveTargetDelta();
}
function calcProjection(node) {
    node.calcProjection();
}
function resetSkewAndRotation(node) {
    node.resetSkewAndRotation();
}
function removeLeadSnapshots(stack) {
    stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
    output.translate = (0,number/* mixNumber */.t)(delta.translate, 0, p);
    output.scale = (0,number/* mixNumber */.t)(delta.scale, 1, p);
    output.origin = delta.origin;
    output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
    output.min = (0,number/* mixNumber */.t)(from.min, to.min, p);
    output.max = (0,number/* mixNumber */.t)(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
    mixAxis(output.x, from.x, to.x, p);
    mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
    return (node.animationValues && node.animationValues.opacityExit !== undefined);
}
const defaultLayoutTransition = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1],
};
const userAgentContains = (string) => typeof navigator !== "undefined" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(string);
/**
 * Measured bounding boxes must be rounded in Safari and
 * left untouched in Chrome, otherwise non-integer layouts within scaled-up elements
 * can appear to jump.
 */
const roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/")
    ? Math.round
    : noop/* noop */.Z;
function roundAxis(axis) {
    // Round to the nearest .5 pixels to support subpixel layouts
    axis.min = roundPoint(axis.min);
    axis.max = roundPoint(axis.max);
}
function roundBox(box) {
    roundAxis(box.x);
    roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout) {
    return (animationType === "position" ||
        (animationType === "preserve-aspect" &&
            !isNear(aspectRatio(snapshot), aspectRatio(layout), 0.2)));
}
function checkNodeWasScrollRoot(node) {
    return node !== node.root && node.scroll?.wasRoot;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs



const DocumentProjectionNode = createProjectionNode({
    attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => true,
});



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs



const rootProjectionNode = {
    current: undefined,
};
const HTMLProjectionNode = createProjectionNode({
    measureScroll: (instance) => ({
        x: instance.scrollLeft,
        y: instance.scrollTop,
    }),
    defaultParent: () => {
        if (!rootProjectionNode.current) {
            const documentNode = new DocumentProjectionNode({});
            documentNode.mount(window);
            documentNode.setOptions({ layoutScroll: true });
            rootProjectionNode.current = documentNode;
        }
        return rootProjectionNode.current;
    },
    resetTransform: (instance, value) => {
        instance.style.transform = value !== undefined ? value : "none";
    },
    checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed"),
});



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/drag.mjs





const drag = {
    pan: {
        Feature: PanGesture,
    },
    drag: {
        Feature: DragGesture,
        ProjectionNode: HTMLProjectionNode,
        MeasureLayout: MeasureLayout,
    },
};



// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
var resolve_elements = __webpack_require__(4647);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/gestures/utils/setup.mjs


function setupGesture(elementOrSelector, options) {
    const elements = (0,resolve_elements/* resolveElements */.I)(elementOrSelector);
    const gestureAbortController = new AbortController();
    const eventOptions = {
        passive: true,
        ...options,
        signal: gestureAbortController.signal,
    };
    const cancel = () => gestureAbortController.abort();
    return [elements, eventOptions, cancel];
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/gestures/hover.mjs



function isValidHover(event) {
    return !(event.pointerType === "touch" || isDragActive());
}
/**
 * Create a hover gesture. hover() is different to .addEventListener("pointerenter")
 * in that it has an easier syntax, filters out polyfilled touch events, interoperates
 * with drag gestures, and automatically removes the "pointerennd" event listener when the hover ends.
 *
 * @public
 */
function hover(elementOrSelector, onHoverStart, options = {}) {
    const [elements, eventOptions, cancel] = setupGesture(elementOrSelector, options);
    const onPointerEnter = (enterEvent) => {
        if (!isValidHover(enterEvent))
            return;
        const { target } = enterEvent;
        const onHoverEnd = onHoverStart(target, enterEvent);
        if (typeof onHoverEnd !== "function" || !target)
            return;
        const onPointerLeave = (leaveEvent) => {
            if (!isValidHover(leaveEvent))
                return;
            onHoverEnd(leaveEvent);
            target.removeEventListener("pointerleave", onPointerLeave);
        };
        target.addEventListener("pointerleave", onPointerLeave, eventOptions);
    };
    elements.forEach((element) => {
        element.addEventListener("pointerenter", onPointerEnter, eventOptions);
    });
    return cancel;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/hover.mjs




function handleHoverEvent(node, event, lifecycle) {
    const { props } = node;
    if (node.animationState && props.whileHover) {
        node.animationState.setActive("whileHover", lifecycle === "Start");
    }
    const eventName = ("onHover" + lifecycle);
    const callback = props[eventName];
    if (callback) {
        frameloop_frame/* frame */.Wi.postRender(() => callback(event, extractEventInfo(event)));
    }
}
class HoverGesture extends Feature {
    mount() {
        const { current } = this.node;
        if (!current)
            return;
        this.unmount = hover(current, (_element, startEvent) => {
            handleHoverEvent(this.node, startEvent, "Start");
            return (endEvent) => handleHoverEvent(this.node, endEvent, "End");
        });
    }
    unmount() { }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/focus.mjs




class FocusGesture extends Feature {
    constructor() {
        super(...arguments);
        this.isActive = false;
    }
    onFocus() {
        let isFocusVisible = false;
        /**
         * If this element doesn't match focus-visible then don't
         * apply whileHover. But, if matches throws that focus-visible
         * is not a valid selector then in that browser outline styles will be applied
         * to the element by default and we want to match that behaviour with whileFocus.
         */
        try {
            isFocusVisible = this.node.current.matches(":focus-visible");
        }
        catch (e) {
            isFocusVisible = true;
        }
        if (!isFocusVisible || !this.node.animationState)
            return;
        this.node.animationState.setActive("whileFocus", true);
        this.isActive = true;
    }
    onBlur() {
        if (!this.isActive || !this.node.animationState)
            return;
        this.node.animationState.setActive("whileFocus", false);
        this.isActive = false;
    }
    mount() {
        this.unmount = (0,pipe/* pipe */.z)(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() { }
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
const isNodeOrChild = (parent, child) => {
    if (!child) {
        return false;
    }
    else if (parent === child) {
        return true;
    }
    else {
        return isNodeOrChild(parent, child.parentElement);
    }
};



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs
const focusableElements = new Set([
    "BUTTON",
    "INPUT",
    "SELECT",
    "TEXTAREA",
    "A",
]);
function isElementKeyboardAccessible(element) {
    return (focusableElements.has(element.tagName) ||
        element.tabIndex !== -1);
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
const isPressing = new WeakSet();



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs


/**
 * Filter out events that are not "Enter" keys.
 */
function filterEvents(callback) {
    return (event) => {
        if (event.key !== "Enter")
            return;
        callback(event);
    };
}
function firePointerEvent(target, type) {
    target.dispatchEvent(new PointerEvent("pointer" + type, { isPrimary: true, bubbles: true }));
}
const enableKeyboardPress = (focusEvent, eventOptions) => {
    const element = focusEvent.currentTarget;
    if (!element)
        return;
    const handleKeydown = filterEvents(() => {
        if (isPressing.has(element))
            return;
        firePointerEvent(element, "down");
        const handleKeyup = filterEvents(() => {
            firePointerEvent(element, "up");
        });
        const handleBlur = () => firePointerEvent(element, "cancel");
        element.addEventListener("keyup", handleKeyup, eventOptions);
        element.addEventListener("blur", handleBlur, eventOptions);
    });
    element.addEventListener("keydown", handleKeydown, eventOptions);
    /**
     * Add an event listener that fires on blur to remove the keydown events.
     */
    element.addEventListener("blur", () => element.removeEventListener("keydown", handleKeydown), eventOptions);
};



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/gestures/press/index.mjs









/**
 * Filter out events that are not primary pointer events, or are triggering
 * while a Motion gesture is active.
 */
function isValidPressEvent(event) {
    return isPrimaryPointer(event) && !isDragActive();
}
/**
 * Create a press gesture.
 *
 * Press is different to `"pointerdown"`, `"pointerup"` in that it
 * automatically filters out secondary pointer events like right
 * click and multitouch.
 *
 * It also adds accessibility support for keyboards, where
 * an element with a press gesture will receive focus and
 *  trigger on Enter `"keydown"` and `"keyup"` events.
 *
 * This is different to a browser's `"click"` event, which does
 * respond to keyboards but only for the `"click"` itself, rather
 * than the press start and end/cancel. The element also needs
 * to be focusable for this to work, whereas a press gesture will
 * make an element focusable by default.
 *
 * @public
 */
function press(targetOrSelector, onPressStart, options = {}) {
    const [targets, eventOptions, cancelEvents] = setupGesture(targetOrSelector, options);
    const startPress = (startEvent) => {
        const target = startEvent.currentTarget;
        if (!isValidPressEvent(startEvent))
            return;
        isPressing.add(target);
        const onPressEnd = onPressStart(target, startEvent);
        const onPointerEnd = (endEvent, success) => {
            window.removeEventListener("pointerup", onPointerUp);
            window.removeEventListener("pointercancel", onPointerCancel);
            if (isPressing.has(target)) {
                isPressing.delete(target);
            }
            if (!isValidPressEvent(endEvent)) {
                return;
            }
            if (typeof onPressEnd === "function") {
                onPressEnd(endEvent, { success });
            }
        };
        const onPointerUp = (upEvent) => {
            onPointerEnd(upEvent, target === window ||
                target === document ||
                options.useGlobalTarget ||
                isNodeOrChild(target, upEvent.target));
        };
        const onPointerCancel = (cancelEvent) => {
            onPointerEnd(cancelEvent, false);
        };
        window.addEventListener("pointerup", onPointerUp, eventOptions);
        window.addEventListener("pointercancel", onPointerCancel, eventOptions);
    };
    targets.forEach((target) => {
        const pointerDownTarget = options.useGlobalTarget ? window : target;
        pointerDownTarget.addEventListener("pointerdown", startPress, eventOptions);
        if ((0,is_html_element/* isHTMLElement */.R)(target)) {
            target.addEventListener("focus", (event) => enableKeyboardPress(event, eventOptions));
            if (!isElementKeyboardAccessible(target) &&
                !target.hasAttribute("tabindex")) {
                target.tabIndex = 0;
            }
        }
    });
    return cancelEvents;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/press.mjs




function handlePressEvent(node, event, lifecycle) {
    const { props } = node;
    if (node.current instanceof HTMLButtonElement && node.current.disabled) {
        return;
    }
    if (node.animationState && props.whileTap) {
        node.animationState.setActive("whileTap", lifecycle === "Start");
    }
    const eventName = ("onTap" + (lifecycle === "End" ? "" : lifecycle));
    const callback = props[eventName];
    if (callback) {
        frameloop_frame/* frame */.Wi.postRender(() => callback(event, extractEventInfo(event)));
    }
}
class PressGesture extends Feature {
    mount() {
        const { current } = this.node;
        if (!current)
            return;
        this.unmount = press(current, (_element, startEvent) => {
            handlePressEvent(this.node, startEvent, "Start");
            return (endEvent, { success }) => handlePressEvent(this.node, endEvent, success ? "End" : "Cancel");
        }, { useGlobalTarget: this.node.props.globalTapTarget });
    }
    unmount() { }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */
const observerCallbacks = new WeakMap();
/**
 * Multiple observers can be created for multiple element/document roots. Each with
 * different settings. So here we store dictionaries of observers to each root,
 * using serialised settings (threshold/margin) as lookup keys.
 */
const observers = new WeakMap();
const fireObserverCallback = (entry) => {
    const callback = observerCallbacks.get(entry.target);
    callback && callback(entry);
};
const fireAllObserverCallbacks = (entries) => {
    entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
    const lookupRoot = root || document;
    /**
     * If we don't have an observer lookup map for this root, create one.
     */
    if (!observers.has(lookupRoot)) {
        observers.set(lookupRoot, {});
    }
    const rootObservers = observers.get(lookupRoot);
    const key = JSON.stringify(options);
    /**
     * If we don't have an observer for this combination of root and settings,
     * create one.
     */
    if (!rootObservers[key]) {
        rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
    }
    return rootObservers[key];
}
function observeIntersection(element, options, callback) {
    const rootInteresectionObserver = initIntersectionObserver(options);
    observerCallbacks.set(element, callback);
    rootInteresectionObserver.observe(element);
    return () => {
        observerCallbacks.delete(element);
        rootInteresectionObserver.unobserve(element);
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs



const thresholdNames = {
    some: 0,
    all: 1,
};
class InViewFeature extends Feature {
    constructor() {
        super(...arguments);
        this.hasEnteredView = false;
        this.isInView = false;
    }
    startObserver() {
        this.unmount();
        const { viewport = {} } = this.node.getProps();
        const { root, margin: rootMargin, amount = "some", once } = viewport;
        const options = {
            root: root ? root.current : undefined,
            rootMargin,
            threshold: typeof amount === "number" ? amount : thresholdNames[amount],
        };
        const onIntersectionUpdate = (entry) => {
            const { isIntersecting } = entry;
            /**
             * If there's been no change in the viewport state, early return.
             */
            if (this.isInView === isIntersecting)
                return;
            this.isInView = isIntersecting;
            /**
             * Handle hasEnteredView. If this is only meant to run once, and
             * element isn't visible, early return. Otherwise set hasEnteredView to true.
             */
            if (once && !isIntersecting && this.hasEnteredView) {
                return;
            }
            else if (isIntersecting) {
                this.hasEnteredView = true;
            }
            if (this.node.animationState) {
                this.node.animationState.setActive("whileInView", isIntersecting);
            }
            /**
             * Use the latest committed props rather than the ones in scope
             * when this observer is created
             */
            const { onViewportEnter, onViewportLeave } = this.node.getProps();
            const callback = isIntersecting ? onViewportEnter : onViewportLeave;
            callback && callback(entry);
        };
        return observeIntersection(this.node.current, options, onIntersectionUpdate);
    }
    mount() {
        this.startObserver();
    }
    update() {
        if (typeof IntersectionObserver === "undefined")
            return;
        const { props, prevProps } = this.node;
        const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
        if (hasOptionsChanged) {
            this.startObserver();
        }
    }
    unmount() { }
}
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
    return (name) => viewport[name] !== prevViewport[name];
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/gestures.mjs





const gestureAnimations = {
    inView: {
        Feature: InViewFeature,
    },
    tap: {
        Feature: PressGesture,
    },
    focus: {
        Feature: FocusGesture,
    },
    hover: {
        Feature: HoverGesture,
    },
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/layout.mjs



const layout = {
    layout: {
        ProjectionNode: HTMLProjectionNode,
        MeasureLayout: MeasureLayout,
    },
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/LazyContext.mjs
"use client";


const LazyContext = (0,react_.createContext)({ strict: false });



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var MotionConfigContext = __webpack_require__(5248);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
"use client";


const MotionContext = /* @__PURE__ */ (0,react_.createContext)({});



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs




function isControllingVariants(props) {
    return (isAnimationControls(props.animate) ||
        variantProps.some((name) => isVariantLabel(props[name])));
}
function isVariantNode(props) {
    return Boolean(isControllingVariants(props) || props.variants);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs



function getCurrentTreeVariants(props, context) {
    if (isControllingVariants(props)) {
        const { initial, animate } = props;
        return {
            initial: initial === false || isVariantLabel(initial)
                ? initial
                : undefined,
            animate: isVariantLabel(animate) ? animate : undefined,
        };
    }
    return props.inherit !== false ? context : {};
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/MotionContext/create.mjs




function useCreateMotionContext(props) {
    const { initial, animate } = getCurrentTreeVariants(props, (0,react_.useContext)(MotionContext));
    return (0,react_.useMemo)(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/is-browser.mjs
var is_browser = __webpack_require__(8066);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/definitions.mjs
const featureProps = {
    animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
};
const featureDefinitions = {};
for (const key in featureProps) {
    featureDefinitions[key] = {
        isEnabled: (props) => featureProps[key].some((name) => !!props[name]),
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/load-features.mjs


function loadFeatures(features) {
    for (const key in features) {
        featureDefinitions[key] = {
            ...featureDefinitions[key],
            ...features[key],
        };
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
const motionComponentSymbol = Symbol.for("motionComponentSymbol");



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs



/**
 * Creates a ref function that, when called, hydrates the provided
 * external ref and VisualElement.
 */
function useMotionRef(visualState, visualElement, externalRef) {
    return (0,react_.useCallback)((instance) => {
        if (instance) {
            visualState.onMount && visualState.onMount(instance);
        }
        if (visualElement) {
            if (instance) {
                visualElement.mount(instance);
            }
            else {
                visualElement.unmount();
            }
        }
        if (externalRef) {
            if (typeof externalRef === "function") {
                externalRef(instance);
            }
            else if (isRefObject(externalRef)) {
                externalRef.current = instance;
            }
        }
    }, 
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [visualElement]);
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var PresenceContext = __webpack_require__(9386);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var use_isomorphic_effect = __webpack_require__(381);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs











function useVisualElement(Component, visualState, props, createVisualElement, ProjectionNodeConstructor) {
    const { visualElement: parent } = (0,react_.useContext)(MotionContext);
    const lazyContext = (0,react_.useContext)(LazyContext);
    const presenceContext = (0,react_.useContext)(PresenceContext/* PresenceContext */.O);
    const reducedMotionConfig = (0,react_.useContext)(MotionConfigContext/* MotionConfigContext */._).reducedMotion;
    const visualElementRef = (0,react_.useRef)(null);
    /**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */
    createVisualElement = createVisualElement || lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
        visualElementRef.current = createVisualElement(Component, {
            visualState,
            parent,
            props,
            presenceContext,
            blockInitialAnimation: presenceContext
                ? presenceContext.initial === false
                : false,
            reducedMotionConfig,
        });
    }
    const visualElement = visualElementRef.current;
    /**
     * Load Motion gesture and animation features. These are rendered as renderless
     * components so each feature can optionally make use of React lifecycle methods.
     */
    const initialLayoutGroupConfig = (0,react_.useContext)(SwitchLayoutGroupContext);
    if (visualElement &&
        !visualElement.projection &&
        ProjectionNodeConstructor &&
        (visualElement.type === "html" || visualElement.type === "svg")) {
        use_visual_element_createProjectionNode(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
    }
    const isMounted = (0,react_.useRef)(false);
    (0,react_.useInsertionEffect)(() => {
        /**
         * Check the component has already mounted before calling
         * `update` unnecessarily. This ensures we skip the initial update.
         */
        if (visualElement && isMounted.current) {
            visualElement.update(props, presenceContext);
        }
    });
    /**
     * Cache this value as we want to know whether HandoffAppearAnimations
     * was present on initial render - it will be deleted after this.
     */
    const optimisedAppearId = props[optimizedAppearDataAttribute];
    const wantsHandoff = (0,react_.useRef)(Boolean(optimisedAppearId) &&
        !window.MotionHandoffIsComplete?.(optimisedAppearId) &&
        window.MotionHasOptimisedAnimation?.(optimisedAppearId));
    (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.L)(() => {
        if (!visualElement)
            return;
        isMounted.current = true;
        window.MotionIsMounted = true;
        visualElement.updateFeatures();
        microtask.render(visualElement.render);
        /**
         * Ideally this function would always run in a useEffect.
         *
         * However, if we have optimised appear animations to handoff from,
         * it needs to happen synchronously to ensure there's no flash of
         * incorrect styles in the event of a hydration error.
         *
         * So if we detect a situtation where optimised appear animations
         * are running, we use useLayoutEffect to trigger animations.
         */
        if (wantsHandoff.current && visualElement.animationState) {
            visualElement.animationState.animateChanges();
        }
    });
    (0,react_.useEffect)(() => {
        if (!visualElement)
            return;
        if (!wantsHandoff.current && visualElement.animationState) {
            visualElement.animationState.animateChanges();
        }
        if (wantsHandoff.current) {
            // This ensures all future calls to animateChanges() in this component will run in useEffect
            queueMicrotask(() => {
                window.MotionHandoffMarkAsComplete?.(optimisedAppearId);
            });
            wantsHandoff.current = false;
        }
    });
    return visualElement;
}
function use_visual_element_createProjectionNode(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
    const { layoutId, layout, drag, dragConstraints, layoutScroll, layoutRoot, layoutCrossfade, } = props;
    visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"]
        ? undefined
        : getClosestProjectingNode(visualElement.parent));
    visualElement.projection.setOptions({
        layoutId,
        layout,
        alwaysMeasureLayout: Boolean(drag) || (dragConstraints && isRefObject(dragConstraints)),
        visualElement,
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof layout === "string" ? layout : "both",
        initialPromotionConfig,
        crossfade: layoutCrossfade,
        layoutScroll,
        layoutRoot,
    });
}
function getClosestProjectingNode(visualElement) {
    if (!visualElement)
        return undefined;
    return visualElement.options.allowProjection !== false
        ? visualElement.projection
        : getClosestProjectingNode(visualElement.parent);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/index.mjs
"use client";















/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 */
function createRendererMotionComponent({ preloadedFeatures, createVisualElement, useRender, useVisualState, Component, }) {
    preloadedFeatures && loadFeatures(preloadedFeatures);
    function MotionComponent(props, externalRef) {
        /**
         * If we need to measure the element we load this functionality in a
         * separate class component in order to gain access to getSnapshotBeforeUpdate.
         */
        let MeasureLayout;
        const configAndProps = {
            ...(0,react_.useContext)(MotionConfigContext/* MotionConfigContext */._),
            ...props,
            layoutId: useLayoutId(props),
        };
        const { isStatic } = configAndProps;
        const context = useCreateMotionContext(props);
        const visualState = useVisualState(props, isStatic);
        if (!isStatic && is_browser/* isBrowser */.j) {
            useStrictMode(configAndProps, preloadedFeatures);
            const layoutProjection = getProjectionFunctionality(configAndProps);
            MeasureLayout = layoutProjection.MeasureLayout;
            /**
             * Create a VisualElement for this component. A VisualElement provides a common
             * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
             * providing a way of rendering to these APIs outside of the React render loop
             * for more performant animations and interactions
             */
            context.visualElement = useVisualElement(Component, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode);
        }
        /**
         * The mount order and hierarchy is specific to ensure our element ref
         * is hydrated by the time features fire their effects.
         */
        return ((0,jsx_runtime_.jsxs)(MotionContext.Provider, { value: context, children: [MeasureLayout && context.visualElement ? ((0,jsx_runtime_.jsx)(MeasureLayout, { visualElement: context.visualElement, ...configAndProps })) : null, useRender(Component, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement)] }));
    }
    MotionComponent.displayName = `motion.${typeof Component === "string"
        ? Component
        : `create(${Component.displayName ?? Component.name ?? ""})`}`;
    const ForwardRefMotionComponent = (0,react_.forwardRef)(MotionComponent);
    ForwardRefMotionComponent[motionComponentSymbol] = Component;
    return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
    const layoutGroupId = (0,react_.useContext)(LayoutGroupContext/* LayoutGroupContext */.p).id;
    return layoutGroupId && layoutId !== undefined
        ? layoutGroupId + "-" + layoutId
        : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
    const isStrict = (0,react_.useContext)(LazyContext).strict;
    /**
     * If we're in development mode, check to make sure we're not rendering a motion component
     * as a child of LazyMotion, as this will break the file-size benefits of using it.
     */
    if (false) {}
}
function getProjectionFunctionality(props) {
    const { drag, layout } = featureDefinitions;
    if (!drag && !layout)
        return {};
    const combined = { ...drag, ...layout };
    return {
        MeasureLayout: drag?.isEnabled(props) || layout?.isEnabled(props)
            ? combined.MeasureLayout
            : undefined,
        ProjectionNode: combined.ProjectionNode,
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs



function isForcedMotionValue(key, { layout, layoutId }) {
    return (transformProps.has(key) ||
        key.startsWith("origin") ||
        ((layout || layoutId !== undefined) &&
            (!!scaleCorrectors[key] || key === "opacity")));
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
const getValueAsType = (value, type) => {
    return type && typeof value === "number"
        ? type.transform(value)
        : value;
};



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/int.mjs


const int_int = {
    ...numbers/* number */.Rx,
    transform: Math.round,
};



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/maps/transform.mjs



const transformValueTypes = {
    rotate: units/* degrees */.RW,
    rotateX: units/* degrees */.RW,
    rotateY: units/* degrees */.RW,
    rotateZ: units/* degrees */.RW,
    scale: numbers/* scale */.bA,
    scaleX: numbers/* scale */.bA,
    scaleY: numbers/* scale */.bA,
    scaleZ: numbers/* scale */.bA,
    skew: units/* degrees */.RW,
    skewX: units/* degrees */.RW,
    skewY: units/* degrees */.RW,
    distance: units.px,
    translateX: units.px,
    translateY: units.px,
    translateZ: units.px,
    x: units.px,
    y: units.px,
    z: units.px,
    perspective: units.px,
    transformPerspective: units.px,
    opacity: numbers/* alpha */.Fq,
    originX: units/* progressPercentage */.$C,
    originY: units/* progressPercentage */.$C,
    originZ: units.px,
};



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/maps/number.mjs





const numberValueTypes = {
    // Border props
    borderWidth: units.px,
    borderTopWidth: units.px,
    borderRightWidth: units.px,
    borderBottomWidth: units.px,
    borderLeftWidth: units.px,
    borderRadius: units.px,
    radius: units.px,
    borderTopLeftRadius: units.px,
    borderTopRightRadius: units.px,
    borderBottomRightRadius: units.px,
    borderBottomLeftRadius: units.px,
    // Positioning props
    width: units.px,
    maxWidth: units.px,
    height: units.px,
    maxHeight: units.px,
    top: units.px,
    right: units.px,
    bottom: units.px,
    left: units.px,
    // Spacing props
    padding: units.px,
    paddingTop: units.px,
    paddingRight: units.px,
    paddingBottom: units.px,
    paddingLeft: units.px,
    margin: units.px,
    marginTop: units.px,
    marginRight: units.px,
    marginBottom: units.px,
    marginLeft: units.px,
    // Misc
    backgroundPositionX: units.px,
    backgroundPositionY: units.px,
    ...transformValueTypes,
    zIndex: int_int,
    // SVG
    fillOpacity: numbers/* alpha */.Fq,
    strokeOpacity: numbers/* alpha */.Fq,
    numOctaves: int_int,
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs


const translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
};
const numTransforms = transformPropOrder.length;
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
function buildTransform(latestValues, transform, transformTemplate) {
    // The transform string we're going to build into.
    let transformString = "";
    let transformIsDefault = true;
    /**
     * Loop over all possible transforms in order, adding the ones that
     * are present to the transform string.
     */
    for (let i = 0; i < numTransforms; i++) {
        const key = transformPropOrder[i];
        const value = latestValues[key];
        if (value === undefined)
            continue;
        let valueIsDefault = true;
        if (typeof value === "number") {
            valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
        }
        else {
            valueIsDefault = parseFloat(value) === 0;
        }
        if (!valueIsDefault || transformTemplate) {
            const valueAsType = getValueAsType(value, numberValueTypes[key]);
            if (!valueIsDefault) {
                transformIsDefault = false;
                const transformName = translateAlias[key] || key;
                transformString += `${transformName}(${valueAsType}) `;
            }
            if (transformTemplate) {
                transform[key] = valueAsType;
            }
        }
    }
    transformString = transformString.trim();
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) {
        transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    }
    else if (transformIsDefault) {
        transformString = "none";
    }
    return transformString;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs



function buildHTMLStyles(state, latestValues, transformTemplate) {
    const { style, vars, transformOrigin } = state;
    // Track whether we encounter any transform or transformOrigin values.
    let hasTransform = false;
    let hasTransformOrigin = false;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept separately for further processing.
     */
    for (const key in latestValues) {
        const value = latestValues[key];
        if (transformProps.has(key)) {
            // If this is a transform, flag to enable further transform processing
            hasTransform = true;
            continue;
        }
        else if ((0,is_css_variable/* isCSSVariableName */.f)(key)) {
            vars[key] = value;
            continue;
        }
        else {
            // Convert the value to its default value type, ie 0 -> "0px"
            const valueAsType = getValueAsType(value, numberValueTypes[key]);
            if (key.startsWith("origin")) {
                // If this is a transform origin, flag and enable further transform-origin processing
                hasTransformOrigin = true;
                transformOrigin[key] =
                    valueAsType;
            }
            else {
                style[key] = valueAsType;
            }
        }
    }
    if (!latestValues.transform) {
        if (hasTransform || transformTemplate) {
            style.transform = buildTransform(latestValues, state.transform, transformTemplate);
        }
        else if (style.transform) {
            /**
             * If we have previously created a transform but currently don't have any,
             * reset transform style to none.
             */
            style.transform = "none";
        }
    }
    /**
     * Build a transformOrigin style. Uses the same defaults as the browser for
     * undefined origins.
     */
    if (hasTransformOrigin) {
        const { originX = "50%", originY = "50%", originZ = 0, } = transformOrigin;
        style.transformOrigin = `${originX} ${originY} ${originZ}`;
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
const createHtmlRenderState = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {},
});



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/use-props.mjs






function copyRawValuesOnly(target, source, props) {
    for (const key in source) {
        if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
            target[key] = source[key];
        }
    }
}
function useInitialMotionValues({ transformTemplate }, visualState) {
    return (0,react_.useMemo)(() => {
        const state = createHtmlRenderState();
        buildHTMLStyles(state, visualState, transformTemplate);
        return Object.assign({}, state.vars, state.style);
    }, [visualState]);
}
function useStyle(props, visualState) {
    const styleProp = props.style || {};
    const style = {};
    /**
     * Copy non-Motion Values straight into style
     */
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState));
    return style;
}
function useHTMLProps(props, visualState) {
    // The `any` isn't ideal but it is the type of createElement props argument
    const htmlProps = {};
    const style = useStyle(props, visualState);
    if (props.drag && props.dragListener !== false) {
        // Disable the ghost element when a user drags
        htmlProps.draggable = false;
        // Disable text selection
        style.userSelect =
            style.WebkitUserSelect =
                style.WebkitTouchCallout =
                    "none";
        // Disable scrolling on the draggable direction
        style.touchAction =
            props.drag === true
                ? "none"
                : `pan-${props.drag === "x" ? "y" : "x"}`;
    }
    if (props.tabIndex === undefined &&
        (props.onTap || props.onTapStart || props.whileTap)) {
        htmlProps.tabIndex = 0;
    }
    htmlProps.style = style;
    return htmlProps;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/path.mjs


const dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray",
};
const camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray",
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
    // Normalise path length by setting SVG attribute pathLength to 1
    attrs.pathLength = 1;
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    const keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset
    attrs[keys.offset] = units.px.transform(-offset);
    // Build the dash array
    const pathLength = units.px.transform(length);
    const pathSpacing = units.px.transform(spacing);
    attrs[keys.array] = `${pathLength} ${pathSpacing}`;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs



/**
 * Build SVG visual attrbutes, like cx and style.transform
 */
function buildSVGAttrs(state, { attrX, attrY, attrScale, pathLength, pathSpacing = 1, pathOffset = 0, 
// This is object creation, which we try to avoid per-frame.
...latest }, isSVGTag, transformTemplate, styleProp) {
    buildHTMLStyles(state, latest, transformTemplate);
    /**
     * For svg tags we just want to make sure viewBox is animatable and treat all the styles
     * as normal HTML tags.
     */
    if (isSVGTag) {
        if (state.style.viewBox) {
            state.attrs.viewBox = state.style.viewBox;
        }
        return;
    }
    state.attrs = state.style;
    state.style = {};
    const { attrs, style } = state;
    /**
     * However, we apply transforms as CSS transforms.
     * So if we detect a transform, transformOrigin we take it from attrs and copy it into style.
     */
    if (attrs.transform) {
        style.transform = attrs.transform;
        delete attrs.transform;
    }
    if (style.transform || attrs.transformOrigin) {
        style.transformOrigin = attrs.transformOrigin ?? "50% 50%";
        delete attrs.transformOrigin;
    }
    if (style.transform) {
        /**
         * SVG's element transform-origin uses its own median as a reference.
         * Therefore, transformBox becomes a fill-box
         */
        style.transformBox = styleProp?.transformBox ?? "fill-box";
        delete attrs.transformBox;
    }
    // Render attrX/attrY/attrScale as attributes
    if (attrX !== undefined)
        attrs.x = attrX;
    if (attrY !== undefined)
        attrs.y = attrY;
    if (attrScale !== undefined)
        attrs.scale = attrScale;
    // Build SVG path if one has been defined
    if (pathLength !== undefined) {
        buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs


const createSvgRenderState = () => ({
    ...createHtmlRenderState(),
    attrs: {},
});



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs
const isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/use-props.mjs






function useSVGProps(props, visualState, _isStatic, Component) {
    const visualProps = (0,react_.useMemo)(() => {
        const state = createSvgRenderState();
        buildSVGAttrs(state, visualState, isSVGTag(Component), props.transformTemplate, props.style);
        return {
            ...state.attrs,
            style: { ...state.style },
        };
    }, [visualState]);
    if (props.style) {
        const rawStyles = {};
        copyRawValuesOnly(rawStyles, props.style, props);
        visualProps.style = { ...rawStyles, ...visualProps.style };
    }
    return visualProps;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
/**
 * A list of all valid MotionProps.
 *
 * @privateRemarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
const validMotionProps = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport",
]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
function isValidMotionProp(key) {
    return (key.startsWith("while") ||
        (key.startsWith("drag") && key !== "draggable") ||
        key.startsWith("layout") ||
        key.startsWith("onTap") ||
        key.startsWith("onPan") ||
        key.startsWith("onLayout") ||
        validMotionProps.has(key));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs


let shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
    if (typeof isValidProp !== "function")
        return;
    // Explicitly filter our events
    shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */
try {
    /**
     * We attempt to import this package but require won't be defined in esm environments, in that case
     * isPropValid will have to be provided via `MotionContext`. In a 6.0.0 this should probably be removed
     * in favour of explicit injection.
     */
    loadExternalIsValidProp(require("@emotion/is-prop-valid").default);
}
catch {
    // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterProps(props, isDom, forwardMotionProps) {
    const filteredProps = {};
    for (const key in props) {
        /**
         * values is considered a valid prop by Emotion, so if it's present
         * this will be rendered out to the DOM unless explicitly filtered.
         *
         * We check the type as it could be used with the `feColorMatrix`
         * element, which we support.
         */
        if (key === "values" && typeof props.values === "object")
            continue;
        if (shouldForward(key) ||
            (forwardMotionProps === true && isValidMotionProp(key)) ||
            (!isDom && !isValidMotionProp(key)) ||
            // If trying to use native HTML drag events, forward drag listeners
            (props["draggable"] &&
                key.startsWith("onDrag"))) {
            filteredProps[key] =
                props[key];
        }
    }
    return filteredProps;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
/**
 * We keep these listed separately as we use the lowercase tag names as part
 * of the runtime bundle to detect SVG components
 */
const lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
];



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs


function isSVGComponent(Component) {
    if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component !== "string" ||
        /**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */
        Component.includes("-")) {
        return false;
    }
    else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    lowercaseSVGElements.indexOf(Component) > -1 ||
        /**
         * If it contains a capital letter, it's an SVG component
         */
        /[A-Z]/u.test(Component)) {
        return true;
    }
    return false;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/use-render.mjs







function createUseRender(forwardMotionProps = false) {
    const useRender = (Component, props, ref, { latestValues }, isStatic) => {
        const useVisualProps = isSVGComponent(Component)
            ? useSVGProps
            : useHTMLProps;
        const visualProps = useVisualProps(props, latestValues, isStatic, Component);
        const filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
        const elementProps = Component !== react_.Fragment
            ? { ...filteredProps, ...visualProps, ref }
            : {};
        /**
         * If component has been handed a motion value as its child,
         * memoise its initial value and render that. Subsequent updates
         * will be handled by the onChange handler
         */
        const { children } = props;
        const renderedChildren = (0,react_.useMemo)(() => (isMotionValue(children) ? children.get() : children), [children]);
        return (0,react_.createElement)(Component, {
            ...elementProps,
            children: renderedChildren,
        });
    };
    return useRender;
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.mjs
var use_constant = __webpack_require__(4349);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs









function makeState({ scrapeMotionValuesFromProps, createRenderState, }, props, context, presenceContext) {
    const state = {
        latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
        renderState: createRenderState(),
    };
    return state;
}
const makeUseVisualState = (config) => (props, isStatic) => {
    const context = (0,react_.useContext)(MotionContext);
    const presenceContext = (0,react_.useContext)(PresenceContext/* PresenceContext */.O);
    const make = () => makeState(config, props, context, presenceContext);
    return isStatic ? make() : (0,use_constant/* useConstant */.h)(make);
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    const values = {};
    const motionValues = scrapeMotionValues(props, {});
    for (const key in motionValues) {
        values[key] = resolveMotionValue(motionValues[key]);
    }
    let { initial, animate } = props;
    const isControllingVariants$1 = isControllingVariants(props);
    const isVariantNode$1 = isVariantNode(props);
    if (context &&
        isVariantNode$1 &&
        !isControllingVariants$1 &&
        props.inherit !== false) {
        if (initial === undefined)
            initial = context.initial;
        if (animate === undefined)
            animate = context.animate;
    }
    let isInitialAnimationBlocked = presenceContext
        ? presenceContext.initial === false
        : false;
    isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
    const variantToSet = isInitialAnimationBlocked ? animate : initial;
    if (variantToSet &&
        typeof variantToSet !== "boolean" &&
        !isAnimationControls(variantToSet)) {
        const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
        for (let i = 0; i < list.length; i++) {
            const resolved = resolveVariantFromProps(props, list[i]);
            if (resolved) {
                const { transitionEnd, transition, ...target } = resolved;
                for (const key in target) {
                    let valueTarget = target[key];
                    if (Array.isArray(valueTarget)) {
                        /**
                         * Take final keyframe if the initial animation is blocked because
                         * we want to initialise at the end of that blocked animation.
                         */
                        const index = isInitialAnimationBlocked
                            ? valueTarget.length - 1
                            : 0;
                        valueTarget = valueTarget[index];
                    }
                    if (valueTarget !== null) {
                        values[key] = valueTarget;
                    }
                }
                for (const key in transitionEnd) {
                    values[key] = transitionEnd[key];
                }
            }
        }
    }
    return values;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs



function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    const { style } = props;
    const newValues = {};
    for (const key in style) {
        if (isMotionValue(style[key]) ||
            (prevProps.style &&
                isMotionValue(prevProps.style[key])) ||
            isForcedMotionValue(key, props) ||
            visualElement?.getValue(key)?.liveStyle !== undefined) {
            newValues[key] = style[key];
        }
    }
    return newValues;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/config-motion.mjs




const htmlMotionConfig = {
    useVisualState: makeUseVisualState({
        scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
        createRenderState: createHtmlRenderState,
    }),
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs



function scrape_motion_values_scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    const newValues = scrapeMotionValuesFromProps(props, prevProps, visualElement);
    for (const key in props) {
        if (isMotionValue(props[key]) ||
            isMotionValue(prevProps[key])) {
            const targetKey = transformPropOrder.indexOf(key) !== -1
                ? "attr" + key.charAt(0).toUpperCase() + key.substring(1)
                : key;
            newValues[targetKey] = props[key];
        }
    }
    return newValues;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/config-motion.mjs




const svgMotionConfig = {
    useVisualState: makeUseVisualState({
        scrapeMotionValuesFromProps: scrape_motion_values_scrapeMotionValuesFromProps,
        createRenderState: createSvgRenderState,
    }),
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/components/create-factory.mjs






function createMotionComponentFactory(preloadedFeatures, createVisualElement) {
    return function createMotionComponent(Component, { forwardMotionProps } = { forwardMotionProps: false }) {
        const baseConfig = isSVGComponent(Component)
            ? svgMotionConfig
            : htmlMotionConfig;
        const config = {
            ...baseConfig,
            preloadedFeatures,
            useRender: createUseRender(forwardMotionProps),
            createVisualElement,
            Component,
        };
        return createRendererMotionComponent(config);
    };
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/auto.mjs
/**
 * ValueType for "auto"
 */
const auto = {
    test: (v) => v === "auto",
    parse: (v) => v,
};



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/test.mjs
/**
 * Tests a provided value against a ValueType
 */
const testValueType = (v) => (type) => type.test(v);



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/dimensions.mjs





/**
 * A list of value types commonly used for dimensions
 */
const dimensionValueTypes = [numbers/* number */.Rx, units.px, units/* percent */.aQ, units/* degrees */.RW, units.vw, units.vh, auto];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */
const findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));



;// CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/is-numerical-string.mjs
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
const isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs



/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
const splitCSSVariableRegex = 
// eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(current) {
    const match = splitCSSVariableRegex.exec(current);
    if (!match)
        return [,];
    const [, token1, token2, fallback] = match;
    return [`--${token1 ?? token2}`, fallback];
}
const maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
    (0,errors/* invariant */.k)(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
    const [token, fallback] = parseCSSVariable(current);
    // No CSS variable detected
    if (!token)
        return;
    // Attempt to read this CSS variable off the element
    const resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        const trimmed = resolved.trim();
        return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
    }
    return (0,is_css_variable/* isCSSVariableToken */.t)(fallback)
        ? getVariableValue(fallback, element, depth + 1)
        : fallback;
}



;// CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/is-zero-value-string.mjs
/**
 * Check if the value is a zero value string like "0px" or "0%"
 */
const isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs


function isNone(value) {
    if (typeof value === "number") {
        return value === 0;
    }
    else if (value !== null) {
        return value === "none" || value === "0" || isZeroValueString(value);
    }
    else {
        return true;
    }
}



// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/value/types/utils/float-regex.mjs
var float_regex = __webpack_require__(8278);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/complex/filter.mjs



/**
 * Properties that should default to 1 or 100%
 */
const maxDefaults = new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
    const [name, value] = v.slice(0, -1).split("(");
    if (name === "drop-shadow")
        return v;
    const [number] = value.match(float_regex/* floatRegex */.K) || [];
    if (!number)
        return v;
    const unit = value.replace(number, "");
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number !== value)
        defaultValue *= 100;
    return name + "(" + defaultValue + unit + ")";
}
const functionRegex = /\b([a-z-]*)\(.*?\)/gu;
const filter = {
    ...complex/* complex */.P,
    getAnimatableNone: (v) => {
        const functions = v.match(functionRegex);
        return functions ? functions.map(applyDefaultFilter).join(" ") : v;
    },
};



// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/value/types/color/index.mjs
var color = __webpack_require__(6266);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/maps/defaults.mjs




/**
 * A map of default value types for common values
 */
const defaultValueTypes = {
    ...numberValueTypes,
    // Color props
    color: color/* color */.$,
    backgroundColor: color/* color */.$,
    outlineColor: color/* color */.$,
    fill: color/* color */.$,
    stroke: color/* color */.$,
    // Border props
    borderColor: color/* color */.$,
    borderTopColor: color/* color */.$,
    borderRightColor: color/* color */.$,
    borderBottomColor: color/* color */.$,
    borderLeftColor: color/* color */.$,
    filter: filter,
    WebkitFilter: filter,
};
/**
 * Gets the default ValueType for the provided value key
 */
const getDefaultValueType = (key) => defaultValueTypes[key];



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs




function getAnimatableNone(key, value) {
    let defaultValueType = getDefaultValueType(key);
    if (defaultValueType !== filter)
        defaultValueType = complex/* complex */.P;
    // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
    return defaultValueType.getAnimatableNone
        ? defaultValueType.getAnimatableNone(value)
        : undefined;
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs



/**
 * If we encounter keyframes like "none" or "0" and we also have keyframes like
 * "#fff" or "200px 200px" we want to find a keyframe to serve as a template for
 * the "none" keyframes. In this case "#fff" or "200px 200px" - then these get turned into
 * zero equivalents, i.e. "#fff0" or "0px 0px".
 */
const invalidTemplates = new Set(["auto", "none", "0"]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
    let i = 0;
    let animatableTemplate = undefined;
    while (i < unresolvedKeyframes.length && !animatableTemplate) {
        const keyframe = unresolvedKeyframes[i];
        if (typeof keyframe === "string" &&
            !invalidTemplates.has(keyframe) &&
            (0,complex/* analyseComplexValue */.V)(keyframe).values.length) {
            animatableTemplate = unresolvedKeyframes[i];
        }
        i++;
    }
    if (animatableTemplate && name) {
        for (const noneIndex of noneKeyframeIndexes) {
            unresolvedKeyframes[noneIndex] = getAnimatableNone(name, animatableTemplate);
        }
    }
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs









class DOMKeyframesResolver extends KeyframeResolver {
    constructor(unresolvedKeyframes, onComplete, name, motionValue, element) {
        super(unresolvedKeyframes, onComplete, name, motionValue, element, true);
    }
    readKeyframes() {
        const { unresolvedKeyframes, element, name } = this;
        if (!element || !element.current)
            return;
        super.readKeyframes();
        /**
         * If any keyframe is a CSS variable, we need to find its value by sampling the element
         */
        for (let i = 0; i < unresolvedKeyframes.length; i++) {
            let keyframe = unresolvedKeyframes[i];
            if (typeof keyframe === "string") {
                keyframe = keyframe.trim();
                if ((0,is_css_variable/* isCSSVariableToken */.t)(keyframe)) {
                    const resolved = getVariableValue(keyframe, element.current);
                    if (resolved !== undefined) {
                        unresolvedKeyframes[i] = resolved;
                    }
                    if (i === unresolvedKeyframes.length - 1) {
                        this.finalKeyframe = keyframe;
                    }
                }
            }
        }
        /**
         * Resolve "none" values. We do this potentially twice - once before and once after measuring keyframes.
         * This could be seen as inefficient but it's a trade-off to avoid measurements in more situations, which
         * have a far bigger performance impact.
         */
        this.resolveNoneKeyframes();
        /**
         * Check to see if unit type has changed. If so schedule jobs that will
         * temporarily set styles to the destination keyframes.
         * Skip if we have more than two keyframes or this isn't a positional value.
         * TODO: We can throw if there are multiple keyframes and the value type changes.
         */
        if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
            return;
        }
        const [origin, target] = unresolvedKeyframes;
        const originType = findDimensionValueType(origin);
        const targetType = findDimensionValueType(target);
        /**
         * Either we don't recognise these value types or we can animate between them.
         */
        if (originType === targetType)
            return;
        /**
         * If both values are numbers or pixels, we can animate between them by
         * converting them to numbers.
         */
        if (isNumOrPxType(originType) && isNumOrPxType(targetType)) {
            for (let i = 0; i < unresolvedKeyframes.length; i++) {
                const value = unresolvedKeyframes[i];
                if (typeof value === "string") {
                    unresolvedKeyframes[i] = parseFloat(value);
                }
            }
        }
        else if (positionalValues[name]) {
            /**
             * Else, the only way to resolve this is by measuring the element.
             */
            this.needsMeasurement = true;
        }
    }
    resolveNoneKeyframes() {
        const { unresolvedKeyframes, name } = this;
        const noneKeyframeIndexes = [];
        for (let i = 0; i < unresolvedKeyframes.length; i++) {
            if (unresolvedKeyframes[i] === null ||
                isNone(unresolvedKeyframes[i])) {
                noneKeyframeIndexes.push(i);
            }
        }
        if (noneKeyframeIndexes.length) {
            makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
        }
    }
    measureInitialState() {
        const { element, unresolvedKeyframes, name } = this;
        if (!element || !element.current)
            return;
        if (name === "height") {
            this.suspendedScrollY = window.pageYOffset;
        }
        this.measuredOrigin = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
        unresolvedKeyframes[0] = this.measuredOrigin;
        // Set final key frame to measure after next render
        const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
        if (measureKeyframe !== undefined) {
            element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
        }
    }
    measureEndState() {
        const { element, name, unresolvedKeyframes } = this;
        if (!element || !element.current)
            return;
        const value = element.getValue(name);
        value && value.jump(this.measuredOrigin, false);
        const finalKeyframeIndex = unresolvedKeyframes.length - 1;
        const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
        unresolvedKeyframes[finalKeyframeIndex] = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
        if (finalKeyframe !== null && this.finalKeyframe === undefined) {
            this.finalKeyframe = finalKeyframe;
        }
        // If we removed transform values, reapply them before the next render
        if (this.removedTransforms?.length) {
            this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
                element
                    .getValue(unsetTransformName)
                    .set(unsetTransformValue);
            });
        }
        this.resolveNoneKeyframes();
    }
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/utils/find.mjs





/**
 * A list of all ValueTypes
 */
const valueTypes = [...dimensionValueTypes, color/* color */.$, complex/* complex */.P];
/**
 * Tests a value against the list of ValueTypes
 */
const findValueType = (v) => valueTypes.find(testValueType(v));



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs
// Does this device prefer reduced motion? Returns `null` server-side.
const prefersReducedMotion = { current: null };
const hasReducedMotionListener = { current: false };



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs



function initPrefersReducedMotion() {
    hasReducedMotionListener.current = true;
    if (!is_browser/* isBrowser */.j)
        return;
    if (window.matchMedia) {
        const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
        const setReducedMotionPreferences = () => (prefersReducedMotion.current = motionMediaQuery.matches);
        motionMediaQuery.addListener(setReducedMotionPreferences);
        setReducedMotionPreferences();
    }
    else {
        prefersReducedMotion.current = false;
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/store.mjs
const visualElementStore = new WeakMap();



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/motion-values.mjs


function updateMotionValuesFromProps(element, next, prev) {
    for (const key in next) {
        const nextValue = next[key];
        const prevValue = prev[key];
        if (isMotionValue(nextValue)) {
            /**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */
            element.addValue(key, nextValue);
        }
        else if (isMotionValue(prevValue)) {
            /**
             * If we're swapping from a motion value to a static value,
             * create a new motion value from that
             */
            element.addValue(key, (0,es_value/* motionValue */.BX)(nextValue, { owner: element }));
        }
        else if (prevValue !== nextValue) {
            /**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */
            if (element.hasValue(key)) {
                const existingValue = element.getValue(key);
                if (existingValue.liveStyle === true) {
                    existingValue.jump(nextValue);
                }
                else if (!existingValue.hasAnimated) {
                    existingValue.set(nextValue);
                }
            }
            else {
                const latestValue = element.getStaticValue(key);
                element.addValue(key, (0,es_value/* motionValue */.BX)(latestValue !== undefined ? latestValue : nextValue, { owner: element }));
            }
        }
    }
    // Handle removed values
    for (const key in prev) {
        if (next[key] === undefined)
            element.removeValue(key);
    }
    return next;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/VisualElement.mjs











const propEventHandlers = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
];
/**
 * A VisualElement is an imperative abstraction around UI elements such as
 * HTMLElement, SVGElement, Three.Object3D etc.
 */
class VisualElement {
    /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */
    scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
        return {};
    }
    constructor({ parent, props, presenceContext, reducedMotionConfig, blockInitialAnimation, visualState, }, options = {}) {
        /**
         * A reference to the current underlying Instance, e.g. a HTMLElement
         * or Three.Mesh etc.
         */
        this.current = null;
        /**
         * A set containing references to this VisualElement's children.
         */
        this.children = new Set();
        /**
         * Determine what role this visual element should take in the variant tree.
         */
        this.isVariantNode = false;
        this.isControllingVariants = false;
        /**
         * Decides whether this VisualElement should animate in reduced motion
         * mode.
         *
         * TODO: This is currently set on every individual VisualElement but feels
         * like it could be set globally.
         */
        this.shouldReduceMotion = null;
        /**
         * A map of all motion values attached to this visual element. Motion
         * values are source of truth for any given animated value. A motion
         * value might be provided externally by the component via props.
         */
        this.values = new Map();
        this.KeyframeResolver = KeyframeResolver;
        /**
         * Cleanup functions for active features (hover/tap/exit etc)
         */
        this.features = {};
        /**
         * A map of every subscription that binds the provided or generated
         * motion values onChange listeners to this visual element.
         */
        this.valueSubscriptions = new Map();
        /**
         * A reference to the previously-provided motion values as returned
         * from scrapeMotionValuesFromProps. We use the keys in here to determine
         * if any motion values need to be removed after props are updated.
         */
        this.prevMotionValues = {};
        /**
         * An object containing a SubscriptionManager for each active event.
         */
        this.events = {};
        /**
         * An object containing an unsubscribe function for each prop event subscription.
         * For example, every "Update" event can have multiple subscribers via
         * VisualElement.on(), but only one of those can be defined via the onUpdate prop.
         */
        this.propEventSubscriptions = {};
        this.notifyUpdate = () => this.notify("Update", this.latestValues);
        this.render = () => {
            if (!this.current)
                return;
            this.triggerBuild();
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
        };
        this.renderScheduledAt = 0.0;
        this.scheduleRender = () => {
            const now = sync_time/* time */.X.now();
            if (this.renderScheduledAt < now) {
                this.renderScheduledAt = now;
                frameloop_frame/* frame */.Wi.render(this.render, false, true);
            }
        };
        const { latestValues, renderState } = visualState;
        this.latestValues = latestValues;
        this.baseTarget = { ...latestValues };
        this.initialValues = props.initial ? { ...latestValues } : {};
        this.renderState = renderState;
        this.parent = parent;
        this.props = props;
        this.presenceContext = presenceContext;
        this.depth = parent ? parent.depth + 1 : 0;
        this.reducedMotionConfig = reducedMotionConfig;
        this.options = options;
        this.blockInitialAnimation = Boolean(blockInitialAnimation);
        this.isControllingVariants = isControllingVariants(props);
        this.isVariantNode = isVariantNode(props);
        if (this.isVariantNode) {
            this.variantChildren = new Set();
        }
        this.manuallyAnimateOnMount = Boolean(parent && parent.current);
        /**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't necessarily a breaking change,
         * more a reflection of the test.
         */
        const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
        for (const key in initialMotionValues) {
            const value = initialMotionValues[key];
            if (latestValues[key] !== undefined && isMotionValue(value)) {
                value.set(latestValues[key], false);
            }
        }
    }
    mount(instance) {
        this.current = instance;
        visualElementStore.set(instance, this);
        if (this.projection && !this.projection.instance) {
            this.projection.mount(instance);
        }
        if (this.parent && this.isVariantNode && !this.isControllingVariants) {
            this.removeFromVariantTree = this.parent.addVariantChild(this);
        }
        this.values.forEach((value, key) => this.bindToMotionValue(key, value));
        if (!hasReducedMotionListener.current) {
            initPrefersReducedMotion();
        }
        this.shouldReduceMotion =
            this.reducedMotionConfig === "never"
                ? false
                : this.reducedMotionConfig === "always"
                    ? true
                    : prefersReducedMotion.current;
        if (false) {}
        if (this.parent)
            this.parent.children.add(this);
        this.update(this.props, this.presenceContext);
    }
    unmount() {
        this.projection && this.projection.unmount();
        (0,frameloop_frame/* cancelFrame */.Pn)(this.notifyUpdate);
        (0,frameloop_frame/* cancelFrame */.Pn)(this.render);
        this.valueSubscriptions.forEach((remove) => remove());
        this.valueSubscriptions.clear();
        this.removeFromVariantTree && this.removeFromVariantTree();
        this.parent && this.parent.children.delete(this);
        for (const key in this.events) {
            this.events[key].clear();
        }
        for (const key in this.features) {
            const feature = this.features[key];
            if (feature) {
                feature.unmount();
                feature.isMounted = false;
            }
        }
        this.current = null;
    }
    bindToMotionValue(key, value) {
        if (this.valueSubscriptions.has(key)) {
            this.valueSubscriptions.get(key)();
        }
        const valueIsTransform = transformProps.has(key);
        if (valueIsTransform && this.onBindTransform) {
            this.onBindTransform();
        }
        const removeOnChange = value.on("change", (latestValue) => {
            this.latestValues[key] = latestValue;
            this.props.onUpdate && frameloop_frame/* frame */.Wi.preRender(this.notifyUpdate);
            if (valueIsTransform && this.projection) {
                this.projection.isTransformDirty = true;
            }
        });
        const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
        let removeSyncCheck;
        if (window.MotionCheckAppearSync) {
            removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
        }
        this.valueSubscriptions.set(key, () => {
            removeOnChange();
            removeOnRenderRequest();
            if (removeSyncCheck)
                removeSyncCheck();
            if (value.owner)
                value.stop();
        });
    }
    sortNodePosition(other) {
        /**
         * If these nodes aren't even of the same type we can't compare their depth.
         */
        if (!this.current ||
            !this.sortInstanceNodePosition ||
            this.type !== other.type) {
            return 0;
        }
        return this.sortInstanceNodePosition(this.current, other.current);
    }
    updateFeatures() {
        let key = "animation";
        for (key in featureDefinitions) {
            const featureDefinition = featureDefinitions[key];
            if (!featureDefinition)
                continue;
            const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
            /**
             * If this feature is enabled but not active, make a new instance.
             */
            if (!this.features[key] &&
                FeatureConstructor &&
                isEnabled(this.props)) {
                this.features[key] = new FeatureConstructor(this);
            }
            /**
             * If we have a feature, mount or update it.
             */
            if (this.features[key]) {
                const feature = this.features[key];
                if (feature.isMounted) {
                    feature.update();
                }
                else {
                    feature.mount();
                    feature.isMounted = true;
                }
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
    }
    /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */
    measureViewportBox() {
        return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : createBox();
    }
    getStaticValue(key) {
        return this.latestValues[key];
    }
    setStaticValue(key, value) {
        this.latestValues[key] = value;
    }
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */
    update(props, presenceContext) {
        if (props.transformTemplate || this.props.transformTemplate) {
            this.scheduleRender();
        }
        this.prevProps = this.props;
        this.props = props;
        this.prevPresenceContext = this.presenceContext;
        this.presenceContext = presenceContext;
        /**
         * Update prop event handlers ie onAnimationStart, onAnimationComplete
         */
        for (let i = 0; i < propEventHandlers.length; i++) {
            const key = propEventHandlers[i];
            if (this.propEventSubscriptions[key]) {
                this.propEventSubscriptions[key]();
                delete this.propEventSubscriptions[key];
            }
            const listenerName = ("on" + key);
            const listener = props[listenerName];
            if (listener) {
                this.propEventSubscriptions[key] = this.on(key, listener);
            }
        }
        this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps, this), this.prevMotionValues);
        if (this.handleChildMotionValue) {
            this.handleChildMotionValue();
        }
    }
    getProps() {
        return this.props;
    }
    /**
     * Returns the variant definition with a given name.
     */
    getVariant(name) {
        return this.props.variants ? this.props.variants[name] : undefined;
    }
    /**
     * Returns the defined default transition on this component.
     */
    getDefaultTransition() {
        return this.props.transition;
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
        return this.isVariantNode
            ? this
            : this.parent
                ? this.parent.getClosestVariantNode()
                : undefined;
    }
    /**
     * Add a child visual element to our set of children.
     */
    addVariantChild(child) {
        const closestVariantNode = this.getClosestVariantNode();
        if (closestVariantNode) {
            closestVariantNode.variantChildren &&
                closestVariantNode.variantChildren.add(child);
            return () => closestVariantNode.variantChildren.delete(child);
        }
    }
    /**
     * Add a motion value and bind it to this visual element.
     */
    addValue(key, value) {
        // Remove existing value if it exists
        const existingValue = this.values.get(key);
        if (value !== existingValue) {
            if (existingValue)
                this.removeValue(key);
            this.bindToMotionValue(key, value);
            this.values.set(key, value);
            this.latestValues[key] = value.get();
        }
    }
    /**
     * Remove a motion value and unbind any active subscriptions.
     */
    removeValue(key) {
        this.values.delete(key);
        const unsubscribe = this.valueSubscriptions.get(key);
        if (unsubscribe) {
            unsubscribe();
            this.valueSubscriptions.delete(key);
        }
        delete this.latestValues[key];
        this.removeValueFromRenderState(key, this.renderState);
    }
    /**
     * Check whether we have a motion value for this key
     */
    hasValue(key) {
        return this.values.has(key);
    }
    getValue(key, defaultValue) {
        if (this.props.values && this.props.values[key]) {
            return this.props.values[key];
        }
        let value = this.values.get(key);
        if (value === undefined && defaultValue !== undefined) {
            value = (0,es_value/* motionValue */.BX)(defaultValue === null ? undefined : defaultValue, { owner: this });
            this.addValue(key, value);
        }
        return value;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */
    readValue(key, target) {
        let value = this.latestValues[key] !== undefined || !this.current
            ? this.latestValues[key]
            : this.getBaseTargetFromProps(this.props, key) ??
                this.readValueFromInstance(this.current, key, this.options);
        if (value !== undefined && value !== null) {
            if (typeof value === "string" &&
                (isNumericalString(value) || isZeroValueString(value))) {
                // If this is a number read as a string, ie "0" or "200", convert it to a number
                value = parseFloat(value);
            }
            else if (!findValueType(value) && complex/* complex */.P.test(target)) {
                value = getAnimatableNone(key, target);
            }
            this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
        }
        return isMotionValue(value) ? value.get() : value;
    }
    /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */
    setBaseTarget(key, value) {
        this.baseTarget[key] = value;
    }
    /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */
    getBaseTarget(key) {
        const { initial } = this.props;
        let valueFromInitial;
        if (typeof initial === "string" || typeof initial === "object") {
            const variant = resolveVariantFromProps(this.props, initial, this.presenceContext?.custom);
            if (variant) {
                valueFromInitial = variant[key];
            }
        }
        /**
         * If this value still exists in the current initial variant, read that.
         */
        if (initial && valueFromInitial !== undefined) {
            return valueFromInitial;
        }
        /**
         * Alternatively, if this VisualElement config has defined a getBaseTarget
         * so we can read the value from an alternative source, try that.
         */
        const target = this.getBaseTargetFromProps(this.props, key);
        if (target !== undefined && !isMotionValue(target))
            return target;
        /**
         * If the value was initially defined on initial, but it doesn't any more,
         * return undefined. Otherwise return the value as initially read from the DOM.
         */
        return this.initialValues[key] !== undefined &&
            valueFromInitial === undefined
            ? undefined
            : this.baseTarget[key];
    }
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = new subscription_manager/* SubscriptionManager */.L();
        }
        return this.events[eventName].add(callback);
    }
    notify(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].notify(...args);
        }
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs



class DOMVisualElement extends VisualElement {
    constructor() {
        super(...arguments);
        this.KeyframeResolver = DOMKeyframesResolver;
    }
    sortInstanceNodePosition(a, b) {
        /**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */
        return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(props, key) {
        return props.style
            ? props.style[key]
            : undefined;
    }
    removeValueFromRenderState(key, { vars, style }) {
        delete vars[key];
        delete style[key];
    }
    handleChildMotionValue() {
        if (this.childSubscription) {
            this.childSubscription();
            delete this.childSubscription;
        }
        const { children } = this.props;
        if (isMotionValue(children)) {
            this.childSubscription = children.on("change", (latest) => {
                if (this.current) {
                    this.current.textContent = `${latest}`;
                }
            });
        }
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/render.mjs
function renderHTML(element, { style, vars }, styleProp, projection) {
    Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
    // Loop over any CSS variables and assign those.
    for (const key in vars) {
        element.style.setProperty(key, vars[key]);
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs







function HTMLVisualElement_getComputedStyle(element) {
    return window.getComputedStyle(element);
}
class HTMLVisualElement extends DOMVisualElement {
    constructor() {
        super(...arguments);
        this.type = "html";
        this.renderInstance = renderHTML;
    }
    readValueFromInstance(instance, key) {
        if (transformProps.has(key)) {
            return this.projection?.isProjecting
                ? defaultTransformValue(key)
                : readTransformValue(instance, key);
        }
        else {
            const computedStyle = HTMLVisualElement_getComputedStyle(instance);
            const value = ((0,is_css_variable/* isCSSVariableName */.f)(key)
                ? computedStyle.getPropertyValue(key)
                : computedStyle[key]) || 0;
            return typeof value === "string" ? value.trim() : value;
        }
    }
    measureInstanceViewportBox(instance, { transformPagePoint }) {
        return measureViewportBox(instance, transformPagePoint);
    }
    build(renderState, latestValues, props) {
        buildHTMLStyles(renderState, latestValues, props.transformTemplate);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
        return scrapeMotionValuesFromProps(props, prevProps, visualElement);
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
/**
 * A set of attribute names that are always read/written as camel case.
 */
const camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
]);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/render.mjs




function renderSVG(element, renderState, _styleProp, projection) {
    renderHTML(element, renderState, undefined, projection);
    for (const key in renderState.attrs) {
        element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs










class SVGVisualElement extends DOMVisualElement {
    constructor() {
        super(...arguments);
        this.type = "svg";
        this.isSVGTag = false;
        this.measureInstanceViewportBox = createBox;
    }
    getBaseTargetFromProps(props, key) {
        return props[key];
    }
    readValueFromInstance(instance, key) {
        if (transformProps.has(key)) {
            const defaultType = getDefaultValueType(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
        return instance.getAttribute(key);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
        return scrape_motion_values_scrapeMotionValuesFromProps(props, prevProps, visualElement);
    }
    build(renderState, latestValues, props) {
        buildSVGAttrs(renderState, latestValues, this.isSVGTag, props.transformTemplate, props.style);
    }
    renderInstance(instance, renderState, styleProp, projection) {
        renderSVG(instance, renderState, styleProp, projection);
    }
    mount(instance) {
        this.isSVGTag = isSVGTag(instance.tagName);
        super.mount(instance);
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs





const createDomVisualElement = (Component, options) => {
    return isSVGComponent(Component)
        ? new SVGVisualElement(options)
        : new HTMLVisualElement(options, {
            allowProjection: Component !== react_.Fragment,
        });
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/create.mjs







const createMotionComponent = /*@__PURE__*/ createMotionComponentFactory({
    ...animations,
    ...gestureAnimations,
    ...drag,
    ...layout,
}, createDomVisualElement);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs



const motion = /*@__PURE__*/ createDOMMotionComponentProxy(createMotionComponent);




/***/ }),

/***/ 8066:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ isBrowser)
/* harmony export */ });
const isBrowser = typeof window !== "undefined";




/***/ }),

/***/ 4349:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ useConstant)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}




/***/ }),

/***/ 381:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8066);



const useIsomorphicLayoutEffect = _is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isBrowser */ .j ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;




/***/ }),

/***/ 5819:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: () => (/* binding */ defaultOffset)
});

// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/progress.mjs
var progress = __webpack_require__(1756);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/mix/number.mjs
var number = __webpack_require__(2986);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs



function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for (let i = 1; i <= remaining; i++) {
        const offsetProgress = (0,progress/* progress */.Y)(0, remaining, i);
        offset.push((0,number/* mixNumber */.t)(min, 1, offsetProgress));
    }
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs


function defaultOffset(arr) {
    const offset = [0];
    fillOffset(offset, arr.length - 1);
    return offset;
}




/***/ }),

/***/ 3593:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ isCSSVariableName),
/* harmony export */   t: () => (/* binding */ isCSSVariableToken)
/* harmony export */ });
const checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
const isCSSVariableName = 
/*@__PURE__*/ checkStringStartsWith("--");
const startsAsVariableToken = 
/*@__PURE__*/ checkStringStartsWith("var(--");
const isCSSVariableToken = (value) => {
    const startsWithToken = startsAsVariableToken(value);
    if (!startsWithToken)
        return false;
    // Ensure any comments are stripped from the value as this can harm performance of the regex.
    return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
const singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;




/***/ }),

/***/ 4839:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ createRenderBatcher)
});

// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/global-config.mjs
var global_config = __webpack_require__(1206);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/frameloop/order.mjs
const stepsOrder = [
    "setup", // Compute
    "read", // Read
    "resolveKeyframes", // Write/Read/Write/Read
    "preUpdate", // Compute
    "update", // Compute
    "preRender", // Compute
    "render", // Write
    "postRender", // Compute
];



// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/stats/buffer.mjs
var buffer = __webpack_require__(7052);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/frameloop/render-step.mjs


function createRenderStep(runNextFrame, stepName) {
    /**
     * We create and reuse two queues, one to queue jobs for the current frame
     * and one for the next. We reuse to avoid triggering GC after x frames.
     */
    let thisFrame = new Set();
    let nextFrame = new Set();
    /**
     * Track whether we're currently processing jobs in this step. This way
     * we can decide whether to schedule new jobs for this frame or next.
     */
    let isProcessing = false;
    let flushNextFrame = false;
    /**
     * A set of processes which were marked keepAlive when scheduled.
     */
    const toKeepAlive = new WeakSet();
    let latestFrameData = {
        delta: 0.0,
        timestamp: 0.0,
        isProcessing: false,
    };
    let numCalls = 0;
    function triggerCallback(callback) {
        if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame();
        }
        numCalls++;
        callback(latestFrameData);
    }
    const step = {
        /**
         * Schedule a process to run on the next frame.
         */
        schedule: (callback, keepAlive = false, immediate = false) => {
            const addToCurrentFrame = immediate && isProcessing;
            const queue = addToCurrentFrame ? thisFrame : nextFrame;
            if (keepAlive)
                toKeepAlive.add(callback);
            if (!queue.has(callback))
                queue.add(callback);
            return callback;
        },
        /**
         * Cancel the provided callback from running on the next frame.
         */
        cancel: (callback) => {
            nextFrame.delete(callback);
            toKeepAlive.delete(callback);
        },
        /**
         * Execute all schedule callbacks.
         */
        process: (frameData) => {
            latestFrameData = frameData;
            /**
             * If we're already processing we've probably been triggered by a flushSync
             * inside an existing process. Instead of executing, mark flushNextFrame
             * as true and ensure we flush the following frame at the end of this one.
             */
            if (isProcessing) {
                flushNextFrame = true;
                return;
            }
            isProcessing = true;
            [thisFrame, nextFrame] = [nextFrame, thisFrame];
            // Execute this frame
            thisFrame.forEach(triggerCallback);
            /**
             * If we're recording stats then
             */
            if (stepName && buffer/* statsBuffer */.f.value) {
                buffer/* statsBuffer */.f.value.frameloop[stepName].push(numCalls);
            }
            numCalls = 0;
            // Clear the frame so no callbacks remain. This is to avoid
            // memory leaks should this render step not run for a while.
            thisFrame.clear();
            isProcessing = false;
            if (flushNextFrame) {
                flushNextFrame = false;
                step.process(frameData);
            }
        },
    };
    return step;
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/frameloop/batcher.mjs




const maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
    let runNextFrame = false;
    let useDefaultElapsed = true;
    const state = {
        delta: 0.0,
        timestamp: 0.0,
        isProcessing: false,
    };
    const flagRunNextFrame = () => (runNextFrame = true);
    const steps = stepsOrder.reduce((acc, key) => {
        acc[key] = createRenderStep(flagRunNextFrame, allowKeepAlive ? key : undefined);
        return acc;
    }, {});
    const { setup, read, resolveKeyframes, preUpdate, update, preRender, render, postRender, } = steps;
    const processBatch = () => {
        const timestamp = global_config/* MotionGlobalConfig */.c.useManualTiming
            ? state.timestamp
            : performance.now();
        runNextFrame = false;
        if (!global_config/* MotionGlobalConfig */.c.useManualTiming) {
            state.delta = useDefaultElapsed
                ? 1000 / 60
                : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
        }
        state.timestamp = timestamp;
        state.isProcessing = true;
        // Unrolled render loop for better per-frame performance
        setup.process(state);
        read.process(state);
        resolveKeyframes.process(state);
        preUpdate.process(state);
        update.process(state);
        preRender.process(state);
        render.process(state);
        postRender.process(state);
        state.isProcessing = false;
        if (runNextFrame && allowKeepAlive) {
            useDefaultElapsed = false;
            scheduleNextBatch(processBatch);
        }
    };
    const wake = () => {
        runNextFrame = true;
        useDefaultElapsed = true;
        if (!state.isProcessing) {
            scheduleNextBatch(processBatch);
        }
    };
    const schedule = stepsOrder.reduce((acc, key) => {
        const step = steps[key];
        acc[key] = (process, keepAlive = false, immediate = false) => {
            if (!runNextFrame)
                wake();
            return step.schedule(process, keepAlive, immediate);
        };
        return acc;
    }, {});
    const cancel = (process) => {
        for (let i = 0; i < stepsOrder.length; i++) {
            steps[stepsOrder[i]].cancel(process);
        }
    };
    return { schedule, cancel, state, steps };
}




/***/ }),

/***/ 3662:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pn: () => (/* binding */ cancelFrame),
/* harmony export */   Wi: () => (/* binding */ frame),
/* harmony export */   frameData: () => (/* binding */ frameData),
/* harmony export */   yL: () => (/* binding */ frameSteps)
/* harmony export */ });
/* harmony import */ var motion_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3201);
/* harmony import */ var _batcher_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4839);



const { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps, } = /* @__PURE__ */ (0,_batcher_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createRenderBatcher */ .Z)(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : motion_utils__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .Z, true);




/***/ }),

/***/ 7476:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ time)
/* harmony export */ });
/* harmony import */ var motion_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1206);
/* harmony import */ var _frame_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3662);



let now;
function clearTime() {
    now = undefined;
}
/**
 * An eventloop-synchronous alternative to performance.now().
 *
 * Ensures that time measurements remain consistent within a synchronous context.
 * Usually calling performance.now() twice within the same synchronous context
 * will return different values which isn't useful for animations when we're usually
 * trying to sync animations to the same frame.
 */
const time = {
    now: () => {
        if (now === undefined) {
            time.set(_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frameData.isProcessing || motion_utils__WEBPACK_IMPORTED_MODULE_1__/* .MotionGlobalConfig */ .c.useManualTiming
                ? _frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frameData.timestamp
                : performance.now());
        }
        return now;
    },
    set: (newTime) => {
        now = newTime;
        queueMicrotask(clearTime);
    },
};




/***/ }),

/***/ 7052:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ statsBuffer)
/* harmony export */ });
const statsBuffer = {
    value: null,
    addProjectionMetrics: null,
};




/***/ }),

/***/ 9613:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ interpolate)
/* harmony export */ });
/* harmony import */ var motion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1206);
/* harmony import */ var motion_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3201);
/* harmony import */ var motion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6098);
/* harmony import */ var motion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7664);
/* harmony import */ var motion_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1756);
/* harmony import */ var motion_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2541);
/* harmony import */ var _mix_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3349);



function createMixers(output, ease, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || motion_utils__WEBPACK_IMPORTED_MODULE_0__/* .MotionGlobalConfig */ .c.mix || _mix_index_mjs__WEBPACK_IMPORTED_MODULE_1__/* .mix */ .C;
    const numMixers = output.length - 1;
    for (let i = 0; i < numMixers; i++) {
        let mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            const easingFunction = Array.isArray(ease) ? ease[i] || motion_utils__WEBPACK_IMPORTED_MODULE_2__/* .noop */ .Z : ease;
            mixer = (0,motion_utils__WEBPACK_IMPORTED_MODULE_3__/* .pipe */ .z)(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * TODO Revisit this approach once we've moved to data models for values,
 * probably not needed to pregenerate mixer functions.
 *
 * @public
 */
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
    const inputLength = input.length;
    (0,motion_utils__WEBPACK_IMPORTED_MODULE_4__/* .invariant */ .k)(inputLength === output.length, "Both input and output ranges must be the same length");
    /**
     * If we're only provided a single input, we can just make a function
     * that returns the output.
     */
    if (inputLength === 1)
        return () => output[0];
    if (inputLength === 2 && output[0] === output[1])
        return () => output[1];
    const isZeroDeltaRange = input[0] === input[1];
    // If input runs highest -> lowest, reverse both arrays
    if (input[0] > input[inputLength - 1]) {
        input = [...input].reverse();
        output = [...output].reverse();
    }
    const mixers = createMixers(output, ease, mixer);
    const numMixers = mixers.length;
    const interpolator = (v) => {
        if (isZeroDeltaRange && v < input[0])
            return output[0];
        let i = 0;
        if (numMixers > 1) {
            for (; i < input.length - 2; i++) {
                if (v < input[i + 1])
                    break;
            }
        }
        const progressInRange = (0,motion_utils__WEBPACK_IMPORTED_MODULE_5__/* .progress */ .Y)(input[i], input[i + 1], v);
        return mixers[i](progressInRange);
    };
    return isClamp
        ? (v) => interpolator((0,motion_utils__WEBPACK_IMPORTED_MODULE_6__/* .clamp */ .u)(input[0], input[inputLength - 1], v))
        : interpolator;
}




/***/ }),

/***/ 5447:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ isHTMLElement)
/* harmony export */ });
/* harmony import */ var motion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1380);


/**
 * Checks if an element is an HTML element in a way
 * that works across iframes
 */
function isHTMLElement(element) {
    return (0,motion_utils__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .K)(element) && "offsetHeight" in element;
}




/***/ }),

/***/ 7286:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ isSVGElement)
/* harmony export */ });
/* harmony import */ var motion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1380);


/**
 * Checks if an element is an SVG element in a way
 * that works across iframes
 */
function isSVGElement(element) {
    return (0,motion_utils__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .K)(element) && "ownerSVGElement" in element;
}




/***/ }),

/***/ 3349:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ mix)
});

// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/pipe.mjs
var pipe = __webpack_require__(6098);
// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/errors.mjs
var errors = __webpack_require__(7664);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs
var is_css_variable = __webpack_require__(3593);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/value/types/color/index.mjs
var color = __webpack_require__(6266);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/value/types/complex/index.mjs + 1 modules
var complex = __webpack_require__(8043);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/value/types/color/hex.mjs
var hex = __webpack_require__(7067);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/value/types/color/hsla.mjs
var hsla = __webpack_require__(472);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
// Adapted from https://gist.github.com/mjackson/5311256
function hueToRgb(p, q, t) {
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) {
        red = green = blue = lightness;
    }
    else {
        const q = lightness < 0.5
            ? lightness * (1 + saturation)
            : lightness + saturation - lightness * saturation;
        const p = 2 * lightness - q;
        red = hueToRgb(p, q, hue + 1 / 3);
        green = hueToRgb(p, q, hue);
        blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha,
    };
}



// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/value/types/color/rgba.mjs
var rgba = __webpack_require__(4347);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function mixImmediate(a, b) {
    return (p) => (p > 0 ? b : a);
}



// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/mix/number.mjs
var number = __webpack_require__(2986);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/mix/color.mjs








// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN
const mixLinearColor = (from, to, v) => {
    const fromExpo = from * from;
    const expo = v * (to * to - fromExpo) + fromExpo;
    return expo < 0 ? 0 : Math.sqrt(expo);
};
const colorTypes = [hex/* hex */.$, rgba/* rgba */.m, hsla/* hsla */.J];
const getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color) {
    const type = getColorType(color);
    (0,errors/* warning */.K)(Boolean(type), `'${color}' is not an animatable color. Use the equivalent color code instead.`);
    if (!Boolean(type))
        return false;
    let model = type.parse(color);
    if (type === hsla/* hsla */.J) {
        // TODO Remove this cast - needed since Motion's stricter typing
        model = hslaToRgba(model);
    }
    return model;
}
const mixColor = (from, to) => {
    const fromRGBA = asRGBA(from);
    const toRGBA = asRGBA(to);
    if (!fromRGBA || !toRGBA) {
        return mixImmediate(from, to);
    }
    const blended = { ...fromRGBA };
    return (v) => {
        blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
        blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
        blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
        blended.alpha = (0,number/* mixNumber */.t)(fromRGBA.alpha, toRGBA.alpha, v);
        return rgba/* rgba */.m.transform(blended);
    };
};



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/mix/visibility.mjs
const invisibleValues = new Set(["none", "hidden"]);
/**
 * Returns a function that, when provided a progress value between 0 and 1,
 * will return the "none" or "hidden" string only when the progress is that of
 * the origin or target.
 */
function mixVisibility(origin, target) {
    if (invisibleValues.has(origin)) {
        return (p) => (p <= 0 ? origin : target);
    }
    else {
        return (p) => (p >= 1 ? target : origin);
    }
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/mix/complex.mjs









function mixNumber(a, b) {
    return (p) => (0,number/* mixNumber */.t)(a, b, p);
}
function getMixer(a) {
    if (typeof a === "number") {
        return mixNumber;
    }
    else if (typeof a === "string") {
        return (0,is_css_variable/* isCSSVariableToken */.t)(a)
            ? mixImmediate
            : color/* color */.$.test(a)
                ? mixColor
                : mixComplex;
    }
    else if (Array.isArray(a)) {
        return mixArray;
    }
    else if (typeof a === "object") {
        return color/* color */.$.test(a) ? mixColor : mixObject;
    }
    return mixImmediate;
}
function mixArray(a, b) {
    const output = [...a];
    const numValues = output.length;
    const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
    return (p) => {
        for (let i = 0; i < numValues; i++) {
            output[i] = blendValue[i](p);
        }
        return output;
    };
}
function mixObject(a, b) {
    const output = { ...a, ...b };
    const blendValue = {};
    for (const key in output) {
        if (a[key] !== undefined && b[key] !== undefined) {
            blendValue[key] = getMixer(a[key])(a[key], b[key]);
        }
    }
    return (v) => {
        for (const key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
}
function matchOrder(origin, target) {
    const orderedOrigin = [];
    const pointers = { color: 0, var: 0, number: 0 };
    for (let i = 0; i < target.values.length; i++) {
        const type = target.types[i];
        const originIndex = origin.indexes[type][pointers[type]];
        const originValue = origin.values[originIndex] ?? 0;
        orderedOrigin[i] = originValue;
        pointers[type]++;
    }
    return orderedOrigin;
}
const mixComplex = (origin, target) => {
    const template = complex/* complex */.P.createTransformer(target);
    const originStats = (0,complex/* analyseComplexValue */.V)(origin);
    const targetStats = (0,complex/* analyseComplexValue */.V)(target);
    const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length &&
        originStats.indexes.color.length === targetStats.indexes.color.length &&
        originStats.indexes.number.length >= targetStats.indexes.number.length;
    if (canInterpolate) {
        if ((invisibleValues.has(origin) &&
            !targetStats.values.length) ||
            (invisibleValues.has(target) &&
                !originStats.values.length)) {
            return mixVisibility(origin, target);
        }
        return (0,pipe/* pipe */.z)(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
    }
    else {
        (0,errors/* warning */.K)(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
        return mixImmediate(origin, target);
    }
};



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/mix/index.mjs



function mix(from, to, p) {
    if (typeof from === "number" &&
        typeof to === "number" &&
        typeof p === "number") {
        return (0,number/* mixNumber */.t)(from, to, p);
    }
    const mixer = getMixer(from);
    return mixer(from, to);
}




/***/ }),

/***/ 2986:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ mixNumber)
/* harmony export */ });
/*
  Value in range from progress

  Given a lower limit and an upper limit, we return the value within
  that range as expressed by progress (usually a number from 0 to 1)

  So progress = 0.5 would change

  from -------- to

  to

  from ---- to

  E.g. from = 10, to = 20, progress = 0.5 => 15

  @param [number]: Lower limit of range
  @param [number]: Upper limit of range
  @param [number]: The progress between lower and upper limits expressed 0-1
  @return [number]: Value as calculated from progress within range (not limited within range)
*/
const mixNumber = (from, to, progress) => {
    return from + (to - from) * progress;
};




/***/ }),

/***/ 4647:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ resolveElements)
/* harmony export */ });
function resolveElements(elementOrSelector, scope, selectorCache) {
    if (elementOrSelector instanceof EventTarget) {
        return [elementOrSelector];
    }
    else if (typeof elementOrSelector === "string") {
        let root = document;
        if (scope) {
            root = scope.current;
        }
        const elements = selectorCache?.[elementOrSelector] ??
            root.querySelectorAll(elementOrSelector);
        return elements ? Array.from(elements) : [];
    }
    return Array.from(elementOrSelector);
}




/***/ }),

/***/ 7662:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ supportsScrollTimeline)
/* harmony export */ });
/* harmony import */ var motion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1831);


const supportsScrollTimeline = /* @__PURE__ */ (0,motion_utils__WEBPACK_IMPORTED_MODULE_0__/* .memo */ .X)(() => window.ScrollTimeline !== undefined);




/***/ }),

/***/ 6728:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BX: () => (/* binding */ motionValue),
/* harmony export */   S1: () => (/* binding */ collectMotionValues)
/* harmony export */ });
/* unused harmony export MotionValue */
/* harmony import */ var motion_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5024);
/* harmony import */ var motion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8268);
/* harmony import */ var _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7476);
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3662);




/**
 * Maximum time between the value of two frames, beyond which we
 * assume the velocity has since been 0.
 */
const MAX_VELOCITY_DELTA = 30;
const isFloat = (value) => {
    return !isNaN(parseFloat(value));
};
const collectMotionValues = {
    current: undefined,
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
class MotionValue {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     */
    constructor(init, options = {}) {
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */
        this.canTrackVelocity = null;
        /**
         * An object containing a SubscriptionManager for each active event.
         */
        this.events = {};
        this.updateAndNotify = (v, render = true) => {
            const currentTime = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__/* .time */ .X.now();
            /**
             * If we're updating the value during another frame or eventloop
             * than the previous frame, then the we set the previous frame value
             * to current.
             */
            if (this.updatedAt !== currentTime) {
                this.setPrevFrameValue();
            }
            this.prev = this.current;
            this.setCurrent(v);
            // Update update subscribers
            if (this.current !== this.prev) {
                this.events.change?.notify(this.current);
                if (this.dependents) {
                    for (const dependent of this.dependents) {
                        dependent.dirty();
                    }
                }
            }
            // Update render subscribers
            if (render) {
                this.events.renderRequest?.notify(this.current);
            }
        };
        this.hasAnimated = false;
        this.setCurrent(init);
        this.owner = options.owner;
    }
    setCurrent(current) {
        this.current = current;
        this.updatedAt = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__/* .time */ .X.now();
        if (this.canTrackVelocity === null && current !== undefined) {
            this.canTrackVelocity = isFloat(this.current);
        }
    }
    setPrevFrameValue(prevFrameValue = this.current) {
        this.prevFrameValue = prevFrameValue;
        this.prevUpdatedAt = this.updatedAt;
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */
    onChange(subscription) {
        if (false) {}
        return this.on("change", subscription);
    }
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = new motion_utils__WEBPACK_IMPORTED_MODULE_1__/* .SubscriptionManager */ .L();
        }
        const unsubscribe = this.events[eventName].add(callback);
        if (eventName === "change") {
            return () => {
                unsubscribe();
                /**
                 * If we have no more change listeners by the start
                 * of the next frame, stop active animations.
                 */
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__/* .frame */ .Wi.read(() => {
                    if (!this.events.change.getSize()) {
                        this.stop();
                    }
                });
            };
        }
        return unsubscribe;
    }
    clearListeners() {
        for (const eventManagers in this.events) {
            this.events[eventManagers].clear();
        }
    }
    /**
     * Attaches a passive effect to the `MotionValue`.
     */
    attach(passiveEffect, stopPassiveEffect) {
        this.passiveEffect = passiveEffect;
        this.stopPassiveEffect = stopPassiveEffect;
    }
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    set(v, render = true) {
        if (!render || !this.passiveEffect) {
            this.updateAndNotify(v, render);
        }
        else {
            this.passiveEffect(v, this.updateAndNotify);
        }
    }
    setWithVelocity(prev, current, delta) {
        this.set(current);
        this.prev = undefined;
        this.prevFrameValue = prev;
        this.prevUpdatedAt = this.updatedAt - delta;
    }
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */
    jump(v, endAnimation = true) {
        this.updateAndNotify(v);
        this.prev = v;
        this.prevUpdatedAt = this.prevFrameValue = undefined;
        endAnimation && this.stop();
        if (this.stopPassiveEffect)
            this.stopPassiveEffect();
    }
    dirty() {
        this.events.change?.notify(this.current);
    }
    addDependent(dependent) {
        if (!this.dependents) {
            this.dependents = new Set();
        }
        this.dependents.add(dependent);
    }
    removeDependent(dependent) {
        if (this.dependents) {
            this.dependents.delete(dependent);
        }
    }
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    get() {
        if (collectMotionValues.current) {
            collectMotionValues.current.push(this);
        }
        return this.current;
    }
    /**
     * @public
     */
    getPrevious() {
        return this.prev;
    }
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    getVelocity() {
        const currentTime = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__/* .time */ .X.now();
        if (!this.canTrackVelocity ||
            this.prevFrameValue === undefined ||
            currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
            return 0;
        }
        const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
        // Casts because of parseFloat's poor typing
        return (0,motion_utils__WEBPACK_IMPORTED_MODULE_3__/* .velocityPerSecond */ .R)(parseFloat(this.current) -
            parseFloat(this.prevFrameValue), delta);
    }
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     */
    start(startAnimation) {
        this.stop();
        return new Promise((resolve) => {
            this.hasAnimated = true;
            this.animation = startAnimation(resolve);
            if (this.events.animationStart) {
                this.events.animationStart.notify();
            }
        }).then(() => {
            if (this.events.animationComplete) {
                this.events.animationComplete.notify();
            }
            this.clearAnimation();
        });
    }
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    stop() {
        if (this.animation) {
            this.animation.stop();
            if (this.events.animationCancel) {
                this.events.animationCancel.notify();
            }
        }
        this.clearAnimation();
    }
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    destroy() {
        this.dependents?.clear();
        this.events.destroy?.notify();
        this.clearListeners();
        this.stop();
        if (this.stopPassiveEffect) {
            this.stopPassiveEffect();
        }
    }
}
function motionValue(init, options) {
    return new MotionValue(init, options);
}




/***/ }),

/***/ 7067:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ hex)
/* harmony export */ });
/* harmony import */ var _rgba_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4347);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6667);



function parseHex(v) {
    let r = "";
    let g = "";
    let b = "";
    let a = "";
    // If we have 6 characters, ie #FF0000
    if (v.length > 5) {
        r = v.substring(1, 3);
        g = v.substring(3, 5);
        b = v.substring(5, 7);
        a = v.substring(7, 9);
        // Or we have 3 characters, ie #F00
    }
    else {
        r = v.substring(1, 2);
        g = v.substring(2, 3);
        b = v.substring(3, 4);
        a = v.substring(4, 5);
        r += r;
        g += g;
        b += b;
        a += a;
    }
    return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1,
    };
}
const hex = {
    test: /*@__PURE__*/ (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isColorString */ .i)("#"),
    parse: parseHex,
    transform: _rgba_mjs__WEBPACK_IMPORTED_MODULE_1__/* .rgba */ .m.transform,
};




/***/ }),

/***/ 472:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ hsla)
/* harmony export */ });
/* harmony import */ var _numbers_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4628);
/* harmony import */ var _numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(260);
/* harmony import */ var _utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3635);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6667);





const hsla = {
    test: /*@__PURE__*/ (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isColorString */ .i)("hsl", "hue"),
    parse: /*@__PURE__*/ (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .splitColor */ .d)("hue", "saturation", "lightness"),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
        return ("hsla(" +
            Math.round(hue) +
            ", " +
            _numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__/* .percent */ .aQ.transform((0,_utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_2__/* .sanitize */ .N)(saturation)) +
            ", " +
            _numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__/* .percent */ .aQ.transform((0,_utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_2__/* .sanitize */ .N)(lightness)) +
            ", " +
            (0,_utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_2__/* .sanitize */ .N)(_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_3__/* .alpha */ .Fq.transform(alpha$1)) +
            ")");
    },
};




/***/ }),

/***/ 6266:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ color)
/* harmony export */ });
/* harmony import */ var _hex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7067);
/* harmony import */ var _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(472);
/* harmony import */ var _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4347);




const color = {
    test: (v) => _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__/* .rgba */ .m.test(v) || _hex_mjs__WEBPACK_IMPORTED_MODULE_1__/* .hex */ .$.test(v) || _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__/* .hsla */ .J.test(v),
    parse: (v) => {
        if (_rgba_mjs__WEBPACK_IMPORTED_MODULE_0__/* .rgba */ .m.test(v)) {
            return _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__/* .rgba */ .m.parse(v);
        }
        else if (_hsla_mjs__WEBPACK_IMPORTED_MODULE_2__/* .hsla */ .J.test(v)) {
            return _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__/* .hsla */ .J.parse(v);
        }
        else {
            return _hex_mjs__WEBPACK_IMPORTED_MODULE_1__/* .hex */ .$.parse(v);
        }
    },
    transform: (v) => {
        return typeof v === "string"
            ? v
            : v.hasOwnProperty("red")
                ? _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__/* .rgba */ .m.transform(v)
                : _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__/* .hsla */ .J.transform(v);
    },
    getAnimatableNone: (v) => {
        const parsed = color.parse(v);
        parsed.alpha = 0;
        return color.transform(parsed);
    },
};




/***/ }),

/***/ 4347:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ rgba)
/* harmony export */ });
/* unused harmony export rgbUnit */
/* harmony import */ var motion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2541);
/* harmony import */ var _numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4628);
/* harmony import */ var _utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3635);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6667);





const clampRgbUnit = (v) => (0,motion_utils__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .u)(0, 255, v);
const rgbUnit = {
    ..._numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__/* .number */ .Rx,
    transform: (v) => Math.round(clampRgbUnit(v)),
};
const rgba = {
    test: /*@__PURE__*/ (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .isColorString */ .i)("rgb", "red"),
    parse: /*@__PURE__*/ (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .splitColor */ .d)("red", "green", "blue"),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" +
        rgbUnit.transform(red) +
        ", " +
        rgbUnit.transform(green) +
        ", " +
        rgbUnit.transform(blue) +
        ", " +
        (0,_utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_3__/* .sanitize */ .N)(_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__/* .alpha */ .Fq.transform(alpha$1)) +
        ")",
};




/***/ }),

/***/ 6667:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  i: () => (/* binding */ isColorString),
  d: () => (/* binding */ splitColor)
});

// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/value/types/utils/float-regex.mjs
var float_regex = __webpack_require__(8278);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function isNullish(v) {
    return v == null;
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
const singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/color/utils.mjs




/**
 * Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
 * but false if a number or multiple colors
 */
const isColorString = (type, testProp) => (v) => {
    return Boolean((typeof v === "string" &&
        singleColorRegex.test(v) &&
        v.startsWith(type)) ||
        (testProp &&
            !isNullish(v) &&
            Object.prototype.hasOwnProperty.call(v, testProp)));
};
const splitColor = (aName, bName, cName) => (v) => {
    if (typeof v !== "string")
        return v;
    const [a, b, c, alpha] = v.match(float_regex/* floatRegex */.K);
    return {
        [aName]: parseFloat(a),
        [bName]: parseFloat(b),
        [cName]: parseFloat(c),
        alpha: alpha !== undefined ? parseFloat(alpha) : 1,
    };
};




/***/ }),

/***/ 8043:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ analyseComplexValue),
  P: () => (/* binding */ complex)
});

// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/value/types/color/index.mjs
var color = __webpack_require__(6266);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/utils/color-regex.mjs
const colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;



// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/value/types/utils/float-regex.mjs
var float_regex = __webpack_require__(8278);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/value/types/utils/sanitize.mjs
var sanitize = __webpack_require__(3635);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/complex/index.mjs





function test(v) {
    return (isNaN(v) &&
        typeof v === "string" &&
        (v.match(float_regex/* floatRegex */.K)?.length || 0) +
            (v.match(colorRegex)?.length || 0) >
            0);
}
const NUMBER_TOKEN = "number";
const COLOR_TOKEN = "color";
const VAR_TOKEN = "var";
const VAR_FUNCTION_TOKEN = "var(";
const SPLIT_TOKEN = "${}";
// this regex consists of the `singleCssVariableRegex|rgbHSLValueRegex|digitRegex`
const complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(value) {
    const originalValue = value.toString();
    const values = [];
    const indexes = {
        color: [],
        number: [],
        var: [],
    };
    const types = [];
    let i = 0;
    const tokenised = originalValue.replace(complexRegex, (parsedValue) => {
        if (color/* color */.$.test(parsedValue)) {
            indexes.color.push(i);
            types.push(COLOR_TOKEN);
            values.push(color/* color */.$.parse(parsedValue));
        }
        else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
            indexes.var.push(i);
            types.push(VAR_TOKEN);
            values.push(parsedValue);
        }
        else {
            indexes.number.push(i);
            types.push(NUMBER_TOKEN);
            values.push(parseFloat(parsedValue));
        }
        ++i;
        return SPLIT_TOKEN;
    });
    const split = tokenised.split(SPLIT_TOKEN);
    return { values, split, indexes, types };
}
function parseComplexValue(v) {
    return analyseComplexValue(v).values;
}
function createTransformer(source) {
    const { split, types } = analyseComplexValue(source);
    const numSections = split.length;
    return (v) => {
        let output = "";
        for (let i = 0; i < numSections; i++) {
            output += split[i];
            if (v[i] !== undefined) {
                const type = types[i];
                if (type === NUMBER_TOKEN) {
                    output += (0,sanitize/* sanitize */.N)(v[i]);
                }
                else if (type === COLOR_TOKEN) {
                    output += color/* color */.$.transform(v[i]);
                }
                else {
                    output += v[i];
                }
            }
        }
        return output;
    };
}
const convertNumbersToZero = (v) => typeof v === "number" ? 0 : color/* color */.$.test(v) ? color/* color */.$.getAnimatableNone(v) : v;
function getAnimatableNone(v) {
    const parsed = parseComplexValue(v);
    const transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
}
const complex = {
    test,
    parse: parseComplexValue,
    createTransformer,
    getAnimatableNone,
};




/***/ }),

/***/ 4628:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fq: () => (/* binding */ alpha),
/* harmony export */   Rx: () => (/* binding */ number),
/* harmony export */   bA: () => (/* binding */ scale)
/* harmony export */ });
/* harmony import */ var motion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2541);


const number = {
    test: (v) => typeof v === "number",
    parse: parseFloat,
    transform: (v) => v,
};
const alpha = {
    ...number,
    transform: (v) => (0,motion_utils__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .u)(0, 1, v),
};
const scale = {
    ...number,
    default: 1,
};




/***/ }),

/***/ 260:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $C: () => (/* binding */ progressPercentage),
/* harmony export */   RW: () => (/* binding */ degrees),
/* harmony export */   aQ: () => (/* binding */ percent),
/* harmony export */   px: () => (/* binding */ px),
/* harmony export */   vh: () => (/* binding */ vh),
/* harmony export */   vw: () => (/* binding */ vw)
/* harmony export */ });
/*#__NO_SIDE_EFFECTS__*/
const createUnitType = (unit) => ({
    test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
    parse: parseFloat,
    transform: (v) => `${v}${unit}`,
});
const degrees = /*@__PURE__*/ createUnitType("deg");
const percent = /*@__PURE__*/ createUnitType("%");
const px = /*@__PURE__*/ createUnitType("px");
const vh = /*@__PURE__*/ createUnitType("vh");
const vw = /*@__PURE__*/ createUnitType("vw");
const progressPercentage = /*@__PURE__*/ (() => ({
    ...percent,
    parse: (v) => percent.parse(v) / 100,
    transform: (v) => percent.transform(v * 100),
}))();




/***/ }),

/***/ 8278:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ floatRegex)
/* harmony export */ });
const floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;




/***/ }),

/***/ 3635:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ sanitize)
/* harmony export */ });
// If this number is a decimal, make it just five decimal places
// to avoid exponents
const sanitize = (v) => Math.round(v * 100000) / 100000;




/***/ }),

/***/ 3697:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cl: () => (/* binding */ removeItem),
/* harmony export */   y4: () => (/* binding */ addUniqueItem)
/* harmony export */ });
/* unused harmony export moveItem */
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1)
        arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1)
        arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}




/***/ }),

/***/ 2541:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ clamp)
/* harmony export */ });
const clamp = (min, max, v) => {
    if (v > max)
        return max;
    if (v < min)
        return min;
    return v;
};




/***/ }),

/***/ 7664:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ warning),
/* harmony export */   k: () => (/* binding */ invariant)
/* harmony export */ });
let warning = () => { };
let invariant = () => { };
if (false) {}




/***/ }),

/***/ 1206:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ MotionGlobalConfig)
/* harmony export */ });
const MotionGlobalConfig = {};




/***/ }),

/***/ 1380:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ isObject)
/* harmony export */ });
function isObject(value) {
    return typeof value === "object" && value !== null;
}




/***/ }),

/***/ 1831:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ memo)
/* harmony export */ });
/*#__NO_SIDE_EFFECTS__*/
function memo(callback) {
    let result;
    return () => {
        if (result === undefined)
            result = callback();
        return result;
    };
}




/***/ }),

/***/ 3201:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ noop)
/* harmony export */ });
/*#__NO_SIDE_EFFECTS__*/
const noop = (any) => any;




/***/ }),

/***/ 6098:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ pipe)
/* harmony export */ });
/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */
const combineFunctions = (a, b) => (v) => b(a(v));
const pipe = (...transformers) => transformers.reduce(combineFunctions);




/***/ }),

/***/ 1756:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ progress)
/* harmony export */ });
/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/
/*#__NO_SIDE_EFFECTS__*/
const progress = (from, to, value) => {
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};




/***/ }),

/***/ 5024:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ SubscriptionManager)
/* harmony export */ });
/* harmony import */ var _array_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3697);


class SubscriptionManager {
    constructor() {
        this.subscriptions = [];
    }
    add(handler) {
        (0,_array_mjs__WEBPACK_IMPORTED_MODULE_0__/* .addUniqueItem */ .y4)(this.subscriptions, handler);
        return () => (0,_array_mjs__WEBPACK_IMPORTED_MODULE_0__/* .removeItem */ .cl)(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions)
            return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */
            this.subscriptions[0](a, b, c);
        }
        else {
            for (let i = 0; i < numSubscriptions; i++) {
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */
                const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}




/***/ }),

/***/ 8268:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ velocityPerSecond)
/* harmony export */ });
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}




/***/ })

};
;