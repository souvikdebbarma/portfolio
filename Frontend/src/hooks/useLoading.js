import { useState } from 'react';

export const useLoading = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async (...args) => {
    try {
      setIsLoading(true);
      setError(null);
      await callback(...args);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { execute, isLoading, error };
}; 
  
  const UseLoading = () =>  {
	return (
	  <div>
	  </div>
	);
  }
  
  export default UseLoading;
   