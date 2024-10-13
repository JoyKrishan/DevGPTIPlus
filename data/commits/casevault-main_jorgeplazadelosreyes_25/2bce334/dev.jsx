import React, { useState, useEffect } from 'react';
import { Box, Grid, Container, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import axios from "axios";
const CASES_API = import.meta.env.VITE_API_CASES_URL;
    const [cases, setCases] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCases = async () => {
            console.log(CASES_API);
            try {
                const response = await axios.get(CASES_API);
                setCases(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCases();
    }, []); 

                    src="src/assets/Shutterstock_2072700533.jpg"
                {cases.map(caseData => (