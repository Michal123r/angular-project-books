import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user';


@Injectable({
  providedIn: 'root'
})
export class DataService {
 listUsers: User[] = [];

  constructor(private httpClient: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.httpClient.get('../assets/Data/users.json') as Observable<User[]>
  
}

  getRandomId(max :number, min:number): number{
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  removeUser(userId: number) {
    
  }
  
  
}


