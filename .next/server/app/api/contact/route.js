"use strict";
(() => {
var exports = {};
exports.id = 386;
exports.ids = [386];
exports.modules = {

/***/ 9491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 3663:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 2361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 6224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 2276:
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

// NAMESPACE OBJECT: ./app/api/contact/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
// EXTERNAL MODULE: ./node_modules/@sendgrid/mail/index.js
var mail = __webpack_require__(3343);
var mail_default = /*#__PURE__*/__webpack_require__.n(mail);
;// CONCATENATED MODULE: ./utils/email.js

async function sendEmail({ subject, text, html }) {
    try {
        if (!process.env.SENDGRID_API_KEY) {
            console.error("SENDGRID_API_KEY is not defined");
            throw new Error("SENDGRID_API_KEY is required");
        }
        if (!process.env.EMAIL_FROM) {
            console.error("EMAIL_FROM is not defined");
            throw new Error("EMAIL_FROM is required");
        }
        if (!process.env.EMAIL_TO) {
            console.error("EMAIL_TO is not defined");
            throw new Error("EMAIL_TO is required");
        }
        mail_default().setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: process.env.EMAIL_TO,
            from: process.env.EMAIL_FROM,
            subject,
            text,
            html
        };
        const response = await mail_default().send(msg);
        return {
            success: true,
            response
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

;// CONCATENATED MODULE: ./app/api/contact/route.js


async function POST(request) {
    try {
        // Log the full request details
        console.log("Request headers:", Object.fromEntries(request.headers));
        // Validate environment variables
        if (!process.env.SENDGRID_API_KEY || !process.env.EMAIL_FROM) {
            console.error("Missing required environment variables:", {
                hasApiKey: !!process.env.SENDGRID_API_KEY,
                hasFromEmail: !!process.env.EMAIL_FROM,
                apiKeyLength: process.env.SENDGRID_API_KEY?.length,
                fromEmail: process.env.EMAIL_FROM
            });
            return next_response/* default */.Z.json({
                error: "Email service is not properly configured"
            }, {
                status: 503
            });
        }
        const body = await request.json();
        console.log("Received request body:", body);
        const { name, mobile, email, homeType, location } = body;
        // Validate required fields
        if (!name || !mobile || !email || !homeType || !location) {
            return next_response/* default */.Z.json({
                error: "All fields are required"
            }, {
                status: 400
            });
        }
        const emailResponse = await sendEmail({
            subject: `New Consultation Request from ${name}`,
            text: `
        New Consultation Request Details:
        
        Name: ${name}
        Mobile: ${mobile}
        Email: ${email}
        Home Type: ${homeType}
        Location: ${location}
        
        Time submitted: ${new Date().toLocaleString()}
      `,
            html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Home Type:</strong> ${homeType}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Time submitted:</strong> ${new Date().toLocaleString()}</p>
      `
        });
        if (!emailResponse.success) {
            console.error("Email sending failed:", emailResponse.error);
            return next_response/* default */.Z.json({
                error: `Failed to send email: ${emailResponse.error}`
            }, {
                status: 500
            });
        }
        console.log("Email sent successfully:", emailResponse.response);
        return next_response/* default */.Z.json({
            message: "Consultation request submitted successfully"
        }, {
            status: 200
        });
    } catch (error) {
        console.error("Error in contact API:", error);
        return next_response/* default */.Z.json({
            error: `Failed to process request: ${error.message}`
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcontact%2Froute&name=app%2Fapi%2Fcontact%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.js&appDir=C%3A%5CUsers%5CASUS%5CDesktop%5Cabhiram-main%5Capp&appPaths=%2Fapi%2Fcontact%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/contact/route",
        pathname: "/api/contact",
        filename: "route",
        bundlePath: "app/api/contact/route"
    },
    resolvedPagePath: "C:\\Users\\ASUS\\Desktop\\abhiram-main\\app\\api\\contact\\route.js",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/contact/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,501,335,343], () => (__webpack_exec__(2276)));
module.exports = __webpack_exports__;

})();