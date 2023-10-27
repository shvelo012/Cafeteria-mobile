import { useQuery } from '@tanstack/react-query';
import { APIs } from '../../../APIs/APIs';

export const fetchIsOpenData = async () => {
  try {
    const response = await fetch(APIs.IsOpenAPI);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const useIsOpenData = () => {
  const { data: isOpenData, error: isOpenError, isLoading: isOpenLoading, refetch: isOpenRefetch } = useQuery({
    queryKey: ['IsOpen'],
    queryFn: fetchIsOpenData,
  });

  return {
    isOpenData,
    isOpenError,
    isOpenLoading,
    isOpenRefetch
  };
};
