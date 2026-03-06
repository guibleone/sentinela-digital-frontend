import { Injectable } from '@angular/core';
import { NOTICIAS } from '../data/noticias.data';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor() { }

  getNoticiaPorSlug(slug: string) {
    return NOTICIAS.find(n => n.slug === slug);
  }
}
