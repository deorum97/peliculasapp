import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { environment } from '../environments/environment';

// Inicializa Firebase
export const app = initializeApp(environment.firebase);

// Firestore
export const db = getFirestore(app);
