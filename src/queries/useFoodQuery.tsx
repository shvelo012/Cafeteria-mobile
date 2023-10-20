import { useQuery } from '@tanstack/react-query';

const useFoodQuery = () => {
  const { data, refetch } = useQuery(['food']);

  return { data, refetch };
};

export default useFoodQuery;