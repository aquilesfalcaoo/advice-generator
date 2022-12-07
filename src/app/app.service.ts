import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Advices } from './advices';

const baseURL: string = 'https://api.adviceslip.com/advice';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getAdvice() {
    return this.http.get<Advices>(`${baseURL}`);
  }
}
