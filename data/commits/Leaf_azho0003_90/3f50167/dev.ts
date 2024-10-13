        password: string | null
        super(id, firstName, lastName, email, currentHospital, accountActivated, password);
        return new Worker(EmployeeID.generate(), firstName, lastName, null, hospital, false, [], null);