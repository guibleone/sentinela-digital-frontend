import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../../shared/models/noticia.model';
import { NOTICIAS } from '../../../shared/data/noticias.data';
import { Categoria } from '../../../shared/models/categoria.enum';
import { AtaqueComponent } from '../ataque/ataque.component';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-ataques',
  imports: [AtaqueComponent, NgOptimizedImage],
  templateUrl: './ataques.component.html',
  styleUrl: './ataques.component.scss'
})
export class AtaquesComponent implements OnInit {
  ataques!: Noticia[];

  ngOnInit(): void {
    this.ataques = this.getAtaques();
  }

  getAtaques(): Noticia[] {
    return NOTICIAS.filter(n => n.categoria === Categoria.ATAQUE);
  }
}
