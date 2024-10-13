var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _container = require("react-bootstrap/Container");
var _containerDefault = parcelHelpers.interopDefault(_container);
var _bootstrapMinCss = require("bootstrap/dist/css/bootstrap.min.css");
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _containerDefault.default), {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _mainView.MainView), {}, void 0, false, {
            fileName: "src/index.jsx",
            lineNumber: 11,
            columnNumber: 11
        }, undefined)
    }, void 0, false, {
        lineNumber: 10,
    lineNumber: 18,
},{"react/jsx-dev-runtime":"iTorj","react-dom/client":"lOjBx","./index.scss":"lJZlQ","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1","./components/main-view/main-view":"4gflv","react-bootstrap/Container":"hEdsw","bootstrap/dist/css/bootstrap.min.css":"i5LP7","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"iTorj":[function(require,module,exports) {
var _button = require("react-bootstrap/Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _container = require("react-bootstrap/Container");
var _containerDefault = parcelHelpers.interopDefault(_container);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _rowDefault.default), {
        className: "justify-content-md-center",
        children: !user ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _colDefault.default), {
                    sm: 3,
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h4", {
                            children: "Welcome to"
                            lineNumber: 50,
                            columnNumber: 12
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                            lineNumber: 50,
                            columnNumber: 31
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                            children: "myFlix"
                            lineNumber: 50,
                            columnNumber: 36
                    lineNumber: 49,
                    columnNumber: 11
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _colDefault.default), {
                    sm: 3,
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _loginView.LoginView), {
                        onLoggedIn: (user, token)=>{
                            setUser(user);
                            setToken(token);
                        }
                    }, void 0, false, {
                        fileName: "src/components/main-view/main-view.jsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/main-view/main-view.jsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _colDefault.default), {
                    sm: 3,
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h4", {
                        children: "If not a registered user, then fill the fields on the righ to create a new user profile."
                    }, void 0, false, {
                        fileName: "src/components/main-view/main-view.jsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/main-view/main-view.jsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _colDefault.default), {
                    sm: 3,
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _signupView.SignupView), {}, void 0, false, {
                        fileName: "src/components/main-view/main-view.jsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/main-view/main-view.jsx",
                    lineNumber: 63,
            ]
        }, void 0, true) : selectedMovie ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _colDefault.default), {
            md: 8,
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
                    className: "mb-3",
                    variant: "primary",
                    onClick: ()=>{
                        setUser(null);
                        setToken(null);
                        localStorage.clear();
                    },
                    children: "Logout"
                }, void 0, false, {
                    fileName: "src/components/main-view/main-view.jsx",
                    lineNumber: 70,
                    columnNumber: 13
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _movieView.MovieView), {
                    movie: selectedMovie,
                    onBackClick: ()=>setSelectedMovie(null)
                }, void 0, false, {
                    fileName: "src/components/main-view/main-view.jsx",
                    lineNumber: 77,
                    columnNumber: 13
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/components/main-view/main-view.jsx",
            lineNumber: 69,
            columnNumber: 11
        }, undefined) : movies.length === 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
                    variant: "primary",
                    onClick: ()=>{
                        setUser(null);
                        setToken(null);
                        localStorage.clear();
                    },
                    children: "Logout"
                }, void 0, false, {
                    fileName: "src/components/main-view/main-view.jsx",
                    lineNumber: 84,
                    columnNumber: 13
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    children: "The list is empty!"
                }, void 0, false, {
                    fileName: "src/components/main-view/main-view.jsx",
                    lineNumber: 91,
                    columnNumber: 13
                }, undefined)
            ]
        }, void 0, true) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
                    className: "mb-3 w-auto",
                    variant: "primary",
                    onClick: ()=>{
                        setUser(null);
                        setToken(null);
                        localStorage.clear();
                    },
                    children: "Logout"
                }, void 0, false, {
                    fileName: "src/components/main-view/main-view.jsx",
                    lineNumber: 95,
                    columnNumber: 13
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _containerDefault.default), {
                    className: "d-flex flex-wrap",
                    children: movies.map((movie)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _colDefault.default), {
                            className: "mb-4",
                            md: 3,
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _movieCard.MovieCard), {
                                movie: movie,
                                onMovieClick: (newSelectedMovie)=>{
                                    setSelectedMovie(newSelectedMovie);
                                }
                            }, void 0, false, {
                                fileName: "src/components/main-view/main-view.jsx",
                                lineNumber: 105,
                                columnNumber: 19
                            }, undefined)
                        }, movie.id, false, {
                            fileName: "src/components/main-view/main-view.jsx",
                            lineNumber: 104,
                            columnNumber: 17
                        }, undefined))
                }, void 0, false, {
                    fileName: "src/components/main-view/main-view.jsx",
                    lineNumber: 102,
                    columnNumber: 13
                }, undefined)
            ]
        }, void 0, true)
    }, void 0, false, {
        lineNumber: 46,
        columnNumber: 7
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","../movie-card/movie-card":"bwuIu","../movie-view/movie-view":"ggaUx","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1","../login-view/login-view":"9YtA0","../signup-view/signup-view":"4OGiN","react-bootstrap/Row":"cMC39","react-bootstrap/Col":"2L2I6","react-bootstrap/Button":"aPzUt","react-bootstrap/Container":"hEdsw"}],"bwuIu":[function(require,module,exports) {
const MovieCard = ({ movie, onMovieClick })=>{
        onClick: ()=>{
            onMovieClick(movie);
        },
                lineNumber: 7,
                        lineNumber: 9,
                        lineNumber: 10,
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                        variant: "primary",
                        children: "More Info"
                        lineNumber: 11,
                lineNumber: 8,
        lineNumber: 6,
},{"react/jsx-dev-runtime":"iTorj","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1","prop-types":"7wKI2","react-bootstrap":"3AD9A"}],"eosz2":[function(require,module,exports) {
},{"./Accordion":false,"./AccordionContext":false,"./AccordionCollapse":false,"./AccordionButton":false,"./AccordionBody":false,"./AccordionHeader":false,"./AccordionItem":false,"./Alert":false,"./AlertHeading":false,"./AlertLink":false,"./Anchor":false,"./Badge":false,"./Breadcrumb":false,"./BreadcrumbItem":false,"./Button":"aPzUt","./ButtonGroup":false,"./ButtonToolbar":false,"./Card":"lAynp","./CardBody":false,"./CardFooter":false,"./CardGroup":false,"./CardHeader":false,"./CardImg":false,"./CardImgOverlay":false,"./CardLink":false,"./CardSubtitle":false,"./CardText":false,"./CardTitle":false,"./Carousel":false,"./CarouselCaption":false,"./CarouselItem":false,"./CloseButton":false,"./Col":false,"./Collapse":false,"./Container":false,"./Dropdown":false,"./DropdownButton":false,"./DropdownDivider":false,"./DropdownHeader":false,"./DropdownItem":false,"./DropdownItemText":false,"./DropdownMenu":false,"./DropdownToggle":false,"./Fade":false,"./Figure":false,"./FigureCaption":false,"./FigureImage":false,"./Form":false,"./FormControl":false,"./FormCheck":false,"./FormFloating":false,"./FloatingLabel":false,"./FormGroup":false,"./FormLabel":false,"./FormText":false,"./FormSelect":false,"./Image":false,"./InputGroup":false,"./ListGroup":false,"./ListGroupItem":false,"./Modal":false,"./ModalBody":false,"./ModalDialog":false,"./ModalFooter":false,"./ModalHeader":false,"./ModalTitle":false,"./Nav":false,"./Navbar":false,"./NavbarBrand":false,"./NavbarCollapse":false,"./NavbarOffcanvas":false,"./NavbarText":false,"./NavbarToggle":false,"./NavDropdown":false,"./NavItem":false,"./NavLink":false,"./Offcanvas":false,"./OffcanvasBody":false,"./OffcanvasHeader":false,"./OffcanvasTitle":false,"./OffcanvasToggling":false,"./Overlay":false,"./OverlayTrigger":false,"./PageItem":false,"./Pagination":false,"./Placeholder":false,"./PlaceholderButton":false,"./Popover":false,"./PopoverBody":false,"./PopoverHeader":false,"./ProgressBar":false,"./Ratio":false,"./Row":false,"./Spinner":false,"./SplitButton":false,"./SSRProvider":false,"./Stack":false,"./Tab":false,"./TabContainer":false,"./TabContent":false,"./Table":false,"./TabPane":false,"./Tabs":false,"./ThemeProvider":false,"./Toast":false,"./ToastBody":false,"./ToastContainer":false,"./ToastHeader":false,"./ToggleButton":false,"./ToggleButtonGroup":false,"./Tooltip":false,"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"aPzUt":[function(require,module,exports) {
},{"react":"21dqq","classnames":"jocGM","./ThemeProvider":"dVixI","./divWithClassName":"eDg7t","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"2L2I6":[function(require,module,exports) {
},{"classnames":"jocGM","react":"21dqq","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"hEdsw":[function(require,module,exports) {
var _themeProvider = require("./ThemeProvider");
"use client";
const Container = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, fluid = false, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", className, ...props }, ref)=>{
    const prefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "container");
    const suffix = typeof fluid === "string" ? `-${fluid}` : "-fluid";
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        className: (0, _classnamesDefault.default)(className, fluid ? `${prefix}${suffix}` : prefix)
Container.displayName = "Container";
exports.default = Container;
},{"classnames":"jocGM","react":"21dqq","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"iBZ80":[function(require,module,exports) {
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
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
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   * @type {ReactRef}
   * @alias ref
   */ _ref: (0, _propTypesDefault.default).any,
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */ validated: (0, _propTypesDefault.default).bool,
    as: (0, _propTypesDefault.default).elementType
const Form = /*#__PURE__*/ _react.forwardRef(({ className, validated, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "form", ...props }, ref)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ...props,
        ref: ref,
        className: (0, _classnamesDefault.default)(className, validated && "was-validated")
    }));
