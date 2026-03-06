import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from '../../../shared/models/noticia.model';
import { NgOptimizedImage } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-noticia',
  imports: [NgOptimizedImage, MarkdownModule],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.scss'
})
export class NoticiaComponent implements OnInit {
  @Input({ required: true }) noticia: Noticia | undefined;

  atualizadoEm!: string;

  ngOnInit(): void {
    this.getAtualizadoEmFormatado();
  }

  getAtualizadoEmFormatado() {
    if (!this.noticia?.atualizadoEm) return;

    const dataAtualizacao = new Date(this.noticia.atualizadoEm).getTime();
    const dataAtual = Date.now();
    const diferenca = dataAtual - dataAtualizacao;

    // Converter milissegundos em unidades
    const segundos = Math.floor(diferenca / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const semanas = Math.floor(dias / 7);
    const meses = Math.floor(dias / 30);
    const anos = Math.floor(dias / 365);

    // Retornar a unidade mais apropriada
    if (segundos < 60) {
      this.atualizadoEm = 'agora mesmo';
    } else if (minutos < 60) {
      this.atualizadoEm = `há ${minutos} minuto${minutos > 1 ? 's' : ''}`;
    } else if (horas < 24) {
      this.atualizadoEm = `há ${horas} hora${horas > 1 ? 's' : ''}`;
    } else if (dias < 7) {
      this.atualizadoEm = `há ${dias} dia${dias > 1 ? 's' : ''}`;
    } else if (semanas < 4) {
      this.atualizadoEm = `há ${semanas} semana${semanas > 1 ? 's' : ''}`;
    } else if (meses < 12) {
      this.atualizadoEm = `há ${meses} mês${meses > 1 ? 'es' : ''}`;
    } else {
      this.atualizadoEm = `há ${anos} ano${anos > 1 ? 's' : ''}`;
    }
  }
}
