import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripMarkdown'
})
export class StripMarkdownPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    return value
      .replace(/^#+\s*/gm, '')        // Remove cabeçalhos (ex: #, ##, ###)
      .replace(/\*\*(.*)\*\*/g, '$1') // Remove negrito **
      .replace(/\*/g, '')     // Remove itálico *
      .replace(/> (.*)/g, '$1')       // Remove blockquotes >
      .replace(/!\[.*\]\(.*\)/g, '')  // Remove imagens
      .replace(/\[.*\]\(.*\)/g, '$1') // Remove links e mantém texto
      .trim();
  }

}
