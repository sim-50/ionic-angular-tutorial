import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeklysummaryPageRoutingModule } from './weeklysummary-routing.module';

import { WeeklysummaryPage } from './weeklysummary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeeklysummaryPageRoutingModule
  ],
  declarations: [WeeklysummaryPage]
})
export class WeeklysummaryPageModule {}
