/* eslint-disable prettier/prettier */
const initialState = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
};

const RecipeReducers = (state = initialState, action) => {
  if (action.type === 'GET_RECIPE_PENDING') {
    return {
      ...state,
      data: null,
      isError: false,
      isSuccess: false,
      isLoading: true,
    };
  } else if (action.type === 'GET_RECIPE_SUCCESS') {
    return {
      ...state,
      data: action.payload,
      isError: false,
      isSuccess: true,
      isLoading: false,
    };
  } else if (action.type === 'GET_RECIPE_ERROR') {
    return {
      ...state,
      data: null,
      isError: true,
      isSuccess: false,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default RecipeReducers;
