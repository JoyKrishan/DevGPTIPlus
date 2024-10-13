const newUser = new User({
  username: 'johndoe',
  password: 'secret',
  email: 'johndoe@example.com'
});

newUser.save()
.then(user => console.log(user))
.catch(err => console.log(err));