import { Injectable } from '@angular/core';
import {
  Plugins, CameraResultType, Capacitor, FilesystemDirectory,
  CameraPhoto, CameraSource
} from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})


export class PhotoService {

  constructor() { }

  // Array amb les fotos
  public photos: Photo[] = [];

  public async addNewToGallery() {

    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    
    this.photos.unshift({
      webviewPath: capturedPhoto.webPath
    });

  }
}

export interface Photo {
  webviewPath: string;
}
