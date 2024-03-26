import { Component, OnInit } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent implements OnInit {
  inactivePosts: PostInterface[] = [];

  constructor(private postSrv: PostService) {}
  ngOnInit(): void {
    this.inactivePosts = this.postSrv.getInactivePosts();
  }
}
