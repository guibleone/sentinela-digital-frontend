import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { AtaqueComponent } from "./ataque/ataque.component";
import { AtaquesComponent } from "./ataques/ataques.component";

@Component({
  selector: 'app-tela-inicial',
  imports: [HeroComponent, AtaquesComponent],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.scss'
})
export class TelaInicialComponent {

}
