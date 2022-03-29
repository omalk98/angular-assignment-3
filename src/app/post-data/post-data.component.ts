import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit, OnDestroy {

  querySub: any = [];

  postDetails: BlogPost = new BlogPost();

  commentName: string = "";
  commentText: string = "";

  constructor(private post:PostService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params =>{
      this.post.getPostById(params["id"]).subscribe((data: BlogPost) => this.postDetails = data);
    })
  }

  ngOnDestroy() {
    if(this.querySub) this.querySub.unsubscribe();
  }

  submitComment() {
    let comment: any = {
      author : this.commentName,
      comment : this.commentText,
      date : new Date().toLocaleDateString()
    };
    this.postDetails.comments.push(comment);

    this.post.updatePostById(this.postDetails._id, this.postDetails).subscribe(() =>{
      this.commentName = "";
      this.commentText = "";
    });

  }
}
