    const handleRemoveFmFavorites = ()=>{
            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card), {
                className: "h-100 mt-4",
                style: {
                    width: "18rem"
                },
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Img, {
                        variant: "top",
                        src: movie.image,
                        className: "object-fit-cover"
                    }, void 0, false, {
                        fileName: "src/components/movie-card/movie-card.jsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Body, {
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Title, {
                                children: movie.title
                            }, void 0, false, {
                                fileName: "src/components/movie-card/movie-card.jsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Text, {
                                children: movie.description
                            }, void 0, false, {
                                fileName: "src/components/movie-card/movie-card.jsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                children: isFavorite ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                                    variant: "primary",
                                    style: {
                                        width: "100px"
                                    },
                                    onClick: handleRemoveFmFavorites,
                                    children: "Remove"
                                    lineNumber: 98,
                                    columnNumber: 11
                                }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                                    variant: "primary",
                                    style: {
                                        width: "100px"
                                    },
                                    onClick: handleAddToFavorites,
                                    children: "Add"
                                    lineNumber: 100,
                                    columnNumber: 11
                            }, void 0, false, {
                                fileName: "src/components/movie-card/movie-card.jsx",
                                lineNumber: 96,
                                columnNumber: 9
                            }, undefined)
                        ]
                    }, void 0, true, {
                        lineNumber: 93,
                        columnNumber: 9
                ]
            }, void 0, true, {
                fileName: "src/components/movie-card/movie-card.jsx",
                lineNumber: 91,
                columnNumber: 7
            }, undefined)
        }, void 0, false, {
},{"./Accordion":false,"./AccordionContext":false,"./AccordionCollapse":false,"./AccordionButton":false,"./AccordionBody":false,"./AccordionHeader":false,"./AccordionItem":false,"./Alert":false,"./AlertHeading":false,"./AlertLink":false,"./Anchor":false,"./Badge":false,"./Breadcrumb":false,"./BreadcrumbItem":false,"./Button":"aPzUt","./ButtonGroup":false,"./ButtonToolbar":false,"./Card":"lAynp","./CardBody":false,"./CardFooter":false,"./CardGroup":false,"./CardHeader":false,"./CardImg":false,"./CardImgOverlay":false,"./CardLink":false,"./CardSubtitle":false,"./CardText":false,"./CardTitle":false,"./Carousel":false,"./CarouselCaption":false,"./CarouselItem":false,"./CloseButton":false,"./Col":"2L2I6","./Collapse":false,"./Container":"hEdsw","./Dropdown":false,"./DropdownButton":false,"./DropdownDivider":false,"./DropdownHeader":false,"./DropdownItem":false,"./DropdownItemText":false,"./DropdownMenu":false,"./DropdownToggle":false,"./Fade":false,"./Figure":false,"./FigureCaption":false,"./FigureImage":false,"./Form":false,"./FormControl":false,"./FormCheck":false,"./FormFloating":false,"./FloatingLabel":false,"./FormGroup":false,"./FormLabel":false,"./FormText":false,"./FormSelect":false,"./Image":false,"./InputGroup":false,"./ListGroup":false,"./ListGroupItem":false,"./Modal":false,"./ModalBody":false,"./ModalDialog":false,"./ModalFooter":false,"./ModalHeader":false,"./ModalTitle":false,"./Nav":"cXyL2","./Navbar":"1mHjo","./NavbarBrand":false,"./NavbarCollapse":false,"./NavbarOffcanvas":false,"./NavbarText":false,"./NavbarToggle":false,"./NavDropdown":false,"./NavItem":false,"./NavLink":false,"./Offcanvas":false,"./OffcanvasBody":false,"./OffcanvasHeader":false,"./OffcanvasTitle":false,"./OffcanvasToggling":false,"./Overlay":false,"./OverlayTrigger":false,"./PageItem":false,"./Pagination":false,"./Placeholder":false,"./PlaceholderButton":false,"./Popover":false,"./PopoverBody":false,"./PopoverHeader":false,"./ProgressBar":false,"./Ratio":false,"./Row":"cMC39","./Spinner":false,"./SplitButton":false,"./SSRProvider":false,"./Stack":false,"./Tab":false,"./TabContainer":false,"./TabContent":false,"./Table":false,"./TabPane":false,"./Tabs":false,"./ThemeProvider":false,"./Toast":false,"./ToastBody":false,"./ToastContainer":false,"./ToastHeader":false,"./ToggleButton":false,"./ToggleButtonGroup":false,"./Tooltip":false,"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"aPzUt":[function(require,module,exports) {
var _reactBootstrap = require("react-bootstrap");
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Container), {
        className: "d-flex align-items-center justify-content-center",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default), {
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Group, {
                    controlId: "formUsername",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Label, {
                            children: "Username:"
                        }, void 0, false, {
                            fileName: "src/components/login-view/login-view.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Control, {
                            type: "text",
                            value: username,
                            onChange: (e)=>setUsername(e.target.value),
                            required: true,
                            minLength: "3"
                        }, void 0, false, {
                            fileName: "src/components/login-view/login-view.jsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/login-view/login-view.jsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Group, {
                    controlId: "formPassword",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Label, {
                            children: "Password:"
                        }, void 0, false, {
                            fileName: "src/components/login-view/login-view.jsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Control, {
                            type: "password",
                            value: password,
                            onChange: (e)=>setPassword(e.target.value),
                            required: true
                        }, void 0, false, {
                            fileName: "src/components/login-view/login-view.jsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/login-view/login-view.jsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
                    className: "mt-3",
                    variant: "primary",
                    type: "submit",
                    children: "Login"
                }, void 0, false, {
                    fileName: "src/components/login-view/login-view.jsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/components/login-view/login-view.jsx",
            lineNumber: 43,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        lineNumber: 42,
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1","react-bootstrap/Button":"aPzUt","react-bootstrap/Form":"iBZ80","react-bootstrap":"3AD9A"}],"4OGiN":[function(require,module,exports) {
            const foundUser = usersFromApi.find((u)=>u.username === localUser.username);
            if (foundUser) setUser(foundUser);
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                        xs: 12,
                        sm: 4,
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card), {
                            className: "mb-5",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Body, {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Title, {
                                        children: "My Profile"
                                    }, void 0, false, {
                                        fileName: "src/components/profile-view/profile-view.jsx",
                                        lineNumber: 128,
                                        columnNumber: 25
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Text, {
                                        children: user ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _userInfo.UserInfo), {
                                            name: user.username,
                                            email: user.email
                                        }, void 0, false, {
                                            fileName: "src/components/profile-view/profile-view.jsx",
                                            lineNumber: 131,
                                            columnNumber: 37
                                        }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                            children: "Loading..."
                                        }, void 0, false, {
                                            fileName: "src/components/profile-view/profile-view.jsx",
                                            lineNumber: 133,
                                            columnNumber: 37
                                        }, undefined)
                                        lineNumber: 129,
                                        columnNumber: 29
                                ]
                            }, void 0, true, {
                                fileName: "src/components/profile-view/profile-view.jsx",
                                lineNumber: 127,
                                columnNumber: 21
                            }, undefined)
                        }, void 0, false, {
                            lineNumber: 126,
                            columnNumber: 17
                        lineNumber: 125,
                        columnNumber: 13
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                        xs: 12,
                        sm: 8,
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card), {
                            className: "mb-5",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Body, {
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _updateUser.UpdateUser), {
                                    formData: formData,
                                    handleUpdate: handleUpdate,
                                    handleSubmit: handleSubmit,
                                    handleDeregisterUser: handleDeregisterUser
                                }, void 0, false, {
                                    fileName: "src/components/profile-view/profile-view.jsx",
                                    lineNumber: 142,
                                    columnNumber: 21
                                }, undefined)
                                lineNumber: 141,
                                columnNumber: 21
                            lineNumber: 140,
                            columnNumber: 17
                        lineNumber: 139,
                        columnNumber: 13
                lineNumber: 124,
                className: "justify-content-md-center",
                        lineNumber: 155,
                        columnNumber: 40
                    lineNumber: 153,
                lineNumber: 152,
        lineNumber: 123,
                    children: "Update User Profile"
                    variant: "danger",