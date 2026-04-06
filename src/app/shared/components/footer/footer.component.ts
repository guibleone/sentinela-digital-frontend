import { Component } from '@angular/core';
import { Link } from '../navbar/navbar.component';
import { RouterLink } from "@angular/router";

export type GrupoLink = {
  titulo: string;
  links: Link[]
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  gruposLink: GrupoLink[] = [
    {
      titulo: 'Ataques',
      links: [{ titulo: 'Malware', path: "/malware" }, { titulo: 'Vírus', path: "/virus" }, { titulo: 'Trojan', path: "/trojan" }]
    },
    {
      titulo: 'Dicas de Segurança',
      links: [{ titulo: 'Senhas fortes', path: "/malware" }, { titulo: 'Troque de senha', path: "/virus" }, { titulo: 'Não clique em links', path: "/trojan" }]
    },
    {
      titulo: 'Denuncie',
      links: [{ titulo: '190', path: "/malware" }, { titulo: 'central@gmail.com', path: "/virus" }]
    }
  ]


}
