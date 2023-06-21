import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfFormComponent } from './prof-form.component';

describe('ProfFormComponent', () => {
  let component: ProfFormComponent;
  let fixture: ComponentFixture<ProfFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
