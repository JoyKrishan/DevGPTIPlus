import { describe, test, assert, afterEach } from "vitest";
import { render, screen, cleanup } from '@testing-library/react';
import { ResetPasswordVerify } from "@/components";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store'; // Import configureStore from redux-mock-store

describe("ResetPasswordVerify.tsx", () => {
    const initialState = { output: 10 };
    const mockStore = configureStore(); // Create a mock store
    let store;
    afterEach(() => {
        cleanup();
    });

    test("ResetPasswordVerify renders correctly", () => {
        store = mockStore(initialState); // Initialize the mock store
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ResetPasswordVerify />
                </BrowserRouter>
            </Provider>
        );
        const resetPasswordVerifyElement = screen.getByTestId('ResetPasswordVerify');
        assert(resetPasswordVerifyElement);
    });
});