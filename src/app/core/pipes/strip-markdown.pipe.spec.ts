import { StripMarkdownPipe } from './strip-markdown.pipe';

describe('StripMarkdownPipe', () => {
  it('create an instance', () => {
    const pipe = new StripMarkdownPipe();
    expect(pipe).toBeTruthy();
  });
});
