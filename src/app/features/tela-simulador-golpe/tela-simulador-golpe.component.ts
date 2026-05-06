import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Pergunta = {
  texto: string;
  corretoEhGolpe: boolean;
};

@Component({
  selector: 'app-tela-simulador-golpe',
  imports: [CommonModule],
  templateUrl: './tela-simulador-golpe.component.html',
  styleUrl: './tela-simulador-golpe.component.scss'
})
export class TelaSimuladorGolpeComponent {
  perguntas: Pergunta[] = [
    { texto: 'Você recebe uma mensagem de um número desconhecido pedindo R$ 800 dizendo ser seu filho.', corretoEhGolpe: true },
    { texto: 'Um e-mail do seu banco pede para confirmar dados por um link estranho.', corretoEhGolpe: true },
    { texto: 'Recebeu uma cobrança que você reconhece e o remetente é a empresa oficial.', corretoEhGolpe: false },
    { texto: 'Alguém te oferece um prêmio e pede para instalar um app desconhecido.', corretoEhGolpe: true },
    { texto: 'Um contato conhecido manda mensagem com erro de português e link curto.', corretoEhGolpe: true },
    { texto: 'Um site seguro com certificado pede login via página oficial.', corretoEhGolpe: false },
    { texto: 'Pedido de transferência urgente com pressão para agir agora.', corretoEhGolpe: true },
    { texto: 'Notificação oficial do serviço que você usa, sem links suspeitos.', corretoEhGolpe: false },
    { texto: 'Alguém pedindo informações sensíveis por mensagem de texto.', corretoEhGolpe: true },
    { texto: 'Promoção em site conhecido, sem pedir dados sensíveis.', corretoEhGolpe: false }
  ];

  index = 0;
  respostas: (boolean | null)[] = Array(this.perguntas.length).fill(null);
  pontuacao = 0;

  get perguntaAtual() {
    return this.perguntas[this.index];
  }

  responder(escolheuGolpe: boolean) {
    if (this.respostas[this.index] !== null) return; // já respondida
    const correta = this.perguntaAtual.corretoEhGolpe;
    this.respostas[this.index] = escolheuGolpe;
    if (escolheuGolpe === correta) this.pontuacao++;
  }

  proximo() {
    if (this.index < this.perguntas.length - 1) this.index++;
  }

  anterior() {
    if (this.index > 0) this.index--;
  }

  reiniciar() {
    this.index = 0;
    this.pontuacao = 0;
    this.respostas = Array(this.perguntas.length).fill(null);
  }

  terminou() {
    return this.respostas.every(r => r !== null);
  }
}
