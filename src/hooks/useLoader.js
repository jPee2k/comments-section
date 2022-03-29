import { useEffect } from 'react';

const useLoader = ({ isSuccess, isLoading, isError, handleLoader }) => {
  const showSpinner = () => {
    handleLoader(true);
  };

  const hideSpinner = () => {
    handleLoader(false);
  };

  useEffect(() => {
    isLoading && showSpinner();
    (isSuccess || isError) && hideSpinner();
  }, [isLoading, isSuccess, isError]);
};

export default useLoader;
