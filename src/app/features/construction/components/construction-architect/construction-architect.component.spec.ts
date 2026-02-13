import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ConstructionArchitectComponent } from './construction-architect.component'

describe('ArchitectComponent', () => {
    let component: ConstructionArchitectComponent
    let fixture: ComponentFixture<ConstructionArchitectComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ConstructionArchitectComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(ConstructionArchitectComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
