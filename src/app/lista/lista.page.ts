import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: 'lista.page.html',
  styleUrls: ['lista.page.scss']
})

export class ListaPage implements OnInit {
  items = require("../contacts.json");
  primerCop = true;

  constructor(private ruta: Router, route: ActivatedRoute) {
    //localStorage.clear();
    route.params.forEach(params => this.actualitzar());
  }

  ngOnInit() {

  }

  formulario() {
    this.ruta.navigate(['/formulario']);
  }

  actualitzar() {
    let perfils = JSON.parse(localStorage.getItem("perfils"));
    let estat = JSON.parse(localStorage.getItem("actualitzar"));

    if (perfils && (estat || this.primerCop)) {

      if (this.primerCop) {
        this.primerCop = false; // S'apaga

        for (let i = 0; i < perfils.length; i++) {
          let t = perfils[i];

          this.items.push({
            firstName: t.nom,
            lastName: t.cognom,
            image: t.imatge
          });
        }
      } else {
        let t = perfils[perfils.length - 1];

        this.items.push({
          firstName: t.nom,
          lastName: t.cognom,
          image: t.imatge
        });

      }


    }
  }

}

