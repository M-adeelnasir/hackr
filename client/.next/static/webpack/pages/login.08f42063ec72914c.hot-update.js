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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layouts */ \"./components/Layouts.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Login = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"adnasirkbw@gmail.com\",\n        password: \"123456hjh\",\n        error: \"\",\n        success: \"\",\n        buttonText: \"Login\"\n    }), state = ref[0], setState = ref[1];\n    var email = state.email, password = state.password, error = state.error, success = state.success, buttonText = state.buttonText;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var handleChange = function(e) {\n        var _obj;\n        setState(_objectSpread({}, state, (_obj = {}, _defineProperty(_obj, e.target.name, e.target.value), _defineProperty(_obj, \"error\", \"\"), _defineProperty(_obj, \"success\", \"\"), _obj)));\n    };\n    var handleLoginSubmite = function(e) {\n        e.preventDefalut();\n    };\n    var form = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleLoginSubmite,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group mt-3 mb-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        className: \"form-control\",\n                        value: email,\n                        name: \"email\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group mt-3 mb-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        className: \"form-control\",\n                        value: password,\n                        name: \"password\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-outline-warning w-100 mt-2 \",\n                    children: buttonText\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this1)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n            lineNumber: 28,\n            columnNumber: 24\n        }, _this1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-md-6 offset-md-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, _this),\n                form()\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, _this);\n};\n_s(Login, \"JgLDkuc4I1lijqF8hXIEghUOGs0=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDQTtBQUNmOztBQUU1QixJQUFNSSxLQUFLLEdBQUcsV0FBTTs7O0lBQ2hCLElBQTBCSCxHQU14QixHQU53QkEsK0NBQVEsQ0FBQztRQUMvQkksS0FBSyxFQUFFLHNCQUFzQjtRQUM3QkMsUUFBUSxFQUFFLFdBQVc7UUFDckJDLEtBQUssRUFBRSxFQUFFO1FBQ1RDLE9BQU8sRUFBRSxFQUFFO1FBQ1hDLFVBQVUsRUFBRSxPQUFPO0tBQ3RCLENBQUMsRUFYTixLQUtnQixHQUFjUixHQU14QixHQU5VLEVBTGhCLFFBSzBCLEdBQUlBLEdBTXhCLEdBTm9CO0lBT3RCLElBQVFJLEtBQUssR0FBMkNLLEtBQUssQ0FBckRMLEtBQUssRUFBRUMsUUFBUSxHQUFpQ0ksS0FBSyxDQUE5Q0osUUFBUSxFQUFFQyxLQUFLLEdBQTBCRyxLQUFLLENBQXBDSCxLQUFLLEVBQUVDLE9BQU8sR0FBaUJFLEtBQUssQ0FBN0JGLE9BQU8sRUFBRUMsVUFBVSxHQUFLQyxLQUFLLENBQXBCRCxVQUFVO0lBQ25ELElBQThCUixJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBYmpELE9BYWtCLEdBQWdCQSxJQUFlLEdBQS9CLEVBYmxCLFVBYThCLEdBQUlBLElBQWUsR0FBbkI7SUFHMUIsSUFBTWEsWUFBWSxHQUFHLFNBQUNDLENBQUMsRUFBSzs7UUFDeEJKLFFBQVEsQ0FBQyxrQkFDRkQsS0FBSyxjQUFFLHNCQUFDSyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxFQUFHRixDQUFDLENBQUNDLE1BQU0sQ0FBQ0UsS0FBSyxHQUFFWCxzQkFBQUEsT0FBSyxFQUFFLEVBQUUsR0FBRUMsc0JBQUFBLFNBQU8sRUFBRSxFQUFFLFNBQ3BFLENBQUM7S0FDTDtJQUdELElBQU1XLGtCQUFrQixHQUFHLFNBQUNKLENBQUMsRUFBSztRQUM5QkEsQ0FBQyxDQUFDSyxjQUFjLEVBQUU7S0FDckI7SUFFRCxJQUFNQyxJQUFJLEdBQUc7NkJBQU0sOERBQUNBLE1BQUk7WUFBQ0MsUUFBUSxFQUFFSCxrQkFBa0I7OzhCQUNqRCw4REFBQ0ksS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHNCQUFzQjs4QkFDakMsNEVBQUNDLE9BQUs7d0JBQUNDLElBQUksRUFBQyxPQUFPO3dCQUFDRixTQUFTLEVBQUMsY0FBYzt3QkFBQ04sS0FBSyxFQUFFYixLQUFLO3dCQUFFWSxJQUFJLEVBQUMsT0FBTzt3QkFBQ1UsUUFBUSxFQUFFYixZQUFZOzs7Ozs4QkFBSTs7Ozs7MEJBQ2hHOzhCQUNOLDhEQUFDUyxLQUFHO29CQUFDQyxTQUFTLEVBQUMsc0JBQXNCOzhCQUNqQyw0RUFBQ0MsT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLFVBQVU7d0JBQUNGLFNBQVMsRUFBQyxjQUFjO3dCQUFDTixLQUFLLEVBQUVaLFFBQVE7d0JBQUVXLElBQUksRUFBQyxVQUFVO3dCQUFDVSxRQUFRLEVBQUViLFlBQVk7Ozs7OzhCQUFJOzs7OzswQkFFekc7OEJBRU4sOERBQUNjLFFBQU07b0JBQUNKLFNBQVMsRUFBQyxxQ0FBcUM7OEJBQUVmLFVBQVU7Ozs7OzBCQUFVOzs7Ozs7a0JBQzFFO0tBQUE7SUFHUCxxQkFDSSw4REFBQ1AsMkRBQU87a0JBQ0osNEVBQUNxQixLQUFHO1lBQUNDLFNBQVMsRUFBQyxzQkFBc0I7OzhCQUNqQyw4REFBQ0ssSUFBRTs4QkFBQyxPQUFLOzs7Ozt5QkFBSztnQkFDYlIsSUFBSSxFQUFFOzs7Ozs7aUJBQ0w7Ozs7O2FBQ0EsQ0FDYjtDQUNKO0dBNUNLakIsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBOENYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0cyBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dHMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1haWw6IFwiYWRuYXNpcmtid0BnbWFpbC5jb21cIixcclxuICAgICAgICBwYXNzd29yZDogXCIxMjM0NTZoamhcIixcclxuICAgICAgICBlcnJvcjogXCJcIixcclxuICAgICAgICBzdWNjZXNzOiBcIlwiLFxyXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiTG9naW5cIlxyXG4gICAgfSlcclxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCBlcnJvciwgc3VjY2VzcywgYnV0dG9uVGV4dCB9ID0gc3RhdGVcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsIGVycm9yOiBcIlwiLCBzdWNjZXNzOiBcIlwiXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9naW5TdWJtaXRlID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhbHV0KClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JtID0gKCkgPT4gPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUxvZ2luU3VibWl0ZX0gPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtdC0zIG1iLTJcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtlbWFpbH0gbmFtZT1cImVtYWlsXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbXQtMyBtYi0yXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17cGFzc3dvcmR9IG5hbWU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS13YXJuaW5nIHctMTAwIG10LTIgXCI+e2J1dHRvblRleHR9PC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dHM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5Mb2dpbjwvaDI+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybSgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dHM+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0cyIsIkxpbmsiLCJMb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsInN1Y2Nlc3MiLCJidXR0b25UZXh0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUxvZ2luU3VibWl0ZSIsInByZXZlbnREZWZhbHV0IiwiZm9ybSIsIm9uU3VibWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJidXR0b24iLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

});