import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngenhariaSocialComponent } from './engenharia-social.component';

describe('EngenhariaSocialComponent', () => {
  let component: EngenhariaSocialComponent;
  let fixture: ComponentFixture<EngenhariaSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngenhariaSocialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngenhariaSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
