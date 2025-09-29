import { Component } from '@angular/core';
import { RahaService } from '../../service/raha';

@Component({
  selector: 'app-sivupalkki',
  imports: [],
  templateUrl: './sivupalkki.component.html',
  styleUrl: './sivupalkki.component.css'
})
export class SivupalkkiComponent {
  constructor(private rahaService: RahaService){}

  vahennarahaa(){
    this.rahaService.minusRaha();
    console.log(this.rahaService.getRaha());
  }
}
