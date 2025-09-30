import { Component } from '@angular/core';
import { RahaService } from '../../service/raha';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


enum RahaTapahtuma {
  HUVIT = 'Huvit',
  HYÖDYT = 'Hyödyt',
  MUUT = 'Muut',
  PAKOLLISEET = 'Pakolliset'
}

@Component({
  selector: 'app-sivupalkki',
  imports: [NgSelectModule, FormsModule, CommonModule],
  templateUrl: './sivupalkki.component.html',
  styleUrl: './sivupalkki.component.css'
})
export class SivupalkkiComponent {
  rahatapahtumat = Object.values(RahaTapahtuma);
  valittu?: string;

  constructor(private rahaService: RahaService){}

  vahennarahaa(){
    this.rahaService.minusRaha();
    console.log(this.rahaService.getRaha());
  }

  valitseTapahtuma(event: Event) {
  const value = (event.target as HTMLSelectElement).value;
  this.valittu = value;
  }
}
