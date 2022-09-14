import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { arrayRemove, arrayUnion } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  /* Obtener los datos de la base de datos. */
  getSlider = () => {
    /* Obtener los datos de la base de datos de firestore. */
    const path = 'Ruta';

    return this.firestore.doc(path).valueChanges();
  };

  /* Actualización de la matriz de proyectos en la base de datos. */
  updateprojects = (project: any) => {
    const path = 'Ruta';
    this.firestore.doc(path).update({
      projects: arrayUnion(project),
    });
  };

  /* Eliminación del proyecto de la base de datos. */
  deleteProject = (project: any) => {
    const path = 'Ruta';
    this.firestore.doc(path).update({
      projects: arrayRemove(project),
    });
  };

/* Actualización del estado del proyecto. */

  editStatusProjects = (status: any) => {
    const path = 'Ruta';
    return this.firestore.doc(path).update({
      projects: status,
    });
  };
}
