User.findOne({ username: 'johndoe' })
.then(user => console.log(user))
.catch(err => console.log(err));