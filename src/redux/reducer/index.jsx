/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import authReducers from './auth';
import recipeDetail from './recipeDetail';
import recipeDeleteReducers from './deleteMenu';
import RecipeReducers from './getRecipe';
import CreateRecipe from './createRecipe';
import EditRecipeReducers from './editRecipe';
import userReducers from './getUsers';
import updateUser from './editUser';

const rootReducer = combineReducers({
  authReducers,
  recipeDetail,
  recipeDeleteReducers,
  RecipeReducers,
  CreateRecipe,
  EditRecipeReducers,
  userReducers,
  updateUser,
});

export default rootReducer;
