import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectCordinatorRoutingModule } from './project-cordinator-routing.module';
import { ProjectCordinatorComponent } from './project-cordinator.component';
import { AddProjectIndentComponent } from '../../ProjectCordinator/add-project-indent/add-project-indent.component';
import { ApproveProjectComponent } from '../../ProjectCordinator/approve-project/approve-project.component';


@NgModule({
  declarations: [
    ProjectCordinatorComponent,
    AddProjectIndentComponent,
    ApproveProjectComponent,
  ],
  imports: [
    CommonModule,
    ProjectCordinatorRoutingModule
  ]
})
export class ProjectCordinatorModule { }
