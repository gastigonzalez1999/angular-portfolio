import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: number = 0;
  public widthToSlider: number = 0;
  @ViewChild('texts') texts: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  loadSlider() {
    this.widthToSlider = this.widthSlider;
  }

  resetSlider() {
    this.widthToSlider = 0;
  }

}
