import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcandidatComponent } from './editcandidat.component';

describe('EditcandidatComponent', () => {
  let component: EditcandidatComponent;
  let fixture: ComponentFixture<EditcandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditcandidatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditcandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
