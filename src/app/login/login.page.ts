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

  goToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  login() {
      console.log('Intentando iniciar sesión con nombre de usuario:', this.username);
      console.log('Contraseña proporcionada:', this.password);
    // Buscar al usuario por su nombre de usuario (insensible a mayúsculas y minúsculas)
    const user = this.registeredUsers.find(user => user.username.toLowerCase() === this.username.toLowerCase());
  
    if (user && user.password === this.password) {
      // Inicio de sesión exitoso, redirigir a la página de inicio
      this.message = 'Acceso correcto';
      this.router.navigate(['/inicio', { username: this.username }]);
    } else {
      // Datos incorrectos, mostrar mensaje
      this.message = 'Acceso incorrecto';
    }
  }
  
  
}
