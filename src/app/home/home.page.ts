import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeliculasService } from '../services/peliculas.service';
import { AsyncPipe } from '@angular/common';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonButton,
  IonList,
  IonLabel,
  IonCardContent,
  IonCard,
  IonIcon,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AsyncPipe,
    IonCardContent,
    IonCard,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonInput,
    IonButton,
    IonList,
    IonLabel,
    IonIcon,
    DatePipe,
  ],
  templateUrl: './home.page.html', // aquí pones tu template externo
  styleUrls: ['./home.page.scss'], // opcional
})
export class HomePage {
  nombre = '';
  peliculas$ = this.peliculasService.getPeliculas();

  constructor(private peliculasService: PeliculasService) {
    addIcons({ trash });
  }

  agregarPelicula() {
    if (!this.nombre.trim()) return;
    this.peliculasService.savePelicula(this.nombre);
    this.nombre = '';
  }

  borrarPelicula(id: string) {
    this.peliculasService.deletePelicula(id);
  }
}
