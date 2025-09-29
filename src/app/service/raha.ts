import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RahaService {
  constructor(private http: HttpClient) {}

  getRaha(): Observable<string> {
    return this.http.get('assets/raha.txt', { responseType: 'text' });
  }
}