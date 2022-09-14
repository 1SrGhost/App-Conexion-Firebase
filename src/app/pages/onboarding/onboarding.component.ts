import { Component, OnInit } from '@angular/core';
/* Importación de FirestoreService desde el archivo firestore.service.ts. */
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  /* Inyectar FirestoreService en el componente. */
  constructor(private firestore: FirestoreService) { }

  /**
   * La función se llama cuando se inicializa el componente. Llama a la función getSlider() en el
   * servicio firestore y se suscribe al observable que se devuelve
   */
  ngOnInit(): void {
    this.firestore.getSlider().subscribe(console.log);
  }

}
