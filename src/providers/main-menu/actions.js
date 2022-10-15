// @scripts
import { useMainMenuDispatch } from '.';

// @actions
export const EXPAND_MAIN_MENU = 'EXPAND_MAIN_MENU';
export const HIDE_MAIN_MENU = 'HIDE_MAIN_MENU';

export const useExpandMainMenu = () => {
    const dispatch = useMainMenuDispatch();

    const expandMainMenu = bool => dispatch({
        type: EXPAND_MAIN_MENU,
        payload: bool
    });

    return expandMainMenu;
};

export const useHideMainMenu = () => {
    const dispatch = useMainMenuDispatch();

    const hideMainMenu = bool => dispatch({
        type: HIDE_MAIN_MENU,
        payload: !bool
    });

    return hideMainMenu;
};
