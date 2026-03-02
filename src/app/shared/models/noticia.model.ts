import { Categoria } from "./categoria.enum";

export interface Noticia {
  titulo: string;
  subTitulo: string;
  corpo: string
  autor: string;
  slug: string;
  categoria: Categoria;
  criadoEm: Date;
  atualizadoEm: Date;
  urlImagem: string
}