import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillesComponent } from './detailles.component';

describe('DetaillesComponent', () => {
  let component: DetaillesComponent;
  let fixture: ComponentFixture<DetaillesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetaillesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetaillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
