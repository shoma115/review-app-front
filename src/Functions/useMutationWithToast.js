import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

// mutationFnにはAPI、queryKeyName、successMessage、errorMessageには文字列を投げる
export const useMutationWithToast = (mutationFn, queryKeyName, successMessage, errorMessage) => {
  const queryClient = useQueryClient();

  return useMutation
  ({
    mutationFn: mutationFn, 
    onSuccess: () => {
      // クエリを無効化。データの再フィッチを行い、キャッシュのデータを最新に保つ。
      queryClient.invalidateQueries([queryKeyName]);
      toast.success(successMessage);
    },
    onError: (error) => {
      const { data } = error.response ? error.response.data : null;
      if(data && data.errors) {
        Object.values(data.errors).forEach((messages) => {
          messages.forEach((message) => {
            toast.error(message);
          });
        });
      } else {
        toast.error(errorMessage);
      }
    },
  });
}