import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectCordinatorRoutingModule } from './project-cordinator-routing.module';
import { ProjectCordinatorComponent } from './project-cordinator.component';
import { AddProjectIndentComponent } from '../../ProjectCordinator/add-project-indent/add-project-indent.component';
import { ApproveProjectComponent } from '../../ProjectCordinator/approve-project/approve-project.component';
import { AddPoComponent } from 'src/app/StoreManager/add-po/add-po.component';
import { AddPoDashComponent } from '../../ProjectCordinator/add-po-dash/add-po-dash.component';
import { InventoryComponent } from '../../ProjectCordinator/inventory/inventory.component';


@NgModule({
  declarations: [
    ProjectCordinatorComponent,
    AddProjectIndentComponent,
    ApproveProjectComponent,
    AddPoComponent,
    AddPoDashComponent,
    InventoryComponent,
  ],
  imports: [
    CommonModule,
    ProjectCordinatorRoutingModule
  ]
})
export class ProjectCordinatorModule { }
