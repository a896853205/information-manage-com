import { useEffect } from 'react';

import { useRouter } from 'next/router';
import client from 'services/client';

const Oauth = () => {
  // TODO: 将token从url中取出来，塞到axios的header中，然后跳转到home
  const router = useRouter();
  useEffect(() => {
    if (router?.query?.accessToken) {
      client.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${router.query.accessToken}`;
      router.push('/home');
    }
  }, [router?.query?.accessToken]);

  return <></>;
};

export default Oauth;
