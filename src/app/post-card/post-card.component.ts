import { Component, Input } from '@angular/core';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styles: ['']
})
export class PostCardComponent {

  @Input('post') postInput : BlogPost | undefined;

  constructor() { }
}
