import ls from './storage';

export const setToken = (token) => {
  ls.set('token', token);
}

export const getToken = () => {
  return ls.get('token');
}

export const removeToken = () => {
  ls.set('token', '');
}