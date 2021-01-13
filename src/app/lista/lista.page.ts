import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: 'lista.page.html',
  styleUrls: ['lista.page.scss']
})

export class ListaPage implements OnInit {
  items = require("../contacts.json");

  constructor(private ruta: Router) { }

  ngOnInit() {
  }

  formulario() {
    this.ruta.navigate(['/formulario']);
  }
}

