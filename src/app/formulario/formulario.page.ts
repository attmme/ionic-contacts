import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: 'formulario.page.html',
  styleUrls: ['formulario.page.scss']
})
export class FormularioPage implements OnInit {

  constructor(private ruta: Router) {}

  ngOnInit() {
  }

  cancelar() {
    this.ruta.navigate(['/lista']);
  }

  done() {
    // Afegir contacte
    this.ruta.navigate(['/lista']);
  }

}
