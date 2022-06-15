import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectmanagerRoutingModule } from './projectmanager-routing.module';
import { ProjectmanagerComponent } from './projectmanager.component';
import { ProjectMenuComponent } from './projectcomponents/project-menu/project-menu.component';
import { ProjectPOComponent } from './projectcomponents/project-po/project-po.component';
import { MaterialStatusReportComponent } from './projectcomponents/material-status-report/material-status-report.component';
import { ReturnInventoryComponent } from './projectcomponents/return-inventory/return-inventory.component';


@NgModule({
  declarations: [
    ProjectmanagerComponent,
    ProjectMenuComponent,
    ProjectPOComponent,
    MaterialStatusReportComponent,
    ReturnInventoryComponent
  ],
  imports: [
    CommonModule,
    ProjectmanagerRoutingModule
  ]
})
export class ProjectmanagerModule { }
