import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailyRecordsPage } from './dailyRecords.page';

describe('HomePage', () => {
  let component: DailyRecordsPage;
  let fixture: ComponentFixture<DailyRecordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyRecordsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyRecordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
