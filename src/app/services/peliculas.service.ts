import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  addDoc,
  deleteDoc,
  collectionData,
  query,
  orderBy,
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

  async deletePelicula(id: string) {
    const docPelicula = doc(this.firestore, `peliculas/${id}`);
    try {
      const docRef = deleteDoc(docPelicula);
      console.log('Borrada');
    } catch (err: unknown) {
      console.error('Error Borrando', err);
    }
  }

  getPeliculas(): Observable<Pelicula[]> {
    const coleccionPeliculas = query(
      collection(this.firestore, 'peliculas'),
      orderBy('nombre', 'desc'),
    );
    return collectionData(coleccionPeliculas, { idField: 'id' }) as Observable<
      Pelicula[]
    >;
  }
}
