import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeeklysummaryPage } from './weeklysummary.page';

describe('WeeklysummaryPage', () => {
  let component: WeeklysummaryPage;
  let fixture: ComponentFixture<WeeklysummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklysummaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeeklysummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
