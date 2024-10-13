        // Check if the account exists
        const account = await Session.inst.fetchAccount(id);
        if (account == null) {
            // TODO: Provide feedback (no account found)
            console.log("Account not found.");
            return;
        }

        // Update password on account
        if (hashedPassword != undefined) {
            account.setPassword(hashedPassword);
            Session.inst.updateAccount(account);