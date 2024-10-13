                                                token: token,
                                        token: token,
            fetch(`${"https://ghostwriter-movies-1d2fe76cf812.herokuapp.com"}/users/${user.Username}/movies/${encodeURIComponent(movie.id)}`, {
            fetch(`${"https://ghostwriter-movies-1d2fe76cf812.herokuapp.com"}/users/${user.Username}/movies/${encodeURIComponent(movie.id)}`, {
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
                    lineNumber: 91,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Body, {
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                            to: `/movies/${encodeURIComponent(movie.id)}`,
                            className: "movie-view",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Title, {
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/movie-card/movie-card.jsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Text, {
                            children: movie.description
                        }, void 0, false, {
                            fileName: "src/components/movie-card/movie-card.jsx",
                            lineNumber: 96,
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
                                lineNumber: 99,
                            }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                                variant: "primary",
                                style: {
                                    width: "100px"
                                },
                                onClick: handleAddToFavorites,
                                children: "Add"
                                lineNumber: 101,
                                columnNumber: 11
                        }, void 0, false, {
                            fileName: "src/components/movie-card/movie-card.jsx",
                            lineNumber: 97,
                            columnNumber: 9
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/movie-card/movie-card.jsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            columnNumber: 7
    const [username, setUsername] = (0, _react.useState)(storedUser.Username);
    const [password, setPassword] = (0, _react.useState)(storedUser.Password);
    const [email, setEmail] = (0, _react.useState)(storedUser.Email);
    const [birthday, setBirthday] = (0, _react.useState)(storedUser.Birthday);
        fetch(`${"https://ghostwriter-movies-1d2fe76cf812.herokuapp.com"}/users/${user.Username}`, {
        fetch(`${"https://ghostwriter-movies-1d2fe76cf812.herokuapp.com"}/users/${storedUser.Username}`, {
_s(ProfileView, "EOiUb0s0m559UOqxtrdslg9pbjY=");
                    children: "My Favourite Movies"
                                to: `/users/${user.Username}/movies/${encodeURIComponent(movie.id)}`
                                isFavorite: user.favoriteMovies.includes(movie.id)
                columnNumber: 7
                            value: formData.Username,
                            value: formData.Password,
                            value: formData.Email,
                            value: formData.Birthday /*.slice(0, 10)*/ ,