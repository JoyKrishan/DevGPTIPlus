                    username: resultUser.username,
                    password: resultUser.password,
                    email: resultUser.email,
                    birthday: resultUser.birthday,
                    favoritemovies: resultUser.favoriteMovies
            const foundUser = usersFromApi.find((u)=>u.username === localUser.username);