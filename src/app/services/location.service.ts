import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../models/api.model';
@Injectable({
  providedIn: 'root',
})
export class LocationService {
  random = Math.ceil(Math.random() * 126);

  constructor(private http: HttpClient) {}

  getLocation() {
    return this.http.get<Api>(
      'https://rickandmortyapi.com/api/location/' + this.random
    );
  }
}
