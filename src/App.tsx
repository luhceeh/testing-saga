import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest } from "../_redux/actions/postsActions/postsActions";
import { RootState } from "../_redux/reducers/rootReducer";

const App = () => {
  const dispatch = useDispatch();
  const { pending, animeResults, error } = useSelector(
    (state: RootState) => state.animes
  );
  console.log(animeResults);
  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);

  return (
    <div>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        animeResults.animes?.map((todo, index) => (
          <div key={todo.malId}>
            {++index}. {todo.title_english}
          </div>
        ))
      )}
    </div>
  );
};

export default App;
