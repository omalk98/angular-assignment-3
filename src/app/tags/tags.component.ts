import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styles: ['']
})
export class TagsComponent implements OnInit {

  tags: Array<string> = [];

  constructor(private post:PostService) { }

  ngOnInit(): void {
    this.post.getTags().subscribe((data: any)=>this.tags=data);
  }

}
