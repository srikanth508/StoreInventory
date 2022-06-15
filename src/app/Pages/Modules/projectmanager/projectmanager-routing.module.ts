import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectmanagerComponent } from './projectmanager.component';
import { MaterialStatusReportComponent } from './projectcomponents/material-status-report/material-status-report.component';
import { ProjectMenuComponent } from './projectcomponents/project-menu/project-menu.component';
import { ProjectPOComponent } from './projectcomponents/project-po/project-po.component';
import { ReturnInventoryComponent } from './projectcomponents/return-inventory/return-inventory.component';

const routes: Routes = [
  { path: '', component: ProjectmanagerComponent },
  {path:'ProjectMenu',component:ProjectMenuComponent},
  {path:'ProjectPO',component:ProjectPOComponent},
  {path:'MaterialStatusReport',component:MaterialStatusReportComponent},
  {path:'ReturnInventory',component:ReturnInventoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectmanagerRoutingModule { }
