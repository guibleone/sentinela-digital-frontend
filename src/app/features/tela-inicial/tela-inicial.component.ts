import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";

@Component({
  selector: 'app-tela-inicial',
  imports: [HeroComponent],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.scss'
})
export class TelaInicialComponent {

}
