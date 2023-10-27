import { useQuery } from '@tanstack/react-query';
import { APIs } from '../../../APIs/APIs';

const fetchCredentialsFucntion = async () => {
  try {
    const response = await fetch(APIs.getCredentialsAPI);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const useCredentialsQuery = () => {
  const { data: credentialsData, error: credentialsError, isLoading: credentialsIsLoading } = useQuery({
    queryKey: ['food'],
    queryFn: fetchCredentialsFucntion,
  });

  return {
    credentialsData,
    credentialsError,
    credentialsIsLoading,
  };
};
