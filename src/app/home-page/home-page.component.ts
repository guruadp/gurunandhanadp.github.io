import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  slideIndex : number = 1;
  constructor() { }

  ngOnInit(): void {
  }
  
  // showDivs(this.slideIndex);
  
  // function plusDivs(n) {
  //   showDivs(slideIndex += n);
  // }
  
  // function showDivs(n) {
  //   var i;
  //   var x = document.getElementsByClassName("mySlides");
  //   if (n > x.length) {slideIndex = 1}
  //   if (n < 1) {slideIndex = x.length} ;
  //   for (i = 0; i < x.length; i++) {
  //     x[i].style.display = "none";
  //   }
  //   x[slideIndex-1].style.display = "block";
  // }
}
