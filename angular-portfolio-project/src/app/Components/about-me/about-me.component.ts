import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;

  constructor() { 
    this.title = "Gaston Gonzalez";
    this.subtitle = "Full stack developer";
    this.email = "gastongonzalez2550.gg@gmail.com";
  }

  ngOnInit(): void {
  }

}
