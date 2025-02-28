import { Register } from "@/pages";
import { describe, test, assert, afterEach} from "vitest";
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

describe("Register.tsx", () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    afterEach(() => {
        cleanup();
      });

    test("Register page renders", () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Register />
                </BrowserRouter>
            </Provider>
        );
        const element = screen.getByTestId('Register-page');
        assert(element);
    });
});