import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMakealoanComponent } from './form-makealoan.component';

describe('FormMakealoanComponent', () => {
  let component: FormMakealoanComponent;
  let fixture: ComponentFixture<FormMakealoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMakealoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMakealoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
