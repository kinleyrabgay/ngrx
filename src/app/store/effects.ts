import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PostActions from './actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PostsService } from '../posts.service';

@Injectable()
export class PostsEffects {
  getPosts$ = createEffect(() =>
    this.action$.pipe(
      ofType(PostActions.getPosts),
      mergeMap(() => {
        // return stream of data from api
        return (
          this.postsService
            .getPosts()

            // react to call
            .pipe(
              map((posts) => PostActions.getPostsSuccess({ posts })),
              catchError((error) =>
                of(PostActions.getPostsFailure({ error: error.message }))
              )
            )
        );
      })
    )
  );

  constructor(private action$: Actions, private postsService: PostsService) {}
}
