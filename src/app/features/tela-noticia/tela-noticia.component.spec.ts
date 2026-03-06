import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaNoticiaComponent } from './tela-noticia.component';

describe('TelaNoticiaComponent', () => {
  let component: TelaNoticiaComponent;
  let fixture: ComponentFixture<TelaNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaNoticiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
