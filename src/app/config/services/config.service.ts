import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private readonly configUrl = '/api/config';
  private readonly param = '?param='

  constructor(private http: HttpClient) { }

  getConfig(value: string) {
    if (value) {
      return this.http.get<Config[]>(`${this.configUrl}${this.param}${value}`);
    }
    return this.http.get<Config[]>(this.configUrl);
  }
}
