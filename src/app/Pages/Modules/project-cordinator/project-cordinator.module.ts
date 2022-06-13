import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectCordinatorRoutingModule } from './project-cordinator-routing.module';
import { ProjectCordinatorComponent } from './project-cordinator.component';
import { AddProjectIndentComponent } from '../../ProjectCordinator/add-project-indent/add-project-indent.component';


@NgModule({
  declarations: [
    ProjectCordinatorComponent,
    AddProjectIndentComponent
  ],
  imports: [
    CommonModule,
    ProjectCordinatorRoutingModule
  ]
})
export class ProjectCordinatorModule { }
