import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperateBarComponent } from './operate-bar.component';

describe('OperateBarComponent', () => {
  let component: OperateBarComponent;
  let fixture: ComponentFixture<OperateBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperateBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperateBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
