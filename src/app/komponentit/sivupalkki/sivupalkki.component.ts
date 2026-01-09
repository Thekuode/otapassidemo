import { Component } from '@angular/core';
import { RahaService } from '../../service/raha';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


enum RahaTapahtuma {
  LISÄÄRAHAA = "Lisää rahaa",
  VÄHENNÄRAHAA = "Vähennä rahaa tililtä",
  HUVIT = 'Huvit',
  HYÖDYT = 'Hyödyt',
  MUUT = 'Muut',
  PAKOLLISEET = 'Pakolliset',
  SÄÄSTÖT = 'Säästöt ja sijoitukset'
}

@Component({
  selector: 'app-sivupalkki',
  imports: [NgSelectModule, FormsModule, CommonModule],
  templateUrl: './sivupalkki.component.html',
  styleUrl: './sivupalkki.component.css'
})
export class SivupalkkiComponent {
  rahatapahtumat = Object.values(RahaTapahtuma);
  valittuKategoria?: string;
  summa: number | null = null;

  constructor(private rahaService: RahaService) {}

  lisaaTapahtuma() {
    if (this.valittuKategoria === RahaTapahtuma.LISÄÄRAHAA && this.summa && this.summa > 0){
      this.rahaService.lisaaRahaa(this.summa);
    }
    else if(this.valittuKategoria === RahaTapahtuma.VÄHENNÄRAHAA && this.summa && this.summa > 0){
      this.rahaService.minusRaha(this.summa);
    }
    else if (this.valittuKategoria && this.summa && this.summa > 0) {
      this.rahaService.lisaaTapahtuma(this.valittuKategoria, this.summa);
      this.rahaService.minusRaha(this.summa);
      this.summa = null;
      this.valittuKategoria = undefined;
    }
  }
}
