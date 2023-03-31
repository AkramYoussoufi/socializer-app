import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasspanelComponent } from './changepasspanel.component';

describe('ChangepasspanelComponent', () => {
  let component: ChangepasspanelComponent;
  let fixture: ComponentFixture<ChangepasspanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepasspanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangepasspanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
