import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { AtaquesComponent } from "./ataques/ataques.component";
import { EngenhariaSocialComponent } from './engenharia-social/engenharia-social.component';

@Component({
  selector: 'app-tela-inicial',
  imports: [HeroComponent, AtaquesComponent, EngenhariaSocialComponent],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.scss'
})
export class TelaInicialComponent {

}
