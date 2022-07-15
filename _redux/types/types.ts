import { AnimeDataType } from "../../models/IPost";
import { postTypes } from "../Actiontypes/postsTypes";

export interface AnimeResultsDataType {
  loadingAnimes: boolean;
  animes: AnimeDataType[];
  pagination: {
    current_page: number,
    has_next_page: boolean,
  };
}

export interface PostsState {
  pending: boolean;
  animeResults: AnimeResultsDataType;
  error: string | null;
}

export interface FetchPostsSuccessPayload {
  animeResults: AnimeResultsDataType
}

export interface FetchPostsFailurePayload {
  error: string;
}

export interface FetchPostsRequest {
  type: typeof postTypes.FETCH_POST_REQUEST;
}

export type FetchPostsSuccess = {
  type: typeof postTypes.FETCH_POST_SUCCESS;
  payload: FetchPostsSuccessPayload;
};

export type FetchPostsFailure = {
  type: typeof postTypes.FETCH_POST_FAILURE;
  payload: FetchPostsFailurePayload;
};

export type PostsActions =
  | FetchPostsRequest
  | FetchPostsSuccess
  | FetchPostsFailure;
