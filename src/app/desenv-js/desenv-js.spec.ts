import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesenvJS } from './desenv-js';

describe('DesenvJS', () => {
  let component: DesenvJS;
  let fixture: ComponentFixture<DesenvJS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesenvJS],
    }).compileComponents();

    fixture = TestBed.createComponent(DesenvJS);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
