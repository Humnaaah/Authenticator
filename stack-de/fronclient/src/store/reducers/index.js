import AuthReducer from "./auth_reducer";
import PostsReducer from "./posts_reducer";
import {combineReducers} from 'redux';
import UserReducer from "./user_reducer";
import Reducer1 from "./reducer1";

const rootReducer = combineReducers({
    auth_reducer:AuthReducer,
    user_reducer: UserReducer,
    posts_reducer:PostsReducer,
    reducer1:Reducer1
})

export default rootReducer;