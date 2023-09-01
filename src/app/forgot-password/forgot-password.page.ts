import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {
  username = '';
  newPassword = '';
  message = '';

  registeredUsers: { username: string, password: string }[] = [];

  constructor(private router: Router) {
    const storedUsers = localStorage.getItem('registeredUsers');
    if (storedUsers) {
      this.registeredUsers = JSON.parse(storedUsers);
    }
  }

  resetPassword() {
    // Buscar al usuario por su nombre de usuario (insensible a mayúsculas y minúsculas)
    const userIndex = this.registeredUsers.findIndex(user => user.username.toLowerCase() === this.username.toLowerCase());
  
    if (userIndex !== -1) {
      // Eliminar el usuario antiguo
      this.registeredUsers.splice(userIndex, 1);
  
      // Agregar un nuevo usuario con el mismo nombre de usuario pero con la nueva contraseña
      this.registeredUsers.push({ username: this.username, password: this.newPassword });
  
      // Almacenar el arreglo actualizado en localStorage
      localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));
  
      // Redirigir a la página de inicio de sesión
      this.router.navigate(['/login']);
    } else {
      // Si el usuario no se encuentra, mostrar un mensaje de error
      this.message = 'El usuario no existe';
    }
  }
  
  
  

  goToLogin() {
    this.router.navigate(['/login']);
  }
}

