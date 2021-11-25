import React,{useContext, useReducer} from 'react';
import{
    SIDEBAR_OPEN,
    SIDEBAR_COLSE
} from '../action';

import reducer from '../reducers/app_reducer';

const AppContext = React.createContext();

const intialState = {
    isSidebarOpen : false,
    
}



export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, intialState);
    const openSidebar = () => {
        dispatch({type:SIDEBAR_OPEN})
    }
    const closeSidebar = () => {
        dispatch({type:SIDEBAR_COLSE})
    }
    return(
        <AppContext.Provider value={{...state, openSidebar, closeSidebar}}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => {
    return useContext(AppContext);
}
