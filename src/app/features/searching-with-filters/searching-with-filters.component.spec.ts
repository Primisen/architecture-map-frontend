import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingWithFiltersComponent } from './searching-with-filters.component';

describe('SearchingWithFiltersComponent', () => {
  let component: SearchingWithFiltersComponent;
  let fixture: ComponentFixture<SearchingWithFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchingWithFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchingWithFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
