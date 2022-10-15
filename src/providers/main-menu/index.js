// @packages
import React, { createContext, useContext, useReducer } from 'react';

// @actions
import { EXPAND_MAIN_MENU, HIDE_MAIN_MENU } from './actions';

// @constants
const MainMenuContext = createContext();
const MainMenuDispatchContext = createContext();
const initialState = {
    expanded: false,
    visible: false
};

const menuReducer = (state, action) => {
    switch (action.type) {
        case EXPAND_MAIN_MENU:
            return { ...state, expanded: action.payload };
        case HIDE_MAIN_MENU:
            return { ...state, visible: action.payload };
        default:
            return state;
    }
};

// eslint-disable-next-line react/prop-types
export const MainMenuProvider = ({ children }) => {
    const [state, dispatch] = useReducer(menuReducer, initialState);

    return (
        <MainMenuContext.Provider value={state}>
            <MainMenuDispatchContext.Provider value={dispatch}>
                {children}
            </MainMenuDispatchContext.Provider>
        </MainMenuContext.Provider>
    );
};

export const useMainMenuContext = () => {
    const context = useContext(MainMenuContext);

    if (!context) {
        throw new Error('useMainMenuContext should be invoked within a MainMenuProvider');
    }

    return context;
};

export const useMainMenuDispatch = () => {
    const context = useContext(MainMenuDispatchContext);

    if (!context) {
        throw new Error('useMainMenuDispatch should be invoked within a MainMenuProvider');
    }

    return context;
};

export const useMainMenu = () => [useMainMenuContext(), useMainMenuDispatch()];
