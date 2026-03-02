import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtaqueComponent } from './ataque.component';

describe('AtaqueComponent', () => {
  let component: AtaqueComponent;
  let fixture: ComponentFixture<AtaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtaqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
