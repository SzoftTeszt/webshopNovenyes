import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegrendelComponent } from './megrendel.component';

describe('MegrendelComponent', () => {
  let component: MegrendelComponent;
  let fixture: ComponentFixture<MegrendelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MegrendelComponent]
    });
    fixture = TestBed.createComponent(MegrendelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
