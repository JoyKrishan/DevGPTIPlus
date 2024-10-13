import { useState, useEffect } from 'react';
import { useGetUserQuery } from '@/store';
// ProfileIcon component
    // Fetch user data using useGetUserQuery hook
    const { data: user } = useGetUserQuery();

    // Extract the user's first name from the fetched data
    const firstName = user ? user.firstName : '';

    // Log user data for debugging
    console.log("user", user);
    console.log("first name:", firstName);

    // Generates a random hex color
    // Adapted from ChatGPT
    const getRandomColor = () => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        return randomColor;
    };

    // Initialize state for background color
    const [backgroundColor, setBackgroundColor] = useState(() => {
        // Use stored color if available in session storage, otherwise generate a new one
        const storedColor = sessionStorage.getItem('profileIconColor');
        return storedColor || getRandomColor();
    });

    // Effect to set initial background color and store it in session storage
    useEffect(() => {
        if (!sessionStorage.getItem('profileIconColor')) {
            const newColor = getRandomColor();
            setBackgroundColor(newColor);
            sessionStorage.setItem('profileIconColor', newColor);
        }
    }, []);

    // Render the Avatar component with the first letter of the user's first name
    return (
        <Avatar key={firstName} sx={{ bgcolor: backgroundColor }}>
            {firstName ? firstName[0].toUpperCase() : ''}
        </Avatar>
    );
}