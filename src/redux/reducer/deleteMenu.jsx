/* eslint-disable prettier/prettier */
const initialState = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: null,
};

const recipeDeleteReducers = (state = initialState, action) => {
  if (action.type === 'DELETE_RECIPE_PENDING') {
    return {
      ...state,
      data: null,
      isError: false,
      isSuccess: false,
      isLoading: true,
      errorMessage: null,
    };
  } else if (action.type === 'DELETE_RECIPE_SUCCESS') {
    return {
      ...state,
      data: action.payload,
      isError: false,
      isSuccess: true,
      isLoading: false,
      errorMessage: null,
    };
  } else if (action.type === 'DELETE_RECIPE_ERROR') {
    return {
      ...state,
      data: null,
      isError: true,
      isSuccess: false,
      isLoading: false,
      errorMessage: action.payload,
    };
  } else if (action.type === 'DELETE_RECIPE_RESET') {
    return {
      ...state,
      data: null,
      isError: false,
      isSuccess: false,
      isLoading: false,
      errorMessage: null,
    };
  } else {
    return state;
  }
};

export default recipeDeleteReducers;
