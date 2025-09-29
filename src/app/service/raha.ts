import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RahaService {
  private rahaValue: number = 100;
  raha$ = new BehaviorSubject<number>(this.rahaValue);

  constructor(private http: HttpClient) {}

  getRaha(): number {
    return this.rahaValue;
  }

  minusRaha(): void {
    this.rahaValue -= 10;
    this.raha$.next(this.rahaValue);
  }
}