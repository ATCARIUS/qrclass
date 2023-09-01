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
  message = ''; // Mensaje para mostrar al usuario

  registeredUsers: { username: string, password: string }[] = [];

  constructor(private router: Router) {
    const storedUsers = localStorage.getItem('registeredUsers');
    if (storedUsers) {
      this.registeredUsers = JSON.parse(storedUsers);
    }
  }
  
  register() {
    // Verificar si el nombre de usuario ya existe
    const userExists = this.registeredUsers.some(user => user.username === this.newUsername);

    if (userExists) {
      this.message = 'El nombre de usuario ya existe';
    } else {
      // Agregar el nuevo usuario registrado al arreglo
      this.registeredUsers.push({ username: this.newUsername, password: this.newPassword });
    
      // Almacenar el arreglo en localStorage
      localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));
    
      // Redirigir a la página de inicio de sesión
      this.router.navigate(['/login']);
    }
  }
}







