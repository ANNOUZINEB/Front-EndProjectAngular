import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

    
    comment = "";
    postComment= [];
    
    
    

post(){
  this.postComment.push(this.comment);
  this.comment ="";
}

  constructor() { }

  ngOnInit(): void {
  }
   
}
