import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ArchitectsComponent } from './architects.component'

describe('ArchitectListComponent', () => {
    let component: ArchitectsComponent
    let fixture: ComponentFixture<ArchitectsComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ArchitectsComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(ArchitectsComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
