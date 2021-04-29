import client from 'services/client';

/**
 * 获取token
 * @param username 用户名
 * @param password 密码
 * @returns 带有token的对象
 */
export const auth = (
  username: string,
  password: string
): Promise<PT.AccountToken> => {
  return client.get('/auth', {
    params: {
      username,
      password,
    },
  });
};
