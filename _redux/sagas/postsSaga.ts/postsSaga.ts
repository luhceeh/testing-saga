import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  AnimeResultsDataType,
  AnimeFilterDataType
} from "../../../models/IPost";
import {
  fetchPostsFailure,
  fetchPostsSuccess
} from "../../actions/postsActions/postsActions";
import { postTypes } from "../../Actiontypes/postsTypes";

const getPosts = (advanceFilter: AnimeFilterDataType) =>
  axios.get<AnimeResultsDataType>("https://api.jikan.moe/v4/anime");

function* fetchPostsSaga({
  animeFilter
}: {
  type: typeof postTypes.FETCH_POST_REQUEST;
  animeFilter: AnimeFilterDataType;
}) {
  try {
    const response = yield call(getPosts, animeFilter);
    yield put(
      fetchPostsSuccess({
        animeResults: {
          loadingAnimes: false,
          animes: response.data.data,
          pagination: {
            current_page: response.data.pagination.current_page,
            has_next_page: response.data.pagination.has_next_page
          }
        }
      })
    );
  } catch (e) {
    yield put(
      fetchPostsFailure({
        error: e.message
      })
    );
  }
}

function* postsSaga() {
  yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostsSaga)]);
}

export default postsSaga;
