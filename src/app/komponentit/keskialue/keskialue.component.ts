import { Component } from '@angular/core';
import { RahaService } from '../../service/raha';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-keskialue',
  imports: [],
  templateUrl: './keskialue.component.html',
  styleUrl: './keskialue.component.css'
})
export class KeskialueComponent {
  raha: string | undefined;

  constructor(private rahaService: RahaService) {}

  async ngOnInit() {
      this.raha = await firstValueFrom(this.rahaService.getRaha());
      console.log(this.raha);
  }
}
