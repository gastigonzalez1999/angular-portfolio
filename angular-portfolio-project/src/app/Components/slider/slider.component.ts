import { Component, OnInit, Input } from '@angular/core';
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() lenght: number = 0;

  constructor() { }

  ngOnInit(): void {
    $("#logo").click(function(e: Event) {
      e.preventDefault();

      $("header").css("background", "green");
    
    });

    $('.galeria').bxSlider({
      mode: "fade",
      captions: false,
      slideWidth: this.lenght
    });
  }

}