Form.displayName = "Form";
Form.propTypes = propTypes;
exports.default = Object.assign(Form, {
    Group: (0, _formGroupDefault.default),
    Control: (0, _formControlDefault.default),
    Floating: (0, _formFloatingDefault.default),
    Check: (0, _formCheckDefault.default),
    Switch: (0, _switchDefault.default),
    Label: (0, _formLabelDefault.default),
    Text: (0, _formTextDefault.default),
    Range: (0, _formRangeDefault.default),
    Select: (0, _formSelectDefault.default),
    FloatingLabel: (0, _floatingLabelDefault.default)
});
},{"classnames":"jocGM","prop-types":"7wKI2","react":"21dqq","./FormCheck":"idkr0","./FormControl":"iynMc","./FormFloating":"aj346","./FormGroup":"1qBHH","./FormLabel":"66epi","./FormRange":"8zsCO","./FormSelect":"hHWyB","./FormText":"ffeC7","./Switch":"9O81i","./FloatingLabel":"coYzo","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"idkr0":[function(require,module,exports) {
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _feedback = require("./Feedback");
var _feedbackDefault = parcelHelpers.interopDefault(_feedback);
var _formCheckInput = require("./FormCheckInput");
var _formCheckInputDefault = parcelHelpers.interopDefault(_formCheckInput);
var _formCheckLabel = require("./FormCheckLabel");
var _formCheckLabelDefault = parcelHelpers.interopDefault(_formCheckLabel);
var _formContext = require("./FormContext");
var _formContextDefault = parcelHelpers.interopDefault(_formContext);
var _themeProvider = require("./ThemeProvider");
var _elementChildren = require("./ElementChildren");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const FormCheck = /*#__PURE__*/ _react.forwardRef(({ id, bsPrefix, bsSwitchPrefix, inline = false, reverse = false, disabled = false, isValid = false, isInvalid = false, feedbackTooltip = false, feedback, feedbackType, className, style, title = "", type = "checkbox", label, children, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as = "input", ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "form-check");
    bsSwitchPrefix = (0, _themeProvider.useBootstrapPrefix)(bsSwitchPrefix, "form-switch");
    const { controlId } = (0, _react.useContext)((0, _formContextDefault.default));
    const innerFormContext = (0, _react.useMemo)(()=>({
            controlId: id || controlId
        }), [
        controlId,
        id
    ]);
    const hasLabel = !children && label != null && label !== false || (0, _elementChildren.hasChildOfType)(children, (0, _formCheckLabelDefault.default));
    const input = /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _formCheckInputDefault.default), {
        ...props,
        type: type === "switch" ? "checkbox" : type,
        ref: ref,
        isValid: isValid,
        isInvalid: isInvalid,
        disabled: disabled,
        as: as
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _formContextDefault.default).Provider, {
        value: innerFormContext,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
            style: style,
            className: (0, _classnamesDefault.default)(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === "switch" && bsSwitchPrefix),
            children: children || /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    input,
                    hasLabel && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _formCheckLabelDefault.default), {
                        title: title,
                        children: label
                    }),
                    feedback && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _feedbackDefault.default), {
                        type: feedbackType,
                        tooltip: feedbackTooltip,
                        children: feedback
                    })
                ]
            })
        })
    });
});
FormCheck.displayName = "FormCheck";
exports.default = Object.assign(FormCheck, {
    Input: (0, _formCheckInputDefault.default),
    Label: (0, _formCheckLabelDefault.default)
});
},{"classnames":"jocGM","react":"21dqq","./Feedback":"aWeg2","./FormCheckInput":"dPzD9","./FormCheckLabel":"fGhS2","./FormContext":"gjvSt","./ThemeProvider":"dVixI","./ElementChildren":"fdyAp","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"aWeg2":[function(require,module,exports) {
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
const propTypes = {
    /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */ type: (0, _propTypesDefault.default).string,
    /** Display feedback as a tooltip. */ tooltip: (0, _propTypesDefault.default).bool,
    as: (0, _propTypesDefault.default).elementType
const Feedback = /*#__PURE__*/ _react.forwardRef(// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({ as: Component = "div", className, type = "valid", tooltip = false, ...props }, ref)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ...props,
        ref: ref,
        className: (0, _classnamesDefault.default)(className, `${type}-${tooltip ? "tooltip" : "feedback"}`)
    }));
