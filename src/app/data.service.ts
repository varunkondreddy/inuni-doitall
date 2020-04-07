import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { } 
  getans()
  {
    return this.http.get('https://bbcw5pcdm8.execute-api.ap-south-1.amazonaws.com/dev/items?query=Delhi&limit=10&offset=0');
  }
}
