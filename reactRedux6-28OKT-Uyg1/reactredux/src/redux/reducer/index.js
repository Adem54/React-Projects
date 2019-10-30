import {combineReducers} from "redux";
import reducerCount from "./counterReducer";

const reducers=combineReducers({
    reducerCount
})

export default reducers;






/*

import {combineReducers} from "redux";
import counterReducer  from   "./counterReducer";

const reducers=combineReducers({
    counterReducer});
    //Burda ES6 ile gelen eğer bir objede property ve value aynı isimde ise o zaman birini yazmamız yeterli olacaktır  yani {counterReducer} ile{counterReducer:counterReducer} aynı şeydir

    export default reducers;

    */