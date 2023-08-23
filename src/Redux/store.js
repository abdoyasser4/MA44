import { createStore } from 'redux';
import rootReducers from './reducer/m';

const store = createStore(rootReducers);
export default store;
