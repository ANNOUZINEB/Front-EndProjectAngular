import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.css']
})
export class CuisineComponent implements OnInit {

  public textShow = false;
  public buttonName="show";

  constructor() { }

  ngOnInit(): void {
  }
  
  showText(){
    this.textShow = !this.textShow;
  if(this.textShow)
  this.buttonName="Hide";
  else
  this.buttonName="Show";
  
  }

  showText1(){
    this.textShow = !this.textShow;
  if(this.textShow)
  this.buttonName="Hide";
  else
  this.buttonName="Show";
  
  }
  
  getColor() {
    if(this.buttonName==="Hide") {
      return '#1B998B';
    } else if(this.buttonName==="Show") {
      return '#E84855';
    }
}

}