import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(
    private http: HttpClient
  ) { }

  
}
