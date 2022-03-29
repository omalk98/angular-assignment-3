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

  getPosts(page:number, tag:string, category:string) : any {
    return this.http.get<any>(`https://assignment-4-server.herokuapp.com/api/posts?page=${page}&perPage=${perPage}${tag ? `&tag=${tag.replace(/[#]/g, '' )}` : ''} ${category ? `&category=${category}` : ''}`);
  }

  getPostById(id:number) : any{
    return this.http.get<any>(`https://assignment-4-server.herokuapp.com/api/posts/${id}`);
  }

  getCategories() : any {
    return this.http.get<any>(`https://assignment-4-server.herokuapp.com/api/categories`);
  }

  getTags() : any {
    return this.http.get<any>(`https://assignment-4-server.herokuapp.com/api/tags`);
  }

  getAllPosts():Observable<BlogPost[]> {
    return this.http.get<any>(`https://assignment-4-server.herokuapp.com/api/posts?page=1&perPage=${Number.MAX_SAFE_INTEGER}`);
  }

  newPost(data: BlogPost): Observable<any> {
    return this.http.post<any>(`https://assignment-4-server.herokuapp.com/api/posts`, data);
  }

  updatePostById(id: string, data: BlogPost): Observable<any> {
    return this.http.put<any>(`https://assignment-4-server.herokuapp.com/api/posts/${id}`, data);
  }

  deletePostById(id: string): Observable<any> {
    return this.http.delete<any>(`https://assignment-4-server.herokuapp.com/api/posts/${id}`);
  }
}
