import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-btn-exit',
  template: '<button> <i class="fa-solid fa-xmark"></i></button>',
  styles: [`button {
                  position:absolute;
                  top:16px;
                  right:16px;
                  width: 2.5rem;
                  height: 2.5rem;
                  padding: 0px;
                  border: 0px;
                  border-radius: 50%;
                  background-color: transparent;
                  align-items: center;
                }
                i {
                  color: grey;    
                }
                button:hover{
                  background-color: rgba(128, 128, 128, 0.192);
                }
            `]
})
export class BtnExitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
