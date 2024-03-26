import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from 'src/app/models/post.interface';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    post!: Post;
    posts: Post[] = [];
  
    constructor() {
      this.getPosts();
    }
  
    async getPosts() {
      let id = 0;
      let hasNextPost = true;
    
      while (hasNextPost) {
        const response = await fetch(`http://localhost:3000/${id}`);
        const data = await response.json();
    
        if (data && Object.keys(data).length > 0) {
          this.posts.push(data);
          id++; 
          console.log(`Aggiunto post con id ${id - 1}`);
        } else {
          hasNextPost = false;
          console.log('Array di post terminato');
        }
      }
    
      console.log('posts:', this.posts);
    }
}
