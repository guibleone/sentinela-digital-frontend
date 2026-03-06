import { Component, Input } from '@angular/core';
import { Noticia } from '../../../../shared/models/noticia.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true }) noticia!: Noticia;
}
