import { getByText, render, screen } from '@testing-library/react';
        const {getByPlaceholderText, getByText} = render(

        expect(getByText('LifeQuest')).toBeInTheDocument();