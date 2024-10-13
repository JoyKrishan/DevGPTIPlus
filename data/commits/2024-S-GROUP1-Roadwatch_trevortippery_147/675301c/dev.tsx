// ai-gen start (ChatGPT-3.5, 0)
import { ResetPassword } from "@/pages";
import { describe, test, assert, afterEach } from "vitest";
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

describe("ResetPassword.tsx", () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    afterEach(() => {
        cleanup();
    });

    test("Logo renders", () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ResetPassword />
                </BrowserRouter>
            </Provider>
        );
        const element = screen.getByTestId('ResetPassword-logo');
        assert(element);
    });

    test("Fields render", () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ResetPassword />
                </BrowserRouter>
            </Provider>
        );
        const element = screen.getByTestId('ResetPassword-field');
        assert(element);
    });
});
// ai-gen end