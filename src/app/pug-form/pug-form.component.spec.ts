import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PugFormComponent } from './pug-form.component';

describe('PugFormComponent', () => {
  let component: PugFormComponent;
  let fixture: ComponentFixture<PugFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PugFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PugFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
