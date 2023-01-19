import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteNgContentComponent } from './teste-ng-content.component';

describe('TesteNgContentComponent', () => {
  let component: TesteNgContentComponent;
  let fixture: ComponentFixture<TesteNgContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteNgContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
