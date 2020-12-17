import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DailyRecordsPage } from './dailyRecords.page';

import { DailyRecordsPageRoutingModule } from './dailyRecords-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyRecordsPageRoutingModule
  ],
  declarations: [DailyRecordsPage]
})
export class DailyRecordsPageModule {}
