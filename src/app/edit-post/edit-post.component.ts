import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  blogPost:BlogPost = new BlogPost();
  tags: string = "";

  constructor(private post:PostService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.post.getPostById(this.route.snapshot.params['id']).subscribe((data: BlogPost) => {
      this.blogPost = data;
      this.tags = this.blogPost?.tags.toString();
    });
  }

  formSubmit() {
    this.blogPost.tags = this.tags?.split(",").map(tag => tag.trim());
    this.post.updatePostById(this.blogPost._id, this.blogPost).subscribe(()=>this.router.navigate(['/admin'])); 
  }

  deletePost() {
    this.post.deletePostById(this.blogPost._id).subscribe(()=>this.router.navigate(['/admin']))
  }
}
