import { Component, OnInit, Input } from '@angular/core';
import { DataBasesService } from 'src/app/servicios/data-bases.service';

@Component({
  selector: 'app-item-hard-soft',
  templateUrl: './item-hard-soft.component.html',
  styleUrls: ['./item-hard-soft.component.css'],
})
export class ItemHardSoftComponent implements OnInit {
  skills: any;

  constructor(private db: DataBasesService) {}

  ngOnInit(): void {
  
    this.db.obtenerDatos().subscribe(data =>
    
      this.skills=data.skills

    )

  }
}
