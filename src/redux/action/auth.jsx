/* eslint-disable prettier/prettier */
import axios from 'axios';

const base_url = 'https://recipe-be-ekyourkids-projects.vercel.app';

export const authLogin = data => async dispatch => {
  try {
    dispatch({type: 'AUTH_PENDING'});
    const res = await axios.post(base_url + '/users/login', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    dispatch({type: 'AUTH_SUCCESS', payload: res.data});
  } catch (err) {
    console.log(err?.message ? err.message : err);
    dispatch({
      type: 'AUTH_ERROR',
      payload: err?.response?.data?.message ?? 'login error',
    });
  }
};

export const authLogout = () => async dispatch => {
  dispatch({type: 'AUTH_LOGOUT'});
};

export const authRegist = (data, navigation) => async dispatch => {
  try {
    dispatch({type: 'AUTH_PENDING'});
    const res = await axios.post(base_url + '/users/regist', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    console.log(res);
    dispatch({type: 'AUTH_SUCCESS', payload: res.data});
    navigation.navigate('Login');
  } catch (err) {
    console.log(err);
    console.log(err?.message ? err.message : err);
    dispatch({
      type: 'AUTH_ERROR',
      payload: err?.response?.data?.message ?? 'regist error',
    });
  }
};
