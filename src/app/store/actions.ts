import { createAction, props } from '@ngrx/store';
import { PostInterface } from '../posts/types/post.interface';

// create action
export const getPosts = createAction('[Posts] Get Posts');

// post success
export const getPostsSuccess = createAction(
  '[Posts] Get Posts success',
  props<{ posts: PostInterface[] }>()
);

// post failed
export const getPostsFailure = createAction(
  '[Posts] Get Posts failure',
  props<{ error: string }>()
);
