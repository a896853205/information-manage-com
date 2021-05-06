import client from 'services/client';

/**
 * 获取账号数据
 * @returns 账号数据
 */
export const account = (): Promise<PT.Account> => {
  return client.get('http://localhost:7002/account');
};
