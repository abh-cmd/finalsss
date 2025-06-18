"use strict";
(() => {
var exports = {};
exports.id = 854;
exports.ids = [854];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 9056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/env-test/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
;// CONCATENATED MODULE: ./app/api/env-test/route.js

async function GET() {
    // Log all environment variables
    console.log("Environment Variables Check:");
    console.log("SENDGRID_API_KEY exists:", !!process.env.SENDGRID_API_KEY);
    console.log("EMAIL_FROM exists:", !!process.env.EMAIL_FROM);
    console.log("EMAIL_TO exists:", !!process.env.EMAIL_TO);
    console.log("NEXT_PUBLIC_SITE_URL exists:", !!process.env.NEXT_PUBLIC_SITE_URL);
    // Return detailed response
    return next_response/* default */.Z.json({
        environment: "production",
        variables: {
            hasApiKey: !!process.env.SENDGRID_API_KEY,
            hasFromEmail: !!process.env.EMAIL_FROM,
            hasToEmail: !!process.env.EMAIL_TO,
            hasSiteUrl: !!process.env.NEXT_PUBLIC_SITE_URL,
            apiKeyLength: process.env.SENDGRID_API_KEY?.length,
            fromEmail: process.env.EMAIL_FROM,
            toEmail: process.env.EMAIL_TO,
            siteUrl: process.env.NEXT_PUBLIC_SITE_URL
        }
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fenv-test%2Froute&name=app%2Fapi%2Fenv-test%2Froute&pagePath=private-next-app-dir%2Fapi%2Fenv-test%2Froute.js&appDir=C%3A%5CUsers%5CASUS%5CDesktop%5Cabhiram-main%5Capp&appPaths=%2Fapi%2Fenv-test%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/env-test/route",
        pathname: "/api/env-test",
        filename: "route",
        bundlePath: "app/api/env-test/route"
    },
    resolvedPagePath: "C:\\Users\\ASUS\\Desktop\\abhiram-main\\app\\api\\env-test\\route.js",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/env-test/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,501,335], () => (__webpack_exec__(9056)));
module.exports = __webpack_exports__;

})();