import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as PostsAction from '../../store/actions';
import { isLoadingSelector, postSelector } from 'src/app/store/selectors';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { PostInterface } from '../types/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  isLoading$: Observable<boolean>;
  getPost$: Observable<PostInterface[]>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.getPost$ = this.store.pipe(select(postSelector));
  }
  ngOnInit(): void {
    this.store.dispatch(PostsAction.getPosts());
  }
}
