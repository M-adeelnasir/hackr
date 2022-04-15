"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layouts */ \"./components/Layouts.js\");\n/* harmony import */ var _components_requests_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/requests/user */ \"./components/requests/user.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Login = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"adnasirkbw@gmail.com\",\n        password: \"123456hjh\",\n        error: \"\",\n        success: \"\",\n        buttonText: \"Login\"\n    }), state = ref[0], setState = ref[1];\n    var email = state.email, password = state.password, error = state.error, success = state.success, buttonText = state.buttonText;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var handleChange = function(e) {\n        var _obj;\n        setState(_objectSpread({}, state, (_obj = {}, _defineProperty(_obj, e.target.name, e.target.value), _defineProperty(_obj, \"error\", \"\"), _defineProperty(_obj, \"success\", \"\"), _obj)));\n    };\n    var handleLoginSubmite = function(e) {\n        e.preventDefault();\n        try {\n            var res = (0,_components_requests_user__WEBPACK_IMPORTED_MODULE_3__.loginUser)(email, password);\n            console.log(res);\n        } catch (err) {\n            console.log(err.response);\n        }\n    };\n    var form = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleLoginSubmite,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group mt-3 mb-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        className: \"form-control\",\n                        value: email,\n                        name: \"email\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group mt-3 mb-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        className: \"form-control\",\n                        value: password,\n                        name: \"password\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-outline-warning w-100 mt-2 \",\n                    children: buttonText\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-2 float-right\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"text-danger\",\n                            children: \"Forgot Password\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n                            lineNumber: 49,\n                            columnNumber: 29\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this1)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n            lineNumber: 36,\n            columnNumber: 24\n        }, _this1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-md-6 offset-md-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, _this),\n                form()\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n            lineNumber: 57,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, _this);\n};\n_s(Login, \"JgLDkuc4I1lijqF8hXIEghUOGs0=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk7Ozs7OzhCQUFPOzs7OzswQkFDcEU7Ozs7OztrQkFFSDtLQUFBO0lBR1AscUJBQ0ksOERBQUM1QiwyREFBTztrQkFDSiw0RUFBQzJCLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLHNCQUFzQjs7OEJBQ2pDLDhEQUFDTyxJQUFFOzhCQUFDLE9BQUs7Ozs7O3lCQUFLO2dCQUNiVixJQUFJLEVBQUU7Ozs7OztpQkFDTDs7Ozs7YUFDQSxDQUNiO0NBQ0o7R0F4REt0QixLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUEwRFgsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXRzIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0cydcclxuaW1wb3J0IHsgbG9naW5Vc2VyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9yZXF1ZXN0cy91c2VyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogXCJhZG5hc2lya2J3QGdtYWlsLmNvbVwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIjEyMzQ1NmhqaFwiLFxyXG4gICAgICAgIGVycm9yOiBcIlwiLFxyXG4gICAgICAgIHN1Y2Nlc3M6IFwiXCIsXHJcbiAgICAgICAgYnV0dG9uVGV4dDogXCJMb2dpblwiXHJcbiAgICB9KVxyXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBzdWNjZXNzLCBidXR0b25UZXh0IH0gPSBzdGF0ZVxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSwgZXJyb3I6IFwiXCIsIHN1Y2Nlc3M6IFwiXCJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dpblN1Ym1pdGUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGxvZ2luVXNlcihlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcm0gPSAoKSA9PiA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTG9naW5TdWJtaXRlfSA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG10LTMgbWItMlwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e2VtYWlsfSBuYW1lPVwiZW1haWxcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtdC0zIG1iLTJcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtwYXNzd29yZH0gbmFtZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXdhcm5pbmcgdy0xMDAgbXQtMiBcIj57YnV0dG9uVGV4dH08L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTIgZmxvYXQtcmlnaHQnPlxyXG5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgPjxhIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInID5Gb3Jnb3QgUGFzc3dvcmQ8L2E+PC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZm9ybT5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0cz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGgyPkxvZ2luPC9oMj5cclxuICAgICAgICAgICAgICAgIHtmb3JtKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0cz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXRzIiwibG9naW5Vc2VyIiwiTGluayIsIkxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwic3VjY2VzcyIsImJ1dHRvblRleHQiLCJzdGF0ZSIsInNldFN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlTG9naW5TdWJtaXRlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicmVzcG9uc2UiLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImJ1dHRvbiIsImhyZWYiLCJhIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

});