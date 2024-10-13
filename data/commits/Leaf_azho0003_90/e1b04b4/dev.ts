        super(id, firstName, lastName, email, currentHospital, accountActivated);
        return new Worker(EmployeeID.generate(), firstName, lastName, null, hospital, false, []);