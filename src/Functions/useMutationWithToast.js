import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

// mutationFn、successFnにはメソッドを投げる。
export const useMutationWithToast = (mutationFn, successFn, errorMessage) => {

  return useMutation
  ({
    mutationFn: mutationFn, 
    onSuccess: successFn,
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