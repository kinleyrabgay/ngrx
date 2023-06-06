import { createReducer, on } from '@ngrx/store';
import { PostsStateInterface } from '../posts/types/postState.interface';
import * as PostsActions from './actions';

// initial state
export const initialState: PostsStateInterface = {
  isLoading: false,
  posts: [],
  error: null,
};

// reducer
export const reducers = createReducer(
  initialState,
  on(PostsActions.getPosts, (state) => ({ ...state, isLoading: true })),
  on(PostsActions.getPostsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    posts: action.posts,
  })),
  on(PostsActions.getPostsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
