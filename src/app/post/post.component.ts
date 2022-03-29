import { Component } from '@angular/core';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {

  public blogPosts : Array<BlogPost> = [{
    "_id": "",
    "title": "",
    "postDate": "",
    "featuredImage": "",
    "post": "",
    "postedBy": "",
    "comments": [
      {
        "_id": "",
        "author": "",
        "comment": "",
        "date": ""
      }
    ],
    "category": "",
    "tags": [],
    "isPrivate": false,
    "views": 0
  }];

  constructor() { }
}
