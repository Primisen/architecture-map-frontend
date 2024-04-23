import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitecturalStyleListComponent } from './architectural-style-list.component';

describe('ArchitecturalStyleListComponent', () => {
  let component: ArchitecturalStyleListComponent;
  let fixture: ComponentFixture<ArchitecturalStyleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchitecturalStyleListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ArchitecturalStyleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
