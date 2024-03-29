import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectListComponent } from './architect-list.component';

describe('ArchitectListComponent', () => {
  let component: ArchitectListComponent;
  let fixture: ComponentFixture<ArchitectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchitectListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchitectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
