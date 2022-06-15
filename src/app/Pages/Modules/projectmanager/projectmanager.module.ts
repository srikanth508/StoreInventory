import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectmanagerRoutingModule } from './projectmanager-routing.module';
import { ProjectmanagerComponent } from './projectmanager.component';
import { ProjectMenuComponent } from './projectmodules/project-menu/project-menu.component';
import { ProjectPOComponent } from './projectmodules/project-po/project-po.component';
import { MaterialStatusReportComponent } from './projectmodules/material-status-report/material-status-report.component';


@NgModule({
  declarations: [
    ProjectmanagerComponent,
    ProjectMenuComponent,
    ProjectPOComponent,
    MaterialStatusReportComponent
  ],
  imports: [
    CommonModule,
    ProjectmanagerRoutingModule
  ]
})
export class ProjectmanagerModule { }
