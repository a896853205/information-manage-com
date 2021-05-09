import client from 'services/client';

export const messages = (): Promise<MC.Message> => {
  return client.get('messages');
};
