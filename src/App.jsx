import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';

import fetchUserData from 'services/userAPI.js';
import useLoader from 'hooks/useLoader.js';

import CommentsBlock from 'components/CommentsBlock';
import Container from 'components/Container';
import Spinner from 'components/Spinner';

const App = () => {
  const [isVisible, setVisibility] = useState(false);
  const { isSuccess, isLoading, isError, error, data } = useQuery('user', fetchUserData, {
    refetchOnWindowFocus: false,
  });

  useLoader({ isSuccess, isLoading, isError, handleLoader: setVisibility });
  useEffect(() => {
    error && toast.error(error?.message);
  }, [isError]);

  return (
    <>
      <Container maxWidth="720px">
        <CommentsBlock userData={data} isAuth={isSuccess} handleLoader={setVisibility}/>
        <ToastContainer/>
      </Container>

      <Spinner isLoading={isVisible}/>
    </>
  );
};

export default App;
