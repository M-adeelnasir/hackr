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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layouts */ \"./components/Layouts.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Login = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"adnasirkbw@gmail.com\",\n        password: \"123456hjh\",\n        error: \"\",\n        success: \"\"\n    }), state = ref[0], setState = ref[1];\n    var email = state.email, password = state.password, error = state.error, success = state.success;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var handleChange = function(e) {\n        var _obj;\n        setState(_objectSpread({}, state, (_obj = {}, _defineProperty(_obj, e.target.name, e.target.value), _defineProperty(_obj, \"error\", \"\"), _defineProperty(_obj, \"success\", \"\"), _obj)));\n    };\n    var handleLoginSubmite = function(e) {\n        e.preventDefalut();\n    };\n    var form = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleLoginSubmite,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group mt-3 mb-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        className: \"form-control\",\n                        value: email,\n                        name: \"email\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group mt-3 mb-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        className: \"form-control\",\n                        value: password,\n                        name: \"password\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-outline-warning btn-block border-0\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this1)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n            lineNumber: 27,\n            columnNumber: 24\n        }, _this1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-md-6 offset-md-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, _this),\n                form()\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\login.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, _this);\n};\n_s(Login, \"fic7FMR7AJmRtVjmXOR1lyjAP9c=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDQTtBQUNmOztBQUU1QixJQUFNSSxLQUFLLEdBQUcsV0FBTTs7O0lBQ2hCLElBQTBCSCxHQUt4QixHQUx3QkEsK0NBQVEsQ0FBQztRQUMvQkksS0FBSyxFQUFFLHNCQUFzQjtRQUM3QkMsUUFBUSxFQUFFLFdBQVc7UUFDckJDLEtBQUssRUFBRSxFQUFFO1FBQ1RDLE9BQU8sRUFBRSxFQUFFO0tBQ2QsQ0FBQyxFQVZOLEtBS2dCLEdBQWNQLEdBS3hCLEdBTFUsRUFMaEIsUUFLMEIsR0FBSUEsR0FLeEIsR0FMb0I7SUFNdEIsSUFBUUksS0FBSyxHQUErQkksS0FBSyxDQUF6Q0osS0FBSyxFQUFFQyxRQUFRLEdBQXFCRyxLQUFLLENBQWxDSCxRQUFRLEVBQUVDLEtBQUssR0FBY0UsS0FBSyxDQUF4QkYsS0FBSyxFQUFFQyxPQUFPLEdBQUtDLEtBQUssQ0FBakJELE9BQU87SUFDdkMsSUFBOEJQLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFaakQsT0FZa0IsR0FBZ0JBLElBQWUsR0FBL0IsRUFabEIsVUFZOEIsR0FBSUEsSUFBZSxHQUFuQjtJQUcxQixJQUFNWSxZQUFZLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLOztRQUN4QkosUUFBUSxDQUFDLGtCQUNGRCxLQUFLLGNBQUUsc0JBQUNLLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLEVBQUdGLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRSxLQUFLLEdBQUVWLHNCQUFBQSxPQUFLLEVBQUUsRUFBRSxHQUFFQyxzQkFBQUEsU0FBTyxFQUFFLEVBQUUsU0FDcEUsQ0FBQztLQUNMO0lBR0QsSUFBTVUsa0JBQWtCLEdBQUcsU0FBQ0osQ0FBQyxFQUFLO1FBQzlCQSxDQUFDLENBQUNLLGNBQWMsRUFBRTtLQUNyQjtJQUVELElBQU1DLElBQUksR0FBRzs2QkFBTSw4REFBQ0EsTUFBSTtZQUFDQyxRQUFRLEVBQUVILGtCQUFrQjs7OEJBQ2pELDhEQUFDSSxLQUFHO29CQUFDQyxTQUFTLEVBQUMsc0JBQXNCOzhCQUNqQyw0RUFBQ0MsT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLE9BQU87d0JBQUNGLFNBQVMsRUFBQyxjQUFjO3dCQUFDTixLQUFLLEVBQUVaLEtBQUs7d0JBQUVXLElBQUksRUFBQyxPQUFPO3dCQUFDVSxRQUFRLEVBQUViLFlBQVk7Ozs7OzhCQUFJOzs7OzswQkFDaEc7OEJBQ04sOERBQUNTLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxzQkFBc0I7OEJBQ2pDLDRFQUFDQyxPQUFLO3dCQUFDQyxJQUFJLEVBQUMsVUFBVTt3QkFBQ0YsU0FBUyxFQUFDLGNBQWM7d0JBQUNOLEtBQUssRUFBRVgsUUFBUTt3QkFBRVUsSUFBSSxFQUFDLFVBQVU7d0JBQUNVLFFBQVEsRUFBRWIsWUFBWTs7Ozs7OEJBQUk7Ozs7OzBCQUV6Rzs4QkFFTiw4REFBQ2MsUUFBTTtvQkFBQ0osU0FBUyxFQUFDLDRDQUE0Qzs4QkFBQyxPQUFLOzs7OzswQkFBUzs7Ozs7O2tCQUMxRTtLQUFBO0lBR1AscUJBQ0ksOERBQUNyQiwyREFBTztrQkFDSiw0RUFBQ29CLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLHNCQUFzQjs7OEJBQ2pDLDhEQUFDSyxJQUFFOzhCQUFDLE9BQUs7Ozs7O3lCQUFLO2dCQUNiUixJQUFJLEVBQUU7Ozs7OztpQkFDTDs7Ozs7YUFDQSxDQUNiO0NBQ0o7R0EzQ0toQixLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUE2Q1gsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXRzIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0cydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogXCJhZG5hc2lya2J3QGdtYWlsLmNvbVwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIjEyMzQ1NmhqaFwiLFxyXG4gICAgICAgIGVycm9yOiBcIlwiLFxyXG4gICAgICAgIHN1Y2Nlc3M6IFwiXCJcclxuICAgIH0pXHJcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIHN1Y2Nlc3MgfSA9IHN0YXRlXHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLCBlcnJvcjogXCJcIiwgc3VjY2VzczogXCJcIlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ2luU3VibWl0ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYWx1dCgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybSA9ICgpID0+IDxmb3JtIG9uU3VibWl0PXtoYW5kbGVMb2dpblN1Ym1pdGV9ID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbXQtMyBtYi0yXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17ZW1haWx9IG5hbWU9XCJlbWFpbFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG10LTMgbWItMlwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3Bhc3N3b3JkfSBuYW1lPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtd2FybmluZyBidG4tYmxvY2sgYm9yZGVyLTBcIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXRzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+TG9naW48L2gyPlxyXG4gICAgICAgICAgICAgICAge2Zvcm0oKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXRzPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxheW91dHMiLCJMaW5rIiwiTG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiZXJyb3IiLCJzdWNjZXNzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUxvZ2luU3VibWl0ZSIsInByZXZlbnREZWZhbHV0IiwiZm9ybSIsIm9uU3VibWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJidXR0b24iLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

});