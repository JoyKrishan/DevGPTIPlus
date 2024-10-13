var _react = require("react");
var _s = $RefreshSig$();
const MovieCard = ({ movie, isFavorite })=>{
    _s();
    const storedToken = localStorage.getItem("token");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = (0, _react.useState)(storedUser ? storedUser : null);
    const [token, setToken] = (0, _react.useState)(storedToken ? storedToken : null);
    const [addTitle, setAddTitle] = (0, _react.useState)("");
    const [delTitle, setDelTitle] = (0, _react.useState)("");
    (0, _react.useEffect)(()=>{
        const addToFavorites = ()=>{
            fetch(`${"https://ghostwriter-movies-1d2fe76cf812.herokuapp.com"}/users/${user.username}/movies/${encodeURIComponent(movie.title)}`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }).then((response)=>{
                if (!response.ok) throw new Error("Failed to add movie to favorites.");
                alert("Movie added to favorites successfully!");
                window.location.reload();
                return response.json();
            }).then((user)=>{
                if (user) {
                    localStorage.setItem("user", JSON.stringify(user));
                    setUser(user);
                }
            }).catch((error)=>{
                console.error(error);
            });
        };
        const removeFromFavorites = ()=>{
            fetch(`${"https://ghostwriter-movies-1d2fe76cf812.herokuapp.com"}/users/${user.username}/movies/${encodeURIComponent(movie.title)}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }).then((response)=>{
                if (!response.ok) throw new Error("Failed to remove movie from favorites.");
                alert("Movie successfully removed from favorites!");
                window.location.reload();
                return response.json();
            }).then((user)=>{
                if (user) {
                    localStorage.setItem("user", JSON.stringify(user));
                    setUser(user);
                }
            }).catch((error)=>{
                console.error(error);
            });
        };
        if (addTitle) addToFavorites();
        if (delTitle) removeFromFavorites();
    }, [
        addTitle,
        delTitle,
        token
    ]);
    const handleAddToFavorites = ()=>{
        setAddTitle(movie.title);
    };
    const handleRemoveFromFavorites = ()=>{
        setDelTitle(movie.title);
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
            to: `/movies/${encodeURIComponent(movie.id)}`,
            className: "movie-view",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card), {
                    className: "h-100",
                    style: {
                        width: "18rem"
                    },
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Img, {
                            variant: "top",
                            src: movie.image,
                            className: "object-fit-cover"
                            lineNumber: 92,
                            columnNumber: 7
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Body, {
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Title, {
                                    children: movie.title
                                }, void 0, false, {
                                    fileName: "src/components/movie-card/movie-card.jsx",
                                    lineNumber: 94,
                                    columnNumber: 9
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Text, {
                                    children: movie.description
                                }, void 0, false, {
                                    fileName: "src/components/movie-card/movie-card.jsx",
                                    lineNumber: 95,
                                    columnNumber: 9
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/movie-card/movie-card.jsx",
                            lineNumber: 93,
                            columnNumber: 7
                    ]
                }, void 0, true, {
                    fileName: "src/components/movie-card/movie-card.jsx",
                    lineNumber: 91,
                    columnNumber: 5
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card), {
                    children: isFavorite ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                        variant: "primary",
                        onClick: handleRemoveFromFavorites,
                        children: "Remove"
                        lineNumber: 100,
                        columnNumber: 7
                    }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                        variant: "primary",
                        onClick: handleAddToFavorites,
                        children: "Add"
                    }, void 0, false, {
                        fileName: "src/components/movie-card/movie-card.jsx",
                        lineNumber: 102,
                        columnNumber: 7
                }, void 0, false, {
                    fileName: "src/components/movie-card/movie-card.jsx",
                    lineNumber: 98,
                    columnNumber: 5
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/components/movie-card/movie-card.jsx",
            lineNumber: 90,
            columnNumber: 5
        }, undefined)
    }, void 0, false);
_s(MovieCard, "V+cT+w/6U3R4dEHg5RghZbIMO7Y=");
        id: (0, _propTypesDefault.default).string.isRequired,
        // console.log(`${process.env.REACT_APP_API_URL}/users`)
        // console.log(data)
            console.error(error);
var _userInfo = require("./user-info");
var _favouriteMovies = require("./favourite-movies");
var _updateUser = require("./update-user");
const ProfileView = ({ localUser, movies, token })=>{
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [username, setUsername] = (0, _react.useState)(storedUser.username);
    const [password, setPassword] = (0, _react.useState)(storedUser.password);
    const [email, setEmail] = (0, _react.useState)(storedUser.email);
    const [birthday, setBirthday] = (0, _react.useState)(storedUser.birthday);
    const [user, setUser] = (0, _react.useState)();
    const favoriteMovies = user === undefined ? [] : movies.filter((m)=>user.favoriteMovies.includes(m.title));
    const formData = {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
    };
    const handleSubmit = (event)=>{
        event.preventDefault(event);
            body: JSON.stringify(formData),
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
                return response.json();
        }).then((user)=>{
            if (user.ok) {
                localStorage.setItem("user", JSON.stringify(user));
                setUser(user);
            }
            console.error(error);
    const handleUpdate = (e)=>{
        switch(e.target.type){
            case "text":
                setUsername(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            case "date":
                setBirthday(e.target.value);
            default:
        }
    };
    const handleDeregisterUser = ()=>{
        fetch(`${"https://ghostwriter-movies-1d2fe76cf812.herokuapp.com"}/users/${storedUser.username}`, {
                Authorization: `Bearer ${token}`,
    (0, _react.useEffect)(()=>{
        if (!token) return;
        fetch(`${"https://ghostwriter-movies-1d2fe76cf812.herokuapp.com"}/users`, {
                Authorization: `Bearer ${token}`
        }).then((response)=>response.json()).then((data)=>{
            console.log("Users data: ", data);
            const usersFromApi = data.map((resultUser)=>{
                return {
                    id: resultUser._id,
                    username: resultUser.username,
                    password: resultUser.password,
                    email: resultUser.email,
                    birthday: resultUser.birthday,
                    favoriteMovies: resultUser.favoriteMovies
                };
            });
            setUser(usersFromApi.find((u)=>u.username === localUser.username));
            //   localStorage.setItem('user', JSON.stringify(user));
            console.log("Profile Saved User: " + JSON.stringify(user));
        //   storedUser = user;
            console.error(error);
    }, [
        token
    ]);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Container), {
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card), {
                        className: "mb-5",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Body, {
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Title, {
                                    children: "My Profile  "
                                }, void 0, false, {
                                    fileName: "src/components/profile-view/profile-view.jsx",
                                    lineNumber: 124,
                                    columnNumber: 17
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Text, {
                                    children: user && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _userInfo.UserInfo), {
                                        name: user.username,
                                        email: user.email
                                    }, void 0, false, {
                                        fileName: "src/components/profile-view/profile-view.jsx",
                                        lineNumber: 127,
                                        columnNumber: 38
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/components/profile-view/profile-view.jsx",
                                    lineNumber: 125,
                                    columnNumber: 21
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/profile-view/profile-view.jsx",
                            lineNumber: 123,
                            columnNumber: 13
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/profile-view/profile-view.jsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card), {
                        className: "mb-5",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Body, {
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _updateUser.UpdateUser), {
                                formData: formData,
                                handleUpdate: handleUpdate,
                                handleSubmit: handleSubmit,
                                handleDeregisterUser: handleDeregisterUser
                            }, void 0, false, {
                                fileName: "src/components/profile-view/profile-view.jsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/profile-view/profile-view.jsx",
                            lineNumber: 133,
                            columnNumber: 9
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/profile-view/profile-view.jsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/profile-view/profile-view.jsx",
                lineNumber: 121,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                    className: "mb-5",
                    xs: 12,
                    md: 12,
                    children: favoriteMovies && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _favouriteMovies.FavouriteMovies), {
                        user: user,
                        favoriteMovies: favoriteMovies
                    }, void 0, false, {
                        fileName: "src/components/profile-view/profile-view.jsx",
                        lineNumber: 146,
                        columnNumber: 36
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/profile-view/profile-view.jsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/profile-view/profile-view.jsx",
                lineNumber: 143,
                columnNumber: 5
            }, undefined),
                                    lineNumber: 153,
                                                    lineNumber: 156,
                                                    lineNumber: 157,
                                            lineNumber: 155,
                                                    lineNumber: 167,
                                                    lineNumber: 168,
                                            lineNumber: 166,
                                                    lineNumber: 177,
                                                    lineNumber: 178,
                                            lineNumber: 176,
                                                    lineNumber: 187,
                                                    lineNumber: 188,
                                            lineNumber: 186,
                                            lineNumber: 195,
                                    lineNumber: 154,
                            lineNumber: 152,
                        lineNumber: 151,
                        lineNumber: 201,
                                    lineNumber: 204,
                                    lineNumber: 205,
                                    lineNumber: 206,
                            lineNumber: 203,
                        lineNumber: 202,
                        lineNumber: 209,
                lineNumber: 150,
                            lineNumber: 213,
                                            lineNumber: 216,
                                            lineNumber: 217,
                                    lineNumber: 215,
                                            lineNumber: 227,
                                            lineNumber: 228,
                                    lineNumber: 226,
                                    lineNumber: 235,
                            lineNumber: 214,
                    lineNumber: 212,
                lineNumber: 211,
        lineNumber: 120,
_s(ProfileView, "unA/gfNi1SxHK4auyAsHnucaeSo=");
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-router-dom":"9xmpe","react-bootstrap":"3AD9A","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1","./user-info":"66eot","./favourite-movies":"9FAJ6","./update-user":"2SBwg"}],"66eot":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$1330 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$1330.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UserInfo", ()=>UserInfo);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const UserInfo = ({ email, name })=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                children: [
                    "Username: ",
                    name,
                    " "
                ]
            }, void 0, true, {
                fileName: "src/components/profile-view/user-info.jsx",
                lineNumber: 6,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                children: [
                    "Email: ",
                    email,
                    " "
                ]
            }, void 0, true, {
                fileName: "src/components/profile-view/user-info.jsx",
                lineNumber: 7,
                columnNumber: 5
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/profile-view/user-info.jsx",
        lineNumber: 5,
        columnNumber: 4
    }, undefined);
};
_c = UserInfo;
var _c;
$RefreshReg$(_c, "UserInfo");

  $parcel$ReactRefreshHelpers$1330.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1"}],"9FAJ6":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$7fc5 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$7fc5.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FavouriteMovies", ()=>FavouriteMovies);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _row = require("react-bootstrap/Row");
var _rowDefault = parcelHelpers.interopDefault(_row);
var _col = require("react-bootstrap/Col");
var _colDefault = parcelHelpers.interopDefault(_col);
var _movieCard = require("../movie-card/movie-card");
var _reactRouterDom = require("react-router-dom");
const FavouriteMovies = ({ user, favoriteMovies })=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _rowDefault.default), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _colDefault.default), {
                md: 12,
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                    children: "My Movies"
                }, void 0, false, {
                    fileName: "src/components/profile-view/favourite-movies.jsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/profile-view/favourite-movies.jsx",
                lineNumber: 10,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _rowDefault.default), {
                children: favoriteMovies.map((movie)=>{
                    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _colDefault.default), {
                        className: "mb-5",
                        md: 4,
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                                to: `/movies/${movie.title}`
                            }, void 0, false, {
                                fileName: "src/components/profile-view/favourite-movies.jsx",
                                lineNumber: 17,
                                columnNumber: 15
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _movieCard.MovieCard), {
                                movie: movie,
                                isFavorite: user.favoriteMovies.includes(movie.title)
                            }, void 0, false, {
                                fileName: "src/components/profile-view/favourite-movies.jsx",
                                lineNumber: 18,
                                columnNumber: 15
                            }, undefined)
                        ]
                    }, movie.id, true, {
                        fileName: "src/components/profile-view/favourite-movies.jsx",
                        lineNumber: 16,
                        columnNumber: 13
                    }, undefined);
                })
            }, void 0, false, {
                fileName: "src/components/profile-view/favourite-movies.jsx",
                lineNumber: 13,
                columnNumber: 5
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/profile-view/favourite-movies.jsx",
        lineNumber: 9,
        columnNumber: 4
    }, undefined);
};
_c = FavouriteMovies;
var _c;
$RefreshReg$(_c, "FavouriteMovies");

  $parcel$ReactRefreshHelpers$7fc5.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-bootstrap/Row":"cMC39","react-bootstrap/Col":"2L2I6","../movie-card/movie-card":"bwuIu","react-router-dom":"9xmpe","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1"}],"2SBwg":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$95d1 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$95d1.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UpdateUser", ()=>UpdateUser);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _button = require("react-bootstrap/Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _form = require("react-bootstrap/Form");
var _formDefault = parcelHelpers.interopDefault(_form);
var _row = require("react-bootstrap/Row");
var _rowDefault = parcelHelpers.interopDefault(_row);
const UpdateUser = ({ formData, handleUpdate, handleSubmit, handleDeleteAccount })=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _rowDefault.default), {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default), {
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                    children: "Update User Information"
                }, void 0, false, {
                    fileName: "src/components/profile-view/update-user.jsx",
                    lineNumber: 10,
                    columnNumber: 13
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Group, {
                    className: "mb-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Label, {
                            children: "Username:"
                        }, void 0, false, {
                            fileName: "src/components/profile-view/update-user.jsx",
                            lineNumber: 12,
                            columnNumber: 17
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Control, {
                            type: "text",
                            defaultValue: user.Username,
                            minLength: 3,
                            value: formData.username,
                            onChange: (e)=>handleUpdate(e),
                            required: true,
                            placeholder: "Enter a username"
                        }, void 0, false, {
                            fileName: "src/components/profile-view/update-user.jsx",
                            lineNumber: 13,
                            columnNumber: 17
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/profile-view/update-user.jsx",
                    lineNumber: 11,
                    columnNumber: 13
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Group, {
                    className: "mb-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Label, {
                            children: [
                                "Password:",
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                    children: "Your new password must be at least 8 characters long."
                                }, void 0, false, {
                                    fileName: "src/components/profile-view/update-user.jsx",
                                    lineNumber: 25,
                                    columnNumber: 17
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/profile-view/update-user.jsx",
                            lineNumber: 24,
                            columnNumber: 17
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Control, {
                            type: "password",
                            defaultValue: "",
                            minLength: 8,
                            value: formData.password,
                            onChange: (e)=>handleUpdate(e),
                            required: true,
                            placeholder: "Your new password must be at least 8 characters long"
                        }, void 0, false, {
                            fileName: "src/components/profile-view/update-user.jsx",
                            lineNumber: 27,
                            columnNumber: 17
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/profile-view/update-user.jsx",
                    lineNumber: 23,
                    columnNumber: 13
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Group, {
                    className: "mb-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Label, {
                            children: " Email: "
                        }, void 0, false, {
                            fileName: "src/components/profile-view/update-user.jsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Control, {
                            type: "email",
                            defaultValue: user.Email,
                            value: formData.email,
                            onChange: (e)=>handleUpdate(e),
                            required: true,
                            placeholder: "Enter your email address"
                        }, void 0, false, {
                            fileName: "src/components/profile-view/update-user.jsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/profile-view/update-user.jsx",
                    lineNumber: 37,
                    columnNumber: 13
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Group, {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Label, {
                            children: "Birthdate:"
                        }, void 0, false, {
                            fileName: "src/components/profile-view/update-user.jsx",
                            lineNumber: 49,
                            columnNumber: 17
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default).Control, {
                            type: "date",
                            defaultValue: user.Birthdate,
                            value: formData.birthDate.slice(0, 10),
                            onChange: (e)=>handleUpdate(e),
                            required: true,
                            placeholder: "Enter your birthdate"
                        }, void 0, false, {
                            fileName: "src/components/profile-view/update-user.jsx",
                            lineNumber: 50,
                            columnNumber: 17
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/profile-view/update-user.jsx",
                    lineNumber: 48,
                    columnNumber: 13
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
                    variant: "primary",
                    type: "submit",
                    children: "Submit Changes"
                }, void 0, false, {
                    fileName: "src/components/profile-view/update-user.jsx",
                    lineNumber: 59,
                    columnNumber: 13
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
                    onClick: ()=>handleDeleteAccount(),
                    variant: "outline-secondary",
                    className: "mx-3",
                    children: "Delete account"
                }, void 0, false, {
                    fileName: "src/components/profile-view/update-user.jsx",
                    lineNumber: 60,
                    columnNumber: 13
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/components/profile-view/update-user.jsx",
            lineNumber: 9,
            columnNumber: 9
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/profile-view/update-user.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, undefined);
};
_c = UpdateUser;
var _c;
$RefreshReg$(_c, "UpdateUser");

  $parcel$ReactRefreshHelpers$95d1.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-bootstrap/Button":"aPzUt","react-bootstrap/Form":"iBZ80","react-bootstrap/Row":"cMC39","@parcel/transformer-js/src/esmodule-helpers.js":"eosz2","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"3hlF1"}],"i5LP7":[function() {},{}]},["d35xq","kvlHm","d8Dch"], "d8Dch", "parcelRequire1c35")