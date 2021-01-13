import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: 'lista.page.html',
  styleUrls: ['lista.page.scss']
})

export class ListaPage implements OnInit {
  items = require("../contacts.json");

  constructor(private ruta: Router, route: ActivatedRoute) {
    localStorage.clear();
    route.params.forEach(params => this.actualitzar());
  }

  ngOnInit() { }

  formulario() {
    this.ruta.navigate(['/formulario']);
  }

  actualitzar() {
    let perfils = JSON.parse(localStorage.getItem("perfils"));

    if (perfils) {
      let t = perfils[perfils.length-1];

      console.log("Actualitzat: ", t)
      this.items.push({
        firstName: t.nom,
        lastName: t.cognom,
        image: t.imatge
      });
    }
  }

}

