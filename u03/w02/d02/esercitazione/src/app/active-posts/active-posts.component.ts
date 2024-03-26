import { Component, OnInit } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent implements OnInit {
  activePosts: PostInterface[] = [];

  constructor(private postSrv: PostService) {}
  ngOnInit(): void {
    this.activePosts = this.postSrv.getActivePosts();
  }
}
// this.active = this.activePosts;
// active!: PostInterface[]
//  get activePosts(): PostInterface[] {
//     return this.posts.filter((post) => post.active);
//   }
