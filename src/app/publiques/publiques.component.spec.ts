import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubliquesComponent } from './publiques.component';

describe('PubliquesComponent', () => {
  let component: PubliquesComponent;
  let fixture: ComponentFixture<PubliquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PubliquesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PubliquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
