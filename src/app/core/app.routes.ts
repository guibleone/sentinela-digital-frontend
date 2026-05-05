import { Routes } from '@angular/router';
import { TelaInicialComponent } from '../features/tela-inicial/tela-inicial.component';
import { TelaNoticiaComponent } from '../features/tela-noticia/tela-noticia.component';
import { TelaNoticiasComponent } from '../features/tela-noticias/tela-noticias.component';
import { TelaSimuladorGolpeComponent } from '../features/tela-simulador-golpe/tela-simulador-golpe.component';

export const routes: Routes = [
  { path: "inicio", component: TelaInicialComponent },
  { path: "noticias", component: TelaNoticiasComponent },
  { path: "noticias/:categoria/:slug", component: TelaNoticiaComponent },
  { path: "simulador-golpes", component: TelaSimuladorGolpeComponent },
  { path: "", redirectTo: "inicio", pathMatch: 'full' },
];
