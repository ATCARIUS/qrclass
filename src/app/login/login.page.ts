import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username = '';
  password = '';
  message = '';

  registeredUsers: { username: string, password: string }[] = [];

  constructor(private router: Router) {
    const storedUsers = localStorage.getItem('registeredUsers');
    if (storedUsers) {
      this.registeredUsers = JSON.parse(storedUsers);
    }
  }

  login() {
    // Validar el inicio de sesión
    const user = this.registeredUsers.find(user => user.username === this.username && user.password === this.password);

    if (user) {
      // Inicio de sesión exitoso, redirigir a la página de inicio
      this.message = 'Acceso correcto';
      this.router.navigate(['/inicio', { username: this.username }]);
    } else {
      // Datos incorrectos, mostrar mensaje
      this.message = 'Acceso incorrecto';
    }
  }
}