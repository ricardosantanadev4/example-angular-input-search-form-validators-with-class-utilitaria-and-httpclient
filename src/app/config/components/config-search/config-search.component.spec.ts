import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigSearchComponent } from './config-search.component';

describe('ConfigSearchComponent', () => {
  let component: ConfigSearchComponent;
  let fixture: ComponentFixture<ConfigSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
