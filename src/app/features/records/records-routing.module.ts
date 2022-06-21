import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './records-feature/dashboard/dashboard.component';
import { SystemConfigurationComponent } from './records-feature/system/system-configuration/system-configuration.component';
import { RecordsPageComponent } from './records-page/records-page.component';

const routes: Routes = [
  {
    path: '', component: RecordsPageComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'system-configuration', component: SystemConfigurationComponent },
      { path: '**', redirectTo: 'system-configuration' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordsRoutingModule { }
