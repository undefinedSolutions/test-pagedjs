import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedjsComponent } from './pagedjs.component';

describe('PagedjsComponent', () => {
  let component: PagedjsComponent;
  let fixture: ComponentFixture<PagedjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagedjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagedjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
