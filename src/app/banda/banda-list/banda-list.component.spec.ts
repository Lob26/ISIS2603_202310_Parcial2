import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandaListComponent } from './banda-list.component';

describe('BandaListComponent', () => {
  let component: BandaListComponent;
  let fixture: ComponentFixture<BandaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BandaListComponent]
    });
    fixture = TestBed.createComponent(BandaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
