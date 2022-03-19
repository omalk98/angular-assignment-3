import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import blogData from '../blogData.json';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  public blogPosts : Array<BlogPost> = blogData;

  constructor() { }

  ngOnInit(): void {
  }

}
