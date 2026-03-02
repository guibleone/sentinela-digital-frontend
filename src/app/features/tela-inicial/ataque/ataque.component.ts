import { Component, Input } from '@angular/core';
import { Noticia } from '../../../shared/models/noticia.model';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from "@angular/router";
import { TagComponent } from "../../../shared/components/tag/tag.component";

@Component({
  selector: 'app-ataque',
  imports: [NgOptimizedImage, RouterLink, TagComponent],
  templateUrl: './ataque.component.html',
  styleUrl: './ataque.component.scss'
})
export class AtaqueComponent {
  @Input({ required: true }) ataque!: Noticia;

}
