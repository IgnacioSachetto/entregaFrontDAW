import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimerComponenteComponent } from './primer-componente.component';

describe('PrimerComponenteComponent', () => {
    let component: PrimerComponenteComponent;
    let fixture: ComponentFixture<PrimerComponenteComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PrimerComponenteComponent]
        });
        fixture = TestBed.createComponent(PrimerComponenteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});