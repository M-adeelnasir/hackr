"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/password/reset/[id]",{

/***/ "./pages/auth/password/reset/[id].js":
/*!*******************************************!*\
  !*** ./pages/auth/password/reset/[id].js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_requests_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/requests/user */ \"./components/requests/user.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/Layouts */ \"./components/Layouts.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar ResetPassdword = function(props) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), name1 = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), token1 = ref2[0], setToken = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (props.router.isReady) {\n            var token = props.router.query.id;\n            // console.log(token);\n            setToken(token);\n            var name = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().decode(token).name;\n            setName(name);\n        }\n    }, [\n        props.router.isReady\n    ]);\n    var handleSubmite = function(e) {\n        e.preventDefault();\n        (0,_components_requests_user__WEBPACK_IMPORTED_MODULE_1__.resetPassword)(password, token1).then(function(res) {\n            console.log(res.data.data);\n        }).catch(function(err) {\n            console.log(err.response.datav);\n        });\n    };\n    var form = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmite,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        className: \"form-control\",\n                        onChange: function(e) {\n                            return setPassword(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\password\\\\reset\\\\[id].js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\password\\\\reset\\\\[id].js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-outline-warning w-100\",\n                    children: \"Reset\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\password\\\\reset\\\\[id].js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, _this1)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\password\\\\reset\\\\[id].js\",\n            lineNumber: 36,\n            columnNumber: 24\n        }, _this1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-md-6 offset-md-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: [\n                        \"Hey, \",\n                        name1,\n                        \"! Submite your new Password\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\password\\\\reset\\\\[id].js\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, _this),\n                form()\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\password\\\\reset\\\\[id].js\",\n            lineNumber: 47,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\password\\\\reset\\\\[id].js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, _this);\n};\n_s(ResetPassdword, \"NN7ZI1xTICjqqQ8FFalq87Pvp6U=\");\n_c = ResetPassdword;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.withRouter)(ResetPassdword));\nvar _c, _c1;\n$RefreshReg$(_c, \"ResetPassdword\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3Bhc3N3b3JkL3Jlc2V0L1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBcUU7QUFDMUI7QUFDWjtBQUNVO0FBQ1k7O0FBRXJELElBQU1NLGNBQWMsR0FBRyxTQUFDQyxLQUFLLEVBQUs7OztJQUM5QixJQUF3Qk4sR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVB4QyxLQU9lLEdBQWFBLEdBQVksR0FBekIsRUFQZixPQU93QixHQUFJQSxHQUFZLEdBQWhCO0lBQ3BCLElBQWdDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBUmhELFFBUW1CLEdBQWlCQSxJQUFZLEdBQTdCLEVBUm5CLFdBUWdDLEdBQUlBLElBQVksR0FBaEI7SUFDNUIsSUFBMEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFUMUMsTUFTZ0IsR0FBY0EsSUFBWSxHQUExQixFQVRoQixRQVMwQixHQUFJQSxJQUFZLEdBQWhCO0lBR3RCQyxnREFBUyxDQUFDLFdBQU07UUFDWixJQUFJSyxLQUFLLENBQUNPLE1BQU0sQ0FBQ0MsT0FBTyxFQUFFO1lBQ3RCLElBQUlILEtBQUssR0FBR0wsS0FBSyxDQUFDTyxNQUFNLENBQUNFLEtBQUssQ0FBQ0MsRUFBRTtZQUNqQyxzQkFBc0I7WUFDdEJKLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO1lBQ2YsSUFBTSxJQUFNLEdBQUtULDBEQUFVLENBQUNTLEtBQUssQ0FBQyxDQUExQkosSUFBSTtZQUNaQyxPQUFPLENBQUNELElBQUksQ0FBQztTQUNoQjtLQUNKLEVBQUU7UUFBQ0QsS0FBSyxDQUFDTyxNQUFNLENBQUNDLE9BQU87S0FBQyxDQUFDO0lBRzFCLElBQU1JLGFBQWEsR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDekJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFFbkJyQix3RUFBYSxDQUFDVSxRQUFRLEVBQUVFLE1BQUssQ0FBQyxDQUN6QlUsSUFBSSxDQUFDLFNBQUNDLEdBQUcsRUFBSztZQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQyxDQUFDO1NBQzlCLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFNBQUNDLEdBQUcsRUFBSztZQUNkSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0csR0FBRyxDQUFDQyxRQUFRLENBQUNDLEtBQUssQ0FBQyxDQUFDO1NBQ25DLENBQUM7S0FFVDtJQUVELElBQU1DLElBQUksR0FBRzs2QkFBTSw4REFBQ0EsTUFBSTtZQUFDQyxRQUFRLEVBQUViLGFBQWE7OzhCQUU1Qyw4REFBQ2MsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLFlBQVk7OEJBQ3ZCLDRFQUFDQyxPQUFLO3dCQUFDQyxJQUFJLEVBQUMsVUFBVTt3QkFBQ0YsU0FBUyxFQUFDLGNBQWM7d0JBQUNHLFFBQVEsRUFBRSxTQUFDakIsQ0FBQzttQ0FBS1QsV0FBVyxDQUFDUyxDQUFDLENBQUNrQixNQUFNLENBQUNDLEtBQUssQ0FBQzt5QkFBQTs7Ozs7OEJBQUk7Ozs7OzBCQUM5Rjs4QkFDTiw4REFBQ0MsUUFBTTtvQkFBQ04sU0FBUyxFQUFDLCtCQUErQjs4QkFBQyxPQUFLOzs7OzswQkFBUzs7Ozs7O2tCQUM3RDtLQUFBO0lBR1AscUJBQ0ksOERBQUM3QiwyREFBTztrQkFDSiw0RUFBQzRCLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLHNCQUFzQjs7OEJBQ2pDLDhEQUFDTyxJQUFFOzt3QkFBQyxPQUFLO3dCQUFDakMsS0FBSTt3QkFBQyw2QkFBMkI7Ozs7Ozt5QkFBSztnQkFFOUN1QixJQUFJLEVBQUU7Ozs7OztpQkFDTDs7Ozs7YUFFQSxDQUNiO0NBRUo7R0FqREt6QixjQUFjO0FBQWRBLEtBQUFBLGNBQWM7QUFxRHBCLCtEQUFlRixNQUFBQSx1REFBVSxDQUFDRSxjQUFjLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9wYXNzd29yZC9yZXNldC9baWRdLmpzPzI0ODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVzZXRQYXNzd29yZCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3JlcXVlc3RzL3VzZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGF5b3V0cyBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRzXCI7XHJcblxyXG5jb25zdCBSZXNldFBhc3Nkd29yZCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5yb3V0ZXIuaXNSZWFkeSkge1xyXG4gICAgICAgICAgICBsZXQgdG9rZW4gPSBwcm9wcy5yb3V0ZXIucXVlcnkuaWRcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgICAgICAgICBzZXRUb2tlbih0b2tlbilcclxuICAgICAgICAgICAgY29uc3QgeyBuYW1lIH0gPSBqd3QuZGVjb2RlKHRva2VuKVxyXG4gICAgICAgICAgICBzZXROYW1lKG5hbWUpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLnJvdXRlci5pc1JlYWR5XSlcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICByZXNldFBhc3N3b3JkKHBhc3N3b3JkLCB0b2tlbilcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhdik7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcm0gPSAoKSA9PiA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0ZX0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtd2FybmluZyB3LTEwMFwiPlJlc2V0PC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dHM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5IZXksIHtuYW1lfSEgU3VibWl0ZSB5b3VyIG5ldyBQYXNzd29yZDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAge2Zvcm0oKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvTGF5b3V0cz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihSZXNldFBhc3Nkd29yZCkiXSwibmFtZXMiOlsicmVzZXRQYXNzd29yZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwiand0Iiwid2l0aFJvdXRlciIsIkxheW91dHMiLCJSZXNldFBhc3Nkd29yZCIsInByb3BzIiwibmFtZSIsInNldE5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidG9rZW4iLCJzZXRUb2tlbiIsInJvdXRlciIsImlzUmVhZHkiLCJxdWVyeSIsImlkIiwiZGVjb2RlIiwiaGFuZGxlU3VibWl0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwicmVzcG9uc2UiLCJkYXRhdiIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/password/reset/[id].js\n");

/***/ })

});