import { Injectable } from '@angular/core';
import {dataType } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getdata() {
    const data: dataType = {
      Name: 'Kashif Shah',
      id: 12,
      Pakistani: true

    }
    return data
  }
}
