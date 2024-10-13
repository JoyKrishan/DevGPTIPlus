                    Username: resultUser.Username,
                    Password: resultUser.Password,
                    Email: resultUser.Email,
                    Birthday: resultUser.Birthday,
                    FavoriteMovies: resultUser.FavoriteMovies
            const foundUser = usersFromApi.find((u)=>u.Username === localUser.Username);