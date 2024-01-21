import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as authApi from '../APIs/AuthAPI';
import { toast } from 'react-toastify';
import { toastSucsess, toastError } from '../commonComponents/Toast';
// APIがaxiosエラーを投げてくる可能性があるため追加
import axios from 'axios';

export const useUser = () => {
  const { user } = useQuery(['users'], authApi.getUsers);
  return user;
}

const useMutationWithToast = (mutationFn, successMessage, errorMessage) => {
  const queryClient = useQueryClient();

  return useMutation
  ({
    mutationFn: mutationFn, 
    onSuccess: () => {
      // usersキーのクエリを無効化。データの再フィッチを行い、キャッシュのデータを最新に保つ。
      queryClient.invalidateQueries(['users']);
      toastSucsess(successMessage);
    },
    onError: (error) => {
      const { data } = error.response ? error.response.data : null;
      if(data && data.errors) {
        Object.values(data.errors).forEach((messages) => {
          messages.forEach((message) => {
            toastError(message);
          });
        });
      } else {
        toastError(errorMessage);
      }
    },
  });
}

export const useRegister = () => {
  return useMutationWithToast(
    authApi.register,
    '登録が完了しました',
    '登録に失敗しました',
  )
};

export const useLogin = () => {
  return useMutationWithToast(
    authApi.login, 
    'ログインに成功しました', 
    'ログインに失敗しました',
    )
};

export const useLogout = () => {
  return useMutationWithToast(
    authApi.logout,
    'ログアウトしました',
    'ログアウトに失敗しました。',
  )
};