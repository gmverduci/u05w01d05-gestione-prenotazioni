import { Component, ViewChild, OnInit } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { SinglePostComponent } from '../single-post/single-post.component';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  posts: PostInterface[] = [];
  post!: PostInterface;
  related: PostInterface[] = [];
  tags!: string[];

  @ViewChild('singlePost') singlePost!: SinglePostComponent;

  constructor(private postSrv: PostService) {}

  ngOnInit(): void {
    this.posts = this.postSrv.getPosts();
    this.post = this.postSrv.getTopPost();
    this.related = this.postSrv.getRandomPosts(4);
    this.tags = this.postSrv.getTags();
    console.log(this.tags);
  }

  editPost() {
    this.postSrv.editPost();
  }

  filterPosts(tag: string) {
    this.posts = this.postSrv.filterPosts(tag);
  }
}
