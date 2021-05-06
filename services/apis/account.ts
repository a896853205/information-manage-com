import client from 'services/client';

/**
 * 获取token
 * @param clientId 用户名
 * @param redirectUri 重定向的位置
 * @returns 带有token的对象
 */
export const auth = (
  clientId: string,
  redirectUri: string
): Promise<PT.AccountToken> => {
  return client.get(
    `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`
  );
};
