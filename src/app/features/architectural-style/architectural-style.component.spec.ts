import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitecturalStyleComponent } from './architectural-style.component';

describe('ArchitecturalStyleComponent', () => {
  let component: ArchitecturalStyleComponent;
  let fixture: ComponentFixture<ArchitecturalStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchitecturalStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchitecturalStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
