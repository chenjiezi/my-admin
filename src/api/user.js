import request from '@/utils/request'

export function login (data) {
  console.log('data:', data)
  const { username, password } = data;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        resolve({ code: 200, data: { token: 'token' }, message: '登录成功' });
      } else {
        reject({ code: 200, data: null, message: '账号或密码错误~~~~' });
      }
    }, 888);
  })
}

export function logout () {
  return Promise.resolve({ code: 200 });
}