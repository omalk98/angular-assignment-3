import { Component, Input } from '@angular/core';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent {
  
  @Input('post') postList : Array<BlogPost> | undefined;

  constructor() { }
}
