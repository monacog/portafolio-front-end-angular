import { Component, OnInit, Input } from '@angular/core';
import { DataBasesService } from 'src/app/servicios/data-bases.service';

@Component({
  selector: 'app-item-exp-edu',
  templateUrl: './item-exp-edu.component.html',
  styleUrls: ['./item-exp-edu.component.css'],
})
export class ItemExpEduComponent implements OnInit {
  tipos: any;
  @Input() tipo!: string;

  constructor(private db: DataBasesService) {}

  ngOnInit(): void {
    this.db.obtenerDatos().subscribe((data) => {
      switch (this.tipo) {
        case 'experiencias':
          this.tipos = data.experiencias;
          break;
        case 'educacion':
          this.tipos = data.educacion;
          break;
      }
    });
  }
}
