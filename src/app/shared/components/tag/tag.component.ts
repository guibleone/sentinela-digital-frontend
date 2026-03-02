import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  imports: [NgClass],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})
export class TagComponent {
  @Input({ required: true }) texto: string | undefined;
  @Input({ required: true }) cor: 'vermelho' | 'verde'| undefined;
}
