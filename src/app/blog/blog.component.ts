import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {

  public blogPosts: Array<BlogPost> | undefined;

  page: number = 1;
  tag: string = "";
  category: string = "";
  querySub: any = [];

  getPage(pageNum:number): void {
    this.post.getPosts(pageNum, this.tag, this.category).subscribe((next: BlogPost[] | undefined) => {
      this.blogPosts = next;
      this.page = pageNum;
    });
  }

  constructor(private route: ActivatedRoute, private post: PostService) { }

  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(params => {
      if (params['tag']) {
        this.tag = params['tag'];
        this.category = "";
      } 
      else this.tag = "";

      if (params['category']) {
        this.category = params['category'];
        this.tag = "";
      } 
      else this.category = "";

      this.getPage(+params['page'] || 1);
    });
  }

  ngOnDestroy(): void {
    if(this.querySub) this.querySub.unsubscribe();
  }

}
