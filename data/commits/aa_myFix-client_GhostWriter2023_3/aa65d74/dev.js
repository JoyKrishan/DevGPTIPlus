var _profileView = require("../profile-view/profile-view");
                lineNumber: 47,
                                    lineNumber: 60,
                                        lineNumber: 63,
                                    lineNumber: 62,
                            lineNumber: 55,
                                    lineNumber: 75,
                                        lineNumber: 78,
                                    lineNumber: 77,
                            lineNumber: 70,
                                    lineNumber: 95,
                                    lineNumber: 97,
                                        lineNumber: 100,
                                    lineNumber: 99,
                            lineNumber: 90,
                                    lineNumber: 111,
                                    lineNumber: 113,
                                                lineNumber: 118,
                                            lineNumber: 117,
                            lineNumber: 106,
                            columnNumber: 13
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Route), {
                            path: "/profile",
                            element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                                children: !user ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Navigate), {
                                    to: "/login",
                                    replace: true
                                }, void 0, false, {
                                    fileName: "src/components/main-view/main-view.jsx",
                                    lineNumber: 131,
                                    columnNumber: 21
                                }, void 0) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _colDefault.default), {
                                    md: 8,
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _profileView.ProfileView), {
                                        user: user
                                    }, void 0, false, {
                                        fileName: "src/components/main-view/main-view.jsx",
                                        lineNumber: 134,
                                        columnNumber: 23
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "src/components/main-view/main-view.jsx",
                                    lineNumber: 133,
                                    columnNumber: 21
                                }, void 0)
                            }, void 0, false)
                        }, void 0, false, {
                            fileName: "src/components/main-view/main-view.jsx",
                            lineNumber: 126,
                    lineNumber: 54,
                lineNumber: 53,
        lineNumber: 46,
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","../movie-card/movie-card":"bwuIu","../movie-view/movie-view":"ggaUx","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1","../login-view/login-view":"9YtA0","../signup-view/signup-view":"4OGiN","../navigation-bar/navigation-bar":"bsPVM","react-bootstrap/Row":"cMC39","react-bootstrap/Col":"2L2I6","react-router-dom":"9xmpe","../profile-view/profile-view":"2vVqf"}],"bwuIu":[function(require,module,exports) {
                            variant: "primary",
                            type: "submit",
},{"./Accordion":false,"./AccordionContext":false,"./AccordionCollapse":false,"./AccordionButton":false,"./AccordionBody":false,"./AccordionHeader":false,"./AccordionItem":false,"./Alert":false,"./AlertHeading":false,"./AlertLink":false,"./Anchor":false,"./Badge":false,"./Breadcrumb":false,"./BreadcrumbItem":false,"./Button":"aPzUt","./ButtonGroup":false,"./ButtonToolbar":false,"./Card":"lAynp","./CardBody":false,"./CardFooter":false,"./CardGroup":false,"./CardHeader":false,"./CardImg":false,"./CardImgOverlay":false,"./CardLink":false,"./CardSubtitle":false,"./CardText":false,"./CardTitle":false,"./Carousel":false,"./CarouselCaption":false,"./CarouselItem":false,"./CloseButton":false,"./Col":"2L2I6","./Collapse":false,"./Container":"hEdsw","./Dropdown":false,"./DropdownButton":false,"./DropdownDivider":false,"./DropdownHeader":false,"./DropdownItem":false,"./DropdownItemText":false,"./DropdownMenu":false,"./DropdownToggle":false,"./Fade":false,"./Figure":false,"./FigureCaption":false,"./FigureImage":false,"./Form":"iBZ80","./FormControl":false,"./FormCheck":false,"./FormFloating":false,"./FloatingLabel":false,"./FormGroup":false,"./FormLabel":false,"./FormText":false,"./FormSelect":false,"./Image":false,"./InputGroup":false,"./ListGroup":false,"./ListGroupItem":false,"./Modal":false,"./ModalBody":false,"./ModalDialog":false,"./ModalFooter":false,"./ModalHeader":false,"./ModalTitle":false,"./Nav":"cXyL2","./Navbar":"1mHjo","./NavbarBrand":false,"./NavbarCollapse":false,"./NavbarOffcanvas":false,"./NavbarText":false,"./NavbarToggle":false,"./NavDropdown":false,"./NavItem":false,"./NavLink":false,"./Offcanvas":false,"./OffcanvasBody":false,"./OffcanvasHeader":false,"./OffcanvasTitle":false,"./OffcanvasToggling":false,"./Overlay":false,"./OverlayTrigger":false,"./PageItem":false,"./Pagination":false,"./Placeholder":false,"./PlaceholderButton":false,"./Popover":false,"./PopoverBody":false,"./PopoverHeader":false,"./ProgressBar":false,"./Ratio":false,"./Row":"cMC39","./Spinner":false,"./SplitButton":false,"./SSRProvider":false,"./Stack":false,"./Tab":false,"./TabContainer":false,"./TabContent":false,"./Table":false,"./TabPane":false,"./Tabs":false,"./ThemeProvider":false,"./Toast":false,"./ToastBody":false,"./ToastContainer":false,"./ToastHeader":false,"./ToggleButton":false,"./ToggleButtonGroup":false,"./Tooltip":false,"@parcel/transformer-js/src/esmodule-helpers.js":"eosz2"}],"aPzUt":[function(require,module,exports) {
var _reactBootstrap = require("react-bootstrap");
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                    className: "mt-3",
                    variant: "primary",
                    style: {
                        width: "100px"
                    },
                    type: "submit",
},{"react/jsx-dev-runtime":"iTorj","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1","react-router":"dbWyW","react-router-dom":"9xmpe","react-bootstrap":"3AD9A"}],"9YtA0":[function(require,module,exports) {
var _navigationBarScss = require("./navigation-bar.scss");
        bg: "dark",
        variant: "dark",
            fluid: true,
                            lineNumber: 10,
                            lineNumber: 11,
                    lineNumber: 9,
                    lineNumber: 13,
                                        lineNumber: 18,
                                        lineNumber: 21,
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
                                        lineNumber: 34,
                        lineNumber: 15,
                    lineNumber: 14,
            lineNumber: 8,
        lineNumber: 7,
},{"react/jsx-dev-runtime":"iTorj","react-bootstrap":"3AD9A","react-router-dom":"9xmpe","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1","./navigation-bar.scss":"dnXvl"}],"dnXvl":[function() {},{}],"2vVqf":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$3c12 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$3c12.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfileView", ()=>ProfileView);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouterDom = require("react-router-dom");
var _reactBootstrap = require("react-bootstrap");
var _s = $RefreshSig$();
const ProfileView = ()=>{
    _s();
    //const { user, updateUser, deregisterUser, addFavoriteMovie, removeFavoriteMovie } = useAuth(); // Assuming you have an authentication context
    //const [favoriteMovies, setFavoriteMovies] = useState([]);
    const [username, setUsername] = (0, _react.useState)("");
    const [password, setPassword] = (0, _react.useState)("");
    const [email, setEmail] = (0, _react.useState)("");
    const [birthday, setBirthday] = (0, _react.useState)("");
    const handleUpdateUser = (event)=>{
        event.preventDefault();
        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        };
        fetch(`${"https://ghostwriter-movies-1d2fe76cf812.herokuapp.com"}/users/${user.username}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response)=>{
            if (response.ok) {
                alert("User information updated successfully");
                window.location.reload();
            } else alert("User information update failed");
        }).catch((error)=>{
            console.log(error);
        });
    };
    const handleDeregisterUser = (event)=>{
        event.preventDefault();
        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        };
        fetch(`${"https://ghostwriter-movies-1d2fe76cf812.herokuapp.com"}/users/.username`, {
            method: "DELETE",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response)=>{
            if (response.ok) {
                alert("User successfully deleted");
                window.location.reload();
            } else alert("User account deletion failed");
        }).catch((error)=>{
            console.log(error);
        });
    };
    const handleAddFavoriteMovie = (event)=>{
        event.preventDefault();
        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        };
        fetch(`${"https://ghostwriter-movies-1d2fe76cf812.herokuapp.com"}/users/${user.username}/movies/${movieId}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response)=>{
            if (response.ok) {
                alert("Movie successfully added to favorites");
                window.location.reload();
            } else alert("Error adding favorite movie");
        }).catch((error)=>{
            console.log(error);
        });
    };
    const handleRemoveFavoriteMovie = (event)=>{
        event.preventDefault();
        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        };
        fetch(`${"https://ghostwriter-movies-1d2fe76cf812.herokuapp.com"}/users/${user.username}/movies/${movieId}`, {
            method: "DELETE",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response)=>{
            if (response.ok) {
                alert("Movie successfully deleted from favorites");
                window.location.reload();
            } else alert("Error removing favorite movie");
        }).catch((error)=>{
            console.log(error);
        });
    };
    /*    // Fetch user's favorite movies on component mount
    useEffect(() => {
        const fetchFavoriteMovies = async () => {
        try {
            // Fetch user's favorite movies from backend (Huriko)
            // Example implementation:
            const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${user.username}/movies`);
            const data = await response.json();
            setFavoriteMovies(data);
        } catch (error) {
            console.error('Error fetching favorite movies:', error);
        }
        };
        fetchFavoriteMovies();
    }, [user.username]);*/ return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Container), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                        md: 5,
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                    children: "User Profile"
                                }, void 0, false, {
                                    fileName: "src/components/profile-view/profile-view.jsx",
                                    lineNumber: 148,
                                    columnNumber: 17
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form), {
                                    onSubmit: handleUpdateUser,
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Group, {
                                            controlId: "signUpFormUsername",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Label, {
                                                    children: "Username:"
                                                }, void 0, false, {
                                                    fileName: "src/components/profile-view/profile-view.jsx",
                                                    lineNumber: 151,
                                                    columnNumber: 25
                                                }, undefined),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Control, {
                                                    type: "text",
                                                    value: username,
                                                    onChange: (e)=>setUsername(e.target.value),
                                                    required: true,
                                                    minLength: "3"
                                                }, void 0, false, {
                                                    fileName: "src/components/profile-view/profile-view.jsx",
                                                    lineNumber: 152,
                                                    columnNumber: 25
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/profile-view/profile-view.jsx",
                                            lineNumber: 150,
                                            columnNumber: 21
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Group, {
                                            controlId: "signUpFormPassword",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Label, {
                                                    children: "Password:"
                                                }, void 0, false, {
                                                    fileName: "src/components/profile-view/profile-view.jsx",
                                                    lineNumber: 162,
                                                    columnNumber: 25
                                                }, undefined),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Control, {
                                                    type: "password",
                                                    value: password,
                                                    onChange: (e)=>setPassword(e.target.value),
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "src/components/profile-view/profile-view.jsx",
                                                    lineNumber: 163,
                                                    columnNumber: 25
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/profile-view/profile-view.jsx",
                                            lineNumber: 161,
                                            columnNumber: 21
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Group, {
                                            controlId: "signUpFormEmail",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Label, {
                                                    children: "Email:"
                                                }, void 0, false, {
                                                    fileName: "src/components/profile-view/profile-view.jsx",
                                                    lineNumber: 172,
                                                    columnNumber: 25
                                                }, undefined),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Control, {
                                                    type: "email",
                                                    value: email,
                                                    onChange: (e)=>setEmail(e.target.value),
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "src/components/profile-view/profile-view.jsx",
                                                    lineNumber: 173,
                                                    columnNumber: 25
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/profile-view/profile-view.jsx",
                                            lineNumber: 171,
                                            columnNumber: 21
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Group, {
                                            controlId: "signUpFormBirthday",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Label, {
                                                    children: "Birthday:"
                                                }, void 0, false, {
                                                    fileName: "src/components/profile-view/profile-view.jsx",
                                                    lineNumber: 182,
                                                    columnNumber: 25
                                                }, undefined),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Control, {
                                                    type: "date",
                                                    value: birthday,
                                                    onChange: (e)=>setBirthday(e.target.value),
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "src/components/profile-view/profile-view.jsx",
                                                    lineNumber: 183,
                                                    columnNumber: 25
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/profile-view/profile-view.jsx",
                                            lineNumber: 181,
                                            columnNumber: 21
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                                            className: "mt-3",
                                            variant: "primary",
                                            type: "submit",
                                            children: "Update User Info"
                                        }, void 0, false, {
                                            fileName: "src/components/profile-view/profile-view.jsx",
                                            lineNumber: 190,
                                            columnNumber: 21
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/profile-view/profile-view.jsx",
                                    lineNumber: 149,
                                    columnNumber: 17
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/profile-view/profile-view.jsx",
                            lineNumber: 147,
                            columnNumber: 17
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/profile-view/profile-view.jsx",
                        lineNumber: 146,
                        columnNumber: 13
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                        md: 2
                    }, void 0, false, {
                        fileName: "src/components/profile-view/profile-view.jsx",
                        lineNumber: 196,
                        columnNumber: 13
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                        md: 5,
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                    children: "Favorite Movies"
                                }, void 0, false, {
                                    fileName: "src/components/profile-view/profile-view.jsx",
                                    lineNumber: 199,
                                    columnNumber: 17
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {}, void 0, false, {
                                    fileName: "src/components/profile-view/profile-view.jsx",
                                    lineNumber: 200,
                                    columnNumber: 17
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    children: "Place marker"
                                }, void 0, false, {
                                    fileName: "src/components/profile-view/profile-view.jsx",
                                    lineNumber: 201,
                                    columnNumber: 17
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/profile-view/profile-view.jsx",
                            lineNumber: 198,
                            columnNumber: 17
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/profile-view/profile-view.jsx",
                        lineNumber: 197,
                        columnNumber: 13
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                        to: "/",
                        children: "Back to Home"
                    }, void 0, false, {
                        fileName: "src/components/profile-view/profile-view.jsx",
                        lineNumber: 204,
                        columnNumber: 13
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/profile-view/profile-view.jsx",
                lineNumber: 145,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                className: "justify-content-md-center",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                    md: 5,
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                            children: "Delete your Profile"
                        }, void 0, false, {
                            fileName: "src/components/profile-view/profile-view.jsx",
                            lineNumber: 208,
                            columnNumber: 13
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form), {
                            onSubmit: handleDeregisterUser,
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Group, {
                                    controlId: "formUsername",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Label, {
                                            children: "Username:"
                                        }, void 0, false, {
                                            fileName: "src/components/profile-view/profile-view.jsx",
                                            lineNumber: 211,
                                            columnNumber: 21
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Control, {
                                            type: "text",
                                            value: username,
                                            onChange: (e)=>setUsername(e.target.value),
                                            required: true,
                                            minLength: "3"
                                        }, void 0, false, {
                                            fileName: "src/components/profile-view/profile-view.jsx",
                                            lineNumber: 212,
                                            columnNumber: 21
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/profile-view/profile-view.jsx",
                                    lineNumber: 210,
                                    columnNumber: 17
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Group, {
                                    controlId: "formPassword",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Label, {
                                            children: "Password:"
                                        }, void 0, false, {
                                            fileName: "src/components/profile-view/profile-view.jsx",
                                            lineNumber: 222,
                                            columnNumber: 21
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Control, {
                                            type: "password",
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value),
                                            required: true
                                        }, void 0, false, {
                                            fileName: "src/components/profile-view/profile-view.jsx",
                                            lineNumber: 223,
                                            columnNumber: 21
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/profile-view/profile-view.jsx",
                                    lineNumber: 221,
                                    columnNumber: 17
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                                    className: "mt-3",
                                    variant: "primary",
                                    type: "submit",
                                    children: "Deregister"
                                }, void 0, false, {
                                    fileName: "src/components/profile-view/profile-view.jsx",
                                    lineNumber: 230,
                                    columnNumber: 17
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/profile-view/profile-view.jsx",
                            lineNumber: 209,
                            columnNumber: 17
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/profile-view/profile-view.jsx",
                    lineNumber: 207,
                    columnNumber: 13
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/profile-view/profile-view.jsx",
                lineNumber: 206,
                columnNumber: 9
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/profile-view/profile-view.jsx",
        lineNumber: 144,
        columnNumber: 5
    }, undefined);
};
_s(ProfileView, "jsOQN3GC2XlBG9ITlzCdpyJOnso=");
_c = ProfileView;
var _c;
$RefreshReg$(_c, "ProfileView");

  $parcel$ReactRefreshHelpers$3c12.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-router-dom":"9xmpe","react-bootstrap":"3AD9A","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1"}],"i5LP7":[function() {},{}]},["d35xq","kvlHm","d8Dch"], "d8Dch", "parcelRequire1c35")