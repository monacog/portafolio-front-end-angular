import { Component, OnInit } from '@angular/core';
import { DataBasesService } from '../../servicios/data-bases.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {
  datos: any = '';

  constructor(private db: DataBasesService) {}

  ngOnInit(): void {
    this.db.obtenerDatos().subscribe((data) => {
      this.datos = data.personal;
    });
  }
}
