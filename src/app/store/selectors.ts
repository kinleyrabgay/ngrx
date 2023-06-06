import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../types/appState.interface';

export const selectFeature = (state: AppStateInterface) => state.posts;

// selector that can be reuse
export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

// selector that can be reuse
export const postSelector = createSelector(
  selectFeature,
  (state) => state.posts
);

// selector that can be reuse
export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
