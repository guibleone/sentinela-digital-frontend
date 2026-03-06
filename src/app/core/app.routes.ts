import { Routes } from '@angular/router';
import { TelaInicialComponent } from '../features/tela-inicial/tela-inicial.component';
import { TelaNoticiaComponent } from '../features/tela-noticia/tela-noticia.component';

export const routes: Routes = [
  { path: "inicio", component: TelaInicialComponent },
  { path: "noticias/:categoria/:slug", component: TelaNoticiaComponent },
  { path: "", redirectTo: "inicio", pathMatch: 'full' },
];
