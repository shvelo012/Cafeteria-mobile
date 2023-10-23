import { useQuery } from '@tanstack/react-query';
import { DeviceApi } from '../../../API/API';

'axios';
const getCredentialsAPI = `http://${DeviceApi}:4000/admin/getcredentials`;

const fetchCredentialsFucntion = async () => {
  try {
    const response = await fetch(getCredentialsAPI);
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
