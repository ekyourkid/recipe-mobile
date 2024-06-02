/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import authReducers from './auth';
import recipeDetail from './recipeDetail';
// import auth from './auth';
// import menu_get from './menu_get';
// import menu_post from './menu_post';
// import menu_delete from './menu_delete';
// import menu_detail from './menu_detail';
// import menu_update from './menu_update';
// import user_get from './user_get';

const rootReducer = combineReducers({
  authReducers,
  recipeDetail,
});

export default rootReducer;
