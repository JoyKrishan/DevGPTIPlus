        const account = await Session.inst.fetchAccount(id);
        if (account == null || !bcrypt.compareSync(password, account.password)) {
            // TODO: Provide feedback
            return;
        }

        if (worker != null) {
            //if (bcrypt.compareSync(password, account.password)) {
            Session.inst.setLoggedInAccount(worker);
            // TODO: Provide feedback (login successful)
            StateManager.loginStatus.publish(LoginStatus.Worker);
            return;
        else {
            // TODO: Provide feedback (login failed)
            console.log("Login Failed");
        if (leader != null) {
            //if (bcrypt.compareSync(password, leader.password)) {
            Session.inst.setLoggedInAccount(leader);
            // TODO: Provide feedback (login successful)
            StateManager.loginStatus.publish(LoginStatus.Leader);
            return;
        }
        else {
            // TODO: Provide feedback (login failed)
            console.log("Login Failed");
        
        if (admin != null) {
        // Hash and check the entered password to the hashed password retrieve from database
        //if (bcrypt.compareSync(password, admin.password)) {
            // We found the matching account!
            Session.inst.setLoggedInAccount(admin);
            // TODO: Provide feedback (login successful)
            StateManager.loginStatus.publish(LoginStatus.Admin);
            return;
        else {
            // TODO: Provide feedback (login failed)
            console.log("Login Failed")
        }     