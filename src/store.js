import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import { userLoginReducer,userUpdateReducer } from "./reducers/userReducers";
import {userRegisterReducer} from "./reducers/userReducers";
import { notesReducer,noteCreateReducer,noteUpdateReducer,noteDeleteReducer } from "./reducers/notesReducer";


const reducer = combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userUpdate:userUpdateReducer,
    noteList : notesReducer,
   noteCreate: noteCreateReducer,
   noteUpdate: noteUpdateReducer,
   noteDelete: noteDeleteReducer,
})

const user = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null;
const initialState ={
    userLogin:{userInfo:user}
};

const middleware= [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
