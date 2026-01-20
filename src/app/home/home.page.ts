import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeliculasService } from '../services/peliculas.service';
import { AsyncPipe } from '@angular/common';
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
    DatePipe,
  ],
  templateUrl: './home.page.html', // aquí pones tu template externo
  styleUrls: ['./home.page.scss'], // opcional
})
export class HomePage {
  nombre = '';
  peliculas$ = this.peliculasService.getPeliculas();

  constructor(private peliculasService: PeliculasService) {}

  agregarPelicula() {
    if (!this.nombre.trim()) return;
    this.peliculasService.savePelicula(this.nombre);
    this.nombre = '';
  }
}
