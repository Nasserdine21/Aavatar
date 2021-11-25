import{
    SIDEBAR_COLSE,
    SIDEBAR_OPEN
} from '../action';

const app_reducer = (state, action) => {
    if(action.type === SIDEBAR_OPEN){
        return{...state,
            isSidebarOpen: true}
    }

    if(action.type === SIDEBAR_COLSE){
        return{...state,
            isSidebarOpen: false}
    }
    
    throw new Error(`No action is matched in ${action.type}`);
}
export default app_reducer;