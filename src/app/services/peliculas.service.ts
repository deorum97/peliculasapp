import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  DocumentData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Pelicula } from '../interfaces/pelicula';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  constructor(private firestore: Firestore) {}

  async savePelicula(nombre: string) {
    const coleccionPeliculas = collection(this.firestore, 'peliculas');
    try {
      const docRef = await addDoc(coleccionPeliculas, {
        nombre: nombre,
        fecha: new Date(),
      });
      console.log('Guardada con ID:', docRef.id);
    } catch (err: unknown) {
      console.error('Error guardando:', err);
    }
  }

  getPeliculas(): Observable<Pelicula[]> {
    const coleccionPeliculas = collection(this.firestore, 'peliculas');
    return collectionData(coleccionPeliculas, { idField: 'id' }) as Observable<
      Pelicula[]
    >;
  }
}
