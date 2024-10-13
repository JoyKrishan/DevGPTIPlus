                                        movies: movies,
                                        localUser: user
    const favoriteMovies = user === undefined ? [] : movies.filter((m)=>localUser.FavoriteMovies.includes(m.id));
                    username: resultUser.Username,
                    password: resultUser.Password,
                    email: resultUser.Email,
                    birthday: resultUser.Birthday,
                    favoritemovies: resultUser.FavoriteMovies
            const foundUser = usersFromApi.find((u)=>u.username === localUser.Username);
                                isFavorite: user.favoritemovies.includes(movie.id)