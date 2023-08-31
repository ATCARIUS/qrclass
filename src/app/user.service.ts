import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private registeredUsers: { username: string; password: string }[] = [];

  constructor() {}

  registerUser(username: string, password: string) {
    this.registeredUsers.push({ username, password });
  }

  getRegisteredUsers() {
    return this.registeredUsers;
  }
}
