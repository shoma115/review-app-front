import * as revivewAPI from "../APIs/ReviewAPI";
import { toastSucsess } from "../commonComponents/Toast";
import { useMutationWithToast } from "../Functions/useMutationWithToast";
import { useQuery, useQueryClient } from "@tanstack/react-query";

// レビュー取得APIへのクエリ
export const useGet = (lessonId) => {
  const { data, error, isLoading, isError} = useQuery({queryKey: ['reviews', lessonId], queryFn: () => revivewAPI.getAPI(lessonId)});
  return {data, isLoading, isError};
}

// レビュー検索APIへのクエリ
export const useSearch = (searchWord, lessonId) => {
  const { data, error, isLoading, isError } = useQuery({queryKey: ['reviews', searchWord, lessonId], queryFn: () => revivewAPI.searchAPI(searchWord, lessonId)});
  return {data, isLoading, isError};
}

// レビュー投稿APIへのクエリ
export const usePost = () => {
  const queryClient = useQueryClient();
  const onSuccess = () => {
    queryClient.invalidateQueries(['reviews'])
    toastSucsess("投稿が完了しました。");
  }

  useMutationWithToast(
    revivewAPI.postAPI,
    onSuccess,
    "投稿に失敗しました。"
  )
}