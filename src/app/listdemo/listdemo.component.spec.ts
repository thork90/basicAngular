import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemoComponent } from './listdemo.component';

describe('ListDemoComponent', () => {
  let component: ListDemoComponent;
  let fixture: ComponentFixture<ListDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
