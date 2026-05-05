import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaNoticiasComponent } from './tela-noticias.component';

describe('TelaNoticiasComponent', () => {
  let component: TelaNoticiasComponent;
  let fixture: ComponentFixture<TelaNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaNoticiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
