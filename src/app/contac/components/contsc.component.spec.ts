import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContscComponent } from './contsc.component';

describe('ContscComponent', () => {
  let component: ContscComponent;
  let fixture: ComponentFixture<ContscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
