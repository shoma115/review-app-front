import * as revivewAPI from "../APIs/ReviewAPI";
import { toastSucsess } from "../commonComponents/Toast";
import { useMutationWithToast } from "../Functions/useMutationWithToast";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetReview = () => {
  const { reviews } = useQuery(['reviews'], revivewAPI.getAPI);
  return reviews
}

export const usePostReview = () => {
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