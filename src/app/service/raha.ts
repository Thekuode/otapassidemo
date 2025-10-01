import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RahaService {
  private rahaValue: number = 100;
  raha$ = new BehaviorSubject<number>(this.rahaValue);


  tapahtumat: { [kategoria: string]: number } = {};

  constructor(private http: HttpClient) {}

  getRaha(): number {
    return this.rahaValue;
  }

  minusRaha(maara: number = 10): void {
    this.rahaValue -= maara;
    this.raha$.next(this.rahaValue);
  }

  lisaaTapahtuma(kategoria: string, summa: number) {
    if (!this.tapahtumat[kategoria]) {
      this.tapahtumat[kategoria] = 0;
    }
    this.tapahtumat[kategoria] += summa;
    console.log(this.tapahtumat);
  }

  getTapahtumat(): { [kategoria: string]: number } {
    return this.tapahtumat;
  }
}