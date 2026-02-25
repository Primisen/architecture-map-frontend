import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ArchitectLinkComponent } from './architect-link.component'

describe('ArchitectLinkComponent', () => {
    let component: ArchitectLinkComponent
    let fixture: ComponentFixture<ArchitectLinkComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ArchitectLinkComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(ArchitectLinkComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
