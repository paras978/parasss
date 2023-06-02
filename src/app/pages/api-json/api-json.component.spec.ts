import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiJsonComponent } from './api-json.component';

describe('ApiJsonComponent', () => {
  let component: ApiJsonComponent;
  let fixture: ComponentFixture<ApiJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiJsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
