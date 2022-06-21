import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordsRoutingModule } from './records-routing.module';
import { RecordsPageComponent } from './records-page/records-page.component';
import { DashboardComponent } from './records-feature/dashboard/dashboard.component';
import { SystemConfigurationComponent } from './records-feature/system/system-configuration/system-configuration.component';
import { RecordsHeaderComponent } from './records-header/records-header.component';
import { SystemSideBarComponent } from './records-feature/system/system-side-bar/system-side-bar.component';
import { SystemNamesComponent } from './records-feature/system/system-names/system-names.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecordsPageComponent,
    RecordsHeaderComponent,
    DashboardComponent,
    SystemConfigurationComponent,
    SystemSideBarComponent,
    SystemNamesComponent
  ],
  imports: [
    CommonModule,
    RecordsRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RecordsModule { }