Feedback.displayName = "Feedback";
Feedback.propTypes = propTypes;
exports.default = Feedback;
},{"classnames":"jocGM","react":"21dqq","prop-types":"7wKI2","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"dPzD9":[function(require,module,exports) {
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _formContext = require("./FormContext");
var _formContextDefault = parcelHelpers.interopDefault(_formContext);
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const FormCheckInput = /*#__PURE__*/ _react.forwardRef(({ id, bsPrefix, className, type = "checkbox", isValid = false, isInvalid = false, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "input", ...props }, ref)=>{
    const { controlId } = (0, _react.useContext)((0, _formContextDefault.default));
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "form-check-input");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ...props,
        ref: ref,
        type: type,
        id: id || controlId,
        className: (0, _classnamesDefault.default)(className, bsPrefix, isValid && "is-valid", isInvalid && "is-invalid")
});
FormCheckInput.displayName = "FormCheckInput";
exports.default = FormCheckInput;
},{"classnames":"jocGM","react":"21dqq","./FormContext":"gjvSt","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"gjvSt":[function(require,module,exports) {
var _react = require("react");
"use client";
// TODO
const FormContext = /*#__PURE__*/ _react.createContext({});
exports.default = FormContext;
},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"fGhS2":[function(require,module,exports) {
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _formContext = require("./FormContext");
var _formContextDefault = parcelHelpers.interopDefault(_formContext);
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const FormCheckLabel = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, className, htmlFor, ...props }, ref)=>{
    const { controlId } = (0, _react.useContext)((0, _formContextDefault.default));
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "form-check-label");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("label", {
        ...props,
        ref: ref,
        htmlFor: htmlFor || controlId,
        className: (0, _classnamesDefault.default)(className, bsPrefix)
    });
});
FormCheckLabel.displayName = "FormCheckLabel";
exports.default = FormCheckLabel;
},{"classnames":"jocGM","react":"21dqq","./FormContext":"gjvSt","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"fdyAp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.export(exports, "map", ()=>map);
parcelHelpers.export(exports, "forEach", ()=>forEach);
parcelHelpers.export(exports, "hasChildOfType", ()=>hasChildOfType);
var _react = require("react");
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */ function map(children, func) {
    let index = 0;
    return _react.Children.map(children, (child)=>/*#__PURE__*/ _react.isValidElement(child) ? func(child, index++) : child);
 * Iterates through children that are "valid elements".
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */ function forEach(children, func) {
    let index = 0;
    _react.Children.forEach(children, (child)=>{
        if (/*#__PURE__*/ _react.isValidElement(child)) func(child, index++);
    });
/**
 * Finds whether a component's `children` prop includes a React element of the
 * specified type.
 */ function hasChildOfType(children, type) {
    return _react.Children.toArray(children).some((child)=>/*#__PURE__*/ _react.isValidElement(child) && child.type === type);
},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"iynMc":[function(require,module,exports) {
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _warning = require("warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
var _feedback = require("./Feedback");
var _feedbackDefault = parcelHelpers.interopDefault(_feedback);
var _formContext = require("./FormContext");
var _formContextDefault = parcelHelpers.interopDefault(_formContext);
var _themeProvider = require("./ThemeProvider");
const FormControl = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, type, size, htmlSize, id, className, isValid = false, isInvalid = false, plaintext, readOnly, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "input", ...props }, ref)=>{
    const { controlId } = (0, _react.useContext)((0, _formContextDefault.default));
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "form-control");
    (0, _warningDefault.default)(controlId == null || !id, "`controlId` is ignored on `<FormControl>` when `id` is specified.");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        type: type,
        size: htmlSize,
        ref: ref,
        readOnly: readOnly,
        id: id || controlId,
        className: (0, _classnamesDefault.default)(className, plaintext ? `${bsPrefix}-plaintext` : bsPrefix, size && `${bsPrefix}-${size}`, type === "color" && `${bsPrefix}-color`, isValid && "is-valid", isInvalid && "is-invalid")
FormControl.displayName = "FormControl";
exports.default = Object.assign(FormControl, {
    Feedback: (0, _feedbackDefault.default)
});
},{"classnames":"jocGM","react":"21dqq","warning":"eUVzU","./Feedback":"aWeg2","./FormContext":"gjvSt","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"eUVzU":[function(require,module,exports) {
 * Copyright (c) 2014-present, Facebook, Inc.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */ var __DEV__ = true;
var warning = function() {};
if (__DEV__) {
    var printWarning = function printWarning(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for(var key = 1; key < len; key++)args[key - 1] = arguments[key];
        var argIndex = 0;
        var message = "Warning: " + format.replace(/%s/g, function() {
            return args[argIndex++];
        });
        if (typeof console !== "undefined") console.error(message);
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
    warning = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for(var key = 2; key < len; key++)args[key - 2] = arguments[key];
        if (format === undefined) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
        if (!condition) printWarning.apply(null, [
            format
        ].concat(args));
    };
module.exports = warning;
},{}],"aj346":[function(require,module,exports) {
var _react = require("react");
const FormFloating = /*#__PURE__*/ _react.forwardRef(({ className, bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "form-floating");
        className: (0, _classnamesDefault.default)(className, bsPrefix),
        ...props
FormFloating.displayName = "FormFloating";
exports.default = FormFloating;
},{"react":"21dqq","classnames":"jocGM","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"1qBHH":[function(require,module,exports) {
var _formContext = require("./FormContext");
var _formContextDefault = parcelHelpers.interopDefault(_formContext);
const FormGroup = /*#__PURE__*/ _react.forwardRef(({ controlId, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", ...props }, ref)=>{
    const context = (0, _react.useMemo)(()=>({
            controlId
        }), [
        controlId
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _formContextDefault.default).Provider, {
        value: context,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
            ...props,
            ref: ref
        })
FormGroup.displayName = "FormGroup";
exports.default = FormGroup;
},{"react":"21dqq","./FormContext":"gjvSt","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"66epi":[function(require,module,exports) {
var _warning = require("warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
var _col = require("./Col");
var _colDefault = parcelHelpers.interopDefault(_col);
var _formContext = require("./FormContext");
var _formContextDefault = parcelHelpers.interopDefault(_formContext);
var _themeProvider = require("./ThemeProvider");
"use client";
const FormLabel = /*#__PURE__*/ _react.forwardRef(({ // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "label", bsPrefix, column = false, visuallyHidden = false, className, htmlFor, ...props }, ref)=>{
    const { controlId } = (0, _react.useContext)((0, _formContextDefault.default));
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "form-label");
    let columnClass = "col-form-label";
    if (typeof column === "string") columnClass = `${columnClass} ${columnClass}-${column}`;
    const classes = (0, _classnamesDefault.default)(className, bsPrefix, visuallyHidden && "visually-hidden", column && columnClass);
    (0, _warningDefault.default)(controlId == null || !htmlFor, "`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.");
    htmlFor = htmlFor || controlId;
    if (column) return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colDefault.default), {
        as: "label",
        className: classes,
        htmlFor: htmlFor,
        ...props
    });
    return(/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    (0, _jsxRuntime.jsx)(Component, {
        ref: ref,
        className: classes,
        htmlFor: htmlFor,
        ...props
FormLabel.displayName = "FormLabel";
exports.default = FormLabel;
},{"classnames":"jocGM","react":"21dqq","warning":"eUVzU","./Col":"2L2I6","./FormContext":"gjvSt","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"8zsCO":[function(require,module,exports) {
var _themeProvider = require("./ThemeProvider");
const FormRange = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, className, id, ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "form-range");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
        type: "range",
        className: (0, _classnamesDefault.default)(className, bsPrefix),
        id: id || controlId
FormRange.displayName = "FormRange";
exports.default = FormRange;
},{"classnames":"jocGM","react":"21dqq","./ThemeProvider":"dVixI","./FormContext":"gjvSt","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"hHWyB":[function(require,module,exports) {
var _themeProvider = require("./ThemeProvider");
var _formContext = require("./FormContext");
var _formContextDefault = parcelHelpers.interopDefault(_formContext);
"use client";
const FormSelect = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, size, htmlSize, className, isValid = false, isInvalid = false, id, ...props }, ref)=>{
    const { controlId } = (0, _react.useContext)((0, _formContextDefault.default));
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "form-select");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("select", {
        size: htmlSize,
        className: (0, _classnamesDefault.default)(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
        id: id || controlId
    });
});
FormSelect.displayName = "FormSelect";
exports.default = FormSelect;
},{"classnames":"jocGM","react":"21dqq","./ThemeProvider":"dVixI","./FormContext":"gjvSt","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"ffeC7":[function(require,module,exports) {
const FormText = /*#__PURE__*/ _react.forwardRef(// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({ bsPrefix, className, as: Component = "small", muted, ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "form-text");
        className: (0, _classnamesDefault.default)(className, bsPrefix, muted && "text-muted")
FormText.displayName = "FormText";
exports.default = FormText;
},{"classnames":"jocGM","react":"21dqq","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"9O81i":[function(require,module,exports) {
var _formCheck = require("./FormCheck");
var _formCheckDefault = parcelHelpers.interopDefault(_formCheck);
var _jsxRuntime = require("react/jsx-runtime");
const Switch = /*#__PURE__*/ _react.forwardRef((props, ref)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _formCheckDefault.default), {
        ...props,
        ref: ref,
        type: "switch"
    }));
Switch.displayName = "Switch";
exports.default = Object.assign(Switch, {
    Input: (0, _formCheckDefault.default).Input,
    Label: (0, _formCheckDefault.default).Label
});
},{"react":"21dqq","./FormCheck":"idkr0","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"coYzo":[function(require,module,exports) {
var _formGroup = require("./FormGroup");
var _formGroupDefault = parcelHelpers.interopDefault(_formGroup);
const FloatingLabel = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, className, children, controlId, label, ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "form-floating");
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _formGroupDefault.default), {
        className: (0, _classnamesDefault.default)(className, bsPrefix),
        controlId: controlId,
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("label", {
                htmlFor: controlId,
                children: label
            })
        ]
FloatingLabel.displayName = "FloatingLabel";
exports.default = FloatingLabel;
},{"classnames":"jocGM","react":"21dqq","./FormGroup":"1qBHH","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"cMC39":[function(require,module,exports) {
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
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ref: ref,
        ...props,
        className: (0, _classnamesDefault.default)(className, decoratedBsPrefix, ...classes)
    });
});
Row.displayName = "Row";
exports.default = Row;
},{"classnames":"jocGM","react":"21dqq","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"ggaUx":[function(require,module,exports) {
var _button = require("react-bootstrap/Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
const MovieView = ({ movie, onBackClick })=>{
        onClick: ()=>{
            onBackClick(movie);
        },
                    lineNumber: 8,
                lineNumber: 7,
                                    lineNumber: 11,
                            lineNumber: 11,
                            lineNumber: 12,
                    lineNumber: 11,
                lineNumber: 10,
                                lineNumber: 19,
                        lineNumber: 19,
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
                className: "mt-3 w-auto",
                variant: "primary",
                lineNumber: 26,
        lineNumber: 6,
var _button = require("react-bootstrap/Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _form = require("react-bootstrap/Form");
var _formDefault = parcelHelpers.interopDefault(_form);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default), {
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Group, {
                controlId: "formUsername",
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Label, {
                        children: "Username:"
                    }, void 0, false, {
                        fileName: "src/components/login-view/login-view.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Control, {
                        required: true,
                        minLength: "3"
                        lineNumber: 44,
                lineNumber: 42,
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Group, {
                controlId: "formPassword",
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Label, {
                        children: "Password:"
                    }, void 0, false, {
                        fileName: "src/components/login-view/login-view.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Control, {
                        lineNumber: 55,
                lineNumber: 53,
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
                className: "mt-3",
                variant: "primary",
                children: "Login"
                lineNumber: 62,
        lineNumber: 41,
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1","react-bootstrap/Button":"aPzUt","react-bootstrap/Form":"iBZ80"}],"4OGiN":[function(require,module,exports) {
var _button = require("react-bootstrap/Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _form = require("react-bootstrap/Form");
var _formDefault = parcelHelpers.interopDefault(_form);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default), {
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Group, {
                controlId: "signUpFormUsername",
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Label, {
                        children: "Username:"
                    }, void 0, false, {
                        fileName: "src/components/signup-view/signup-view.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Control, {
                        lineNumber: 44,
                lineNumber: 42,
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Group, {
                controlId: "signUpFormPassword",
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Label, {
                        children: "Password:"
                    }, void 0, false, {
                        fileName: "src/components/signup-view/signup-view.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Control, {
                        lineNumber: 55,
                lineNumber: 53,
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Group, {
                controlId: "signUpFormEmail",
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Label, {
                        children: "Email:"
                    }, void 0, false, {
                        fileName: "src/components/signup-view/signup-view.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Control, {
                        lineNumber: 65,
                lineNumber: 63,
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Group, {
                controlId: "signUpFormBirthday",
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Label, {
                        children: "Birthday:"
                    }, void 0, false, {
                        fileName: "src/components/signup-view/signup-view.jsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Control, {
                        lineNumber: 75,
                lineNumber: 73,
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
                className: "mt-3",
                variant: "primary",
                lineNumber: 83,
        lineNumber: 41,
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1","react-bootstrap/Button":"aPzUt","react-bootstrap/Form":"iBZ80"}],"i5LP7":[function() {},{}]},["d35xq","kvlHm","d8Dch"], "d8Dch", "parcelRequire1c35")