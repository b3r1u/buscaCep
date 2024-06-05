import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCepComponent } from './logo-cep.component';

describe('LogoCepComponent', () => {
  let component: LogoCepComponent;
  let fixture: ComponentFixture<LogoCepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoCepComponent]
    });
    fixture = TestBed.createComponent(LogoCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
