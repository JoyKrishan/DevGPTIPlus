},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","../movie-card/movie-card":"bwuIu","../movie-view/movie-view":"ggaUx","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1","../login-view/login-view":"9YtA0","../signup-view/signup-view":"4OGiN","react-bootstrap/Row":"cMC39","react-bootstrap/Col":"2L2I6","../profile-view/profile-view":"2vVqf","../navigation-bar/navigation-bar":"bsPVM","react-router-dom":"9xmpe"}],"bwuIu":[function(require,module,exports) {
},{"react/jsx-dev-runtime":"iTorj","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1","prop-types":"7wKI2","react-bootstrap":"3AD9A","react":"21dqq","react-router-dom":"9xmpe"}],"eosz2":[function(require,module,exports) {
},{"react/jsx-dev-runtime":"iTorj","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1","react-bootstrap":"3AD9A","react-router":"dbWyW","react-router-dom":"9xmpe"}],"9YtA0":[function(require,module,exports) {
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1","react-bootstrap/Button":"aPzUt","react-bootstrap/Form":"iBZ80"}],"2vVqf":[function(require,module,exports) {
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-router-dom":"9xmpe","react-bootstrap":"3AD9A","./user-info":"66eot","./favourite-movies":"9FAJ6","./update-user":"2SBwg","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1"}],"66eot":[function(require,module,exports) {
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-bootstrap/Button":"aPzUt","react-bootstrap/Form":"iBZ80","react-bootstrap/Row":"cMC39","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1"}],"bsPVM":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$abf5 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$abf5.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NavigationBar", ()=>NavigationBar);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactBootstrap = require("react-bootstrap");
var _reactRouterDom = require("react-router-dom");
var _navigationBarScss = require("./navigation-bar.scss");
const NavigationBar = ({ user, onLoggedOut })=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Navbar), {
        bg: "dark",
        variant: "dark",
        expand: "lg",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Container), {
            fluid: true,
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Navbar).Brand, {
                    as: (0, _reactRouterDom.Link),
                    to: "/",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                            children: "Welome to"
                        }, void 0, false, {
                            fileName: "src/components/navigation-bar/navigation-bar.jsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                            children: "MyFlix"
                        }, void 0, false, {
                            fileName: "src/components/navigation-bar/navigation-bar.jsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/navigation-bar/navigation-bar.jsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Navbar).Toggle, {
                    "aria-controls": "basic-navbar-nav"
                }, void 0, false, {
                    fileName: "src/components/navigation-bar/navigation-bar.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Navbar).Collapse, {
                    id: "basic-navbar-nav",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Nav), {
                        className: "me-auto",
                        children: [
                            !user && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Nav).Link, {
                                        as: (0, _reactRouterDom.Link),
                                        to: "/login",
                                        children: "Login"
                                    }, void 0, false, {
                                        fileName: "src/components/navigation-bar/navigation-bar.jsx",
                                        lineNumber: 18,
                                        columnNumber: 17
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Nav).Link, {
                                        as: (0, _reactRouterDom.Link),
                                        to: "/signup",
                                        children: "Signup"
                                    }, void 0, false, {
                                        fileName: "src/components/navigation-bar/navigation-bar.jsx",
                                        lineNumber: 21,
                                        columnNumber: 17
                                    }, undefined)
                                ]
                            }, void 0, true),
                            user && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Nav).Link, {
                                        as: (0, _reactRouterDom.Link),
                                        to: "/",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "src/components/navigation-bar/navigation-bar.jsx",
                                        lineNumber: 28,
                                        columnNumber: 17
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Nav).Link, {
                                        as: (0, _reactRouterDom.Link),
                                        to: "/profile",
                                        children: "Profile"
                                    }, void 0, false, {
                                        fileName: "src/components/navigation-bar/navigation-bar.jsx",
                                        lineNumber: 31,
                                        columnNumber: 17
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Nav).Link, {
                                        onClick: onLoggedOut,
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "src/components/navigation-bar/navigation-bar.jsx",
                                        lineNumber: 34,
                                        columnNumber: 17
                                    }, undefined)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/navigation-bar/navigation-bar.jsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/navigation-bar/navigation-bar.jsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/components/navigation-bar/navigation-bar.jsx",
            lineNumber: 8,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/navigation-bar/navigation-bar.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, undefined);
};
_c = NavigationBar;
var _c;
$RefreshReg$(_c, "NavigationBar");

  $parcel$ReactRefreshHelpers$abf5.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react-bootstrap":"3AD9A","react-router-dom":"9xmpe","./navigation-bar.scss":"dnXvl","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1"}],"dnXvl":[function() {},{}],"i5LP7":[function() {},{}]},["d35xq","kvlHm","d8Dch"], "d8Dch", "parcelRequire1c35")