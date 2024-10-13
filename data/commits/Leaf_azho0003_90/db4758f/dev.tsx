        return (ValidateUtil.stringIsValid(username) && ValidateUtil.stringIsValid(password))
        if (worker != null && worker.accountActivated && worker.password != null) {
            // Hash and check the entered password to the hashed password retrieve from database
            if (bcrypt.compareSync(password, worker.password)) {
                // We found the matching account!
                Session.inst.setLoggedInAccount(worker);
                // TODO: Provide feedback (login successful)
                StateManager.loginStatus.publish(LoginStatus.Worker);
                return;
            }
            else {
                // TODO: Provide feedback (login failed)
                console.log("Login Failed");
            }
        if (leader != null && leader.accountActivated && leader.password != null) {
            // Hash and check the entered password to the hashed password retrieve from database
            if (bcrypt.compareSync(password, leader.password)) {
                // We found the matching account!
                Session.inst.setLoggedInAccount(leader);
                // TODO: Provide feedback (login successful)
                StateManager.loginStatus.publish(LoginStatus.Leader);
                return;
            }
            else {
                // TODO: Provide feedback (login failed)
                console.log("Login Failed");
            }
        if (admin != null && admin.accountActivated && admin.password != null) {
            // Hash and check the entered password to the hashed password retrieve from database
            if (bcrypt.compareSync(password, admin.password)) {
                // We found the matching account!
                Session.inst.setLoggedInAccount(admin);
                // TODO: Provide feedback (login successful)
                StateManager.loginStatus.publish(LoginStatus.Admin);
                return;
            }
            else {
                // TODO: Provide feedback (login failed)
                console.log("Login Failed")
            }
            