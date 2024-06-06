/* eslint-disable prettier/prettier */
import axios from 'axios';

const base_url = 'https://recipe-be-ekyourkids-projects.vercel.app';

export const getUserById = id => async (dispatch, getState) => {
  try {
    dispatch({type: 'GET_USER_PENDING'});
    const res = await axios.get(`${base_url}/users/${id}`);

    dispatch({type: 'GET_USER_SUCCESS', payload: res.data});
  } catch (err) {
    console.log(err?.message ? err.message : err);
    dispatch({type: 'GET_USER_ERROR'});
  }
};

export const updateUser =
  (id, data, navigation) => async (dispatch, getState) => {
    try {
      console.log(id, data, 'MASOOOOOOKKK');
      dispatch({type: 'UPDATE_USER_PENDING'});
      const res = await axios.put(base_url + '/users/' + id, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(res);
      dispatch({type: 'UPDATE_USER_SUCCESS', payload: res.data});
      navigation.goBack();
    } catch (err) {
      console.log(err);
      console.log(err?.message ? err.message : err);
      dispatch({
        type: 'UPDATE_USER_ERROR',
        payload: err?.response?.data?.message ?? 'update user error',
      });
    }
  };
