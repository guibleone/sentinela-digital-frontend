import { Component, Input } from '@angular/core';
import { Noticia } from '../../../../shared/models/noticia.model';
import { NgOptimizedImage } from "@angular/common";
import { TagComponent } from "../../../../shared/components/tag/tag.component";
import { StripMarkdownPipe } from '../../../../core/pipes/strip-markdown.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [NgOptimizedImage, TagComponent, StripMarkdownPipe, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true }) noticia!: Noticia;
}
