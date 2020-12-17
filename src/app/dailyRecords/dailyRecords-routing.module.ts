import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyRecordsPage } from './dailyRecords.page';

const routes: Routes = [
  {
    path: '',
    component: DailyRecordsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyRecordsPageRoutingModule {}
