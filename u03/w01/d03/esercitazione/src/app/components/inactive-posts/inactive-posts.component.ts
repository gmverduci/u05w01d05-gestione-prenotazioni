import { Component } from "@angular/core";
import { Post } from "src/app/models/post.interface";

@Component({
  selector: "app-inactive-posts",
  templateUrl: "./inactive-posts.component.html",
  styleUrls: ["./inactive-posts.component.scss"],
})
export class InactivePostsComponent {
  post!: Post;
  posts!: Post[];

  constructor() {
    this.activePosts();
  }

  async activePosts() {
    const response = await fetch("../../assets/db.json");
    const data = await response.json();
    this.posts = data.filter((post: Post) => post.active === false);
  }
}
