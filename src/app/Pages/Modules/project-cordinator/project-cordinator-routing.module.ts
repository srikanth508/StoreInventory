import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPoComponent } from 'src/app/StoreManager/add-po/add-po.component';
import { AddPoDashComponent } from '../../ProjectCordinator/add-po-dash/add-po-dash.component';
import { AddProjectIndentComponent } from '../../ProjectCordinator/add-project-indent/add-project-indent.component';
import { ApproveProjectComponent } from '../../ProjectCordinator/approve-project/approve-project.component';
import { InventoryComponent } from '../../ProjectCordinator/inventory/inventory.component';
import { ProjectCordinatorComponent } from './project-cordinator.component';
import { ReturnItemsComponent } from '../../ProjectCordinator/return-items/return-items.component';
import { ReturnItemsReportComponent } from '../../ProjectCordinator/return-items-report/return-items-report.component';

const routes: Routes = [
  { path: '', component: ProjectCordinatorComponent },
  { path: 'AddProjectIndent', component: AddProjectIndentComponent },
  { path: 'ApproveProject', component: ApproveProjectComponent },
  { path: 'AddPo', component: AddPoComponent },
  { path: 'AddPoDash', component: AddPoDashComponent },
  { path: 'Inventory', component: InventoryComponent },
  {path:'ReturnItems',component:ReturnItemsComponent},
  {path:'ReturnItemsReport',component:ReturnItemsReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectCordinatorRoutingModule { }
