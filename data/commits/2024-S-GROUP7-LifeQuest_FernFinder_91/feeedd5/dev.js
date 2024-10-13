        //Check that the h1 title is there
        //Check that there is an email input field
        //Check that there is a password input field
        //Check that the login and signup buttons are there
        expect(getByText('Login')).toBeInTheDocument();
        expect(getByText('Signup')).toBeInTheDocument();
