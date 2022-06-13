import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectIndentComponent } from '../../ProjectCordinator/add-project-indent/add-project-indent.component';
import { ApproveProjectComponent } from '../../ProjectCordinator/approve-project/approve-project.component';
import { ProjectCordinatorComponent } from './project-cordinator.component';


const routes: Routes = [
  { path: '', component: ProjectCordinatorComponent },
  { path: 'AddProjectIndent', component: AddProjectIndentComponent },
  { path: 'ApproveProject', component: ApproveProjectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectCordinatorRoutingModule { }
