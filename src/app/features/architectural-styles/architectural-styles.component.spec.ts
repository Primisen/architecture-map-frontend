import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ArchitecturalStylesComponent } from './architectural-styles.component'

describe('ArchitecturalStyleListComponent', () => {
    let component: ArchitecturalStylesComponent
    let fixture: ComponentFixture<ArchitecturalStylesComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ArchitecturalStylesComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(ArchitecturalStylesComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
