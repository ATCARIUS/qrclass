import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Añade Router aquí

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  username = '';

  constructor(private route: ActivatedRoute, private router: Router) { // Agrega Router en el constructor
    this.route.params.subscribe(params => {
      this.username = params['username'];
    });
  }

  // Método para regresar a la página de inicio de sesión (login)
  goBack() {
    this.router.navigate(['/login']);
  }
}

