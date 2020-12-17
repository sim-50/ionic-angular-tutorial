import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportformPage } from './reportform.page';

describe('ReportformPage', () => {
  let component: ReportformPage;
  let fixture: ComponentFixture<ReportformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
