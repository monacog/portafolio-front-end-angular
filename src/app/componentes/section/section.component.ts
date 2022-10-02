import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataBasesService } from 'src/app/servicios/data-bases.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  sections: any;

  constructor(private db: DataBasesService) {}

  ngOnInit(): void {
    this.db.obtenerDatos().subscribe(data=>
    
      this.sections=data

    );
  }
}
