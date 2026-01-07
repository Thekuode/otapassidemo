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

  constructor(private http: HttpClient) {
    const saved = localStorage.getItem('raha_state');
    if(saved) {
      try{
        const parsed = JSON.parse(saved);
        this.rahaValue = typeof parsed.raha ==  'number' ? parsed.raha : this.rahaValue;
        this.tapahtumat = parsed.tapahtumat || {};
        this.raha$.next(this.rahaValue);
      } catch(e) {
        console.error('Virhe ladattaessa tallennettua tilaa:', e);
      }
    }
  }

  private saveState(){
    localStorage.setItem('raha_state', JSON.stringify({
      raha: this.rahaValue,
      tapahtumat: this.tapahtumat
    }));
  }

  getRaha(): number {
    return this.rahaValue;
  }

  minusRaha(maara: number = 10): void {
    this.rahaValue -= maara;
    this.raha$.next(this.rahaValue);
    this.saveState();
  }

  lisaaTapahtuma(kategoria: string, summa: number) {
    if (!this.tapahtumat[kategoria]) {
      this.tapahtumat[kategoria] = 0;
    }
    this.tapahtumat[kategoria] += summa;
    this.saveState();
  }

  lisaaRahaa(maara: number): void {
    this.rahaValue += maara;
    this.raha$.next(this.rahaValue);
    this.saveState();
  }

  getTapahtumat(): { [kategoria: string]: number } {
    return this.tapahtumat;
  }
}