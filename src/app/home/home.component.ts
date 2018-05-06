import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  showNavMenu = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavMenu(event: Event) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    this.showNavMenu = !this.showNavMenu;
  }

  closeNavMenu() {
    if (this.showNavMenu) {
      this.showNavMenu = false;
    }
  }

  scrollDownPage() {
      const scrollHeight = window.innerHeight + "px";
      //$("body").animate({ scrollTop: scrollHeight }, 500);
  }
}
