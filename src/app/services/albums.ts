import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Albums {
  
  constructor(private http:HttpClient){  }

   getAlbums(){
       const url="https://jsonplaceholder.typicode.com/albums"
      return this.http.get(url)
    }  
}
