import { postTypes } from "../../Actiontypes/postsTypes";
import { PostsActions, PostsState } from "../../types/types";

const initialState: PostsState = {
  pending: false,
  animeResults: {
    loadingAnimes: false,
    animes: [],
    pagination: {
      current_page: 1,
      has_next_page: false
    }
  },
  error: null
};

export default (state = initialState, action: PostsActions) => {
  switch (action.type) {
    case postTypes.FETCH_POST_REQUEST:
      return {
        ...state,
        pending: true
      };
    case postTypes.FETCH_POST_SUCCESS:
      console.log(action.payload.animeResults);
      return {
        ...state,
        pending: false,
        animeResults: {
          loadingAnimes: false,
          animes: action.payload.animeResults.animes,
          pagination: {
            current_page: action.payload.animeResults.pagination.current_page,
            has_next_page: action.payload.animeResults.pagination.has_next_page
          }
        },
        error: null
      };
    case postTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        pending: false,
        animes: [],
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};
