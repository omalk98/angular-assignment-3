import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styles: ['']
})
export class FooterPostsComponent implements OnInit {
  
  postList : Array<BlogPost> | undefined;

  constructor(private post:PostService) { }

  ngOnInit(): void {
    this.post.getPosts(1, "", "").subscribe((data: BlogPost[] | undefined) => this.postList = data?.slice(0, 3))
  }

  
}
