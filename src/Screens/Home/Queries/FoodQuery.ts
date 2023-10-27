import { useQuery } from '@tanstack/react-query';
import { APIs } from '../../../APIs/APIs';

const fetchDataFunction = async () => {
  try {
    const response = await fetch(APIs.getFoodAPI);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const useFoodData = () => {
  const { data: foodData, error: foodError, isLoading: foodLoading, refetch: foodRefetch } = useQuery({
    queryKey: ['food'],
    queryFn: fetchDataFunction,
  });

  return {
    foodData,
    foodError,
    foodLoading,
    foodRefetch
  };
};
