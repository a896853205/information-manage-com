import { useEffect } from 'react';

import { useRouter } from 'next/router';

const Oauth = () => {
  const router = useRouter();
  useEffect(() => {
    if (router?.query?.accessToken) {
      localStorage.setItem('token', `bearer ${router.query.accessToken}`);

      router.push('/home');
    }
  }, [router?.query?.accessToken]);

  // TODO： 好看的loading
  return <>loading...</>;
};

export default Oauth;
