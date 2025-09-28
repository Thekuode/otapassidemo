import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SivupalkkiComponent } from './komponentit/sivupalkki/sivupalkki.component';
import { KeskialueComponent } from './komponentit/keskialue/keskialue.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SivupalkkiComponent, KeskialueComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'otapassidemo';
}
