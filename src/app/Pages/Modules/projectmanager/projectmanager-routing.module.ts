import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectmanagerComponent } from './projectmanager.component';
import { MaterialStatusReportComponent } from './projectmodules/material-status-report/material-status-report.component';
import { ProjectMenuComponent } from './projectmodules/project-menu/project-menu.component';
import { ProjectPOComponent } from './projectmodules/project-po/project-po.component';

const routes: Routes = [
  { path: '', component: ProjectmanagerComponent },
  {path:'ProjectMenu',component:ProjectMenuComponent},
  {path:'ProjectPO',component:ProjectPOComponent},
  {path:'MaterialStatusReport',component:MaterialStatusReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectmanagerRoutingModule { }
