import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSimuladorGolpeComponent } from './tela-simulador-golpe.component';

describe('TelaSimuladorGolpeComponent', () => {
  let component: TelaSimuladorGolpeComponent;
  let fixture: ComponentFixture<TelaSimuladorGolpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaSimuladorGolpeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaSimuladorGolpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
