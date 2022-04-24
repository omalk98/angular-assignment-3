import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styles: ['']
})
export class NewPostComponent {

  blogPost:BlogPost = new BlogPost();
  tags: string = "";
  
  constructor(private post:PostService, private router:Router) { }

  formSubmit() {
    this.blogPost.tags = this.tags?.split(",").map(tag => tag.trim());
    this.blogPost.postDate = new Date().toLocaleDateString();
    this.blogPost.postedBy = "BTI425 Student";
    this.blogPost.isPrivate = false;
    this.blogPost.views = 0;
    this.post.newPost(this.blogPost).subscribe(()=>this.router.navigate(['/admin'])); 
  }
}
