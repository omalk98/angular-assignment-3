import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: ['']
})
export class CategoriesComponent implements OnInit {

  categories: Array<any> | undefined;

  constructor(private post:PostService) { }

  ngOnInit(): void {
    this.post.getCategories().subscribe((data: any[] | undefined) => this.categories = data);
  }

}
