"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/activate/[id]",{

/***/ "./components/requests/user.js":
/*!*************************************!*\
  !*** ./components/requests/user.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addUser\": function() { return /* binding */ addUser; },\n/* harmony export */   \"activateAccount\": function() { return /* binding */ activateAccount; }\n/* harmony export */ });\n/* harmony import */ var C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar addUser = function() {\n    var _ref = _asyncToGenerator(C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(name, email, password) {\n        return C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"\".concat(\"http://localhost:4000/api/v1\", \"/register\"), {\n                        name: name,\n                        email: email,\n                        password: password\n                    });\n                case 2:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function addUser(name, email, password) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar activateAccount = function() {\n    var _ref = _asyncToGenerator(C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(token) {\n        return C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"\".concat(\"http://localhost:4000/api/v1\", \"/register/activate\"), {\n                        token: token\n                    });\n                case 2:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function activateAccount(token) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlcXVlc3RzL3VzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNsQixJQUFNQyxPQUFPO2VBQUcsOExBQU9DLElBQUksRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUs7Ozs7OzJCQUN2Q0osaURBQVUsQ0FBQyxFQUFDLENBQTBDLE1BQVMsQ0FBakRNLDhCQUF1QyxFQUFDLFdBQVMsQ0FBQyxFQUN6RTt3QkFBRUosSUFBSSxFQUFKQSxJQUFJO3dCQUFFQyxLQUFLLEVBQUxBLEtBQUs7d0JBQUVDLFFBQVEsRUFBUkEsUUFBUTtxQkFBRSxDQUM1Qjs7Ozs7Ozs7S0FDSjtvQkFKWUgsT0FBTyxDQUFVQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsUUFBUTs7O0dBSWxEO0FBRU0sSUFBTUssZUFBZTtlQUFHLDhMQUFPQyxLQUFLLEVBQUs7Ozs7OzJCQUMvQlYsaURBQVUsQ0FBQyxFQUFDLENBQTBDLE1BQWtCLENBQTFETSw4QkFBdUMsRUFBQyxvQkFBa0IsQ0FBQyxFQUNsRjt3QkFBRUksS0FBSyxFQUFMQSxLQUFLO3FCQUFFLENBQ1o7Ozs7Ozs7O0tBQ0o7b0JBSllELGVBQWUsQ0FBVUMsS0FBSzs7O0dBSTFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcmVxdWVzdHMvdXNlci5qcz8wYjIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuZXhwb3J0IGNvbnN0IGFkZFVzZXIgPSBhc3luYyAobmFtZSwgZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfUkVRVUVTVF9VUkx9L3JlZ2lzdGVyYCxcclxuICAgICAgICB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3RpdmF0ZUFjY291bnQgPSBhc3luYyAodG9rZW4pID0+IHtcclxuICAgIHJldHVybiBhd2FpdCBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9SRVFVRVNUX1VSTH0vcmVnaXN0ZXIvYWN0aXZhdGVgLFxyXG4gICAgICAgIHsgdG9rZW4gfVxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbImF4aW9zIiwiYWRkVXNlciIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicG9zdCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfUkVRVUVTVF9VUkwiLCJhY3RpdmF0ZUFjY291bnQiLCJ0b2tlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/requests/user.js\n");

/***/ }),

