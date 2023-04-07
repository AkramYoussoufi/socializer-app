import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarfriendsComponent } from './sidebarfriends.component';

describe('SidebarfriendsComponent', () => {
  let component: SidebarfriendsComponent;
  let fixture: ComponentFixture<SidebarfriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarfriendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarfriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
