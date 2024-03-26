import { Component, Input } from '@angular/core';
import { Post } from '../models/post.interface';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent {
@Input() posts!: Post[];
}
