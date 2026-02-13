import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarConstructionComponent } from './similar-construction.component';

describe('SimilarConstructionComponent', () => {
  let component: SimilarConstructionComponent;
  let fixture: ComponentFixture<SimilarConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarConstructionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilarConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
