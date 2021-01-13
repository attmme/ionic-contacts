import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-formulario',
  templateUrl: 'formulario.page.html',
  styleUrls: ['formulario.page.scss']
})
export class FormularioPage implements OnInit {

  constructor(
    private ruta: Router, 
    public photoService: PhotoService,) { }

  perfil = {
    nom: "",
    cognom: "",
    email: "",
    telefon: "",
    imatge: "/assets/avatar.png"
  }

  ngOnInit() {
  }

  cancelar() {
    let t = this.perfil;
    
    // Reset
    t.cognom = t.nom = t.email = t.telefon = ""; 
    t.imatge = "/assets/avatar.png";
    this.ruta.navigate(['/lista']);
  }

  // Afegir contacte
  done() {
    this.ruta.navigate(['/lista']);
  }

  // Afegir foto perfil
  addProfile() {
    this.photoService.addNewToGallery().then(() => {
      this.perfil.imatge =this.photoService.photos[0].webviewPath;
    });
  }

}
