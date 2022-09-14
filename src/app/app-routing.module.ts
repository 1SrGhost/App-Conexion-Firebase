import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntruccionesComponent } from './pages/intrucciones/intrucciones.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';

const routes: Routes = [
  {
    path: '',
    component: OnboardingComponent
  },
  {
    path: 'intrucciones',
    component: IntruccionesComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
