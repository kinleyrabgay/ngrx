import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from '../store/effects';

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature([PostsEffects]),
  ],
  exports: [PostComponent],
})
export class PostsModule {}
