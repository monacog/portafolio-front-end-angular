import { Component, OnInit } from '@angular/core';
import { DataBasesService } from 'src/app/servicios/data-bases.service';

@Component({
  selector: 'app-red-social',
  templateUrl:'./red-social.component.html',
  styleUrls: ['./red-social.component.css']
})
export class RedSocialComponent implements OnInit {

  redSocials : any ;

  constructor(private db:DataBasesService) { }

  ngOnInit(): void {

    this.db.obtenerDatos().subscribe( data =>
      this.redSocials=data.redSocials
    )
  }

}
