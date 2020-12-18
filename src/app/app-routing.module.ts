import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dailyrecords',
    loadChildren: () => import('./dailyRecords/dailyRecords.module').then( m => m.DailyRecordsPageModule)
  },
  {
    path: 'reportform',
    loadChildren: () => import('./reportform/reportform.module').then( m => m.ReportformPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'weeklysummary',
    loadChildren: () => import('./weeklysummary/weeklysummary.module').then( m => m.WeeklysummaryPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    //RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
