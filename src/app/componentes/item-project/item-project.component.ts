import { Component, OnInit, Input } from '@angular/core';
import { DataBasesService } from 'src/app/servicios/data-bases.service';

@Component({
  selector: 'app-item-project',
  templateUrl: './item-project.component.html',
  styleUrls: ['./item-project.component.css']
})
export class ItemProjectComponent implements OnInit {

  constructor( private db: DataBasesService) { }

  proyectos: any;

  ngOnInit(): void {
  
      this.db.obtenerDatos().subscribe(data => 
        this.proyectos=data.proyectos
      )

  }

}
