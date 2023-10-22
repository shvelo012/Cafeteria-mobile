import { useQuery } from '@tanstack/react-query';
import { DeviceApi } from '../../../API/API';

const getFoodAPI = `http://${DeviceApi}:4000/food/all`;

const fetchDataFunction = async () => {
  try {
    const response = await fetch(getFoodAPI);
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
  const { data: foodData, error: foodError, isLoading: foodLoading } = useQuery({
    queryKey: ['food'],
    queryFn: fetchDataFunction,
  });

  return {
    foodData,
    foodError,
    foodLoading,
  };
};
