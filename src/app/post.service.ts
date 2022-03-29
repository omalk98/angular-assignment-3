import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from './BlogPost';

const perPage : Number = 6;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private blogPosts:BlogPost[]=[{
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

  constructor(private http:HttpClient) { }

  getPosts(page:Number, tag:String, category:String) : any {
    return this.http.get<any>(`https://assignment-4-server.herokuapp.com/api/posts?page=${page}&perPage=${perPage} ${tag ? `&tag=${tag.replace(/[#]/g, '' )}` : ''} ${category ? `&category=${category}` : ''}`);
  }

  getPostBtId(id:Number) : any{
    return this.http.get<any>(`https://assignment-4-server.herokuapp.com/api/posts?id=${id}`);
  }

  getCategories() : any {
    return this.http.get<any>(`https://assignment-4-server.herokuapp.com/api/categories`);
  }

  getTags() : any {
    return this.http.get<any>(`https://assignment-4-server.herokuapp.com/api/tags`);
  }
}