/***/ "./pages/auth/activate/[id].js":
/*!*************************************!*\
  !*** ./pages/auth/activate/[id].js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jsonwebtoken */ \"./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layouts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Layouts */ \"./components/Layouts.js\");\n/* harmony import */ var _components_requests_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/requests/user */ \"./components/requests/user.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar ActivateAccount = function(param) {\n    var router = param.router;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        name: \"\",\n        success: \"\",\n        error: \"\",\n        token: \"\"\n    }), values = ref[0], setValues = ref[1];\n    var name1 = values.name, success = values.success, error = values.error, token1 = values.token;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        // console.log(JSON.stringify(router), null, 4)\n        var token = router.query.id;\n        //decode the name of user fromtoken\n        var name = jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default().decode(token).name;\n        setValues(_objectSpread({}, values, {\n            name: name,\n            token: token\n        }));\n    }, []);\n    var handleAvtivate = function() {\n        var _ref = _asyncToGenerator(C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var res;\n            return C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return (0,_components_requests_user__WEBPACK_IMPORTED_MODULE_7__.activateAccount)(token1);\n                    case 4:\n                        res = _ctx.sent;\n                        console.log(res);\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    8\n                ]\n            ]);\n        }));\n        return function handleAvtivate(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layouts__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"col-md-6 offset-md-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        children: [\n                            \"Thanks'\",\n                            name1,\n                            \" For registration Activate your account!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\activate\\\\[id].js\",\n                        lineNumber: 47,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\activate\\\\[id].js\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: handleAvtivate,\n                        className: \"btn btn-outline-warning w-100\",\n                        children: \"Activate Account\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\activate\\\\[id].js\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\activate\\\\[id].js\",\n                lineNumber: 46,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\activate\\\\[id].js\",\n            lineNumber: 45,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\activate\\\\[id].js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, _this);\n};\n_s(ActivateAccount, \"nRNjnxYEiFpg0/b1RDlkSpciyBU=\");\n_c = ActivateAccount;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.withRouter)(ActivateAccount));\nvar _c, _c1;\n$RefreshReg$(_c, \"ActivateAccount\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL2FjdGl2YXRlL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNHO0FBQ2xCO0FBQ0s7QUFDbUI7QUFDa0I7O0FBRW5FLElBQU1PLGVBQWUsR0FBRyxnQkFBZ0I7UUFBYkMsTUFBTSxTQUFOQSxNQUFNOztJQUU3QixJQUE0Qk4sR0FNMUIsR0FOMEJBLCtDQUFRLENBQUM7UUFDakNPLElBQUksRUFBRSxFQUFFO1FBQ1JDLE9BQU8sRUFBRSxFQUFFO1FBQ1hDLEtBQUssRUFBRSxFQUFFO1FBQ1RDLEtBQUssRUFBRSxFQUFFO0tBRVosQ0FBQyxFQWZOLE1BU2lCLEdBQWVWLEdBTTFCLEdBTlcsRUFUakIsU0FTNEIsR0FBSUEsR0FNMUIsR0FOc0I7SUFPeEIsSUFBUU8sS0FBSSxHQUE0QkksTUFBTSxDQUF0Q0osSUFBSSxFQUFFQyxPQUFPLEdBQW1CRyxNQUFNLENBQWhDSCxPQUFPLEVBQUVDLEtBQUssR0FBWUUsTUFBTSxDQUF2QkYsS0FBSyxFQUFFQyxNQUFLLEdBQUtDLE1BQU0sQ0FBaEJELEtBQUs7SUFHbkNYLGdEQUFTLENBQUMsV0FBTTtRQUNaLCtDQUErQztRQUMvQyxJQUFJVyxLQUFLLEdBQUdKLE1BQU0sQ0FBQ08sS0FBSyxDQUFDQyxFQUFFO1FBQzNCLG1DQUFtQztRQUNuQyxJQUFNLElBQU0sR0FBS1osMERBQVUsQ0FBQ1EsS0FBSyxDQUFDLENBQTFCSCxJQUFJO1FBQ1pLLFNBQVMsQ0FBQyxrQkFBS0QsTUFBTTtZQUFFSixJQUFJLEVBQUVBLElBQUk7WUFBRUcsS0FBSyxFQUFFQSxLQUFLO1VBQUcsQ0FBQztLQUN0RCxFQUFFLEVBQUUsQ0FBQztJQUdOLElBQU1NLGNBQWM7bUJBQUcsOExBQU9DLENBQUMsRUFBSztnQkFJdEJDLEdBQUc7Ozs7d0JBSGJELENBQUMsQ0FBQ0UsY0FBYyxFQUFFLENBQUM7OzsrQkFHR2YsMEVBQWUsQ0FBQ00sTUFBSyxDQUFDOzt3QkFBbENRLEdBQUcsWUFBK0I7d0JBQ3hDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDLENBQUM7Ozs7Ozt3QkFFakJFLE9BQU8sQ0FBQ0MsR0FBRyxTQUFLLENBQUM7Ozs7Ozs7Ozs7O1NBR3hCO3dCQVZLTCxjQUFjLENBQVVDLENBQUM7OztPQVU5QjtJQUdELHFCQUNJLDhEQUFDZCwyREFBTztrQkFFSiw0RUFBQ21CLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLEtBQUs7c0JBQ2hCLDRFQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsc0JBQXNCOztrQ0FDakMsOERBQUNDLElBQUU7OzRCQUFDLFNBQU87NEJBQUNqQixLQUFJOzRCQUFDLDBDQUF3Qzs7Ozs7OzZCQUFLO2tDQUM5RCw4REFBQ2tCLElBQUU7Ozs7NkJBQUc7a0NBQ04sOERBQUNDLFFBQU07d0JBQUNDLE9BQU8sRUFBRVgsY0FBYzt3QkFBRU8sU0FBUyxFQUFDLCtCQUErQjtrQ0FBQyxrQkFFM0U7Ozs7OzZCQUFTOzs7Ozs7cUJBQ1A7Ozs7O2lCQUNKOzs7OzthQUlBLENBQ2I7Q0FDSjtHQW5ES2xCLGVBQWU7QUFBZkEsS0FBQUEsZUFBZTtBQXFEckIsK0RBQWVQLE1BQUFBLHVEQUFVLENBQUNPLGVBQWUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hdXRoL2FjdGl2YXRlL1tpZF0uanM/NmY0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuaW1wb3J0IExheW91dHMgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRzJ1xyXG5pbXBvcnQgeyBhY3RpdmF0ZUFjY291bnQgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3JlcXVlc3RzL3VzZXInXHJcblxyXG5jb25zdCBBY3RpdmF0ZUFjY291bnQgPSAoeyByb3V0ZXIgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBzdWNjZXNzOiBcIlwiLFxyXG4gICAgICAgIGVycm9yOiBcIlwiLFxyXG4gICAgICAgIHRva2VuOiBcIlwiLFxyXG5cclxuICAgIH0pXHJcbiAgICBjb25zdCB7IG5hbWUsIHN1Y2Nlc3MsIGVycm9yLCB0b2tlbiB9ID0gdmFsdWVzO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJvdXRlciksIG51bGwsIDQpXHJcbiAgICAgICAgbGV0IHRva2VuID0gcm91dGVyLnF1ZXJ5LmlkO1xyXG4gICAgICAgIC8vZGVjb2RlIHRoZSBuYW1lIG9mIHVzZXIgZnJvbXRva2VuXHJcbiAgICAgICAgY29uc3QgeyBuYW1lIH0gPSBqd3QuZGVjb2RlKHRva2VuKVxyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbmFtZTogbmFtZSwgdG9rZW46IHRva2VuLCB9KVxyXG4gICAgfSwgW10pXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUF2dGl2YXRlID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFjdGl2YXRlQWNjb3VudCh0b2tlbilcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXRzPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+VGhhbmtzJ3tuYW1lfSBGb3IgcmVnaXN0cmF0aW9uIEFjdGl2YXRlIHlvdXIgYWNjb3VudCE8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQXZ0aXZhdGV9IGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS13YXJuaW5nIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjdGl2YXRlIEFjY291bnRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkocm91dGVyKX0gKi99XHJcblxyXG4gICAgICAgIDwvTGF5b3V0cz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBY3RpdmF0ZUFjY291bnQpIl0sIm5hbWVzIjpbIndpdGhSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiand0IiwiTGF5b3V0cyIsImFjdGl2YXRlQWNjb3VudCIsIkFjdGl2YXRlQWNjb3VudCIsInJvdXRlciIsIm5hbWUiLCJzdWNjZXNzIiwiZXJyb3IiLCJ0b2tlbiIsInZhbHVlcyIsInNldFZhbHVlcyIsInF1ZXJ5IiwiaWQiLCJkZWNvZGUiLCJoYW5kbGVBdnRpdmF0ZSIsImUiLCJyZXMiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsImJyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/activate/[id].js\n");

/***/ })

});