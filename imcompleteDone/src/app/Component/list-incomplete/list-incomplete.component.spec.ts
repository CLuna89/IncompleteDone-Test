import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIncompleteComponent } from './list-incomplete.component';

describe('ListIncompleteComponent', () => {
  let component: ListIncompleteComponent;
  let fixture: ComponentFixture<ListIncompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIncompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListIncompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
