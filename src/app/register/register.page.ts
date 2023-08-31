import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  newUsername = ''; // Nombre de usuario a registrar
  newPassword = ''; // Contraseña a registrar

  registeredUsers: { username: string, password: string }[] = [];

  constructor(private router: Router) {
    const storedUsers = localStorage.getItem('registeredUsers');
    if (storedUsers) {
      this.registeredUsers = JSON.parse(storedUsers);
    }
  }
  
  register() {
    // Agregar el nuevo usuario registrado al arreglo
    this.registeredUsers.push({ username: this.newUsername, password: this.newPassword });
  
    // Almacenar el arreglo en localStorage
    localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));
  
    // Redirigir a la página de inicio de sesión
    this.router.navigate(['/login']);
  }
}






