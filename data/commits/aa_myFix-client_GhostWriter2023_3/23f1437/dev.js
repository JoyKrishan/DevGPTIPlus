var _navigationBar = require("../navigation-bar/navigation-bar");
var _reactRouterDom = require("react-router-dom");
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.BrowserRouter), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _navigationBar.NavigationBar), {
                user: user,
                onLoggedOut: ()=>{
                    setUser(null);
                }
            }, void 0, false, {
                fileName: "src/components/main-view/main-view.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _rowDefault.default), {
                className: "justify-content-md-center",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Routes), {
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Route), {
                            path: "/signup",
                            element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                                children: user ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Navigate), {
                                    to: "/"
                                }, void 0, false, {
                                    fileName: "src/components/main-view/main-view.jsx",
                                    lineNumber: 59,
                                    columnNumber: 21
                                }, void 0) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _colDefault.default), {
                                    md: 5,
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _signupView.SignupView), {}, void 0, false, {
                                        fileName: "src/components/main-view/main-view.jsx",
                                        lineNumber: 62,
                                        columnNumber: 23
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "src/components/main-view/main-view.jsx",
                                    lineNumber: 61,
                                    columnNumber: 21
                                }, void 0)
                            }, void 0, false)
                        }, void 0, false, {
                            fileName: "src/components/main-view/main-view.jsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Route), {
                            path: "/login",
                            element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                                children: user ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Navigate), {
                                    to: "/"
                                }, void 0, false, {
                                    fileName: "src/components/main-view/main-view.jsx",
                                    lineNumber: 74,
                                    columnNumber: 21
                                }, void 0) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _colDefault.default), {
                                    md: 5,
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _loginView.LoginView), {
                                        onLoggedIn: (user, token)=>{
                                            setUser(user);
                                            setToken(token);
                                        }
                                    }, void 0, false, {
                                        fileName: "src/components/main-view/main-view.jsx",
                                        lineNumber: 77,
                                        columnNumber: 24
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "src/components/main-view/main-view.jsx",
                                    lineNumber: 76,
                                    columnNumber: 21
                                }, void 0)
                            }, void 0, false)
                            lineNumber: 69,
                            columnNumber: 13
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Route), {
                            path: "/movies/:movieId",
                            element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                                children: !user ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Navigate), {
                                    to: "/login",
                                    replace: true
                                }, void 0, false, {
                                    fileName: "src/components/main-view/main-view.jsx",
                                    lineNumber: 94,
                                    columnNumber: 21
                                }, void 0) : movies.length === 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _colDefault.default), {
                                    children: "The list is empty!"
                                }, void 0, false, {
                                    fileName: "src/components/main-view/main-view.jsx",
                                    lineNumber: 96,
                                    columnNumber: 21
                                }, void 0) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _colDefault.default), {
                                    md: 8,
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _movieView.MovieView), {
                                        movies: movies
                                    }, void 0, false, {
                                        fileName: "src/components/main-view/main-view.jsx",
                                        lineNumber: 99,
                                        columnNumber: 23
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "src/components/main-view/main-view.jsx",
                                    lineNumber: 98,
                                    columnNumber: 21
                                }, void 0)
                            }, void 0, false)
                        }, void 0, false, {
                            lineNumber: 89,
                            columnNumber: 13
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Route), {
                            path: "/",
                            element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                                children: !user ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Navigate), {
                                    to: "/login",
                                    replace: true
                                }, void 0, false, {
                                    fileName: "src/components/main-view/main-view.jsx",
                                    lineNumber: 110,
                                    columnNumber: 21
                                }, void 0) : movies.length === 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _colDefault.default), {
                                    children: "The list is empty!"
                                }, void 0, false, {
                                    fileName: "src/components/main-view/main-view.jsx",
                                    lineNumber: 112,
                                    columnNumber: 21
                                }, void 0) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                                    children: movies.map((movie)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _colDefault.default), {
                                            className: "mb-4",
                                            md: 3,
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _movieCard.MovieCard), {
                                                movie: movie
                                            }, void 0, false, {
                                                fileName: "src/components/main-view/main-view.jsx",
                                                lineNumber: 117,
                                                columnNumber: 27
                                            }, void 0)
                                        }, movie.id, false, {
                                            fileName: "src/components/main-view/main-view.jsx",
                                            lineNumber: 116,
                                            columnNumber: 25
                                        }, void 0))
                                }, void 0, false)
                            }, void 0, false)
                            lineNumber: 105,
                            columnNumber: 13
                    lineNumber: 53,
            }, void 0, false, {
                fileName: "src/components/main-view/main-view.jsx",
                lineNumber: 52,
                columnNumber: 9
            }, undefined)
        ]
    }, void 0, true, {
        lineNumber: 45,
        columnNumber: 5
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","../movie-card/movie-card":"bwuIu","../movie-view/movie-view":"ggaUx","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1","../login-view/login-view":"9YtA0","../signup-view/signup-view":"4OGiN","../navigation-bar/navigation-bar":"bsPVM","react-bootstrap/Row":"cMC39","react-bootstrap/Col":"2L2I6","react-router-dom":"9xmpe"}],"bwuIu":[function(require,module,exports) {
var _reactRouterDom = require("react-router-dom");
const MovieCard = ({ movie })=>{
                lineNumber: 8,
                        lineNumber: 10,
                        lineNumber: 11,
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                        to: `/movies/${encodeURIComponent(movie.id)}`,
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                            variant: "link",
                            children: "More Info"
                        }, void 0, false, {
                            fileName: "src/components/movie-card/movie-card.jsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, undefined)
                        lineNumber: 12,
                lineNumber: 9,
        lineNumber: 7,
},{"react/jsx-dev-runtime":"iTorj","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1","prop-types":"7wKI2","react-bootstrap":"3AD9A","react-router-dom":"9xmpe"}],"eosz2":[function(require,module,exports) {
},{"./Accordion":false,"./AccordionContext":false,"./AccordionCollapse":false,"./AccordionButton":false,"./AccordionBody":false,"./AccordionHeader":false,"./AccordionItem":false,"./Alert":false,"./AlertHeading":false,"./AlertLink":false,"./Anchor":false,"./Badge":false,"./Breadcrumb":false,"./BreadcrumbItem":false,"./Button":"aPzUt","./ButtonGroup":false,"./ButtonToolbar":false,"./Card":"lAynp","./CardBody":false,"./CardFooter":false,"./CardGroup":false,"./CardHeader":false,"./CardImg":false,"./CardImgOverlay":false,"./CardLink":false,"./CardSubtitle":false,"./CardText":false,"./CardTitle":false,"./Carousel":false,"./CarouselCaption":false,"./CarouselItem":false,"./CloseButton":false,"./Col":false,"./Collapse":false,"./Container":"hEdsw","./Dropdown":false,"./DropdownButton":false,"./DropdownDivider":false,"./DropdownHeader":false,"./DropdownItem":false,"./DropdownItemText":false,"./DropdownMenu":false,"./DropdownToggle":false,"./Fade":false,"./Figure":false,"./FigureCaption":false,"./FigureImage":false,"./Form":false,"./FormControl":false,"./FormCheck":false,"./FormFloating":false,"./FloatingLabel":false,"./FormGroup":false,"./FormLabel":false,"./FormText":false,"./FormSelect":false,"./Image":false,"./InputGroup":false,"./ListGroup":false,"./ListGroupItem":false,"./Modal":false,"./ModalBody":false,"./ModalDialog":false,"./ModalFooter":false,"./ModalHeader":false,"./ModalTitle":false,"./Nav":"cXyL2","./Navbar":"1mHjo","./NavbarBrand":false,"./NavbarCollapse":false,"./NavbarOffcanvas":false,"./NavbarText":false,"./NavbarToggle":false,"./NavDropdown":false,"./NavItem":false,"./NavLink":false,"./Offcanvas":false,"./OffcanvasBody":false,"./OffcanvasHeader":false,"./OffcanvasTitle":false,"./OffcanvasToggling":false,"./Overlay":false,"./OverlayTrigger":false,"./PageItem":false,"./Pagination":false,"./Placeholder":false,"./PlaceholderButton":false,"./Popover":false,"./PopoverBody":false,"./PopoverHeader":false,"./ProgressBar":false,"./Ratio":false,"./Row":false,"./Spinner":false,"./SplitButton":false,"./SSRProvider":false,"./Stack":false,"./Tab":false,"./TabContainer":false,"./TabContent":false,"./Table":false,"./TabPane":false,"./Tabs":false,"./ThemeProvider":false,"./Toast":false,"./ToastBody":false,"./ToastContainer":false,"./ToastHeader":false,"./ToggleButton":false,"./ToggleButtonGroup":false,"./Tooltip":false,"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"aPzUt":[function(require,module,exports) {
},{"react":"21dqq","classnames":"jocGM","./ThemeProvider":"dVixI","./divWithClassName":"eDg7t","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"1wmVl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _react = require("react");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _jsxRuntime = require("react/jsx-runtime");
const propTypes = {
    /** An accessible label indicating the relevant information about the Close Button. */ "aria-label": (0, _propTypesDefault.default).string,
    /** A callback fired after the Close Button is clicked. */ onClick: (0, _propTypesDefault.default).func,
    /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */ variant: (0, _propTypesDefault.default).oneOf([
        "white"
    ])
};
const CloseButton = /*#__PURE__*/ _react.forwardRef(({ className, variant, "aria-label": ariaLabel = "Close", ...props }, ref)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
        ref: ref,
        type: "button",
        className: (0, _classnamesDefault.default)("btn-close", variant && `btn-close-${variant}`, className),
        "aria-label": ariaLabel,
        ...props
    }));
CloseButton.displayName = "CloseButton";
CloseButton.propTypes = propTypes;
exports.default = CloseButton;

},{"prop-types":"7wKI2","react":"21dqq","classnames":"jocGM","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"2L2I6":[function(require,module,exports) {
},{"classnames":"jocGM","react":"21dqq","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"acuzI":[function(require,module,exports) {
var _css = require("dom-helpers/css");
var _cssDefault = parcelHelpers.interopDefault(_css);
var _reactDefault = parcelHelpers.interopDefault(_react);
var _transition = require("react-transition-group/Transition");
var _transitionEndListener = require("./transitionEndListener");
var _transitionEndListenerDefault = parcelHelpers.interopDefault(_transitionEndListener);
var _createChainedFunction = require("./createChainedFunction");
var _createChainedFunctionDefault = parcelHelpers.interopDefault(_createChainedFunction);
var _triggerBrowserReflow = require("./triggerBrowserReflow");
var _triggerBrowserReflowDefault = parcelHelpers.interopDefault(_triggerBrowserReflow);
var _transitionWrapper = require("./TransitionWrapper");
var _transitionWrapperDefault = parcelHelpers.interopDefault(_transitionWrapper);
const MARGINS = {
    height: [
        "marginTop",
        "marginBottom"
    ],
    width: [
        "marginLeft",
        "marginRight"
    ]
};
function getDefaultDimensionValue(dimension, elem) {
    const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
    const value = elem[offset];
    const margins = MARGINS[dimension];
    return value + // @ts-ignore
    parseInt((0, _cssDefault.default)(elem, margins[0]), 10) + // @ts-ignore
    parseInt((0, _cssDefault.default)(elem, margins[1]), 10);
}
const collapseStyles = {
    [(0, _transition.EXITED)]: "collapse",
    [(0, _transition.EXITING)]: "collapsing",
    [(0, _transition.ENTERING)]: "collapsing",
    [(0, _transition.ENTERED)]: "collapse show"
};
const Collapse = /*#__PURE__*/ (0, _reactDefault.default).forwardRef(({ onEnter, onEntering, onEntered, onExit, onExiting, className, children, dimension = "height", in: inProp = false, timeout = 300, mountOnEnter = false, unmountOnExit = false, appear = false, getDimensionValue = getDefaultDimensionValue, ...props }, ref)=>{
    /* Compute dimension */ const computedDimension = typeof dimension === "function" ? dimension() : dimension;
    /* -- Expanding -- */ const handleEnter = (0, _react.useMemo)(()=>(0, _createChainedFunctionDefault.default)((elem)=>{
            elem.style[computedDimension] = "0";
        }, onEnter), [
        computedDimension,
        onEnter
    ]);
    const handleEntering = (0, _react.useMemo)(()=>(0, _createChainedFunctionDefault.default)((elem)=>{
            const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
            elem.style[computedDimension] = `${elem[scroll]}px`;
        }, onEntering), [
        computedDimension,
        onEntering
    ]);
    const handleEntered = (0, _react.useMemo)(()=>(0, _createChainedFunctionDefault.default)((elem)=>{
            elem.style[computedDimension] = null;
        }, onEntered), [
        computedDimension,
        onEntered
    ]);
    /* -- Collapsing -- */ const handleExit = (0, _react.useMemo)(()=>(0, _createChainedFunctionDefault.default)((elem)=>{
            elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
            (0, _triggerBrowserReflowDefault.default)(elem);
        }, onExit), [
        onExit,
        getDimensionValue,
        computedDimension
    ]);
    const handleExiting = (0, _react.useMemo)(()=>(0, _createChainedFunctionDefault.default)((elem)=>{
            elem.style[computedDimension] = null;
        }, onExiting), [
        computedDimension,
        onExiting
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _transitionWrapperDefault.default), {
        addEndListener: (0, _transitionEndListenerDefault.default),
        "aria-expanded": props.role ? inProp : null,
        onEnter: handleEnter,
        onEntering: handleEntering,
        onEntered: handleEntered,
        onExit: handleExit,
        onExiting: handleExiting,
        childRef: children.ref,
        in: inProp,
        timeout: timeout,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        appear: appear,
        children: (state, innerProps)=>/*#__PURE__*/ (0, _reactDefault.default).cloneElement(children, {
                ...innerProps,
                className: (0, _classnamesDefault.default)(className, children.props.className, collapseStyles[state], computedDimension === "width" && "collapse-horizontal")
            })
// @ts-ignore
exports.default = Collapse;
},{"classnames":"jocGM","dom-helpers/css":"klmhr","react":"21dqq","react-transition-group/Transition":"cKsrS","./transitionEndListener":"68oh7","./createChainedFunction":"1KNLM","./triggerBrowserReflow":"eWjs5","./TransitionWrapper":"jKUqZ","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"klmhr":[function(require,module,exports) {
var _getComputedStyle = require("./getComputedStyle");
var _getComputedStyleDefault = parcelHelpers.interopDefault(_getComputedStyle);
var _hyphenateStyle = require("./hyphenateStyle");
var _hyphenateStyleDefault = parcelHelpers.interopDefault(_hyphenateStyle);
var _isTransform = require("./isTransform");
var _isTransformDefault = parcelHelpers.interopDefault(_isTransform);
function style(node, property) {
    var css = "";
    var transforms = "";
    if (typeof property === "string") return node.style.getPropertyValue((0, _hyphenateStyleDefault.default)(property)) || (0, _getComputedStyleDefault.default)(node).getPropertyValue((0, _hyphenateStyleDefault.default)(property));
    Object.keys(property).forEach(function(key) {
        var value = property[key];
        if (!value && value !== 0) node.style.removeProperty((0, _hyphenateStyleDefault.default)(key));
        else if ((0, _isTransformDefault.default)(key)) transforms += key + "(" + value + ") ";
        else css += (0, _hyphenateStyleDefault.default)(key) + ": " + value + ";";
    });
    if (transforms) css += "transform: " + transforms + ";";
    node.style.cssText += ";" + css;
}
exports.default = style;

},{"./getComputedStyle":"adqGa","./hyphenateStyle":"hbsNp","./isTransform":"gnxjD","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"adqGa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getComputedStyle);
var _ownerWindow = require("./ownerWindow");
var _ownerWindowDefault = parcelHelpers.interopDefault(_ownerWindow);
function getComputedStyle(node, psuedoElement) {
    return (0, _ownerWindowDefault.default)(node).getComputedStyle(node, psuedoElement);
}

},{"./ownerWindow":"3nPSD","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"3nPSD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ownerWindow);
var _ownerDocument = require("./ownerDocument");
var _ownerDocumentDefault = parcelHelpers.interopDefault(_ownerDocument);
function ownerWindow(node) {
    var doc = (0, _ownerDocumentDefault.default)(node);
    return doc && doc.defaultView || window;
}

},{"./ownerDocument":"2WpOk","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"2WpOk":[function(require,module,exports) {
/**
 * Returns the owner document of a given element.
 * 
 * @param node the element
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ownerDocument);
function ownerDocument(node) {
    return node && node.ownerDocument || document;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"hbsNp":[function(require,module,exports) {
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>hyphenateStyleName);
var _hyphenate = require("./hyphenate");
var _hyphenateDefault = parcelHelpers.interopDefault(_hyphenate);
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
    return (0, _hyphenateDefault.default)(string).replace(msPattern, "-ms-");
}

},{"./hyphenate":"3UJRr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"3UJRr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>hyphenate);
var rUpper = /([A-Z])/g;
function hyphenate(string) {
    return string.replace(rUpper, "-$1").toLowerCase();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"gnxjD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isTransform);
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
    return !!(value && supportedTransforms.test(value));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"cKsrS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UNMOUNTED", ()=>UNMOUNTED);
parcelHelpers.export(exports, "EXITED", ()=>EXITED);
parcelHelpers.export(exports, "ENTERING", ()=>ENTERING);
parcelHelpers.export(exports, "ENTERED", ()=>ENTERED);
parcelHelpers.export(exports, "EXITING", ()=>EXITING);
var _objectWithoutPropertiesLoose = require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
var _inheritsLoose = require("@babel/runtime/helpers/esm/inheritsLoose");
var _inheritsLooseDefault = parcelHelpers.interopDefault(_inheritsLoose);
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactDom = require("react-dom");
var _reactDomDefault = parcelHelpers.interopDefault(_reactDom);
var _config = require("./config");
var _configDefault = parcelHelpers.interopDefault(_config);
var _propTypes1 = require("./utils/PropTypes");
var _transitionGroupContext = require("./TransitionGroupContext");
var _transitionGroupContextDefault = parcelHelpers.interopDefault(_transitionGroupContext);
var _reflow = require("./utils/reflow");
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */ var Transition = /*#__PURE__*/ function(_React$Component) {
    (0, _inheritsLooseDefault.default)(Transition, _React$Component);
    function Transition(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context; // In the context of a TransitionGroup all enters are really appears
        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;
        if (props.in) {
            if (appear) {
                initialStatus = EXITED;
                _this.appearStatus = ENTERING;
            } else initialStatus = ENTERED;
        } else if (props.unmountOnExit || props.mountOnEnter) initialStatus = UNMOUNTED;
        else initialStatus = EXITED;
        _this.state = {
            status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
    }
    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var nextIn = _ref.in;
        if (nextIn && prevState.status === UNMOUNTED) return {
            status: EXITED
        };
        return null;
    } // getSnapshotBeforeUpdate(prevProps) {
    ;
    var _proto = Transition.prototype;
    _proto.componentDidMount = function componentDidMount() {
        this.updateStatus(true, this.appearStatus);
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        var nextStatus = null;
        if (prevProps !== this.props) {
            var status = this.state.status;
            if (this.props.in) {
                if (status !== ENTERING && status !== ENTERED) nextStatus = ENTERING;
            } else if (status === ENTERING || status === ENTERED) nextStatus = EXITING;
        }
        this.updateStatus(false, nextStatus);
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
    };
    _proto.getTimeouts = function getTimeouts() {
        var timeout = this.props.timeout;
        var exit, enter, appear;
        exit = enter = appear = timeout;
        if (timeout != null && typeof timeout !== "number") {
            exit = timeout.exit;
            enter = timeout.enter; // TODO: remove fallback for next major
            appear = timeout.appear !== undefined ? timeout.appear : enter;
        }
        return {
            exit: exit,
            enter: enter,
            appear: appear
        };
    };
    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
        if (mounting === void 0) mounting = false;
        if (nextStatus !== null) {
            // nextStatus will always be ENTERING or EXITING.
            this.cancelNextCallback();
            if (nextStatus === ENTERING) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var node = this.props.nodeRef ? this.props.nodeRef.current : (0, _reactDomDefault.default).findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
                    // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
                    // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.
                    if (node) (0, _reflow.forceReflow)(node);
                }
                this.performEnter(mounting);
            } else this.performExit();
        } else if (this.props.unmountOnExit && this.state.status === EXITED) this.setState({
            status: UNMOUNTED
        });
    };
    _proto.performEnter = function performEnter(mounting) {
        var _this2 = this;
        var enter = this.props.enter;
        var appearing = this.context ? this.context.isMounting : mounting;
        var _ref2 = this.props.nodeRef ? [
            appearing
        ] : [
            (0, _reactDomDefault.default).findDOMNode(this),
            appearing
        ], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
        var timeouts = this.getTimeouts();
        var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
        // if we are mounting and running this it means appear _must_ be set
        if (!mounting && !enter || (0, _configDefault.default).disabled) {
            this.safeSetState({
                status: ENTERED
            }, function() {
                _this2.props.onEntered(maybeNode);
            });
            return;
        }
        this.props.onEnter(maybeNode, maybeAppearing);
        this.safeSetState({
            status: ENTERING
        }, function() {
            _this2.props.onEntering(maybeNode, maybeAppearing);
            _this2.onTransitionEnd(enterTimeout, function() {
                _this2.safeSetState({
                    status: ENTERED
                }, function() {
                    _this2.props.onEntered(maybeNode, maybeAppearing);
                });
            });
        });
    };
    _proto.performExit = function performExit() {
        var _this3 = this;
        var exit = this.props.exit;
        var timeouts = this.getTimeouts();
        var maybeNode = this.props.nodeRef ? undefined : (0, _reactDomDefault.default).findDOMNode(this); // no exit animation skip right to EXITED
        if (!exit || (0, _configDefault.default).disabled) {
            this.safeSetState({
                status: EXITED
            }, function() {
                _this3.props.onExited(maybeNode);
            });
            return;
        }
        this.props.onExit(maybeNode);
        this.safeSetState({
            status: EXITING
        }, function() {
            _this3.props.onExiting(maybeNode);
            _this3.onTransitionEnd(timeouts.exit, function() {
                _this3.safeSetState({
                    status: EXITED
                }, function() {
                    _this3.props.onExited(maybeNode);
                });
            });
        });
    };
    _proto.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
            this.nextCallback.cancel();
            this.nextCallback = null;
        }
    };
    _proto.safeSetState = function safeSetState(nextState, callback) {
        // This shouldn't be necessary, but there are weird race conditions with
        // setState callbacks and unmounting in testing, so always make sure that
        // we can cancel any pending setState callbacks after we unmount.
        callback = this.setNextCallback(callback);
        this.setState(nextState, callback);
    };
    _proto.setNextCallback = function setNextCallback(callback) {
        var _this4 = this;
        var active = true;
        this.nextCallback = function(event) {
            if (active) {
                active = false;
                _this4.nextCallback = null;
                callback(event);
            }
        };
        this.nextCallback.cancel = function() {
            active = false;
        };
        return this.nextCallback;
    };
    _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
        this.setNextCallback(handler);
        var node = this.props.nodeRef ? this.props.nodeRef.current : (0, _reactDomDefault.default).findDOMNode(this);
        var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
        if (!node || doesNotHaveTimeoutOrListener) {
            setTimeout(this.nextCallback, 0);
            return;
        }
        if (this.props.addEndListener) {
            var _ref3 = this.props.nodeRef ? [
                this.nextCallback
            ] : [
                node,
                this.nextCallback
            ], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
            this.props.addEndListener(maybeNode, maybeNextCallback);
        }
        if (timeout != null) setTimeout(this.nextCallback, timeout);
    };
    _proto.render = function render() {
        var status = this.state.status;
        if (status === UNMOUNTED) return null;
        var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = (0, _objectWithoutPropertiesLooseDefault.default)(_this$props, [
            "children",
            "in",
            "mountOnEnter",
            "unmountOnExit",
            "appear",
            "enter",
            "exit",
            "timeout",
            "addEndListener",
            "onEnter",
            "onEntering",
            "onEntered",
            "onExit",
            "onExiting",
            "onExited",
            "nodeRef"
        ]);
        return(/*#__PURE__*/ // allows for nested Transitions
        (0, _reactDefault.default).createElement((0, _transitionGroupContextDefault.default).Provider, {
            value: null
        }, typeof children === "function" ? children(status, childProps) : (0, _reactDefault.default).cloneElement((0, _reactDefault.default).Children.only(children), childProps)));
    };
    return Transition;
}((0, _reactDefault.default).Component);
Transition.contextType = (0, _transitionGroupContextDefault.default);
Transition.propTypes = {
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */ nodeRef: (0, _propTypesDefault.default).shape({
        current: typeof Element === "undefined" ? (0, _propTypesDefault.default).any : function(propValue, key, componentName, location, propFullName, secret) {
            var value = propValue[key];
            return (0, _propTypesDefault.default).instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
        }
    }),
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */ children: (0, _propTypesDefault.default).oneOfType([
        (0, _propTypesDefault.default).func.isRequired,
        (0, _propTypesDefault.default).element.isRequired
    ]).isRequired,
    /**
   * Show the component; triggers the enter or exit states
   */ in: (0, _propTypesDefault.default).bool,
    /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */ mountOnEnter: (0, _propTypesDefault.default).bool,
    /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */ unmountOnExit: (0, _propTypesDefault.default).bool,
    /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */ appear: (0, _propTypesDefault.default).bool,
    /**
   * Enable or disable enter transitions.
   */ enter: (0, _propTypesDefault.default).bool,
    /**
   * Enable or disable exit transitions.
   */ exit: (0, _propTypesDefault.default).bool,
    /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */ timeout: function timeout(props) {
        var pt = (0, _propTypes1.timeoutsShape);
        if (!props.addEndListener) pt = pt.isRequired;
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
        return pt.apply(void 0, [
            props
        ].concat(args));
    },
    /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */ addEndListener: (0, _propTypesDefault.default).func,
    /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */ onEnter: (0, _propTypesDefault.default).func,
    /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */ onEntering: (0, _propTypesDefault.default).func,
    /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */ onEntered: (0, _propTypesDefault.default).func,
    /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */ onExit: (0, _propTypesDefault.default).func,
    /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */ onExiting: (0, _propTypesDefault.default).func,
    /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */ onExited: (0, _propTypesDefault.default).func
}; // Name the function so it is clearer in the documentation
function noop() {}
Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
exports.default = Transition;

},{"@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"adHgr","@babel/runtime/helpers/esm/inheritsLoose":"9u2Z8","prop-types":"7wKI2","react":"21dqq","react-dom":"j6uA9","./config":"cepoZ","./utils/PropTypes":"9Zqaa","./TransitionGroupContext":"47LXo","./utils/reflow":"V4VjQ","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"adHgr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_objectWithoutPropertiesLoose);
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"9u2Z8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_inheritsLoose);
var _setPrototypeOfJs = require("./setPrototypeOf.js");
var _setPrototypeOfJsDefault = parcelHelpers.interopDefault(_setPrototypeOfJs);
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    (0, _setPrototypeOfJsDefault.default)(subClass, superClass);
}

},{"./setPrototypeOf.js":"3XDFA","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"3XDFA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_setPrototypeOf);
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"cepoZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    disabled: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"9Zqaa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeoutsShape", ()=>timeoutsShape);
parcelHelpers.export(exports, "classNamesShape", ()=>classNamesShape);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var timeoutsShape = (0, _propTypesDefault.default).oneOfType([
    (0, _propTypesDefault.default).number,
    (0, _propTypesDefault.default).shape({
        enter: (0, _propTypesDefault.default).number,
        exit: (0, _propTypesDefault.default).number,
        appear: (0, _propTypesDefault.default).number
    }).isRequired
]);
var classNamesShape = (0, _propTypesDefault.default).oneOfType([
    (0, _propTypesDefault.default).string,
    (0, _propTypesDefault.default).shape({
        enter: (0, _propTypesDefault.default).string,
        exit: (0, _propTypesDefault.default).string,
        active: (0, _propTypesDefault.default).string
    }),
    (0, _propTypesDefault.default).shape({
        enter: (0, _propTypesDefault.default).string,
        enterDone: (0, _propTypesDefault.default).string,
        enterActive: (0, _propTypesDefault.default).string,
        exit: (0, _propTypesDefault.default).string,
        exitDone: (0, _propTypesDefault.default).string,
        exitActive: (0, _propTypesDefault.default).string
    })
]);

},{"prop-types":"7wKI2","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"47LXo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
exports.default = (0, _reactDefault.default).createContext(null);

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"V4VjQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "forceReflow", ()=>forceReflow);
var forceReflow = function forceReflow(node) {
    return node.scrollTop;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"68oh7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>transitionEndListener);
var _css = require("dom-helpers/css");
var _cssDefault = parcelHelpers.interopDefault(_css);
var _transitionEnd = require("dom-helpers/transitionEnd");
var _transitionEndDefault = parcelHelpers.interopDefault(_transitionEnd);
function parseDuration(node, property) {
    const str = (0, _cssDefault.default)(node, property) || "";
    const mult = str.indexOf("ms") === -1 ? 1000 : 1;
    return parseFloat(str) * mult;
}
function transitionEndListener(element, handler) {
    const duration = parseDuration(element, "transitionDuration");
    const delay = parseDuration(element, "transitionDelay");
    const remove = (0, _transitionEndDefault.default)(element, (e)=>{
        if (e.target === element) {
            remove();
            handler(e);
        }
    }, duration + delay);
}

},{"dom-helpers/css":"klmhr","dom-helpers/transitionEnd":"7hVJq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"7hVJq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>transitionEnd);
var _css = require("./css");
var _cssDefault = parcelHelpers.interopDefault(_css);
var _listen = require("./listen");
var _listenDefault = parcelHelpers.interopDefault(_listen);
var _triggerEvent = require("./triggerEvent");
var _triggerEventDefault = parcelHelpers.interopDefault(_triggerEvent);
function parseDuration(node) {
    var str = (0, _cssDefault.default)(node, "transitionDuration") || "";
    var mult = str.indexOf("ms") === -1 ? 1000 : 1;
    return parseFloat(str) * mult;
}
function emulateTransitionEnd(element, duration, padding) {
    if (padding === void 0) padding = 5;
    var called = false;
    var handle = setTimeout(function() {
        if (!called) (0, _triggerEventDefault.default)(element, "transitionend", true);
    }, duration + padding);
    var remove = (0, _listenDefault.default)(element, "transitionend", function() {
        called = true;
    }, {
        once: true
    });
    return function() {
        clearTimeout(handle);
        remove();
    };
}
function transitionEnd(element, handler, duration, padding) {
    if (duration == null) duration = parseDuration(element) || 0;
    var removeEmulate = emulateTransitionEnd(element, duration, padding);
    var remove = (0, _listenDefault.default)(element, "transitionend", handler);
    return function() {
        removeEmulate();
        remove();
    };
}

},{"./css":"klmhr","./listen":"1i4e7","./triggerEvent":"lQ70W","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"1i4e7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addEventListener = require("./addEventListener");
var _addEventListenerDefault = parcelHelpers.interopDefault(_addEventListener);
var _removeEventListener = require("./removeEventListener");
var _removeEventListenerDefault = parcelHelpers.interopDefault(_removeEventListener);
function listen(node, eventName, handler, options) {
    (0, _addEventListenerDefault.default)(node, eventName, handler, options);
    return function() {
        (0, _removeEventListenerDefault.default)(node, eventName, handler, options);
    };
}
exports.default = listen;

},{"./addEventListener":"c5x2p","./removeEventListener":"la8JB","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"c5x2p":[function(require,module,exports) {
/* eslint-disable no-return-assign */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "optionsSupported", ()=>optionsSupported);
parcelHelpers.export(exports, "onceSupported", ()=>onceSupported);
var _canUseDOM = require("./canUseDOM");
var _canUseDOMDefault = parcelHelpers.interopDefault(_canUseDOM);
var optionsSupported = false;
var onceSupported = false;
try {
    var options = {
        get passive () {
            return optionsSupported = true;
        },
        get once () {
            // eslint-disable-next-line no-multi-assign
            return onceSupported = optionsSupported = true;
        }
    };
    if (0, _canUseDOMDefault.default) {
        window.addEventListener("test", options, options);
        window.removeEventListener("test", options, true);
    }
} catch (e) {
/* */ }
/**
 * An `addEventListener` ponyfill, supports the `once` option
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */ function addEventListener(node, eventName, handler, options) {
    if (options && typeof options !== "boolean" && !onceSupported) {
        var once = options.once, capture = options.capture;
        var wrappedHandler = handler;
        if (!onceSupported && once) {
            wrappedHandler = handler.__once || function onceHandler(event) {
                this.removeEventListener(eventName, onceHandler, capture);
                handler.call(this, event);
            };
            handler.__once = wrappedHandler;
        }
        node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
    }
    node.addEventListener(eventName, handler, options);
}
exports.default = addEventListener;

},{"./canUseDOM":"9AwUB","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"9AwUB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = !!(typeof window !== "undefined" && window.document && window.document.createElement);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"la8JB":[function(require,module,exports) {
/**
 * A `removeEventListener` ponyfill
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function removeEventListener(node, eventName, handler, options) {
    var capture = options && typeof options !== "boolean" ? options.capture : options;
    node.removeEventListener(eventName, handler, capture);
    if (handler.__once) node.removeEventListener(eventName, handler.__once, capture);
}
exports.default = removeEventListener;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"lQ70W":[function(require,module,exports) {
/**
 * Triggers an event on a given element.
 * 
 * @param node the element
 * @param eventName the event name to trigger
 * @param bubbles whether the event should bubble up
 * @param cancelable whether the event should be cancelable
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>triggerEvent);
function triggerEvent(node, eventName, bubbles, cancelable) {
    if (bubbles === void 0) bubbles = false;
    if (cancelable === void 0) cancelable = true;
    if (node) {
        var event = document.createEvent("HTMLEvents");
        event.initEvent(eventName, bubbles, cancelable);
        node.dispatchEvent(event);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"1KNLM":[function(require,module,exports) {
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function createChainedFunction(...funcs) {
    return funcs.filter((f)=>f != null).reduce((acc, f)=>{
        if (typeof f !== "function") throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
        if (acc === null) return f;
        return function chainedFunction(...args) {
            // @ts-ignore
            acc.apply(this, args);
            // @ts-ignore
            f.apply(this, args);
        };
    }, null);
}
exports.default = createChainedFunction;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"eWjs5":[function(require,module,exports) {
// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>triggerBrowserReflow);
function triggerBrowserReflow(node) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    node.offsetHeight;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"jKUqZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _transition = require("react-transition-group/Transition");
var _transitionDefault = parcelHelpers.interopDefault(_transition);
var _useMergedRefs = require("@restart/hooks/useMergedRefs");
var _useMergedRefsDefault = parcelHelpers.interopDefault(_useMergedRefs);
var _safeFindDOMNode = require("./safeFindDOMNode");
var _safeFindDOMNodeDefault = parcelHelpers.interopDefault(_safeFindDOMNode);
var _jsxRuntime = require("react/jsx-runtime");
"use client";
// Normalizes Transition callbacks when nodeRef is used.
const TransitionWrapper = /*#__PURE__*/ (0, _reactDefault.default).forwardRef(({ onEnter, onEntering, onEntered, onExit, onExiting, onExited, addEndListener, children, childRef, ...props }, ref)=>{
    const nodeRef = (0, _react.useRef)(null);
    const mergedRef = (0, _useMergedRefsDefault.default)(nodeRef, childRef);
    const attachRef = (r)=>{
        mergedRef((0, _safeFindDOMNodeDefault.default)(r));
    };
    const normalize = (callback)=>(param)=>{
            if (callback && nodeRef.current) callback(nodeRef.current, param);
        };
    /* eslint-disable react-hooks/exhaustive-deps */ const handleEnter = (0, _react.useCallback)(normalize(onEnter), [
        onEnter
    ]);
    const handleEntering = (0, _react.useCallback)(normalize(onEntering), [
        onEntering
    ]);
    const handleEntered = (0, _react.useCallback)(normalize(onEntered), [
        onEntered
    ]);
    const handleExit = (0, _react.useCallback)(normalize(onExit), [
        onExit
    ]);
    const handleExiting = (0, _react.useCallback)(normalize(onExiting), [
        onExiting
    ]);
    const handleExited = (0, _react.useCallback)(normalize(onExited), [
        onExited
    ]);
    const handleAddEndListener = (0, _react.useCallback)(normalize(addEndListener), [
        addEndListener
    ]);
    /* eslint-enable react-hooks/exhaustive-deps */ return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _transitionDefault.default), {
        ref: ref,
        ...props,
        onEnter: handleEnter,
        onEntered: handleEntered,
        onEntering: handleEntering,
        onExit: handleExit,
        onExited: handleExited,
        onExiting: handleExiting,
        addEndListener: handleAddEndListener,
        nodeRef: nodeRef,
        children: typeof children === "function" ? (status, innerProps)=>// TODO: Types for RTG missing innerProps, so need to cast.
            children(status, {
                ...innerProps,
                ref: attachRef
            }) : /*#__PURE__*/ (0, _reactDefault.default).cloneElement(children, {
            ref: attachRef
        })
    });
});
exports.default = TransitionWrapper;

},{"react":"21dqq","react-transition-group/Transition":"cKsrS","@restart/hooks/useMergedRefs":"6hhuo","./safeFindDOMNode":"XsXw9","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"6hhuo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeRefs", ()=>mergeRefs);
var _react = require("react");
const toFnRef = (ref)=>!ref || typeof ref === "function" ? ref : (value)=>{
        ref.current = value;
    };
function mergeRefs(refA, refB) {
    const a = toFnRef(refA);
    const b = toFnRef(refB);
    return (value)=>{
        if (a) a(value);
        if (b) b(value);
    };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */ function useMergedRefs(refA, refB) {
    return (0, _react.useMemo)(()=>mergeRefs(refA, refB), [
        refA,
        refB
    ]);
}
exports.default = useMergedRefs;

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"XsXw9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>safeFindDOMNode);
var _reactDom = require("react-dom");
var _reactDomDefault = parcelHelpers.interopDefault(_reactDom);
function safeFindDOMNode(componentOrElement) {
    if (componentOrElement && "setState" in componentOrElement) return (0, _reactDomDefault.default).findDOMNode(componentOrElement);
    return componentOrElement != null ? componentOrElement : null;
}

},{"react-dom":"j6uA9","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"hEdsw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const Container = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, fluid = false, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", className, ...props }, ref)=>{
    const prefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "container");
    const suffix = typeof fluid === "string" ? `-${fluid}` : "-fluid";
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ref: ref,
        ...props,
        className: (0, _classnamesDefault.default)(className, fluid ? `${prefix}${suffix}` : prefix)
    });
});
Container.displayName = "Container";
exports.default = Container;

},{"classnames":"jocGM","react":"21dqq","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"aH18S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _transition = require("react-transition-group/Transition");
var _transitionEndListener = require("./transitionEndListener");
var _transitionEndListenerDefault = parcelHelpers.interopDefault(_transitionEndListener);
var _triggerBrowserReflow = require("./triggerBrowserReflow");
var _triggerBrowserReflowDefault = parcelHelpers.interopDefault(_triggerBrowserReflow);
var _transitionWrapper = require("./TransitionWrapper");
var _transitionWrapperDefault = parcelHelpers.interopDefault(_transitionWrapper);
var _jsxRuntime = require("react/jsx-runtime");
const fadeStyles = {
    [(0, _transition.ENTERING)]: "show",
    [(0, _transition.ENTERED)]: "show"
};
const Fade = /*#__PURE__*/ _react.forwardRef(({ className, children, transitionClasses = {}, onEnter, ...rest }, ref)=>{
    const props = {
        in: false,
        timeout: 300,
        mountOnEnter: false,
        unmountOnExit: false,
        appear: false,
        ...rest
    };
    const handleEnter = (0, _react.useCallback)((node, isAppearing)=>{
        (0, _triggerBrowserReflowDefault.default)(node);
        onEnter == null || onEnter(node, isAppearing);
    }, [
        onEnter
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _transitionWrapperDefault.default), {
        ref: ref,
        addEndListener: (0, _transitionEndListenerDefault.default),
        ...props,
        onEnter: handleEnter,
        childRef: children.ref,
        children: (status, innerProps)=>/*#__PURE__*/ _react.cloneElement(children, {
                ...innerProps,
                className: (0, _classnamesDefault.default)("fade", className, children.props.className, fadeStyles[status], transitionClasses[status])
            })
    });
});
Fade.displayName = "Fade";
exports.default = Fade;

},{"classnames":"jocGM","react":"21dqq","react-transition-group/Transition":"cKsrS","./transitionEndListener":"68oh7","./triggerBrowserReflow":"eWjs5","./TransitionWrapper":"jKUqZ","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"iBZ80":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _react = require("react");
var _formCheck = require("./FormCheck");
var _formCheckDefault = parcelHelpers.interopDefault(_formCheck);
var _formControl = require("./FormControl");
var _formControlDefault = parcelHelpers.interopDefault(_formControl);
var _formFloating = require("./FormFloating");
var _formFloatingDefault = parcelHelpers.interopDefault(_formFloating);
var _formGroup = require("./FormGroup");
var _formGroupDefault = parcelHelpers.interopDefault(_formGroup);
var _formLabel = require("./FormLabel");
var _formLabelDefault = parcelHelpers.interopDefault(_formLabel);
var _formRange = require("./FormRange");
var _formRangeDefault = parcelHelpers.interopDefault(_formRange);
var _formSelect = require("./FormSelect");
var _formSelectDefault = parcelHelpers.interopDefault(_formSelect);
var _formText = require("./FormText");
var _formTextDefault = parcelHelpers.interopDefault(_formText);
var _switch = require("./Switch");
var _switchDefault = parcelHelpers.interopDefault(_switch);
var _floatingLabel = require("./FloatingLabel");
var _floatingLabelDefault = parcelHelpers.interopDefault(_floatingLabel);
var _jsxRuntime = require("react/jsx-runtime");
const propTypes = {
    /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */ _ref: (0, _propTypesDefault.default).any,
    /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */ validated: (0, _propTypesDefault.default).bool,
},{"classnames":"jocGM","react":"21dqq","./FormGroup":"1qBHH","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"cXyL2":[function(require,module,exports) {
var _all = require("prop-types-extra/lib/all");
var _allDefault = parcelHelpers.interopDefault(_all);
var _uncontrollable = require("uncontrollable");
var _nav = require("@restart/ui/Nav");
var _navDefault = parcelHelpers.interopDefault(_nav);
var _navbarContext = require("./NavbarContext");
var _navbarContextDefault = parcelHelpers.interopDefault(_navbarContext);
var _cardHeaderContext = require("./CardHeaderContext");
var _cardHeaderContextDefault = parcelHelpers.interopDefault(_cardHeaderContext);
var _navItem = require("./NavItem");
var _navItemDefault = parcelHelpers.interopDefault(_navItem);
var _navLink = require("./NavLink");
var _navLinkDefault = parcelHelpers.interopDefault(_navLink);
const Nav = /*#__PURE__*/ _react.forwardRef((uncontrolledProps, ref)=>{
    const { as = "div", bsPrefix: initialBsPrefix, variant, fill = false, justify = false, navbar, navbarScroll, className, activeKey, ...props } = (0, _uncontrollable.useUncontrolled)(uncontrolledProps, {
        activeKey: "onSelect"
    });
    const bsPrefix = (0, _themeProvider.useBootstrapPrefix)(initialBsPrefix, "nav");
    let navbarBsPrefix;
    let cardHeaderBsPrefix;
    let isNavbar = false;
    const navbarContext = (0, _react.useContext)((0, _navbarContextDefault.default));
    const cardHeaderContext = (0, _react.useContext)((0, _cardHeaderContextDefault.default));
    if (navbarContext) {
        navbarBsPrefix = navbarContext.bsPrefix;
        isNavbar = navbar == null ? true : navbar;
    } else if (cardHeaderContext) ({ cardHeaderBsPrefix } = cardHeaderContext);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navDefault.default), {
        as: as,
        ref: ref,
        activeKey: activeKey,
        className: (0, _classnamesDefault.default)(className, {
            [bsPrefix]: !isNavbar,
            [`${navbarBsPrefix}-nav`]: isNavbar,
            [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
            [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
            [`${bsPrefix}-${variant}`]: !!variant,
            [`${bsPrefix}-fill`]: fill,
            [`${bsPrefix}-justified`]: justify
        }),
        ...props
    });
});
Nav.displayName = "Nav";
exports.default = Object.assign(Nav, {
    Item: (0, _navItemDefault.default),
    Link: (0, _navLinkDefault.default)
});

},{"classnames":"jocGM","prop-types-extra/lib/all":"37Ank","react":"21dqq","uncontrollable":"b3yWY","@restart/ui/Nav":"fZdNd","./ThemeProvider":"dVixI","./NavbarContext":"dpn1g","./CardHeaderContext":"36cNB","./NavItem":"ew05W","./NavLink":"7geL8","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"37Ank":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = all;
var _createChainableTypeChecker = require("d69c03d3e91a1136");
var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function all() {
    for(var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++)validators[_key] = arguments[_key];
    function allPropTypes() {
        for(var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        var error = null;
        validators.forEach(function(validator) {
            if (error != null) return;
            var result = validator.apply(undefined, args);
            if (result != null) error = result;
        });
        return error;
    }
    return (0, _createChainableTypeChecker2.default)(allPropTypes);
}
module.exports = exports["default"];

},{"d69c03d3e91a1136":"1m8lT"}],"1m8lT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */ // Mostly taken from ReactPropTypes.
function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
        var componentNameSafe = componentName || "<<anonymous>>";
        var propFullNameSafe = propFullName || propName;
        if (props[propName] == null) {
            if (isRequired) return new Error("Required " + location + " `" + propFullNameSafe + "` was not specified " + ("in `" + componentNameSafe + "`."));
            return null;
        }
        for(var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++)args[_key - 6] = arguments[_key];
        return validate.apply(undefined, [
            props,
            propName,
            componentNameSafe,
            location,
            propFullNameSafe
        ].concat(args));
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
}
module.exports = exports["default"];

},{}],"b3yWY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useUncontrolled", ()=>(0, _hookDefault.default));
parcelHelpers.export(exports, "useUncontrolledProp", ()=>(0, _hook.useUncontrolledProp));
parcelHelpers.export(exports, "uncontrollable", ()=>(0, _uncontrollableDefault.default));
var _hook = require("./hook");
var _hookDefault = parcelHelpers.interopDefault(_hook);
var _uncontrollable = require("./uncontrollable");
var _uncontrollableDefault = parcelHelpers.interopDefault(_uncontrollable);

},{"./hook":"cv9oS","./uncontrollable":"aqbCD","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"cv9oS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useUncontrolledProp", ()=>useUncontrolledProp);
parcelHelpers.export(exports, "default", ()=>useUncontrolled);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _objectWithoutPropertiesLoose = require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
var _react = require("react");
var _utils = require("./utils");
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function useUncontrolledProp(propValue, defaultValue, handler) {
    var wasPropRef = (0, _react.useRef)(propValue !== undefined);
    var _useState = (0, _react.useState)(defaultValue), stateValue = _useState[0], setState = _useState[1];
    var isProp = propValue !== undefined;
    var wasProp = wasPropRef.current;
    wasPropRef.current = isProp;
    /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */ if (!isProp && wasProp && stateValue !== defaultValue) setState(defaultValue);
    return [
        isProp ? propValue : stateValue,
        (0, _react.useCallback)(function(value) {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
            if (handler) handler.apply(void 0, [
                value
            ].concat(args));
            setState(value);
        }, [
            handler
        ])
    ];
}
function useUncontrolled(props, config) {
    return Object.keys(config).reduce(function(result, fieldName) {
        var _extends2;
        var _ref = result, defaultValue = _ref[_utils.defaultKey(fieldName)], propsValue = _ref[fieldName], rest = (0, _objectWithoutPropertiesLooseDefault.default)(_ref, [
            _utils.defaultKey(fieldName),
            fieldName
        ].map(_toPropertyKey));
        var handlerName = config[fieldName];
        var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]), value = _useUncontrolledProp[0], handler = _useUncontrolledProp[1];
        return (0, _extendsDefault.default)({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
    }, props);
}

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"adHgr","react":"21dqq","./utils":"7UQ73","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"fTBFS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_extends);
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"7UQ73":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "uncontrolledPropTypes", ()=>uncontrolledPropTypes);
parcelHelpers.export(exports, "isProp", ()=>isProp);
parcelHelpers.export(exports, "defaultKey", ()=>defaultKey);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */ parcelHelpers.export(exports, "canAcceptRef", ()=>canAcceptRef);
var _invariant = require("invariant");
var _invariantDefault = parcelHelpers.interopDefault(_invariant);
var noop = function noop() {};
function readOnlyPropType(handler, name) {
    return function(props, propName) {
        if (props[propName] !== undefined) {
            if (!props[handler]) return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
        }
    };
}
function uncontrolledPropTypes(controlledValues, displayName) {
    var propTypes = {};
    Object.keys(controlledValues).forEach(function(prop) {
        // add default propTypes for folks that use runtime checks
        propTypes[defaultKey(prop)] = noop;
        var handler = controlledValues[prop];
        !(typeof handler === "string" && handler.trim().length) && (0, _invariantDefault.default)(false, "Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable", displayName, prop);
        propTypes[prop] = readOnlyPropType(handler, displayName);
    });
    return propTypes;
}
function isProp(props, prop) {
    return props[prop] !== undefined;
}
function defaultKey(key) {
    return "default" + key.charAt(0).toUpperCase() + key.substr(1);
}
function canAcceptRef(component) {
    return !!component && (typeof component !== "function" || component.prototype && component.prototype.isReactComponent);
}

},{"invariant":"d1QgR","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"d1QgR":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */ var invariant = function(condition, format, a, b, c, d, e, f) {
    if (format === undefined) throw new Error("invariant requires an error message argument");
    if (!condition) {
        var error;
        if (format === undefined) error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else {
            var args = [
                a,
                b,
                c,
                d,
                e,
                f
            ];
            var argIndex = 0;
            error = new Error(format.replace(/%s/g, function() {
                return args[argIndex++];
            }));
            error.name = "Invariant Violation";
        }
        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
    }
};
module.exports = invariant;

},{}],"aqbCD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>uncontrollable);
var _objectWithoutPropertiesLoose = require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _inheritsLoose = require("@babel/runtime/helpers/esm/inheritsLoose");
var _inheritsLooseDefault = parcelHelpers.interopDefault(_inheritsLoose);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactLifecyclesCompat = require("react-lifecycles-compat");
var _invariant = require("invariant");
var _invariantDefault = parcelHelpers.interopDefault(_invariant);
var _utils = require("./utils");
var _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";
function uncontrollable(Component, controlledValues, methods) {
    if (methods === void 0) methods = [];
    var displayName = Component.displayName || Component.name || "Component";
    var canAcceptRef = _utils.canAcceptRef(Component);
    var controlledProps = Object.keys(controlledValues);
    var PROPS_TO_OMIT = controlledProps.map(_utils.defaultKey);
    !(canAcceptRef || !methods.length) && (0, _invariantDefault.default)(false, "[uncontrollable] stateless function components cannot pass through methods because they have no associated instances. Check component: " + displayName + ", " + "attempting to pass through methods: " + methods.join(", "));
    var UncontrolledComponent = /*#__PURE__*/ function(_React$Component) {
        (0, _inheritsLooseDefault.default)(UncontrolledComponent, _React$Component);
        function UncontrolledComponent() {
            var _this;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            _this = _React$Component.call.apply(_React$Component, [
                this
            ].concat(args)) || this;
            _this.handlers = Object.create(null);
            controlledProps.forEach(function(propName) {
                var handlerName = controlledValues[propName];
                var handleChange = function handleChange(value) {
                    if (_this.props[handlerName]) {
                        var _this$props;
                        _this._notifying = true;
                        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
                        (_this$props = _this.props)[handlerName].apply(_this$props, [
                            value
                        ].concat(args));
                        _this._notifying = false;
                    }
                    if (!_this.unmounted) _this.setState(function(_ref) {
                        var _extends2;
                        var values = _ref.values;
                        return {
                            values: (0, _extendsDefault.default)(Object.create(null), values, (_extends2 = {}, _extends2[propName] = value, _extends2))
                        };
                    });
                };
                _this.handlers[handlerName] = handleChange;
            });
            if (methods.length) _this.attachRef = function(ref) {
                _this.inner = ref;
            };
            var values = Object.create(null);
            controlledProps.forEach(function(key) {
                values[key] = _this.props[_utils.defaultKey(key)];
            });
            _this.state = {
                values: values,
                prevProps: {}
            };
            return _this;
        }
        var _proto = UncontrolledComponent.prototype;
        _proto.shouldComponentUpdate = function shouldComponentUpdate() {
            //let setState trigger the update
            return !this._notifying;
        };
        UncontrolledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
            var values = _ref2.values, prevProps = _ref2.prevProps;
            var nextState = {
                values: (0, _extendsDefault.default)(Object.create(null), values),
                prevProps: {}
            };
            controlledProps.forEach(function(key) {
                /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */ nextState.prevProps[key] = props[key];
                if (!_utils.isProp(props, key) && _utils.isProp(prevProps, key)) nextState.values[key] = props[_utils.defaultKey(key)];
            });
            return nextState;
        };
        _proto.componentWillUnmount = function componentWillUnmount() {
            this.unmounted = true;
        };
        _proto.render = function render() {
            var _this2 = this;
            var _this$props2 = this.props, innerRef = _this$props2.innerRef, props = (0, _objectWithoutPropertiesLooseDefault.default)(_this$props2, [
                "innerRef"
            ]);
            PROPS_TO_OMIT.forEach(function(prop) {
                delete props[prop];
            });
            var newProps = {};
            controlledProps.forEach(function(propName) {
                var propValue = _this2.props[propName];
                newProps[propName] = propValue !== undefined ? propValue : _this2.state.values[propName];
            });
            return (0, _reactDefault.default).createElement(Component, (0, _extendsDefault.default)({}, props, newProps, this.handlers, {
                ref: innerRef || this.attachRef
            }));
        };
        return UncontrolledComponent;
    }((0, _reactDefault.default).Component);
    (0, _reactLifecyclesCompat.polyfill)(UncontrolledComponent);
    UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
    UncontrolledComponent.propTypes = (0, _extendsDefault.default)({
        innerRef: function innerRef() {}
    }, _utils.uncontrolledPropTypes(controlledValues, displayName));
    methods.forEach(function(method) {
        UncontrolledComponent.prototype[method] = function $proxiedMethod() {
            var _this$inner;
            return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
        };
    });
    var WrappedComponent = UncontrolledComponent;
    if ((0, _reactDefault.default).forwardRef) {
        WrappedComponent = (0, _reactDefault.default).forwardRef(function(props, ref) {
            return (0, _reactDefault.default).createElement(UncontrolledComponent, (0, _extendsDefault.default)({}, props, {
                innerRef: ref,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                },
                __self: this
            }));
        });
        WrappedComponent.propTypes = UncontrolledComponent.propTypes;
    }
    WrappedComponent.ControlledComponent = Component;
    /**
   * useful when wrapping a Component and you want to control
   * everything
   */ WrappedComponent.deferControlTo = function(newComponent, additions, nextMethods) {
        if (additions === void 0) additions = {};
        return uncontrollable(newComponent, (0, _extendsDefault.default)({}, controlledValues, additions), nextMethods);
    };
    return WrappedComponent;
}

},{"@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"adHgr","@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/inheritsLoose":"9u2Z8","react":"21dqq","react-lifecycles-compat":"3f3fU","invariant":"d1QgR","./utils":"7UQ73","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"3f3fU":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "polyfill", ()=>polyfill);
function componentWillMount() {
    // Call this.constructor.gDSFP to support sub-classes.
    var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
    if (state !== null && state !== undefined) this.setState(state);
}
function componentWillReceiveProps(nextProps) {
    // Call this.constructor.gDSFP to support sub-classes.
    // Use the setState() updater to ensure state isn't stale in certain edge cases.
    function updater(prevState) {
        var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
        return state !== null && state !== undefined ? state : null;
    }
    // Binding "this" is important for shallow renderer support.
    this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
    try {
        var prevProps = this.props;
        var prevState = this.state;
        this.props = nextProps;
        this.state = nextState;
        this.__reactInternalSnapshotFlag = true;
        this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
    } finally{
        this.props = prevProps;
        this.state = prevState;
    }
}
// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;
function polyfill(Component) {
    var prototype = Component.prototype;
    if (!prototype || !prototype.isReactComponent) throw new Error("Can only polyfill class components");
    if (typeof Component.getDerivedStateFromProps !== "function" && typeof prototype.getSnapshotBeforeUpdate !== "function") return Component;
    // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Error if any of these lifecycles are present,
    // Because they would work differently between older and newer (16.3+) versions of React.
    var foundWillMountName = null;
    var foundWillReceivePropsName = null;
    var foundWillUpdateName = null;
    if (typeof prototype.componentWillMount === "function") foundWillMountName = "componentWillMount";
    else if (typeof prototype.UNSAFE_componentWillMount === "function") foundWillMountName = "UNSAFE_componentWillMount";
    if (typeof prototype.componentWillReceiveProps === "function") foundWillReceivePropsName = "componentWillReceiveProps";
    else if (typeof prototype.UNSAFE_componentWillReceiveProps === "function") foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
    if (typeof prototype.componentWillUpdate === "function") foundWillUpdateName = "componentWillUpdate";
    else if (typeof prototype.UNSAFE_componentWillUpdate === "function") foundWillUpdateName = "UNSAFE_componentWillUpdate";
    if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
        var componentName = Component.displayName || Component.name;
        var newApiName = typeof Component.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
        throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (foundWillMountName !== null ? "\n  " + foundWillMountName : "") + (foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "") + (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\n" + "https://fb.me/react-async-component-lifecycle-hooks");
    }
    // React <= 16.2 does not support static getDerivedStateFromProps.
    // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
    // Newer versions of React will ignore these lifecycles if gDSFP exists.
    if (typeof Component.getDerivedStateFromProps === "function") {
        prototype.componentWillMount = componentWillMount;
        prototype.componentWillReceiveProps = componentWillReceiveProps;
    }
    // React <= 16.2 does not support getSnapshotBeforeUpdate.
    // As a workaround, use cWU to invoke the new lifecycle.
    // Newer versions of React will ignore that lifecycle if gSBU exists.
    if (typeof prototype.getSnapshotBeforeUpdate === "function") {
        if (typeof prototype.componentDidUpdate !== "function") throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
        prototype.componentWillUpdate = componentWillUpdate;
        var componentDidUpdate = prototype.componentDidUpdate;
        prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
            // 16.3+ will not execute our will-update method;
            // It will pass a snapshot value to did-update though.
            // Older versions will require our polyfilled will-update value.
            // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
            // Because for <= 15.x versions this might be a "prevContext" object.
            // We also can't just check "__reactInternalSnapshot",
            // Because get-snapshot might return a falsy value.
            // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
            var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
            componentDidUpdate.call(this, prevProps, prevState, snapshot);
        };
    }
    return Component;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"fZdNd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _querySelectorAll = require("dom-helpers/querySelectorAll");
var _querySelectorAllDefault = parcelHelpers.interopDefault(_querySelectorAll);
var _react = require("react");
var _useForceUpdate = require("@restart/hooks/useForceUpdate");
var _useForceUpdateDefault = parcelHelpers.interopDefault(_useForceUpdate);
var _useMergedRefs = require("@restart/hooks/useMergedRefs");
var _useMergedRefsDefault = parcelHelpers.interopDefault(_useMergedRefs);
var _navContext = require("./NavContext");
var _navContextDefault = parcelHelpers.interopDefault(_navContext);
var _selectableContext = require("./SelectableContext");
var _selectableContextDefault = parcelHelpers.interopDefault(_selectableContext);
var _tabContext = require("./TabContext");
var _tabContextDefault = parcelHelpers.interopDefault(_tabContext);
var _dataKey = require("./DataKey");
var _navItem = require("./NavItem");
var _navItemDefault = parcelHelpers.interopDefault(_navItem);
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = [
    "as",
    "onSelect",
    "activeKey",
    "role",
    "onKeyDown"
];
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = ()=>{};
const EVENT_KEY_ATTR = (0, _dataKey.dataAttr)("event-key");
const Nav = /*#__PURE__*/ _react.forwardRef((_ref, ref)=>{
    let { // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "div", onSelect, activeKey, role, onKeyDown } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
    // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
    // and don't want to reset the set in the effect
    const forceUpdate = (0, _useForceUpdateDefault.default)();
    const needsRefocusRef = (0, _react.useRef)(false);
    const parentOnSelect = (0, _react.useContext)((0, _selectableContextDefault.default));
    const tabContext = (0, _react.useContext)((0, _tabContextDefault.default));
    let getControlledId, getControllerId;
    if (tabContext) {
        role = role || "tablist";
        activeKey = tabContext.activeKey;
        // TODO: do we need to duplicate these?
        getControlledId = tabContext.getControlledId;
        getControllerId = tabContext.getControllerId;
    }
    const listNode = (0, _react.useRef)(null);
    const getNextActiveTab = (offset)=>{
        const currentListNode = listNode.current;
        if (!currentListNode) return null;
        const items = (0, _querySelectorAllDefault.default)(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
        const activeChild = currentListNode.querySelector("[aria-selected=true]");
        if (!activeChild || activeChild !== document.activeElement) return null;
        const index = items.indexOf(activeChild);
        if (index === -1) return null;
        let nextIndex = index + offset;
        if (nextIndex >= items.length) nextIndex = 0;
        if (nextIndex < 0) nextIndex = items.length - 1;
        return items[nextIndex];
    };
    const handleSelect = (key, event)=>{
        if (key == null) return;
        onSelect == null || onSelect(key, event);
        parentOnSelect == null || parentOnSelect(key, event);
    };
    const handleKeyDown = (event)=>{
        onKeyDown == null || onKeyDown(event);
        if (!tabContext) return;
        let nextActiveChild;
        switch(event.key){
            case "ArrowLeft":
            case "ArrowUp":
                nextActiveChild = getNextActiveTab(-1);
                break;
            case "ArrowRight":
            case "ArrowDown":
                nextActiveChild = getNextActiveTab(1);
                break;
            default:
                return;
        }
        if (!nextActiveChild) return;
        event.preventDefault();
        handleSelect(nextActiveChild.dataset[(0, _dataKey.dataProp)("EventKey")] || null, event);
        needsRefocusRef.current = true;
        forceUpdate();
    };
    (0, _react.useEffect)(()=>{
        if (listNode.current && needsRefocusRef.current) {
            const activeChild = listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`);
            activeChild == null || activeChild.focus();
        }
        needsRefocusRef.current = false;
    });
    const mergedRef = (0, _useMergedRefsDefault.default)(ref, listNode);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _selectableContextDefault.default).Provider, {
        value: handleSelect,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navContextDefault.default).Provider, {
            value: {
                role,
                // used by NavLink to determine it's role
                activeKey: (0, _selectableContext.makeEventKey)(activeKey),
                getControlledId: getControlledId || noop,
                getControllerId: getControllerId || noop
            },
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, Object.assign({}, props, {
                onKeyDown: handleKeyDown,
                ref: mergedRef,
                role: role
            }))
        })
    });
});
Nav.displayName = "Nav";
exports.default = Object.assign(Nav, {
    Item: (0, _navItemDefault.default)
});

},{"dom-helpers/querySelectorAll":"g5Sx6","react":"21dqq","@restart/hooks/useForceUpdate":"3Y4bz","@restart/hooks/useMergedRefs":"6hhuo","./NavContext":"j1SMA","./SelectableContext":"8zLqy","./TabContext":"cI3G3","./DataKey":"9vwZh","./NavItem":"2cGYS","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"g5Sx6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>qsa);
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
    return toArray(element.querySelectorAll(selector));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"3Y4bz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useForceUpdate);
var _react = require("react");
function useForceUpdate() {
    // The toggling state value is designed to defeat React optimizations for skipping
    // updates when they are strictly equal to the last state value
    const [, dispatch] = (0, _react.useReducer)((state)=>!state, false);
    return dispatch;
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"j1SMA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
const NavContext = /*#__PURE__*/ _react.createContext(null);
NavContext.displayName = "NavContext";
exports.default = NavContext;

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"8zLqy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeEventKey", ()=>makeEventKey);
var _react = require("react");
const SelectableContext = /*#__PURE__*/ _react.createContext(null);
const makeEventKey = (eventKey, href = null)=>{
    if (eventKey != null) return String(eventKey);
    return href || null;
};
exports.default = SelectableContext;

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"cI3G3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
const TabContext = /*#__PURE__*/ _react.createContext(null);
exports.default = TabContext;

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"9vwZh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ATTRIBUTE_PREFIX", ()=>ATTRIBUTE_PREFIX);
parcelHelpers.export(exports, "PROPERTY_PREFIX", ()=>PROPERTY_PREFIX);
parcelHelpers.export(exports, "dataAttr", ()=>dataAttr);
parcelHelpers.export(exports, "dataProp", ()=>dataProp);
const ATTRIBUTE_PREFIX = `data-rr-ui-`;
const PROPERTY_PREFIX = `rrUi`;
function dataAttr(property) {
    return `${ATTRIBUTE_PREFIX}${property}`;
}
function dataProp(property) {
    return `${PROPERTY_PREFIX}${property}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"2cGYS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useNavItem", ()=>useNavItem);
var _react = require("react");
var _useEventCallback = require("@restart/hooks/useEventCallback");
var _useEventCallbackDefault = parcelHelpers.interopDefault(_useEventCallback);
var _navContext = require("./NavContext");
var _navContextDefault = parcelHelpers.interopDefault(_navContext);
var _selectableContext = require("./SelectableContext");
var _selectableContextDefault = parcelHelpers.interopDefault(_selectableContext);
var _button = require("./Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _dataKey = require("./DataKey");
var _tabContext = require("./TabContext");
var _tabContextDefault = parcelHelpers.interopDefault(_tabContext);
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = [
    "as",
    "active",
    "eventKey"
];
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function useNavItem({ key, onClick, active, id, role, disabled }) {
    const parentOnSelect = (0, _react.useContext)((0, _selectableContextDefault.default));
    const navContext = (0, _react.useContext)((0, _navContextDefault.default));
    const tabContext = (0, _react.useContext)((0, _tabContextDefault.default));
    let isActive = active;
    const props = {
        role
    };
    if (navContext) {
        if (!role && navContext.role === "tablist") props.role = "tab";
        const contextControllerId = navContext.getControllerId(key != null ? key : null);
        const contextControlledId = navContext.getControlledId(key != null ? key : null);
        // @ts-ignore
        props[(0, _dataKey.dataAttr)("event-key")] = key;
        props.id = contextControllerId || id;
        isActive = active == null && key != null ? navContext.activeKey === key : active;
        /**
     * Simplified scenario for `mountOnEnter`.
     *
     * While it would make sense to keep 'aria-controls' for tabs that have been mounted at least
     * once, it would also complicate the code quite a bit, for very little gain.
     * The following implementation is probably good enough.
     *
     * @see https://github.com/react-restart/ui/pull/40#issuecomment-1009971561
     */ if (isActive || !(tabContext != null && tabContext.unmountOnExit) && !(tabContext != null && tabContext.mountOnEnter)) props["aria-controls"] = contextControlledId;
    }
    if (props.role === "tab") {
        props["aria-selected"] = isActive;
        if (!isActive) props.tabIndex = -1;
        if (disabled) {
            props.tabIndex = -1;
            props["aria-disabled"] = true;
        }
    }
    props.onClick = (0, _useEventCallbackDefault.default)((e)=>{
        if (disabled) return;
        onClick == null || onClick(e);
        if (key == null) return;
        if (parentOnSelect && !e.isPropagationStopped()) parentOnSelect(key, e);
    });
    return [
        props,
        {
            isActive
        }
    ];
}
const NavItem = /*#__PURE__*/ _react.forwardRef((_ref, ref)=>{
    let { as: Component = (0, _buttonDefault.default), active, eventKey } = _ref, options = _objectWithoutPropertiesLoose(_ref, _excluded);
    const [props, meta] = useNavItem(Object.assign({
        key: (0, _selectableContext.makeEventKey)(eventKey, options.href),
        active
    }, options));
    // @ts-ignore
    props[(0, _dataKey.dataAttr)("active")] = meta.isActive;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, Object.assign({}, options, props, {
        ref: ref
    }));
});
NavItem.displayName = "NavItem";
exports.default = NavItem;

},{"react":"21dqq","@restart/hooks/useEventCallback":"7ONdq","./NavContext":"j1SMA","./SelectableContext":"8zLqy","./Button":"8YUbR","./DataKey":"9vwZh","./TabContext":"cI3G3","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"7ONdq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useEventCallback);
var _react = require("react");
var _useCommittedRef = require("./useCommittedRef");
var _useCommittedRefDefault = parcelHelpers.interopDefault(_useCommittedRef);
function useEventCallback(fn) {
    const ref = (0, _useCommittedRefDefault.default)(fn);
    return (0, _react.useCallback)(function(...args) {
        return ref.current && ref.current(...args);
    }, [
        ref
    ]);
}

},{"react":"21dqq","./useCommittedRef":"g5BYG","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"g5BYG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded before being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */ function useCommittedRef(value) {
    const ref = (0, _react.useRef)(value);
    (0, _react.useEffect)(()=>{
        ref.current = value;
    }, [
        value
    ]);
    return ref;
}
exports.default = useCommittedRef;

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"dpn1g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
"use client";
// TODO: check
const context = /*#__PURE__*/ _react.createContext(null);
context.displayName = "NavbarContext";
exports.default = context;

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"ew05W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const NavItem = /*#__PURE__*/ _react.forwardRef(({ className, bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "nav-item");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ref: ref,
        className: (0, _classnamesDefault.default)(className, bsPrefix),
        ...props
    });
});
NavItem.displayName = "NavItem";
exports.default = NavItem;

},{"react":"21dqq","classnames":"jocGM","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"7geL8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _anchor = require("@restart/ui/Anchor");
var _anchorDefault = parcelHelpers.interopDefault(_anchor);
var _navItem = require("@restart/ui/NavItem");
var _selectableContext = require("@restart/ui/SelectableContext");
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const NavLink = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, className, as: Component = (0, _anchorDefault.default), active, eventKey, disabled = false, ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "nav-link");
    const [navItemProps, meta] = (0, _navItem.useNavItem)({
        key: (0, _selectableContext.makeEventKey)(eventKey, props.href),
        active,
        disabled,
        ...props
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ...props,
        ...navItemProps,
        ref: ref,
        disabled: disabled,
        className: (0, _classnamesDefault.default)(className, bsPrefix, disabled && "disabled", meta.isActive && "active")
    });
});
NavLink.displayName = "NavLink";
exports.default = NavLink;

},{"classnames":"jocGM","react":"21dqq","@restart/ui/Anchor":"cQOWi","@restart/ui/NavItem":"2cGYS","@restart/ui/SelectableContext":"8zLqy","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"cQOWi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isTrivialHref", ()=>isTrivialHref);
/* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/anchor-has-content */ var _react = require("react");
var _hooks = require("@restart/hooks");
var _button = require("./Button");
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = [
    "onKeyDown"
];
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function isTrivialHref(href) {
    return !href || href.trim() === "#";
}
/**
 * An generic `<a>` component that covers a few A11y cases, ensuring that
 * cases where the `href` is missing or trivial like "#" are treated like buttons.
 */ const Anchor = /*#__PURE__*/ _react.forwardRef((_ref, ref)=>{
    let { onKeyDown } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
    const [buttonProps] = (0, _button.useButtonProps)(Object.assign({
        tagName: "a"
    }, props));
    const handleKeyDown = (0, _hooks.useEventCallback)((e)=>{
        buttonProps.onKeyDown(e);
        onKeyDown == null || onKeyDown(e);
    });
    if (isTrivialHref(props.href) || props.role === "button") return /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", Object.assign({
        ref: ref
    }, props, buttonProps, {
        onKeyDown: handleKeyDown
    }));
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", Object.assign({
        ref: ref
    }, props, {
        onKeyDown: onKeyDown
    }));
});
Anchor.displayName = "Anchor";
exports.default = Anchor;

},{"react":"21dqq","@restart/hooks":"5ErkJ","./Button":"8YUbR","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"5ErkJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useCallbackRef", ()=>(0, _useCallbackRefDefault.default));
parcelHelpers.export(exports, "useCommittedRef", ()=>(0, _useCommittedRefDefault.default));
parcelHelpers.export(exports, "useEventCallback", ()=>(0, _useEventCallbackDefault.default));
parcelHelpers.export(exports, "useEventListener", ()=>(0, _useEventListenerDefault.default));
parcelHelpers.export(exports, "useGlobalListener", ()=>(0, _useGlobalListenerDefault.default));
parcelHelpers.export(exports, "useInterval", ()=>(0, _useIntervalDefault.default));
parcelHelpers.export(exports, "useRafInterval", ()=>(0, _useRafIntervalDefault.default));
parcelHelpers.export(exports, "useMergeState", ()=>(0, _useMergeStateDefault.default));
parcelHelpers.export(exports, "useMergeStateFromProps", ()=>(0, _useMergeStateFromPropsDefault.default));
parcelHelpers.export(exports, "useMounted", ()=>(0, _useMountedDefault.default));
parcelHelpers.export(exports, "usePrevious", ()=>(0, _usePreviousDefault.default));
parcelHelpers.export(exports, "useImage", ()=>(0, _useImageDefault.default));
parcelHelpers.export(exports, "useResizeObserver", ()=>(0, _useResizeObserverDefault.default));
var _useCallbackRef = require("./useCallbackRef");
var _useCallbackRefDefault = parcelHelpers.interopDefault(_useCallbackRef);
var _useCommittedRef = require("./useCommittedRef");
var _useCommittedRefDefault = parcelHelpers.interopDefault(_useCommittedRef);
var _useEventCallback = require("./useEventCallback");
var _useEventCallbackDefault = parcelHelpers.interopDefault(_useEventCallback);
var _useEventListener = require("./useEventListener");
var _useEventListenerDefault = parcelHelpers.interopDefault(_useEventListener);
var _useGlobalListener = require("./useGlobalListener");
var _useGlobalListenerDefault = parcelHelpers.interopDefault(_useGlobalListener);
var _useInterval = require("./useInterval");
var _useIntervalDefault = parcelHelpers.interopDefault(_useInterval);
var _useRafInterval = require("./useRafInterval");
var _useRafIntervalDefault = parcelHelpers.interopDefault(_useRafInterval);
var _useMergeState = require("./useMergeState");
var _useMergeStateDefault = parcelHelpers.interopDefault(_useMergeState);
var _useMergeStateFromProps = require("./useMergeStateFromProps");
var _useMergeStateFromPropsDefault = parcelHelpers.interopDefault(_useMergeStateFromProps);
var _useMounted = require("./useMounted");
var _useMountedDefault = parcelHelpers.interopDefault(_useMounted);
var _usePrevious = require("./usePrevious");
var _usePreviousDefault = parcelHelpers.interopDefault(_usePrevious);
var _useImage = require("./useImage");
var _useImageDefault = parcelHelpers.interopDefault(_useImage);
var _useResizeObserver = require("./useResizeObserver");
var _useResizeObserverDefault = parcelHelpers.interopDefault(_useResizeObserver);

},{"./useCallbackRef":"82p6M","./useCommittedRef":"g5BYG","./useEventCallback":"7ONdq","./useEventListener":"dBDI3","./useGlobalListener":"iey73","./useInterval":"hnmo4","./useRafInterval":"4qbLw","./useMergeState":"7E8IK","./useMergeStateFromProps":"6f6Me","./useMounted":"iK6A1","./usePrevious":"gDCGm","./useImage":"iuAlv","./useResizeObserver":"edwGv","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"82p6M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useCallbackRef);
var _react = require("react");
function useCallbackRef() {
    return (0, _react.useState)(null);
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"dBDI3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useEventListener);
var _react = require("react");
var _useEventCallback = require("./useEventCallback");
var _useEventCallbackDefault = parcelHelpers.interopDefault(_useEventCallback);
function useEventListener(eventTarget, event, listener, capture = false) {
    const handler = (0, _useEventCallbackDefault.default)(listener);
    (0, _react.useEffect)(()=>{
        const target = typeof eventTarget === "function" ? eventTarget() : eventTarget;
        target.addEventListener(event, handler, capture);
        return ()=>target.removeEventListener(event, handler, capture);
    }, [
        eventTarget
    ]);
}

},{"react":"21dqq","./useEventCallback":"7ONdq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"iey73":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useGlobalListener);
var _useEventListener = require("./useEventListener");
var _useEventListenerDefault = parcelHelpers.interopDefault(_useEventListener);
var _react = require("react");
function useGlobalListener(event, handler, capture = false) {
    const documentTarget = (0, _react.useCallback)(()=>document, []);
    return (0, _useEventListenerDefault.default)(documentTarget, event, handler, capture);
}

},{"./useEventListener":"dBDI3","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"hnmo4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _useCommittedRef = require("./useCommittedRef");
var _useCommittedRefDefault = parcelHelpers.interopDefault(_useCommittedRef);
/**
 * Creates a `setInterval` that is properly cleaned up when a component unmounted
 *
 * ```tsx
 *  function Timer() {
 *    const [timer, setTimer] = useState(0)
 *    useInterval(() => setTimer(i => i + 1), 1000)
 *
 *    return <span>{timer} seconds past</span>
 *  }
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 */ /**
 * Creates a pausable `setInterval` that is properly cleaned up when a component unmounted
 *
 * ```tsx
 *  const [paused, setPaused] = useState(false)
 *  const [timer, setTimer] = useState(0)
 *
 *  useInterval(() => setTimer(i => i + 1), 1000, paused)
 *
 *  return (
 *    <span>
 *      {timer} seconds past
 *
 *      <button onClick={() => setPaused(p => !p)}>{paused ? 'Play' : 'Pause' }</button>
 *    </span>
 * )
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 * @param paused Whether or not the interval is currently running
 */ /**
 * Creates a pausable `setInterval` that _fires_ immediately and is
 * properly cleaned up when a component unmounted
 *
 * ```tsx
 *  const [timer, setTimer] = useState(-1)
 *  useInterval(() => setTimer(i => i + 1), 1000, false, true)
 *
 *  // will update to 0 on the first effect
 *  return <span>{timer} seconds past</span>
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 * @param paused Whether or not the interval is currently running
 * @param runImmediately Whether to run the function immediately on mount or unpause
 * rather than waiting for the first interval to elapse
 *

 */ function useInterval(fn, ms, paused = false, runImmediately = false) {
    let handle;
    const fnRef = (0, _useCommittedRefDefault.default)(fn);
    // this ref is necessary b/c useEffect will sometimes miss a paused toggle
    // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.
    const pausedRef = (0, _useCommittedRefDefault.default)(paused);
    const tick = ()=>{
        if (pausedRef.current) return;
        fnRef.current();
        schedule(); // eslint-disable-line no-use-before-define
    };
    const schedule = ()=>{
        clearTimeout(handle);
        handle = setTimeout(tick, ms);
    };
    (0, _react.useEffect)(()=>{
        if (runImmediately) tick();
        else schedule();
        return ()=>clearTimeout(handle);
    }, [
        paused,
        runImmediately
    ]);
}
exports.default = useInterval;

},{"react":"21dqq","./useCommittedRef":"g5BYG","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"4qbLw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _useCommittedRef = require("./useCommittedRef");
var _useCommittedRefDefault = parcelHelpers.interopDefault(_useCommittedRef);
function useRafInterval(fn, ms, paused = false) {
    let handle;
    let start = new Date().getTime();
    const fnRef = (0, _useCommittedRefDefault.default)(fn);
    // this ref is necessary b/c useEffect will sometimes miss a paused toggle
    // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.
    const pausedRef = (0, _useCommittedRefDefault.default)(paused);
    function loop() {
        const current = new Date().getTime();
        const delta = current - start;
        if (pausedRef.current) return;
        if (delta >= ms && fnRef.current) {
            fnRef.current();
            start = new Date().getTime();
        }
        cancelAnimationFrame(handle);
        handle = requestAnimationFrame(loop);
    }
    (0, _react.useEffect)(()=>{
        handle = requestAnimationFrame(loop);
        return ()=>cancelAnimationFrame(handle);
    }, []);
}
exports.default = useRafInterval;

},{"react":"21dqq","./useCommittedRef":"g5BYG","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"7E8IK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useMergeState);
var _react = require("react");
function useMergeState(initialState) {
    const [state, setState] = (0, _react.useState)(initialState);
    const updater = (0, _react.useCallback)((update)=>{
        if (update === null) return;
        if (typeof update === "function") setState((state)=>{
            const nextState = update(state);
            return nextState == null ? state : Object.assign({}, state, nextState);
        });
        else setState((state)=>Object.assign({}, state, update));
    }, [
        setState
    ]);
    return [
        state,
        updater
    ];
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"6f6Me":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useMergeStateFromProps);
var _useMergeState = require("./useMergeState");
var _useMergeStateDefault = parcelHelpers.interopDefault(_useMergeState);
function useMergeStateFromProps(props, gDSFP, initialState) {
    const [state, setState] = (0, _useMergeStateDefault.default)(initialState);
    const nextState = gDSFP(props, state);
    if (nextState !== null) setState(nextState);
    return [
        state,
        setState
    ];
}

},{"./useMergeState":"7E8IK","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"iK6A1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useMounted);
var _react = require("react");
function useMounted() {
    const mounted = (0, _react.useRef)(true);
    const isMounted = (0, _react.useRef)(()=>mounted.current);
    (0, _react.useEffect)(()=>{
        mounted.current = true;
        return ()=>{
            mounted.current = false;
        };
    }, []);
    return isMounted.current;
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"gDCGm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>usePrevious);
var _react = require("react");
function usePrevious(value) {
    const ref = (0, _react.useRef)(null);
    (0, _react.useEffect)(()=>{
        ref.current = value;
    });
    return ref.current;
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"iuAlv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useImage);
var _react = require("react");
function useImage(imageOrUrl, crossOrigin) {
    const [state, setState] = (0, _react.useState)({
        image: null,
        error: null
    });
    (0, _react.useEffect)(()=>{
        if (!imageOrUrl) return undefined;
        let image;
        if (typeof imageOrUrl === "string") {
            image = new Image();
            if (crossOrigin) image.crossOrigin = crossOrigin;
            image.src = imageOrUrl;
        } else {
            image = imageOrUrl;
            if (image.complete && image.naturalHeight > 0) {
                setState({
                    image,
                    error: null
                });
                return;
            }
        }
        function onLoad() {
            setState({
                image,
                error: null
            });
        }
        function onError(error) {
            setState({
                image,
                error
            });
        }
        image.addEventListener("load", onLoad);
        image.addEventListener("error", onError);
        return ()=>{
            image.removeEventListener("load", onLoad);
            image.removeEventListener("error", onError);
        };
    }, [
        imageOrUrl,
        crossOrigin
    ]);
    return state;
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"edwGv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useResizeObserver);
var _react = require("react");
var _useIsomorphicEffect = require("./useIsomorphicEffect");
var _useIsomorphicEffectDefault = parcelHelpers.interopDefault(_useIsomorphicEffect);
const targetMap = new WeakMap();
let resizeObserver;
function getResizeObserver() {
    // eslint-disable-next-line no-return-assign
    return resizeObserver = resizeObserver || new window.ResizeObserver((entries)=>{
        entries.forEach((entry)=>{
            const handler = targetMap.get(entry.target);
            if (handler) handler(entry.contentRect);
        });
    });
}
function useResizeObserver(element) {
    const [rect, setRect] = (0, _react.useState)(null);
    (0, _useIsomorphicEffectDefault.default)(()=>{
        if (!element) return;
        getResizeObserver().observe(element);
        setRect(element.getBoundingClientRect());
        targetMap.set(element, (rect)=>{
            setRect(rect);
        });
        return ()=>{
            targetMap.delete(element);
        };
    }, [
        element
    ]);
    return rect;
}

},{"react":"21dqq","./useIsomorphicEffect":"e8blq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"e8blq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var global = arguments[3];
const isReactNative = typeof global !== "undefined" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative";
const isDOM = typeof document !== "undefined";
/**
 * Is `useLayoutEffect` in a DOM or React Native environment, otherwise resolves to useEffect
 * Only useful to avoid the console warning.
 *
 * PREFER `useEffect` UNLESS YOU KNOW WHAT YOU ARE DOING.
 *
 * @category effects
 */ exports.default = isDOM || isReactNative ? (0, _react.useLayoutEffect) : (0, _react.useEffect);

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"1mHjo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _selectableContext = require("@restart/ui/SelectableContext");
var _selectableContextDefault = parcelHelpers.interopDefault(_selectableContext);
var _uncontrollable = require("uncontrollable");
var _navbarBrand = require("./NavbarBrand");
var _navbarBrandDefault = parcelHelpers.interopDefault(_navbarBrand);
var _navbarCollapse = require("./NavbarCollapse");
var _navbarCollapseDefault = parcelHelpers.interopDefault(_navbarCollapse);
var _navbarToggle = require("./NavbarToggle");
var _navbarToggleDefault = parcelHelpers.interopDefault(_navbarToggle);
var _navbarOffcanvas = require("./NavbarOffcanvas");
var _navbarOffcanvasDefault = parcelHelpers.interopDefault(_navbarOffcanvas);
var _themeProvider = require("./ThemeProvider");
var _navbarContext = require("./NavbarContext");
var _navbarContextDefault = parcelHelpers.interopDefault(_navbarContext);
var _navbarText = require("./NavbarText");
var _navbarTextDefault = parcelHelpers.interopDefault(_navbarText);
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const Navbar = /*#__PURE__*/ _react.forwardRef((props, ref)=>{
    const { bsPrefix: initialBsPrefix, expand = true, variant = "light", bg, fixed, sticky, className, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "nav", expanded, onToggle, onSelect, collapseOnSelect = false, ...controlledProps } = (0, _uncontrollable.useUncontrolled)(props, {
        expanded: "onToggle"
    });
    const bsPrefix = (0, _themeProvider.useBootstrapPrefix)(initialBsPrefix, "navbar");
    const handleCollapse = (0, _react.useCallback)((...args)=>{
        onSelect == null || onSelect(...args);
        if (collapseOnSelect && expanded) onToggle == null || onToggle(false);
    }, [
        onSelect,
        collapseOnSelect,
        expanded,
        onToggle
    ]);
    // will result in some false positives but that seems better
    // than false negatives. strict `undefined` check allows explicit
    // "nulling" of the role if the user really doesn't want one
    if (controlledProps.role === undefined && Component !== "nav") controlledProps.role = "navigation";
    let expandClass = `${bsPrefix}-expand`;
    if (typeof expand === "string") expandClass = `${expandClass}-${expand}`;
    const navbarContext = (0, _react.useMemo)(()=>({
            onToggle: ()=>onToggle == null ? void 0 : onToggle(!expanded),
            bsPrefix,
            expanded: !!expanded,
            expand
        }), [
        bsPrefix,
        expanded,
        expand,
        onToggle
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navbarContextDefault.default).Provider, {
        value: navbarContext,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _selectableContextDefault.default).Provider, {
            value: handleCollapse,
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
                ref: ref,
                ...controlledProps,
                className: (0, _classnamesDefault.default)(className, bsPrefix, expand && expandClass, variant && `${bsPrefix}-${variant}`, bg && `bg-${bg}`, sticky && `sticky-${sticky}`, fixed && `fixed-${fixed}`)
            })
        })
    });
});
Navbar.displayName = "Navbar";
exports.default = Object.assign(Navbar, {
    Brand: (0, _navbarBrandDefault.default),
    Collapse: (0, _navbarCollapseDefault.default),
    Offcanvas: (0, _navbarOffcanvasDefault.default),
    Text: (0, _navbarTextDefault.default),
    Toggle: (0, _navbarToggleDefault.default)
});

},{"classnames":"jocGM","react":"21dqq","@restart/ui/SelectableContext":"8zLqy","uncontrollable":"b3yWY","./NavbarBrand":"iOo4v","./NavbarCollapse":"eNSCC","./NavbarToggle":"7vOXv","./NavbarOffcanvas":"fOxoE","./ThemeProvider":"dVixI","./NavbarContext":"dpn1g","./NavbarText":"76xFa","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"iOo4v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const NavbarBrand = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, className, as, ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "navbar-brand");
    const Component = as || (props.href ? "a" : "span");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ...props,
        ref: ref,
        className: (0, _classnamesDefault.default)(className, bsPrefix)
    });
});
NavbarBrand.displayName = "NavbarBrand";
exports.default = NavbarBrand;

},{"classnames":"jocGM","react":"21dqq","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"eNSCC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _collapse = require("./Collapse");
var _collapseDefault = parcelHelpers.interopDefault(_collapse);
var _themeProvider = require("./ThemeProvider");
var _navbarContext = require("./NavbarContext");
var _navbarContextDefault = parcelHelpers.interopDefault(_navbarContext);
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const NavbarCollapse = /*#__PURE__*/ _react.forwardRef(({ children, bsPrefix, ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "navbar-collapse");
    const context = (0, _react.useContext)((0, _navbarContextDefault.default));
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collapseDefault.default), {
        in: !!(context && context.expanded),
        ...props,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
            ref: ref,
            className: bsPrefix,
            children: children
        })
    });
});
NavbarCollapse.displayName = "NavbarCollapse";
exports.default = NavbarCollapse;

},{"react":"21dqq","./Collapse":"acuzI","./ThemeProvider":"dVixI","./NavbarContext":"dpn1g","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"7vOXv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _useEventCallback = require("@restart/hooks/useEventCallback");
var _useEventCallbackDefault = parcelHelpers.interopDefault(_useEventCallback);
var _themeProvider = require("./ThemeProvider");
var _navbarContext = require("./NavbarContext");
var _navbarContextDefault = parcelHelpers.interopDefault(_navbarContext);
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const NavbarToggle = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, className, children, label = "Toggle navigation", // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "button", onClick, ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "navbar-toggler");
    const { onToggle, expanded } = (0, _react.useContext)((0, _navbarContextDefault.default)) || {};
    const handleClick = (0, _useEventCallbackDefault.default)((e)=>{
        if (onClick) onClick(e);
        if (onToggle) onToggle();
    });
    if (Component === "button") props.type = "button";
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ...props,
        ref: ref,
        onClick: handleClick,
        "aria-label": label,
        className: (0, _classnamesDefault.default)(className, bsPrefix, !expanded && "collapsed"),
        children: children || /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
            className: `${bsPrefix}-icon`
        })
    });
});
NavbarToggle.displayName = "NavbarToggle";
exports.default = NavbarToggle;

},{"classnames":"jocGM","react":"21dqq","@restart/hooks/useEventCallback":"7ONdq","./ThemeProvider":"dVixI","./NavbarContext":"dpn1g","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"fOxoE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _offcanvas = require("./Offcanvas");
var _offcanvasDefault = parcelHelpers.interopDefault(_offcanvas);
var _navbarContext = require("./NavbarContext");
var _navbarContextDefault = parcelHelpers.interopDefault(_navbarContext);
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const NavbarOffcanvas = /*#__PURE__*/ _react.forwardRef((props, ref)=>{
    const context = (0, _react.useContext)((0, _navbarContextDefault.default));
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _offcanvasDefault.default), {
        ref: ref,
        show: !!(context != null && context.expanded),
        ...props,
        renderStaticNode: true
    });
});
NavbarOffcanvas.displayName = "NavbarOffcanvas";
exports.default = NavbarOffcanvas;

},{"react":"21dqq","./Offcanvas":"eC3RS","./NavbarContext":"dpn1g","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"eC3RS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _useBreakpoint = require("@restart/hooks/useBreakpoint");
var _useBreakpointDefault = parcelHelpers.interopDefault(_useBreakpoint);
var _useEventCallback = require("@restart/hooks/useEventCallback");
var _useEventCallbackDefault = parcelHelpers.interopDefault(_useEventCallback);
var _react = require("react");
var _modal = require("@restart/ui/Modal");
var _modalDefault = parcelHelpers.interopDefault(_modal);
var _fade = require("./Fade");
var _fadeDefault = parcelHelpers.interopDefault(_fade);
var _offcanvasBody = require("./OffcanvasBody");
var _offcanvasBodyDefault = parcelHelpers.interopDefault(_offcanvasBody);
var _offcanvasToggling = require("./OffcanvasToggling");
var _offcanvasTogglingDefault = parcelHelpers.interopDefault(_offcanvasToggling);
var _modalContext = require("./ModalContext");
var _modalContextDefault = parcelHelpers.interopDefault(_modalContext);
var _navbarContext = require("./NavbarContext");
var _navbarContextDefault = parcelHelpers.interopDefault(_navbarContext);
var _offcanvasHeader = require("./OffcanvasHeader");
var _offcanvasHeaderDefault = parcelHelpers.interopDefault(_offcanvasHeader);
var _offcanvasTitle = require("./OffcanvasTitle");
var _offcanvasTitleDefault = parcelHelpers.interopDefault(_offcanvasTitle);
var _themeProvider = require("./ThemeProvider");
var _bootstrapModalManager = require("./BootstrapModalManager");
var _bootstrapModalManagerDefault = parcelHelpers.interopDefault(_bootstrapModalManager);
var _jsxRuntime = require("react/jsx-runtime");
"use client";
function DialogTransition(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _offcanvasTogglingDefault.default), {
        ...props
    });
}
function BackdropTransition(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _fadeDefault.default), {
        ...props
    });
}
const Offcanvas = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, className, children, "aria-labelledby": ariaLabelledby, placement = "start", responsive, /* BaseModal props */ show = false, backdrop = true, keyboard = true, scroll = false, onEscapeKeyDown, onShow, onHide, container, autoFocus = true, enforceFocus = true, restoreFocus = true, restoreFocusOptions, onEntered, onExit, onExiting, onEnter, onEntering, onExited, backdropClassName, manager: propsManager, renderStaticNode = false, ...props }, ref)=>{
    const modalManager = (0, _react.useRef)();
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "offcanvas");
    const { onToggle } = (0, _react.useContext)((0, _navbarContextDefault.default)) || {};
    const [showOffcanvas, setShowOffcanvas] = (0, _react.useState)(false);
    const hideResponsiveOffcanvas = (0, _useBreakpointDefault.default)(responsive || "xs", "up");
    (0, _react.useEffect)(()=>{
        // Handles the case where screen is resized while the responsive
        // offcanvas is shown. If `responsive` not provided, just use `show`.
        setShowOffcanvas(responsive ? show && !hideResponsiveOffcanvas : show);
    }, [
        show,
        responsive,
        hideResponsiveOffcanvas
    ]);
    const handleHide = (0, _useEventCallbackDefault.default)(()=>{
        onToggle == null || onToggle();
        onHide == null || onHide();
    });
    const modalContext = (0, _react.useMemo)(()=>({
            onHide: handleHide
        }), [
        handleHide
    ]);
    function getModalManager() {
        if (propsManager) return propsManager;
        if (scroll) {
            // Have to use a different modal manager since the shared
            // one handles overflow.
            if (!modalManager.current) modalManager.current = new (0, _bootstrapModalManagerDefault.default)({
                handleContainerOverflow: false
            });
            return modalManager.current;
        }
        return (0, _bootstrapModalManager.getSharedManager)();
    }
    const handleEnter = (node, ...args)=>{
        if (node) node.style.visibility = "visible";
        onEnter == null || onEnter(node, ...args);
    };
    const handleExited = (node, ...args)=>{
        if (node) node.style.visibility = "";
        onExited == null || onExited(...args);
    };
    const renderBackdrop = (0, _react.useCallback)((backdropProps)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
            ...backdropProps,
            className: (0, _classnamesDefault.default)(`${bsPrefix}-backdrop`, backdropClassName)
        }), [
        backdropClassName,
        bsPrefix
    ]);
    const renderDialog = (dialogProps)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
            ...dialogProps,
            ...props,
            className: (0, _classnamesDefault.default)(className, responsive ? `${bsPrefix}-${responsive}` : bsPrefix, `${bsPrefix}-${placement}`),
            "aria-labelledby": ariaLabelledby,
            children: children
        });
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            !showOffcanvas && (responsive || renderStaticNode) && renderDialog({}),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _modalContextDefault.default).Provider, {
                value: modalContext,
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _modalDefault.default), {
                    show: showOffcanvas,
                    ref: ref,
                    backdrop: backdrop,
                    container: container,
                    keyboard: keyboard,
                    autoFocus: autoFocus,
                    enforceFocus: enforceFocus && !scroll,
                    restoreFocus: restoreFocus,
                    restoreFocusOptions: restoreFocusOptions,
                    onEscapeKeyDown: onEscapeKeyDown,
                    onShow: onShow,
                    onHide: handleHide,
                    onEnter: handleEnter,
                    onEntering: onEntering,
                    onEntered: onEntered,
                    onExit: onExit,
                    onExiting: onExiting,
                    onExited: handleExited,
                    manager: getModalManager(),
                    transition: DialogTransition,
                    backdropTransition: BackdropTransition,
                    renderBackdrop: renderBackdrop,
                    renderDialog: renderDialog
                })
            })
        ]
    });
});
Offcanvas.displayName = "Offcanvas";
exports.default = Object.assign(Offcanvas, {
    Body: (0, _offcanvasBodyDefault.default),
    Header: (0, _offcanvasHeaderDefault.default),
    Title: (0, _offcanvasTitleDefault.default)
});

},{"classnames":"jocGM","@restart/hooks/useBreakpoint":"2c4de","@restart/hooks/useEventCallback":"7ONdq","react":"21dqq","@restart/ui/Modal":"crj1M","./Fade":"aH18S","./OffcanvasBody":"fX7Bo","./OffcanvasToggling":"eGvzt","./ModalContext":"2U4Zk","./NavbarContext":"dpn1g","./OffcanvasHeader":"a6xAh","./OffcanvasTitle":"77qdX","./ThemeProvider":"dVixI","./BootstrapModalManager":"lr1Yp","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"2c4de":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Create a responsive hook we a set of breakpoint names and widths.
 * You can use any valid css units as well as a numbers (for pixels).
 *
 * **NOTE:** The object key order is important! it's assumed to be in order from smallest to largest
 *
 * ```ts
 * const useBreakpoint = createBreakpointHook({
 *  xs: 0,
 *  sm: 576,
 *  md: 768,
 *  lg: 992,
 *  xl: 1200,
 * })
 * ```
 *
 * **Watch out!** using string values will sometimes construct media queries using css `calc()` which
 * is NOT supported in media queries by all browsers at the moment. use numbers for
 * the widest range of browser support.
 *
 * @param breakpointValues A object hash of names to breakpoint dimensions
 */ parcelHelpers.export(exports, "createBreakpointHook", ()=>createBreakpointHook);
var _useMediaQuery = require("./useMediaQuery");
var _useMediaQueryDefault = parcelHelpers.interopDefault(_useMediaQuery);
var _react = require("react");
function createBreakpointHook(breakpointValues) {
    const names = Object.keys(breakpointValues);
    function and(query, next) {
        if (query === next) return next;
        return query ? `${query} and ${next}` : next;
    }
    function getNext(breakpoint) {
        return names[Math.min(names.indexOf(breakpoint) + 1, names.length - 1)];
    }
    function getMaxQuery(breakpoint) {
        const next = getNext(breakpoint);
        let value = breakpointValues[next];
        if (typeof value === "number") value = `${value - 0.2}px`;
        else value = `calc(${value} - 0.2px)`;
        return `(max-width: ${value})`;
    }
    function getMinQuery(breakpoint) {
        let value = breakpointValues[breakpoint];
        if (typeof value === "number") value = `${value}px`;
        return `(min-width: ${value})`;
    }
    /**
   * Match a set of breakpoints
   *
   * ```tsx
   * const MidSizeOnly = () => {
   *   const isMid = useBreakpoint({ lg: 'down', sm: 'up' });
   *
   *   if (isMid) return <div>On a Reasonable sized Screen!</div>
   *   return null;
   * }
   * ```
   * @param breakpointMap An object map of breakpoints and directions, queries are constructed using "and" to join
   * breakpoints together
   * @param window Optionally specify the target window to match against (useful when rendering into iframes)
   */ /**
   * Match a single breakpoint exactly, up, or down.
   *
   * ```tsx
   * const PhoneOnly = () => {
   *   const isSmall = useBreakpoint('sm', 'down');
   *
   *   if (isSmall) return <div>On a Small Screen!</div>
   *   return null;
   * }
   * ```
   *
   * @param breakpoint The breakpoint key
   * @param direction A direction 'up' for a max, 'down' for min, true to match only the breakpoint
   * @param window Optionally specify the target window to match against (useful when rendering into iframes)
   */ function useBreakpoint(breakpointOrMap, direction, window) {
        let breakpointMap;
        if (typeof breakpointOrMap === "object") {
            breakpointMap = breakpointOrMap;
            window = direction;
            direction = true;
        } else {
            direction = direction || true;
            breakpointMap = {
                [breakpointOrMap]: direction
            };
        }
        let query = (0, _react.useMemo)(()=>Object.entries(breakpointMap).reduce((query, [key, direction])=>{
                if (direction === "up" || direction === true) query = and(query, getMinQuery(key));
                if (direction === "down" || direction === true) query = and(query, getMaxQuery(key));
                return query;
            }, ""), [
            JSON.stringify(breakpointMap)
        ]);
        return (0, _useMediaQueryDefault.default)(query, window);
    }
    return useBreakpoint;
}
const useBreakpoint = createBreakpointHook({
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
});
exports.default = useBreakpoint;

},{"./useMediaQuery":"etGLg","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"etGLg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useMediaQuery);
var _useIsomorphicEffect = require("./useIsomorphicEffect");
var _useIsomorphicEffectDefault = parcelHelpers.interopDefault(_useIsomorphicEffect);
var _react = require("react");
const matchersByWindow = new WeakMap();
const getMatcher = (query, targetWindow)=>{
    if (!query || !targetWindow) return undefined;
    const matchers = matchersByWindow.get(targetWindow) || new Map();
    matchersByWindow.set(targetWindow, matchers);
    let mql = matchers.get(query);
    if (!mql) {
        mql = targetWindow.matchMedia(query);
        mql.refCount = 0;
        matchers.set(mql.media, mql);
    }
    return mql;
};
function useMediaQuery(query, targetWindow = typeof window === "undefined" ? undefined : window) {
    const mql = getMatcher(query, targetWindow);
    const [matches, setMatches] = (0, _react.useState)(()=>mql ? mql.matches : false);
    (0, _useIsomorphicEffectDefault.default)(()=>{
        let mql = getMatcher(query, targetWindow);
        if (!mql) return setMatches(false);
        let matchers = matchersByWindow.get(targetWindow);
        const handleChange = ()=>{
            setMatches(mql.matches);
        };
        mql.refCount++;
        mql.addListener(handleChange);
        handleChange();
        return ()=>{
            mql.removeListener(handleChange);
            mql.refCount--;
            if (mql.refCount <= 0) matchers == null || matchers.delete(mql.media);
            mql = undefined;
        };
    }, [
        query
    ]);
    return matches;
}

},{"./useIsomorphicEffect":"e8blq","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"crj1M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable @typescript-eslint/no-use-before-define, react/prop-types */ var _activeElement = require("dom-helpers/activeElement");
var _activeElementDefault = parcelHelpers.interopDefault(_activeElement);
var _contains = require("dom-helpers/contains");
var _containsDefault = parcelHelpers.interopDefault(_contains);
var _canUseDOM = require("dom-helpers/canUseDOM");
var _canUseDOMDefault = parcelHelpers.interopDefault(_canUseDOM);
var _listen = require("dom-helpers/listen");
var _listenDefault = parcelHelpers.interopDefault(_listen);
var _react = require("react");
var _reactDom = require("react-dom");
var _reactDomDefault = parcelHelpers.interopDefault(_reactDom);
var _useMounted = require("@restart/hooks/useMounted");
var _useMountedDefault = parcelHelpers.interopDefault(_useMounted);
var _useWillUnmount = require("@restart/hooks/useWillUnmount");
var _useWillUnmountDefault = parcelHelpers.interopDefault(_useWillUnmount);
var _usePrevious = require("@restart/hooks/usePrevious");
var _usePreviousDefault = parcelHelpers.interopDefault(_usePrevious);
var _useEventCallback = require("@restart/hooks/useEventCallback");
var _useEventCallbackDefault = parcelHelpers.interopDefault(_useEventCallback);
var _modalManager = require("./ModalManager");
var _modalManagerDefault = parcelHelpers.interopDefault(_modalManager);
var _useWaitForDOMRef = require("./useWaitForDOMRef");
var _useWaitForDOMRefDefault = parcelHelpers.interopDefault(_useWaitForDOMRef);
var _useWindow = require("./useWindow");
var _useWindowDefault = parcelHelpers.interopDefault(_useWindow);
var _imperativeTransition = require("./ImperativeTransition");
var _utils = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = [
    "show",
    "role",
    "className",
    "style",
    "children",
    "backdrop",
    "keyboard",
    "onBackdropClick",
    "onEscapeKeyDown",
    "transition",
    "runTransition",
    "backdropTransition",
    "runBackdropTransition",
    "autoFocus",
    "enforceFocus",
    "restoreFocus",
    "restoreFocusOptions",
    "renderDialog",
    "renderBackdrop",
    "manager",
    "container",
    "onShow",
    "onHide",
    "onExit",
    "onExited",
    "onExiting",
    "onEnter",
    "onEntering",
    "onEntered"
];
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
let manager;
function getManager(window) {
    if (!manager) manager = new (0, _modalManagerDefault.default)({
        ownerDocument: window == null ? void 0 : window.document
    });
    return manager;
}
function useModalManager(provided) {
    const window = (0, _useWindowDefault.default)();
    const modalManager = provided || getManager(window);
    const modal = (0, _react.useRef)({
        dialog: null,
        backdrop: null
    });
    return Object.assign(modal.current, {
        add: ()=>modalManager.add(modal.current),
        remove: ()=>modalManager.remove(modal.current),
        isTopModal: ()=>modalManager.isTopModal(modal.current),
        setDialogRef: (0, _react.useCallback)((ref)=>{
            modal.current.dialog = ref;
        }, []),
        setBackdropRef: (0, _react.useCallback)((ref)=>{
            modal.current.backdrop = ref;
        }, [])
    });
}
const Modal = /*#__PURE__*/ (0, _react.forwardRef)((_ref, ref)=>{
    let { show = false, role = "dialog", className, style, children, backdrop = true, keyboard = true, onBackdropClick, onEscapeKeyDown, transition, runTransition, backdropTransition, runBackdropTransition, autoFocus = true, enforceFocus = true, restoreFocus = true, restoreFocusOptions, renderDialog, renderBackdrop = (props)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)("div", Object.assign({}, props)), manager: providedManager, container: containerRef, onShow, onHide = ()=>{}, onExit, onExited, onExiting, onEnter, onEntering, onEntered } = _ref, rest = _objectWithoutPropertiesLoose(_ref, _excluded);
    const ownerWindow = (0, _useWindowDefault.default)();
    const container = (0, _useWaitForDOMRefDefault.default)(containerRef);
    const modal = useModalManager(providedManager);
    const isMounted = (0, _useMountedDefault.default)();
    const prevShow = (0, _usePreviousDefault.default)(show);
    const [exited, setExited] = (0, _react.useState)(!show);
    const lastFocusRef = (0, _react.useRef)(null);
    (0, _react.useImperativeHandle)(ref, ()=>modal, [
        modal
    ]);
    if ((0, _canUseDOMDefault.default) && !prevShow && show) lastFocusRef.current = (0, _activeElementDefault.default)(ownerWindow == null ? void 0 : ownerWindow.document);
    // TODO: I think this needs to be in an effect
    if (show && exited) setExited(false);
    const handleShow = (0, _useEventCallbackDefault.default)(()=>{
        modal.add();
        removeKeydownListenerRef.current = (0, _listenDefault.default)(document, "keydown", handleDocumentKeyDown);
        removeFocusListenerRef.current = (0, _listenDefault.default)(document, "focus", // the timeout is necessary b/c this will run before the new modal is mounted
        // and so steals focus from it
        ()=>setTimeout(handleEnforceFocus), true);
        if (onShow) onShow();
        // autofocus after onShow to not trigger a focus event for previous
        // modals before this one is shown.
        if (autoFocus) {
            var _modal$dialog$ownerDo, _modal$dialog;
            const currentActiveElement = (0, _activeElementDefault.default)((_modal$dialog$ownerDo = (_modal$dialog = modal.dialog) == null ? void 0 : _modal$dialog.ownerDocument) != null ? _modal$dialog$ownerDo : ownerWindow == null ? void 0 : ownerWindow.document);
            if (modal.dialog && currentActiveElement && !(0, _containsDefault.default)(modal.dialog, currentActiveElement)) {
                lastFocusRef.current = currentActiveElement;
                modal.dialog.focus();
            }
        }
    });
    const handleHide = (0, _useEventCallbackDefault.default)(()=>{
        modal.remove();
        removeKeydownListenerRef.current == null || removeKeydownListenerRef.current();
        removeFocusListenerRef.current == null || removeFocusListenerRef.current();
        if (restoreFocus) {
            var _lastFocusRef$current;
            // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
            (_lastFocusRef$current = lastFocusRef.current) == null || _lastFocusRef$current.focus == null || _lastFocusRef$current.focus(restoreFocusOptions);
            lastFocusRef.current = null;
        }
    });
    // TODO: try and combine these effects: https://github.com/react-bootstrap/react-overlays/pull/794#discussion_r409954120
    // Show logic when:
    //  - show is `true` _and_ `container` has resolved
    (0, _react.useEffect)(()=>{
        if (!show || !container) return;
        handleShow();
    }, [
        show,
        container,
        /* should never change: */ handleShow
    ]);
    // Hide cleanup logic when:
    //  - `exited` switches to true
    //  - component unmounts;
    (0, _react.useEffect)(()=>{
        if (!exited) return;
        handleHide();
    }, [
        exited,
        handleHide
    ]);
    (0, _useWillUnmountDefault.default)(()=>{
        handleHide();
    });
    // --------------------------------
    const handleEnforceFocus = (0, _useEventCallbackDefault.default)(()=>{
        if (!enforceFocus || !isMounted() || !modal.isTopModal()) return;
        const currentActiveElement = (0, _activeElementDefault.default)(ownerWindow == null ? void 0 : ownerWindow.document);
        if (modal.dialog && currentActiveElement && !(0, _containsDefault.default)(modal.dialog, currentActiveElement)) modal.dialog.focus();
    });
    const handleBackdropClick = (0, _useEventCallbackDefault.default)((e)=>{
        if (e.target !== e.currentTarget) return;
        onBackdropClick == null || onBackdropClick(e);
        if (backdrop === true) onHide();
    });
    const handleDocumentKeyDown = (0, _useEventCallbackDefault.default)((e)=>{
        if (keyboard && (0, _utils.isEscKey)(e) && modal.isTopModal()) {
            onEscapeKeyDown == null || onEscapeKeyDown(e);
            if (!e.defaultPrevented) onHide();
        }
    });
    const removeFocusListenerRef = (0, _react.useRef)();
    const removeKeydownListenerRef = (0, _react.useRef)();
    const handleHidden = (...args)=>{
        setExited(true);
        onExited == null || onExited(...args);
    };
    if (!container) return null;
    const dialogProps = Object.assign({
        role,
        ref: modal.setDialogRef,
        // apparently only works on the dialog role element
        "aria-modal": role === "dialog" ? true : undefined
    }, rest, {
        style,
        className,
        tabIndex: -1
    });
    let dialog = renderDialog ? renderDialog(dialogProps) : /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", Object.assign({}, dialogProps, {
        children: /*#__PURE__*/ _react.cloneElement(children, {
            role: "document"
        })
    }));
    dialog = (0, _imperativeTransition.renderTransition)(transition, runTransition, {
        unmountOnExit: true,
        mountOnEnter: true,
        appear: true,
        in: !!show,
        onExit,
        onExiting,
        onExited: handleHidden,
        onEnter,
        onEntering,
        onEntered,
        children: dialog
    });
    let backdropElement = null;
    if (backdrop) {
        backdropElement = renderBackdrop({
            ref: modal.setBackdropRef,
            onClick: handleBackdropClick
        });
        backdropElement = (0, _imperativeTransition.renderTransition)(backdropTransition, runBackdropTransition, {
            in: !!show,
            appear: true,
            mountOnEnter: true,
            unmountOnExit: true,
            children: backdropElement
        });
    }
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _jsxRuntime.Fragment), {
        children: /*#__PURE__*/ (0, _reactDomDefault.default).createPortal(/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
            children: [
                backdropElement,
                dialog
            ]
        }), container)
    });
});
Modal.displayName = "Modal";
exports.default = Object.assign(Modal, {
    Manager: (0, _modalManagerDefault.default)
});

},{"dom-helpers/activeElement":"5ShA6","dom-helpers/contains":"KpRFS","dom-helpers/canUseDOM":"9AwUB","dom-helpers/listen":"1i4e7","react":"21dqq","react-dom":"j6uA9","@restart/hooks/useMounted":"iK6A1","@restart/hooks/useWillUnmount":"2OOXI","@restart/hooks/usePrevious":"gDCGm","@restart/hooks/useEventCallback":"7ONdq","./ModalManager":"5alMm","./useWaitForDOMRef":"83lRQ","./useWindow":"4AsJ2","./ImperativeTransition":"j0Jao","./utils":"2Fmci","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"5ShA6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>activeElement);
var _ownerDocument = require("./ownerDocument");
var _ownerDocumentDefault = parcelHelpers.interopDefault(_ownerDocument);
function activeElement(doc) {
    if (doc === void 0) doc = (0, _ownerDocumentDefault.default)();
    // Support: IE 9 only
    // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
    try {
        var active = doc.activeElement; // IE11 returns a seemingly empty object in some cases when accessing
        // document.activeElement from an <iframe>
        if (!active || !active.nodeName) return null;
        return active;
    } catch (e) {
        /* ie throws if no active element */ return doc.body;
    }
}

},{"./ownerDocument":"2WpOk","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"KpRFS":[function(require,module,exports) {
/* eslint-disable no-bitwise, no-cond-assign */ /**
 * Checks if an element contains another given element.
 * 
 * @param context the context element
 * @param node the element to check
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>contains);
function contains(context, node) {
    // HTML DOM and SVG DOM may have different support levels,
    // so we need to check on context instead of a document root element.
    if (context.contains) return context.contains(node);
    if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"2OOXI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useWillUnmount);
var _useUpdatedRef = require("./useUpdatedRef");
var _useUpdatedRefDefault = parcelHelpers.interopDefault(_useUpdatedRef);
var _react = require("react");
function useWillUnmount(fn) {
    const onUnmount = (0, _useUpdatedRefDefault.default)(fn);
    (0, _react.useEffect)(()=>()=>onUnmount.current(), []);
}

},{"./useUpdatedRef":"cfaLu","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"cfaLu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useUpdatedRef);
var _react = require("react");
function useUpdatedRef(value) {
    const valueRef = (0, _react.useRef)(value);
    valueRef.current = value;
    return valueRef;
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"5alMm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OPEN_DATA_ATTRIBUTE", ()=>OPEN_DATA_ATTRIBUTE);
var _css = require("dom-helpers/css");
var _cssDefault = parcelHelpers.interopDefault(_css);
var _dataKey = require("./DataKey");
var _getScrollbarWidth = require("./getScrollbarWidth");
var _getScrollbarWidthDefault = parcelHelpers.interopDefault(_getScrollbarWidth);
const OPEN_DATA_ATTRIBUTE = (0, _dataKey.dataAttr)("modal-open");
/**
 * Manages a stack of Modals as well as ensuring
 * body scrolling is is disabled and padding accounted for
 */ class ModalManager {
    constructor({ ownerDocument, handleContainerOverflow = true, isRTL = false } = {}){
        this.handleContainerOverflow = handleContainerOverflow;
        this.isRTL = isRTL;
        this.modals = [];
        this.ownerDocument = ownerDocument;
    }
    getScrollbarWidth() {
        return (0, _getScrollbarWidthDefault.default)(this.ownerDocument);
    }
    getElement() {
        return (this.ownerDocument || document).body;
    }
    setModalAttributes(_modal) {
    // For overriding
    }
    removeModalAttributes(_modal) {
    // For overriding
    }
    setContainerStyle(containerState) {
        const style = {
            overflow: "hidden"
        };
        // we are only interested in the actual `style` here
        // because we will override it
        const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
        const container = this.getElement();
        containerState.style = {
            overflow: container.style.overflow,
            [paddingProp]: container.style[paddingProp]
        };
        if (containerState.scrollBarWidth) // use computed style, here to get the real padding
        // to add our scrollbar width
        style[paddingProp] = `${parseInt((0, _cssDefault.default)(container, paddingProp) || "0", 10) + containerState.scrollBarWidth}px`;
        container.setAttribute(OPEN_DATA_ATTRIBUTE, "");
        (0, _cssDefault.default)(container, style);
    }
    reset() {
        [
            ...this.modals
        ].forEach((m)=>this.remove(m));
    }
    removeContainerStyle(containerState) {
        const container = this.getElement();
        container.removeAttribute(OPEN_DATA_ATTRIBUTE);
        Object.assign(container.style, containerState.style);
    }
    add(modal) {
        let modalIdx = this.modals.indexOf(modal);
        if (modalIdx !== -1) return modalIdx;
        modalIdx = this.modals.length;
        this.modals.push(modal);
        this.setModalAttributes(modal);
        if (modalIdx !== 0) return modalIdx;
        this.state = {
            scrollBarWidth: this.getScrollbarWidth(),
            style: {}
        };
        if (this.handleContainerOverflow) this.setContainerStyle(this.state);
        return modalIdx;
    }
    remove(modal) {
        const modalIdx = this.modals.indexOf(modal);
        if (modalIdx === -1) return;
        this.modals.splice(modalIdx, 1);
        // if that was the last modal in a container,
        // clean up the container
        if (!this.modals.length && this.handleContainerOverflow) this.removeContainerStyle(this.state);
        this.removeModalAttributes(modal);
    }
    isTopModal(modal) {
        return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
    }
}
exports.default = ModalManager;

},{"dom-helpers/css":"klmhr","./DataKey":"9vwZh","./getScrollbarWidth":"9IxEN","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"9IxEN":[function(require,module,exports) {
/**
 * Get the width of the vertical window scrollbar if it's visible
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getBodyScrollbarWidth);
function getBodyScrollbarWidth(ownerDocument = document) {
    const window = ownerDocument.defaultView;
    return Math.abs(window.innerWidth - ownerDocument.documentElement.clientWidth);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"83lRQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveContainerRef", ()=>resolveContainerRef);
parcelHelpers.export(exports, "default", ()=>useWaitForDOMRef);
var _ownerDocument = require("dom-helpers/ownerDocument");
var _ownerDocumentDefault = parcelHelpers.interopDefault(_ownerDocument);
var _canUseDOM = require("dom-helpers/canUseDOM");
var _canUseDOMDefault = parcelHelpers.interopDefault(_canUseDOM);
var _react = require("react");
var _useWindow = require("./useWindow");
var _useWindowDefault = parcelHelpers.interopDefault(_useWindow);
const resolveContainerRef = (ref, document)=>{
    if (!(0, _canUseDOMDefault.default)) return null;
    if (ref == null) return (document || (0, _ownerDocumentDefault.default)()).body;
    if (typeof ref === "function") ref = ref();
    if (ref && "current" in ref) ref = ref.current;
    if (ref && ("nodeType" in ref || ref.getBoundingClientRect)) return ref;
    return null;
};
function useWaitForDOMRef(ref, onResolved) {
    const window = (0, _useWindowDefault.default)();
    const [resolvedRef, setRef] = (0, _react.useState)(()=>resolveContainerRef(ref, window == null ? void 0 : window.document));
    if (!resolvedRef) {
        const earlyRef = resolveContainerRef(ref);
        if (earlyRef) setRef(earlyRef);
    }
    (0, _react.useEffect)(()=>{
        if (onResolved && resolvedRef) onResolved(resolvedRef);
    }, [
        onResolved,
        resolvedRef
    ]);
    (0, _react.useEffect)(()=>{
        const nextRef = resolveContainerRef(ref);
        if (nextRef !== resolvedRef) setRef(nextRef);
    }, [
        ref,
        resolvedRef
    ]);
    return resolvedRef;
}

},{"dom-helpers/ownerDocument":"2WpOk","dom-helpers/canUseDOM":"9AwUB","react":"21dqq","./useWindow":"4AsJ2","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"4AsJ2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WindowProvider", ()=>WindowProvider);
parcelHelpers.export(exports, "default", ()=>useWindow);
var _react = require("react");
var _canUseDOM = require("dom-helpers/canUseDOM");
var _canUseDOMDefault = parcelHelpers.interopDefault(_canUseDOM);
const Context = /*#__PURE__*/ (0, _react.createContext)((0, _canUseDOMDefault.default) ? window : undefined);
const WindowProvider = Context.Provider;
function useWindow() {
    return (0, _react.useContext)(Context);
}

},{"react":"21dqq","dom-helpers/canUseDOM":"9AwUB","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"j0Jao":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useTransition", ()=>useTransition);
parcelHelpers.export(exports, "default", ()=>ImperativeTransition);
parcelHelpers.export(exports, "renderTransition", ()=>renderTransition);
var _useMergedRefs = require("@restart/hooks/useMergedRefs");
var _useMergedRefsDefault = parcelHelpers.interopDefault(_useMergedRefs);
var _useEventCallback = require("@restart/hooks/useEventCallback");
var _useEventCallbackDefault = parcelHelpers.interopDefault(_useEventCallback);
var _useIsomorphicEffect = require("@restart/hooks/useIsomorphicEffect");
var _useIsomorphicEffectDefault = parcelHelpers.interopDefault(_useIsomorphicEffect);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _noopTransition = require("./NoopTransition");
var _noopTransitionDefault = parcelHelpers.interopDefault(_noopTransition);
var _rtgtransition = require("./RTGTransition");
var _rtgtransitionDefault = parcelHelpers.interopDefault(_rtgtransition);
var _jsxRuntime = require("react/jsx-runtime");
function useTransition({ in: inProp, onTransition }) {
    const ref = (0, _react.useRef)(null);
    const isInitialRef = (0, _react.useRef)(true);
    const handleTransition = (0, _useEventCallbackDefault.default)(onTransition);
    (0, _useIsomorphicEffectDefault.default)(()=>{
        if (!ref.current) return undefined;
        let stale = false;
        handleTransition({
            in: inProp,
            element: ref.current,
            initial: isInitialRef.current,
            isStale: ()=>stale
        });
        return ()=>{
            stale = true;
        };
    }, [
        inProp,
        handleTransition
    ]);
    (0, _useIsomorphicEffectDefault.default)(()=>{
        isInitialRef.current = false;
        // this is for strict mode
        return ()=>{
            isInitialRef.current = true;
        };
    }, []);
    return ref;
}
function ImperativeTransition({ children, in: inProp, onExited, onEntered, transition }) {
    const [exited, setExited] = (0, _react.useState)(!inProp);
    // TODO: I think this needs to be in an effect
    if (inProp && exited) setExited(false);
    const ref = useTransition({
        in: !!inProp,
        onTransition: (options)=>{
            const onFinish = ()=>{
                if (options.isStale()) return;
                if (options.in) onEntered == null || onEntered(options.element, options.initial);
                else {
                    setExited(true);
                    onExited == null || onExited(options.element);
                }
            };
            Promise.resolve(transition(options)).then(onFinish, (error)=>{
                if (!options.in) setExited(true);
                throw error;
            });
        }
    });
    const combinedRef = (0, _useMergedRefsDefault.default)(ref, children.ref);
    return exited && !inProp ? null : /*#__PURE__*/ (0, _react.cloneElement)(children, {
        ref: combinedRef
    });
}
function renderTransition(component, runTransition, props) {
    if (component) return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _rtgtransitionDefault.default), Object.assign({}, props, {
        component: component
    }));
    if (runTransition) return /*#__PURE__*/ (0, _jsxRuntime.jsx)(ImperativeTransition, Object.assign({}, props, {
        transition: runTransition
    }));
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _noopTransitionDefault.default), Object.assign({}, props));
}

},{"@restart/hooks/useMergedRefs":"6hhuo","@restart/hooks/useEventCallback":"7ONdq","@restart/hooks/useIsomorphicEffect":"e8blq","react":"21dqq","./NoopTransition":"cwnaj","./RTGTransition":"IPK9l","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"cwnaj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _useEventCallback = require("@restart/hooks/useEventCallback");
var _useEventCallbackDefault = parcelHelpers.interopDefault(_useEventCallback);
var _useMergedRefs = require("@restart/hooks/useMergedRefs");
var _useMergedRefsDefault = parcelHelpers.interopDefault(_useMergedRefs);
var _react = require("react");
function NoopTransition({ children, in: inProp, onExited, mountOnEnter, unmountOnExit }) {
    const ref = (0, _react.useRef)(null);
    const hasEnteredRef = (0, _react.useRef)(inProp);
    const handleExited = (0, _useEventCallbackDefault.default)(onExited);
    (0, _react.useEffect)(()=>{
        if (inProp) hasEnteredRef.current = true;
        else handleExited(ref.current);
    }, [
        inProp,
        handleExited
    ]);
    const combinedRef = (0, _useMergedRefsDefault.default)(ref, children.ref);
    const child = /*#__PURE__*/ (0, _react.cloneElement)(children, {
        ref: combinedRef
    });
    if (inProp) return child;
    if (unmountOnExit) return null;
    if (!hasEnteredRef.current && mountOnEnter) return null;
    return child;
}
exports.default = NoopTransition;

},{"@restart/hooks/useEventCallback":"7ONdq","@restart/hooks/useMergedRefs":"6hhuo","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"IPK9l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _useRTGTransitionProps = require("./useRTGTransitionProps");
var _useRTGTransitionPropsDefault = parcelHelpers.interopDefault(_useRTGTransitionProps);
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = [
    "component"
];
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
// Normalizes Transition callbacks when nodeRef is used.
const RTGTransition = /*#__PURE__*/ _react.forwardRef((_ref, ref)=>{
    let { component: Component } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
    const transitionProps = (0, _useRTGTransitionPropsDefault.default)(props);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, Object.assign({
        ref: ref
    }, transitionProps));
});
exports.default = RTGTransition;

},{"react":"21dqq","./useRTGTransitionProps":"gtjjK","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"gtjjK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useRTGTransitionProps);
var _react = require("react");
var _useMergedRefs = require("@restart/hooks/useMergedRefs");
var _useMergedRefsDefault = parcelHelpers.interopDefault(_useMergedRefs);
const _excluded = [
    "onEnter",
    "onEntering",
    "onEntered",
    "onExit",
    "onExiting",
    "onExited",
    "addEndListener",
    "children"
];
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function useRTGTransitionProps(_ref) {
    let { onEnter, onEntering, onEntered, onExit, onExiting, onExited, addEndListener, children } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
    const nodeRef = (0, _react.useRef)(null);
    const mergedRef = (0, _useMergedRefsDefault.default)(nodeRef, typeof children === "function" ? null : children.ref);
    const normalize = (callback)=>(param)=>{
            if (callback && nodeRef.current) callback(nodeRef.current, param);
        };
    /* eslint-disable react-hooks/exhaustive-deps */ const handleEnter = (0, _react.useCallback)(normalize(onEnter), [
        onEnter
    ]);
    const handleEntering = (0, _react.useCallback)(normalize(onEntering), [
        onEntering
    ]);
    const handleEntered = (0, _react.useCallback)(normalize(onEntered), [
        onEntered
    ]);
    const handleExit = (0, _react.useCallback)(normalize(onExit), [
        onExit
    ]);
    const handleExiting = (0, _react.useCallback)(normalize(onExiting), [
        onExiting
    ]);
    const handleExited = (0, _react.useCallback)(normalize(onExited), [
        onExited
    ]);
    const handleAddEndListener = (0, _react.useCallback)(normalize(addEndListener), [
        addEndListener
    ]);
    /* eslint-enable react-hooks/exhaustive-deps */ return Object.assign({}, props, {
        nodeRef
    }, onEnter && {
        onEnter: handleEnter
    }, onEntering && {
        onEntering: handleEntering
    }, onEntered && {
        onEntered: handleEntered
    }, onExit && {
        onExit: handleExit
    }, onExiting && {
        onExiting: handleExiting
    }, onExited && {
        onExited: handleExited
    }, addEndListener && {
        addEndListener: handleAddEndListener
    }, {
        children: typeof children === "function" ? (status, innerProps)=>// TODO: Types for RTG missing innerProps, so need to cast.
            children(status, Object.assign({}, innerProps, {
                ref: mergedRef
            })) : /*#__PURE__*/ (0, _react.cloneElement)(children, {
            ref: mergedRef
        })
    });
}

},{"react":"21dqq","@restart/hooks/useMergedRefs":"6hhuo","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"2Fmci":[function(require,module,exports) {
/* eslint-disable import/prefer-default-export */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isEscKey", ()=>isEscKey);
function isEscKey(e) {
    return e.code === "Escape" || e.keyCode === 27;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"fX7Bo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const OffcanvasBody = /*#__PURE__*/ _react.forwardRef(({ className, bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "offcanvas-body");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ref: ref,
        className: (0, _classnamesDefault.default)(className, bsPrefix),
        ...props
    });
});
OffcanvasBody.displayName = "OffcanvasBody";
exports.default = OffcanvasBody;

},{"react":"21dqq","classnames":"jocGM","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"eGvzt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _transition = require("react-transition-group/Transition");
var _transitionEndListener = require("./transitionEndListener");
var _transitionEndListenerDefault = parcelHelpers.interopDefault(_transitionEndListener);
var _transitionWrapper = require("./TransitionWrapper");
var _transitionWrapperDefault = parcelHelpers.interopDefault(_transitionWrapper);
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const transitionStyles = {
    [(0, _transition.ENTERING)]: "show",
    [(0, _transition.ENTERED)]: "show"
};
const OffcanvasToggling = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, className, children, in: inProp = false, mountOnEnter = false, unmountOnExit = false, appear = false, ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "offcanvas");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _transitionWrapperDefault.default), {
        ref: ref,
        addEndListener: (0, _transitionEndListenerDefault.default),
        in: inProp,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        appear: appear,
        ...props,
        childRef: children.ref,
        children: (status, innerProps)=>/*#__PURE__*/ _react.cloneElement(children, {
                ...innerProps,
                className: (0, _classnamesDefault.default)(className, children.props.className, (status === (0, _transition.ENTERING) || status === (0, _transition.EXITING)) && `${bsPrefix}-toggling`, transitionStyles[status])
            })
    });
});
OffcanvasToggling.displayName = "OffcanvasToggling";
exports.default = OffcanvasToggling;

},{"classnames":"jocGM","react":"21dqq","react-transition-group/Transition":"cKsrS","./transitionEndListener":"68oh7","./TransitionWrapper":"jKUqZ","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"2U4Zk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
"use client";
const ModalContext = /*#__PURE__*/ _react.createContext({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onHide () {}
});
exports.default = ModalContext;

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"a6xAh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _themeProvider = require("./ThemeProvider");
var _abstractModalHeader = require("./AbstractModalHeader");
var _abstractModalHeaderDefault = parcelHelpers.interopDefault(_abstractModalHeader);
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const OffcanvasHeader = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, className, closeLabel = "Close", closeButton = false, ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "offcanvas-header");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _abstractModalHeaderDefault.default), {
        ref: ref,
        ...props,
        className: (0, _classnamesDefault.default)(className, bsPrefix),
        closeLabel: closeLabel,
        closeButton: closeButton
    });
});
OffcanvasHeader.displayName = "OffcanvasHeader";
exports.default = OffcanvasHeader;

},{"classnames":"jocGM","react":"21dqq","./ThemeProvider":"dVixI","./AbstractModalHeader":"hPF8S","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"hPF8S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _useEventCallback = require("@restart/hooks/useEventCallback");
var _useEventCallbackDefault = parcelHelpers.interopDefault(_useEventCallback);
var _closeButton = require("./CloseButton");
var _closeButtonDefault = parcelHelpers.interopDefault(_closeButton);
var _modalContext = require("./ModalContext");
var _modalContextDefault = parcelHelpers.interopDefault(_modalContext);
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const AbstractModalHeader = /*#__PURE__*/ _react.forwardRef(({ closeLabel = "Close", closeVariant, closeButton = false, onHide, children, ...props }, ref)=>{
    const context = (0, _react.useContext)((0, _modalContextDefault.default));
    const handleClick = (0, _useEventCallbackDefault.default)(()=>{
        context == null || context.onHide();
        onHide == null || onHide();
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        ref: ref,
        ...props,
        children: [
            children,
            closeButton && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _closeButtonDefault.default), {
                "aria-label": closeLabel,
                variant: closeVariant,
                onClick: handleClick
            })
        ]
    });
});
exports.default = AbstractModalHeader;

},{"react":"21dqq","@restart/hooks/useEventCallback":"7ONdq","./CloseButton":"1wmVl","./ModalContext":"2U4Zk","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"77qdX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _divWithClassName = require("./divWithClassName");
var _divWithClassNameDefault = parcelHelpers.interopDefault(_divWithClassName);
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const DivStyledAsH5 = (0, _divWithClassNameDefault.default)("h5");
const OffcanvasTitle = /*#__PURE__*/ _react.forwardRef(({ className, bsPrefix, as: Component = DivStyledAsH5, ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "offcanvas-title");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ref: ref,
        className: (0, _classnamesDefault.default)(className, bsPrefix),
        ...props
    });
});
OffcanvasTitle.displayName = "OffcanvasTitle";
exports.default = OffcanvasTitle;

},{"react":"21dqq","classnames":"jocGM","./divWithClassName":"eDg7t","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"lr1Yp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSharedManager", ()=>getSharedManager);
var _addClass = require("dom-helpers/addClass");
var _addClassDefault = parcelHelpers.interopDefault(_addClass);
var _css = require("dom-helpers/css");
var _cssDefault = parcelHelpers.interopDefault(_css);
var _querySelectorAll = require("dom-helpers/querySelectorAll");
var _querySelectorAllDefault = parcelHelpers.interopDefault(_querySelectorAll);
var _removeClass = require("dom-helpers/removeClass");
var _removeClassDefault = parcelHelpers.interopDefault(_removeClass);
var _modalManager = require("@restart/ui/ModalManager");
var _modalManagerDefault = parcelHelpers.interopDefault(_modalManager);
const Selector = {
    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    STICKY_CONTENT: ".sticky-top",
    NAVBAR_TOGGLER: ".navbar-toggler"
};
class BootstrapModalManager extends (0, _modalManagerDefault.default) {
    adjustAndStore(prop, element, adjust) {
        const actual = element.style[prop];
        // TODO: DOMStringMap and CSSStyleDeclaration aren't strictly compatible
        // @ts-ignore
        element.dataset[prop] = actual;
        (0, _cssDefault.default)(element, {
            [prop]: `${parseFloat((0, _cssDefault.default)(element, prop)) + adjust}px`
        });
    }
    restore(prop, element) {
        const value = element.dataset[prop];
        if (value !== undefined) {
            delete element.dataset[prop];
            (0, _cssDefault.default)(element, {
                [prop]: value
            });
        }
    }
    setContainerStyle(containerState) {
        super.setContainerStyle(containerState);
        const container = this.getElement();
        (0, _addClassDefault.default)(container, "modal-open");
        if (!containerState.scrollBarWidth) return;
        const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
        const marginProp = this.isRTL ? "marginLeft" : "marginRight";
        (0, _querySelectorAllDefault.default)(container, Selector.FIXED_CONTENT).forEach((el)=>this.adjustAndStore(paddingProp, el, containerState.scrollBarWidth));
        (0, _querySelectorAllDefault.default)(container, Selector.STICKY_CONTENT).forEach((el)=>this.adjustAndStore(marginProp, el, -containerState.scrollBarWidth));
        (0, _querySelectorAllDefault.default)(container, Selector.NAVBAR_TOGGLER).forEach((el)=>this.adjustAndStore(marginProp, el, containerState.scrollBarWidth));
    }
    removeContainerStyle(containerState) {
        super.removeContainerStyle(containerState);
        const container = this.getElement();
        (0, _removeClassDefault.default)(container, "modal-open");
        const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
        const marginProp = this.isRTL ? "marginLeft" : "marginRight";
        (0, _querySelectorAllDefault.default)(container, Selector.FIXED_CONTENT).forEach((el)=>this.restore(paddingProp, el));
        (0, _querySelectorAllDefault.default)(container, Selector.STICKY_CONTENT).forEach((el)=>this.restore(marginProp, el));
        (0, _querySelectorAllDefault.default)(container, Selector.NAVBAR_TOGGLER).forEach((el)=>this.restore(marginProp, el));
    }
}
let sharedManager;
function getSharedManager(options) {
    if (!sharedManager) sharedManager = new BootstrapModalManager(options);
    return sharedManager;
}
exports.default = BootstrapModalManager;

},{"dom-helpers/addClass":"7dIIz","dom-helpers/css":"klmhr","dom-helpers/querySelectorAll":"g5Sx6","dom-helpers/removeClass":"66hgg","@restart/ui/ModalManager":"5alMm","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"7dIIz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addClass);
var _hasClass = require("./hasClass");
var _hasClassDefault = parcelHelpers.interopDefault(_hasClass);
function addClass(element, className) {
    if (element.classList) element.classList.add(className);
    else if (!(0, _hasClassDefault.default)(element, className)) {
        if (typeof element.className === "string") element.className = element.className + " " + className;
        else element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
    }
}

},{"./hasClass":"6sJz4","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"6sJz4":[function(require,module,exports) {
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>hasClass);
function hasClass(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);
    return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"66hgg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>removeClass);
function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass(element, className) {
    if (element.classList) element.classList.remove(className);
    else if (typeof element.className === "string") element.className = replaceClassName(element.className, className);
    else element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"76xFa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const NavbarText = /*#__PURE__*/ _react.forwardRef(({ className, bsPrefix, as: Component = "span", ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "navbar-text");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ref: ref,
        className: (0, _classnamesDefault.default)(className, bsPrefix),
        ...props
    });
});
NavbarText.displayName = "NavbarText";
exports.default = NavbarText;

},{"react":"21dqq","classnames":"jocGM","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"cMC39":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const Row = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, className, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", ...props }, ref)=>{
    const decoratedBsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "row");
    const breakpoints = (0, _themeProvider.useBootstrapBreakpoints)();
    const minBreakpoint = (0, _themeProvider.useBootstrapMinBreakpoint)();
    const sizePrefix = `${decoratedBsPrefix}-cols`;
    const classes = [];
    breakpoints.forEach((brkPoint)=>{
        const propValue = props[brkPoint];
        delete props[brkPoint];
        let cols;
        if (propValue != null && typeof propValue === "object") ({ cols } = propValue);
        else cols = propValue;
        const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
        if (cols != null) classes.push(`${sizePrefix}${infix}-${cols}`);
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ref: ref,
        ...props,
        className: (0, _classnamesDefault.default)(className, decoratedBsPrefix, ...classes)
    });
});
Row.displayName = "Row";
exports.default = Row;

},{"classnames":"jocGM","react":"21dqq","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"9xmpe":[function(require,module,exports) {
/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AbortedDeferredError", ()=>(0, _reactRouter.AbortedDeferredError));
parcelHelpers.export(exports, "Await", ()=>(0, _reactRouter.Await));
parcelHelpers.export(exports, "MemoryRouter", ()=>(0, _reactRouter.MemoryRouter));
parcelHelpers.export(exports, "Navigate", ()=>(0, _reactRouter.Navigate));
parcelHelpers.export(exports, "NavigationType", ()=>(0, _reactRouter.NavigationType));
parcelHelpers.export(exports, "Outlet", ()=>(0, _reactRouter.Outlet));
parcelHelpers.export(exports, "Route", ()=>(0, _reactRouter.Route));
parcelHelpers.export(exports, "Router", ()=>(0, _reactRouter.Router));
parcelHelpers.export(exports, "Routes", ()=>(0, _reactRouter.Routes));
parcelHelpers.export(exports, "UNSAFE_DataRouterContext", ()=>(0, _reactRouter.UNSAFE_DataRouterContext));
parcelHelpers.export(exports, "UNSAFE_DataRouterStateContext", ()=>(0, _reactRouter.UNSAFE_DataRouterStateContext));
parcelHelpers.export(exports, "UNSAFE_LocationContext", ()=>(0, _reactRouter.UNSAFE_LocationContext));
parcelHelpers.export(exports, "UNSAFE_NavigationContext", ()=>(0, _reactRouter.UNSAFE_NavigationContext));
parcelHelpers.export(exports, "UNSAFE_RouteContext", ()=>(0, _reactRouter.UNSAFE_RouteContext));
parcelHelpers.export(exports, "UNSAFE_useRouteId", ()=>(0, _reactRouter.UNSAFE_useRouteId));
parcelHelpers.export(exports, "createMemoryRouter", ()=>(0, _reactRouter.createMemoryRouter));
parcelHelpers.export(exports, "createPath", ()=>(0, _reactRouter.createPath));
parcelHelpers.export(exports, "createRoutesFromChildren", ()=>(0, _reactRouter.createRoutesFromChildren));
parcelHelpers.export(exports, "createRoutesFromElements", ()=>(0, _reactRouter.createRoutesFromElements));
parcelHelpers.export(exports, "defer", ()=>(0, _reactRouter.defer));
parcelHelpers.export(exports, "generatePath", ()=>(0, _reactRouter.generatePath));
parcelHelpers.export(exports, "isRouteErrorResponse", ()=>(0, _reactRouter.isRouteErrorResponse));
parcelHelpers.export(exports, "json", ()=>(0, _reactRouter.json));
parcelHelpers.export(exports, "matchPath", ()=>(0, _reactRouter.matchPath));
parcelHelpers.export(exports, "matchRoutes", ()=>(0, _reactRouter.matchRoutes));
parcelHelpers.export(exports, "parsePath", ()=>(0, _reactRouter.parsePath));
parcelHelpers.export(exports, "redirect", ()=>(0, _reactRouter.redirect));
parcelHelpers.export(exports, "redirectDocument", ()=>(0, _reactRouter.redirectDocument));
parcelHelpers.export(exports, "renderMatches", ()=>(0, _reactRouter.renderMatches));
parcelHelpers.export(exports, "resolvePath", ()=>(0, _reactRouter.resolvePath));
parcelHelpers.export(exports, "useActionData", ()=>(0, _reactRouter.useActionData));
parcelHelpers.export(exports, "useAsyncError", ()=>(0, _reactRouter.useAsyncError));
parcelHelpers.export(exports, "useAsyncValue", ()=>(0, _reactRouter.useAsyncValue));
parcelHelpers.export(exports, "useBlocker", ()=>(0, _reactRouter.useBlocker));
parcelHelpers.export(exports, "useHref", ()=>(0, _reactRouter.useHref));
parcelHelpers.export(exports, "useInRouterContext", ()=>(0, _reactRouter.useInRouterContext));
parcelHelpers.export(exports, "useLoaderData", ()=>(0, _reactRouter.useLoaderData));
parcelHelpers.export(exports, "useLocation", ()=>(0, _reactRouter.useLocation));
parcelHelpers.export(exports, "useMatch", ()=>(0, _reactRouter.useMatch));
parcelHelpers.export(exports, "useMatches", ()=>(0, _reactRouter.useMatches));
parcelHelpers.export(exports, "useNavigate", ()=>(0, _reactRouter.useNavigate));
parcelHelpers.export(exports, "useNavigation", ()=>(0, _reactRouter.useNavigation));
parcelHelpers.export(exports, "useNavigationType", ()=>(0, _reactRouter.useNavigationType));
parcelHelpers.export(exports, "useOutlet", ()=>(0, _reactRouter.useOutlet));
parcelHelpers.export(exports, "useOutletContext", ()=>(0, _reactRouter.useOutletContext));
parcelHelpers.export(exports, "useParams", ()=>(0, _reactRouter.useParams));
parcelHelpers.export(exports, "useResolvedPath", ()=>(0, _reactRouter.useResolvedPath));
parcelHelpers.export(exports, "useRevalidator", ()=>(0, _reactRouter.useRevalidator));
parcelHelpers.export(exports, "useRouteError", ()=>(0, _reactRouter.useRouteError));
parcelHelpers.export(exports, "useRouteLoaderData", ()=>(0, _reactRouter.useRouteLoaderData));
parcelHelpers.export(exports, "useRoutes", ()=>(0, _reactRouter.useRoutes));
parcelHelpers.export(exports, "UNSAFE_ErrorResponseImpl", ()=>(0, _router.UNSAFE_ErrorResponseImpl));
//#endregion
parcelHelpers.export(exports, "BrowserRouter", ()=>BrowserRouter);
parcelHelpers.export(exports, "Form", ()=>Form);
parcelHelpers.export(exports, "HashRouter", ()=>HashRouter);
parcelHelpers.export(exports, "Link", ()=>Link);
parcelHelpers.export(exports, "NavLink", ()=>NavLink);
parcelHelpers.export(exports, "RouterProvider", ()=>RouterProvider);
parcelHelpers.export(exports, "ScrollRestoration", ()=>ScrollRestoration);
parcelHelpers.export(exports, "UNSAFE_FetchersContext", ()=>FetchersContext);
parcelHelpers.export(exports, "UNSAFE_ViewTransitionContext", ()=>ViewTransitionContext);
parcelHelpers.export(exports, "UNSAFE_useScrollRestoration", ()=>useScrollRestoration);
parcelHelpers.export(exports, "createBrowserRouter", ()=>createBrowserRouter);
parcelHelpers.export(exports, "createHashRouter", ()=>createHashRouter);
parcelHelpers.export(exports, "createSearchParams", ()=>createSearchParams);
parcelHelpers.export(exports, "unstable_HistoryRouter", ()=>HistoryRouter);
parcelHelpers.export(exports, "unstable_usePrompt", ()=>usePrompt);
parcelHelpers.export(exports, "unstable_useViewTransitionState", ()=>useViewTransitionState);
parcelHelpers.export(exports, "useBeforeUnload", ()=>useBeforeUnload);
parcelHelpers.export(exports, "useFetcher", ()=>useFetcher);
parcelHelpers.export(exports, "useFetchers", ()=>useFetchers);
parcelHelpers.export(exports, "useFormAction", ()=>useFormAction);
parcelHelpers.export(exports, "useLinkClickHandler", ()=>useLinkClickHandler);
parcelHelpers.export(exports, "useSearchParams", ()=>useSearchParams);
parcelHelpers.export(exports, "useSubmit", ()=>useSubmit);
var _react = require("react");
var _reactDom = require("react-dom");
var _reactRouter = require("react-router");
var _router = require("@remix-run/router");
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
const defaultMethod = "get";
const defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
    return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
    return event.button === 0 && // Ignore everything but left clicks
    (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // Ignore clicks with modifier keys
    ;
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */ function createSearchParams(init) {
    if (init === void 0) init = "";
    return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key)=>{
        let value = init[key];
        return memo.concat(Array.isArray(value) ? value.map((v)=>[
                key,
                v
            ]) : [
            [
                key,
                value
            ]
        ]);
    }, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
    let searchParams = createSearchParams(locationSearch);
    if (defaultSearchParams) // Use `defaultSearchParams.forEach(...)` here instead of iterating of
    // `defaultSearchParams.keys()` to work-around a bug in Firefox related to
    // web extensions. Relevant Bugzilla tickets:
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1414602
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1023984
    defaultSearchParams.forEach((_, key)=>{
        if (!searchParams.has(key)) defaultSearchParams.getAll(key).forEach((value)=>{
            searchParams.append(key, value);
        });
    });
    return searchParams;
}
// One-time check for submitter support
let _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
    if (_formDataSupportsSubmitter === null) try {
        new FormData(document.createElement("form"), // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0);
        _formDataSupportsSubmitter = false;
    } catch (e) {
        _formDataSupportsSubmitter = true;
    }
    return _formDataSupportsSubmitter;
}
const supportedFormEncTypes = new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
]);
function getFormEncType(encType) {
    if (encType != null && !supportedFormEncTypes.has(encType)) {
        (0, _router.UNSAFE_warning)(false, '"' + encType + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + defaultEncType + '"'));
        return null;
    }
    return encType;
}
function getFormSubmissionInfo(target, basename) {
    let method;
    let action;
    let encType;
    let formData;
    let body;
    if (isFormElement(target)) {
        // When grabbing the action from the element, it will have had the basename
        // prefixed to ensure non-JS scenarios work, so strip it since we'll
        // re-prefix in the router
        let attr = target.getAttribute("action");
        action = attr ? (0, _router.stripBasename)(attr, basename) : null;
        method = target.getAttribute("method") || defaultMethod;
        encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
        formData = new FormData(target);
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
        let form = target.form;
        if (form == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        // <button>/<input type="submit"> may override attributes of <form>
        // When grabbing the action from the element, it will have had the basename
        // prefixed to ensure non-JS scenarios work, so strip it since we'll
        // re-prefix in the router
        let attr = target.getAttribute("formaction") || form.getAttribute("action");
        action = attr ? (0, _router.stripBasename)(attr, basename) : null;
        method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
        encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
        // Build a FormData object populated from a form and submitter
        formData = new FormData(form, target);
        // If this browser doesn't support the `FormData(el, submitter)` format,
        // then tack on the submitter value at the end.  This is a lightweight
        // solution that is not 100% spec compliant.  For complete support in older
        // browsers, consider using the `formdata-submitter-polyfill` package
        if (!isFormDataSubmitterSupported()) {
            let { name, type, value } = target;
            if (type === "image") {
                let prefix = name ? name + "." : "";
                formData.append(prefix + "x", "0");
                formData.append(prefix + "y", "0");
            } else if (name) formData.append(name, value);
        }
    } else if (isHtmlElement(target)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    else {
        method = defaultMethod;
        action = null;
        encType = defaultEncType;
        body = target;
    }
    // Send body for <Form encType="text/plain" so we encode it into text
    if (formData && encType === "text/plain") {
        body = formData;
        formData = undefined;
    }
    return {
        action,
        method: method.toLowerCase(),
        encType,
        formData,
        body
    };
}
const _excluded = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition"
], _excluded2 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children"
], _excluded3 = [
    "fetcherKey",
    "navigate",
    "reloadDocument",
    "replace",
    "state",
    "method",
    "action",
    "onSubmit",
    "relative",
    "preventScrollReset",
    "unstable_viewTransition"
];
// HEY YOU! DON'T TOUCH THIS VARIABLE!
//
// It is replaced with the proper version at build time via a babel plugin in
// the rollup config.
//
// Export a global property onto the window for React Router detection by the
// Core Web Vitals Technology Report.  This way they can configure the `wappalyzer`
// to detect and properly classify live websites as being built with React Router:
// https://github.com/HTTPArchive/wappalyzer/blob/main/src/technologies/r.json
const REACT_ROUTER_VERSION = "6";
try {
    window.__reactRouterVersion = REACT_ROUTER_VERSION;
} catch (e) {
// no-op
}
function createBrowserRouter(routes, opts) {
    return (0, _router.createRouter)({
        basename: opts == null ? void 0 : opts.basename,
        future: _extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0, _router.createBrowserHistory)({
            window: opts == null ? void 0 : opts.window
        }),
        hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
        routes,
        mapRouteProperties: (0, _reactRouter.UNSAFE_mapRouteProperties),
        unstable_dataStrategy: opts == null ? void 0 : opts.unstable_dataStrategy,
        window: opts == null ? void 0 : opts.window
    }).initialize();
}
function createHashRouter(routes, opts) {
    return (0, _router.createRouter)({
        basename: opts == null ? void 0 : opts.basename,
        future: _extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0, _router.createHashHistory)({
            window: opts == null ? void 0 : opts.window
        }),
        hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
        routes,
        mapRouteProperties: (0, _reactRouter.UNSAFE_mapRouteProperties),
        unstable_dataStrategy: opts == null ? void 0 : opts.unstable_dataStrategy,
        window: opts == null ? void 0 : opts.window
    }).initialize();
}
function parseHydrationData() {
    var _window;
    let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;
    if (state && state.errors) state = _extends({}, state, {
        errors: deserializeErrors(state.errors)
    });
    return state;
}
function deserializeErrors(errors) {
    if (!errors) return null;
    let entries = Object.entries(errors);
    let serialized = {};
    for (let [key, val] of entries){
        // Hey you!  If you change this, please change the corresponding logic in
        // serializeErrors in react-router-dom/server.tsx :)
        if (val && val.__type === "RouteErrorResponse") serialized[key] = new (0, _router.UNSAFE_ErrorResponseImpl)(val.status, val.statusText, val.data, val.internal === true);
        else if (val && val.__type === "Error") {
            // Attempt to reconstruct the right type of Error (i.e., ReferenceError)
            if (val.__subType) {
                let ErrorConstructor = window[val.__subType];
                if (typeof ErrorConstructor === "function") try {
                    // @ts-expect-error
                    let error = new ErrorConstructor(val.message);
                    // Wipe away the client-side stack trace.  Nothing to fill it in with
                    // because we don't serialize SSR stack traces for security reasons
                    error.stack = "";
                    serialized[key] = error;
                } catch (e) {
                // no-op - fall through and create a normal Error
                }
            }
            if (serialized[key] == null) {
                let error = new Error(val.message);
                // Wipe away the client-side stack trace.  Nothing to fill it in with
                // because we don't serialize SSR stack traces for security reasons
                error.stack = "";
                serialized[key] = error;
            }
        } else serialized[key] = val;
    }
    return serialized;
}
const ViewTransitionContext = /*#__PURE__*/ _react.createContext({
    isTransitioning: false
});
ViewTransitionContext.displayName = "ViewTransition";
const FetchersContext = /*#__PURE__*/ _react.createContext(new Map());
FetchersContext.displayName = "Fetchers";
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Components
////////////////////////////////////////////////////////////////////////////////
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/ const START_TRANSITION = "startTransition";
const startTransitionImpl = _react[START_TRANSITION];
const FLUSH_SYNC = "flushSync";
const flushSyncImpl = _reactDom[FLUSH_SYNC];
const USE_ID = "useId";
const useIdImpl = _react[USE_ID];
function startTransitionSafe(cb) {
    if (startTransitionImpl) startTransitionImpl(cb);
    else cb();
}
function flushSyncSafe(cb) {
    if (flushSyncImpl) flushSyncImpl(cb);
    else cb();
}
class Deferred {
    constructor(){
        this.status = "pending";
        this.promise = new Promise((resolve, reject)=>{
            this.resolve = (value)=>{
                if (this.status === "pending") {
                    this.status = "resolved";
                    resolve(value);
                }
            };
            this.reject = (reason)=>{
                if (this.status === "pending") {
                    this.status = "rejected";
                    reject(reason);
                }
            };
        });
    }
}
/**
 * Given a Remix Router instance, render the appropriate UI
 */ function RouterProvider(_ref) {
    let { fallbackElement, router, future } = _ref;
    let [state, setStateImpl] = _react.useState(router.state);
    let [pendingState, setPendingState] = _react.useState();
    let [vtContext, setVtContext] = _react.useState({
        isTransitioning: false
    });
    let [renderDfd, setRenderDfd] = _react.useState();
    let [transition, setTransition] = _react.useState();
    let [interruption, setInterruption] = _react.useState();
    let fetcherData = _react.useRef(new Map());
    let { v7_startTransition } = future || {};
    let optInStartTransition = _react.useCallback((cb)=>{
        if (v7_startTransition) startTransitionSafe(cb);
        else cb();
    }, [
        v7_startTransition
    ]);
    let setState = _react.useCallback((newState, _ref2)=>{
        let { deletedFetchers, unstable_flushSync: flushSync, unstable_viewTransitionOpts: viewTransitionOpts } = _ref2;
        deletedFetchers.forEach((key)=>fetcherData.current.delete(key));
        newState.fetchers.forEach((fetcher, key)=>{
            if (fetcher.data !== undefined) fetcherData.current.set(key, fetcher.data);
        });
        let isViewTransitionUnavailable = router.window == null || typeof router.window.document.startViewTransition !== "function";
        // If this isn't a view transition or it's not available in this browser,
        // just update and be done with it
        if (!viewTransitionOpts || isViewTransitionUnavailable) {
            if (flushSync) flushSyncSafe(()=>setStateImpl(newState));
            else optInStartTransition(()=>setStateImpl(newState));
            return;
        }
        // flushSync + startViewTransition
        if (flushSync) {
            // Flush through the context to mark DOM elements as transition=ing
            flushSyncSafe(()=>{
                // Cancel any pending transitions
                if (transition) {
                    renderDfd && renderDfd.resolve();
                    transition.skipTransition();
                }
                setVtContext({
                    isTransitioning: true,
                    flushSync: true,
                    currentLocation: viewTransitionOpts.currentLocation,
                    nextLocation: viewTransitionOpts.nextLocation
                });
            });
            // Update the DOM
            let t = router.window.document.startViewTransition(()=>{
                flushSyncSafe(()=>setStateImpl(newState));
            });
            // Clean up after the animation completes
            t.finished.finally(()=>{
                flushSyncSafe(()=>{
                    setRenderDfd(undefined);
                    setTransition(undefined);
                    setPendingState(undefined);
                    setVtContext({
                        isTransitioning: false
                    });
                });
            });
            flushSyncSafe(()=>setTransition(t));
            return;
        }
        // startTransition + startViewTransition
        if (transition) {
            // Interrupting an in-progress transition, cancel and let everything flush
            // out, and then kick off a new transition from the interruption state
            renderDfd && renderDfd.resolve();
            transition.skipTransition();
            setInterruption({
                state: newState,
                currentLocation: viewTransitionOpts.currentLocation,
                nextLocation: viewTransitionOpts.nextLocation
            });
        } else {
            // Completed navigation update with opted-in view transitions, let 'er rip
            setPendingState(newState);
            setVtContext({
                isTransitioning: true,
                flushSync: false,
                currentLocation: viewTransitionOpts.currentLocation,
                nextLocation: viewTransitionOpts.nextLocation
            });
        }
    }, [
        router.window,
        transition,
        renderDfd,
        fetcherData,
        optInStartTransition
    ]);
    // Need to use a layout effect here so we are subscribed early enough to
    // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
    _react.useLayoutEffect(()=>router.subscribe(setState), [
        router,
        setState
    ]);
    // When we start a view transition, create a Deferred we can use for the
    // eventual "completed" render
    _react.useEffect(()=>{
        if (vtContext.isTransitioning && !vtContext.flushSync) setRenderDfd(new Deferred());
    }, [
        vtContext
    ]);
    // Once the deferred is created, kick off startViewTransition() to update the
    // DOM and then wait on the Deferred to resolve (indicating the DOM update has
    // happened)
    _react.useEffect(()=>{
        if (renderDfd && pendingState && router.window) {
            let newState = pendingState;
            let renderPromise = renderDfd.promise;
            let transition = router.window.document.startViewTransition(async ()=>{
                optInStartTransition(()=>setStateImpl(newState));
                await renderPromise;
            });
            transition.finished.finally(()=>{
                setRenderDfd(undefined);
                setTransition(undefined);
                setPendingState(undefined);
                setVtContext({
                    isTransitioning: false
                });
            });
            setTransition(transition);
        }
    }, [
        optInStartTransition,
        pendingState,
        renderDfd,
        router.window
    ]);
    // When the new location finally renders and is committed to the DOM, this
    // effect will run to resolve the transition
    _react.useEffect(()=>{
        if (renderDfd && pendingState && state.location.key === pendingState.location.key) renderDfd.resolve();
    }, [
        renderDfd,
        transition,
        state.location,
        pendingState
    ]);
    // If we get interrupted with a new navigation during a transition, we skip
    // the active transition, let it cleanup, then kick it off again here
    _react.useEffect(()=>{
        if (!vtContext.isTransitioning && interruption) {
            setPendingState(interruption.state);
            setVtContext({
                isTransitioning: true,
                flushSync: false,
                currentLocation: interruption.currentLocation,
                nextLocation: interruption.nextLocation
            });
            setInterruption(undefined);
        }
    }, [
        vtContext.isTransitioning,
        interruption
    ]);
    _react.useEffect(()=>{
        (0, _router.UNSAFE_warning)(fallbackElement == null || !router.future.v7_partialHydration, "`<RouterProvider fallbackElement>` is deprecated when using `v7_partialHydration`, use a `HydrateFallback` component instead");
    // Only log this once on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let navigator = _react.useMemo(()=>{
        return {
            createHref: router.createHref,
            encodeLocation: router.encodeLocation,
            go: (n)=>router.navigate(n),
            push: (to, state, opts)=>router.navigate(to, {
                    state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                }),
            replace: (to, state, opts)=>router.navigate(to, {
                    replace: true,
                    state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                })
        };
    }, [
        router
    ]);
    let basename = router.basename || "/";
    let dataRouterContext = _react.useMemo(()=>({
            router,
            navigator,
            static: false,
            basename
        }), [
        router,
        navigator,
        basename
    ]);
    // The fragment and {null} here are important!  We need them to keep React 18's
    // useId happy when we are server-rendering since we may have a <script> here
    // containing the hydrated server-side staticContext (from StaticRouterProvider).
    // useId relies on the component tree structure to generate deterministic id's
    // so we need to ensure it remains the same on the client even though
    // we don't need the <script> tag
    return /*#__PURE__*/ _react.createElement(_react.Fragment, null, /*#__PURE__*/ _react.createElement((0, _reactRouter.UNSAFE_DataRouterContext).Provider, {
        value: dataRouterContext
    }, /*#__PURE__*/ _react.createElement((0, _reactRouter.UNSAFE_DataRouterStateContext).Provider, {
        value: state
    }, /*#__PURE__*/ _react.createElement(FetchersContext.Provider, {
        value: fetcherData.current
    }, /*#__PURE__*/ _react.createElement(ViewTransitionContext.Provider, {
        value: vtContext
    }, /*#__PURE__*/ _react.createElement((0, _reactRouter.Router), {
        basename: basename,
        location: state.location,
        navigationType: state.historyAction,
        navigator: navigator,
        future: {
            v7_relativeSplatPath: router.future.v7_relativeSplatPath
        }
    }, state.initialized || router.future.v7_partialHydration ? /*#__PURE__*/ _react.createElement(DataRoutes, {
        routes: router.routes,
        future: router.future,
        state: state
    }) : fallbackElement))))), null);
}
function DataRoutes(_ref3) {
    let { routes, future, state } = _ref3;
    return (0, _reactRouter.UNSAFE_useRoutesImpl)(routes, undefined, state, future);
}
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */ function BrowserRouter(_ref4) {
    let { basename, children, future, window: window1 } = _ref4;
    let historyRef = _react.useRef();
    if (historyRef.current == null) historyRef.current = (0, _router.createBrowserHistory)({
        window: window1,
        v5Compat: true
    });
    let history = historyRef.current;
    let [state, setStateImpl] = _react.useState({
        action: history.action,
        location: history.location
    });
    let { v7_startTransition } = future || {};
    let setState = _react.useCallback((newState)=>{
        v7_startTransition && startTransitionImpl ? startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    _react.useLayoutEffect(()=>history.listen(setState), [
        history,
        setState
    ]);
    return /*#__PURE__*/ _react.createElement((0, _reactRouter.Router), {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */ function HashRouter(_ref5) {
    let { basename, children, future, window: window1 } = _ref5;
    let historyRef = _react.useRef();
    if (historyRef.current == null) historyRef.current = (0, _router.createHashHistory)({
        window: window1,
        v5Compat: true
    });
    let history = historyRef.current;
    let [state, setStateImpl] = _react.useState({
        action: history.action,
        location: history.location
    });
    let { v7_startTransition } = future || {};
    let setState = _react.useCallback((newState)=>{
        v7_startTransition && startTransitionImpl ? startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    _react.useLayoutEffect(()=>history.listen(setState), [
        history,
        setState
    ]);
    return /*#__PURE__*/ _react.createElement((0, _reactRouter.Router), {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */ function HistoryRouter(_ref6) {
    let { basename, children, future, history } = _ref6;
    let [state, setStateImpl] = _react.useState({
        action: history.action,
        location: history.location
    });
    let { v7_startTransition } = future || {};
    let setState = _react.useCallback((newState)=>{
        v7_startTransition && startTransitionImpl ? startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    _react.useLayoutEffect(()=>history.listen(setState), [
        history,
        setState
    ]);
    return /*#__PURE__*/ _react.createElement((0, _reactRouter.Router), {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
HistoryRouter.displayName = "unstable_HistoryRouter";
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
 * The public API for rendering a history-aware `<a>`.
 */ const Link = /*#__PURE__*/ _react.forwardRef(function LinkWithRef(_ref7, ref) {
    let { onClick, relative, reloadDocument, replace, state, target, to, preventScrollReset, unstable_viewTransition } = _ref7, rest = _objectWithoutPropertiesLoose(_ref7, _excluded);
    let { basename } = _react.useContext((0, _reactRouter.UNSAFE_NavigationContext));
    // Rendered into <a href> for absolute URLs
    let absoluteHref;
    let isExternal = false;
    if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
        // Render the absolute href server- and client-side
        absoluteHref = to;
        // Only check for external origins client-side
        if (isBrowser) try {
            let currentUrl = new URL(window.location.href);
            let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
            let path = (0, _router.stripBasename)(targetUrl.pathname, basename);
            if (targetUrl.origin === currentUrl.origin && path != null) // Strip the protocol/origin/basename for same-origin absolute URLs
            to = path + targetUrl.search + targetUrl.hash;
            else isExternal = true;
        } catch (e) {
            // We can't do external URL detection without a valid URL
            (0, _router.UNSAFE_warning)(false, '<Link to="' + to + '"> contains an invalid URL which will probably break ' + "when clicked - please update to a valid URL path.");
        }
    }
    // Rendered into <a href> for relative URLs
    let href = (0, _reactRouter.useHref)(to, {
        relative
    });
    let internalOnClick = useLinkClickHandler(to, {
        replace,
        state,
        target,
        preventScrollReset,
        relative,
        unstable_viewTransition
    });
    function handleClick(event) {
        if (onClick) onClick(event);
        if (!event.defaultPrevented) internalOnClick(event);
    }
    return(/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/anchor-has-content
    _react.createElement("a", _extends({}, rest, {
        href: absoluteHref || href,
        onClick: isExternal || reloadDocument ? onClick : handleClick,
        ref: ref,
        target: target
    })));
});
Link.displayName = "Link";
/**
 * A `<Link>` wrapper that knows if it's "active" or not.
 */ const NavLink = /*#__PURE__*/ _react.forwardRef(function NavLinkWithRef(_ref8, ref) {
    let { "aria-current": ariaCurrentProp = "page", caseSensitive = false, className: classNameProp = "", end = false, style: styleProp, to, unstable_viewTransition, children } = _ref8, rest = _objectWithoutPropertiesLoose(_ref8, _excluded2);
    let path = (0, _reactRouter.useResolvedPath)(to, {
        relative: rest.relative
    });
    let location = (0, _reactRouter.useLocation)();
    let routerState = _react.useContext((0, _reactRouter.UNSAFE_DataRouterStateContext));
    let { navigator, basename } = _react.useContext((0, _reactRouter.UNSAFE_NavigationContext));
    let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useViewTransitionState(path) && unstable_viewTransition === true;
    let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
    let locationPathname = location.pathname;
    let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
    if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
        toPathname = toPathname.toLowerCase();
    }
    if (nextLocationPathname && basename) nextLocationPathname = (0, _router.stripBasename)(nextLocationPathname, basename) || nextLocationPathname;
    // If the `to` has a trailing slash, look at that exact spot.  Otherwise,
    // we're looking for a slash _after_ what's in `to`.  For example:
    //
    // <NavLink to="/users"> and <NavLink to="/users/">
    // both want to look for a / at index 6 to match URL `/users/matt`
    const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
    let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
    let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
    let renderProps = {
        isActive,
        isPending,
        isTransitioning
    };
    let ariaCurrent = isActive ? ariaCurrentProp : undefined;
    let className;
    if (typeof classNameProp === "function") className = classNameProp(renderProps);
    else // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [
        classNameProp,
        isActive ? "active" : null,
        isPending ? "pending" : null,
        isTransitioning ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
    return /*#__PURE__*/ _react.createElement(Link, _extends({}, rest, {
        "aria-current": ariaCurrent,
        className: className,
        ref: ref,
        style: style,
        to: to,
        unstable_viewTransition: unstable_viewTransition
    }), typeof children === "function" ? children(renderProps) : children);
});
NavLink.displayName = "NavLink";
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */ const Form = /*#__PURE__*/ _react.forwardRef((_ref9, forwardedRef)=>{
    let { fetcherKey, navigate, reloadDocument, replace, state, method = defaultMethod, action, onSubmit, relative, preventScrollReset, unstable_viewTransition } = _ref9, props = _objectWithoutPropertiesLoose(_ref9, _excluded3);
    let submit = useSubmit();
    let formAction = useFormAction(action, {
        relative
    });
    let formMethod = method.toLowerCase() === "get" ? "get" : "post";
    let submitHandler = (event)=>{
        onSubmit && onSubmit(event);
        if (event.defaultPrevented) return;
        event.preventDefault();
        let submitter = event.nativeEvent.submitter;
        let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
        submit(submitter || event.currentTarget, {
            fetcherKey,
            method: submitMethod,
            navigate,
            replace,
            state,
            relative,
            preventScrollReset,
            unstable_viewTransition
        });
    };
    return /*#__PURE__*/ _react.createElement("form", _extends({
        ref: forwardedRef,
        method: formMethod,
        action: formAction,
        onSubmit: reloadDocument ? onSubmit : submitHandler
    }, props));
});
Form.displayName = "Form";
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */ function ScrollRestoration(_ref10) {
    let { getKey, storageKey } = _ref10;
    useScrollRestoration({
        getKey,
        storageKey
    });
    return null;
}
ScrollRestoration.displayName = "ScrollRestoration";
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////
var DataRouterHook;
(function(DataRouterHook) {
    DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
    DataRouterHook["UseSubmit"] = "useSubmit";
    DataRouterHook["UseSubmitFetcher"] = "useSubmitFetcher";
    DataRouterHook["UseFetcher"] = "useFetcher";
    DataRouterHook["useViewTransitionState"] = "useViewTransitionState";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook) {
    DataRouterStateHook["UseFetcher"] = "useFetcher";
    DataRouterStateHook["UseFetchers"] = "useFetchers";
    DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
// Internal hooks
function getDataRouterConsoleError(hookName) {
    return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
    let ctx = _react.useContext((0, _reactRouter.UNSAFE_DataRouterContext));
    !ctx && (0, _router.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName));
    return ctx;
}
function useDataRouterState(hookName) {
    let state = _react.useContext((0, _reactRouter.UNSAFE_DataRouterStateContext));
    !state && (0, _router.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName));
    return state;
}
// External hooks
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */ function useLinkClickHandler(to, _temp) {
    let { target, replace: replaceProp, state, preventScrollReset, relative, unstable_viewTransition } = _temp === void 0 ? {} : _temp;
    let navigate = (0, _reactRouter.useNavigate)();
    let location = (0, _reactRouter.useLocation)();
    let path = (0, _reactRouter.useResolvedPath)(to, {
        relative
    });
    return _react.useCallback((event)=>{
        if (shouldProcessLinkClick(event, target)) {
            event.preventDefault();
            // If the URL hasn't changed, a regular <a> will do a replace instead of
            // a push, so do the same here unless the replace prop is explicitly set
            let replace = replaceProp !== undefined ? replaceProp : (0, _reactRouter.createPath)(location) === (0, _reactRouter.createPath)(path);
            navigate(to, {
                replace,
                state,
                preventScrollReset,
                relative,
                unstable_viewTransition
            });
        }
    }, [
        location,
        navigate,
        path,
        replaceProp,
        state,
        target,
        to,
        preventScrollReset,
        relative,
        unstable_viewTransition
    ]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */ function useSearchParams(defaultInit) {
    (0, _router.UNSAFE_warning)(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params\n\nIf you're unsure how to load polyfills, we recommend you check out https://polyfill.io/v3/ which provides some recommendations about how to load polyfills only for users that need them, instead of for every user.");
    let defaultSearchParamsRef = _react.useRef(createSearchParams(defaultInit));
    let hasSetSearchParamsRef = _react.useRef(false);
    let location = (0, _reactRouter.useLocation)();
    let searchParams = _react.useMemo(()=>// Only merge in the defaults if we haven't yet called setSearchParams.
        // Once we call that we want those to take precedence, otherwise you can't
        // remove a param with setSearchParams({}) if it has an initial value
        getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [
        location.search
    ]);
    let navigate = (0, _reactRouter.useNavigate)();
    let setSearchParams = _react.useCallback((nextInit, navigateOptions)=>{
        const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
        hasSetSearchParamsRef.current = true;
        navigate("?" + newSearchParams, navigateOptions);
    }, [
        navigate,
        searchParams
    ]);
    return [
        searchParams,
        setSearchParams
    ];
}
function validateClientSideSubmission() {
    if (typeof document === "undefined") throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let fetcherId = 0;
let getUniqueFetcherId = ()=>"__" + String(++fetcherId) + "__";
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */ function useSubmit() {
    let { router } = useDataRouterContext(DataRouterHook.UseSubmit);
    let { basename } = _react.useContext((0, _reactRouter.UNSAFE_NavigationContext));
    let currentRouteId = (0, _reactRouter.UNSAFE_useRouteId)();
    return _react.useCallback(function(target, options) {
        if (options === void 0) options = {};
        validateClientSideSubmission();
        let { action, method, encType, formData, body } = getFormSubmissionInfo(target, basename);
        if (options.navigate === false) {
            let key = options.fetcherKey || getUniqueFetcherId();
            router.fetch(key, currentRouteId, options.action || action, {
                preventScrollReset: options.preventScrollReset,
                formData,
                body,
                formMethod: options.method || method,
                formEncType: options.encType || encType,
                unstable_flushSync: options.unstable_flushSync
            });
        } else router.navigate(options.action || action, {
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            replace: options.replace,
            state: options.state,
            fromRouteId: currentRouteId,
            unstable_flushSync: options.unstable_flushSync,
            unstable_viewTransition: options.unstable_viewTransition
        });
    }, [
        router,
        basename,
        currentRouteId
    ]);
}
// v7: Eventually we should deprecate this entirely in favor of using the
// router method directly?
function useFormAction(action, _temp2) {
    let { relative } = _temp2 === void 0 ? {} : _temp2;
    let { basename } = _react.useContext((0, _reactRouter.UNSAFE_NavigationContext));
    let routeContext = _react.useContext((0, _reactRouter.UNSAFE_RouteContext));
    !routeContext && (0, _router.UNSAFE_invariant)(false, "useFormAction must be used inside a RouteContext");
    let [match] = routeContext.matches.slice(-1);
    // Shallow clone path so we can modify it below, otherwise we modify the
    // object referenced by useMemo inside useResolvedPath
    let path = _extends({}, (0, _reactRouter.useResolvedPath)(action ? action : ".", {
        relative
    }));
    // If no action was specified, browsers will persist current search params
    // when determining the path, so match that behavior
    // https://github.com/remix-run/remix/issues/927
    let location = (0, _reactRouter.useLocation)();
    if (action == null) {
        // Safe to write to this directly here since if action was undefined, we
        // would have called useResolvedPath(".") which will never include a search
        path.search = location.search;
        // When grabbing search params from the URL, remove any included ?index param
        // since it might not apply to our contextual route.  We add it back based
        // on match.route.index below
        let params = new URLSearchParams(path.search);
        if (params.has("index") && params.get("index") === "") {
            params.delete("index");
            path.search = params.toString() ? "?" + params.toString() : "";
        }
    }
    if ((!action || action === ".") && match.route.index) path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    // If we're operating within a basename, prepend it to the pathname prior
    // to creating the form action.  If this is a root navigation, then just use
    // the raw basename which allows the basename to have full control over the
    // presence of a trailing slash on root actions
    if (basename !== "/") path.pathname = path.pathname === "/" ? basename : (0, _router.joinPaths)([
        basename,
        path.pathname
    ]);
    return (0, _reactRouter.createPath)(path);
}
// TODO: (v7) Change the useFetcher generic default from `any` to `unknown`
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */ function useFetcher(_temp3) {
    var _route$matches;
    let { key } = _temp3 === void 0 ? {} : _temp3;
    let { router } = useDataRouterContext(DataRouterHook.UseFetcher);
    let state = useDataRouterState(DataRouterStateHook.UseFetcher);
    let fetcherData = _react.useContext(FetchersContext);
    let route = _react.useContext((0, _reactRouter.UNSAFE_RouteContext));
    let routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
    !fetcherData && (0, _router.UNSAFE_invariant)(false, "useFetcher must be used inside a FetchersContext");
    !route && (0, _router.UNSAFE_invariant)(false, "useFetcher must be used inside a RouteContext");
    !(routeId != null) && (0, _router.UNSAFE_invariant)(false, 'useFetcher can only be used on routes that contain a unique "id"');
    // Fetcher key handling
    // OK to call conditionally to feature detect `useId`
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let defaultKey = useIdImpl ? useIdImpl() : "";
    let [fetcherKey, setFetcherKey] = _react.useState(key || defaultKey);
    if (key && key !== fetcherKey) setFetcherKey(key);
    else if (!fetcherKey) // We will only fall through here when `useId` is not available
    setFetcherKey(getUniqueFetcherId());
    // Registration/cleanup
    _react.useEffect(()=>{
        router.getFetcher(fetcherKey);
        return ()=>{
            // Tell the router we've unmounted - if v7_fetcherPersist is enabled this
            // will not delete immediately but instead queue up a delete after the
            // fetcher returns to an `idle` state
            router.deleteFetcher(fetcherKey);
        };
    }, [
        router,
        fetcherKey
    ]);
    // Fetcher additions
    let load = _react.useCallback((href, opts)=>{
        !routeId && (0, _router.UNSAFE_invariant)(false, "No routeId available for fetcher.load()");
        router.fetch(fetcherKey, routeId, href, opts);
    }, [
        fetcherKey,
        routeId,
        router
    ]);
    let submitImpl = useSubmit();
    let submit = _react.useCallback((target, opts)=>{
        submitImpl(target, _extends({}, opts, {
            navigate: false,
            fetcherKey
        }));
    }, [
        fetcherKey,
        submitImpl
    ]);
    let FetcherForm = _react.useMemo(()=>{
        let FetcherForm = /*#__PURE__*/ _react.forwardRef((props, ref)=>{
            return /*#__PURE__*/ _react.createElement(Form, _extends({}, props, {
                navigate: false,
                fetcherKey: fetcherKey,
                ref: ref
            }));
        });
        FetcherForm.displayName = "fetcher.Form";
        return FetcherForm;
    }, [
        fetcherKey
    ]);
    // Exposed FetcherWithComponents
    let fetcher = state.fetchers.get(fetcherKey) || (0, _router.IDLE_FETCHER);
    let data = fetcherData.get(fetcherKey);
    let fetcherWithComponents = _react.useMemo(()=>_extends({
            Form: FetcherForm,
            submit,
            load
        }, fetcher, {
            data
        }), [
        FetcherForm,
        submit,
        load,
        fetcher,
        data
    ]);
    return fetcherWithComponents;
}
/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */ function useFetchers() {
    let state = useDataRouterState(DataRouterStateHook.UseFetchers);
    return Array.from(state.fetchers.entries()).map((_ref11)=>{
        let [key, fetcher] = _ref11;
        return _extends({}, fetcher, {
            key
        });
    });
}
const SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
let savedScrollPositions = {};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */ function useScrollRestoration(_temp4) {
    let { getKey, storageKey } = _temp4 === void 0 ? {} : _temp4;
    let { router } = useDataRouterContext(DataRouterHook.UseScrollRestoration);
    let { restoreScrollPosition, preventScrollReset } = useDataRouterState(DataRouterStateHook.UseScrollRestoration);
    let { basename } = _react.useContext((0, _reactRouter.UNSAFE_NavigationContext));
    let location = (0, _reactRouter.useLocation)();
    let matches = (0, _reactRouter.useMatches)();
    let navigation = (0, _reactRouter.useNavigation)();
    // Trigger manual scroll restoration while we're active
    _react.useEffect(()=>{
        window.history.scrollRestoration = "manual";
        return ()=>{
            window.history.scrollRestoration = "auto";
        };
    }, []);
    // Save positions on pagehide
    usePageHide(_react.useCallback(()=>{
        if (navigation.state === "idle") {
            let key = (getKey ? getKey(location, matches) : null) || location.key;
            savedScrollPositions[key] = window.scrollY;
        }
        try {
            sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
        } catch (error) {
            (0, _router.UNSAFE_warning)(false, "Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (" + error + ").");
        }
        window.history.scrollRestoration = "auto";
    }, [
        storageKey,
        getKey,
        navigation.state,
        location,
        matches
    ]));
    // Read in any saved scroll locations
    if (typeof document !== "undefined") {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        _react.useLayoutEffect(()=>{
            try {
                let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
                if (sessionPositions) savedScrollPositions = JSON.parse(sessionPositions);
            } catch (e) {
            // no-op, use default empty object
            }
        }, [
            storageKey
        ]);
        // Enable scroll restoration in the router
        // eslint-disable-next-line react-hooks/rules-of-hooks
        _react.useLayoutEffect(()=>{
            let getKeyWithoutBasename = getKey && basename !== "/" ? (location, matches)=>getKey(_extends({}, location, {
                    pathname: (0, _router.stripBasename)(location.pathname, basename) || location.pathname
                }), matches) : getKey;
            let disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration(savedScrollPositions, ()=>window.scrollY, getKeyWithoutBasename);
            return ()=>disableScrollRestoration && disableScrollRestoration();
        }, [
            router,
            basename,
            getKey
        ]);
        // Restore scrolling when state.restoreScrollPosition changes
        // eslint-disable-next-line react-hooks/rules-of-hooks
        _react.useLayoutEffect(()=>{
            // Explicit false means don't do anything (used for submissions)
            if (restoreScrollPosition === false) return;
            // been here before, scroll to it
            if (typeof restoreScrollPosition === "number") {
                window.scrollTo(0, restoreScrollPosition);
                return;
            }
            // try to scroll to the hash
            if (location.hash) {
                let el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
                if (el) {
                    el.scrollIntoView();
                    return;
                }
            }
            // Don't reset if this navigation opted out
            if (preventScrollReset === true) return;
            // otherwise go to the top on new locations
            window.scrollTo(0, 0);
        }, [
            location,
            restoreScrollPosition,
            preventScrollReset
        ]);
    }
}
/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */ function useBeforeUnload(callback, options) {
    let { capture } = options || {};
    _react.useEffect(()=>{
        let opts = capture != null ? {
            capture
        } : undefined;
        window.addEventListener("beforeunload", callback, opts);
        return ()=>{
            window.removeEventListener("beforeunload", callback, opts);
        };
    }, [
        callback,
        capture
    ]);
}
/**
 * Setup a callback to be fired on the window's `pagehide` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.  This event is better supported than beforeunload across browsers.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */ function usePageHide(callback, options) {
    let { capture } = options || {};
    _react.useEffect(()=>{
        let opts = capture != null ? {
            capture
        } : undefined;
        window.addEventListener("pagehide", callback, opts);
        return ()=>{
            window.removeEventListener("pagehide", callback, opts);
        };
    }, [
        callback,
        capture
    ]);
}
/**
 * Wrapper around useBlocker to show a window.confirm prompt to users instead
 * of building a custom UI with useBlocker.
 *
 * Warning: This has *a lot of rough edges* and behaves very differently (and
 * very incorrectly in some cases) across browsers if user click addition
 * back/forward navigations while the confirm is open.  Use at your own risk.
 */ function usePrompt(_ref12) {
    let { when, message } = _ref12;
    let blocker = (0, _reactRouter.useBlocker)(when);
    _react.useEffect(()=>{
        if (blocker.state === "blocked") {
            let proceed = window.confirm(message);
            if (proceed) // This timeout is needed to avoid a weird "race" on POP navigations
            // between the `window.history` revert navigation and the result of
            // `window.confirm`
            setTimeout(blocker.proceed, 0);
            else blocker.reset();
        }
    }, [
        blocker,
        message
    ]);
    _react.useEffect(()=>{
        if (blocker.state === "blocked" && !when) blocker.reset();
    }, [
        blocker,
        when
    ]);
}
/**
 * Return a boolean indicating if there is an active view transition to the
 * given href.  You can use this value to render CSS classes or viewTransitionName
 * styles onto your elements
 *
 * @param href The destination href
 * @param [opts.relative] Relative routing type ("route" | "path")
 */ function useViewTransitionState(to, opts) {
    if (opts === void 0) opts = {};
    let vtContext = _react.useContext(ViewTransitionContext);
    !(vtContext != null) && (0, _router.UNSAFE_invariant)(false, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename } = useDataRouterContext(DataRouterHook.useViewTransitionState);
    let path = (0, _reactRouter.useResolvedPath)(to, {
        relative: opts.relative
    });
    if (!vtContext.isTransitioning) return false;
    let currentPath = (0, _router.stripBasename)(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
    let nextPath = (0, _router.stripBasename)(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
    // Transition is active if we're going to or coming from the indicated
    // destination.  This ensures that other PUSH navigations that reverse
    // an indicated transition apply.  I.e., on the list view you have:
    //
    //   <NavLink to="/details/1" unstable_viewTransition>
    //
    // If you click the breadcrumb back to the list view:
    //
    //   <NavLink to="/list" unstable_viewTransition>
    //
    // We should apply the transition because it's indicated as active going
    // from /list -> /details/1 and therefore should be active on the reverse
    // (even though this isn't strictly a POP reverse)
    return (0, _router.matchPath)(path.pathname, nextPath) != null || (0, _router.matchPath)(path.pathname, currentPath) != null;
}

},{"react":"21dqq","react-dom":"j6uA9","react-router":"dbWyW","@remix-run/router":"5ncDG","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"dbWyW":[function(require,module,exports) {
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AbortedDeferredError", ()=>(0, _router.AbortedDeferredError));
parcelHelpers.export(exports, "NavigationType", ()=>(0, _router.Action));
parcelHelpers.export(exports, "createPath", ()=>(0, _router.createPath));
parcelHelpers.export(exports, "defer", ()=>(0, _router.defer));
parcelHelpers.export(exports, "generatePath", ()=>(0, _router.generatePath));
parcelHelpers.export(exports, "isRouteErrorResponse", ()=>(0, _router.isRouteErrorResponse));
parcelHelpers.export(exports, "json", ()=>(0, _router.json));
parcelHelpers.export(exports, "matchPath", ()=>(0, _router.matchPath));
parcelHelpers.export(exports, "matchRoutes", ()=>(0, _router.matchRoutes));
parcelHelpers.export(exports, "parsePath", ()=>(0, _router.parsePath));
parcelHelpers.export(exports, "redirect", ()=>(0, _router.redirect));
parcelHelpers.export(exports, "redirectDocument", ()=>(0, _router.redirectDocument));
parcelHelpers.export(exports, "resolvePath", ()=>(0, _router.resolvePath));
parcelHelpers.export(exports, "Await", ()=>Await);
parcelHelpers.export(exports, "MemoryRouter", ()=>MemoryRouter);
parcelHelpers.export(exports, "Navigate", ()=>Navigate);
parcelHelpers.export(exports, "Outlet", ()=>Outlet);
parcelHelpers.export(exports, "Route", ()=>Route);
parcelHelpers.export(exports, "Router", ()=>Router);
parcelHelpers.export(exports, "RouterProvider", ()=>RouterProvider);
parcelHelpers.export(exports, "Routes", ()=>Routes);
parcelHelpers.export(exports, "UNSAFE_DataRouterContext", ()=>DataRouterContext);
parcelHelpers.export(exports, "UNSAFE_DataRouterStateContext", ()=>DataRouterStateContext);
parcelHelpers.export(exports, "UNSAFE_LocationContext", ()=>LocationContext);
parcelHelpers.export(exports, "UNSAFE_NavigationContext", ()=>NavigationContext);
parcelHelpers.export(exports, "UNSAFE_RouteContext", ()=>RouteContext);
parcelHelpers.export(exports, "UNSAFE_mapRouteProperties", ()=>mapRouteProperties);
parcelHelpers.export(exports, "UNSAFE_useRouteId", ()=>useRouteId);
parcelHelpers.export(exports, "UNSAFE_useRoutesImpl", ()=>useRoutesImpl);
parcelHelpers.export(exports, "createMemoryRouter", ()=>createMemoryRouter);
parcelHelpers.export(exports, "createRoutesFromChildren", ()=>createRoutesFromChildren);
parcelHelpers.export(exports, "createRoutesFromElements", ()=>createRoutesFromChildren);
parcelHelpers.export(exports, "renderMatches", ()=>renderMatches);
parcelHelpers.export(exports, "useActionData", ()=>useActionData);
parcelHelpers.export(exports, "useAsyncError", ()=>useAsyncError);
parcelHelpers.export(exports, "useAsyncValue", ()=>useAsyncValue);
parcelHelpers.export(exports, "useBlocker", ()=>useBlocker);
parcelHelpers.export(exports, "useHref", ()=>useHref);
parcelHelpers.export(exports, "useInRouterContext", ()=>useInRouterContext);
parcelHelpers.export(exports, "useLoaderData", ()=>useLoaderData);
parcelHelpers.export(exports, "useLocation", ()=>useLocation);
parcelHelpers.export(exports, "useMatch", ()=>useMatch);
parcelHelpers.export(exports, "useMatches", ()=>useMatches);
parcelHelpers.export(exports, "useNavigate", ()=>useNavigate);
parcelHelpers.export(exports, "useNavigation", ()=>useNavigation);
parcelHelpers.export(exports, "useNavigationType", ()=>useNavigationType);
parcelHelpers.export(exports, "useOutlet", ()=>useOutlet);
parcelHelpers.export(exports, "useOutletContext", ()=>useOutletContext);
parcelHelpers.export(exports, "useParams", ()=>useParams);
parcelHelpers.export(exports, "useResolvedPath", ()=>useResolvedPath);
parcelHelpers.export(exports, "useRevalidator", ()=>useRevalidator);
parcelHelpers.export(exports, "useRouteError", ()=>useRouteError);
parcelHelpers.export(exports, "useRouteLoaderData", ()=>useRouteLoaderData);
parcelHelpers.export(exports, "useRoutes", ()=>useRoutes);
var _react = require("react");
var _router = require("@remix-run/router");
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
const DataRouterContext = /*#__PURE__*/ _react.createContext(null);
DataRouterContext.displayName = "DataRouter";
const DataRouterStateContext = /*#__PURE__*/ _react.createContext(null);
DataRouterStateContext.displayName = "DataRouterState";
const AwaitContext = /*#__PURE__*/ _react.createContext(null);
AwaitContext.displayName = "Await";
/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level `<Router>` API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */ const NavigationContext = /*#__PURE__*/ _react.createContext(null);
NavigationContext.displayName = "Navigation";
const LocationContext = /*#__PURE__*/ _react.createContext(null);
LocationContext.displayName = "Location";
const RouteContext = /*#__PURE__*/ _react.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
});
RouteContext.displayName = "Route";
const RouteErrorContext = /*#__PURE__*/ _react.createContext(null);
RouteErrorContext.displayName = "RouteError";
/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */ function useHref(to, _temp) {
    let { relative } = _temp === void 0 ? {} : _temp;
    !useInRouterContext() && (0, _router.UNSAFE_invariant)(false, // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component.");
    let { basename, navigator } = _react.useContext(NavigationContext);
    let { hash, pathname, search } = useResolvedPath(to, {
        relative
    });
    let joinedPathname = pathname;
    // If we're operating within a basename, prepend it to the pathname prior
    // to creating the href.  If this is a root navigation, then just use the raw
    // basename which allows the basename to have full control over the presence
    // of a trailing slash on root links
    if (basename !== "/") joinedPathname = pathname === "/" ? basename : (0, _router.joinPaths)([
        basename,
        pathname
    ]);
    return navigator.createHref({
        pathname: joinedPathname,
        search,
        hash
    });
}
/**
 * Returns true if this component is a descendant of a `<Router>`.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */ function useInRouterContext() {
    return _react.useContext(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */ function useLocation() {
    !useInRouterContext() && (0, _router.UNSAFE_invariant)(false, // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component.");
    return _react.useContext(LocationContext).location;
}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */ function useNavigationType() {
    return _react.useContext(LocationContext).navigationType;
}
/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * `<NavLink>`.
 *
 * @see https://reactrouter.com/hooks/use-match
 */ function useMatch(pattern) {
    !useInRouterContext() && (0, _router.UNSAFE_invariant)(false, // router loaded. We can help them understand how to avoid that.
    "useMatch() may be used only in the context of a <Router> component.");
    let { pathname } = useLocation();
    return _react.useMemo(()=>(0, _router.matchPath)(pattern, pathname), [
        pathname,
        pattern
    ]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */ const navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
// Mute warnings for calls to useNavigate in SSR environments
function useIsomorphicLayoutEffect(cb) {
    let isStatic = _react.useContext(NavigationContext).static;
    if (!isStatic) // We should be able to get rid of this once react 18.3 is released
    // See: https://github.com/facebook/react/pull/26395
    // eslint-disable-next-line react-hooks/rules-of-hooks
    _react.useLayoutEffect(cb);
}
/**
 * Returns an imperative method for changing the location. Used by `<Link>`s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */ function useNavigate() {
    let { isDataRoute } = _react.useContext(RouteContext);
    // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
    !useInRouterContext() && (0, _router.UNSAFE_invariant)(false, // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component.");
    let dataRouterContext = _react.useContext(DataRouterContext);
    let { basename, future, navigator } = _react.useContext(NavigationContext);
    let { matches } = _react.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify((0, _router.UNSAFE_getResolveToMatches)(matches, future.v7_relativeSplatPath));
    let activeRef = _react.useRef(false);
    useIsomorphicLayoutEffect(()=>{
        activeRef.current = true;
    });
    let navigate = _react.useCallback(function(to, options) {
        if (options === void 0) options = {};
        (0, _router.UNSAFE_warning)(activeRef.current, navigateEffectWarning);
        // Short circuit here since if this happens on first render the navigate
        // is useless because we haven't wired up our history listener yet
        if (!activeRef.current) return;
        if (typeof to === "number") {
            navigator.go(to);
            return;
        }
        let path = (0, _router.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
        // If we're operating within a basename, prepend it to the pathname prior
        // to handing off to history (but only if we're not in a data router,
        // otherwise it'll prepend the basename inside of the router).
        // If this is a root navigation, then we navigate to the raw basename
        // which allows the basename to have full control over the presence of a
        // trailing slash on root links
        if (dataRouterContext == null && basename !== "/") path.pathname = path.pathname === "/" ? basename : (0, _router.joinPaths)([
            basename,
            path.pathname
        ]);
        (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
    }, [
        basename,
        navigator,
        routePathnamesJson,
        locationPathname,
        dataRouterContext
    ]);
    return navigate;
}
const OutletContext = /*#__PURE__*/ _react.createContext(null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */ function useOutletContext() {
    return _react.useContext(OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by `<Outlet>` to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */ function useOutlet(context) {
    let outlet = _react.useContext(RouteContext).outlet;
    if (outlet) return /*#__PURE__*/ _react.createElement(OutletContext.Provider, {
        value: context
    }, outlet);
    return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */ function useParams() {
    let { matches } = _react.useContext(RouteContext);
    let routeMatch = matches[matches.length - 1];
    return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */ function useResolvedPath(to, _temp2) {
    let { relative } = _temp2 === void 0 ? {} : _temp2;
    let { future } = _react.useContext(NavigationContext);
    let { matches } = _react.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify((0, _router.UNSAFE_getResolveToMatches)(matches, future.v7_relativeSplatPath));
    return _react.useMemo(()=>(0, _router.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [
        to,
        routePathnamesJson,
        locationPathname,
        relative
    ]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an `<Outlet>` to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */ function useRoutes(routes, locationArg) {
    return useRoutesImpl(routes, locationArg);
}
// Internal implementation with accept optional param for RouterProvider usage
function useRoutesImpl(routes, locationArg, dataRouterState, future) {
    !useInRouterContext() && (0, _router.UNSAFE_invariant)(false, // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component.");
    let { navigator } = _react.useContext(NavigationContext);
    let { matches: parentMatches } = _react.useContext(RouteContext);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    {
        // You won't get a warning about 2 different <Routes> under a <Route>
        // without a trailing *, but this is a best-effort warning anyway since we
        // cannot even give the warning unless they land at the parent route.
        //
        // Example:
        //
        // <Routes>
        //   {/* This route path MUST end with /* because otherwise
        //       it will never match /blog/post/123 */}
        //   <Route path="blog" element={<Blog />} />
        //   <Route path="blog/feed" element={<BlogFeed />} />
        // </Routes>
        //
        // function Blog() {
        //   return (
        //     <Routes>
        //       <Route path="post/:id" element={<Post />} />
        //     </Routes>
        //   );
        // }
        let parentPath = parentRoute && parentRoute.path || "";
        warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') + 'parent route path has no trailing "*". This means if you navigate ' + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ('Please change the parent <Route path="' + parentPath + '"> to <Route ') + ('path="' + (parentPath === "/" ? "*" : parentPath + "/*") + '">.'));
    }
    let locationFromContext = useLocation();
    let location;
    if (locationArg) {
        var _parsedLocationArg$pa;
        let parsedLocationArg = typeof locationArg === "string" ? (0, _router.parsePath)(locationArg) : locationArg;
        !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) && (0, _router.UNSAFE_invariant)(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') + ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.'));
        location = parsedLocationArg;
    } else location = locationFromContext;
    let pathname = location.pathname || "/";
    let remainingPathname = pathname;
    if (parentPathnameBase !== "/") {
        // Determine the remaining pathname by removing the # of URL segments the
        // parentPathnameBase has, instead of removing based on character count.
        // This is because we can't guarantee that incoming/outgoing encodings/
        // decodings will match exactly.
        // We decode paths before matching on a per-segment basis with
        // decodeURIComponent(), but we re-encode pathnames via `new URL()` so they
        // match what `window.location.pathname` would reflect.  Those don't 100%
        // align when it comes to encoded URI characters such as % and &.
        //
        // So we may end up with:
        //   pathname:           "/descendant/a%25b/match"
        //   parentPathnameBase: "/descendant/a%b"
        //
        // And the direct substring removal approach won't work :/
        let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
        let segments = pathname.replace(/^\//, "").split("/");
        remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
    }
    let matches = (0, _router.matchRoutes)(routes, {
        pathname: remainingPathname
    });
    (0, _router.UNSAFE_warning)(parentRoute || matches != null, 'No routes matched location "' + location.pathname + location.search + location.hash + '" ');
    (0, _router.UNSAFE_warning)(matches == null || matches[matches.length - 1].route.element !== undefined || matches[matches.length - 1].route.Component !== undefined || matches[matches.length - 1].route.lazy !== undefined, 'Matched leaf route at location "' + location.pathname + location.search + location.hash + '" ' + "does not have an element or Component. This means it will render an <Outlet /> with a " + 'null value by default resulting in an "empty" page.');
    let renderedMatches = _renderMatches(matches && matches.map((match)=>Object.assign({}, match, {
            params: Object.assign({}, parentParams, match.params),
            pathname: (0, _router.joinPaths)([
                parentPathnameBase,
                // Re-encode pathnames that were decoded inside matchRoutes
                navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname
            ]),
            pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0, _router.joinPaths)([
                parentPathnameBase,
                // Re-encode pathnames that were decoded inside matchRoutes
                navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
            ])
        })), parentMatches, dataRouterState, future);
    // When a user passes in a `locationArg`, the associated routes need to
    // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
    // to use the scoped location instead of the global location.
    if (locationArg && renderedMatches) return /*#__PURE__*/ _react.createElement(LocationContext.Provider, {
        value: {
            location: _extends({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, location),
            navigationType: (0, _router.Action).Pop
        }
    }, renderedMatches);
    return renderedMatches;
}
function DefaultErrorComponent() {
    let error = useRouteError();
    let message = (0, _router.isRouteErrorResponse)(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
    let stack = error instanceof Error ? error.stack : null;
    let lightgrey = "rgba(200,200,200, 0.5)";
    let preStyles = {
        padding: "0.5rem",
        backgroundColor: lightgrey
    };
    let codeStyles = {
        padding: "2px 4px",
        backgroundColor: lightgrey
    };
    let devInfo = null;
    console.error("Error handled by React Router default ErrorBoundary:", error);
    devInfo = /*#__PURE__*/ _react.createElement(_react.Fragment, null, /*#__PURE__*/ _react.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), /*#__PURE__*/ _react.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /*#__PURE__*/ _react.createElement("code", {
        style: codeStyles
    }, "ErrorBoundary"), " or", " ", /*#__PURE__*/ _react.createElement("code", {
        style: codeStyles
    }, "errorElement"), " prop on your route."));
    return /*#__PURE__*/ _react.createElement(_react.Fragment, null, /*#__PURE__*/ _react.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/ _react.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, message), stack ? /*#__PURE__*/ _react.createElement("pre", {
        style: preStyles
    }, stack) : null, devInfo);
}
const defaultErrorElement = /*#__PURE__*/ _react.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends _react.Component {
    constructor(props){
        super(props);
        this.state = {
            location: props.location,
            revalidation: props.revalidation,
            error: props.error
        };
    }
    static getDerivedStateFromError(error) {
        return {
            error: error
        };
    }
    static getDerivedStateFromProps(props, state) {
        // When we get into an error state, the user will likely click "back" to the
        // previous page that didn't have an error. Because this wraps the entire
        // application, that will have no effect--the error page continues to display.
        // This gives us a mechanism to recover from the error when the location changes.
        //
        // Whether we're in an error state or not, we update the location in state
        // so that when we are in an error state, it gets reset when a new location
        // comes in and the user recovers from the error.
        if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") return {
            error: props.error,
            location: props.location,
            revalidation: props.revalidation
        };
        // If we're not changing locations, preserve the location but still surface
        // any new errors that may come through. We retain the existing error, we do
        // this because the error provided from the app state may be cleared without
        // the location changing.
        return {
            error: props.error !== undefined ? props.error : state.error,
            location: state.location,
            revalidation: props.revalidation || state.revalidation
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("React Router caught the following error during render", error, errorInfo);
    }
    render() {
        return this.state.error !== undefined ? /*#__PURE__*/ _react.createElement(RouteContext.Provider, {
            value: this.props.routeContext
        }, /*#__PURE__*/ _react.createElement(RouteErrorContext.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children;
    }
}
function RenderedRoute(_ref) {
    let { routeContext, match, children } = _ref;
    let dataRouterContext = _react.useContext(DataRouterContext);
    // Track how deep we got in our render pass to emulate SSR componentDidCatch
    // in a DataStaticRouter
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    return /*#__PURE__*/ _react.createElement(RouteContext.Provider, {
        value: routeContext
    }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState, future) {
    var _dataRouterState2;
    if (parentMatches === void 0) parentMatches = [];
    if (dataRouterState === void 0) dataRouterState = null;
    if (future === void 0) future = null;
    if (matches == null) {
        var _dataRouterState;
        if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) // Don't bail if we have data router errors so we can render them in the
        // boundary.  Use the pre-matched (or shimmed) matches
        matches = dataRouterState.matches;
        else return null;
    }
    let renderedMatches = matches;
    // If we have data errors, trim matches to the highest error boundary
    let errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
    if (errors != null) {
        let errorIndex = renderedMatches.findIndex((m)=>m.route.id && (errors == null ? void 0 : errors[m.route.id]) !== undefined);
        !(errorIndex >= 0) && (0, _router.UNSAFE_invariant)(false, "Could not find a matching route for errors on route IDs: " + Object.keys(errors).join(","));
        renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
    }
    // If we're in a partial hydration mode, detect if we need to render down to
    // a given HydrateFallback while we load the rest of the hydration data
    let renderFallback = false;
    let fallbackIndex = -1;
    if (dataRouterState && future && future.v7_partialHydration) for(let i = 0; i < renderedMatches.length; i++){
        let match = renderedMatches[i];
        // Track the deepest fallback up until the first route without data
        if (match.route.HydrateFallback || match.route.hydrateFallbackElement) fallbackIndex = i;
        if (match.route.id) {
            let { loaderData, errors } = dataRouterState;
            let needsToRunLoader = match.route.loader && loaderData[match.route.id] === undefined && (!errors || errors[match.route.id] === undefined);
            if (match.route.lazy || needsToRunLoader) {
                // We found the first route that's not ready to render (waiting on
                // lazy, or has a loader that hasn't run yet).  Flag that we need to
                // render a fallback and render up until the appropriate fallback
                renderFallback = true;
                if (fallbackIndex >= 0) renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
                else renderedMatches = [
                    renderedMatches[0]
                ];
                break;
            }
        }
    }
    return renderedMatches.reduceRight((outlet, match, index)=>{
        // Only data routers handle errors/fallbacks
        let error;
        let shouldRenderHydrateFallback = false;
        let errorElement = null;
        let hydrateFallbackElement = null;
        if (dataRouterState) {
            error = errors && match.route.id ? errors[match.route.id] : undefined;
            errorElement = match.route.errorElement || defaultErrorElement;
            if (renderFallback) {
                if (fallbackIndex < 0 && index === 0) {
                    warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
                    shouldRenderHydrateFallback = true;
                    hydrateFallbackElement = null;
                } else if (fallbackIndex === index) {
                    shouldRenderHydrateFallback = true;
                    hydrateFallbackElement = match.route.hydrateFallbackElement || null;
                }
            }
        }
        let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
        let getChildren = ()=>{
            let children;
            if (error) children = errorElement;
            else if (shouldRenderHydrateFallback) children = hydrateFallbackElement;
            else if (match.route.Component) // Note: This is a de-optimized path since React won't re-use the
            // ReactElement since it's identity changes with each new
            // React.createElement call.  We keep this so folks can use
            // `<Route Component={...}>` in `<Routes>` but generally `Component`
            // usage is only advised in `RouterProvider` when we can convert it to
            // `element` ahead of time.
            children = /*#__PURE__*/ _react.createElement(match.route.Component, null);
            else if (match.route.element) children = match.route.element;
            else children = outlet;
            return /*#__PURE__*/ _react.createElement(RenderedRoute, {
                match: match,
                routeContext: {
                    outlet,
                    matches,
                    isDataRoute: dataRouterState != null
                },
                children: children
            });
        };
        // Only wrap in an error boundary within data router usages when we have an
        // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
        // an ancestor ErrorBoundary/errorElement
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/ _react.createElement(RenderErrorBoundary, {
            location: dataRouterState.location,
            revalidation: dataRouterState.revalidation,
            component: errorElement,
            error: error,
            children: getChildren(),
            routeContext: {
                outlet: null,
                matches,
                isDataRoute: true
            }
        }) : getChildren();
    }, null);
}
var DataRouterHook = /*#__PURE__*/ function(DataRouterHook) {
    DataRouterHook["UseBlocker"] = "useBlocker";
    DataRouterHook["UseRevalidator"] = "useRevalidator";
    DataRouterHook["UseNavigateStable"] = "useNavigate";
    return DataRouterHook;
}(DataRouterHook || {});
var DataRouterStateHook = /*#__PURE__*/ function(DataRouterStateHook) {
    DataRouterStateHook["UseBlocker"] = "useBlocker";
    DataRouterStateHook["UseLoaderData"] = "useLoaderData";
    DataRouterStateHook["UseActionData"] = "useActionData";
    DataRouterStateHook["UseRouteError"] = "useRouteError";
    DataRouterStateHook["UseNavigation"] = "useNavigation";
    DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
    DataRouterStateHook["UseMatches"] = "useMatches";
    DataRouterStateHook["UseRevalidator"] = "useRevalidator";
    DataRouterStateHook["UseNavigateStable"] = "useNavigate";
    DataRouterStateHook["UseRouteId"] = "useRouteId";
    return DataRouterStateHook;
}(DataRouterStateHook || {});
function getDataRouterConsoleError(hookName) {
    return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
    let ctx = _react.useContext(DataRouterContext);
    !ctx && (0, _router.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName));
    return ctx;
}
function useDataRouterState(hookName) {
    let state = _react.useContext(DataRouterStateContext);
    !state && (0, _router.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName));
    return state;
}
function useRouteContext(hookName) {
    let route = _react.useContext(RouteContext);
    !route && (0, _router.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName));
    return route;
}
// Internal version with hookName-aware debugging
function useCurrentRouteId(hookName) {
    let route = useRouteContext(hookName);
    let thisRoute = route.matches[route.matches.length - 1];
    !thisRoute.route.id && (0, _router.UNSAFE_invariant)(false, hookName + ' can only be used on routes that contain a unique "id"');
    return thisRoute.route.id;
}
/**
 * Returns the ID for the nearest contextual route
 */ function useRouteId() {
    return useCurrentRouteId(DataRouterStateHook.UseRouteId);
}
/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */ function useNavigation() {
    let state = useDataRouterState(DataRouterStateHook.UseNavigation);
    return state.navigation;
}
/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */ function useRevalidator() {
    let dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
    let state = useDataRouterState(DataRouterStateHook.UseRevalidator);
    return _react.useMemo(()=>({
            revalidate: dataRouterContext.router.revalidate,
            state: state.revalidation
        }), [
        dataRouterContext.router.revalidate,
        state.revalidation
    ]);
}
/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */ function useMatches() {
    let { matches, loaderData } = useDataRouterState(DataRouterStateHook.UseMatches);
    return _react.useMemo(()=>matches.map((m)=>(0, _router.UNSAFE_convertRouteMatchToUiMatch)(m, loaderData)), [
        matches,
        loaderData
    ]);
}
/**
 * Returns the loader data for the nearest ancestor Route loader
 */ function useLoaderData() {
    let state = useDataRouterState(DataRouterStateHook.UseLoaderData);
    let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
    if (state.errors && state.errors[routeId] != null) {
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
        return undefined;
    }
    return state.loaderData[routeId];
}
/**
 * Returns the loaderData for the given routeId
 */ function useRouteLoaderData(routeId) {
    let state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
    return state.loaderData[routeId];
}
/**
 * Returns the action data for the nearest ancestor Route action
 */ function useActionData() {
    let state = useDataRouterState(DataRouterStateHook.UseActionData);
    let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
    return state.actionData ? state.actionData[routeId] : undefined;
}
/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */ function useRouteError() {
    var _state$errors;
    let error = _react.useContext(RouteErrorContext);
    let state = useDataRouterState(DataRouterStateHook.UseRouteError);
    let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError);
    // If this was a render error, we put it in a RouteError context inside
    // of RenderErrorBoundary
    if (error !== undefined) return error;
    // Otherwise look for errors from our data router state
    return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
/**
 * Returns the happy-path data from the nearest ancestor `<Await />` value
 */ function useAsyncValue() {
    let value = _react.useContext(AwaitContext);
    return value == null ? void 0 : value._data;
}
/**
 * Returns the error from the nearest ancestor `<Await />` value
 */ function useAsyncError() {
    let value = _react.useContext(AwaitContext);
    return value == null ? void 0 : value._error;
}
let blockerId = 0;
/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */ function useBlocker(shouldBlock) {
    let { router, basename } = useDataRouterContext(DataRouterHook.UseBlocker);
    let state = useDataRouterState(DataRouterStateHook.UseBlocker);
    let [blockerKey, setBlockerKey] = _react.useState("");
    let blockerFunction = _react.useCallback((arg)=>{
        if (typeof shouldBlock !== "function") return !!shouldBlock;
        if (basename === "/") return shouldBlock(arg);
        // If they provided us a function and we've got an active basename, strip
        // it from the locations we expose to the user to match the behavior of
        // useLocation
        let { currentLocation, nextLocation, historyAction } = arg;
        return shouldBlock({
            currentLocation: _extends({}, currentLocation, {
                pathname: (0, _router.stripBasename)(currentLocation.pathname, basename) || currentLocation.pathname
            }),
            nextLocation: _extends({}, nextLocation, {
                pathname: (0, _router.stripBasename)(nextLocation.pathname, basename) || nextLocation.pathname
            }),
            historyAction
        });
    }, [
        basename,
        shouldBlock
    ]);
    // This effect is in charge of blocker key assignment and deletion (which is
    // tightly coupled to the key)
    _react.useEffect(()=>{
        let key = String(++blockerId);
        setBlockerKey(key);
        return ()=>router.deleteBlocker(key);
    }, [
        router
    ]);
    // This effect handles assigning the blockerFunction.  This is to handle
    // unstable blocker function identities, and happens only after the prior
    // effect so we don't get an orphaned blockerFunction in the router with a
    // key of "".  Until then we just have the IDLE_BLOCKER.
    _react.useEffect(()=>{
        if (blockerKey !== "") router.getBlocker(blockerKey, blockerFunction);
    }, [
        router,
        blockerKey,
        blockerFunction
    ]);
    // Prefer the blocker from `state` not `router.state` since DataRouterContext
    // is memoized so this ensures we update on blocker state updates
    return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : (0, _router.IDLE_BLOCKER);
}
/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */ function useNavigateStable() {
    let { router } = useDataRouterContext(DataRouterHook.UseNavigateStable);
    let id = useCurrentRouteId(DataRouterStateHook.UseNavigateStable);
    let activeRef = _react.useRef(false);
    useIsomorphicLayoutEffect(()=>{
        activeRef.current = true;
    });
    let navigate = _react.useCallback(function(to, options) {
        if (options === void 0) options = {};
        (0, _router.UNSAFE_warning)(activeRef.current, navigateEffectWarning);
        // Short circuit here since if this happens on first render the navigate
        // is useless because we haven't wired up our router subscriber yet
        if (!activeRef.current) return;
        if (typeof to === "number") router.navigate(to);
        else router.navigate(to, _extends({
            fromRouteId: id
        }, options));
    }, [
        router,
        id
    ]);
    return navigate;
}
const alreadyWarned = {};
function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned[key]) {
        alreadyWarned[key] = true;
        (0, _router.UNSAFE_warning)(false, message);
    }
}
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/ const START_TRANSITION = "startTransition";
const startTransitionImpl = _react[START_TRANSITION];
/**
 * Given a Remix Router instance, render the appropriate UI
 */ function RouterProvider(_ref) {
    let { fallbackElement, router, future } = _ref;
    let [state, setStateImpl] = _react.useState(router.state);
    let { v7_startTransition } = future || {};
    let setState = _react.useCallback((newState)=>{
        if (v7_startTransition && startTransitionImpl) startTransitionImpl(()=>setStateImpl(newState));
        else setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    // Need to use a layout effect here so we are subscribed early enough to
    // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
    _react.useLayoutEffect(()=>router.subscribe(setState), [
        router,
        setState
    ]);
    _react.useEffect(()=>{
        (0, _router.UNSAFE_warning)(fallbackElement == null || !router.future.v7_partialHydration, "`<RouterProvider fallbackElement>` is deprecated when using `v7_partialHydration`, use a `HydrateFallback` component instead");
    // Only log this once on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let navigator = _react.useMemo(()=>{
        return {
            createHref: router.createHref,
            encodeLocation: router.encodeLocation,
            go: (n)=>router.navigate(n),
            push: (to, state, opts)=>router.navigate(to, {
                    state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                }),
            replace: (to, state, opts)=>router.navigate(to, {
                    replace: true,
                    state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                })
        };
    }, [
        router
    ]);
    let basename = router.basename || "/";
    let dataRouterContext = _react.useMemo(()=>({
            router,
            navigator,
            static: false,
            basename
        }), [
        router,
        navigator,
        basename
    ]);
    // The fragment and {null} here are important!  We need them to keep React 18's
    // useId happy when we are server-rendering since we may have a <script> here
    // containing the hydrated server-side staticContext (from StaticRouterProvider).
    // useId relies on the component tree structure to generate deterministic id's
    // so we need to ensure it remains the same on the client even though
    // we don't need the <script> tag
    return /*#__PURE__*/ _react.createElement(_react.Fragment, null, /*#__PURE__*/ _react.createElement(DataRouterContext.Provider, {
        value: dataRouterContext
    }, /*#__PURE__*/ _react.createElement(DataRouterStateContext.Provider, {
        value: state
    }, /*#__PURE__*/ _react.createElement(Router, {
        basename: basename,
        location: state.location,
        navigationType: state.historyAction,
        navigator: navigator,
        future: {
            v7_relativeSplatPath: router.future.v7_relativeSplatPath
        }
    }, state.initialized || router.future.v7_partialHydration ? /*#__PURE__*/ _react.createElement(DataRoutes, {
        routes: router.routes,
        future: router.future,
        state: state
    }) : fallbackElement))), null);
}
function DataRoutes(_ref2) {
    let { routes, future, state } = _ref2;
    return useRoutesImpl(routes, undefined, state, future);
}
/**
 * A `<Router>` that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */ function MemoryRouter(_ref3) {
    let { basename, children, initialEntries, initialIndex, future } = _ref3;
    let historyRef = _react.useRef();
    if (historyRef.current == null) historyRef.current = (0, _router.createMemoryHistory)({
        initialEntries,
        initialIndex,
        v5Compat: true
    });
    let history = historyRef.current;
    let [state, setStateImpl] = _react.useState({
        action: history.action,
        location: history.location
    });
    let { v7_startTransition } = future || {};
    let setState = _react.useCallback((newState)=>{
        v7_startTransition && startTransitionImpl ? startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    _react.useLayoutEffect(()=>history.listen(setState), [
        history,
        setState
    ]);
    return /*#__PURE__*/ _react.createElement(Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */ function Navigate(_ref4) {
    let { to, replace, state, relative } = _ref4;
    !useInRouterContext() && (0, _router.UNSAFE_invariant)(false, // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component.");
    let { future, static: isStatic } = _react.useContext(NavigationContext);
    (0, _router.UNSAFE_warning)(!isStatic, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let { matches } = _react.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let navigate = useNavigate();
    // Resolve the path outside of the effect so that when effects run twice in
    // StrictMode they navigate to the same place
    let path = (0, _router.resolveTo)(to, (0, _router.UNSAFE_getResolveToMatches)(matches, future.v7_relativeSplatPath), locationPathname, relative === "path");
    let jsonPath = JSON.stringify(path);
    _react.useEffect(()=>navigate(JSON.parse(jsonPath), {
            replace,
            state,
            relative
        }), [
        navigate,
        jsonPath,
        relative,
        replace,
        state
    ]);
    return null;
}
/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */ function Outlet(props) {
    return useOutlet(props.context);
}
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */ function Route(_props) {
    (0, _router.UNSAFE_invariant)(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
 * router that is more specific to your environment such as a `<BrowserRouter>`
 * in web browsers or a `<StaticRouter>` for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */ function Router(_ref5) {
    let { basename: basenameProp = "/", children = null, location: locationProp, navigationType = (0, _router.Action).Pop, navigator, static: staticProp = false, future } = _ref5;
    !!useInRouterContext() && (0, _router.UNSAFE_invariant)(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    // Preserve trailing slashes on basename, so we can let the user control
    // the enforcement of trailing slashes throughout the app
    let basename = basenameProp.replace(/^\/*/, "/");
    let navigationContext = _react.useMemo(()=>({
            basename,
            navigator,
            static: staticProp,
            future: _extends({
                v7_relativeSplatPath: false
            }, future)
        }), [
        basename,
        future,
        navigator,
        staticProp
    ]);
    if (typeof locationProp === "string") locationProp = (0, _router.parsePath)(locationProp);
    let { pathname = "/", search = "", hash = "", state = null, key = "default" } = locationProp;
    let locationContext = _react.useMemo(()=>{
        let trailingPathname = (0, _router.stripBasename)(pathname, basename);
        if (trailingPathname == null) return null;
        return {
            location: {
                pathname: trailingPathname,
                search,
                hash,
                state,
                key
            },
            navigationType
        };
    }, [
        basename,
        pathname,
        search,
        hash,
        state,
        key,
        navigationType
    ]);
    (0, _router.UNSAFE_warning)(locationContext != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.");
    if (locationContext == null) return null;
    return /*#__PURE__*/ _react.createElement(NavigationContext.Provider, {
        value: navigationContext
    }, /*#__PURE__*/ _react.createElement(LocationContext.Provider, {
        children: children,
        value: locationContext
    }));
}
/**
 * A container for a nested tree of `<Route>` elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */ function Routes(_ref6) {
    let { children, location } = _ref6;
    return useRoutes(createRoutesFromChildren(children), location);
}
/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */ function Await(_ref7) {
    let { children, errorElement, resolve } = _ref7;
    return /*#__PURE__*/ _react.createElement(AwaitErrorBoundary, {
        resolve: resolve,
        errorElement: errorElement
    }, /*#__PURE__*/ _react.createElement(ResolveAwait, null, children));
}
var AwaitRenderStatus = /*#__PURE__*/ function(AwaitRenderStatus) {
    AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
    AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
    AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
    return AwaitRenderStatus;
}(AwaitRenderStatus || {});
const neverSettledPromise = new Promise(()=>{});
class AwaitErrorBoundary extends _react.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null
        };
    }
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("<Await> caught the following error during render", error, errorInfo);
    }
    render() {
        let { children, errorElement, resolve } = this.props;
        let promise = null;
        let status = AwaitRenderStatus.pending;
        if (!(resolve instanceof Promise)) {
            // Didn't get a promise - provide as a resolved promise
            status = AwaitRenderStatus.success;
            promise = Promise.resolve();
            Object.defineProperty(promise, "_tracked", {
                get: ()=>true
            });
            Object.defineProperty(promise, "_data", {
                get: ()=>resolve
            });
        } else if (this.state.error) {
            // Caught a render error, provide it as a rejected promise
            status = AwaitRenderStatus.error;
            let renderError = this.state.error;
            promise = Promise.reject().catch(()=>{}); // Avoid unhandled rejection warnings
            Object.defineProperty(promise, "_tracked", {
                get: ()=>true
            });
            Object.defineProperty(promise, "_error", {
                get: ()=>renderError
            });
        } else if (resolve._tracked) {
            // Already tracked promise - check contents
            promise = resolve;
            status = promise._error !== undefined ? AwaitRenderStatus.error : promise._data !== undefined ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
        } else {
            // Raw (untracked) promise - track it
            status = AwaitRenderStatus.pending;
            Object.defineProperty(resolve, "_tracked", {
                get: ()=>true
            });
            promise = resolve.then((data)=>Object.defineProperty(resolve, "_data", {
                    get: ()=>data
                }), (error)=>Object.defineProperty(resolve, "_error", {
                    get: ()=>error
                }));
        }
        if (status === AwaitRenderStatus.error && promise._error instanceof (0, _router.AbortedDeferredError)) // Freeze the UI by throwing a never resolved promise
        throw neverSettledPromise;
        if (status === AwaitRenderStatus.error && !errorElement) // No errorElement, throw to the nearest route-level error boundary
        throw promise._error;
        if (status === AwaitRenderStatus.error) // Render via our errorElement
        return /*#__PURE__*/ _react.createElement(AwaitContext.Provider, {
            value: promise,
            children: errorElement
        });
        if (status === AwaitRenderStatus.success) // Render children with resolved value
        return /*#__PURE__*/ _react.createElement(AwaitContext.Provider, {
            value: promise,
            children: children
        });
        // Throw to the suspense boundary
        throw promise;
    }
}
/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on `<Await>`
 */ function ResolveAwait(_ref8) {
    let { children } = _ref8;
    let data = useAsyncValue();
    let toRender = typeof children === "function" ? children(data) : children;
    return /*#__PURE__*/ _react.createElement(_react.Fragment, null, toRender);
}
///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////
/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */ function createRoutesFromChildren(children, parentPath) {
    if (parentPath === void 0) parentPath = [];
    let routes = [];
    _react.Children.forEach(children, (element, index)=>{
        if (!/*#__PURE__*/ _react.isValidElement(element)) // Ignore non-elements. This allows people to more easily inline
        // conditionals in their route config.
        return;
        let treePath = [
            ...parentPath,
            index
        ];
        if (element.type === _react.Fragment) {
            // Transparently support React.Fragment and its children.
            routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
            return;
        }
        !(element.type === Route) && (0, _router.UNSAFE_invariant)(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>");
        !(!element.props.index || !element.props.children) && (0, _router.UNSAFE_invariant)(false, "An index route cannot have child routes.");
        let route = {
            id: element.props.id || treePath.join("-"),
            caseSensitive: element.props.caseSensitive,
            element: element.props.element,
            Component: element.props.Component,
            index: element.props.index,
            path: element.props.path,
            loader: element.props.loader,
            action: element.props.action,
            errorElement: element.props.errorElement,
            ErrorBoundary: element.props.ErrorBoundary,
            hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
            shouldRevalidate: element.props.shouldRevalidate,
            handle: element.props.handle,
            lazy: element.props.lazy
        };
        if (element.props.children) route.children = createRoutesFromChildren(element.props.children, treePath);
        routes.push(route);
    });
    return routes;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */ function renderMatches(matches) {
    return _renderMatches(matches);
}
function mapRouteProperties(route) {
    let updates = {
        // Note: this check also occurs in createRoutesFromChildren so update
        // there if you change this -- please and thank you!
        hasErrorBoundary: route.ErrorBoundary != null || route.errorElement != null
    };
    if (route.Component) {
        if (route.element) (0, _router.UNSAFE_warning)(false, "You should not include both `Component` and `element` on your route - `Component` will be used.");
        Object.assign(updates, {
            element: /*#__PURE__*/ _react.createElement(route.Component),
            Component: undefined
        });
    }
    if (route.HydrateFallback) {
        if (route.hydrateFallbackElement) (0, _router.UNSAFE_warning)(false, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.");
        Object.assign(updates, {
            hydrateFallbackElement: /*#__PURE__*/ _react.createElement(route.HydrateFallback),
            HydrateFallback: undefined
        });
    }
    if (route.ErrorBoundary) {
        if (route.errorElement) (0, _router.UNSAFE_warning)(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.");
        Object.assign(updates, {
            errorElement: /*#__PURE__*/ _react.createElement(route.ErrorBoundary),
            ErrorBoundary: undefined
        });
    }
    return updates;
}
function createMemoryRouter(routes, opts) {
    return (0, _router.createRouter)({
        basename: opts == null ? void 0 : opts.basename,
        future: _extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0, _router.createMemoryHistory)({
            initialEntries: opts == null ? void 0 : opts.initialEntries,
            initialIndex: opts == null ? void 0 : opts.initialIndex
        }),
        hydrationData: opts == null ? void 0 : opts.hydrationData,
        routes,
        mapRouteProperties,
        unstable_dataStrategy: opts == null ? void 0 : opts.unstable_dataStrategy
    }).initialize();
}

},{"react":"21dqq","@remix-run/router":"5ncDG","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"5ncDG":[function(require,module,exports) {
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//#endregion
parcelHelpers.export(exports, "AbortedDeferredError", ()=>AbortedDeferredError);
parcelHelpers.export(exports, "Action", ()=>Action);
parcelHelpers.export(exports, "IDLE_BLOCKER", ()=>IDLE_BLOCKER);
parcelHelpers.export(exports, "IDLE_FETCHER", ()=>IDLE_FETCHER);
parcelHelpers.export(exports, "IDLE_NAVIGATION", ()=>IDLE_NAVIGATION);
parcelHelpers.export(exports, "UNSAFE_DEFERRED_SYMBOL", ()=>UNSAFE_DEFERRED_SYMBOL);
parcelHelpers.export(exports, "UNSAFE_DeferredData", ()=>DeferredData);
parcelHelpers.export(exports, "UNSAFE_ErrorResponseImpl", ()=>ErrorResponseImpl);
parcelHelpers.export(exports, "UNSAFE_convertRouteMatchToUiMatch", ()=>convertRouteMatchToUiMatch);
parcelHelpers.export(exports, "UNSAFE_convertRoutesToDataRoutes", ()=>convertRoutesToDataRoutes);
parcelHelpers.export(exports, "UNSAFE_getResolveToMatches", ()=>getResolveToMatches);
parcelHelpers.export(exports, "UNSAFE_invariant", ()=>invariant);
parcelHelpers.export(exports, "UNSAFE_warning", ()=>warning);
parcelHelpers.export(exports, "createBrowserHistory", ()=>createBrowserHistory);
parcelHelpers.export(exports, "createHashHistory", ()=>createHashHistory);
parcelHelpers.export(exports, "createMemoryHistory", ()=>createMemoryHistory);
parcelHelpers.export(exports, "createPath", ()=>createPath);
parcelHelpers.export(exports, "createRouter", ()=>createRouter);
parcelHelpers.export(exports, "createStaticHandler", ()=>createStaticHandler);
parcelHelpers.export(exports, "defer", ()=>defer);
parcelHelpers.export(exports, "generatePath", ()=>generatePath);
parcelHelpers.export(exports, "getStaticContextFromError", ()=>getStaticContextFromError);
parcelHelpers.export(exports, "getToPathname", ()=>getToPathname);
parcelHelpers.export(exports, "isDeferredData", ()=>isDeferredData);
parcelHelpers.export(exports, "isRouteErrorResponse", ()=>isRouteErrorResponse);
parcelHelpers.export(exports, "joinPaths", ()=>joinPaths);
parcelHelpers.export(exports, "json", ()=>json);
parcelHelpers.export(exports, "matchPath", ()=>matchPath);
parcelHelpers.export(exports, "matchRoutes", ()=>matchRoutes);
parcelHelpers.export(exports, "normalizePathname", ()=>normalizePathname);
parcelHelpers.export(exports, "parsePath", ()=>parsePath);
parcelHelpers.export(exports, "redirect", ()=>redirect);
parcelHelpers.export(exports, "redirectDocument", ()=>redirectDocument);
parcelHelpers.export(exports, "resolvePath", ()=>resolvePath);
parcelHelpers.export(exports, "resolveTo", ()=>resolveTo);
parcelHelpers.export(exports, "stripBasename", ()=>stripBasename);
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
 * Actions represent the type of change to a location value.
 */ var Action;
(function(Action) {
    /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */ Action["Pop"] = "POP";
    /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */ Action["Push"] = "PUSH";
    /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */ Action["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */ function createMemoryHistory(options) {
    if (options === void 0) options = {};
    let { initialEntries = [
        "/"
    ], initialIndex, v5Compat = false } = options;
    let entries; // Declare so we can access from createMemoryLocation
    entries = initialEntries.map((entry, index)=>createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined));
    let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
    let action = Action.Pop;
    let listener = null;
    function clampIndex(n) {
        return Math.min(Math.max(n, 0), entries.length - 1);
    }
    function getCurrentLocation() {
        return entries[index];
    }
    function createMemoryLocation(to, state, key) {
        if (state === void 0) state = null;
        let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
        warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
        return location;
    }
    function createHref(to) {
        return typeof to === "string" ? to : createPath(to);
    }
    let history = {
        get index () {
            return index;
        },
        get action () {
            return action;
        },
        get location () {
            return getCurrentLocation();
        },
        createHref,
        createURL (to) {
            return new URL(createHref(to), "http://localhost");
        },
        encodeLocation (to) {
            let path = typeof to === "string" ? parsePath(to) : to;
            return {
                pathname: path.pathname || "",
                search: path.search || "",
                hash: path.hash || ""
            };
        },
        push (to, state) {
            action = Action.Push;
            let nextLocation = createMemoryLocation(to, state);
            index += 1;
            entries.splice(index, entries.length, nextLocation);
            if (v5Compat && listener) listener({
                action,
                location: nextLocation,
                delta: 1
            });
        },
        replace (to, state) {
            action = Action.Replace;
            let nextLocation = createMemoryLocation(to, state);
            entries[index] = nextLocation;
            if (v5Compat && listener) listener({
                action,
                location: nextLocation,
                delta: 0
            });
        },
        go (delta) {
            action = Action.Pop;
            let nextIndex = clampIndex(index + delta);
            let nextLocation = entries[nextIndex];
            index = nextIndex;
            if (listener) listener({
                action,
                location: nextLocation,
                delta
            });
        },
        listen (fn) {
            listener = fn;
            return ()=>{
                listener = null;
            };
        }
    };
    return history;
}
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */ function createBrowserHistory(options) {
    if (options === void 0) options = {};
    function createBrowserLocation(window1, globalHistory) {
        let { pathname, search, hash } = window1.location;
        return createLocation("", {
            pathname,
            search,
            hash
        }, // state defaults to `null` because `window.history.state` does
        globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
    }
    function createBrowserHref(window1, to) {
        return typeof to === "string" ? to : createPath(to);
    }
    return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */ function createHashHistory(options) {
    if (options === void 0) options = {};
    function createHashLocation(window1, globalHistory) {
        let { pathname = "/", search = "", hash = "" } = parsePath(window1.location.hash.substr(1));
        // Hash URL should always have a leading / just like window.location.pathname
        // does, so if an app ends up at a route like /#something then we add a
        // leading slash so all of our path-matching behaves the same as if it would
        // in a browser router.  This is particularly important when there exists a
        // root splat route (<Route path="*">) since that matches internally against
        // "/*" and we'd expect /#something to 404 in a hash router app.
        if (!pathname.startsWith("/") && !pathname.startsWith(".")) pathname = "/" + pathname;
        return createLocation("", {
            pathname,
            search,
            hash
        }, // state defaults to `null` because `window.history.state` does
        globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
    }
    function createHashHref(window1, to) {
        let base = window1.document.querySelector("base");
        let href = "";
        if (base && base.getAttribute("href")) {
            let url = window1.location.href;
            let hashIndex = url.indexOf("#");
            href = hashIndex === -1 ? url : url.slice(0, hashIndex);
        }
        return href + "#" + (typeof to === "string" ? to : createPath(to));
    }
    function validateHashLocation(location, to) {
        warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
    }
    return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
    if (value === false || value === null || typeof value === "undefined") throw new Error(message);
}
function warning(cond, message) {
    if (!cond) {
        // eslint-disable-next-line no-console
        if (typeof console !== "undefined") console.warn(message);
        try {
            // Welcome to debugging history!
            //
            // This error is thrown as a convenience, so you can more easily
            // find the source for a warning that appears in the console by
            // enabling "pause on exceptions" in your JavaScript debugger.
            throw new Error(message);
        // eslint-disable-next-line no-empty
        } catch (e) {}
    }
}
function createKey() {
    return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */ function getHistoryState(location, index) {
    return {
        usr: location.state,
        key: location.key,
        idx: index
    };
}
/**
 * Creates a Location object with a unique key from the given Path
 */ function createLocation(current, to, state, key) {
    if (state === void 0) state = null;
    let location = _extends({
        pathname: typeof current === "string" ? current : current.pathname,
        search: "",
        hash: ""
    }, typeof to === "string" ? parsePath(to) : to, {
        state,
        // TODO: This could be cleaned up.  push/replace should probably just take
        // full Locations now and avoid the need to run through this flow at all
        // But that's a pretty big refactor to the current test suite so going to
        // keep as is for the time being and just let any incoming keys take precedence
        key: to && to.key || key || createKey()
    });
    return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */ function createPath(_ref) {
    let { pathname = "/", search = "", hash = "" } = _ref;
    if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */ function parsePath(path) {
    let parsedPath = {};
    if (path) {
        let hashIndex = path.indexOf("#");
        if (hashIndex >= 0) {
            parsedPath.hash = path.substr(hashIndex);
            path = path.substr(0, hashIndex);
        }
        let searchIndex = path.indexOf("?");
        if (searchIndex >= 0) {
            parsedPath.search = path.substr(searchIndex);
            path = path.substr(0, searchIndex);
        }
        if (path) parsedPath.pathname = path;
    }
    return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
    if (options === void 0) options = {};
    let { window: window1 = document.defaultView, v5Compat = false } = options;
    let globalHistory = window1.history;
    let action = Action.Pop;
    let listener = null;
    let index = getIndex();
    // Index should only be null when we initialize. If not, it's because the
    // user called history.pushState or history.replaceState directly, in which
    // case we should log a warning as it will result in bugs.
    if (index == null) {
        index = 0;
        globalHistory.replaceState(_extends({}, globalHistory.state, {
            idx: index
        }), "");
    }
    function getIndex() {
        let state = globalHistory.state || {
            idx: null
        };
        return state.idx;
    }
    function handlePop() {
        action = Action.Pop;
        let nextIndex = getIndex();
        let delta = nextIndex == null ? null : nextIndex - index;
        index = nextIndex;
        if (listener) listener({
            action,
            location: history.location,
            delta
        });
    }
    function push(to, state) {
        action = Action.Push;
        let location = createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex() + 1;
        let historyState = getHistoryState(location, index);
        let url = history.createHref(location);
        // try...catch because iOS limits us to 100 pushState calls :/
        try {
            globalHistory.pushState(historyState, "", url);
        } catch (error) {
            // If the exception is because `state` can't be serialized, let that throw
            // outwards just like a replace call would so the dev knows the cause
            // https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
            // https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
            if (error instanceof DOMException && error.name === "DataCloneError") throw error;
            // They are going to lose state here, but there is no real
            // way to warn them about it since the page will refresh...
            window1.location.assign(url);
        }
        if (v5Compat && listener) listener({
            action,
            location: history.location,
            delta: 1
        });
    }
    function replace(to, state) {
        action = Action.Replace;
        let location = createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex();
        let historyState = getHistoryState(location, index);
        let url = history.createHref(location);
        globalHistory.replaceState(historyState, "", url);
        if (v5Compat && listener) listener({
            action,
            location: history.location,
            delta: 0
        });
    }
    function createURL(to) {
        // window.location.origin is "null" (the literal string value) in Firefox
        // under certain conditions, notably when serving from a local HTML file
        // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
        let base = window1.location.origin !== "null" ? window1.location.origin : window1.location.href;
        let href = typeof to === "string" ? to : createPath(to);
        // Treating this as a full URL will strip any trailing spaces so we need to
        // pre-encode them since they might be part of a matching splat param from
        // an ancestor route
        href = href.replace(/ $/, "%20");
        invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
        return new URL(href, base);
    }
    let history = {
        get action () {
            return action;
        },
        get location () {
            return getLocation(window1, globalHistory);
        },
        listen (fn) {
            if (listener) throw new Error("A history only accepts one active listener");
            window1.addEventListener(PopStateEventType, handlePop);
            listener = fn;
            return ()=>{
                window1.removeEventListener(PopStateEventType, handlePop);
                listener = null;
            };
        },
        createHref (to) {
            return createHref(window1, to);
        },
        createURL,
        encodeLocation (to) {
            // Encode a Location the same way window.location would
            let url = createURL(to);
            return {
                pathname: url.pathname,
                search: url.search,
                hash: url.hash
            };
        },
        push,
        replace,
        go (n) {
            return globalHistory.go(n);
        }
    };
    return history;
}
//#endregion
var ResultType;
(function(ResultType) {
    ResultType["data"] = "data";
    ResultType["deferred"] = "deferred";
    ResultType["redirect"] = "redirect";
    ResultType["error"] = "error";
})(ResultType || (ResultType = {}));
const immutableRouteKeys = new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "children"
]);
function isIndexRoute(route) {
    return route.index === true;
}
// Walk the route tree generating unique IDs where necessary, so we are working
// solely with AgnosticDataRouteObject's within the Router
function convertRoutesToDataRoutes(routes, mapRouteProperties, parentPath, manifest) {
    if (parentPath === void 0) parentPath = [];
    if (manifest === void 0) manifest = {};
    return routes.map((route, index)=>{
        let treePath = [
            ...parentPath,
            index
        ];
        let id = typeof route.id === "string" ? route.id : treePath.join("-");
        invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
        invariant(!manifest[id], 'Found a route id collision on id "' + id + '".  Route ' + "id's must be globally unique within Data Router usages");
        if (isIndexRoute(route)) {
            let indexRoute = _extends({}, route, mapRouteProperties(route), {
                id
            });
            manifest[id] = indexRoute;
            return indexRoute;
        } else {
            let pathOrLayoutRoute = _extends({}, route, mapRouteProperties(route), {
                id,
                children: undefined
            });
            manifest[id] = pathOrLayoutRoute;
            if (route.children) pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties, treePath, manifest);
            return pathOrLayoutRoute;
        }
    });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */ function matchRoutes(routes, locationArg, basename) {
    if (basename === void 0) basename = "/";
    let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    let pathname = stripBasename(location.pathname || "/", basename);
    if (pathname == null) return null;
    let branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    let matches = null;
    for(let i = 0; matches == null && i < branches.length; ++i){
        // Incoming pathnames are generally encoded from either window.location
        // or from router.navigate, but we want to match against the unencoded
        // paths in the route definitions.  Memory router locations won't be
        // encoded here but there also shouldn't be anything to decode so this
        // should be a safe operation.  This avoids needing matchRoutes to be
        // history-aware.
        let decoded = decodePath(pathname);
        matches = matchRouteBranch(branches[i], decoded);
    }
    return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
    let { route, pathname, params } = match;
    return {
        id: route.id,
        pathname,
        params,
        data: loaderData[route.id],
        handle: route.handle
    };
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
    if (branches === void 0) branches = [];
    if (parentsMeta === void 0) parentsMeta = [];
    if (parentPath === void 0) parentPath = "";
    let flattenRoute = (route, index, relativePath)=>{
        let meta = {
            relativePath: relativePath === undefined ? route.path || "" : relativePath,
            caseSensitive: route.caseSensitive === true,
            childrenIndex: index,
            route
        };
        if (meta.relativePath.startsWith("/")) {
            invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
            meta.relativePath = meta.relativePath.slice(parentPath.length);
        }
        let path = joinPaths([
            parentPath,
            meta.relativePath
        ]);
        let routesMeta = parentsMeta.concat(meta);
        // Add the children before adding this route to the array, so we traverse the
        // route tree depth-first and child routes appear before their parents in
        // the "flattened" version.
        if (route.children && route.children.length > 0) {
            invariant(// Our types know better, but runtime JS may not!
            // @ts-expect-error
            route.index !== true, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".'));
            flattenRoutes(route.children, branches, routesMeta, path);
        }
        // Routes without a path shouldn't ever match by themselves unless they are
        // index routes, so don't add them to the list of possible branches.
        if (route.path == null && !route.index) return;
        branches.push({
            path,
            score: computeScore(path, route.index),
            routesMeta
        });
    };
    routes.forEach((route, index)=>{
        var _route$path;
        // coarse-grain check for optional params
        if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) flattenRoute(route, index);
        else for (let exploded of explodeOptionalSegments(route.path))flattenRoute(route, index, exploded);
    });
    return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */ function explodeOptionalSegments(path) {
    let segments = path.split("/");
    if (segments.length === 0) return [];
    let [first, ...rest] = segments;
    // Optional path segments are denoted by a trailing `?`
    let isOptional = first.endsWith("?");
    // Compute the corresponding required segment: `foo?` -> `foo`
    let required = first.replace(/\?$/, "");
    if (rest.length === 0) // Intepret empty string as omitting an optional segment
    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [
        required,
        ""
    ] : [
        required
    ];
    let restExploded = explodeOptionalSegments(rest.join("/"));
    let result = [];
    // All child paths with the prefix.  Do this for all children before the
    // optional version for all children, so we get consistent ordering where the
    // parent optional aspect is preferred as required.  Otherwise, we can get
    // child sections interspersed where deeper optional segments are higher than
    // parent optional segments, where for example, /:two would explode _earlier_
    // then /:one.  By always including the parent as required _for all children_
    // first, we avoid this issue
    result.push(...restExploded.map((subpath)=>subpath === "" ? required : [
            required,
            subpath
        ].join("/")));
    // Then, if this is an optional value, add all child versions without
    if (isOptional) result.push(...restExploded);
    // for absolute paths, ensure `/` instead of empty segment
    return result.map((exploded)=>path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
    branches.sort((a, b)=>a.score !== b.score ? b.score - a.score // Higher score first
         : compareIndexes(a.routesMeta.map((meta)=>meta.childrenIndex), b.routesMeta.map((meta)=>meta.childrenIndex)));
}
const paramRe = /^:[\w-]+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s)=>s === "*";
function computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some(isSplat)) initialScore += splatPenalty;
    if (index) initialScore += indexRouteValue;
    return segments.filter((s)=>!isSplat(s)).reduce((score, segment)=>score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
    let siblings = a.length === b.length && a.slice(0, -1).every((n, i)=>n === b[i]);
    return siblings ? // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0;
}
function matchRouteBranch(branch, pathname) {
    let { routesMeta } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for(let i = 0; i < routesMeta.length; ++i){
        let meta = routesMeta[i];
        let end = i === routesMeta.length - 1;
        let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
        let match = matchPath({
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end
        }, remainingPathname);
        if (!match) return null;
        Object.assign(matchedParams, match.params);
        let route = meta.route;
        matches.push({
            // TODO: Can this as be avoided?
            params: matchedParams,
            pathname: joinPaths([
                matchedPathname,
                match.pathname
            ]),
            pathnameBase: normalizePathname(joinPaths([
                matchedPathname,
                match.pathnameBase
            ])),
            route
        });
        if (match.pathnameBase !== "/") matchedPathname = joinPaths([
            matchedPathname,
            match.pathnameBase
        ]);
    }
    return matches;
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/utils/generate-path
 */ function generatePath(originalPath, params) {
    if (params === void 0) params = {};
    let path = originalPath;
    if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
        warning(false, 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
        path = path.replace(/\*$/, "/*");
    }
    // ensure `/` is added at the beginning if the path is absolute
    const prefix = path.startsWith("/") ? "/" : "";
    const stringify = (p)=>p == null ? "" : typeof p === "string" ? p : String(p);
    const segments = path.split(/\/+/).map((segment, index, array)=>{
        const isLastSegment = index === array.length - 1;
        // only apply the splat if it's the last segment
        if (isLastSegment && segment === "*") {
            const star = "*";
            // Apply the splat
            return stringify(params[star]);
        }
        const keyMatch = segment.match(/^:([\w-]+)(\??)$/);
        if (keyMatch) {
            const [, key, optional] = keyMatch;
            let param = params[key];
            invariant(optional === "?" || param != null, 'Missing ":' + key + '" param');
            return stringify(param);
        }
        // Remove any optional markers from optional static segments
        return segment.replace(/\?$/g, "");
    })// Remove empty segments
    .filter((segment)=>!!segment);
    return prefix + segments.join("/");
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */ function matchPath(pattern, pathname) {
    if (typeof pattern === "string") pattern = {
        path: pattern,
        caseSensitive: false,
        end: true
    };
    let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
    let match = pathname.match(matcher);
    if (!match) return null;
    let matchedPathname = match[0];
    let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
    let captureGroups = match.slice(1);
    let params = compiledParams.reduce((memo, _ref, index)=>{
        let { paramName, isOptional } = _ref;
        // We need to compute the pathnameBase here using the raw splat value
        // instead of using params["*"] later because it will be decoded then
        if (paramName === "*") {
            let splatValue = captureGroups[index] || "";
            pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
        }
        const value = captureGroups[index];
        if (isOptional && !value) memo[paramName] = undefined;
        else memo[paramName] = (value || "").replace(/%2F/g, "/");
        return memo;
    }, {});
    return {
        params,
        pathname: matchedPathname,
        pathnameBase,
        pattern
    };
}
function compilePath(path, caseSensitive, end) {
    if (caseSensitive === void 0) caseSensitive = false;
    if (end === void 0) end = true;
    warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
    let params = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
    .replace(/^\/*/, "/") // Make sure it has a leading /
    .replace(/[\\.*+^${}|()[\]]/g, "\\$&") // Escape special regex chars
    .replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional)=>{
        params.push({
            paramName,
            isOptional: isOptional != null
        });
        return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
    });
    if (path.endsWith("*")) {
        params.push({
            paramName: "*"
        });
        regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
         : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
    } else if (end) // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
    else if (path !== "" && path !== "/") // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex, so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
    let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
    return [
        matcher,
        params
    ];
}
function decodePath(value) {
    try {
        return value.split("/").map((v)=>decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
    } catch (error) {
        warning(false, 'The URL path "' + value + '" could not be decoded because it is is a ' + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
        return value;
    }
}
/**
 * @private
 */ function stripBasename(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) return null;
    // We want to leave trailing slash behavior in the user's control, so if they
    // specify a basename with a trailing slash, we should support it
    let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    let nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") // pathname does not start with basename/
    return null;
    return pathname.slice(startIndex) || "/";
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */ function resolvePath(to, fromPathname) {
    if (fromPathname === void 0) fromPathname = "/";
    let { pathname: toPathname, search = "", hash = "" } = typeof to === "string" ? parsePath(to) : to;
    let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
    return {
        pathname,
        search: normalizeSearch(search),
        hash: normalizeHash(hash)
    };
}
function resolvePathname(relativePath, fromPathname) {
    let segments = fromPathname.replace(/\/+$/, "").split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment)=>{
        if (segment === "..") // Keep the root "" segment so the pathname starts at /
        {
            if (segments.length > 1) segments.pop();
        } else if (segment !== ".") segments.push(segment);
    });
    return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
    return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */ function getPathContributingMatches(matches) {
    return matches.filter((match, index)=>index === 0 || match.route.path && match.route.path.length > 0);
}
// Return the array of pathnames for the current route matches - used to
// generate the routePathnames input for resolveTo()
function getResolveToMatches(matches, v7_relativeSplatPath) {
    let pathMatches = getPathContributingMatches(matches);
    // When v7_relativeSplatPath is enabled, use the full pathname for the leaf
    // match so we include splat values for "." links.  See:
    // https://github.com/remix-run/react-router/issues/11052#issuecomment-1836589329
    if (v7_relativeSplatPath) return pathMatches.map((match, idx)=>idx === matches.length - 1 ? match.pathname : match.pathnameBase);
    return pathMatches.map((match)=>match.pathnameBase);
}
/**
 * @private
 */ function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
    if (isPathRelative === void 0) isPathRelative = false;
    let to;
    if (typeof toArg === "string") to = parsePath(toArg);
    else {
        to = _extends({}, toArg);
        invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
        invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
        invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
    }
    let isEmptyPath = toArg === "" || to.pathname === "";
    let toPathname = isEmptyPath ? "/" : to.pathname;
    let from;
    // Routing is relative to the current pathname if explicitly requested.
    //
    // If a pathname is explicitly provided in `to`, it should be relative to the
    // route context. This is explained in `Note on `<Link to>` values` in our
    // migration guide from v5 as a means of disambiguation between `to` values
    // that begin with `/` and those that do not. However, this is problematic for
    // `to` values that do not provide a pathname. `to` can simply be a search or
    // hash string, in which case we should assume that the navigation is relative
    // to the current location's pathname and *not* the route pathname.
    if (toPathname == null) from = locationPathname;
    else {
        let routePathnameIndex = routePathnames.length - 1;
        // With relative="route" (the default), each leading .. segment means
        // "go up one route" instead of "go up one URL segment".  This is a key
        // difference from how <a href> works and a major reason we call this a
        // "to" value instead of a "href".
        if (!isPathRelative && toPathname.startsWith("..")) {
            let toSegments = toPathname.split("/");
            while(toSegments[0] === ".."){
                toSegments.shift();
                routePathnameIndex -= 1;
            }
            to.pathname = toSegments.join("/");
        }
        from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = resolvePath(to, from);
    // Ensure the pathname has a trailing slash if the original "to" had one
    let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    // Or if this was a link to the current path which has a trailing slash
    let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) path.pathname += "/";
    return path;
}
/**
 * @private
 */ function getToPathname(to) {
    // Empty strings should be treated the same as / paths
    return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
/**
 * @private
 */ const joinPaths = (paths)=>paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */ const normalizePathname = (pathname)=>pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */ const normalizeSearch = (search)=>!search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */ const normalizeHash = (hash)=>!hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 */ const json = function json(data, init) {
    if (init === void 0) init = {};
    let responseInit = typeof init === "number" ? {
        status: init
    } : init;
    let headers = new Headers(responseInit.headers);
    if (!headers.has("Content-Type")) headers.set("Content-Type", "application/json; charset=utf-8");
    return new Response(JSON.stringify(data), _extends({}, responseInit, {
        headers
    }));
};
class AbortedDeferredError extends Error {
}
class DeferredData {
    constructor(data, responseInit){
        this.pendingKeysSet = new Set();
        this.subscribers = new Set();
        this.deferredKeys = [];
        invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects");
        // Set up an AbortController + Promise we can race against to exit early
        // cancellation
        let reject;
        this.abortPromise = new Promise((_, r)=>reject = r);
        this.controller = new AbortController();
        let onAbort = ()=>reject(new AbortedDeferredError("Deferred data aborted"));
        this.unlistenAbortSignal = ()=>this.controller.signal.removeEventListener("abort", onAbort);
        this.controller.signal.addEventListener("abort", onAbort);
        this.data = Object.entries(data).reduce((acc, _ref2)=>{
            let [key, value] = _ref2;
            return Object.assign(acc, {
                [key]: this.trackPromise(key, value)
            });
        }, {});
        if (this.done) // All incoming values were resolved
        this.unlistenAbortSignal();
        this.init = responseInit;
    }
    trackPromise(key, value) {
        if (!(value instanceof Promise)) return value;
        this.deferredKeys.push(key);
        this.pendingKeysSet.add(key);
        // We store a little wrapper promise that will be extended with
        // _data/_error props upon resolve/reject
        let promise = Promise.race([
            value,
            this.abortPromise
        ]).then((data)=>this.onSettle(promise, key, undefined, data), (error)=>this.onSettle(promise, key, error));
        // Register rejection listeners to avoid uncaught promise rejections on
        // errors or aborted deferred values
        promise.catch(()=>{});
        Object.defineProperty(promise, "_tracked", {
            get: ()=>true
        });
        return promise;
    }
    onSettle(promise, key, error, data) {
        if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
            this.unlistenAbortSignal();
            Object.defineProperty(promise, "_error", {
                get: ()=>error
            });
            return Promise.reject(error);
        }
        this.pendingKeysSet.delete(key);
        if (this.done) // Nothing left to abort!
        this.unlistenAbortSignal();
        // If the promise was resolved/rejected with undefined, we'll throw an error as you
        // should always resolve with a value or null
        if (error === undefined && data === undefined) {
            let undefinedError = new Error('Deferred data for key "' + key + '" resolved/rejected with `undefined`, ' + "you must resolve/reject with a value or `null`.");
            Object.defineProperty(promise, "_error", {
                get: ()=>undefinedError
            });
            this.emit(false, key);
            return Promise.reject(undefinedError);
        }
        if (data === undefined) {
            Object.defineProperty(promise, "_error", {
                get: ()=>error
            });
            this.emit(false, key);
            return Promise.reject(error);
        }
        Object.defineProperty(promise, "_data", {
            get: ()=>data
        });
        this.emit(false, key);
        return data;
    }
    emit(aborted, settledKey) {
        this.subscribers.forEach((subscriber)=>subscriber(aborted, settledKey));
    }
    subscribe(fn) {
        this.subscribers.add(fn);
        return ()=>this.subscribers.delete(fn);
    }
    cancel() {
        this.controller.abort();
        this.pendingKeysSet.forEach((v, k)=>this.pendingKeysSet.delete(k));
        this.emit(true);
    }
    async resolveData(signal) {
        let aborted = false;
        if (!this.done) {
            let onAbort = ()=>this.cancel();
            signal.addEventListener("abort", onAbort);
            aborted = await new Promise((resolve)=>{
                this.subscribe((aborted)=>{
                    signal.removeEventListener("abort", onAbort);
                    if (aborted || this.done) resolve(aborted);
                });
            });
        }
        return aborted;
    }
    get done() {
        return this.pendingKeysSet.size === 0;
    }
    get unwrappedData() {
        invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
        return Object.entries(this.data).reduce((acc, _ref3)=>{
            let [key, value] = _ref3;
            return Object.assign(acc, {
                [key]: unwrapTrackedPromise(value)
            });
        }, {});
    }
    get pendingKeys() {
        return Array.from(this.pendingKeysSet);
    }
}
function isTrackedPromise(value) {
    return value instanceof Promise && value._tracked === true;
}
function unwrapTrackedPromise(value) {
    if (!isTrackedPromise(value)) return value;
    if (value._error) throw value._error;
    return value._data;
}
const defer = function defer(data, init) {
    if (init === void 0) init = {};
    let responseInit = typeof init === "number" ? {
        status: init
    } : init;
    return new DeferredData(data, responseInit);
};
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */ const redirect = function redirect(url, init) {
    if (init === void 0) init = 302;
    let responseInit = init;
    if (typeof responseInit === "number") responseInit = {
        status: responseInit
    };
    else if (typeof responseInit.status === "undefined") responseInit.status = 302;
    let headers = new Headers(responseInit.headers);
    headers.set("Location", url);
    return new Response(null, _extends({}, responseInit, {
        headers
    }));
};
/**
 * A redirect response that will force a document reload to the new location.
 * Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */ const redirectDocument = (url, init)=>{
    let response = redirect(url, init);
    response.headers.set("X-Remix-Reload-Document", "true");
    return response;
};
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 *
 * We don't export the class for public use since it's an implementation
 * detail, but we export the interface above so folks can build their own
 * abstractions around instances via isRouteErrorResponse()
 */ class ErrorResponseImpl {
    constructor(status, statusText, data, internal){
        if (internal === void 0) internal = false;
        this.status = status;
        this.statusText = statusText || "";
        this.internal = internal;
        if (data instanceof Error) {
            this.data = data.toString();
            this.error = data;
        } else this.data = data;
    }
}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */ function isRouteErrorResponse(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
const validMutationMethodsArr = [
    "post",
    "put",
    "patch",
    "delete"
];
const validMutationMethods = new Set(validMutationMethodsArr);
const validRequestMethodsArr = [
    "get",
    ...validMutationMethodsArr
];
const validRequestMethods = new Set(validRequestMethodsArr);
const redirectStatusCodes = new Set([
    301,
    302,
    303,
    307,
    308
]);
const redirectPreserveMethodStatusCodes = new Set([
    307,
    308
]);
const IDLE_NAVIGATION = {
    state: "idle",
    location: undefined,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined
};
const IDLE_FETCHER = {
    state: "idle",
    data: undefined,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined
};
const IDLE_BLOCKER = {
    state: "unblocked",
    proceed: undefined,
    reset: undefined,
    location: undefined
};
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const defaultMapRouteProperties = (route)=>({
        hasErrorBoundary: Boolean(route.hasErrorBoundary)
    });
const TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////
/**
 * Create a router and listen to history POP navigations
 */ function createRouter(init) {
    const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : undefined;
    const isBrowser = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
    const isServer = !isBrowser;
    invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let mapRouteProperties;
    if (init.mapRouteProperties) mapRouteProperties = init.mapRouteProperties;
    else if (init.detectErrorBoundary) {
        // If they are still using the deprecated version, wrap it with the new API
        let detectErrorBoundary = init.detectErrorBoundary;
        mapRouteProperties = (route)=>({
                hasErrorBoundary: detectErrorBoundary(route)
            });
    } else mapRouteProperties = defaultMapRouteProperties;
    // Routes keyed by ID
    let manifest = {};
    // Routes in tree format for matching
    let dataRoutes = convertRoutesToDataRoutes(init.routes, mapRouteProperties, undefined, manifest);
    let inFlightDataRoutes;
    let basename = init.basename || "/";
    let dataStrategyImpl = init.unstable_dataStrategy || defaultDataStrategy;
    // Config driven behavior flags
    let future = _extends({
        v7_fetcherPersist: false,
        v7_normalizeFormMethod: false,
        v7_partialHydration: false,
        v7_prependBasename: false,
        v7_relativeSplatPath: false,
        unstable_skipActionErrorRevalidation: false
    }, init.future);
    // Cleanup function for history
    let unlistenHistory = null;
    // Externally-provided functions to call on all state changes
    let subscribers = new Set();
    // Externally-provided object to hold scroll restoration locations during routing
    let savedScrollPositions = null;
    // Externally-provided function to get scroll restoration keys
    let getScrollRestorationKey = null;
    // Externally-provided function to get current scroll position
    let getScrollPosition = null;
    // One-time flag to control the initial hydration scroll restoration.  Because
    // we don't get the saved positions from <ScrollRestoration /> until _after_
    // the initial render, we need to manually trigger a separate updateState to
    // send along the restoreScrollPosition
    // Set to true if we have `hydrationData` since we assume we were SSR'd and that
    // SSR did the initial scroll restoration.
    let initialScrollRestored = init.hydrationData != null;
    let initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
    let initialErrors = null;
    if (initialMatches == null) {
        // If we do not match a user-provided-route, fall back to the root
        // to allow the error boundary to take over
        let error = getInternalRouterError(404, {
            pathname: init.history.location.pathname
        });
        let { matches, route } = getShortCircuitMatches(dataRoutes);
        initialMatches = matches;
        initialErrors = {
            [route.id]: error
        };
    }
    let initialized;
    let hasLazyRoutes = initialMatches.some((m)=>m.route.lazy);
    let hasLoaders = initialMatches.some((m)=>m.route.loader);
    if (hasLazyRoutes) // All initialMatches need to be loaded before we're ready.  If we have lazy
    // functions around still then we'll need to run them in initialize()
    initialized = false;
    else if (!hasLoaders) // If we've got no loaders to run, then we're good to go
    initialized = true;
    else if (future.v7_partialHydration) {
        // If partial hydration is enabled, we're initialized so long as we were
        // provided with hydrationData for every route with a loader, and no loaders
        // were marked for explicit hydration
        let loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
        let errors = init.hydrationData ? init.hydrationData.errors : null;
        let isRouteInitialized = (m)=>{
            // No loader, nothing to initialize
            if (!m.route.loader) return true;
            // Explicitly opting-in to running on hydration
            if (typeof m.route.loader === "function" && m.route.loader.hydrate === true) return false;
            // Otherwise, initialized if hydrated with data or an error
            return loaderData && loaderData[m.route.id] !== undefined || errors && errors[m.route.id] !== undefined;
        };
        // If errors exist, don't consider routes below the boundary
        if (errors) {
            let idx = initialMatches.findIndex((m)=>errors[m.route.id] !== undefined);
            initialized = initialMatches.slice(0, idx + 1).every(isRouteInitialized);
        } else initialized = initialMatches.every(isRouteInitialized);
    } else // Without partial hydration - we're initialized if we were provided any
    // hydrationData - which is expected to be complete
    initialized = init.hydrationData != null;
    let router;
    let state = {
        historyAction: init.history.action,
        location: init.history.location,
        matches: initialMatches,
        initialized,
        navigation: IDLE_NAVIGATION,
        // Don't restore on initial updateState() if we were SSR'd
        restoreScrollPosition: init.hydrationData != null ? false : null,
        preventScrollReset: false,
        revalidation: "idle",
        loaderData: init.hydrationData && init.hydrationData.loaderData || {},
        actionData: init.hydrationData && init.hydrationData.actionData || null,
        errors: init.hydrationData && init.hydrationData.errors || initialErrors,
        fetchers: new Map(),
        blockers: new Map()
    };
    // -- Stateful internal variables to manage navigations --
    // Current navigation in progress (to be committed in completeNavigation)
    let pendingAction = Action.Pop;
    // Should the current navigation prevent the scroll reset if scroll cannot
    // be restored?
    let pendingPreventScrollReset = false;
    // AbortController for the active navigation
    let pendingNavigationController;
    // Should the current navigation enable document.startViewTransition?
    let pendingViewTransitionEnabled = false;
    // Store applied view transitions so we can apply them on POP
    let appliedViewTransitions = new Map();
    // Cleanup function for persisting applied transitions to sessionStorage
    let removePageHideEventListener = null;
    // We use this to avoid touching history in completeNavigation if a
    // revalidation is entirely uninterrupted
    let isUninterruptedRevalidation = false;
    // Use this internal flag to force revalidation of all loaders:
    //  - submissions (completed or interrupted)
    //  - useRevalidator()
    //  - X-Remix-Revalidate (from redirect)
    let isRevalidationRequired = false;
    // Use this internal array to capture routes that require revalidation due
    // to a cancelled deferred on action submission
    let cancelledDeferredRoutes = [];
    // Use this internal array to capture fetcher loads that were cancelled by an
    // action navigation and require revalidation
    let cancelledFetcherLoads = [];
    // AbortControllers for any in-flight fetchers
    let fetchControllers = new Map();
    // Track loads based on the order in which they started
    let incrementingLoadId = 0;
    // Track the outstanding pending navigation data load to be compared against
    // the globally incrementing load when a fetcher load lands after a completed
    // navigation
    let pendingNavigationLoadId = -1;
    // Fetchers that triggered data reloads as a result of their actions
    let fetchReloadIds = new Map();
    // Fetchers that triggered redirect navigations
    let fetchRedirectIds = new Set();
    // Most recent href/match for fetcher.load calls for fetchers
    let fetchLoadMatches = new Map();
    // Ref-count mounted fetchers so we know when it's ok to clean them up
    let activeFetchers = new Map();
    // Fetchers that have requested a delete when using v7_fetcherPersist,
    // they'll be officially removed after they return to idle
    let deletedFetchers = new Set();
    // Store DeferredData instances for active route matches.  When a
    // route loader returns defer() we stick one in here.  Then, when a nested
    // promise resolves we update loaderData.  If a new navigation starts we
    // cancel active deferreds for eliminated routes.
    let activeDeferreds = new Map();
    // Store blocker functions in a separate Map outside of router state since
    // we don't need to update UI state if they change
    let blockerFunctions = new Map();
    // Flag to ignore the next history update, so we can revert the URL change on
    // a POP navigation that was blocked by the user without touching router state
    let ignoreNextHistoryUpdate = false;
    // Initialize the router, all side effects should be kicked off from here.
    // Implemented as a Fluent API for ease of:
    //   let router = createRouter(init).initialize();
    function initialize() {
        // If history informs us of a POP navigation, start the navigation but do not update
        // state.  We'll update our own state once the navigation completes
        unlistenHistory = init.history.listen((_ref)=>{
            let { action: historyAction, location, delta } = _ref;
            // Ignore this event if it was just us resetting the URL from a
            // blocked POP navigation
            if (ignoreNextHistoryUpdate) {
                ignoreNextHistoryUpdate = false;
                return;
            }
            warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
            let blockerKey = shouldBlockNavigation({
                currentLocation: state.location,
                nextLocation: location,
                historyAction
            });
            if (blockerKey && delta != null) {
                // Restore the URL to match the current UI, but don't update router state
                ignoreNextHistoryUpdate = true;
                init.history.go(delta * -1);
                // Put the blocker into a blocked state
                updateBlocker(blockerKey, {
                    state: "blocked",
                    location,
                    proceed () {
                        updateBlocker(blockerKey, {
                            state: "proceeding",
                            proceed: undefined,
                            reset: undefined,
                            location
                        });
                        // Re-do the same POP navigation we just blocked
                        init.history.go(delta);
                    },
                    reset () {
                        let blockers = new Map(state.blockers);
                        blockers.set(blockerKey, IDLE_BLOCKER);
                        updateState({
                            blockers
                        });
                    }
                });
                return;
            }
            return startNavigation(historyAction, location);
        });
        if (isBrowser) {
            // FIXME: This feels gross.  How can we cleanup the lines between
            // scrollRestoration/appliedTransitions persistance?
            restoreAppliedTransitions(routerWindow, appliedViewTransitions);
            let _saveAppliedTransitions = ()=>persistAppliedTransitions(routerWindow, appliedViewTransitions);
            routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
            removePageHideEventListener = ()=>routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
        }
        // Kick off initial data load if needed.  Use Pop to avoid modifying history
        // Note we don't do any handling of lazy here.  For SPA's it'll get handled
        // in the normal navigation flow.  For SSR it's expected that lazy modules are
        // resolved prior to router creation since we can't go into a fallbackElement
        // UI for SSR'd apps
        if (!state.initialized) startNavigation(Action.Pop, state.location, {
            initialHydration: true
        });
        return router;
    }
    // Clean up a router and it's side effects
    function dispose() {
        if (unlistenHistory) unlistenHistory();
        if (removePageHideEventListener) removePageHideEventListener();
        subscribers.clear();
        pendingNavigationController && pendingNavigationController.abort();
        state.fetchers.forEach((_, key)=>deleteFetcher(key));
        state.blockers.forEach((_, key)=>deleteBlocker(key));
    }
    // Subscribe to state updates for the router
    function subscribe(fn) {
        subscribers.add(fn);
        return ()=>subscribers.delete(fn);
    }
    // Update our state and notify the calling context of the change
    function updateState(newState, opts) {
        if (opts === void 0) opts = {};
        state = _extends({}, state, newState);
        // Prep fetcher cleanup so we can tell the UI which fetcher data entries
        // can be removed
        let completedFetchers = [];
        let deletedFetchersKeys = [];
        if (future.v7_fetcherPersist) state.fetchers.forEach((fetcher, key)=>{
            if (fetcher.state === "idle") {
                if (deletedFetchers.has(key)) // Unmounted from the UI and can be totally removed
                deletedFetchersKeys.push(key);
                else // Returned to idle but still mounted in the UI, so semi-remains for
                // revalidations and such
                completedFetchers.push(key);
            }
        });
        // Iterate over a local copy so that if flushSync is used and we end up
        // removing and adding a new subscriber due to the useCallback dependencies,
        // we don't get ourselves into a loop calling the new subscriber immediately
        [
            ...subscribers
        ].forEach((subscriber)=>subscriber(state, {
                deletedFetchers: deletedFetchersKeys,
                unstable_viewTransitionOpts: opts.viewTransitionOpts,
                unstable_flushSync: opts.flushSync === true
            }));
        // Remove idle fetchers from state since we only care about in-flight fetchers.
        if (future.v7_fetcherPersist) {
            completedFetchers.forEach((key)=>state.fetchers.delete(key));
            deletedFetchersKeys.forEach((key)=>deleteFetcher(key));
        }
    }
    // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
    // and setting state.[historyAction/location/matches] to the new route.
    // - Location is a required param
    // - Navigation will always be set to IDLE_NAVIGATION
    // - Can pass any other state in newState
    function completeNavigation(location, newState, _temp) {
        var _location$state, _location$state2;
        let { flushSync } = _temp === void 0 ? {} : _temp;
        // Deduce if we're in a loading/actionReload state:
        // - We have committed actionData in the store
        // - The current navigation was a mutation submission
        // - We're past the submitting state and into the loading state
        // - The location being loaded is not the result of a redirect
        let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
        let actionData;
        if (newState.actionData) {
            if (Object.keys(newState.actionData).length > 0) actionData = newState.actionData;
            else // Empty actionData -> clear prior actionData due to an action error
            actionData = null;
        } else if (isActionReload) // Keep the current data if we're wrapping up the action reload
        actionData = state.actionData;
        else // Clear actionData on any other completed navigations
        actionData = null;
        // Always preserve any existing loaderData from re-used routes
        let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
        // On a successful navigation we can assume we got through all blockers
        // so we can start fresh
        let blockers = state.blockers;
        if (blockers.size > 0) {
            blockers = new Map(blockers);
            blockers.forEach((_, k)=>blockers.set(k, IDLE_BLOCKER));
        }
        // Always respect the user flag.  Otherwise don't reset on mutation
        // submission navigations unless they redirect
        let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
        if (inFlightDataRoutes) {
            dataRoutes = inFlightDataRoutes;
            inFlightDataRoutes = undefined;
        }
        if (isUninterruptedRevalidation) ;
        else if (pendingAction === Action.Pop) ;
        else if (pendingAction === Action.Push) init.history.push(location, location.state);
        else if (pendingAction === Action.Replace) init.history.replace(location, location.state);
        let viewTransitionOpts;
        // On POP, enable transitions if they were enabled on the original navigation
        if (pendingAction === Action.Pop) {
            // Forward takes precedence so they behave like the original navigation
            let priorPaths = appliedViewTransitions.get(state.location.pathname);
            if (priorPaths && priorPaths.has(location.pathname)) viewTransitionOpts = {
                currentLocation: state.location,
                nextLocation: location
            };
            else if (appliedViewTransitions.has(location.pathname)) // If we don't have a previous forward nav, assume we're popping back to
            // the new location and enable if that location previously enabled
            viewTransitionOpts = {
                currentLocation: location,
                nextLocation: state.location
            };
        } else if (pendingViewTransitionEnabled) {
            // Store the applied transition on PUSH/REPLACE
            let toPaths = appliedViewTransitions.get(state.location.pathname);
            if (toPaths) toPaths.add(location.pathname);
            else {
                toPaths = new Set([
                    location.pathname
                ]);
                appliedViewTransitions.set(state.location.pathname, toPaths);
            }
            viewTransitionOpts = {
                currentLocation: state.location,
                nextLocation: location
            };
        }
        updateState(_extends({}, newState, {
            actionData,
            loaderData,
            historyAction: pendingAction,
            location,
            initialized: true,
            navigation: IDLE_NAVIGATION,
            revalidation: "idle",
            restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
            preventScrollReset,
            blockers
        }), {
            viewTransitionOpts,
            flushSync: flushSync === true
        });
        // Reset stateful navigation vars
        pendingAction = Action.Pop;
        pendingPreventScrollReset = false;
        pendingViewTransitionEnabled = false;
        isUninterruptedRevalidation = false;
        isRevalidationRequired = false;
        cancelledDeferredRoutes = [];
        cancelledFetcherLoads = [];
    }
    // Trigger a navigation event, which can either be a numerical POP or a PUSH
    // replace with an optional submission
    async function navigate(to, opts) {
        if (typeof to === "number") {
            init.history.go(to);
            return;
        }
        let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, to, future.v7_relativeSplatPath, opts == null ? void 0 : opts.fromRouteId, opts == null ? void 0 : opts.relative);
        let { path, submission, error } = normalizeNavigateOptions(future.v7_normalizeFormMethod, false, normalizedPath, opts);
        let currentLocation = state.location;
        let nextLocation = createLocation(state.location, path, opts && opts.state);
        // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
        // URL from window.location, so we need to encode it here so the behavior
        // remains the same as POP and non-data-router usages.  new URL() does all
        // the same encoding we'd get from a history.pushState/window.location read
        // without having to touch history
        nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
        let userReplace = opts && opts.replace != null ? opts.replace : undefined;
        let historyAction = Action.Push;
        if (userReplace === true) historyAction = Action.Replace;
        else if (userReplace === false) ;
        else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) // By default on submissions to the current location we REPLACE so that
        // users don't have to double-click the back button to get to the prior
        // location.  If the user redirects to a different location from the
        // action/loader this will be ignored and the redirect will be a PUSH
        historyAction = Action.Replace;
        let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
        let flushSync = (opts && opts.unstable_flushSync) === true;
        let blockerKey = shouldBlockNavigation({
            currentLocation,
            nextLocation,
            historyAction
        });
        if (blockerKey) {
            // Put the blocker into a blocked state
            updateBlocker(blockerKey, {
                state: "blocked",
                location: nextLocation,
                proceed () {
                    updateBlocker(blockerKey, {
                        state: "proceeding",
                        proceed: undefined,
                        reset: undefined,
                        location: nextLocation
                    });
                    // Send the same navigation through
                    navigate(to, opts);
                },
                reset () {
                    let blockers = new Map(state.blockers);
                    blockers.set(blockerKey, IDLE_BLOCKER);
                    updateState({
                        blockers
                    });
                }
            });
            return;
        }
        return await startNavigation(historyAction, nextLocation, {
            submission,
            // Send through the formData serialization error if we have one so we can
            // render at the right error boundary after we match routes
            pendingError: error,
            preventScrollReset,
            replace: opts && opts.replace,
            enableViewTransition: opts && opts.unstable_viewTransition,
            flushSync
        });
    }
    // Revalidate all current loaders.  If a navigation is in progress or if this
    // is interrupted by a navigation, allow this to "succeed" by calling all
    // loaders during the next loader round
    function revalidate() {
        interruptActiveLoads();
        updateState({
            revalidation: "loading"
        });
        // If we're currently submitting an action, we don't need to start a new
        // navigation, we'll just let the follow up loader execution call all loaders
        if (state.navigation.state === "submitting") return;
        // If we're currently in an idle state, start a new navigation for the current
        // action/location and mark it as uninterrupted, which will skip the history
        // update in completeNavigation
        if (state.navigation.state === "idle") {
            startNavigation(state.historyAction, state.location, {
                startUninterruptedRevalidation: true
            });
            return;
        }
        // Otherwise, if we're currently in a loading state, just start a new
        // navigation to the navigation.location but do not trigger an uninterrupted
        // revalidation so that history correctly updates once the navigation completes
        startNavigation(pendingAction || state.historyAction, state.navigation.location, {
            overrideNavigation: state.navigation
        });
    }
    // Start a navigation to the given action/location.  Can optionally provide a
    // overrideNavigation which will override the normalLoad in the case of a redirect
    // navigation
    async function startNavigation(historyAction, location, opts) {
        // Abort any in-progress navigations and start a new one. Unset any ongoing
        // uninterrupted revalidations unless told otherwise, since we want this
        // new navigation to update history normally
        pendingNavigationController && pendingNavigationController.abort();
        pendingNavigationController = null;
        pendingAction = historyAction;
        isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
        // Save the current scroll position every time we start a new navigation,
        // and track whether we should reset scroll on completion
        saveScrollPosition(state.location, state.matches);
        pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
        pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let loadingNavigation = opts && opts.overrideNavigation;
        let matches = matchRoutes(routesToUse, location, basename);
        let flushSync = (opts && opts.flushSync) === true;
        // Short circuit with a 404 on the root error boundary if we match nothing
        if (!matches) {
            let error = getInternalRouterError(404, {
                pathname: location.pathname
            });
            let { matches: notFoundMatches, route } = getShortCircuitMatches(routesToUse);
            // Cancel all pending deferred on 404s since we don't keep any routes
            cancelActiveDeferreds();
            completeNavigation(location, {
                matches: notFoundMatches,
                loaderData: {},
                errors: {
                    [route.id]: error
                }
            }, {
                flushSync
            });
            return;
        }
        // Short circuit if it's only a hash change and not a revalidation or
        // mutation submission.
        //
        // Ignore on initial page loads because since the initial load will always
        // be "same hash".  For example, on /page#hash and submit a <Form method="post">
        // which will default to a navigation to /page
        if (state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
            completeNavigation(location, {
                matches
            }, {
                flushSync
            });
            return;
        }
        // Create a controller/Request for this navigation
        pendingNavigationController = new AbortController();
        let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
        let pendingActionResult;
        if (opts && opts.pendingError) // If we have a pendingError, it means the user attempted a GET submission
        // with binary FormData so assign here and skip to handleLoaders.  That
        // way we handle calling loaders above the boundary etc.  It's not really
        // different from an actionError in that sense.
        pendingActionResult = [
            findNearestBoundary(matches).route.id,
            {
                type: ResultType.error,
                error: opts.pendingError
            }
        ];
        else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
            // Call action if we received an action submission
            let actionResult = await handleAction(request, location, opts.submission, matches, {
                replace: opts.replace,
                flushSync
            });
            if (actionResult.shortCircuited) return;
            pendingActionResult = actionResult.pendingActionResult;
            loadingNavigation = getLoadingNavigation(location, opts.submission);
            flushSync = false;
            // Create a GET request for the loaders
            request = createClientSideRequest(init.history, request.url, request.signal);
        }
        // Call loaders
        let { shortCircuited, loaderData, errors } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, opts && opts.initialHydration === true, flushSync, pendingActionResult);
        if (shortCircuited) return;
        // Clean up now that the action/loaders have completed.  Don't clean up if
        // we short circuited because pendingNavigationController will have already
        // been assigned to a new controller for the next navigation
        pendingNavigationController = null;
        completeNavigation(location, _extends({
            matches
        }, getActionDataForCommit(pendingActionResult), {
            loaderData,
            errors
        }));
    }
    // Call the action matched by the leaf route for this navigation and handle
    // redirects/errors
    async function handleAction(request, location, submission, matches, opts) {
        if (opts === void 0) opts = {};
        interruptActiveLoads();
        // Put us in a submitting state
        let navigation = getSubmittingNavigation(location, submission);
        updateState({
            navigation
        }, {
            flushSync: opts.flushSync === true
        });
        // Call our action and get the result
        let result;
        let actionMatch = getTargetMatch(matches, location);
        if (!actionMatch.route.action && !actionMatch.route.lazy) result = {
            type: ResultType.error,
            error: getInternalRouterError(405, {
                method: request.method,
                pathname: location.pathname,
                routeId: actionMatch.route.id
            })
        };
        else {
            let results = await callDataStrategy("action", request, [
                actionMatch
            ], matches);
            result = results[0];
            if (request.signal.aborted) return {
                shortCircuited: true
            };
        }
        if (isRedirectResult(result)) {
            let replace;
            if (opts && opts.replace != null) replace = opts.replace;
            else {
                // If the user didn't explicity indicate replace behavior, replace if
                // we redirected to the exact same location we're currently at to avoid
                // double back-buttons
                let location = normalizeRedirectLocation(result.response.headers.get("Location"), new URL(request.url), basename);
                replace = location === state.location.pathname + state.location.search;
            }
            await startRedirectNavigation(request, result, {
                submission,
                replace
            });
            return {
                shortCircuited: true
            };
        }
        if (isDeferredResult(result)) throw getInternalRouterError(400, {
            type: "defer-action"
        });
        if (isErrorResult(result)) {
            // Store off the pending error - we use it to determine which loaders
            // to call and will commit it when we complete the navigation
            let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
            // By default, all submissions are REPLACE navigations, but if the
            // action threw an error that'll be rendered in an errorElement, we fall
            // back to PUSH so that the user can use the back button to get back to
            // the pre-submission form location to try again
            if ((opts && opts.replace) !== true) pendingAction = Action.Push;
            return {
                pendingActionResult: [
                    boundaryMatch.route.id,
                    result
                ]
            };
        }
        return {
            pendingActionResult: [
                actionMatch.route.id,
                result
            ]
        };
    }
    // Call all applicable loaders for the given matches, handling redirects,
    // errors, etc.
    async function handleLoaders(request, location, matches, overrideNavigation, submission, fetcherSubmission, replace, initialHydration, flushSync, pendingActionResult) {
        // Figure out the right navigation we want to use for data loading
        let loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
        // If this was a redirect from an action we don't have a "submission" but
        // we have it on the loading navigation so use that if available
        let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location, future.v7_partialHydration && initialHydration === true, future.unstable_skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult);
        // Cancel pending deferreds for no-longer-matched routes or routes we're
        // about to reload.  Note that if this is an action reload we would have
        // already cancelled all pending deferreds so this would be a no-op
        cancelActiveDeferreds((routeId)=>!(matches && matches.some((m)=>m.route.id === routeId)) || matchesToLoad && matchesToLoad.some((m)=>m.route.id === routeId));
        pendingNavigationLoadId = ++incrementingLoadId;
        // Short circuit if we have no loaders to run
        if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
            let updatedFetchers = markFetchRedirectsDone();
            completeNavigation(location, _extends({
                matches,
                loaderData: {},
                // Commit pending error if we're short circuiting
                errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
                    [pendingActionResult[0]]: pendingActionResult[1].error
                } : null
            }, getActionDataForCommit(pendingActionResult), updatedFetchers ? {
                fetchers: new Map(state.fetchers)
            } : {}), {
                flushSync
            });
            return {
                shortCircuited: true
            };
        }
        // If this is an uninterrupted revalidation, we remain in our current idle
        // state.  If not, we need to switch to our loading state and load data,
        // preserving any new action data or existing action data (in the case of
        // a revalidation interrupting an actionReload)
        // If we have partialHydration enabled, then don't update the state for the
        // initial data load since it's not a "navigation"
        if (!isUninterruptedRevalidation && (!future.v7_partialHydration || !initialHydration)) {
            revalidatingFetchers.forEach((rf)=>{
                let fetcher = state.fetchers.get(rf.key);
                let revalidatingFetcher = getLoadingFetcher(undefined, fetcher ? fetcher.data : undefined);
                state.fetchers.set(rf.key, revalidatingFetcher);
            });
            let actionData;
            if (pendingActionResult && !isErrorResult(pendingActionResult[1])) // This is cast to `any` currently because `RouteData`uses any and it
            // would be a breaking change to use any.
            // TODO: v7 - change `RouteData` to use `unknown` instead of `any`
            actionData = {
                [pendingActionResult[0]]: pendingActionResult[1].data
            };
            else if (state.actionData) {
                if (Object.keys(state.actionData).length === 0) actionData = null;
                else actionData = state.actionData;
            }
            updateState(_extends({
                navigation: loadingNavigation
            }, actionData !== undefined ? {
                actionData
            } : {}, revalidatingFetchers.length > 0 ? {
                fetchers: new Map(state.fetchers)
            } : {}), {
                flushSync
            });
        }
        revalidatingFetchers.forEach((rf)=>{
            if (fetchControllers.has(rf.key)) abortFetcher(rf.key);
            if (rf.controller) // Fetchers use an independent AbortController so that aborting a fetcher
            // (via deleteFetcher) does not abort the triggering navigation that
            // triggered the revalidation
            fetchControllers.set(rf.key, rf.controller);
        });
        // Proxy navigation abort through to revalidation fetchers
        let abortPendingFetchRevalidations = ()=>revalidatingFetchers.forEach((f)=>abortFetcher(f.key));
        if (pendingNavigationController) pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
        let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);
        if (request.signal.aborted) return {
            shortCircuited: true
        };
        // Clean up _after_ loaders have completed.  Don't clean up if we short
        // circuited because fetchControllers would have been aborted and
        // reassigned to new controllers for the next navigation
        if (pendingNavigationController) pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
        revalidatingFetchers.forEach((rf)=>fetchControllers.delete(rf.key));
        // If any loaders returned a redirect Response, start a new REPLACE navigation
        let redirect = findRedirect([
            ...loaderResults,
            ...fetcherResults
        ]);
        if (redirect) {
            if (redirect.idx >= matchesToLoad.length) {
                // If this redirect came from a fetcher make sure we mark it in
                // fetchRedirectIds so it doesn't get revalidated on the next set of
                // loader executions
                let fetcherKey = revalidatingFetchers[redirect.idx - matchesToLoad.length].key;
                fetchRedirectIds.add(fetcherKey);
            }
            await startRedirectNavigation(request, redirect.result, {
                replace
            });
            return {
                shortCircuited: true
            };
        }
        // Process and commit output from loaders
        let { loaderData, errors } = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingActionResult, revalidatingFetchers, fetcherResults, activeDeferreds);
        // Wire up subscribers to update loaderData as promises settle
        activeDeferreds.forEach((deferredData, routeId)=>{
            deferredData.subscribe((aborted)=>{
                // Note: No need to updateState here since the TrackedPromise on
                // loaderData is stable across resolve/reject
                // Remove this instance if we were aborted or if promises have settled
                if (aborted || deferredData.done) activeDeferreds.delete(routeId);
            });
        });
        // During partial hydration, preserve SSR errors for routes that don't re-run
        if (future.v7_partialHydration && initialHydration && state.errors) Object.entries(state.errors).filter((_ref2)=>{
            let [id] = _ref2;
            return !matchesToLoad.some((m)=>m.route.id === id);
        }).forEach((_ref3)=>{
            let [routeId, error] = _ref3;
            errors = Object.assign(errors || {}, {
                [routeId]: error
            });
        });
        let updatedFetchers = markFetchRedirectsDone();
        let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
        let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
        return _extends({
            loaderData,
            errors
        }, shouldUpdateFetchers ? {
            fetchers: new Map(state.fetchers)
        } : {});
    }
    // Trigger a fetcher load/submit for the given fetcher key
    function fetch(key, routeId, href, opts) {
        if (isServer) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        if (fetchControllers.has(key)) abortFetcher(key);
        let flushSync = (opts && opts.unstable_flushSync) === true;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, href, future.v7_relativeSplatPath, routeId, opts == null ? void 0 : opts.relative);
        let matches = matchRoutes(routesToUse, normalizedPath, basename);
        if (!matches) {
            setFetcherError(key, routeId, getInternalRouterError(404, {
                pathname: normalizedPath
            }), {
                flushSync
            });
            return;
        }
        let { path, submission, error } = normalizeNavigateOptions(future.v7_normalizeFormMethod, true, normalizedPath, opts);
        if (error) {
            setFetcherError(key, routeId, error, {
                flushSync
            });
            return;
        }
        let match = getTargetMatch(matches, path);
        pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
        if (submission && isMutationMethod(submission.formMethod)) {
            handleFetcherAction(key, routeId, path, match, matches, flushSync, submission);
            return;
        }
        // Store off the match so we can call it's shouldRevalidate on subsequent
        // revalidations
        fetchLoadMatches.set(key, {
            routeId,
            path
        });
        handleFetcherLoader(key, routeId, path, match, matches, flushSync, submission);
    }
    // Call the action for the matched fetcher.submit(), and then handle redirects,
    // errors, and revalidation
    async function handleFetcherAction(key, routeId, path, match, requestMatches, flushSync, submission) {
        interruptActiveLoads();
        fetchLoadMatches.delete(key);
        if (!match.route.action && !match.route.lazy) {
            let error = getInternalRouterError(405, {
                method: submission.formMethod,
                pathname: path,
                routeId: routeId
            });
            setFetcherError(key, routeId, error, {
                flushSync
            });
            return;
        }
        // Put this fetcher into it's submitting state
        let existingFetcher = state.fetchers.get(key);
        updateFetcherState(key, getSubmittingFetcher(submission, existingFetcher), {
            flushSync
        });
        // Call the action for the fetcher
        let abortController = new AbortController();
        let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
        fetchControllers.set(key, abortController);
        let originatingLoadId = incrementingLoadId;
        let actionResults = await callDataStrategy("action", fetchRequest, [
            match
        ], requestMatches);
        let actionResult = actionResults[0];
        if (fetchRequest.signal.aborted) {
            // We can delete this so long as we weren't aborted by our own fetcher
            // re-submit which would have put _new_ controller is in fetchControllers
            if (fetchControllers.get(key) === abortController) fetchControllers.delete(key);
            return;
        }
        // When using v7_fetcherPersist, we don't want errors bubbling up to the UI
        // or redirects processed for unmounted fetchers so we just revert them to
        // idle
        if (future.v7_fetcherPersist && deletedFetchers.has(key)) {
            if (isRedirectResult(actionResult) || isErrorResult(actionResult)) {
                updateFetcherState(key, getDoneFetcher(undefined));
                return;
            }
        } else {
            if (isRedirectResult(actionResult)) {
                fetchControllers.delete(key);
                if (pendingNavigationLoadId > originatingLoadId) {
                    // A new navigation was kicked off after our action started, so that
                    // should take precedence over this redirect navigation.  We already
                    // set isRevalidationRequired so all loaders for the new route should
                    // fire unless opted out via shouldRevalidate
                    updateFetcherState(key, getDoneFetcher(undefined));
                    return;
                } else {
                    fetchRedirectIds.add(key);
                    updateFetcherState(key, getLoadingFetcher(submission));
                    return startRedirectNavigation(fetchRequest, actionResult, {
                        fetcherSubmission: submission
                    });
                }
            }
            // Process any non-redirect errors thrown
            if (isErrorResult(actionResult)) {
                setFetcherError(key, routeId, actionResult.error);
                return;
            }
        }
        if (isDeferredResult(actionResult)) throw getInternalRouterError(400, {
            type: "defer-action"
        });
        // Start the data load for current matches, or the next location if we're
        // in the middle of a navigation
        let nextLocation = state.navigation.location || state.location;
        let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
        invariant(matches, "Didn't find any matches after fetcher action");
        let loadId = ++incrementingLoadId;
        fetchReloadIds.set(key, loadId);
        let loadFetcher = getLoadingFetcher(submission, actionResult.data);
        state.fetchers.set(key, loadFetcher);
        let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, submission, nextLocation, false, future.unstable_skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, [
            match.route.id,
            actionResult
        ]);
        // Put all revalidating fetchers into the loading state, except for the
        // current fetcher which we want to keep in it's current loading state which
        // contains it's action submission info + action data
        revalidatingFetchers.filter((rf)=>rf.key !== key).forEach((rf)=>{
            let staleKey = rf.key;
            let existingFetcher = state.fetchers.get(staleKey);
            let revalidatingFetcher = getLoadingFetcher(undefined, existingFetcher ? existingFetcher.data : undefined);
            state.fetchers.set(staleKey, revalidatingFetcher);
            if (fetchControllers.has(staleKey)) abortFetcher(staleKey);
            if (rf.controller) fetchControllers.set(staleKey, rf.controller);
        });
        updateState({
            fetchers: new Map(state.fetchers)
        });
        let abortPendingFetchRevalidations = ()=>revalidatingFetchers.forEach((rf)=>abortFetcher(rf.key));
        abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
        let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);
        if (abortController.signal.aborted) return;
        abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
        fetchReloadIds.delete(key);
        fetchControllers.delete(key);
        revalidatingFetchers.forEach((r)=>fetchControllers.delete(r.key));
        let redirect = findRedirect([
            ...loaderResults,
            ...fetcherResults
        ]);
        if (redirect) {
            if (redirect.idx >= matchesToLoad.length) {
                // If this redirect came from a fetcher make sure we mark it in
                // fetchRedirectIds so it doesn't get revalidated on the next set of
                // loader executions
                let fetcherKey = revalidatingFetchers[redirect.idx - matchesToLoad.length].key;
                fetchRedirectIds.add(fetcherKey);
            }
            return startRedirectNavigation(revalidationRequest, redirect.result);
        }
        // Process and commit output from loaders
        let { loaderData, errors } = processLoaderData(state, state.matches, matchesToLoad, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
        // Since we let revalidations complete even if the submitting fetcher was
        // deleted, only put it back to idle if it hasn't been deleted
        if (state.fetchers.has(key)) {
            let doneFetcher = getDoneFetcher(actionResult.data);
            state.fetchers.set(key, doneFetcher);
        }
        abortStaleFetchLoads(loadId);
        // If we are currently in a navigation loading state and this fetcher is
        // more recent than the navigation, we want the newer data so abort the
        // navigation and complete it with the fetcher data
        if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
            invariant(pendingAction, "Expected pending action");
            pendingNavigationController && pendingNavigationController.abort();
            completeNavigation(state.navigation.location, {
                matches,
                loaderData,
                errors,
                fetchers: new Map(state.fetchers)
            });
        } else {
            // otherwise just update with the fetcher data, preserving any existing
            // loaderData for loaders that did not need to reload.  We have to
            // manually merge here since we aren't going through completeNavigation
            updateState({
                errors,
                loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors),
                fetchers: new Map(state.fetchers)
            });
            isRevalidationRequired = false;
        }
    }
    // Call the matched loader for fetcher.load(), handling redirects, errors, etc.
    async function handleFetcherLoader(key, routeId, path, match, matches, flushSync, submission) {
        let existingFetcher = state.fetchers.get(key);
        updateFetcherState(key, getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : undefined), {
            flushSync
        });
        // Call the loader for this fetcher route match
        let abortController = new AbortController();
        let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
        fetchControllers.set(key, abortController);
        let originatingLoadId = incrementingLoadId;
        let results = await callDataStrategy("loader", fetchRequest, [
            match
        ], matches);
        let result = results[0];
        // Deferred isn't supported for fetcher loads, await everything and treat it
        // as a normal load.  resolveDeferredData will return undefined if this
        // fetcher gets aborted, so we just leave result untouched and short circuit
        // below if that happens
        if (isDeferredResult(result)) result = await resolveDeferredData(result, fetchRequest.signal, true) || result;
        // We can delete this so long as we weren't aborted by our our own fetcher
        // re-load which would have put _new_ controller is in fetchControllers
        if (fetchControllers.get(key) === abortController) fetchControllers.delete(key);
        if (fetchRequest.signal.aborted) return;
        // We don't want errors bubbling up or redirects followed for unmounted
        // fetchers, so short circuit here if it was removed from the UI
        if (deletedFetchers.has(key)) {
            updateFetcherState(key, getDoneFetcher(undefined));
            return;
        }
        // If the loader threw a redirect Response, start a new REPLACE navigation
        if (isRedirectResult(result)) {
            if (pendingNavigationLoadId > originatingLoadId) {
                // A new navigation was kicked off after our loader started, so that
                // should take precedence over this redirect navigation
                updateFetcherState(key, getDoneFetcher(undefined));
                return;
            } else {
                fetchRedirectIds.add(key);
                await startRedirectNavigation(fetchRequest, result);
                return;
            }
        }
        // Process any non-redirect errors thrown
        if (isErrorResult(result)) {
            setFetcherError(key, routeId, result.error);
            return;
        }
        invariant(!isDeferredResult(result), "Unhandled fetcher deferred data");
        // Put the fetcher back into an idle state
        updateFetcherState(key, getDoneFetcher(result.data));
    }
    /**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */ async function startRedirectNavigation(request, redirect, _temp2) {
        let { submission, fetcherSubmission, replace } = _temp2 === void 0 ? {} : _temp2;
        if (redirect.response.headers.has("X-Remix-Revalidate")) isRevalidationRequired = true;
        let location = redirect.response.headers.get("Location");
        invariant(location, "Expected a Location header on the redirect Response");
        location = normalizeRedirectLocation(location, new URL(request.url), basename);
        let redirectLocation = createLocation(state.location, location, {
            _isRedirect: true
        });
        if (isBrowser) {
            let isDocumentReload = false;
            if (redirect.response.headers.has("X-Remix-Reload-Document")) // Hard reload if the response contained X-Remix-Reload-Document
            isDocumentReload = true;
            else if (ABSOLUTE_URL_REGEX.test(location)) {
                const url = init.history.createURL(location);
                isDocumentReload = // Hard reload if it's an absolute URL to a new origin
                url.origin !== routerWindow.location.origin || // Hard reload if it's an absolute URL that does not match our basename
                stripBasename(url.pathname, basename) == null;
            }
            if (isDocumentReload) {
                if (replace) routerWindow.location.replace(location);
                else routerWindow.location.assign(location);
                return;
            }
        }
        // There's no need to abort on redirects, since we don't detect the
        // redirect until the action/loaders have settled
        pendingNavigationController = null;
        let redirectHistoryAction = replace === true ? Action.Replace : Action.Push;
        // Use the incoming submission if provided, fallback on the active one in
        // state.navigation
        let { formMethod, formAction, formEncType } = state.navigation;
        if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) submission = getSubmissionFromNavigation(state.navigation);
        // If this was a 307/308 submission we want to preserve the HTTP method and
        // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
        // redirected location
        let activeSubmission = submission || fetcherSubmission;
        if (redirectPreserveMethodStatusCodes.has(redirect.response.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) await startNavigation(redirectHistoryAction, redirectLocation, {
            submission: _extends({}, activeSubmission, {
                formAction: location
            }),
            // Preserve this flag across redirects
            preventScrollReset: pendingPreventScrollReset
        });
        else {
            // If we have a navigation submission, we will preserve it through the
            // redirect navigation
            let overrideNavigation = getLoadingNavigation(redirectLocation, submission);
            await startNavigation(redirectHistoryAction, redirectLocation, {
                overrideNavigation,
                // Send fetcher submissions through for shouldRevalidate
                fetcherSubmission,
                // Preserve this flag across redirects
                preventScrollReset: pendingPreventScrollReset
            });
        }
    }
    // Utility wrapper for calling dataStrategy client-side without having to
    // pass around the manifest, mapRouteProperties, etc.
    async function callDataStrategy(type, request, matchesToLoad, matches) {
        try {
            let results = await callDataStrategyImpl(dataStrategyImpl, type, request, matchesToLoad, matches, manifest, mapRouteProperties);
            return await Promise.all(results.map((result, i)=>{
                if (isRedirectHandlerResult(result)) {
                    let response = result.result;
                    return {
                        type: ResultType.redirect,
                        response: normalizeRelativeRoutingRedirectResponse(response, request, matchesToLoad[i].route.id, matches, basename, future.v7_relativeSplatPath)
                    };
                }
                return convertHandlerResultToDataResult(result);
            }));
        } catch (e) {
            // If the outer dataStrategy method throws, just return the error for all
            // matches - and it'll naturally bubble to the root
            return matchesToLoad.map(()=>({
                    type: ResultType.error,
                    error: e
                }));
        }
    }
    async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
        let [loaderResults, ...fetcherResults] = await Promise.all([
            matchesToLoad.length ? callDataStrategy("loader", request, matchesToLoad, matches) : [],
            ...fetchersToLoad.map((f)=>{
                if (f.matches && f.match && f.controller) {
                    let fetcherRequest = createClientSideRequest(init.history, f.path, f.controller.signal);
                    return callDataStrategy("loader", fetcherRequest, [
                        f.match
                    ], f.matches).then((r)=>r[0]);
                } else return Promise.resolve({
                    type: ResultType.error,
                    error: getInternalRouterError(404, {
                        pathname: f.path
                    })
                });
            })
        ]);
        await Promise.all([
            resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, loaderResults.map(()=>request.signal), false, state.loaderData),
            resolveDeferredResults(currentMatches, fetchersToLoad.map((f)=>f.match), fetcherResults, fetchersToLoad.map((f)=>f.controller ? f.controller.signal : null), true)
        ]);
        return {
            loaderResults,
            fetcherResults
        };
    }
    function interruptActiveLoads() {
        // Every interruption triggers a revalidation
        isRevalidationRequired = true;
        // Cancel pending route-level deferreds and mark cancelled routes for
        // revalidation
        cancelledDeferredRoutes.push(...cancelActiveDeferreds());
        // Abort in-flight fetcher loads
        fetchLoadMatches.forEach((_, key)=>{
            if (fetchControllers.has(key)) {
                cancelledFetcherLoads.push(key);
                abortFetcher(key);
            }
        });
    }
    function updateFetcherState(key, fetcher, opts) {
        if (opts === void 0) opts = {};
        state.fetchers.set(key, fetcher);
        updateState({
            fetchers: new Map(state.fetchers)
        }, {
            flushSync: (opts && opts.flushSync) === true
        });
    }
    function setFetcherError(key, routeId, error, opts) {
        if (opts === void 0) opts = {};
        let boundaryMatch = findNearestBoundary(state.matches, routeId);
        deleteFetcher(key);
        updateState({
            errors: {
                [boundaryMatch.route.id]: error
            },
            fetchers: new Map(state.fetchers)
        }, {
            flushSync: (opts && opts.flushSync) === true
        });
    }
    function getFetcher(key) {
        if (future.v7_fetcherPersist) {
            activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
            // If this fetcher was previously marked for deletion, unmark it since we
            // have a new instance
            if (deletedFetchers.has(key)) deletedFetchers.delete(key);
        }
        return state.fetchers.get(key) || IDLE_FETCHER;
    }
    function deleteFetcher(key) {
        let fetcher = state.fetchers.get(key);
        // Don't abort the controller if this is a deletion of a fetcher.submit()
        // in it's loading phase since - we don't want to abort the corresponding
        // revalidation and want them to complete and land
        if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) abortFetcher(key);
        fetchLoadMatches.delete(key);
        fetchReloadIds.delete(key);
        fetchRedirectIds.delete(key);
        deletedFetchers.delete(key);
        state.fetchers.delete(key);
    }
    function deleteFetcherAndUpdateState(key) {
        if (future.v7_fetcherPersist) {
            let count = (activeFetchers.get(key) || 0) - 1;
            if (count <= 0) {
                activeFetchers.delete(key);
                deletedFetchers.add(key);
            } else activeFetchers.set(key, count);
        } else deleteFetcher(key);
        updateState({
            fetchers: new Map(state.fetchers)
        });
    }
    function abortFetcher(key) {
        let controller = fetchControllers.get(key);
        invariant(controller, "Expected fetch controller: " + key);
        controller.abort();
        fetchControllers.delete(key);
    }
    function markFetchersDone(keys) {
        for (let key of keys){
            let fetcher = getFetcher(key);
            let doneFetcher = getDoneFetcher(fetcher.data);
            state.fetchers.set(key, doneFetcher);
        }
    }
    function markFetchRedirectsDone() {
        let doneKeys = [];
        let updatedFetchers = false;
        for (let key of fetchRedirectIds){
            let fetcher = state.fetchers.get(key);
            invariant(fetcher, "Expected fetcher: " + key);
            if (fetcher.state === "loading") {
                fetchRedirectIds.delete(key);
                doneKeys.push(key);
                updatedFetchers = true;
            }
        }
        markFetchersDone(doneKeys);
        return updatedFetchers;
    }
    function abortStaleFetchLoads(landedId) {
        let yeetedKeys = [];
        for (let [key, id] of fetchReloadIds)if (id < landedId) {
            let fetcher = state.fetchers.get(key);
            invariant(fetcher, "Expected fetcher: " + key);
            if (fetcher.state === "loading") {
                abortFetcher(key);
                fetchReloadIds.delete(key);
                yeetedKeys.push(key);
            }
        }
        markFetchersDone(yeetedKeys);
        return yeetedKeys.length > 0;
    }
    function getBlocker(key, fn) {
        let blocker = state.blockers.get(key) || IDLE_BLOCKER;
        if (blockerFunctions.get(key) !== fn) blockerFunctions.set(key, fn);
        return blocker;
    }
    function deleteBlocker(key) {
        state.blockers.delete(key);
        blockerFunctions.delete(key);
    }
    // Utility function to update blockers, ensuring valid state transitions
    function updateBlocker(key, newBlocker) {
        let blocker = state.blockers.get(key) || IDLE_BLOCKER;
        // Poor mans state machine :)
        // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM
        invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
        let blockers = new Map(state.blockers);
        blockers.set(key, newBlocker);
        updateState({
            blockers
        });
    }
    function shouldBlockNavigation(_ref4) {
        let { currentLocation, nextLocation, historyAction } = _ref4;
        if (blockerFunctions.size === 0) return;
        // We ony support a single active blocker at the moment since we don't have
        // any compelling use cases for multi-blocker yet
        if (blockerFunctions.size > 1) warning(false, "A router only supports one blocker at a time");
        let entries = Array.from(blockerFunctions.entries());
        let [blockerKey, blockerFunction] = entries[entries.length - 1];
        let blocker = state.blockers.get(blockerKey);
        if (blocker && blocker.state === "proceeding") // If the blocker is currently proceeding, we don't need to re-check
        // it and can let this navigation continue
        return;
        // At this point, we know we're unblocked/blocked so we need to check the
        // user-provided blocker function
        if (blockerFunction({
            currentLocation,
            nextLocation,
            historyAction
        })) return blockerKey;
    }
    function cancelActiveDeferreds(predicate) {
        let cancelledRouteIds = [];
        activeDeferreds.forEach((dfd, routeId)=>{
            if (!predicate || predicate(routeId)) {
                // Cancel the deferred - but do not remove from activeDeferreds here -
                // we rely on the subscribers to do that so our tests can assert proper
                // cleanup via _internalActiveDeferreds
                dfd.cancel();
                cancelledRouteIds.push(routeId);
                activeDeferreds.delete(routeId);
            }
        });
        return cancelledRouteIds;
    }
    // Opt in to capturing and reporting scroll positions during navigations,
    // used by the <ScrollRestoration> component
    function enableScrollRestoration(positions, getPosition, getKey) {
        savedScrollPositions = positions;
        getScrollPosition = getPosition;
        getScrollRestorationKey = getKey || null;
        // Perform initial hydration scroll restoration, since we miss the boat on
        // the initial updateState() because we've not yet rendered <ScrollRestoration/>
        // and therefore have no savedScrollPositions available
        if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
            initialScrollRestored = true;
            let y = getSavedScrollPosition(state.location, state.matches);
            if (y != null) updateState({
                restoreScrollPosition: y
            });
        }
        return ()=>{
            savedScrollPositions = null;
            getScrollPosition = null;
            getScrollRestorationKey = null;
        };
    }
    function getScrollKey(location, matches) {
        if (getScrollRestorationKey) {
            let key = getScrollRestorationKey(location, matches.map((m)=>convertRouteMatchToUiMatch(m, state.loaderData)));
            return key || location.key;
        }
        return location.key;
    }
    function saveScrollPosition(location, matches) {
        if (savedScrollPositions && getScrollPosition) {
            let key = getScrollKey(location, matches);
            savedScrollPositions[key] = getScrollPosition();
        }
    }
    function getSavedScrollPosition(location, matches) {
        if (savedScrollPositions) {
            let key = getScrollKey(location, matches);
            let y = savedScrollPositions[key];
            if (typeof y === "number") return y;
        }
        return null;
    }
    function _internalSetRoutes(newRoutes) {
        manifest = {};
        inFlightDataRoutes = convertRoutesToDataRoutes(newRoutes, mapRouteProperties, undefined, manifest);
    }
    router = {
        get basename () {
            return basename;
        },
        get future () {
            return future;
        },
        get state () {
            return state;
        },
        get routes () {
            return dataRoutes;
        },
        get window () {
            return routerWindow;
        },
        initialize,
        subscribe,
        enableScrollRestoration,
        navigate,
        fetch,
        revalidate,
        // Passthrough to history-aware createHref used by useHref so we get proper
        // hash-aware URLs in DOM paths
        createHref: (to)=>init.history.createHref(to),
        encodeLocation: (to)=>init.history.encodeLocation(to),
        getFetcher,
        deleteFetcher: deleteFetcherAndUpdateState,
        dispose,
        getBlocker,
        deleteBlocker,
        _internalFetchControllers: fetchControllers,
        _internalActiveDeferreds: activeDeferreds,
        // TODO: Remove setRoutes, it's temporary to avoid dealing with
        // updating the tree while validating the update algorithm.
        _internalSetRoutes
    };
    return router;
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////
const UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
function createStaticHandler(routes, opts) {
    invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
    let manifest = {};
    let basename = (opts ? opts.basename : null) || "/";
    let mapRouteProperties;
    if (opts != null && opts.mapRouteProperties) mapRouteProperties = opts.mapRouteProperties;
    else if (opts != null && opts.detectErrorBoundary) {
        // If they are still using the deprecated version, wrap it with the new API
        let detectErrorBoundary = opts.detectErrorBoundary;
        mapRouteProperties = (route)=>({
                hasErrorBoundary: detectErrorBoundary(route)
            });
    } else mapRouteProperties = defaultMapRouteProperties;
    // Config driven behavior flags
    let future = _extends({
        v7_relativeSplatPath: false,
        v7_throwAbortReason: false
    }, opts ? opts.future : null);
    let dataRoutes = convertRoutesToDataRoutes(routes, mapRouteProperties, undefined, manifest);
    /**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   *
   * - `opts.requestContext` is an optional server context that will be passed
   *   to actions/loaders in the `context` parameter
   * - `opts.skipLoaderErrorBubbling` is an optional parameter that will prevent
   *   the bubbling of errors which allows single-fetch-type implementations
   *   where the client will handle the bubbling and we may need to return data
   *   for the handling route
   */ async function query(request, _temp3) {
        let { requestContext, skipLoaderErrorBubbling, unstable_dataStrategy } = _temp3 === void 0 ? {} : _temp3;
        let url = new URL(request.url);
        let method = request.method;
        let location = createLocation("", createPath(url), null, "default");
        let matches = matchRoutes(dataRoutes, location, basename);
        // SSR supports HEAD requests while SPA doesn't
        if (!isValidMethod(method) && method !== "HEAD") {
            let error = getInternalRouterError(405, {
                method
            });
            let { matches: methodNotAllowedMatches, route } = getShortCircuitMatches(dataRoutes);
            return {
                basename,
                location,
                matches: methodNotAllowedMatches,
                loaderData: {},
                actionData: null,
                errors: {
                    [route.id]: error
                },
                statusCode: error.status,
                loaderHeaders: {},
                actionHeaders: {},
                activeDeferreds: null
            };
        } else if (!matches) {
            let error = getInternalRouterError(404, {
                pathname: location.pathname
            });
            let { matches: notFoundMatches, route } = getShortCircuitMatches(dataRoutes);
            return {
                basename,
                location,
                matches: notFoundMatches,
                loaderData: {},
                actionData: null,
                errors: {
                    [route.id]: error
                },
                statusCode: error.status,
                loaderHeaders: {},
                actionHeaders: {},
                activeDeferreds: null
            };
        }
        let result = await queryImpl(request, location, matches, requestContext, unstable_dataStrategy || null, skipLoaderErrorBubbling === true, null);
        if (isResponse(result)) return result;
        // When returning StaticHandlerContext, we patch back in the location here
        // since we need it for React Context.  But this helps keep our submit and
        // loadRouteData operating on a Request instead of a Location
        return _extends({
            location,
            basename
        }, result);
    }
    /**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   *
   * - `opts.routeId` allows you to specify the specific route handler to call.
   *   If not provided the handler will determine the proper route by matching
   *   against `request.url`
   * - `opts.requestContext` is an optional server context that will be passed
   *    to actions/loaders in the `context` parameter
   */ async function queryRoute(request, _temp4) {
        let { routeId, requestContext } = _temp4 === void 0 ? {} : _temp4;
        let url = new URL(request.url);
        let method = request.method;
        let location = createLocation("", createPath(url), null, "default");
        let matches = matchRoutes(dataRoutes, location, basename);
        // SSR supports HEAD requests while SPA doesn't
        if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") throw getInternalRouterError(405, {
            method
        });
        else if (!matches) throw getInternalRouterError(404, {
            pathname: location.pathname
        });
        let match = routeId ? matches.find((m)=>m.route.id === routeId) : getTargetMatch(matches, location);
        if (routeId && !match) throw getInternalRouterError(403, {
            pathname: location.pathname,
            routeId
        });
        else if (!match) // This should never hit I don't think?
        throw getInternalRouterError(404, {
            pathname: location.pathname
        });
        let result = await queryImpl(request, location, matches, requestContext, null, false, match);
        if (isResponse(result)) return result;
        let error = result.errors ? Object.values(result.errors)[0] : undefined;
        if (error !== undefined) // If we got back result.errors, that means the loader/action threw
        // _something_ that wasn't a Response, but it's not guaranteed/required
        // to be an `instanceof Error` either, so we have to use throw here to
        // preserve the "error" state outside of queryImpl.
        throw error;
        // Pick off the right state value to return
        if (result.actionData) return Object.values(result.actionData)[0];
        if (result.loaderData) {
            var _result$activeDeferre;
            let data = Object.values(result.loaderData)[0];
            if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id];
            return data;
        }
        return undefined;
    }
    async function queryImpl(request, location, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, routeMatch) {
        invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
        try {
            if (isMutationMethod(request.method.toLowerCase())) {
                let result = await submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, routeMatch != null);
                return result;
            }
            let result = await loadRouteData(request, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, routeMatch);
            return isResponse(result) ? result : _extends({}, result, {
                actionData: null,
                actionHeaders: {}
            });
        } catch (e) {
            // If the user threw/returned a Response in callLoaderOrAction for a
            // `queryRoute` call, we throw the `HandlerResult` to bail out early
            // and then return or throw the raw Response here accordingly
            if (isHandlerResult(e) && isResponse(e.result)) {
                if (e.type === ResultType.error) throw e.result;
                return e.result;
            }
            // Redirects are always returned since they don't propagate to catch
            // boundaries
            if (isRedirectResponse(e)) return e;
            throw e;
        }
    }
    async function submit(request, matches, actionMatch, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, isRouteRequest) {
        let result;
        if (!actionMatch.route.action && !actionMatch.route.lazy) {
            let error = getInternalRouterError(405, {
                method: request.method,
                pathname: new URL(request.url).pathname,
                routeId: actionMatch.route.id
            });
            if (isRouteRequest) throw error;
            result = {
                type: ResultType.error,
                error
            };
        } else {
            let results = await callDataStrategy("action", request, [
                actionMatch
            ], matches, isRouteRequest, requestContext, unstable_dataStrategy);
            result = results[0];
            if (request.signal.aborted) throwStaticHandlerAbortedError(request, isRouteRequest, future);
        }
        if (isRedirectResult(result)) // Uhhhh - this should never happen, we should always throw these from
        // callLoaderOrAction, but the type narrowing here keeps TS happy and we
        // can get back on the "throw all redirect responses" train here should
        // this ever happen :/
        throw new Response(null, {
            status: result.response.status,
            headers: {
                Location: result.response.headers.get("Location")
            }
        });
        if (isDeferredResult(result)) {
            let error = getInternalRouterError(400, {
                type: "defer-action"
            });
            if (isRouteRequest) throw error;
            result = {
                type: ResultType.error,
                error
            };
        }
        if (isRouteRequest) {
            // Note: This should only be non-Response values if we get here, since
            // isRouteRequest should throw any Response received in callLoaderOrAction
            if (isErrorResult(result)) throw result.error;
            return {
                matches: [
                    actionMatch
                ],
                loaderData: {},
                actionData: {
                    [actionMatch.route.id]: result.data
                },
                errors: null,
                // Note: statusCode + headers are unused here since queryRoute will
                // return the raw Response or value
                statusCode: 200,
                loaderHeaders: {},
                actionHeaders: {},
                activeDeferreds: null
            };
        }
        // Create a GET request for the loaders
        let loaderRequest = new Request(request.url, {
            headers: request.headers,
            redirect: request.redirect,
            signal: request.signal
        });
        if (isErrorResult(result)) {
            // Store off the pending error - we use it to determine which loaders
            // to call and will commit it when we complete the navigation
            let boundaryMatch = skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id);
            let context = await loadRouteData(loaderRequest, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, null, [
                boundaryMatch.route.id,
                result
            ]);
            // action status codes take precedence over loader status codes
            return _extends({}, context, {
                statusCode: isRouteErrorResponse(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
                actionData: null,
                actionHeaders: _extends({}, result.headers ? {
                    [actionMatch.route.id]: result.headers
                } : {})
            });
        }
        let context = await loadRouteData(loaderRequest, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, null);
        return _extends({}, context, {
            actionData: {
                [actionMatch.route.id]: result.data
            }
        }, result.statusCode ? {
            statusCode: result.statusCode
        } : {}, {
            actionHeaders: result.headers ? {
                [actionMatch.route.id]: result.headers
            } : {}
        });
    }
    async function loadRouteData(request, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, routeMatch, pendingActionResult) {
        let isRouteRequest = routeMatch != null;
        // Short circuit if we have no loaders to run (queryRoute())
        if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) throw getInternalRouterError(400, {
            method: request.method,
            pathname: new URL(request.url).pathname,
            routeId: routeMatch == null ? void 0 : routeMatch.route.id
        });
        let requestMatches = routeMatch ? [
            routeMatch
        ] : pendingActionResult && isErrorResult(pendingActionResult[1]) ? getLoaderMatchesUntilBoundary(matches, pendingActionResult[0]) : matches;
        let matchesToLoad = requestMatches.filter((m)=>m.route.loader || m.route.lazy);
        // Short circuit if we have no loaders to run (query())
        if (matchesToLoad.length === 0) return {
            matches,
            // Add a null for all matched routes for proper revalidation on the client
            loaderData: matches.reduce((acc, m)=>Object.assign(acc, {
                    [m.route.id]: null
                }), {}),
            errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
                [pendingActionResult[0]]: pendingActionResult[1].error
            } : null,
            statusCode: 200,
            loaderHeaders: {},
            activeDeferreds: null
        };
        let results = await callDataStrategy("loader", request, matchesToLoad, matches, isRouteRequest, requestContext, unstable_dataStrategy);
        if (request.signal.aborted) throwStaticHandlerAbortedError(request, isRouteRequest, future);
        // Process and commit output from loaders
        let activeDeferreds = new Map();
        let context = processRouteLoaderData(matches, matchesToLoad, results, pendingActionResult, activeDeferreds, skipLoaderErrorBubbling);
        // Add a null for any non-loader matches for proper revalidation on the client
        let executedLoaders = new Set(matchesToLoad.map((match)=>match.route.id));
        matches.forEach((match)=>{
            if (!executedLoaders.has(match.route.id)) context.loaderData[match.route.id] = null;
        });
        return _extends({}, context, {
            matches,
            activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
        });
    }
    // Utility wrapper for calling dataStrategy server-side without having to
    // pass around the manifest, mapRouteProperties, etc.
    async function callDataStrategy(type, request, matchesToLoad, matches, isRouteRequest, requestContext, unstable_dataStrategy) {
        let results = await callDataStrategyImpl(unstable_dataStrategy || defaultDataStrategy, type, request, matchesToLoad, matches, manifest, mapRouteProperties, requestContext);
        return await Promise.all(results.map((result, i)=>{
            if (isRedirectHandlerResult(result)) {
                let response = result.result;
                // Throw redirects and let the server handle them with an HTTP redirect
                throw normalizeRelativeRoutingRedirectResponse(response, request, matchesToLoad[i].route.id, matches, basename, future.v7_relativeSplatPath);
            }
            if (isResponse(result.result) && isRouteRequest) // For SSR single-route requests, we want to hand Responses back
            // directly without unwrapping
            throw result;
            return convertHandlerResultToDataResult(result);
        }));
    }
    return {
        dataRoutes,
        query,
        queryRoute
    };
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////
/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */ function getStaticContextFromError(routes, context, error) {
    let newContext = _extends({}, context, {
        statusCode: isRouteErrorResponse(error) ? error.status : 500,
        errors: {
            [context._deepestRenderedBoundaryId || routes[0].id]: error
        }
    });
    return newContext;
}
function throwStaticHandlerAbortedError(request, isRouteRequest, future) {
    if (future.v7_throwAbortReason && request.signal.reason !== undefined) throw request.signal.reason;
    let method = isRouteRequest ? "queryRoute" : "query";
    throw new Error(method + "() call aborted: " + request.method + " " + request.url);
}
function isSubmissionNavigation(opts) {
    return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== undefined);
}
function normalizeTo(location, matches, basename, prependBasename, to, v7_relativeSplatPath, fromRouteId, relative) {
    let contextualMatches;
    let activeRouteMatch;
    if (fromRouteId) {
        // Grab matches up to the calling route so our route-relative logic is
        // relative to the correct source route
        contextualMatches = [];
        for (let match of matches){
            contextualMatches.push(match);
            if (match.route.id === fromRouteId) {
                activeRouteMatch = match;
                break;
            }
        }
    } else {
        contextualMatches = matches;
        activeRouteMatch = matches[matches.length - 1];
    }
    // Resolve the relative path
    let path = resolveTo(to ? to : ".", getResolveToMatches(contextualMatches, v7_relativeSplatPath), stripBasename(location.pathname, basename) || location.pathname, relative === "path");
    // When `to` is not specified we inherit search/hash from the current
    // location, unlike when to="." and we just inherit the path.
    // See https://github.com/remix-run/remix/issues/927
    if (to == null) {
        path.search = location.search;
        path.hash = location.hash;
    }
    // Add an ?index param for matched index routes if we don't already have one
    if ((to == null || to === "" || to === ".") && activeRouteMatch && activeRouteMatch.route.index && !hasNakedIndexQuery(path.search)) path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    // If we're operating within a basename, prepend it to the pathname.  If
    // this is a root navigation, then just use the raw basename which allows
    // the basename to have full control over the presence of a trailing slash
    // on root actions
    if (prependBasename && basename !== "/") path.pathname = path.pathname === "/" ? basename : joinPaths([
        basename,
        path.pathname
    ]);
    return createPath(path);
}
// Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params
function normalizeNavigateOptions(normalizeFormMethod, isFetcher, path, opts) {
    // Return location verbatim on non-submission navigations
    if (!opts || !isSubmissionNavigation(opts)) return {
        path
    };
    if (opts.formMethod && !isValidMethod(opts.formMethod)) return {
        path,
        error: getInternalRouterError(405, {
            method: opts.formMethod
        })
    };
    let getInvalidBodyError = ()=>({
            path,
            error: getInternalRouterError(400, {
                type: "invalid-body"
            })
        });
    // Create a Submission on non-GET navigations
    let rawFormMethod = opts.formMethod || "get";
    let formMethod = normalizeFormMethod ? rawFormMethod.toUpperCase() : rawFormMethod.toLowerCase();
    let formAction = stripHashFromPath(path);
    if (opts.body !== undefined) {
        if (opts.formEncType === "text/plain") {
            // text only support POST/PUT/PATCH/DELETE submissions
            if (!isMutationMethod(formMethod)) return getInvalidBodyError();
            let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
            Array.from(opts.body.entries()).reduce((acc, _ref5)=>{
                let [name, value] = _ref5;
                return "" + acc + name + "=" + value + "\n";
            }, "") : String(opts.body);
            return {
                path,
                submission: {
                    formMethod,
                    formAction,
                    formEncType: opts.formEncType,
                    formData: undefined,
                    json: undefined,
                    text
                }
            };
        } else if (opts.formEncType === "application/json") {
            // json only supports POST/PUT/PATCH/DELETE submissions
            if (!isMutationMethod(formMethod)) return getInvalidBodyError();
            try {
                let json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
                return {
                    path,
                    submission: {
                        formMethod,
                        formAction,
                        formEncType: opts.formEncType,
                        formData: undefined,
                        json,
                        text: undefined
                    }
                };
            } catch (e) {
                return getInvalidBodyError();
            }
        }
    }
    invariant(typeof FormData === "function", "FormData is not available in this environment");
    let searchParams;
    let formData;
    if (opts.formData) {
        searchParams = convertFormDataToSearchParams(opts.formData);
        formData = opts.formData;
    } else if (opts.body instanceof FormData) {
        searchParams = convertFormDataToSearchParams(opts.body);
        formData = opts.body;
    } else if (opts.body instanceof URLSearchParams) {
        searchParams = opts.body;
        formData = convertSearchParamsToFormData(searchParams);
    } else if (opts.body == null) {
        searchParams = new URLSearchParams();
        formData = new FormData();
    } else try {
        searchParams = new URLSearchParams(opts.body);
        formData = convertSearchParamsToFormData(searchParams);
    } catch (e) {
        return getInvalidBodyError();
    }
    let submission = {
        formMethod,
        formAction,
        formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
        formData,
        json: undefined,
        text: undefined
    };
    if (isMutationMethod(submission.formMethod)) return {
        path,
        submission
    };
    // Flatten submission onto URLSearchParams for GET submissions
    let parsedPath = parsePath(path);
    // On GET navigation submissions we can drop the ?index param from the
    // resulting location since all loaders will run.  But fetcher GET submissions
    // only run a single loader so we need to preserve any incoming ?index params
    if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) searchParams.append("index", "");
    parsedPath.search = "?" + searchParams;
    return {
        path: createPath(parsedPath),
        submission
    };
}
// Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them
function getLoaderMatchesUntilBoundary(matches, boundaryId) {
    let boundaryMatches = matches;
    if (boundaryId) {
        let index = matches.findIndex((m)=>m.route.id === boundaryId);
        if (index >= 0) boundaryMatches = matches.slice(0, index);
    }
    return boundaryMatches;
}
function getMatchesToLoad(history, state, matches, submission, location, isInitialLoad, skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult) {
    let actionResult = pendingActionResult ? isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : pendingActionResult[1].data : undefined;
    let currentUrl = history.createURL(state.location);
    let nextUrl = history.createURL(location);
    // Pick navigation matches that are net-new or qualify for revalidation
    let boundaryId = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[0] : undefined;
    let boundaryMatches = boundaryId ? getLoaderMatchesUntilBoundary(matches, boundaryId) : matches;
    // Don't revalidate loaders by default after action 4xx/5xx responses
    // when the flag is enabled.  They can still opt-into revalidation via
    // `shouldRevalidate` via `actionResult`
    let actionStatus = pendingActionResult ? pendingActionResult[1].statusCode : undefined;
    let shouldSkipRevalidation = skipActionErrorRevalidation && actionStatus && actionStatus >= 400;
    let navigationMatches = boundaryMatches.filter((match, index)=>{
        let { route } = match;
        if (route.lazy) // We haven't loaded this route yet so we don't know if it's got a loader!
        return true;
        if (route.loader == null) return false;
        if (isInitialLoad) {
            if (typeof route.loader !== "function" || route.loader.hydrate) return true;
            return state.loaderData[route.id] === undefined && // Don't re-run if the loader ran and threw an error
            (!state.errors || state.errors[route.id] === undefined);
        }
        // Always call the loader on new route instances and pending defer cancellations
        if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some((id)=>id === match.route.id)) return true;
        // This is the default implementation for when we revalidate.  If the route
        // provides it's own implementation, then we give them full control but
        // provide this value so they can leverage it if needed after they check
        // their own specific use cases
        let currentRouteMatch = state.matches[index];
        let nextRouteMatch = match;
        return shouldRevalidateLoader(match, _extends({
            currentUrl,
            currentParams: currentRouteMatch.params,
            nextUrl,
            nextParams: nextRouteMatch.params
        }, submission, {
            actionResult,
            unstable_actionStatus: actionStatus,
            defaultShouldRevalidate: shouldSkipRevalidation ? false : // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
            isRevalidationRequired || currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || // Search params affect all loaders
            currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
        }));
    // Pick fetcher.loads that need to be revalidated
    let revalidatingFetchers = [];
    fetchLoadMatches.forEach((f, key)=>{
        // Don't revalidate:
        //  - on initial load (shouldn't be any fetchers then anyway)
        //  - if fetcher won't be present in the subsequent render
        //    - no longer matches the URL (v7_fetcherPersist=false)
        //    - was unmounted but persisted due to v7_fetcherPersist=true
        if (isInitialLoad || !matches.some((m)=>m.route.id === f.routeId) || deletedFetchers.has(key)) return;
        let fetcherMatches = matchRoutes(routesToUse, f.path, basename);
        // If the fetcher path no longer matches, push it in with null matches so
        // we can trigger a 404 in callLoadersAndMaybeResolveData.  Note this is
        // currently only a use-case for Remix HMR where the route tree can change
        // at runtime and remove a route previously loaded via a fetcher
        if (!fetcherMatches) {
            revalidatingFetchers.push({
                key,
                routeId: f.routeId,
                path: f.path,
                matches: null,
                match: null,
                controller: null
            });
            return;
        }
        // Revalidating fetchers are decoupled from the route matches since they
        // load from a static href.  They revalidate based on explicit revalidation
        // (submission, useRevalidator, or X-Remix-Revalidate)
        let fetcher = state.fetchers.get(key);
        let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
        let shouldRevalidate = false;
        if (fetchRedirectIds.has(key)) // Never trigger a revalidation of an actively redirecting fetcher
        shouldRevalidate = false;
        else if (cancelledFetcherLoads.includes(key)) // Always revalidate if the fetcher was cancelled
        shouldRevalidate = true;
        else if (fetcher && fetcher.state !== "idle" && fetcher.data === undefined) // If the fetcher hasn't ever completed loading yet, then this isn't a
        // revalidation, it would just be a brand new load if an explicit
        // revalidation is required
        shouldRevalidate = isRevalidationRequired;
        else // Otherwise fall back on any user-defined shouldRevalidate, defaulting
        // to explicit revalidations only
        shouldRevalidate = shouldRevalidateLoader(fetcherMatch, _extends({
            currentUrl,
            currentParams: state.matches[state.matches.length - 1].params,
            nextUrl,
            nextParams: matches[matches.length - 1].params
        }, submission, {
            actionResult,
            unstable_actionStatus: actionStatus,
            defaultShouldRevalidate: shouldSkipRevalidation ? false : isRevalidationRequired
        }));
        if (shouldRevalidate) revalidatingFetchers.push({
            key,
            routeId: f.routeId,
            path: f.path,
            matches: fetcherMatches,
            match: fetcherMatch,
            controller: new AbortController()
        });
    return [
        navigationMatches,
        revalidatingFetchers
    ];
}
function isNewLoader(currentLoaderData, currentMatch, match) {
    let isNew = // [a] -> [a, b]
    !currentMatch || // [a, b] -> [a, c]
    match.route.id !== currentMatch.route.id;
    // Handle the case that we don't have data for a re-used route, potentially
    // from a prior error or from a cancelled pending deferred
    let isMissingData = currentLoaderData[match.route.id] === undefined;
    // Always load if this is a net-new route or we don't yet have data
    return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
    let currentPath = currentMatch.route.path;
    return(// param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]);
}
function shouldRevalidateLoader(loaderMatch, arg) {
    if (loaderMatch.route.shouldRevalidate) {
        let routeChoice = loaderMatch.route.shouldRevalidate(arg);
        if (typeof routeChoice === "boolean") return routeChoice;
    }
    return arg.defaultShouldRevalidate;
}
/**
 * Execute route.lazy() methods to lazily load route modules (loader, action,
 * shouldRevalidate) and update the routeManifest in place which shares objects
 * with dataRoutes so those get updated as well.
 */ async function loadLazyRouteModule(route, mapRouteProperties, manifest) {
    if (!route.lazy) return;
    let lazyRoute = await route.lazy();
    // If the lazy route function was executed and removed by another parallel
    // call then we can return - first lazy() to finish wins because the return
    // value of lazy is expected to be static
    if (!route.lazy) return;
    let routeToUpdate = manifest[route.id];
    invariant(routeToUpdate, "No route found in manifest");
    // Update the route in place.  This should be safe because there's no way
    // we could yet be sitting on this route as we can't get there without
    // resolving lazy() first.
    //
    // This is different than the HMR "update" use-case where we may actively be
    // on the route being updated.  The main concern boils down to "does this
    // mutation affect any ongoing navigations or any current state.matches
    // values?".  If not, it should be safe to update in place.
    let routeUpdates = {};
    for(let lazyRouteProperty in lazyRoute){
        let staticRouteValue = routeToUpdate[lazyRouteProperty];
        let isPropertyStaticallyDefined = staticRouteValue !== undefined && // This property isn't static since it should always be updated based
        // on the route updates
        lazyRouteProperty !== "hasErrorBoundary";
        warning(!isPropertyStaticallyDefined, 'Route "' + routeToUpdate.id + '" has a static property "' + lazyRouteProperty + '" ' + "defined but its lazy function is also returning a value for this property. " + ('The lazy route property "' + lazyRouteProperty + '" will be ignored.'));
        if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
    }
    // Mutate the route with the provided updates.  Do this first so we pass
    // the updated version to mapRouteProperties
    Object.assign(routeToUpdate, routeUpdates);
    // Mutate the `hasErrorBoundary` property on the route based on the route
    // updates and remove the `lazy` function so we don't resolve the lazy
    // route again.
    Object.assign(routeToUpdate, _extends({}, mapRouteProperties(routeToUpdate), {
        lazy: undefined
    }));
}
// Default implementation of `dataStrategy` which fetches all loaders in parallel
function defaultDataStrategy(opts) {
    return Promise.all(opts.matches.map((m)=>m.resolve()));
}
async function callDataStrategyImpl(dataStrategyImpl, type, request, matchesToLoad, matches, manifest, mapRouteProperties, requestContext) {
    let routeIdsToLoad = matchesToLoad.reduce((acc, m)=>acc.add(m.route.id), new Set());
    let loadedMatches = new Set();
    // Send all matches here to allow for a middleware-type implementation.
    // handler will be a no-op for unneeded routes and we filter those results
    // back out below.
    let results = await dataStrategyImpl({
        matches: matches.map((match)=>{
            let shouldLoad = routeIdsToLoad.has(match.route.id);
            // `resolve` encapsulates the route.lazy, executing the
            // loader/action, and mapping return values/thrown errors to a
            // HandlerResult.  Users can pass a callback to take fine-grained control
            // over the execution of the loader/action
            let resolve = (handlerOverride)=>{
                loadedMatches.add(match.route.id);
                return shouldLoad ? callLoaderOrAction(type, request, match, manifest, mapRouteProperties, handlerOverride, requestContext) : Promise.resolve({
                    type: ResultType.data,
                    result: undefined
                });
            };
            return _extends({}, match, {
                shouldLoad,
                resolve
            });
        }),
        request,
        params: matches[0].params,
        context: requestContext
    });
    // Throw if any loadRoute implementations not called since they are what
    // ensures a route is fully loaded
    matches.forEach((m)=>invariant(loadedMatches.has(m.route.id), '`match.resolve()` was not called for route id "' + m.route.id + '". ' + "You must call `match.resolve()` on every match passed to " + "`dataStrategy` to ensure all routes are properly loaded."));
    // Filter out any middleware-only matches for which we didn't need to run handlers
    return results.filter((_, i)=>routeIdsToLoad.has(matches[i].route.id));
}
// Default logic for calling a loader/action is the user has no specified a dataStrategy
async function callLoaderOrAction(type, request, match, manifest, mapRouteProperties, handlerOverride, staticContext) {
    let result;
    let onReject;
    let runHandler = (handler)=>{
        // Setup a promise we can race against so that abort signals short circuit
        let reject;
        // This will never resolve so safe to type it as Promise<HandlerResult> to
        // satisfy the function return value
        let abortPromise = new Promise((_, r)=>reject = r);
        onReject = ()=>reject();
        request.signal.addEventListener("abort", onReject);
        let actualHandler = (ctx)=>{
            if (typeof handler !== "function") return Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + type + '" [routeId: ' + match.route.id + "]")));
            return handler({
                request,
                params: match.params,
                context: staticContext
            }, ...ctx !== undefined ? [
                ctx
            ] : []);
        };
        let handlerPromise;
        if (handlerOverride) handlerPromise = handlerOverride((ctx)=>actualHandler(ctx));
        else handlerPromise = (async ()=>{
            try {
                let val = await actualHandler();
                return {
                    type: "data",
                    result: val
                };
            } catch (e) {
                return {
                    type: "error",
                    result: e
                };
            }
        })();
        return Promise.race([
            handlerPromise,
            abortPromise
        ]);
    };
    try {
        let handler = match.route[type];
        if (match.route.lazy) {
            if (handler) {
                // Run statically defined handler in parallel with lazy()
                let handlerError;
                let [value] = await Promise.all([
                    // If the handler throws, don't let it immediately bubble out,
                    // since we need to let the lazy() execution finish so we know if this
                    // route has a boundary that can handle the error
                    runHandler(handler).catch((e)=>{
                        handlerError = e;
                    }),
                    loadLazyRouteModule(match.route, mapRouteProperties, manifest)
                ]);
                if (handlerError !== undefined) throw handlerError;
                result = value;
            } else {
                // Load lazy route module, then run any returned handler
                await loadLazyRouteModule(match.route, mapRouteProperties, manifest);
                handler = match.route[type];
                if (handler) // Handler still runs even if we got interrupted to maintain consistency
                // with un-abortable behavior of handler execution on non-lazy or
                // previously-lazy-loaded routes
                result = await runHandler(handler);
                else if (type === "action") {
                    let url = new URL(request.url);
                    let pathname = url.pathname + url.search;
                    throw getInternalRouterError(405, {
                        method: request.method,
                        pathname,
                        routeId: match.route.id
                    });
                } else // lazy() route has no loader to run.  Short circuit here so we don't
                // hit the invariant below that errors on returning undefined.
                return {
                    type: ResultType.data,
                    result: undefined
                };
            }
        } else if (!handler) {
            let url = new URL(request.url);
            let pathname = url.pathname + url.search;
            throw getInternalRouterError(404, {
                pathname
            });
        } else result = await runHandler(handler);
        invariant(result.result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ('"' + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
    } catch (e) {
        // We should already be catching and converting normal handler executions to
        // HandlerResults and returning them, so anything that throws here is an
        // unexpected error we still need to wrap
        return {
            type: ResultType.error,
            result: e
        };
    } finally{
        if (onReject) request.signal.removeEventListener("abort", onReject);
    }
    return result;
}
async function convertHandlerResultToDataResult(handlerResult) {
    let { result, type, status } = handlerResult;
    if (isResponse(result)) {
        let data;
        try {
            let contentType = result.headers.get("Content-Type");
            // Check between word boundaries instead of startsWith() due to the last
            // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type
            if (contentType && /\bapplication\/json\b/.test(contentType)) {
                if (result.body == null) data = null;
                else data = await result.json();
            } else data = await result.text();
        } catch (e) {
            return {
                type: ResultType.error,
                error: e
            };
        }
        if (type === ResultType.error) return {
            type: ResultType.error,
            error: new ErrorResponseImpl(result.status, result.statusText, data),
            statusCode: result.status,
            headers: result.headers
        };
        return {
            type: ResultType.data,
            data,
            statusCode: result.status,
            headers: result.headers
        };
    }
    if (type === ResultType.error) return {
        type: ResultType.error,
        error: result,
        statusCode: isRouteErrorResponse(result) ? result.status : status
    };
    if (isDeferredData(result)) {
        var _result$init, _result$init2;
        return {
            type: ResultType.deferred,
            deferredData: result,
            statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
            headers: ((_result$init2 = result.init) == null ? void 0 : _result$init2.headers) && new Headers(result.init.headers)
        };
    }
    return {
        type: ResultType.data,
        data: result,
        statusCode: status
    };
}
// Support relative routing in internal redirects
function normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename, v7_relativeSplatPath) {
    let location = response.headers.get("Location");
    invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
    if (!ABSOLUTE_URL_REGEX.test(location)) {
        let trimmedMatches = matches.slice(0, matches.findIndex((m)=>m.route.id === routeId) + 1);
        location = normalizeTo(new URL(request.url), trimmedMatches, basename, true, location, v7_relativeSplatPath);
        response.headers.set("Location", location);
    }
    return response;
}
function normalizeRedirectLocation(location, currentUrl, basename) {
    if (ABSOLUTE_URL_REGEX.test(location)) {
        // Strip off the protocol+origin for same-origin + same-basename absolute redirects
        let normalizedLocation = location;
        let url = normalizedLocation.startsWith("//") ? new URL(currentUrl.protocol + normalizedLocation) : new URL(normalizedLocation);
        let isSameBasename = stripBasename(url.pathname, basename) != null;
        if (url.origin === currentUrl.origin && isSameBasename) return url.pathname + url.search + url.hash;
    }
    return location;
}
// Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function createClientSideRequest(history, location, signal, submission) {
    let url = history.createURL(stripHashFromPath(location)).toString();
    let init = {
        signal
    };
    if (submission && isMutationMethod(submission.formMethod)) {
        let { formMethod, formEncType } = submission;
        // Didn't think we needed this but it turns out unlike other methods, patch
        // won't be properly normalized to uppercase and results in a 405 error.
        // See: https://fetch.spec.whatwg.org/#concept-method
        init.method = formMethod.toUpperCase();
        if (formEncType === "application/json") {
            init.headers = new Headers({
                "Content-Type": formEncType
            });
            init.body = JSON.stringify(submission.json);
        } else if (formEncType === "text/plain") // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
        init.body = submission.text;
        else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
        init.body = convertFormDataToSearchParams(submission.formData);
        else // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
        init.body = submission.formData;
    }
    return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
    let searchParams = new URLSearchParams();
    for (let [key, value] of formData.entries())// https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
    searchParams.append(key, typeof value === "string" ? value : value.name);
    return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
    let formData = new FormData();
    for (let [key, value] of searchParams.entries())formData.append(key, value);
    return formData;
}
function processRouteLoaderData(matches, matchesToLoad, results, pendingActionResult, activeDeferreds, skipLoaderErrorBubbling) {
    // Fill in loaderData/errors from our loaders
    let loaderData = {};
    let errors = null;
    let statusCode;
    let foundError = false;
    let loaderHeaders = {};
    let pendingError = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : undefined;
    // Process loader results into state.loaderData/state.errors
    results.forEach((result, index)=>{
        let id = matchesToLoad[index].route.id;
        invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
        if (isErrorResult(result)) {
            let error = result.error;
            // If we have a pending action error, we report it at the highest-route
            // that throws a loader error, and then clear it out to indicate that
            // it was consumed
            if (pendingError !== undefined) {
                error = pendingError;
                pendingError = undefined;
            }
            errors = errors || {};
            if (skipLoaderErrorBubbling) errors[id] = error;
            else {
                // Look upwards from the matched route for the closest ancestor error
                // boundary, defaulting to the root match.  Prefer higher error values
                // if lower errors bubble to the same boundary
                let boundaryMatch = findNearestBoundary(matches, id);
                if (errors[boundaryMatch.route.id] == null) errors[boundaryMatch.route.id] = error;
            }
            // Clear our any prior loaderData for the throwing route
            loaderData[id] = undefined;
            // Once we find our first (highest) error, we set the status code and
            // prevent deeper status codes from overriding
            if (!foundError) {
                foundError = true;
                statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
            }
            if (result.headers) loaderHeaders[id] = result.headers;
        } else if (isDeferredResult(result)) {
            activeDeferreds.set(id, result.deferredData);
            loaderData[id] = result.deferredData.data;
            // Error status codes always override success status codes, but if all
            // loaders are successful we take the deepest status code.
            if (result.statusCode != null && result.statusCode !== 200 && !foundError) statusCode = result.statusCode;
            if (result.headers) loaderHeaders[id] = result.headers;
        } else {
            loaderData[id] = result.data;
            // Error status codes always override success status codes, but if all
            // loaders are successful we take the deepest status code.
            if (result.statusCode && result.statusCode !== 200 && !foundError) statusCode = result.statusCode;
            if (result.headers) loaderHeaders[id] = result.headers;
        }
    });
    // If we didn't consume the pending action error (i.e., all loaders
    // resolved), then consume it here.  Also clear out any loaderData for the
    // throwing route
    if (pendingError !== undefined && pendingActionResult) {
        errors = {
            [pendingActionResult[0]]: pendingError
        };
        loaderData[pendingActionResult[0]] = undefined;
    }
    return {
        loaderData,
        errors,
        statusCode: statusCode || 200,
        loaderHeaders
    };
}
function processLoaderData(state, matches, matchesToLoad, results, pendingActionResult, revalidatingFetchers, fetcherResults, activeDeferreds) {
    let { loaderData, errors } = processRouteLoaderData(matches, matchesToLoad, results, pendingActionResult, activeDeferreds, false // This method is only called client side so we always want to bubble
    );
    // Process results from our revalidating fetchers
    for(let index = 0; index < revalidatingFetchers.length; index++){
        let { key, match, controller } = revalidatingFetchers[index];
        invariant(fetcherResults !== undefined && fetcherResults[index] !== undefined, "Did not find corresponding fetcher result");
        let result = fetcherResults[index];
        // Process fetcher non-redirect errors
        if (controller && controller.signal.aborted) continue;
        else if (isErrorResult(result)) {
            let boundaryMatch = findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
            if (!(errors && errors[boundaryMatch.route.id])) errors = _extends({}, errors, {
                [boundaryMatch.route.id]: result.error
            });
            state.fetchers.delete(key);
        } else if (isRedirectResult(result)) // Should never get here, redirects should get processed above, but we
        // keep this to type narrow to a success result in the else
        invariant(false, "Unhandled fetcher revalidation redirect");
        else if (isDeferredResult(result)) // Should never get here, deferred data should be awaited for fetchers
        // in resolveDeferredResults
        invariant(false, "Unhandled fetcher deferred data");
        else {
            let doneFetcher = getDoneFetcher(result.data);
            state.fetchers.set(key, doneFetcher);
        }
    }
    return {
        loaderData,
        errors
    };
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
    let mergedLoaderData = _extends({}, newLoaderData);
    for (let match of matches){
        let id = match.route.id;
        if (newLoaderData.hasOwnProperty(id)) {
            if (newLoaderData[id] !== undefined) mergedLoaderData[id] = newLoaderData[id];
        } else if (loaderData[id] !== undefined && match.route.loader) // Preserve existing keys not included in newLoaderData and where a loader
        // wasn't removed by HMR
        mergedLoaderData[id] = loaderData[id];
        if (errors && errors.hasOwnProperty(id)) break;
    }
    return mergedLoaderData;
}
function getActionDataForCommit(pendingActionResult) {
    if (!pendingActionResult) return {};
    return isErrorResult(pendingActionResult[1]) ? {
        // Clear out prior actionData on errors
        actionData: {}
    } : {
        actionData: {
            [pendingActionResult[0]]: pendingActionResult[1].data
        }
    };
}
// Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match
function findNearestBoundary(matches, routeId) {
    let eligibleMatches = routeId ? matches.slice(0, matches.findIndex((m)=>m.route.id === routeId) + 1) : [
        ...matches
    ];
    return eligibleMatches.reverse().find((m)=>m.route.hasErrorBoundary === true) || matches[0];
}
function getShortCircuitMatches(routes) {
    // Prefer a root layout route if present, otherwise shim in a route object
    let route = routes.length === 1 ? routes[0] : routes.find((r)=>r.index || !r.path || r.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [
            {
                params: {},
                pathname: "",
                pathnameBase: "",
                route
            }
        ],
        route
    };
}
function getInternalRouterError(status, _temp5) {
    let { pathname, routeId, method, type } = _temp5 === void 0 ? {} : _temp5;
    let statusText = "Unknown Server Error";
    let errorMessage = "Unknown @remix-run/router error";
    if (status === 400) {
        statusText = "Bad Request";
        if (method && pathname && routeId) errorMessage = "You made a " + method + ' request to "' + pathname + '" but ' + ('did not provide a `loader` for route "' + routeId + '", ') + "so there is no way to handle the request.";
        else if (type === "defer-action") errorMessage = "defer() is not supported in actions";
        else if (type === "invalid-body") errorMessage = "Unable to encode submission body";
    } else if (status === 403) {
        statusText = "Forbidden";
        errorMessage = 'Route "' + routeId + '" does not match URL "' + pathname + '"';
    } else if (status === 404) {
        statusText = "Not Found";
        errorMessage = 'No route matches URL "' + pathname + '"';
    } else if (status === 405) {
        statusText = "Method Not Allowed";
        if (method && pathname && routeId) errorMessage = "You made a " + method.toUpperCase() + ' request to "' + pathname + '" but ' + ('did not provide an `action` for route "' + routeId + '", ') + "so there is no way to handle the request.";
        else if (method) errorMessage = 'Invalid request method "' + method.toUpperCase() + '"';
    }
    return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
}
// Find any returned redirect errors, starting from the lowest match
function findRedirect(results) {
    for(let i = results.length - 1; i >= 0; i--){
        let result = results[i];
        if (isRedirectResult(result)) return {
            result,
            idx: i
        };
    }
}
function stripHashFromPath(path) {
    let parsedPath = typeof path === "string" ? parsePath(path) : path;
    return createPath(_extends({}, parsedPath, {
        hash: ""
    }));
}
function isHashChangeOnly(a, b) {
    if (a.pathname !== b.pathname || a.search !== b.search) return false;
    if (a.hash === "") // /page -> /page#hash
    return b.hash !== "";
    else if (a.hash === b.hash) // /page#hash -> /page#hash
    return true;
    else if (b.hash !== "") // /page#hash -> /page#other
    return true;
    // If the hash is removed the browser will re-perform a request to the server
    // /page#hash -> /page
    return false;
}
function isHandlerResult(result) {
    return result != null && typeof result === "object" && "type" in result && "result" in result && (result.type === ResultType.data || result.type === ResultType.error);
}
function isRedirectHandlerResult(result) {
    return isResponse(result.result) && redirectStatusCodes.has(result.result.status);
}
function isDeferredResult(result) {
    return result.type === ResultType.deferred;
}
function isErrorResult(result) {
    return result.type === ResultType.error;
}
function isRedirectResult(result) {
    return (result && result.type) === ResultType.redirect;
}
function isDeferredData(value) {
    let deferred = value;
    return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}
function isResponse(value) {
    return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectResponse(result) {
    if (!isResponse(result)) return false;
    let status = result.status;
    let location = result.headers.get("Location");
    return status >= 300 && status <= 399 && location != null;
}
function isValidMethod(method) {
    return validRequestMethods.has(method.toLowerCase());
}
function isMutationMethod(method) {
    return validMutationMethods.has(method.toLowerCase());
}
async function resolveDeferredResults(currentMatches, matchesToLoad, results, signals, isFetcher, currentLoaderData) {
    for(let index = 0; index < results.length; index++){
        let result = results[index];
        let match = matchesToLoad[index];
        // If we don't have a match, then we can have a deferred result to do
        // anything with.  This is for revalidating fetchers where the route was
        // removed during HMR
        if (!match) continue;
        let currentMatch = currentMatches.find((m)=>m.route.id === match.route.id);
        let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;
        if (isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
            // Note: we do not have to touch activeDeferreds here since we race them
            // against the signal in resolveDeferredData and they'll get aborted
            // there if needed
            let signal = signals[index];
            invariant(signal, "Expected an AbortSignal for revalidating fetcher deferred result");
            await resolveDeferredData(result, signal, isFetcher).then((result)=>{
                if (result) results[index] = result || results[index];
            });
        }
    }
}
async function resolveDeferredData(result, signal, unwrap) {
    if (unwrap === void 0) unwrap = false;
    let aborted = await result.deferredData.resolveData(signal);
    if (aborted) return;
    if (unwrap) try {
        return {
            type: ResultType.data,
            data: result.deferredData.unwrappedData
        };
    } catch (e) {
        // Handle any TrackedPromise._error values encountered while unwrapping
        return {
            type: ResultType.error,
            error: e
        };
    }
    return {
        type: ResultType.data,
        data: result.deferredData.data
    };
}
function hasNakedIndexQuery(search) {
    return new URLSearchParams(search).getAll("index").some((v)=>v === "");
}
function getTargetMatch(matches, location) {
    let search = typeof location === "string" ? parsePath(location).search : location.search;
    if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) // Return the leaf index route when index is present
    return matches[matches.length - 1];
    // Otherwise grab the deepest "path contributing" match (ignoring index and
    // pathless layout routes)
    let pathMatches = getPathContributingMatches(matches);
    return pathMatches[pathMatches.length - 1];
}
function getSubmissionFromNavigation(navigation) {
    let { formMethod, formAction, formEncType, text, formData, json } = navigation;
    if (!formMethod || !formAction || !formEncType) return;
    if (text != null) return {
        formMethod,
        formAction,
        formEncType,
        formData: undefined,
        json: undefined,
        text
    };
    else if (formData != null) return {
        formMethod,
        formAction,
        formEncType,
        formData,
        json: undefined,
        text: undefined
    };
    else if (json !== undefined) return {
        formMethod,
        formAction,
        formEncType,
        formData: undefined,
        json,
        text: undefined
    };
}
function getLoadingNavigation(location, submission) {
    if (submission) {
        let navigation = {
            state: "loading",
            location,
            formMethod: submission.formMethod,
            formAction: submission.formAction,
            formEncType: submission.formEncType,
            formData: submission.formData,
            json: submission.json,
            text: submission.text
        };
        return navigation;
    } else {
        let navigation = {
            state: "loading",
            location,
            formMethod: undefined,
            formAction: undefined,
            formEncType: undefined,
            formData: undefined,
            json: undefined,
            text: undefined
        };
        return navigation;
    }
}
function getSubmittingNavigation(location, submission) {
    let navigation = {
        state: "submitting",
        location,
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text
    };
    return navigation;
}
function getLoadingFetcher(submission, data) {
    if (submission) {
        let fetcher = {
            state: "loading",
            formMethod: submission.formMethod,
            formAction: submission.formAction,
            formEncType: submission.formEncType,
            formData: submission.formData,
            json: submission.json,
            text: submission.text,
            data
        };
        return fetcher;
    } else {
        let fetcher = {
            state: "loading",
            formMethod: undefined,
            formAction: undefined,
            formEncType: undefined,
            formData: undefined,
            json: undefined,
            text: undefined,
            data
        };
        return fetcher;
    }
}
function getSubmittingFetcher(submission, existingFetcher) {
    let fetcher = {
        state: "submitting",
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text,
        data: existingFetcher ? existingFetcher.data : undefined
    };
    return fetcher;
}
function getDoneFetcher(data) {
    let fetcher = {
        state: "idle",
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        json: undefined,
        text: undefined,
        data
    };
    return fetcher;
}
function restoreAppliedTransitions(_window, transitions) {
    try {
        let sessionPositions = _window.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);
        if (sessionPositions) {
            let json = JSON.parse(sessionPositions);
            for (let [k, v] of Object.entries(json || {}))if (v && Array.isArray(v)) transitions.set(k, new Set(v || []));
        }
    } catch (e) {
    // no-op, use default empty object
    }
}
function persistAppliedTransitions(_window, transitions) {
    if (transitions.size > 0) {
        let json = {};
        for (let [k, v] of transitions)json[k] = [
            ...v
        ];
        try {
            _window.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY, JSON.stringify(json));
        } catch (error) {
            warning(false, "Failed to save applied view transitions in sessionStorage (" + error + ").");
        }
    }
}
},{"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"ggaUx":[function(require,module,exports) {
var _reactRouter = require("react-router");
var _reactRouterDom = require("react-router-dom");
var _s = $RefreshSig$();
const MovieView = ({ movies })=>{
    _s();
    const { movieId } = (0, _reactRouter.useParams)();
    const movie = movies.find((m)=>m.id === movieId);
                    lineNumber: 13,
                lineNumber: 12,
                                    lineNumber: 16,
                            lineNumber: 16,
                            lineNumber: 17,
                    lineNumber: 16,
                lineNumber: 15,
                                lineNumber: 24,
                        lineNumber: 24,
                lineNumber: 27,
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                to: `/`,
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                    className: "back-button",
                    children: "Back"
                }, void 0, false, {
                    fileName: "src/components/movie-view/movie-view.jsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, undefined)
                lineNumber: 31,
        lineNumber: 11,
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1","react-bootstrap/Button":"aPzUt","react-bootstrap/Form":"iBZ80"}],"bsPVM":[function(require,module,exports) {
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
const NavigationBar = ({ user, onLoggedOut })=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Navbar), {
        bg: "light",
        expand: "lg",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Container), {
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Navbar).Brand, {
                    as: (0, _reactRouterDom.Link),
                    to: "/",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                            children: "Welome to"
                        }, void 0, false, {
                            fileName: "src/components/navigation-bar/navigation-bar.jsx",
                            lineNumber: 9,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                            children: "MyFlix"
                        }, void 0, false, {
                            fileName: "src/components/navigation-bar/navigation-bar.jsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/navigation-bar/navigation-bar.jsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Navbar).Toggle, {
                    "aria-controls": "basic-navbar-nav"
                }, void 0, false, {
                    fileName: "src/components/navigation-bar/navigation-bar.jsx",
                    lineNumber: 12,
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
                                        lineNumber: 17,
                                        columnNumber: 17
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Nav).Link, {
                                        as: (0, _reactRouterDom.Link),
                                        to: "/signup",
                                        children: "Signup"
                                    }, void 0, false, {
                                        fileName: "src/components/navigation-bar/navigation-bar.jsx",
                                        lineNumber: 20,
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
                                        lineNumber: 27,
                                        columnNumber: 17
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Nav).Link, {
                                        onClick: onLoggedOut,
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "src/components/navigation-bar/navigation-bar.jsx",
                                        lineNumber: 30,
                                        columnNumber: 17
                                    }, undefined)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/navigation-bar/navigation-bar.jsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/navigation-bar/navigation-bar.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/components/navigation-bar/navigation-bar.jsx",
            lineNumber: 7,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/navigation-bar/navigation-bar.jsx",
        lineNumber: 6,
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
},{"react/jsx-dev-runtime":"iTorj","react-bootstrap":"3AD9A","react-router-dom":"9xmpe","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1"}],"i5LP7":[function() {},{}]},["d35xq","kvlHm","d8Dch"], "d8Dch", "parcelRequire1c35")