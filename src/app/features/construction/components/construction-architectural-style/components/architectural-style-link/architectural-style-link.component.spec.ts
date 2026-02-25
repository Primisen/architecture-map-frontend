import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ArchitecturalStyleLinkComponent } from './architectural-style-link.component'

describe('ArchitecturalStyleLinkComponent', () => {
    let component: ArchitecturalStyleLinkComponent
    let fixture: ComponentFixture<ArchitecturalStyleLinkComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ArchitecturalStyleLinkComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(ArchitecturalStyleLinkComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
