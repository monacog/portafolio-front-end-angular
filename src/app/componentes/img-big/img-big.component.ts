import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-img-big',
  template: `<div class="container-img">
              <img class="img-emp" [src]="src" alt="logo empresa">
              </div>`,
  styles: [` div {
                width: 56px;
                height: 56px;
                }
            img {
                width: 48px !important;
                height: 48px !important;
                }`
          ]
})
export class ImgBigComponent implements OnInit {

  constructor() { }
  
  @Input() src! : String;


  ngOnInit(): void {
  }

}
