import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenetComponent } from './componenet.component';

describe('ComponenetComponent', () => {
  let component: ComponenetComponent;
  let fixture: ComponentFixture<ComponenetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenetComponent]
    });
    fixture = TestBed.createComponent(ComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
