import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ConstructionArchitecturalStyleComponent } from './construction-architectural-style.component'

describe('ArchitecturalStyleComponent', () => {
    let component: ConstructionArchitecturalStyleComponent
    let fixture: ComponentFixture<ConstructionArchitecturalStyleComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ConstructionArchitecturalStyleComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(ConstructionArchitecturalStyleComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
