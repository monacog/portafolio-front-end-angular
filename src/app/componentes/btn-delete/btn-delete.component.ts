import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-delete',
  template: `<button>
              <i class="fa-solid fa-trash-can"></i>
            </button>`,
  styles: [`button {
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
export class BtnDeleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
