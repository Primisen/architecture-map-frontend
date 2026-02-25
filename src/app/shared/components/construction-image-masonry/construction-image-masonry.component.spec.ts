import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ConstructionImageMasonryComponent } from './construction-image-masonry.component'

describe('ConstructionImageMasonryComponent', () => {
    let component: ConstructionImageMasonryComponent
    let fixture: ComponentFixture<ConstructionImageMasonryComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ConstructionImageMasonryComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(ConstructionImageMasonryComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
