import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styles: ['']
})
export class PagingComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor() { }
  
  @Input("page") pageInput: number = 1;
  @Output() newPage = new EventEmitter<number>();

  goBack(): void {
    if(this.pageInput > 1) this.newPage.emit(this.pageInput - 1);
  }

  goForward(): void {
    if(this.pageInput < 3) this.newPage.emit(this.pageInput + 1)
  }

}
