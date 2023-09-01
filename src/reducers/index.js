import taskReducers from "./taskReducers";
import { combineReducers} from 'redux';

const rootReducers = combineReducers({
    task: taskReducers
})
// 
export default rootReducers;
