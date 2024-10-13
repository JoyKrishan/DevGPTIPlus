import { Login } from "@/pages"
import { describe, test, assert, afterEach} from "vitest";
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

describe("Login.tsx", () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    afterEach(() => {
        cleanup();
      });

    test("Text fields render", () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        );
        const element = screen.getByTestId('Login-textField');
        assert(element);
    });

    test("Logo renders", () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        );
        const element = screen.getByTestId('Login-logo');
        assert(element);
    });

    test("Buttons render", () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        );
        const element = screen.getByTestId('Login-btns');
        assert(element);
    });

    test("Register button renders", () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        );
        const element = screen.getByTestId('Login-register');
        assert(element);
    });
});
