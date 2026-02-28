import { Routes } from '@angular/router';
import { TelaInicialComponent } from '../features/tela-inicial/tela-inicial.component';

export const routes: Routes = [
  { path: "inicio", component: TelaInicialComponent },
  { path: "", redirectTo: "/inicio", pathMatch: 'full' }
];
