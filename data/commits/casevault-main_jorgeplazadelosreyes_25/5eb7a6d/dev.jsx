import React, { useState } from 'react';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
    const navigate = useNavigate();


            localStorage.setItem("authenticated", true)
           
            navigate("/home");

                        Registrarse
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="first_name"
                            label="Nombre"
                            id="first_name"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="last_name"
                            label="Apellido"
                            id="last_name"
                        />
                            Registrarme
}